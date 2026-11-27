/* =====================================================================
   content-topics.js  —  EXTENDED RESPONSE TOPIC MAKER
   ---------------------------------------------------------------------
   The topic maker mixes ONE key word + TWO ideas + ONE angle + ONE sentence
   shape. Add more of any list and the number of possible topics grows.
   TOPIC_VERBS   key words (verbs)             e.g. "Analyse",
   TOPIC_IDEAS   ["idea","question to think about"],
   TOPIC_ANGLES  techniques to focus on        e.g. "contrast",
   TOPIC_FORMS   sentence shapes. (V=key word, a/b=ideas, g=angle)
   PHRASES       sentence starters shown on the Sentence starters tab
   ===================================================================== */
const TOPIC_VERBS=["Analyse","Evaluate","Discuss","Examine","Explain","Assess","Justify","Explore","Account for"];
// [idea, a question to think about]
const TOPIC_IDEAS=[
 ["belonging","Who is inside the group, who is outside, and what does it cost to join?"],
 ["identity","Does the person change to fit in, or hold on to who they were?"],
 ["memory","Is the past shown as reliable, painful, or edited by time?"],
 ["loss","What is gone, and what is left behind in its place?"],
 ["hope","What small thing keeps a character looking forward?"],
 ["isolation","Is the distance physical, emotional, or chosen?"],
 ["power","Who decides, who obeys, and who pushes back?"],
 ["resilience","What does recovery look like, and who or what helps?"],
 ["communication","What is said, what is hidden, and what is misunderstood?"],
 ["home","Is home a place, a person, or a feeling that can be carried?"],
 ["journey","What changes between the start and the end?"],
 ["truth","Who tells the story, and can they be trusted?"],
 ["culture","How do customs and language shape the way people see themselves?"],
 ["language","Which words connect people, and which words keep them apart?"],
 ["family","What is owed, what is inherited, and what is broken?"],
 ["courage","What does it risk to act, and who notices?"],
 ["growth","What lesson is learned, and was it worth learning?"],
 ["justice","Who is treated fairly, and who is not?"],
 ["freedom","What is being escaped, and what is lost by escaping?"],
 ["trust","What builds it, and what breaks it in a moment?"],
 ["silence","What does not being said reveal?"],
 ["nature","Does the setting comfort, threaten, or mirror a mood?"],
 ["tradition","What is kept alive, and who decides it should end?"],
 ["fear","What is feared, and what does the fear protect?"],
 ["forgiveness","What has to be admitted before a wrong can be forgiven?"],
 ["ambition","What is wanted so badly that it changes a person?"],
 ["community","What do people give each other, and what do they expect back?"],
 ["change","Is it chosen or forced, and who feels it first?"],
 ["conflict","What starts it, and is it ever really finished?"],
 ["connection","What small act joins two people who were apart?"],
 ["pride","When does self-respect help, and when does it blind?"],
 ["empathy","What would a character see if they stood in someone else’s place?"],
 ["agency","Who gets to choose, and who is stopped from choosing?"],
 ["conformity","What pressure is there to fit in, and what does it cost?"],
 ["motivation","What does a person want, and what do they also fear or refuse?"],
 ["contradiction","Where do wants, words or actions pull in opposite directions?"],
 ["lived experience","How does the text make an experience feel real from the inside?"],
 ["storytelling","Why is this story told, and who is meant to hear it?"],
 ["assumptions","What would a reader expect, and does the text challenge that?"]
];
const TOPIC_ANGLES=["symbols and imagery","structure and sequence","voice and perspective","setting and context","contrast","tone and mood","language choices","silence and what is left unsaid","characterisation","repetition and patterns"];
const cap=s=>s[0].toUpperCase()+s.slice(1);
const TOPIC_FORMS=[
 (V,a,b,g)=>`${V} how your prescribed text represents ${a} and ${b}, with a focus on ${g}.`,
 (V,a,b)=>`${V} the relationship between ${a} and ${b} in your prescribed text.`,
 (V,a,b)=>`“${cap(a)} can change the way a person understands ${b}.” ${V} this idea in relation to your prescribed text.`,
 (V,a,b,g)=>`${V} the ways composers use ${g} to explore ${a} and ${b}.`,
 (V,a,b)=>`Consider how your prescribed text shows that ${a} affects ${b}. ${V} the ideas and the techniques that shape them.`,
 (V,a,b)=>`To what extent does your prescribed text present ${a} as more powerful than ${b}? (Key word: ${V.toLowerCase()})`
];
const PHRASES=[
 ["Open your answer",["In [text], [composer] presents … as …","The idea that … is central to [text].","Through …, [composer] invites readers to see that …","[Text] shows that … cannot be separated from …"]],
 ["Bring in evidence",["This is clear when …","The phrase “…” suggests …","An early example is …, which …","Later in the text, …"]],
 ["Explain the effect",["This makes readers feel …","By choosing …, the composer shows …","The effect is to position the audience to …","This detail reveals that …","The word “…” carries a sense of …"]],
 ["Link ideas together",["In contrast, …","Similarly, …","As a result, …","This builds on the earlier idea that …","However, this view changes when …"]],
 ["Show change over time",["At first, … but by the end …","The turning point comes when …","This shift is signalled by …","What began as … becomes …"]],
 ["Finish strongly",["Ultimately, [composer] suggests that …","In this way, the text shows that …","Therefore, the experience of … shapes …","The final image leaves readers with …"]]
];

/* =====================================================================
   FOCUS AND WRITING MODE
   ---------------------------------------------------------------------
   When the "Focus and writing" button is on, the key word is always
   "Compose" and the topic asks for a piece of writing in one of the forms below.
   WRITING_FORMS  sentence shapes (a, b = the two ideas, g = the angle)
   WRITING_KINDS  the forms: [value, text for the sentence, what a good one needs]
   ===================================================================== */
const WRITING_FORMS=[
 (a,b,g)=>`Compose a piece of writing that explores ${a} and ${b}, with a focus on ${g}.`,
 (a,b,g)=>`Compose a piece of writing in which ${a} changes the way someone sees ${b}.`,
 (a,b,g)=>`Compose a piece of writing about the relationship between ${a} and ${b}, using ${g}.`,
 (a,b,g)=>`Compose a piece of writing that shows how ${a} can affect ${b}.`
];
const WRITING_KINDS={
 imaginative:{article:"an imaginative",needs:["A clear voice and a setting the reader can picture","Show feelings through actions, images and dialogue instead of only naming them","A shape: beginning, a problem or change, an ending that lands","Techniques used on purpose (e.g. {g}) so they carry the idea"],
  plan:(a,b,g)=>[`<b>Opening:</b> put the reader inside a moment that already shows ${a}.`,`<b>Build:</b> bring in ${b} through a person, an object or a place, using ${g}.`,`<b>Turning point:</b> the moment ${a} and ${b} collide or change something.`,`<b>Ending:</b> an image or line that leaves the reader thinking. Do not explain the idea.`]},
 analytical:{article:"an analytical",needs:["A thesis (main argument) in the first paragraph","Paragraphs that use PEEL or TEEL with evidence","Explanation of HOW techniques (e.g. {g}) create meaning","Formal tone and linking words such as however and therefore"],
  plan:(a,b,g)=>[`<b>Introduction:</b> state your argument about ${a} and ${b} in one clear thesis.`,`<b>Body 1:</b> ${a}. Point, evidence, explanation, link.`,`<b>Body 2:</b> ${b}. Point, evidence, explanation, link.`,`<b>Body 3:</b> how ${g} joins the two ideas.`,`<b>Conclusion:</b> return to the thesis in new words.`]},
 persuasive:{article:"a persuasive",needs:["A clear contention (the view you want the reader to accept)","Three or more arguments, each with evidence","Persuasive techniques used on purpose (e.g. {g}, inclusive language, a rhetorical question)","A call to action or a strong final line"],
  plan:(a,b,g)=>[`<b>Hook and contention:</b> open strongly and state what you want readers to believe about ${a} and ${b}.`,`<b>Argument 1:</b> a reason, evidence and a technique such as ${g}.`,`<b>Argument 2:</b> a second reason, with an example or statistic.`,`<b>Answer the other side:</b> mention an opposing view and show why it is weaker.`,`<b>Call to action:</b> tell the reader what to think or do next.`]}
};
