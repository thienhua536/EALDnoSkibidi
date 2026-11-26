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
 ["empathy","What would a character see if they stood in someone else’s place?"]
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
