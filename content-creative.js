/* =====================================================================
   content-creative.js  —  CREATIVE WRITING DRILLS (Skills section)
   ---------------------------------------------------------------------
   Five habits, each a small repeatable drill:
     1. Show, don't tell      (SDT_ITEMS)
     2. Subtext in dialogue   (SUBTEXT_ITEMS)
     3. Mentor sentences      (MENTOR_ITEMS)
     4. 15-minute micro-write (MICRO_ITEMS)
     5. Error bank            (COMMON_MISTAKES, CONFUSIONS, SPELLING)
   The site gives NO automatic marking. It gives you a checklist, a model
   example and a list of common mistakes so you can mark yourself honestly.

   HOW TO ADD A PROMPT: copy one block from a list below, change the words,
   and keep the commas. Model texts are original examples written for this site.
   ===================================================================== */

// ---------- 1. SHOW, DON'T TELL ----------
// emotion = the feeling to show; stems = word starts the checker flags; tell = the weak version; show = a strong model
const SDT_ITEMS=[
 {emotion:"loneliness",stems:["lonel","alone"],tell:"I felt lonely at lunch.",show:"I chewed my sandwich slowly, counting the cracks in the concrete table while laughter drifted over from the benches three metres away. My phone stayed face down. Nobody asked if the seat beside me was taken."},
 {emotion:"jealousy",stems:["jealo","envy","envi"],tell:"I was jealous of Mia’s trophy.",show:"Mia held up the trophy and everyone clapped. I clapped too, a little late, my nails pressing half-moons into my palm. At home I scrolled past her photo twice, then a third time, and slid the phone under my pillow."},
 {emotion:"pride",stems:["prid","proud"],tell:"Dad was proud of me.",show:"Dad straightened his old jacket before the ceremony. When my name was called he stood so fast his chair scraped the floor, and he kept clapping long after everyone else had stopped."},
 {emotion:"relief",stems:["relie","reliev"],tell:"I felt relieved when I saw my results.",show:"The results page loaded. My shoulders dropped an inch, then another. I laughed at nothing, too loudly, and Mum looked up from the stove and laughed as well, though she did not know why."},
 {emotion:"nervousness",stems:["nerv","anxi","worr"],tell:"I was nervous before my speech.",show:"My notes shook so much I put them down. I wiped my palms on my skirt, then again. The microphone squealed, and I realised I had been holding my breath since my name was called."},
 {emotion:"embarrassment",stems:["embarr","ashame","shame"],tell:"I was embarrassed when my chair broke.",show:"The whole class turned when the chair collapsed. I laughed too loudly, picked up my pen, and read the same line of the textbook four times while my ears burned."},
 {emotion:"anger",stems:["ang","furi","mad"],tell:"She was angry about the mark.",show:"She slid the paper across the desk and said, “Fine.” The pencil snapped in her fingers. She did not look up until the teacher had walked away."},
 {emotion:"guilt",stems:["guil","sorry"],tell:"I felt guilty about keeping the change.",show:"I kept the extra coins in my pocket all afternoon, turning them over and over. When my brother handed me the dish towel I thanked him too politely and could not meet his eyes."},
 {emotion:"homesickness",stems:["homesic","miss"],tell:"I was homesick at dinner.",show:"The rice here tasted nearly right. I stood at the window until the noodles went cold, listening to the street, which did not smell like home."},
 {emotion:"hope",stems:["hope","optim"],tell:"I was hopeful that she would call.",show:"I left the window open all night in case the phone rang. In the morning I wore the good shirt, just in case, and checked the letterbox twice before the bus came."},
 {emotion:"disappointment",stems:["disappoi","let down"],tell:"I was disappointed by the letter.",show:"The envelope was thin. I folded it in half, then in half again, and slid it behind the books where no one would look. At dinner I said the chicken was good."},
 {emotion:"fear",stems:["fear","afrai","scare","terri","frighten"],tell:"I was scared on the stairs.",show:"The stairs creaked behind me. I stopped. The creaking stopped. I counted to ten, and the key was cold in my fist, one sharp edge pointing out between my fingers."}
];
// Words that "tell" instead of "show". The checker flags these and the stems above.
const SDT_BANNED=["felt","feel","feeling","feelings","happy","sad","angry","hate","hated","hating","scared","afraid","upset","excited","lonely","jealous","proud","relieved","nervous","embarrassed","guilty","homesick","hopeful","disappointed","anxious","worried","terrified","furious","depressed","joy","joyful"];

// ---------- 2. SUBTEXT ----------
// title, who, topic (what they talk about), hidden (what they really feel), model (5 lines with body language)
const SUBTEXT_ITEMS=[
 {title:"The party nobody mentioned",who:"two friends",topic:"homework",hidden:"Lan is hurt that she was not invited to Ruth’s party",
  model:["“Did you finish the maths?” Lan asked, flattening the corner of her page.","“Question five was hard.” Ruth turned her pen over and over.","“I can send you mine.”","“Don’t worry.” Ruth glanced at the photos on her phone, then put it face down. “I’ll ask someone else.”","Lan nodded and wrote the date at the top of a page that was already full."]},
 {title:"Compared again",who:"a parent and a teenager",topic:"dinner",hidden:"the teenager is angry about always being compared to a cousin",
  model:["“There’s more rice,” Dad said.","“I’m fine.” Minh pushed a carrot to the edge of the plate.","“Linh ate two bowls when she visited.”","“Good for Linh.” Minh stacked his bowl on top of hers.","The tap ran in the kitchen for a very long time."]},
 {title:"The trophy",who:"two siblings",topic:"the weather",hidden:"one is jealous of the other’s award",
  model:["“Looks like rain,” Jun said, not looking at the shelf.","“Yeah.” Kai wiped the trophy with his sleeve.","“Mum will want the umbrella.”","“I’ll get it.” Kai put the trophy down, then picked it up again.","Jun watched the clouds as though they were the most interesting thing in the world."]},
 {title:"The mark",who:"a teacher and a student",topic:"the bus timetable",hidden:"the student is hurt by a low mark",
  model:["“Is that your bus?” Ms Tran asked, nodding at the window.","“The 4:15.” Dara held the paper face down against his chest.","“You’d better hurry.”","“Yes, Miss.” He pushed the chair in neatly, much too neatly.","At the door he almost turned around. He did not."]},
 {title:"The television guide",who:"a grandmother and her grandchild",topic:"the television guide",hidden:"the grandmother is lonely",
  model:["“There’s a quiz show at seven,” Ba said, circling it twice.","“I have practice tonight.” Hana kept her shoes on.","“It’s a good one.”","“Maybe tomorrow.” Hana checked her phone, then the door.","Ba folded the page carefully, as if she might need it again."]},
 {title:"The cricket score",who:"two cousins after an argument",topic:"cricket",hidden:"both want to say sorry",
  model:["“What’s the score?” Sam asked.","“Two for forty.” Dev stared at the screen.","“They’ll lose.”","“Probably.” A long pause. Dev moved over on the couch.","Sam sat down in the space he had left, and neither of them looked away from the television."]},
 {title:"Lunch money",who:"two friends",topic:"lunch",hidden:"one is ashamed that his family cannot afford lunch",
  model:["“Want half my sandwich?” Tuan asked.","“Not hungry.” Ali opened his bag and closed it again.","“Seriously, I made too much.”","“I had a big breakfast.” His stomach made a noise and he coughed over it.","Tuan broke the sandwich in half anyway and put it between them on the bench."]},
 {title:"The rice",who:"a mother and her son",topic:"rice",hidden:"both miss their home country",
  model:["“This rice isn’t the same,” Mum said.","“It’s fine.” Bao stirred his bowl without lifting any.","“At home it smelled like rain.”","“Mum.” He stopped, then tried again. “Do you want more?”","She smiled at the pot as though it had said something kind."]}
];

// ---------- 3. MENTOR SENTENCES ----------
// sentence = the model, pattern = its shape, template = fill-in-the-blanks, prompt = your topic, example = a student-style answer
const MENTOR_ITEMS=[
 {sentence:"I chewed my sandwich slowly, counting the cracks in the concrete table while laughter drifted from the benches.",pattern:"Subject + past verb + object + adverb, then an -ing phrase, then ‘while’ + a contrasting sound or action.",template:"I [past verb] [object] [adverb], [-ing verb] [detail] while [sound or action somewhere else].",prompt:"Write about waiting for bad news.",example:"I folded the letter carefully, tracing the crease with my thumb while the kettle screamed in the kitchen."},
 {sentence:"The room was quiet in the way a held breath is quiet.",pattern:"The [place] was [adjective] in the way [thing] is [adjective].",template:"The [place] was [adjective] in the way [thing] is [adjective].",prompt:"Describe a classroom after an exam.",example:"The hall was still in the way a pond is still before a stone drops."},
 {sentence:"The bus rattled past the market, the bakery, the school where we had all once been small. Nobody spoke.",pattern:"One long sentence with a list of three, then a very short sentence.",template:"[Long sentence with a list of three.] [Very short sentence.]",prompt:"Write about leaving a place you love.",example:"The car crawled past the temple, the noodle stall, the corner where Grandpa always waited. I said nothing."},
 {sentence:"She said she was fine. Her hands said otherwise.",pattern:"[Person] said [words]. [Body part] said otherwise.",template:"[Person] said [words]. [Body part] said otherwise.",prompt:"Write about someone hiding a worry.",example:"Dad said the news did not matter. His fingers kept folding the newspaper smaller and smaller."},
 {sentence:"Rain tapped the window like someone asking to be let in.",pattern:"Subject + verb + like + a person doing something (a simile with a human action).",template:"[Thing] [verb] [place] like someone [human action].",prompt:"Describe a sound at night.",example:"The fridge hummed in the dark like someone pretending not to listen."},
 {sentence:"By the time I found my voice, the moment had already passed.",pattern:"By the time + past simple, + past perfect (had + verb). The ‘had’ action happened first.",template:"By the time I [past simple], [subject] had already [past participle].",prompt:"Write about a missed chance.",example:"By the time I reached the platform, the train had already left."},
 {sentence:"If I had listened, I would have known.",pattern:"If + had + past participle, + would have + past participle (a regret about the past).",template:"If I had [past participle], I would have [past participle].",prompt:"Write about a regret.",example:"If I had asked her, I would have understood."},
 {sentence:"Mum folded the paper into quarters instead of answering.",pattern:"[Person] + past verb + object + instead of + -ing (an action that replaces speech).",template:"[Person] [past verb] [object] instead of [-ing verb].",prompt:"Write about someone avoiding a question.",example:"Grandpa polished his glasses instead of looking at me."}
];

// ---------- 4. 15-MINUTE MICRO-WRITE ----------
// skill = what to practise; scene = what to write; model = a 60–90 word example (past tense)
const MICRO_ITEMS=[
 {skill:"Sensory detail",scene:"A quiet classroom ten minutes after the bell.",model:"The classroom held its breath. Dust floated in the stripe of sunlight above the empty desks, and somewhere a ceiling light buzzed like a trapped fly. A forgotten jumper hung on a chair. I could smell chalk and old oranges. When I touched the whiteboard, the last line of the lesson was still there, half rubbed out, as if the teacher had stopped to listen too."},
 {skill:"Tension through dialogue",scene:"A tense conversation at the dinner table.",model:"“Pass the salt,” Dad said. I passed it. Nobody spoke. Mum cut her chicken into smaller and smaller pieces. “It’s a good school,” she said finally, to her plate. “I know.” My fork scraped. “Then why …” “I said I know.” The clock in the hallway ticked on and on, loud as an argument."},
 {skill:"Setting and atmosphere",scene:"The last bus stop at night.",model:"The bus stop was a glass box with one flickering light. Moths circled it like small, desperate planets. I sat on the cold bench and watched the road bend into darkness, where the last bus had once appeared every night at ten. It was ten fifteen. A can rolled in the wind, clinking, and then even that stopped."},
 {skill:"Character through action",scene:"Someone waiting alone in a hospital corridor.",model:"He had folded the visitor sticker into a tiny square and then unfolded it again, three times. His coat was still buttoned. Every time a door opened he stood up, and every time it was a stranger he sat down again, slowly, as if the chair might break. On the wall, a clock ticked towards nothing in particular."},
 {skill:"Emotion without naming it",scene:"The first day at a new school.",model:"The corridor smelled of floor polish and other people’s lunches. I held my timetable so tightly the edges curled. Every locker looked the same. A girl glanced at me, then at my shoes, and my face grew warm. I walked past the same drinking fountain twice before I admitted, quietly, that I was lost."},
 {skill:"A turning point",scene:"A phone call that changes the plan.",model:"The phone buzzed on the table during dinner. Mum answered it with her hand over one ear. “Yes,” she said. “Yes. When?” Her chopsticks stopped halfway to her bowl. She put them down very gently, as if they were made of glass. When she looked up, none of us were eating, and the plans for Saturday had already stopped existing."},
 {skill:"Memory and the senses",scene:"A smell of food that reminds you of home.",model:"The smell of frying garlic drifted through the open window and I stopped on the footpath. Suddenly I was small again, standing on a stool beside Grandma, watching her wrist flick the pan. My eyes stung. A stranger in the apartment above was cooking dinner, and for a moment it was my own."},
 {skill:"Silence and the unsaid",scene:"Two people packing a car without talking.",model:"They carried the boxes out one by one. The boot closed with a soft thud. Dad checked the straps, though he had already checked them. Mum held the house keys out and then, instead of handing them over, held them a little longer. Behind them the porch light stayed on, as if the house was waiting for someone to say goodbye."}
];

// ---------- 5. ERROR BANK ----------
const COMMON_MISTAKES=[
 "Missing was or were (“I stunned” instead of “I was stunned”)",
 "Switching tense inside one paragraph (walk / walked)",
 "Forgetting -ed on past verbs (“yesterday I walk”)",
 "Noun and adjective mix-ups (relief / relieved, shame / ashamed)",
 "Missing articles: a, an, the",
 "Subject and verb do not agree (“everyone were”, “people was”)",
 "its / it’s and their / there / they’re",
 "Run-on sentences or comma splices",
 "Sentence fragments by accident (no verb)",
 "Spelling long words (necessary, definitely, embarrassed)",
 "Telling the emotion instead of showing it",
 "Repeating the same word (said, very, good)",
 "Dialogue punctuation (quotation marks, a new line for each speaker)",
 "Running out of time and writing too little"
];
// [wrong, right, tip, example]
const CONFUSIONS=[
 ["I stunned","I was stunned","Add was or were before the adjective.","I was stunned by the silence."],
 ["they just lucky","they were just lucky","Every sentence needs a verb.","They were just lucky."],
 ["I was relief","I was relieved","relief is a noun, relieved is an adjective.","I felt relief, and I was relieved."],
 ["I expect it yesterday","I expected it","Past story, past verb (-ed).","I expected rain, but the sky stayed clear."],
 ["everyone were","everyone was","Everyone, everybody and nobody take a singular verb.","Everyone was silent."],
 ["its raining","it’s raining","it’s means it is. its shows belonging.","It’s late, and the dog wagged its tail."],
 ["taller then me","taller than me","Use than to compare. Use then for time.","He was taller than me. Then he left."],
 ["I was shame","I was ashamed","shame (noun), ashamed (a person feels it), shameful (a thing or act).","She was ashamed of the shameful lie."],
 ["a umbrella","an umbrella","Use an before a vowel sound.","He held an umbrella."],
 ["I go to school yesterday","I went to school","Irregular past: go → went, see → saw, take → took.","I went to school early."],
 ["I could not breath","I could not breathe","breath is a noun, breathe is a verb.","I took a breath and tried to breathe slowly."],
 ["quiet / quite","quiet = silent, quite = fairly","Check which word you mean.","The room was quite quiet."],
 ["lose / loose","lose = not win, loose = not tight","The vowel and the meaning change.","Don’t lose the loose button."],
 ["affect / effect","affect (verb), effect (noun)","The silence had an effect. It affected everyone.","The silence had an effect. It affected everyone."]
];
// Spelling practice words: [word, sentence]
const SPELLING=[
 ["average","The average student felt invisible."],["invisible","She felt invisible in the crowded hall."],["shameful","It was a shameful secret."],
 ["relief","A wave of relief washed over me."],["relieved","I was relieved when the bell rang."],["expect","I did not expect the door to open."],
 ["expected","Nobody expected the news."],["necessary","It was necessary to stay quiet."],["definitely","I definitely heard footsteps."],
 ["embarrassed","He was embarrassed by the noise."],["separate","They sat at separate tables."],["beautiful","The beautiful morning hid the bad news."],
 ["different","Everything looked different in the dark."],["interesting","It was an interesting silence."],["especially","I was especially tired."],
 ["environment","The environment was strange and cold."],["government","The government letter arrived at last."],["believe","I could not believe my eyes."],
 ["receive","I waited to receive the call."],["knowledge","His knowledge of the city saved us."]
];

// ---------- Drill settings (what each tab shows). Edit the words here. ----------
const CREATIVE={
 sdt:{skill:"Show, don’t tell",items:SDT_ITEMS,minutes:10,
  title:it=>`Show “${it.emotion}” without naming it`,
  task:it=>`Write 3 or 4 sentences showing a character feeling ${it.emotion}. Do not use the emotion word, or words like <i>felt, happy, sad, hate</i>. Use actions, objects, sounds and the place around the character.`,
  crit:["I never named the emotion or used felt, happy, sad or hate","Every sentence shows an action, an object or a sound","I included at least one specific detail (a number, an object, a place)","All my verbs are in the same tense","I proofread by reading my sentences from last to first"],
  mistakes:["Naming the feeling first (“I felt jealous”) and then showing it. Delete the label.","Using only cliché body signs (“my heart pounded”). Add a detail only this scene would have.","Explaining after showing (“…which showed she was sad”). Trust the reader.","Switching tense between sentences (chewed … chew).","A list of actions with no setting, sound or object."],
  model:it=>`<p>${it.show}</p><p class="note">The telling version was: “${it.tell}” Notice what changed: actions, objects and a place replace the emotion word.</p>`},
 subtext:{skill:"Subtext",items:SUBTEXT_ITEMS,minutes:10,
  title:it=>it.title,
  task:it=>`Write a 5-line dialogue between ${it.who}. On the surface they only talk about <b>${it.topic}</b>. Underneath, ${it.hidden}. Never name the feeling. Add pauses, eye movements or silence between the lines.`,
  crit:["The characters talk only about something ordinary","The real feeling is never named","I added at least two body-language or silence beats","Each speaker starts on a new line with correct quotation marks","The ending leaves something unsaid"],
  mistakes:["Characters say their feelings out loud (“I am so angry at you”).","Dialogue that explains the plot to the reader.","Too many speech tags (he exclaimed, she retorted). Use said, or an action.","Forgetting quotation marks and new lines for each speaker.","Tying everything up neatly. Leave a gap."],
  model:it=>`<p>${it.model.join("</p><p>")}</p><p class="note">The topic stays ordinary (${it.topic}). The feeling lives in the body language and pauses.</p>`},
 mentor:{skill:"Mentor sentences",items:MENTOR_ITEMS,minutes:0,
  title:it=>"Copy the shape, change the topic",
  task:it=>`<blockquote>${it.sentence}</blockquote><p><b>Pattern:</b> ${it.pattern}</p><p><b>Template:</b> ${it.template}</p><p><b>Your turn:</b> ${it.prompt} Use the same structure with your own words.</p>`,
  crit:["My sentence follows the same pattern","My topic is different from the model","My tense is correct and consistent","I spelled every word correctly","It sounds natural when I read it aloud"],
  mistakes:["Copying the model’s words instead of only its structure.","Forgetting the small words that make the pattern work (while, instead of, had).","Mixing tenses (had + past simple instead of past participle).","Writing two short sentences instead of one flowing sentence."],
  model:it=>`<p>${it.example}</p>`},
 micro:{skill:"15-minute micro-write",items:MICRO_ITEMS,minutes:15,
  title:it=>`Skill: ${it.skill}`,
  task:it=>`Write one strong scene of about 150–200 words: <b>${it.scene}</b> Spend the last 3 minutes only checking your past-tense verbs and spelling.`,
  crit:["I wrote about 150 to 200 words","I kept to one scene and one skill","I used at least two senses (sight, sound, smell, touch)","I checked every past-tense verb in the last 3 minutes","I checked my spelling and my usual mistakes"],
  mistakes:["Trying to tell a whole story in 15 minutes. One scene is enough.","Skipping the last 3 minutes of checking.","Switching between present and past tense.","Writing about feelings by naming them. Show them.","Forgetting the senses."],
  model:it=>`<p>${it.model}</p>`}
};
