/* =====================================================================
   app.js  —  THE ENGINE OF THE WEBSITE
   ---------------------------------------------------------------------
   You do NOT need to edit this file to add lessons. All the questions,
   texts and cards live in the content-*.js files (each has instructions
   at the top). This file only decides how things are DRAWN and what
   happens when you CLICK.

   Map of this file (search for the title in capitals):
     1. SAVED PROGRESS      what is remembered in the browser (localStorage)
     2. QUESTION BANK       turns content files into quiz questions
     3. TABS                the menu: sections and the tabs inside them
     4. QUIZ                multiple-choice engine + results + celebration
     5. WRITTEN ANSWERS     the writing boxes and quick checks
     6. VIEWS               one function per kind of page (quiz, cards ...)
     7. CLICKS AND TYPING   ACT = what each button does
   Tip: a "view" is just a function that builds HTML text and puts it on the
   page with layout(). A button needs data-act="name" and a matching ACT.name.
   ===================================================================== */
const $=id=>document.getElementById(id);
const shuffle=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
const words=s=>(s.match(/\S+/g)||[]).length;
const plain=s=>" "+s.toLowerCase().replace(/[^a-z0-9]+/g," ").trim()+" ";

/* ---------- Saved progress (stays in this browser) ---------- */
// "blank" is the empty save file. Add a new saved thing here, then use store.yourThing anywhere.
//   best = best score per quiz | skills = right/total per skill | wrong = ids of missed questions
//   drafts = written answers | done = finished activities | times = how often each question was missed
//   custom = questions and cards the user made | topics = saved essay topics | lessons = lessons finished
const blank=()=>({best:{},skills:{},wrong:[],drafts:{},build:{},done:{},times:{},custom:{cards:[],qs:[]},topics:[],lessons:0,lang:"both",known:{}});
let store=blank();
try{
  const saved=JSON.parse(localStorage.getItem("ef3"));
  if(saved) store={...store,...saved};
  else{ // keep answers written in the earlier version
    const old=JSON.parse(localStorage.getItem("evidence-paper"));
    old?.a?.forEach((d,i)=>{if(d.text) store.drafts["a"+(i+1)]=d});
  }
}catch(e){}
store.times??={};store.custom??={cards:[],qs:[]};store.topics??=[];store.lessons??=0;store.lang??="both";store.known??={};
const save=()=>{try{localStorage.setItem("ef3",JSON.stringify(store))}catch(e){}};

/* ---------- Question bank ---------- */
const Q={},SETS={};
function addSet(key,title,list){
  SETS[key]={title,ids:list.map((item,n)=>{const id=`${key}.${n}`;Q[id]=item;return id})};
}
for(const [id,list] of Object.entries(READ)) addSet(id,TEXTS[id].title,list.map(x=>({...x,text:id})));
const effectSet=(key,title,list)=>addSet(key,title,list.map(([name,ex,o])=>({s:key==="lang"?"Language effect":"Visual effect",ask:name,sub:"Which description fits this technique’s effect most precisely?",o,why:`Example: “${ex}”`,ev:[]})));
effectSet("lang","Language effects",LANG);
effectSet("vis","Visual effects",VIS);
addSet("name","Name the technique",NAME.map(([ex,o])=>{const known=LANG.find(r=>r[0]===o[0]);return {s:"Naming techniques",passage:`“${ex}”`,ask:"Which technique is mainly used here?",o,why:known?`${o[0]}: ${known[2][0].toLowerCase()}.`:`This is ${o[0].toLowerCase()}.`,ev:[]}}));
addSet("links","Linking words",LINKS.map(([text,o,why])=>({s:"Linking ideas",passage:text,ask:"Which linking words best fit the gap?",o,why,ev:[]})));
addSet("fix","Fix the paragraph",FIX.map(([text,ask,o,why])=>({s:"Paragraph judgement",passage:text,ask,o,why,ev:[]})));

addSet("more","Spot more techniques",techMoreQuiz()); // from content-more.js
addSet("m1","Module 1 quiz",M1_QUIZ);
addSet("nesa","NESA word quiz",NESA_QUIZ);
// "My quiz": questions the user wrote themselves (Me > Make my own). Rebuilt by syncMy().
SETS.my={title:"My quiz",ids:[]};
function syncMy(){
  SETS.my.ids=store.custom.qs.map(x=>{const id="my."+x.id;Q[id]={s:"My questions",ask:x.ask,o:x.o,why:x.why||"This is the key answer you chose.",ev:[]};return id});
}
syncMy();
for(const [set,list] of Object.entries(PLAIN)) SETS[set]?.ids.forEach((id,n)=>Q[id].plain=list[n]);
for(const set of ["lang","vis"]) SETS[set].ids.forEach(id=>Q[id].plain=`“${Q[id].ask}” is a tool that composers use. Which sentence best says what it usually does to meaning or to the audience?`);
SETS.name.ids.forEach(id=>Q[id].plain="Read the example. What is the name of the main writing tool in it?");
SETS.m1.ids.forEach(id=>Q[id].plain="Read the situation carefully. Which idea from Module 1 describes it best?");
SETS.nesa.ids.forEach(id=>Q[id].plain=Q[id].s==="English terms"?"What does this English course word mean?":"When you see this word in an exam, what job must your answer do?");

/* ---------- Help with wording ---------- */
// "text" is searched for hard words. Technique and NESA quizzes skip it where it would give the answer away.
function helpBox(plain,text=""){
  if(!plain) return "";
  const found=HARD.filter(([pattern])=>new RegExp(`\\b(${pattern})`,"i").test(text));
  return `<details class="plain"><summary>Explain in other words</summary><p><b>Another way to ask:</b> ${plain}</p>
  ${found.length?`<p><b>Hard words here:</b></p><dl>${found.map(([,word,meaning])=>`<div><dt>${word}</dt><dd>${meaning}</dd></div>`).join("")}</dl>`:""}</details>`;
}
// trans(): shows Vietnamese and/or Khmer, depending on the Translations menu (store.lang).
// vi = the Vietnamese text (can be empty). Khmer comes from KM in content-khmer.js.
function trans(word,vi){
  const l=store.lang,parts=[];
  if(vi&&(l==="vi"||l==="both")) parts.push(`<span lang="vi">${vi}</span>`);
  const km=KM[word.toLowerCase()];
  if(km&&(l==="km"||l==="both")) parts.push(`<span lang="km">${km}</span>`);
  return parts.join(" · ");
}
const synonyms=word=>SYN[word]?`Similar words: ${SYN[word]}`:"";

/* ---------- Tabs ---------- */
const byCat=cat=>Object.keys(TEXTS).filter(id=>TEXTS[id].cat===cat);
const quizTab=(id,name,sets)=>({id,name,view:"quiz",sets});
const SECTIONS=[
 {id:"home",name:"Home",tabs:[{id:"welcome",name:"Start here",view:"home"},{id:"howto",name:"How to study",view:"howto"}]},
 {id:"m1",name:"Module 1",tabs:[{id:"ideas",name:"Key ideas",view:"m1"},quizTab("m1quiz","Module 1 quiz",["m1"]),{id:"m1topics",name:"Essay topics",view:"topics"}]},
 {id:"tech",name:"Techniques",tabs:[quizTab("lang","Language effects",["lang"]),quizTab("vis","Visual effects",["vis"]),quizTab("name","Name the technique",["name"]),quizTab("more","Spot more techniques",["more"]),{id:"lessons",name:"Technique lessons",view:"lessons"},{id:"cards",name:"Flashcards",view:"cards",deck:"tech"}]},
 {id:"read",name:"Reading",tabs:[quizTab("poetry","Poetry",byCat("poetry")),quizTab("fiction","Fiction",byCat("fiction")),quizTab("nonfiction","Non-fiction",byCat("nonfiction")),quizTab("visual","Visual texts",byCat("visual")),quizTab("mix","Mixed 10",["mix"]),{id:"find",name:"Find the evidence",view:"find"}]},
 {id:"unseen",name:"Unseen texts",tabs:byCat("unseen").map(id=>({id,name:TEXTS[id].kind,view:"unseen",text:id}))},
 {id:"para",name:"Paragraphs",tabs:[{id:"rebuild",name:"Rebuild it",view:"rebuild"},{id:"spot",name:"Spot PEEL / TEEL",view:"spot"},quizTab("fix","Fix it",["fix"]),{id:"build",name:"Write your own",view:"build"}]},
 {id:"write",name:"Exam writing",tabs:[{id:"a",name:"Practice paper A",view:"paper",paper:PAPER_A},{id:"b",name:"Practice paper B",view:"paper",paper:PAPER_B},{id:"topics",name:"Topic maker",view:"topics"},{id:"phrases",name:"Sentence starters",view:"phrases"}]},
 {id:"skills",name:"Skills",tabs:[quizTab("links","Linking words",["links"]),quizTab("hsc","Short-answer skills",["hsc"]),{id:"vocab",name:"Vocabulary cards",view:"cards",deck:"vocab"}]},
 {id:"nesa",name:"NESA words",tabs:[{id:"verbs",name:"Question words",view:"glossary",list:NESA},{id:"terms",name:"English terms",view:"glossary",list:TERMS},{id:"nesacards",name:"Flashcards",view:"cards",deck:"nesa"},quizTab("nesaquiz","Quiz",["nesa"])]},
 {id:"bio",name:"Biology",tabs:[{id:"cards",name:"Module 5 flashcards",view:"cards",deck:"bio5"},{id:"map",name:"Syllabus map",view:"biomap"}]},
 {id:"me",name:"My progress",tabs:[{id:"overview",name:"Overview",view:"progress"},{id:"mistakes",name:"My mistakes",view:"mistakes"},{id:"custom",name:"Make my own",view:"custom"},quizTab("myquiz","My quiz",["my"]),{id:"mycards",name:"My cards",view:"cards",deck:"mine"}]}
];
const ui={sec:"home",tab:{},item:{},model:"PEEL",cardopt:{},mfilter:"",my:null};
const sessions={}; // unfinished activities, kept while you move between tabs
const section=()=>SECTIONS.find(s=>s.id===ui.sec);
const tab=()=>section().tabs.find(t=>t.id===ui.tab[ui.sec])||section().tabs[0];
const key=()=>`${ui.sec}/${tab().id}`;
const itemNo=()=>ui.item[key()]||0;

/* ---------- Shared pieces ---------- */
function reading(id,ev=[],vocab=true){
  const x=TEXTS[id];let content;
  if(x.art){
    const a=ART[x.art];
    content=`<svg class="visual" viewBox="0 0 400 520" role="img" aria-label="${a.label}">${a.svg}${ev.map(k=>{const [X,Y,W,H]=a.spots[k];return `<rect class="spot" x="${X}" y="${Y}" width="${W}" height="${H}" rx="8"/>`}).join("")}</svg>`;
  }else{
    const ranges=ev.map(e=>[x.body.indexOf(e),e.length]).filter(r=>r[0]>-1).sort((a,b)=>a[0]-b[0]);
    let out="",pos=0;
    for(const [at,len] of ranges){const end=at+len;if(end<=pos)continue;const from=Math.max(at,pos);out+=x.body.slice(pos,from)+"<mark>"+x.body.slice(from,end)+"</mark>";pos=end}
    content=`<div class="reading">${out+x.body.slice(pos)}</div>`;
  }
  const list=vocab&&x.vocab?.length?`<details class="vocab"><summary>Vocabulary with Vietnamese</summary><dl>${x.vocab.map(v=>`<div><dt>${v[0]}${trans(v[0],v[2])?" · "+trans(v[0],v[2]):""}</dt><dd>${v[1]}</dd><dd>${synonyms(v[0])}</dd></div>`).join("")}</dl></details>`:"";
  const kind=x.kind||({poetry:"Poetry",fiction:"Fiction",nonfiction:"Non-fiction",visual:"Visual text",skills:"Two short texts"})[x.cat];
  return `<section class="panel"><p class="kicker">${kind} · ${x.by}</p><h2>${x.title}</h2>${content}${list}</section>`;
}
const button=(act,label,cls="",extra="")=>`<button class="btn ${cls}" data-act="${act}" data-k="${act}" ${extra}>${label}</button>`;
function layout(left,right){
  const m=$("main");
  m.className=left?"":"solo";
  m.innerHTML=(left?`<div class="stack" id="reading">${left}</div>`:"")+right;
}

/* ---------- Timer ---------- */
let clock={id:null,left:0,end:0,running:false};
const mmss=s=>`${Math.floor(s/60)}:${String(s%60).padStart(2,"0")}`;
const remaining=()=>clock.running?Math.max(0,Math.ceil((clock.end-Date.now())/1000)):clock.left;
function timer(id,minutes){
  const mine=clock.id===id,left=mine?remaining():minutes*60;
  return `<div class="timer" data-id="${id}" data-secs="${minutes*60}"><span class="clock" role="timer">${mmss(left)}</span>
  <button class="btn quiet" data-act="timer" data-k="timer">${mine&&clock.running?"Pause":"Start timer"}</button><button class="btn quiet" data-act="timer-reset" data-k="timer-reset">Reset</button></div>`;
}
setInterval(()=>{
  const el=document.querySelector(".timer");
  if(!el||clock.id!==el.dataset.id||!clock.running)return;
  const left=remaining();
  el.querySelector(".clock").textContent=left?mmss(left):"Time’s up";
  if(!left){clock.running=false;clock.left=0;el.querySelector("[data-act=timer]").textContent="Start timer"}
},250);

/* ---------- Quiz ---------- */
const item=id=>({id,order:shuffle([0,1,2,3]),pick:null});
// A "round" is one go at a set of questions: {set, items, i (current question), done}
function newRound(set,filter=""){
  let ids;
  if(set==="mix") ids=shuffle(Object.keys(Q).filter(id=>Q[id].text&&TEXTS[Q[id].text].cat!=="unseen")).slice(0,10);
  else if(set==="mistakes") ids=store.wrong.filter(id=>Q[id]&&(!filter||Q[id].s===filter));
  else if(set==="my"){syncMy();ids=SETS.my.ids}
  else ids=SETS[set].ids;
  return {set,filter,items:ids.map(item),i:0,done:false,retry:false,start:Date.now()};
}
const isRight=it=>it.pick===0;
function quiz(r,{vocab=true,after=""}={}){
  if(!r.items.length) return layout("",`<section class="panel"><h2>${r.set==="my"?"No questions of your own yet":"No mistakes saved"}</h2><p>${r.set==="my"?"Open Make my own and write a question. You choose the key answer.":"Questions you get wrong appear here. Answer one correctly to remove it."}</p></section>`);
  if(r.done) return results(r,after);
  const it=r.items[r.i],c=Q[it.id],answered=it.pick!==null;
  const wasOpen=document.querySelector(".vocab")?.open;
  const dots=r.items.map((d,i)=>`<i class="${d.pick===null?"":isRight(d)?"ok":"bad"} ${i===r.i?"now":""}">${d.pick===null?i+1:isRight(d)?"✓":"✗"}</i>`).join("");
  const options=it.order.map((o,k)=>{
    const cls=!answered?"":o===0?"ok":o===it.pick?"bad":"";
    const tag=!cls?"":cls==="ok"?"✓ Correct":"✗ Your answer";
    return `<button class="${cls}" data-act="pick" data-v="${o}" data-k="pick${o}" ${answered?"disabled":""}><b>${"ABCD"[k]}</b><span>${c.o[o]}</span>${tag?`<span class="tag">${tag}</span>`:""}</button>`}).join("");
  layout(c.text?reading(c.text,answered?c.ev:[],vocab):"",`<section class="panel">
    <div class="dots" aria-label="Question ${r.i+1} of ${r.items.length}">${dots}</div>
    <span class="skill">${c.s}</span>${c.passage?`<p class="passage">${c.passage}</p>`:""}<h2>${c.ask}</h2>${c.sub?`<p class="note">${c.sub}</p>`:""}
    ${helpBox(c.plain,/^(name|nesa)\./.test(it.id)?"":/^(lang|vis)\./.test(it.id)?c.sub:[c.ask,...c.o].join(" "))}
    <div class="options">${options}</div>
    <div aria-live="polite">${answered?`<div class="feedback ${isRight(it)?"ok":"bad"}"><strong>${isRight(it)?"Right":"Wrong"}</strong><p>${c.why}</p></div>`:""}</div>
    <div class="actions">${r.i>0?button("prev","← Previous question","quiet"):""}${button("next",answered?(r.i<r.items.length-1?"Next question →":"See results"):(r.i<r.items.length-1?"Skip →":"Finish"),answered?"":"quiet")}${answered&&c.text&&c.ev.length?button("show","Show proof in the text","quiet phone"):""}</div></section>`);
  const v=document.querySelector(".vocab");if(v&&wasOpen)v.open=true;
}
/* ---------- Celebration ---------- */
// The little fish drawing used in the header and in celebrations.
const FISH_SVG=`<svg viewBox="0 0 64 40" aria-hidden="true"><path d="M42 20l20-13v26z" fill="var(--fish2)"/><path d="M3 20C14 4 34 4 46 20 34 36 14 36 3 20z" fill="var(--fish)"/><path d="M20 9q-2 11 0 22M29 7.5q-2 12.500 0 25" stroke="#fff" stroke-width="4" fill="none" opacity=".85"/><path d="M24 6q8-6 15 0" stroke="var(--fish2)" stroke-width="3" fill="none"/><circle cx="11" cy="17" r="3" fill="#fff"/><circle cx="10.500" cy="17" r="1.400" fill="#0d2b3a"/></svg>`;
// cheer() makes the happy box with falling confetti and a "what you did" list.
// Use it anywhere: cheer("Title", "Message", ["fact 1", "fact 2"])
const cheer=(title,message,facts=[])=>`<div class="cheer"><div class="party" aria-hidden="true">${Array.from({length:20},(_,i)=>`<i style="--x:${i*5}%;--d:${(i%7)*.22}s;--s:${8+(i%4)*5}px"></i>`).join("")}${FISH_SVG.replace("<svg",'<svg class="swimfish"')}</div>
  <h2>${title}</h2><p class="big-msg">${message}</p>${facts.length?`<h3>What you did</h3><ul class="facts">${facts.map(f=>`<li>${f}</li>`).join("")}</ul>`:""}</div>`;
const praise=pct=>pct>=90?"Outstanding work. You really know this.":pct>=70?"Great work. You are building strong skills.":pct>=50?"Good effort. Every question you review makes the next round easier.":"Well done for finishing. Mistakes are how learning sticks, so read the explanations and try again.";
const allDone=prefix=>Object.keys(store.done).filter(k=>k.startsWith(prefix)).length>=PARAS.length;
function results(r,after){
  const n=r.items.length,score=r.items.filter(isRight).length,missed=n-score,skills={};
  for(const it of r.items){const k=Q[it.id].s;skills[k]??=[0,0];skills[k][1]++;if(isRight(it))skills[k][0]++}
  const skipped=r.items.filter(i=>i.pick===null).length,pct=Math.round(score/n*100),secs=Math.max(1,Math.round(((r.end||Date.now())-(r.start||Date.now()))/1000));
  const ranked=Object.entries(skills).map(([k,[a,b]])=>[k,a/b]).sort((x,y)=>y[1]-x[1]);
  const facts=[`You answered ${n} question${n>1?"s":""} in ${mmss(secs)}.`,`Your score: ${score} out of ${n} (${pct}%).`];
  if(ranked.length>1){facts.push(`Strongest skill: ${ranked[0][0]}.`);if(ranked.at(-1)[1]<1)facts.push(`Practise next: ${ranked.at(-1)[0]}.`)}
  const wrong=missed-skipped;
  if(skipped) facts.push(`You skipped ${skipped} question${skipped>1?"s":""}. Use “Retry missed questions” to answer ${skipped>1?"them":"it"}.`);
  facts.push(wrong?`${wrong} wrong answer${wrong>1?"s were":" was"} saved in My progress > My mistakes so you can review ${wrong>1?"them":"it"}.`:"You made no wrong answers this round.");
  layout("",`<section class="panel">${cheer(r.retry?"Retry finished!":"Lesson complete!",praise(pct),facts)}
  <div class="scroll"><table><tr><th>Skill</th><th>Right</th></tr>${Object.entries(skills).map(([k,[a,b]])=>`<tr><td>${k}</td><td>${a} of ${b}</td></tr>`).join("")}</table></div>
  <div class="actions">${button("prev","← Back to last question","quiet")}${missed?button("missed","Retry missed questions"):""}${after}${button("again","Start again","quiet")}</div></section>`);
}
function currentRound(){
  if(tab().view==="unseen"||tab().view==="mistakes") return sessions[key()].round;
  return sessions[roundKey()];
}
const roundKey=()=>`${key()}/${tab().sets[itemNo()]}`;

/* ---------- Written answers ---------- */
const TECH={visual:/\b(salien\w*|vectors?|fram\w+|foreground|background|gaze|symbol\w*|colou?r\w*|contrast\w*|light\w*|composition|body language|position\w*|clothing|costume)\b/i,
 language:/\b(simile|metaphor|hyperbole|exaggerat\w*|imagery|dialogue|voice|anecdote|personif\w*|repetition|repeat\w*|contrast|symbol\w*|first[- ]person|tone|idiom|exclamation|list\w*|flashback|narrat\w*|irony|pronoun|sentence|comparison\w*)\b/i};
const COMPARE=/\b(similarly|whereas|in contrast|both|while|however|likewise|compared|on the other hand)\b/i;
function usesText(answer,body){ // true when three words in a row come from the text
  const w=plain(answer).trim().split(" "),b=plain(body);
  return w.some((_,k)=>k+2<w.length&&b.includes(` ${w.slice(k,k+3).join(" ")} `));
}
const draft=id=>store.drafts[id]??={text:"",shown:false,ticks:[]};
const tally=ticks=>ticks.filter(Boolean).length;
function quickChecks(w,text){
  const out=[[`At least ${w.words} words`,words(text)>=w.words]];
  if(w.tech) out.push(["Names a technique",TECH[w.tech].test(text)]);
  w.texts.filter(t=>TEXTS[t].body).forEach(t=>out.push([`Uses words from “${TEXTS[t].title}”`,usesText(text,TEXTS[t].body)]));
  if(w.compare) out.push(["Uses a comparing word",COMPARE.test(text)]);
  return out;
}
const checkList=list=>`<ul class="checks">${list.map(([label,ok])=>`<li class="${ok?"ok":"bad"}"><b>${ok?"✓":"✗"}</b> ${label}</li>`).join("")}</ul><p class="note">The quick check only looks for words and length. It cannot judge your ideas.</p>`;
const ticksBox=(crit,ticks,legend)=>`<fieldset><legend>${legend}</legend>${crit.map((c,k)=>`<label><input type="checkbox" id="tick${k}" data-tick="${k}" ${ticks[k]?"checked":""}><span>${c}</span></label>`).join("")}</fieldset><p class="mark-line" id="markline" aria-live="polite"></p>`;
const STIMULI=`<section class="panel"><p class="kicker">Writing stimulus</p><h2>Choose one</h2><div class="stimuli">
<figure><svg viewBox="0 0 160 100" role="img" aria-label="A bent house key"><g fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"><circle cx="35" cy="50" r="20"/><path d="M55 50h44l40 14M112 55l-5 14M130 61l-5 14"/></g></svg><figcaption>A bent house key</figcaption></figure>
<figure><svg viewBox="0 0 160 100" role="img" aria-label="A paper boat on water"><g fill="none" stroke="currentColor" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"><path d="M25 58h110l-24 24H49zM50 58l30-42 30 42M80 16v42M15 92q16-9 32 0t32 0 32 0 32 0"/></g></svg><figcaption>A paper boat</figcaption></figure></div></section>`;
let writing=null; // the written question on screen
function written(w,label,extra=""){
  writing=w;const d=draft(w.id),key_word=NESA.find(n=>n.word===w.verb);
  const review=!d.shown?"":`<h3>Quick check</h3>${checkList(quickChecks(w,d.text))}
    ${ticksBox(w.crit,d.ticks,w.marks?"Mark yourself: tick only what your answer really does":"Tick what your writing really does")}
    ${w.sample?`<details open><summary>Sample answer (one good way, not the only way)</summary><p class="sample">${w.sample}</p></details>`:""}`;
  layout(w.texts.length?w.texts.map(t=>reading(t,d.shown?w.ev[t]:[],tab().view!=="unseen")).join(""):STIMULI,`<section class="panel">${extra}
    <span class="skill">${label}${w.marks?` · ${w.marks} marks`:""}</span><h2>${w.ask}</h2><p class="note">${w.means}</p>
    ${helpBox(PLAIN_WRITE[w.id],w.ask)}${key_word?`<details><summary>NESA key word: ${key_word.word}</summary><p>${key_word.meaning}</p><p>${key_word.todo}</p></details>`:""}
    ${timer(w.id,w.mins)}<details><summary>Help me start</summary><p>${w.frame}</p></details>
    <label class="answer-label" for="answer">Your answer</label><textarea id="answer" rows="${w.marks&&w.marks<4?7:12}"></textarea><p class="note" id="count"></p>
    <div class="actions">${button("check",d.shown?"Check again":"Check my answer")}${d.shown&&w.texts.length?button("show","Show proof in the text","quiet phone"):""}</div>${review}</section>`);
  $("answer").value=d.text;$("count").textContent=`${words(d.text)} words`;markLine();
}
function markLine(){
  const el=$("markline");if(!el)return;
  if(tab().view==="topics"){el.textContent=`Checklist: ${tally(draft("topicplan").ticks)}/5`;return}
  if(tab().view==="build"){el.textContent=`Checklist: ${tally(buildDraft().ticks)}/4`;return}
  const w=writing,score=tally(draft(w.id).ticks);
  let text=w.marks?`This question: ${score}/${w.marks}.`:`Checklist: ${score}/${w.crit.length}`;
  if(tab().view==="paper"&&w.marks){
    const marked=tab().paper.filter(p=>p.marks);
    const total=marked.reduce((n,p)=>n+(draft(p.id).shown?tally(draft(p.id).ticks):0),0);
    text+=` Paper total so far: ${total}/${marked.reduce((n,p)=>n+p.marks,0)}.`;
  }
  el.textContent=text;
}

/* ---------- Views ---------- */
const VIEWS={
 quiz(){
  const set=tab().sets[itemNo()],k=roundKey();
  if(!sessions[k]) sessions[k]=newRound(set);
  quiz(sessions[k]);
 },
 unseen(){
  const id=tab().text,s=sessions[key()]??={step:1,round:newRound(id)};
  const steps=`<div class="steps">${["1 Read","2 Questions","3 Write"].map((t,i)=>`<span class="${s.step===i+1?"now":""}">${t}</span>`).join("")}</div>`;
  if(s.step===1) layout("",reading(id,[],false)+`<section class="panel">${steps}<h2>Read first</h2><p>Read the whole text twice. Ask who is speaking, what changes, and what the composer wants you to notice. The timer is optional.</p>${timer("read-"+id,3)}<div class="actions">${button("to-questions","I’ve read it: start questions")}</div></section>`);
  else if(s.step===2){
    quiz(s.round,{vocab:false,after:button("to-write","Write the short answer")});
    $("main").querySelector(".panel:last-child").insertAdjacentHTML("afterbegin",steps);
  }else{
    const w=UNSEEN_WRITE[id];
    written(w,"Unseen written question",steps+`<div class="actions">${button("to-read","Start this text again","quiet")}</div>`);
    const d=draft(w.id);
    if(d.shown){ // the whole text lesson is finished: show a summary
      const r=s.round.items,right=r.filter(isRight).length,checks=quickChecks(w,d.text);
      $("main").insertAdjacentHTML("beforeend",`<section class="panel">${cheer("Text lesson complete!","You read, answered and wrote. That is the full exam routine.",[`You read “${TEXTS[id].title}”.`,`Multiple choice: ${right} of ${r.filter(x=>x.pick!==null).length} answered right.`,`Your written answer: ${words(d.text)} words.`,`Quick checks passed: ${checks.filter(c=>c[1]).length} of ${checks.length}.`,`Self-marking ticks: ${tally(d.ticks)} of ${w.crit.length}.`])}</section>`);
    }
  }
 },
 paper(){const p=tab().paper,i=itemNo();written(p[i],`Question ${i+1} · ${p[i].verb}`,"")},
 cards(){
  const deck=tab().deck,o=ui.cardopt[key()]??={dir:"term",group:"all"};
  const known=store.known[deck]??=[];
  // a card picture comes from the card itself (cards you made) or from CARD_IMAGES in content-images.js
  const picture=x=>!x?null:typeof x==="string"?{src:x}:x;
  const all=cardList(deck,o.group).map(c=>({...c,id:deck+":"+c.term,im:picture(c.img||CARD_IMAGES[c.term])})).filter(c=>(o.dir!=="example"||c.ex)&&!(o.hide&&known.includes(c.id)));
  const s=sessions[key()]??={queue:shuffle(all),total:all.length,flipped:false,got:0,almost:0,notyet:0,hard:[],start:Date.now(),counted:false};
  const sel=(name,label,opts)=>`<label class="pick"><span>${label}</span><select data-opt="${name}">${opts.map(([v,t])=>`<option value="${v}" ${o[name]===v?"selected":""}>${t}</option>`).join("")}</select></label>`;
  const bio=deck==="bio5";
  const dirs=bio?[["term","Question → answer"],["meaning","Answer → question"]]:[["term","Term → meaning"],["meaning","Meaning → term"],...(deck==="tech"?[["example","Example → technique"]]:[])];
  const total=cardList(deck,"all").length,sure=known.filter(id=>id.startsWith(deck+":")).length;
  const options=`<div class="picks">${sel("dir","Show me first",dirs)}${deck==="tech"?sel("group","Which cards",Object.entries(CARD_GROUPS)):bio?sel("group","Which cards",Object.entries(BIO_GROUPS)):""}</div>
  <label class="chk"><input type="checkbox" data-opt="hide" ${o.hide?"checked":""}><span>Hide cards I already marked “Got it” (saved in this browser)</span></label>
  <p class="note">Saved “Got it” cards: ${sure} of ${total}. ${sure?button("cards-forget","Forget them","quiet small"):""}</p>`;
  if(!all.length&&!s.total) return layout("",`<section class="panel"><h2>${deck==="mine"?"No cards yet":"No cards here"}</h2><p>${deck==="mine"?"Open Make my own to create your first flashcard.":"Nothing to study with these options. Untick “Hide cards I already marked” or choose another set."}</p>${deck==="mine"?"":options}</section>`);
  if(!s.queue.length){
    if(!s.counted){s.counted=true;store.lessons++;save()}
    return layout("",`<section class="panel">${cheer("Deck finished!",s.notyet?"Great persistence. You kept the hard cards in the pile until you knew them.":"Brilliant. You knew these cards straight away.",[`You studied ${s.total} cards in ${mmss(Math.round((Date.now()-s.start)/1000))}.`,`Got it: ${s.got} times. Almost: ${s.almost}. Not yet: ${s.notyet}.`,s.hard.length?`Cards that needed extra practice: ${s.hard.slice(0,8).join(", ")}${s.hard.length>8?" and more":""}.`:"No card needed extra practice."])}
    ${options}<div class="actions">${button("cards-reset","Study the deck again")}</div></section>`);
  }
  const c=s.queue[0],ex=c.ex?`Example: “${c.ex}”`:"";
  let front,back;
  if(o.dir==="meaning"){front=c.meaning;back=[`<b>${c.term}</b>`,ex,...c.more]}
  else if(o.dir==="example"){front=`“${c.ex}”`;back=[`<b>${c.term}</b>`,c.meaning,...c.more]}
  else{front=c.term;back=[c.meaning,ex,...c.more]}
  const pic=c=>`<img class="cardimg" src="${c.im.src}" alt="${(c.im.alt||c.term).replace(/"/g,"&quot;")}">`;
  const ask=bio?(o.dir==="term"?"Say or write your answer before you flip.":"What question or term does this answer? Say it aloud."):o.dir==="term"?"Say the meaning aloud before you flip.":o.dir==="meaning"?"Which term has this meaning? Say it aloud.":"Which technique is this? Say it aloud.";
  layout("",`<section class="panel"><p class="kicker">${s.queue.length} cards left of ${s.total}. ${ask}</p>${options}
  <div class="card" aria-live="polite">${c.tag?`<p class="note tagline">${c.tag}</p>`:""}<div class="big">${front}</div>${c.im&&c.im.front&&o.dir==="term"?pic(c):""}${s.flipped?back.filter(Boolean).map((line,i)=>`<p class="${i?"note":""}">${line}</p>`).join("")+(c.im&&!(c.im.front&&o.dir==="term")?pic(c):""):""}</div>
  <div class="actions">${s.flipped?button("card-notyet","Not yet","quiet")+button("card-almost","Almost","quiet")+button("card-known","Got it"):button("flip","Flip card")}${button("cards-reset","Reshuffle","quiet")}</div>
  <p class="note">Not yet: comes back in 2 cards. Almost: comes back in 5. Got it: leaves the pile.</p></section>`);
 },
 biomap(){
  const count=k=>BIO.filter(b=>b[0]===k||b[0][0]===k).length;
  layout("",`<section class="panel"><span class="skill">Biology · Module 5 Heredity</span><h2>Syllabus map</h2>
  <p>Flashcards cover Inquiry Questions 1 to 3 and Inquiry Question 4 up to its second dot point. Press Study to open just those cards. These are original study notes based on the NSW Biology Stage 6 (2017) syllabus; check details with your teacher and textbook.</p>
  ${[1,2,3,4].map(n=>`<h3>${BIO_IQ[n]}</h3><div class="actions">${button("bio-study",`Study all ${count(String(n))} cards`,"",`data-v="${n}"`).replace('data-k="bio-study"',`data-k="bs${n}"`)}</div>
  <ul class="plainlist">${Object.entries(BIO_DP).filter(([k])=>k[0]==String(n)).map(([k,v])=>`<li>${k} ${v} <span class="note">(${count(k)} cards)</span> ${button("bio-study","Study","quiet small",`data-v="${k}"`).replace('data-k="bio-study"',`data-k="bs${k}"`)}</li>`).join("")}</ul>`).join("")}
  <p class="note">Not included yet: IQ4 dot point 3 (frequency data and SNPs) and IQ5 (population genetics).</p></section>`);
  $("main").className="wide";
 },
 lessons(){
  const f=ui.lf??={popular:false,off:[]}; // popular = only popular ones; off = groups that are unticked
  const idx=TECH_MORE.map((t,i)=>[t,i]).filter(([t])=>(!f.popular||POPULAR.includes(t[0]))&&!f.off.includes(t[1]));
  const box=(name,label,on)=>`<label class="chk"><input type="checkbox" data-lf="${name}" ${on?"checked":""}><span>${label}</span></label>`;
  layout("",`<section class="panel"><h2>Technique lessons</h2><p class="note">Use the tick boxes to choose which lessons to show. Open a lesson, read it, then press “Mark as read”. A ★ means the technique is popular in exams (a study-guide estimate: check with your teacher).</p>
  <div class="filters" role="group" aria-label="Choose lessons to show">${box("popular","★ Only popular in exams",f.popular)}${Object.entries(TECH_GROUPS).map(([g,name])=>box(g,name,!f.off.includes(g))).join("")}</div>
  <p class="mark-line" id="lessonline" aria-live="polite"></p><div id="lessoncheer"></div>
  <p class="note">Showing ${idx.length} of ${TECH_MORE.length} lessons.</p>
  <div>${Object.entries(TECH_GROUPS).map(([g,name])=>{const list=idx.filter(([t])=>t[1]===g);return list.length?`<h3>${name}</h3><div class="grid3">${list.map(([t,i])=>`<details><summary>${POPULAR.includes(t[0])?"★ ":""}${t[0]}</summary>
   <p><b>What it is:</b> ${t[2]}</p><p><b>Example:</b> “${t[3]}”</p><p><b>Write about the effect:</b> ${t[4]}</p><p class="note"><b>Avoid this mistake:</b> ${t[5]}</p>
   <button class="btn quiet small" data-act="lesson-read" data-v="${i}" data-k="lr${i}"></button></details>`).join("")}</div>`:""}).join("")||`<p class="note">No lessons match. Tick more boxes.</p>`}</div></section>`);
  $("main").className="wide";
  lessonStatus();
 },
 m1(){
  layout("",`<section class="panel"><span class="skill">Module 1</span><h2>Texts and human experiences</h2>
  <p>This module asks what it means to be human. You study one prescribed text and shorter texts, and show how composers represent experiences, choices and contradictions. Learn the ideas below, then try the Module 1 quiz and the Essay topics tab.</p>
  <p class="note">These are plain-English study notes, not NESA’s exact words. <a href="${M1_LINK}" target="_blank" rel="noopener">Read the official Year 12 page on the NSW curriculum website</a>. Check your own prescribed text with your teacher.</p>
  <div class="cols">${M1_IDEAS.map(([n,m,ask,start])=>`<details><summary>${n}</summary><p>${m}</p><p><b>Ask the text:</b> ${ask}</p><p><b>Sentence starter:</b> ${start}</p></details>`).join("")}</div></section>`);
  $("main").className="wide";
 },
 home(){
  const GO={m1:"Learn the Module 1 ideas, take the quiz, make essay topics.",tech:"Lessons, flashcards and quizzes on language and visual techniques.",read:"Close reading with questions that need real evidence from the text.",unseen:"Read a new text, answer questions, then write.",para:"Rebuild, label, fix and write PEEL and TEEL paragraphs.",write:"Practice papers, the topic maker and sentence starters.",skills:"Linking words, short-answer skills and vocabulary cards.",nesa:"NESA key words and English terms.",bio:"Biology Module 5 (Heredity) flashcards for IQ1 to IQ4 dot point 2.",me:"Your progress, your mistakes and your own questions."};
  layout("",`<section class="panel"><h2>Welcome to Evidence Finder</h2>
  <p class="big-msg">Practise HSC English EAL/D, one small step at a time.</p>
  <p><b>Purpose.</b> This site helps you get ready for <b>Module 1: Texts and human experiences</b>. You learn the words and techniques, read closely, prove every answer with evidence from the text, and then build your own paragraphs and extended responses.</p>
  <p><b>Biology too.</b> The Biology section has flashcards for Module 5 (Heredity). It is separate from the English work.</p>
  <p><b>No AI marking.</b> The answers are fixed and every wrong answer comes with a reason, so you can trust what you see. Your progress is saved only in this browser.</p>
  <h3>Start in this order</h3><ol class="plainlist">
   <li><b>Module 1 > Key ideas.</b> Learn what “human experiences” covers.</li>
   <li><b>Techniques.</b> Read the lessons, then use the flashcards and quizzes.</li>
   <li><b>Reading and Unseen texts.</b> Answer questions and find the proof.</li>
   <li><b>Paragraphs.</b> Practise PEEL and TEEL.</li>
   <li><b>Exam writing.</b> Make a topic, plan it and write.</li>
   <li><b>My progress > My mistakes.</b> Fix what you missed.</li></ol>
  <h3>Choose a section</h3><div class="gogrid">${SECTIONS.filter(x=>x.id!=="home").map(x=>`<button data-act="section" data-v="${x.id}" data-k="go-${x.id}"><b>${x.name}</b><small>${GO[x.id]||""}</small></button>`).join("")}</div>
  <h3>Language help</h3><p>Pick Vietnamese, Khmer, both, or English only from the <b>Translations</b> menu at the top of the page. It changes the vocabulary cards, the reading word lists and the NESA words. Khmer was written by AI, so please ask a teacher to check it.</p>
  <p class="note">Curriculum source: <a href="${M1_LINK}" target="_blank" rel="noopener">NSW curriculum, English EAL/D Year 12</a>. All texts here are original practice material, apart from the public-domain poem “Solitude”.</p></section>`);
  $("main").className="wide";
 },
 howto(){
  layout("",`<section class="panel"><h2>How to use this site</h2>
  <h3>In a quiz</h3><ul class="plainlist"><li>Read the whole question and all four choices. The choices are close on purpose, so scanning for a key word will not work.</li>
   <li>After you choose, read the reason, even when you were right.</li>
   <li>Use <b>← Previous</b> and <b>Next →</b> (or the left and right arrow keys) to move freely. <b>Skip</b> lets you come back later.</li>
   <li>Stuck on the wording? Press <b>Explain in other words</b>.</li></ul>
  <h3>Flashcards</h3><ul class="plainlist"><li>Say the answer out loud before you flip.</li><li>“Not yet” brings the card back soon. “Got it” removes it.</li><li>Use the menus to change direction or choose popular techniques.</li></ul>
  <h3>Writing</h3><ul class="plainlist"><li>Write first. Then use the quick check and tick your own checklist.</li><li>Use the Topic maker to get a new essay question whenever you want.</li></ul>
  <h3>Three study plans</h3>
  <p><b>10 minutes a day:</b> one quiz or one flashcard deck, then look at My mistakes.</p>
  <p><b>30 minutes:</b> read one text, answer its questions, then rebuild one paragraph.</p>
  <p><b>Week before the exam:</b> a practice paper with the timer, one topic from the Topic maker, and a review of My mistakes.</p></section>`);
  $("main").className="wide";
 },
 mistakes(){
  const s=sessions[key()];
  if(s?.round) return quiz(s.round,{vocab:false,after:button("mistakes-back","Back to my mistakes","quiet")});
  const valid=store.wrong.filter(id=>Q[id]),skills=[...new Set(valid.map(id=>Q[id].s))];
  if(ui.mfilter&&!skills.includes(ui.mfilter)) ui.mfilter="";
  const ids=valid.filter(id=>!ui.mfilter||Q[id].s===ui.mfilter).sort((a,b)=>(store.times[b]||1)-(store.times[a]||1));
  const card=id=>{const c=Q[id];return `<article class="mistake"><span class="skill">${c.s}</span>${c.text?`<p class="note">From “${TEXTS[c.text].title}”</p>`:""}${c.passage?`<p class="passage">${c.passage}</p>`:""}
   <h3>${c.ask}</h3><p><b>Right answer:</b> ${c.o[0]}</p><p>${c.why}</p><p class="note">Missed ${store.times[id]||1} time${(store.times[id]||1)>1?"s":""}.</p>${helpBox(c.plain,c.ask)}
   <button class="btn quiet small" data-act="mistake-clear" data-v="${id}" data-k="mc-${id}">I understand this now</button></article>`};
  if(!valid.length) return layout("",`<section class="panel"><h2>No mistakes saved</h2><p>Questions you miss appear here with the right answer and the reason. Nothing to review right now.</p></section>`);
  layout("",`<section class="panel"><h2>My mistakes</h2><p class="note">${valid.length} to review, most-missed first. Read the right answer and the reason, then practise. A question leaves this list when you answer it correctly, or when you press “I understand this now”.</p>
  <div class="picks"><label class="pick"><span>Show skill</span><select data-opt="mfilter"><option value="">All skills (${valid.length})</option>${skills.map(k=>`<option ${ui.mfilter===k?"selected":""} value="${k}">${k} (${valid.filter(id=>Q[id].s===k).length})</option>`).join("")}</select></label></div>
  <div class="actions">${button("mistakes-start",`Practise these ${ids.length}`)}</div>
  ${ids.map(card).join("")}</section>`);
 },
 custom(){
  const m=ui.my??={q:"",o:["","","",""],right:0,why:"",front:"",back:"",img:""};
  layout("",`<section class="panel"><h2>Make my own questions</h2><p class="note">You decide the key answer. Write a question, type four choices, then tick the circle beside the correct one. Everything is saved in this browser. Play your questions in My quiz.</p>
  <label class="answer-label" for="my-q">Question</label><textarea id="my-q" data-my="q" rows="2"></textarea>
  ${[0,1,2,3].map(i=>`<div class="myopt"><input type="radio" name="right" data-myright="${i}" ${m.right===i?"checked":""} aria-label="Option ${"ABCD"[i]} is the correct answer"><input type="text" id="my-o${i}" data-my="o${i}" placeholder="Choice ${"ABCD"[i]}" aria-label="Choice ${"ABCD"[i]}"></div>`).join("")}
  <label class="answer-label" for="my-why">Why is it right? (optional)</label><textarea id="my-why" data-my="why" rows="2"></textarea>
  <div class="actions">${button("my-addq","Save question")}</div><p class="note" id="mymsg" aria-live="polite">${ui.mymsg||""}</p>
  <h3>Make a flashcard</h3><label class="answer-label" for="my-front">Front (the term or question)</label><input type="text" id="my-front" data-my="front">
  <label class="answer-label" for="my-back">Back (the answer)</label><textarea id="my-back" data-my="back" rows="2"></textarea>
  <label class="answer-label" for="my-img">Picture (optional, from your device)</label><input type="file" id="my-img" accept="image/*">
  ${m.img?`<img class="cardimg" src="${m.img}" alt="Preview of your picture">${button("my-noimg","Remove picture","quiet small")}`:""}
  <div class="actions">${button("my-addcard","Save card")}</div>
  <h3>My questions (${store.custom.qs.length})</h3>${store.custom.qs.length?`<ul class="plainlist">${store.custom.qs.map(x=>`<li>${x.ask} <b>Key: ${x.o[0]}</b> ${button("my-delq","Delete","quiet small",`data-v="${x.id}"`).replace('data-k="my-delq"',`data-k="dq${x.id}"`)}</li>`).join("")}</ul>`:`<p class="note">None yet.</p>`}
  <h3>My cards (${store.custom.cards.length})</h3>${store.custom.cards.length?`<ul class="plainlist">${store.custom.cards.map((x,i)=>`<li>${x.front}: ${x.back}${x.img?" (with picture)":""} ${button("my-delcard","Delete","quiet small",`data-v="${i}"`).replace('data-k="my-delcard"',`data-k="dc${i}"`)}</li>`).join("")}</ul>`:`<p class="note">None yet.</p>`}</section>`);
  $("my-q").value=m.q;$("my-why").value=m.why;$("my-front").value=m.front;$("my-back").value=m.back;m.o.forEach((x,i)=>$("my-o"+i).value=x);
  ui.mymsg="";
 },
 glossary(){
  const list=tab().list,verbs=list===NESA;
  const entry=n=>`<details data-word="${n.word.toLowerCase()} ${n.similar.toLowerCase()}"><summary>${n.word}${trans(n.word,n.vi)?" · "+trans(n.word,n.vi):""}</summary><p>${n.meaning}</p>${n.todo?`<p><b>In your answer:</b> ${n.todo}</p>`:""}<p class="note">Similar words: ${n.similar}</p></details>`;
  layout("",`<section class="panel"><h2>${verbs?"NESA question words":"English course terms"}</h2>
  <p class="note">${verbs?`Plain-English versions of NESA’s glossary. <a href="${NESA_LINK}" target="_blank" rel="noopener">Read the official wording on the NESA website</a>.`:"Simple study definitions of words used in HSC English. These are not official NESA wording."}</p>
  <label class="answer-label" for="search">Search</label><input id="search" type="search" placeholder="Type a word">
  ${verbs?`<h3>Often useful in English</h3>${list.filter(n=>n.common).map(entry).join("")}<h3>Other NESA key words</h3>${list.filter(n=>!n.common).map(entry).join("")}`:list.map(entry).join("")}
  <p class="note" id="nomatch" hidden>No word matches. Try fewer letters.</p></section>`);
  $("main").className="wide";
 },
 find(){
  const s=sessions[key()]??={order:shuffle(FIND.map((_,i)=>i)),i:0,pick:null,score:0,picks:[],start:Date.now()};
  if(s.i>=s.order.length) return layout("",`<section class="panel">${cheer("Evidence hunt complete!",praise(Math.round(s.score/s.order.length*100)),[`You searched ${s.order.length} texts for proof.`,`You found the right line ${s.score} times.`,`Time: ${mmss(Math.round((Date.now()-s.start)/1000))}.`])}<div class="actions">${button("find-prev","← Back to last question","quiet")}${button("find-reset","Start again")}</div></section>`);
  const [id,ask,part,why]=FIND[s.order[s.i]],parts=segments(id),answered=s.pick!==null,ok=answered&&parts[s.pick].includes(part);
  layout("",`<section class="panel"><span class="skill">Find the evidence · ${s.i+1} of ${s.order.length}</span><h2>${ask}</h2><p class="note">From “${TEXTS[id].title}”. Read it all before you choose.</p>${helpBox(PLAIN_FIND[s.order[s.i]],ask)}
  <div class="segments">${parts.map((p,n)=>`<button class="segment ${!answered?"":p.includes(part)?"ok":n===s.pick?"bad":""}" data-act="segment" data-v="${n}" data-k="seg${n}" ${answered?"disabled":""}>${answered&&p.includes(part)?"✓ ":answered&&n===s.pick?"✗ ":""}${p}</button>`).join("")}</div>
  <div aria-live="polite">${answered?`<div class="feedback ${ok?"ok":"bad"}"><strong>${ok?"Right":"Wrong"}</strong><p>${why}</p></div>`:""}</div><div class="actions">${s.i>0?button("find-prev","← Previous question","quiet"):""}${button("find-next",answered?"Next →":"Skip →",answered?"":"quiet")}</div></section>`);
 },
 rebuild(){
  const n=itemNo(),p=PARAS[n];
  const s=sessions[`${key()}/${n}`]??={pool:scrambled(p.s.length),placed:[],checked:false};
  const done=s.checked&&s.placed.every((v,i)=>v===i);
  const row=(v,act,label,cls="")=>`<li><button class="sentence ${cls}" data-act="${act}" data-v="${v}" data-k="${act}${v}" ${done?"disabled":""}><b>${label}</b><span>${p.s[v][1]}</span></button></li>`;
  layout("",`<section class="panel"><span class="skill">Rebuild the paragraph</span><h2>${p.ask}</h2><p class="note">The sentences are separated. Tap them in the order that makes a connected paragraph. Follow the linking words.</p>${helpBox(PLAIN_PARA[n],p.ask)}
  <details><summary>Show the text it is about</summary>${reading(p.text,[],false)}</details>
  <h3>Your paragraph</h3><div class="drop">${s.placed.length?`<ol class="sentence-list">${s.placed.map((v,i)=>row(v,"unplace",s.checked?(v===i?"✓":"✗"):i+1,s.checked?(v===i?"ok":"bad"):"")).join("")}</ol>`:`<p class="note">Tap the first sentence below. Tap a placed sentence to remove it.</p>`}</div>
  ${s.pool.length?`<h3>Sentences</h3><ul class="sentence-list">${s.pool.map(v=>row(v,"place","+")).join("")}</ul>`:""}
  <div aria-live="polite">${s.checked?`<div class="feedback ${done?"ok":"bad"}"><strong>${done?"Right":"Not yet"}</strong><p>${done?"Read your connected paragraph:":`${s.placed.filter((v,i)=>v===i).length} of ${p.s.length} sentences are in the right place.`}</p>${done?`<p class="sample">${p.s.map(x=>x[1]).join(" ")}</p>`:""}</div>`:""}</div>
  ${done&&allDone("rebuild")?cheer("All paragraphs rebuilt!","You can now hear how a connected paragraph flows.",[`You rebuilt all ${PARAS.length} paragraphs.`,"You used linking words to find the order."]):""}
  <div class="actions">${done?(n<PARAS.length-1?button("para-next","Next paragraph"):""):s.checked?button("para-fix","Fix the wrong ones"):button("para-check","Check order","",s.pool.length?"disabled":"")}${button("para-reset","Start again","quiet")}${done?"":button("para-show","Show answer","quiet")}</div></section>`);
 },
 spot(){
  const n=itemNo(),p=PARAS[n],s=sessions[`${key()}/${n}`]??={labels:[],checked:false};
  const names=ui.model==="PEEL"?{P:"Point",E:"Evidence",X:"Explanation",L:"Link"}:{P:"Topic sentence",E:"Evidence",X:"Explanation",L:"Link"};
  const all=p.s.every((_,i)=>s.labels[i]),score=p.s.filter((x,i)=>s.labels[i]===x[0]).length;
  layout("",`<section class="panel"><span class="skill">Spot the structure</span><h2>${p.ask}</h2>
  <div class="roles" role="group" aria-label="Structure name">${["PEEL","TEEL"].map(m=>`<button data-act="model" data-v="${m}" data-k="model${m}" aria-pressed="${ui.model===m}">${m}</button>`).join("")}</div>
  <p class="note">Label every sentence. A part can appear more than once.</p>${helpBox(PLAIN_PARA[n],p.ask)}
  <details><summary>What does each part do?</summary><dl><div><dt>${names.P}</dt><dd>States the main idea that answers the question.</dd></div><div><dt>Evidence</dt><dd>Gives the quotation or detail from the text.</dd></div><div><dt>Explanation</dt><dd>Shows how that evidence creates meaning.</dd></div><div><dt>Link</dt><dd>Draws the idea together and returns to the question.</dd></div></dl></details>
  <details><summary>Show the text it is about</summary>${reading(p.text,[],false)}</details>
  <div class="sentence-list">${p.s.map(([role,text],i)=>`<div class="sentence ${!s.checked?"":s.labels[i]===role?"ok":"bad"}"><span>${text}</span>
   <div class="roles" role="group" aria-label="Part for sentence ${i+1}">${Object.entries(names).map(([r,label])=>`<button data-act="role" data-v="${i}:${r}" data-k="role${i}${r}" aria-pressed="${s.labels[i]===r}" ${s.checked?"disabled":""}>${label}</button>`).join("")}</div>
   ${s.checked?`<b>${s.labels[i]===role?"✓ Right":`✗ This is the ${names[role].toLowerCase()}`}</b>`:""}</div>`).join("")}</div>
  <div aria-live="polite">${s.checked?`<p class="mark-line">${score} of ${p.s.length} parts right.</p>`:""}</div>
  ${s.checked&&allDone("spot")?cheer("Every structure spotted!","You can now find the point, evidence, explanation and link in any paragraph.",[`You labelled the parts of all ${PARAS.length} paragraphs.`]):""}
  <div class="actions">${s.checked?button("spot-reset","Try again","quiet")+(n<PARAS.length-1?button("para-next","Next paragraph"):""):button("spot-check","Check labels","",all?"":"disabled")}</div></section>`);
 },
 build(){
  const b=BUILD[itemNo()],d=buildDraft();
  const parts=[["P","Point","Answer the question with one clear idea."],["E","Evidence","Quote the text or name a detail."],["X","Explanation","Show how the evidence creates meaning."],["L","Link","Return to the question."]];
  const checks=[["Point has at least 8 words",words(d.P||"")>=8],
    TEXTS[b.text].body?["Evidence uses words from the text",usesText(d.E||"",TEXTS[b.text].body)]:["Evidence names a visual technique or detail",TECH.visual.test(d.E||"")||words(d.E||"")>=8],
    ["Explanation has at least 15 words",words(d.X||"")>=15],
    ["Link repeats a key word from the question",plain(b.ask).trim().split(" ").filter(w=>w.length>4&&!["story","writer","readers","cartoon"].includes(w)).some(w=>plain(d.L||"").includes(" "+w))]];
  layout(reading(b.text),`<section class="panel"><span class="skill">Write a ${ui.model} paragraph</span><h2>${b.ask}</h2>${helpBox(PLAIN_BUILD[b.id],b.ask)}
  ${parts.map(([r,name,help])=>`<label class="answer-label" for="part${r}">${r==="P"&&ui.model==="TEEL"?"Topic sentence":name}</label><p class="note">${help}</p><textarea id="part${r}" data-part="${r}" rows="${r==="X"?4:2}"></textarea>`).join("")}
  <h3>Your connected paragraph</h3><p class="passage" id="preview"></p>
  <div class="actions">${button("build-check","Check my paragraph")}${button("copy","Copy paragraph","quiet")}</div><p class="note" id="copied" aria-live="polite"></p>
  ${d.shown?`<h3>Quick check</h3>${checkList(checks)}${ticksBox(["My point answers the question","My evidence proves my point","My explanation says HOW, and does not just retell","My link ties back without adding a new idea"],d.ticks,"Mark yourself")}`:""}</section>`);
  parts.forEach(([r])=>$("part"+r).value=d[r]||"");preview();markLine();
 },
 phrases(){
  layout("",`<section class="panel"><h2>Sentence starters</h2><p class="note">Fill the dots with your own ideas and evidence. Do not copy a starter word for word into every paragraph.</p>
  ${PHRASES.map(([name,list],i)=>`<details ${i?"":"open"}><summary>${name}</summary><ul class="plainlist">${list.map(x=>`<li>${x}</li>`).join("")}</ul></details>`).join("")}</section>`);
 },
 topics(){
  const t=ui.topic??={verb:"",a:"",b:"",cur:null};
  if(!t.cur) roll();
  const c=t.cur,text=topicText(c),total=TOPIC_VERBS.length*TOPIC_IDEAS.length*(TOPIC_IDEAS.length-1)*TOPIC_ANGLES.length*TOPIC_FORMS.length;
  const nk=NESA.find(n=>n.word.toLowerCase()===c.V.toLowerCase().split(" ")[0]);
  const idea=w=>TOPIC_IDEAS.find(x=>x[0]===w)[1];
  const pick=(name,field,list)=>`<label class="pick"><span>${name}</span><select data-sel="${field}"><option value="">Random</option>${list.map(x=>`<option ${t[field]===x?"selected":""}>${x}</option>`).join("")}</select></label>`;
  const d=draft("topicplan");
  const crit=["My thesis answers the key word, not just the topic","Each body paragraph uses PEEL or TEEL with a quotation or detail","I used a technique and said its effect","I linked both ideas, not only one","My conclusion returns to the question"];
  layout("",`<section class="panel"><span class="skill">Extended response topic maker</span><h2>${text}</h2>
  <p class="note">About ${total.toLocaleString()} different topics are possible from these key words, ideas and angles. Choose your own words below or press New topic.</p>
  <div class="picks">${pick("Key word","verb",TOPIC_VERBS)}${pick("Idea 1","a",TOPIC_IDEAS.map(x=>x[0]))}${pick("Idea 2","b",TOPIC_IDEAS.map(x=>x[0]))}</div>
  <div class="actions">${button("topic-new","New topic")}${button("topic-notext",t.noText?"✓ “Prescribed text” removed. Press to bring it back":"Remove “prescribed text” from topics","quiet",`aria-pressed="${!!t.noText}"`)}${button("topic-save","Save this topic","quiet")}</div>
  <details open><summary>What the key word asks: ${c.V}</summary>${nk?`<p>${nk.meaning}</p><p>${nk.todo}</p>`:`<p>Give reasons and use evidence. Show how and why, not only what.</p>`}</details>
  <details><summary>Think about your ideas</summary><p><b>${cap(c.a)}:</b> ${idea(c.a)}</p><p><b>${cap(c.b)}:</b> ${idea(c.b)}</p></details>
  <details><summary>Plan frame</summary><ol class="plainlist"><li><b>Introduction:</b> answer the key word “${c.V.toLowerCase()}”, name ${c.a} and ${c.b}, and give one claim.</li>
   <li><b>Body 1:</b> ${c.a}. Evidence from an early part of your text, the technique, its effect.</li>
   <li><b>Body 2:</b> ${c.b}. Evidence from a different part, the technique, its effect.</li>
   <li><b>Body 3:</b> how ${c.a} and ${c.b} affect each other, or how they change by the end. Focus on ${c.g}.</li>
   <li><b>Conclusion:</b> return to the question in new words.</li></ol></details>
  ${timer("topic-plan",40)}
  <label class="answer-label" for="plan">Your plan or practice answer</label><textarea id="plan" rows="10" placeholder="${t.noText?"Plan or write your answer here.":"Write the name of your prescribed text, then plan or write here."}"></textarea><p class="note" id="count"></p>
  ${ticksBox(crit,d.ticks,"Check your plan or answer")}
  <h3>Saved topics</h3>${store.topics?.length?`<ul class="plainlist">${store.topics.map((x,i)=>`<li>${x} ${button("topic-del","Remove","quiet small",`data-v="${i}"`).replace('data-k="topic-del"',`data-k="topic-del${i}"`)}</li>`).join("")}</ul>`:`<p class="note">Topics you save appear here.</p>`}</section>`);
  $("plan").value=d.text;$("count").textContent=`${words(d.text)} words`;markLine();
 },
 progress(){
  const skills=Object.entries(store.skills),right=skills.reduce((n,s)=>n+s[1][0],0),total=skills.reduce((n,s)=>n+s[1][1],0);
  const count=prefix=>Object.keys(store.done).filter(k=>k.startsWith(prefix)).length;
  const marks=[...PAPER_A,...PAPER_B,...Object.values(UNSEEN_WRITE)].filter(w=>store.drafts[w.id]?.shown);
  const name=w=>w.id.startsWith("u-")?`Unseen: ${TEXTS[w.texts[0]].title}`:`Paper ${w.id[0].toUpperCase()}, question ${w.id.slice(1)}`;
  layout("",`<section class="panel"><h2>Your progress</h2>
  <div class="score">${total?Math.round(right/total*100)+"%":"0"}</div><p>${total?`${right} right from ${total} answers.`:"No answers yet. Start any quiz and your results appear here."}</p>
  <p>Lessons finished: ${store.lessons}. Technique lessons read: ${TECH_MORE.filter((_,i)=>store.done["lesson"+i]).length}/${TECH_MORE.length}.</p><p>Paragraphs rebuilt: ${count("rebuild")}/${PARAS.length}. Structures spotted: ${count("spot")}/${PARAS.length}. Mistakes to review: ${store.wrong.length}.</p>
  ${total?`<h3>By skill, weakest first</h3><div class="scroll"><table><tr><th>Skill</th><th>Right</th><th></th></tr>${skills.sort((a,b)=>a[1][0]/a[1][1]-b[1][0]/b[1][1]).map(([k,[a,b]])=>`<tr><td>${k}</td><td>${a}/${b}</td><td><div class="bar"><i style="width:${a/b*100}%"></i></div></td></tr>`).join("")}</table></div>`:""}
  ${marks.length?`<h3>Written self-marks</h3><table>${marks.map(w=>`<tr><td>${name(w)}</td><td>${tally(store.drafts[w.id].ticks)}/${w.marks||w.crit.length}</td></tr>`).join("")}</table>`:""}
  <div class="actions">${store.wrong.length?button("go-mistakes","Review my mistakes"):""}${button("reset",sessions.confirmReset?"Yes, erase everything":"Reset all progress","quiet")}${sessions.confirmReset?button("reset-no","Keep my progress"):""}</div></section>`);
 }
};
/* ---------- Flashcard decks ---------- */
// Each card is {term, meaning, ex (example, may be empty), more (extra lines), group}.
// To add cards: add techniques in content-more.js, words in content-practice.js, or use Make my own.
// Biology filter menu: "all", a whole inquiry question ("1"), or one dot point ("1.2")
const BIO_GROUPS={all:"All cards (IQ1 to IQ4 dot point 2)",...Object.fromEntries([1,2,3,4].flatMap(n=>[[String(n),BIO_IQ[n].slice(0,60)+(BIO_IQ[n].length>60?"…":"")+" (all)"],...Object.entries(BIO_DP).filter(([k])=>k[0]==String(n)).map(([k,v])=>[k,"   "+k+" "+(v.length>58?v.slice(0,58)+"…":v)])]))};
const CARD_GROUPS={all:"All techniques",popular:"★ Popular in exams",core:"Core language",visual:"Visual",...Object.fromEntries(Object.entries(TECH_GROUPS).filter(([g])=>g!=="visual"))};
function cardList(deck,group){
  if(deck==="tech"){
    const list=[
      ...LANG.map(([n,ex,o])=>({term:n,meaning:o[0],ex,more:[],group:"core"})),
      ...VIS.map(([n,ex,o])=>({term:n,meaning:o[0],ex,more:[],group:"visual"})),
      ...TECH_MORE.map(t=>({term:t[0],meaning:t[2],ex:t[3],more:[`Write about it: ${t[4]}`],group:t[1]}))];
    return group==="all"?list:group==="popular"?list.filter(c=>POPULAR.includes(c.term)):list.filter(c=>c.group===group);
  }
  if(deck==="bio5"){ // Biology Module 5: group = "1", "1.2" etc. (see content-biology.js)
    const cards=BIO.map(([dp,q,a])=>({term:q,meaning:a,ex:"",more:[],group:dp,tag:`IQ${dp[0]} · ${dp} ${BIO_DP[dp]}`}));
    return group==="all"?cards:cards.filter(c=>c.group===group||c.group[0]===group);
  }
  if(deck==="nesa") return [...NESA,...TERMS].map(n=>({term:n.word,meaning:n.meaning,ex:"",more:[`Similar words: ${n.similar}`,trans(n.word,n.vi)]}));
  if(deck==="mine") return store.custom.cards.map(c=>({term:c.front,meaning:c.back,ex:"",more:[],img:c.img}));
  const seen=new Map(); // vocabulary: one card per word, with synonyms and Vietnamese
  for(const t of Object.values(TEXTS)) for(const v of t.vocab||[]) if(!seen.has(v[0])) seen.set(v[0],{term:v[0],meaning:v[1],ex:"",more:[synonyms(v[0]),trans(v[0],v[2])].filter(Boolean)});
  return [...seen.values()];
}
function lessonStatus(){
  const n=TECH_MORE.length,read=TECH_MORE.filter((_,i)=>store.done["lesson"+i]).length;
  const line=$("lessonline");if(!line)return;
  line.textContent=`Lessons read: ${read} of ${n}`;
  TECH_MORE.forEach((_,i)=>{const b=document.querySelector(`[data-act="lesson-read"][data-v="${i}"]`);if(b)b.textContent=store.done["lesson"+i]?"✓ Read (press to undo)":"Mark as read"});
  $("lessoncheer").innerHTML=read===n?cheer("All technique lessons read!","Fantastic. Now test yourself in Spot more techniques and the flashcards.",[`You read ${n} technique lessons.`,"You can now name, explain and write about each one."]):"";
  if(read===n&&!store.done.lessonsAll){store.done.lessonsAll=true;store.lessons++;save()}
}
// With the "Leave out prescribed text" switch on, topics no longer name a prescribed text.
const topicText=c=>{const t=TOPIC_FORMS[c.form](c.V,c.a,c.b,c.g);
  return ui.topic.noText?t.replace(/ in relation to your prescribed text/g,"").replace(/ in your prescribed text/g,"").replace(/your prescribed text/g,"a text"):t};
function roll(){
  const t=ui.topic,r=a=>a[Math.random()*a.length|0],names=TOPIC_IDEAS.map(x=>x[0]);
  const a=t.a||r(names.filter(n=>n!==t.b)),b=t.b||r(names.filter(n=>n!==a));
  t.cur={V:t.verb||r(TOPIC_VERBS),a,b,g:r(TOPIC_ANGLES),form:Math.random()*TOPIC_FORMS.length|0};
}
function segments(id){
  const x=TEXTS[id];
  return x.body.split(x.cat==="poetry"?/\n+/:/\n+|(?<=[.!?]|[.!?]’)\s+/).filter(Boolean);
}
function scrambled(n){const base=[...Array(n).keys()];let a;do a=shuffle(base);while(a.every((v,i)=>v===i));return a}
const buildDraft=()=>store.build[BUILD[itemNo()].id]??={shown:false,ticks:[]};
function preview(){
  const d=buildDraft(),text=["P","E","X","L"].map(r=>(d[r]||"").trim()).filter(Boolean).join(" ");
  $("preview").textContent=text||"Your sentences join here as you type.";
  return text;
}

/* ---------- Page drawing ---------- */
function chips(){
  const t=tab();let list=[];
  if(t.view==="quiz"&&t.sets.length>1) list=t.sets.map(id=>[SETS[id].title,store.best[id]!=null?`Best ${store.best[id]}/${SETS[id].ids.length}`:`${SETS[id].ids.length} questions`]);
  if(t.view==="rebuild"||t.view==="spot") list=PARAS.map((p,i)=>[p.title,store.done[`${t.view}${i}`]?"✓ Done":`${p.s.length} sentences`]);
  if(t.view==="build") list=BUILD.map(b=>[TEXTS[b.text].title,store.build[b.id]?.shown?"Checked":"Paragraph"]);
  if(t.view==="paper") list=t.paper.map((p,i)=>{const d=store.drafts[p.id];return [`${i+1}. ${p.verb}`,d?.shown?`Self-mark ${tally(d.ticks)}/${p.marks||p.crit.length}`:d?.text?.trim()?"Draft started":p.marks?`${p.marks} marks`:"Writing task"]});
  $("nav").innerHTML=list.map(([a,b],i)=>`<button data-act="item" data-v="${i}" data-k="item${i}" aria-pressed="${itemNo()===i}"><b>${a}</b><small>${b}</small></button>`).join("");
}
function render(){
  const focus=document.activeElement?.dataset?.k;
  const left=$("nav").scrollLeft;
  const tabButton=(act,x,on)=>`<button data-act="${act}" data-v="${x.id}" data-k="${act}-${x.id}" aria-pressed="${on}">${x.name}</button>`;
  $("sections").innerHTML=SECTIONS.map(s=>tabButton("section",s,s.id===ui.sec)).join("");
  $("subtabs").innerHTML=section().tabs.map(t=>tabButton("tab",t,t.id===tab().id)).join("");
  $("lang").value=store.lang;
  chips();$("nav").scrollLeft=left;
  VIEWS[tab().view]();
  if(focus) document.querySelector(`[data-k="${focus}"]`)?.focus({preventScroll:true});
}

/* ---------- Clicks and typing ---------- */
function record(it){
  const skill=Q[it.id].s;store.skills[skill]??=[0,0];store.skills[skill][1]++;
  store.wrong=store.wrong.filter(id=>id!==it.id);
  if(isRight(it)) store.skills[skill][0]++;
  else{store.wrong.push(it.id);store.times[it.id]=(store.times[it.id]||0)+1} // count how often each question is missed
  save();
}
const ACT={
 section:v=>{ui.sec=v},
 tab:v=>{ui.tab[ui.sec]=v},
 item:v=>{ui.item[key()]=+v},
 pick:v=>{const r=currentRound(),it=r.items[r.i];if(it.pick!==null)return;it.pick=+v;record(it)},
 prev:()=>{const r=currentRound();if(r.done){r.done=false;r.i=r.items.length-1}else if(r.i>0)r.i--},
 next:()=>{const r=currentRound();if(r.i<r.items.length-1){r.i++;return}
   r.done=true;r.end=Date.now();store.lessons++;if(!r.retry&&SETS[r.set]){store.best[r.set]=Math.max(r.items.filter(isRight).length,store.best[r.set]??0);save()}},
 again:()=>{const r=currentRound(),n=newRound(r.set,r.filter);if(tab().view==="unseen"||tab().view==="mistakes")sessions[key()].round=n;else sessions[roundKey()]=n},
 missed:()=>{const r=currentRound();r.items=r.items.filter(i=>!isRight(i)).map(i=>item(i.id));r.i=0;r.done=false;r.retry=true},
 "to-questions":()=>{sessions[key()].step=2;clock.running=false},
 "to-write":()=>{sessions[key()].step=3},
 "to-read":()=>{delete sessions[key()]},
 timer:()=>{const el=document.querySelector(".timer"),id=el.dataset.id;
   if(clock.id===id&&clock.running){clock.left=remaining();clock.running=false;return}
   const left=clock.id===id&&clock.left?clock.left:+el.dataset.secs;clock={id,left,end:Date.now()+left*1000,running:true}},
 "timer-reset":()=>{clock={id:null,left:0,end:0,running:false}},
 check:()=>{const d=draft(writing.id);if(!d.text.trim()){$("count").textContent="Write your answer first, then check it.";$("answer").focus();return false}d.shown=true;save()},
 flip:()=>{sessions[key()].flipped=true},
 // Card ratings: "Not yet" puts the card 2 places back, "Almost" 5 places back, "Got it" removes it.
 "card-known":()=>{const s=sessions[key()],c=s.queue.shift(),k=store.known[tab().deck]??=[];s.got++;s.flipped=false;if(!k.includes(c.id)){k.push(c.id);save()}},
 "cards-forget":()=>{store.known[tab().deck]=[];save();delete sessions[key()]},
 // Biology syllabus map: jump to the flashcards for one inquiry question or dot point
 "bio-study":v=>{ui.tab.bio="cards";ui.cardopt["bio/cards"]={dir:"term",group:v,hide:false};delete sessions["bio/cards"]},
 "card-almost":()=>{const s=sessions[key()],c=s.queue.shift();s.almost++;s.queue.splice(Math.min(5,s.queue.length),0,c);s.flipped=false},
 "card-notyet":()=>{const s=sessions[key()],c=s.queue.shift();s.notyet++;if(!s.hard.includes(c.term))s.hard.push(c.term);s.queue.splice(Math.min(2,s.queue.length),0,c);s.flipped=false},
 "cards-reset":()=>{delete sessions[key()]},
 segment:v=>{const s=sessions[key()],[id,,part]=FIND[s.order[s.i]];if(s.pick!==null)return;s.pick=+v;s.picks[s.i]=+v;
   const ok=segments(id)[+v].includes(part);if(ok)s.score++;
   store.skills["Finding evidence"]??=[0,0];store.skills["Finding evidence"][1]++;if(ok)store.skills["Finding evidence"][0]++;save()},
 "find-next":()=>{const s=sessions[key()];s.i++;if(s.i===s.order.length){store.lessons++;save()}s.pick=s.picks[s.i]??null},
 "find-prev":()=>{const s=sessions[key()];s.i=Math.max(0,s.i-1);s.pick=s.picks[s.i]??null},
 "find-reset":()=>{delete sessions[key()]},
 place:v=>{const s=sessions[`${key()}/${itemNo()}`];s.pool=s.pool.filter(x=>x!==+v);s.placed.push(+v);s.checked=false},
 unplace:v=>{const s=sessions[`${key()}/${itemNo()}`];s.placed=s.placed.filter(x=>x!==+v);s.pool.push(+v);s.checked=false},
 "para-check":()=>{const s=sessions[`${key()}/${itemNo()}`];s.checked=true;if(s.placed.every((v,i)=>v===i)){store.done[`rebuild${itemNo()}`]=true;save()}},
 "para-fix":()=>{const s=sessions[`${key()}/${itemNo()}`];let k=0;while(s.placed[k]===k)k++;s.pool.push(...s.placed.splice(k));s.pool=shuffle(s.pool);s.checked=false},
 "para-reset":()=>{delete sessions[`${key()}/${itemNo()}`]},
 "para-show":()=>{const s=sessions[`${key()}/${itemNo()}`];s.placed=PARAS[itemNo()].s.map((_,i)=>i);s.pool=[];s.checked=true},
 "para-next":()=>{ui.item[key()]=itemNo()+1},
 model:v=>{ui.model=v},
 role:v=>{const [i,r]=v.split(":");sessions[`${key()}/${itemNo()}`].labels[+i]=r},
 "spot-check":()=>{const n=itemNo(),s=sessions[`${key()}/${n}`];s.checked=true;
   const p=PARAS[n].s,ok=p.filter((x,i)=>s.labels[i]===x[0]).length;
   store.skills["PEEL / TEEL parts"]??=[0,0];store.skills["PEEL / TEEL parts"][0]+=ok;store.skills["PEEL / TEEL parts"][1]+=p.length;
   if(ok===p.length)store.done[`spot${n}`]=true;save()},
 "spot-reset":()=>{delete sessions[`${key()}/${itemNo()}`]},
 "build-check":()=>{const d=buildDraft();if(!preview()||!["P","E","X","L"].some(r=>d[r]?.trim())){$("copied").textContent="Write at least one part first.";return false}d.shown=true;save()},
 copy:()=>{const text=preview(),note=$("copied");
   const manual=()=>{const range=document.createRange();range.selectNodeContents($("preview"));getSelection().removeAllRanges();getSelection().addRange(range);note.textContent="Paragraph selected. Copy it with your device’s copy command."};
   if(navigator.clipboard) navigator.clipboard.writeText(text).then(()=>note.textContent="Copied",manual);else manual();return false},
 "topic-new":()=>{roll()},
 "topic-notext":()=>{ui.topic.noText=!ui.topic.noText},
 "topic-save":()=>{const c=ui.topic.cur,x=topicText(c);store.topics??=[];if(!store.topics.includes(x))store.topics.unshift(x);store.topics=store.topics.slice(0,30);save()},
 "topic-del":v=>{store.topics.splice(+v,1);save()},
 "lesson-read":v=>{store.done["lesson"+v]=!store.done["lesson"+v];save();lessonStatus();return false},
 "mistakes-start":()=>{sessions[key()]={round:newRound("mistakes",ui.mfilter)}},
 "mistakes-back":()=>{delete sessions[key()]},
 "mistake-clear":v=>{store.wrong=store.wrong.filter(x=>x!==v);save()},
 "my-addq":()=>{const m=ui.my,opts=m.o.map(x=>x.trim());
   if(!m.q.trim()||opts.some(x=>!x)){$("mymsg").textContent="Please write the question and all four choices.";return false}
   if(new Set(opts.map(x=>x.toLowerCase())).size<4){$("mymsg").textContent="Each choice must be different.";return false}
   // the FIRST option is always the correct one; the quiz shuffles them when it plays
   store.custom.qs.push({id:Date.now().toString(36),ask:m.q.trim(),o:[opts[m.right],...opts.filter((_,i)=>i!==m.right)],why:m.why.trim()});
   ui.my=null;ui.mymsg="Saved. Play it in My quiz.";save();syncMy();delete sessions["me/myquiz/my"]},
 "my-addcard":()=>{const m=ui.my;if(!m.front.trim()||!m.back.trim()){$("mymsg").textContent="Write both sides of the card.";return false}
   store.custom.cards.push({front:m.front.trim(),back:m.back.trim(),img:m.img||""});m.front=m.back=m.img="";ui.mymsg="Card saved. Study it in My cards.";save();delete sessions["me/mycards"]},
 "my-delq":v=>{store.custom.qs=store.custom.qs.filter(x=>x.id!==v);store.wrong=store.wrong.filter(x=>x!=="my."+v);save();syncMy();delete sessions["me/myquiz/my"]},
 "my-noimg":()=>{ui.my.img=""},
 "my-delcard":v=>{store.custom.cards.splice(+v,1);save();delete sessions["me/mycards"]},
 "go-mistakes":()=>{ui.sec="me";ui.tab.me="mistakes";delete sessions["me/mistakes"]},
 reset:()=>{if(!sessions.confirmReset){sessions.confirmReset=true;return}
   store=blank();Object.keys(sessions).forEach(k=>delete sessions[k]);save();try{localStorage.removeItem("evidence-paper")}catch(e){}},
 "reset-no":()=>{delete sessions.confirmReset}
};
document.addEventListener("click",e=>{
  const b=e.target.closest("button[data-act]");if(!b)return;
  const act=b.dataset.act;
  if(act==="show"){$("reading").scrollIntoView({block:"start"});return}
  if(["section","tab"].includes(act)) delete sessions.confirmReset;
  // leaving My mistakes during practice starts it fresh next time, so the list is always up to date
  if(["section","tab"].includes(act)&&sessions["me/mistakes"]?.round?.done) delete sessions["me/mistakes"];
  if(ACT[act](b.dataset.v)===false)return;
  render();
  if(act==="pick") document.querySelector('[data-act="next"]')?.focus({preventScroll:true});
  if(["next","prev","para-next","to-questions","to-write","find-next","find-prev","topic-new"].includes(act)) $("main").scrollIntoView({block:"nearest"});
});
document.addEventListener("input",e=>{
  if(e.target.id==="search"){
    const term=e.target.value.trim().toLowerCase(),entries=[...document.querySelectorAll("details[data-word]")];
    entries.forEach(d=>d.hidden=!d.dataset.word.includes(term));
    $("nomatch").hidden=entries.some(d=>!d.hidden);
  }
  if(e.target.dataset.my){const k=e.target.dataset.my;if(/^o\d$/.test(k))ui.my.o[+k[1]]=e.target.value;else ui.my[k]=e.target.value}
  if(e.target.id==="plan"){draft("topicplan").text=e.target.value;save();$("count").textContent=`${words(e.target.value)} words`}
  if(e.target.id==="answer"){draft(writing.id).text=e.target.value;save();$("count").textContent=`${words(e.target.value)} words`}
  if(e.target.dataset.part){buildDraft()[e.target.dataset.part]=e.target.value;save();preview()}
});
document.addEventListener("change",e=>{
  if(e.target.id==="my-img"){ // shrink the chosen picture so it fits in browser storage
    const file=e.target.files[0];if(!file)return;
    const reader=new FileReader();
    reader.onload=()=>{const im=new Image();im.onload=()=>{
      const k=Math.min(1,520/im.width),cv=document.createElement("canvas");cv.width=Math.round(im.width*k);cv.height=Math.round(im.height*k);
      const g=cv.getContext("2d");g.fillStyle="#fff";g.fillRect(0,0,cv.width,cv.height);g.drawImage(im,0,0,cv.width,cv.height);
      ui.my.img=cv.toDataURL("image/jpeg",.8);render()};im.src=reader.result};
    reader.readAsDataURL(file);return;
  }
  if(e.target.id==="lang"){store.lang=e.target.value;save();for(const k in sessions) if(sessions[k]?.queue) delete sessions[k]; // flashcard decks hold translated text, so rebuild them
    render();return}
  if(e.target.dataset.lf){ // tick boxes on the technique lessons tab
    const f=ui.lf,k=e.target.dataset.lf;
    if(k==="popular") f.popular=e.target.checked;
    else f.off=e.target.checked?f.off.filter(x=>x!==k):[...f.off,k];
    render();return;
  }
  if(e.target.dataset.myright!=null){ui.my.right=+e.target.dataset.myright;return}
  if(e.target.dataset.opt){ // the little drop-down menus on flashcards and My mistakes
    const name=e.target.dataset.opt;
    if(name==="mfilter") ui.mfilter=e.target.value;
    else{ui.cardopt[key()][name]=e.target.type==="checkbox"?e.target.checked:e.target.value;delete sessions[key()]}
    render();return;
  }
  if(e.target.dataset.sel){ui.topic[e.target.dataset.sel]=e.target.value;roll();render();return}
  const k=e.target.dataset.tick;if(k==null)return;
  const d=tab().view==="build"?buildDraft():tab().view==="topics"?draft("topicplan"):draft(writing.id);
  d.ticks[+k]=e.target.checked;save();markLine();chips();
});

window.claude?.hot?.snapshot?.(()=>({ui,sessions}));
const boot=data=>{if(data?.ui){Object.assign(ui,data.ui);Object.assign(sessions,data.sessions)}render()};
window.claude?.hot?.ready?window.claude.hot.ready(boot):boot(window.claude?.hot?.data);

// Left and right arrow keys move between questions (not while typing in a box).
document.addEventListener("keydown",e=>{
  if(!["ArrowLeft","ArrowRight"].includes(e.key)||e.altKey||e.ctrlKey||e.metaKey) return;
  if(/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) return;
  const sel=e.key==="ArrowLeft"?'[data-act="prev"],[data-act="find-prev"]':'[data-act="next"],[data-act="find-next"]';
  const b=document.querySelector(sel);if(b){e.preventDefault();b.click()}
});
