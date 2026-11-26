/* =====================================================================
   content-more.js  —  MORE TECHNIQUES (feeds three things at once)
   ---------------------------------------------------------------------
   Every entry below automatically becomes:
     1. a FLASHCARD            (Techniques > Flashcards)
     2. a LESSON               (Techniques > Technique lessons)
     3. a QUIZ QUESTION        (Techniques > Spot more techniques)

   HOW TO ADD YOUR OWN TECHNIQUE (copy one line, change the words):

     ["Name", "group", "What it is.", "An example sentence.",
      "A sentence starter that explains the effect...", "A mistake to avoid."],

   - "group" must be one of: sound, meaning, structure, mood, voice, visual
     (the quiz uses the group to pick wrong answers that look similar).
   - Keep every item inside quotation marks and end each line with a comma.
   - Use ’ or \" carefully: a plain " inside a string must be written as \"
   ===================================================================== */

const TECH_GROUPS={
  sound:"Sound devices", meaning:"Meaning and word choice", structure:"Structure and form",
  mood:"Mood and tone", voice:"Voice and persuasion", visual:"Visual techniques"
};

const TECH_MORE=[
// ---------- SOUND ----------
["Assonance","sound","Repeating the same vowel sound in nearby words.","The light of the night shone bright.","The repeated vowel sound makes the line flow smoothly, which suggests …","Do not mix it up with alliteration, which repeats the first letter sound."],
["Sibilance","sound","Repeating soft ‘s’, ‘sh’ or ‘z’ sounds, like a hiss.","The snake slid silently through the grass.","The hissing sound creates a quiet, menacing mood, which makes readers feel …","Only name it when the sound matches the meaning of the line."],
["Consonance","sound","Repeating a consonant sound anywhere in the words, not only at the start.","Lock the clock and pack the sack.","The repeated hard sound gives the line a sharp, steady beat, which highlights …","If the repeated sound is only at the start of words, call it alliteration."],
["Rhyme","sound","Words that end with the same sound, usually at the ends of lines.","I lay awake and watched the day break.","The matching sounds link the two ideas, so readers connect …","Say why the rhyme matters. Do not only say ‘it rhymes’."],
// ---------- MEANING AND WORD CHOICE ----------
["Analogy","meaning","Explaining one idea by showing how it works like another, longer than a simile.","Learning a language is like building a bridge: each word is a plank you lay before you can cross.","The extended comparison makes a hard idea easy to picture, which helps the audience understand …","An analogy explains an idea. A metaphor only says one thing is another."],
["Allusion","meaning","A short reference to a well-known story, person or event.","He opened the gate like a modern Cinderella heading to the ball.","The reference borrows the meaning of a famous story, which suggests …","Only use the word if the audience would recognise the reference."],
["Oxymoron","meaning","Two opposite words placed together.","A deafening silence filled the room.","The clash of opposites shows a feeling that is strong and confusing, which suggests …","It is two words. If a whole sentence seems to contradict itself, it may be a paradox."],
["Paradox","meaning","A statement that seems to contradict itself but holds a deeper truth.","The more I learned, the less I knew.","The surprising contradiction makes readers stop and think, revealing that …","A paradox is about an idea. An oxymoron is just two clashing words."],
["Juxtaposition","meaning","Placing two different things side by side so the difference stands out.","A glittering tower stood beside the tent camp.","Placing them together makes the gap between them obvious, which shows …","Describe what is placed together, then say what the placement makes us notice."],
["Antithesis","meaning","Opposite ideas set against each other in balanced phrases.","Easy to start, hard to finish.","The balanced opposites make the point memorable, which stresses …","The two parts should mirror each other in shape."],
["Euphemism","meaning","A gentle word or phrase used instead of a harsh one.","Our neighbour passed away last spring.","The soft phrase avoids the harshness of the truth, which suggests the speaker feels …","Name what the harsh word would have been."],
["Idiom","meaning","A phrase whose meaning is different from its separate words.","After the speech she was walking on air.","The everyday phrase gives the voice a natural, relatable tone, and shows …","Explain the real meaning, not the literal one."],
["Connotation","meaning","The feelings or ideas a word carries beyond its dictionary meaning.","The ‘cottage’ felt cosy; the ‘shack’ felt neglected.","The word choice carries a feeling of …, which positions readers to …","Pick one strong word and unpack it. Do not list many."],
["Semantic field","meaning","A group of words from the same topic, building one idea.","Marching, ranks, battle, orders: the school day became a war.","The cluster of related words keeps one idea in the reader’s mind, strengthening …","Name at least two words from the group."],
// ---------- STRUCTURE AND FORM ----------
["Cliffhanger","structure","Ending a part at a moment of suspense.","The door swung open. Nobody was there. Then the lights went out.","Stopping here builds suspense and makes readers want to continue, which shows …","It belongs at the end of a section, not in the middle of a sentence."],
["Enjambment","structure","A sentence in poetry that runs over the end of a line without a pause.","I carried the cup / across the long room, / afraid of every step","The run-on line makes the voice move quickly, which suggests …","Check there is no punctuation at the line break."],
["Caesura","structure","A pause inside a line, often made by punctuation.","He waited. Nothing. He waited more.","The pause slows the pace, which makes the silence feel heavy and …","It sits inside the line, not at the end."],
["Motif","structure","An image, sound or idea that returns again and again.","The kettle appears at dawn, at noon and at midnight.","Each return of the kettle builds the idea that …, so by the end it stands for …","A motif repeats through the whole text. One image alone is a symbol."],
["Tricolon","structure","Three parts in a row, often with a rising effect.","We came, we waited, we won.","Grouping three items gives a strong rhythm and makes the idea feel complete, so …","Say what the three parts add up to."],
["Parallelism","structure","Repeating the same grammar pattern so ideas match.","She listened to the elders, she learned from the elders, she became one.","The matching patterns link the ideas and make the message feel balanced and certain, which …","Quote the repeated pattern, not the whole sentence."],
["Climax","structure","The highest point of tension or feeling, where ideas build to a peak.","First the roar, then the shaking, then the whole stand collapsing.","The build-up places the strongest idea last, so readers feel …","Say what builds up to it."],
["Stream of consciousness","structure","Writing that follows a character’s thoughts as they come, often without neat order.","I should call her and the bus is late and did I lock the door and she hates it when","The jumbled flow shows a mind under pressure, which makes readers understand …","It is not just a long sentence. It copies how thoughts jump."],
["Ellipsis","structure","Three dots showing a pause, a trailing off, or something left unsaid.","I wanted to say sorry, but …","The trailing dots show hesitation, which suggests the speaker feels …","Explain what is left unsaid."],
["Third-person narration","structure","A narrator outside the story using he, she or they.","She watched the train leave and did not wave.","The outside view lets readers see the character’s actions, which positions us to …","Say what the narrator can or cannot tell us."],
["Dialogue","structure","Characters speaking, shown with quotation marks.","“You came,” she said. “I said I would.”","The spoken words reveal the relationship and let us hear each voice, which shows …","Quote the speech and say what it reveals about the speaker."],
// ---------- MOOD AND TONE ----------
["Pathetic fallacy","mood","Weather or setting that mirrors a feeling or event.","Grey clouds gathered as the news arrived.","The gloomy weather mirrors the mood, preparing readers to feel …","Link the weather to a feeling or event, not just ‘it was raining’."],
["Foreshadowing","mood","A hint early on about what will happen later.","At the start, the old bridge groaned under every step.","The early warning builds worry, so readers expect that …","You can only call it foreshadowing if something later matches the hint."],
["Tone shift","mood","A clear change in the writer’s attitude or mood.","She smiled warmly. Then the phone rang, and the room turned cold.","The sudden change surprises readers and signals that …","Quote the word or line where the change happens."],
["Understatement","mood","Describing something serious as if it were small.","It was a slight delay, apart from the flood.","Playing the problem down makes the situation seem even more striking, which suggests …","It is the opposite of hyperbole."],
["Irony","mood","When the reality is the opposite of what is said or expected.","The fire station burned down on the safest day of the year.","The unexpected reversal makes readers see that …","Explain what we expected and what happened instead."],
["Sarcasm","mood","Saying the opposite of what you mean, in a mocking tone.","Oh, great, another Monday meeting.","The mocking voice shows the speaker’s frustration, so readers feel …","Sarcasm is spoken or written to mock. Irony is a wider mismatch."],
// ---------- VOICE AND PERSUASION ----------
["Colloquial language","voice","Casual, everyday words as people really speak.","Mum went totally nuts when she saw the mess.","The casual voice makes the speaker feel real and close to the audience, which …","It is not ‘wrong’ language. Say what feeling it gives."],
["Inclusive language","voice","Words like ‘we’ and ‘our’ that include the audience.","Together, we can make our streets safer.","Including the audience builds a sense of shared purpose, so readers feel …","Quote the ‘we’ and say who it includes."],
["Modality","voice","Words showing how certain or forceful something is.","We must act now. We might lose the river.","Strong modality (must) shows urgency; weak modality (might) shows doubt, which …","Name whether the modal word is strong or weak."],
["Statistics","voice","Numbers or data used as proof.","Seven out of ten students said they felt unprepared.","The figures make the claim feel factual and trustworthy, which persuades readers to …","Say whether the number makes the claim believable or shocking."],
["Expert opinion","voice","Quoting an authority to give an argument weight.","Dr Lee, a sleep researcher, says teenagers need nine hours.","The expert’s title makes the claim sound reliable, so readers are more likely to …","Name the expert’s role, not only the name."],
// ---------- VISUAL ----------
["Negative space","visual","Empty area around the subject that draws the eye or shows isolation.","A tiny figure stands in the corner of a huge empty field.","The empty space makes the figure feel small and alone, which suggests …","Empty space is a choice. Say what the emptiness suggests."],
["Lighting","visual","How light and shadow are used to shape mood.","A single lamp lights only the child’s face.","The bright spot draws attention to the child and the dark edges create …","Say which part is lit and which is dark."],
["Mid shot","visual","A shot that shows a person from the waist up.","The two friends are framed from the waist up, shoulder to shoulder.","The medium distance shows body language and the relationship between people, which …","Compare it with a close-up (feelings) or long shot (setting)."],
["Typography","visual","The style, size and arrangement of lettering.","The warning is in thick red capital letters.","The bold lettering grabs attention and signals danger, which positions viewers to …","Describe one font choice, then say its effect."]
];

// ---------- Quiz maker: turns every TECH_MORE entry into a multiple-choice question ----------
// You do not need to edit this part. It picks three wrong answers from the SAME group
// so the options look similar and students must think about each one.
function techMoreQuiz(){
  return TECH_MORE.map(([name,group,meaning,ex],i)=>{
    const sameGroup=TECH_MORE.filter(t=>t[1]===group&&t[0]!==name).map(t=>t[0]);
    const others=TECH_MORE.filter(t=>t[1]!==group).map(t=>t[0]);
    // take from the same group first; fill up with other techniques if the group is small
    const wrong=shuffle([...sameGroup]).slice(0,3);
    for(const n of shuffle(others)){if(wrong.length>=3)break;wrong.push(n)}
    return {s:"Naming techniques",passage:`“${ex}”`,ask:"Which technique is mainly used here?",o:[name,...wrong],why:`${name}: ${meaning.charAt(0).toLowerCase()+meaning.slice(1)}`,ev:[],plain:"Read the example. What is the name of the main writing tool in it?"};
  });
}
