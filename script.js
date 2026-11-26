// To add questions: the FIRST option is always the correct one (the page shuffles them).
// "ev" lists the exact words to highlight, or the names of image areas for visual texts.
const q=(s,ask,o,why,ev=[])=>({s,ask,o,why,ev});
const TEXTS=[
{type:"Poetry",title:"Solitude",by:"Ella Wheeler Wilcox",
body:`Laugh, and the world laughs with you;
Weep, and you weep alone;
For the sad old earth must borrow its mirth,
But has trouble enough of its own.
Sing, and the hills will answer;
Sigh, it is lost on the air;
The echoes bound to a joyful sound,
But shrink from voicing care.`,
vocab:[["weep","to cry","khóc"],["mirth","joy and laughter","niềm vui"],["shrink from","to pull back from","né tránh, lùi lại"]],
qs:[
q("Technique","Which technique is most important in the first two lines?",["Contrast","Simile","Onomatopoeia","Rhetorical question"],"“Laugh” is set against “weep”, and company against being alone. Putting opposites side by side makes the difference sharp.",["Laugh, and the world laughs with you;","Weep, and you weep alone;"]),
q("Technique","“The sad old earth must borrow its mirth” is an example of which technique?",["Personification","Simile","Hyperbole","Onomatopoeia"],"The earth is given human qualities: it is sad and it borrows. This suggests the whole world is already tired and troubled.",["the sad old earth must borrow its mirth"]),
q("Theme","What is the main message of this stanza?",["People share joy readily, but sorrow is often carried alone","Singing in nature is the best cure for a sad mood","Old people understand trouble better than young people","Friends always stay close when life becomes difficult"],"Each pair of lines shows happiness receiving a reply and sadness receiving none.",["Weep, and you weep alone;","But shrink from voicing care."]),
q("Tone","Which words best describe the poet’s tone?",["Reflective and melancholic","Joyful and carefree","Furious and accusing","Playful and teasing"],"The poet thinks carefully about a painful truth. Words such as “alone”, “trouble” and “care” create sadness.",["alone","trouble","care"]),
q("Evidence","Which quotation best shows that sadness gets no reply?",["“Sigh, it is lost on the air”","“Sing, and the hills will answer”","“Laugh, and the world laughs with you”","“The echoes bound to a joyful sound”"],"A sigh disappears (“lost”), while the other quotations show a happy sound being answered.",["Sigh, it is lost on the air;"])
]},
{type:"Poetry",title:"Arrival Hall",by:"Practice poem",
body:`My mother holds the passport like a small, closed door.
Above us the signs speak and speak;
none of them speak to us.

I am nine. I carry the rice cooker
and the word hello,
which is the only one I trust.

A man in a blue uniform smiles.
Hello, I say. Hello. Hello.
My mother looks at me
as if I have built a bridge.`,
vocab:[["passport","the document you use to travel to another country","hộ chiếu"],["uniform","special clothes worn for a job or school","đồng phục"],["trust","to believe something is safe or true","tin tưởng"]],
qs:[
q("Technique","“Like a small, closed door” is an example of which technique?",["Simile","Personification","Hyperbole","Alliteration"],"The word “like” compares the passport to a door. A closed door suggests the family is not yet sure they will be let in.",["like a small, closed door"]),
q("Technique","Which techniques appear in “the signs speak and speak”?",["Personification and repetition","Onomatopoeia and rhyme","Simile and hyperbole","Irony and rhetorical question"],"Signs cannot really speak, and “speak” is repeated. The language around the family feels constant but impossible to join.",["the signs speak and speak;","none of them speak to us."]),
q("Evidence","Which quotation best shows the child feels unsure in the new language?",["“the only one I trust”","“I am nine”","“in a blue uniform”","“Above us the signs”"],"If “hello” is the only word the child trusts, all other words still feel unsafe.",["which is the only one I trust."]),
q("Theme","Which central idea does the poem explore?",["Language can shut people out, and one word can begin to connect them","Air travel is an exciting adventure that children always enjoy","Parents are always braver than their children in new places","Official rules are the best way to keep families safe"],"The poem moves from signs that exclude the family to a greeting that works like a bridge.",["none of them speak to us.","as if I have built a bridge."]),
q("Tone","What is the tone at the end of the poem?",["Quietly hopeful","Bitter and angry","Mocking and comic","Cold and formal"],"The smile, the repeated greeting and the “bridge” suggest a small but real success.",["A man in a blue uniform smiles.","as if I have built a bridge."])
]},
{type:"Fiction",title:"The Second Cup",by:"Practice story extract",
body:`Every morning for forty-one years, Grandad had made two cups of tea. On the first Monday after the funeral, he made two again.

I watched him from the doorway. He set one cup at his place and one by the window, where the chair still held the shape of her blue cushion. The kettle ticked as it cooled. Neither of us said anything.

“Silly,” he murmured at last. He lifted her cup, carried it to the sink and stopped there, holding it over the drain. The steam curled around his fingers. He did not pour.

I pulled out her chair. “I could try it,” I said. “If you show me how she liked it.”

He looked at me for a long time. Then he reached for the milk.`,
vocab:[["funeral","a ceremony after someone has died","đám tang"],["murmur","to speak very quietly","thì thầm"],["drain","the hole where water leaves a sink","lỗ thoát nước"]],
qs:[
q("Perspective","From whose viewpoint is the story told?",["A grandchild, using first person","Grandad, using first person","An all-knowing narrator, using third person","The reader, using second person"],"“I watched him” shows a first-person narrator, and “Grandad” shows the narrator is his grandchild.",["I watched him from the doorway."]),
q("Technique","What do the two cups of tea mainly symbolise?",["A shared life that Grandad is not ready to let go","Grandad’s wish to welcome a new neighbour","The family’s worry about wasting food and drink","The narrator’s dislike of early mornings"],"The habit lasted forty-one years. Making the second cup after the funeral keeps her part of the morning.",["two cups of tea","he made two again"]),
q("Technique","What is the effect of the short sentence “He did not pour.”?",["It slows the moment and stresses that he cannot let her go","It speeds up the action and creates an exciting chase","It adds humour by showing that he is very clumsy","It explains clearly how tea should be prepared"],"A short, simple sentence makes the reader pause on his hesitation.",["He did not pour."]),
q("Mood","How does the mood change across the extract?",["From quiet sorrow to gentle comfort","From cheerful energy to sudden anger","From mystery to terrifying danger","From boredom to loud celebration"],"The silence after the funeral feels sad. The offer to share the tea, and his reply, bring comfort.",["Neither of us said anything.","Then he reached for the milk."]),
q("Theme","Which theme is best supported?",["Sharing small rituals can help people face grief together","People should give up old habits as quickly as possible","Grief disappears once the funeral is finished","Children are unable to understand the loss of a loved one"],"The narrator does not try to stop the ritual. The narrator joins it.",["I pulled out her chair.","If you show me how she liked it."])
]},
{type:"Non-fiction",title:"An Accent Is Evidence",by:"Practice speech",
body:`Good morning, everyone.

When I first came to this school, I practised one sentence for a whole bus ride: “May I sit here?” Four words. I was terrified of every one of them.

Maybe you know that feeling. Maybe you have swallowed a question because it might come out wrong. Maybe you have laughed at a joke you did not understand, just to belong.

An accent is not a mistake. An accent is evidence. It is evidence of another language, another home, another whole way of seeing the world.

So this year, I am asking you for something small. When someone is searching for a word, wait. Do not finish the sentence for them. Do not look away. Wait, because ten seconds of your patience may be the first time they feel welcome here.`,
vocab:[["terrified","very afraid","khiếp sợ"],["accent","the way a person sounds when speaking","giọng nói"],["evidence","proof that shows something is true","bằng chứng"],["patience","being able to wait calmly","sự kiên nhẫn"]],
qs:[
q("Technique","Which techniques are used in the three sentences beginning “Maybe you”?",["Anaphora and direct address","Simile and hyperbole","Onomatopoeia and rhyme","Irony and personification"],"Anaphora is repetition at the start of sentences. With “you”, it asks each listener to remember a similar experience.",["Maybe you know","Maybe you have swallowed","Maybe you have laughed"]),
q("Technique","How does “An accent is not a mistake. An accent is evidence.” work?",["Contrast and repetition turn a supposed weakness into a strength","A simile compares speaking with an accent to solving a crime","A rhetorical question invites the audience to doubt the speaker","Exaggeration makes the audience laugh at the speaker’s accent"],"The speaker rejects one idea and replaces it with another, using the same sentence opening.",["An accent is not a mistake. An accent is evidence."]),
q("Technique","Which technique is shown by “Do not finish the sentence for them. Do not look away.”?",["Imperatives","Metaphor","Assonance","Flashback"],"Imperatives are commands. They give the audience clear actions to take.",["Do not finish the sentence for them.","Do not look away."]),
q("Purpose","What is the main purpose of the speech?",["To persuade listeners to be patient with people learning English","To entertain listeners with a funny story about a bus trip","To inform listeners how different accents develop over time","To complain that school transport is crowded and uncomfortable"],"The final paragraph asks the audience to change how they behave. The bus story supports that request.",["I am asking you for something small."]),
q("Audience","Who is the intended audience?",["Students at the speaker’s school","Drivers at a local bus company","University experts who study language","Tourists planning a holiday overseas"],"“This school”, “here” and “everyone” show the speaker is addressing the school community.",["Good morning, everyone.","this school","welcome here"]),
q("Tone","Which words best describe the tone?",["Sincere and encouraging","Sarcastic and dismissive","Hopeless and defeated","Distant and technical"],"The speaker shares a personal fear honestly, then invites listeners to do something achievable.",["I was terrified of every one of them.","something small"])
]},
{type:"Non-fiction",title:"Bring Back the Front Step",by:"Practice opinion article",
body:`Remember the front step? It was never much: a slab of concrete, still warm at six o’clock. Yet it was where neighbours became more than numbers on letterboxes.

Today we drive into our garages, the doors roll shut behind us, and the street is left to the wheelie bins. We have never been so easy to reach, or so hard to bump into.

Nobody planned this loneliness. It crept in, one high fence and one glowing screen at a time.

The fix will not arrive in an app. It might arrive on a Tuesday evening, if you carry a chair outside, sit down and look up when someone walks past. You may feel a little foolish. Do it anyway.`,
vocab:[["neighbour","a person who lives near you","hàng xóm"],["loneliness","the sad feeling of being alone","sự cô đơn"],["crept","moved in slowly and quietly (past of creep)","len lỏi"],["foolish","silly","ngớ ngẩn"]],
qs:[
q("Technique","Why does the writer open with “Remember the front step?”",["A rhetorical question invites readers to share a memory","A command orders readers to repair their front steps","A statistic proves that most houses have concrete steps","A simile compares a front step with a letterbox"],"No spoken answer is expected. The question draws readers into the memory before the argument begins.",["Remember the front step?"]),
q("Technique","Which technique is used in “It crept in”?",["Personification","Simile","Onomatopoeia","Rhetorical question"],"Loneliness is described as creeping, like a living thing. This shows it arrived slowly without being noticed.",["It crept in"]),
q("Technique","“So easy to reach, or so hard to bump into” mainly uses:",["Paradox, setting two seemingly opposite ideas together","Alliteration, repeating one consonant for a musical sound","Onomatopoeia, copying the sound of people colliding","Flashback, returning to an event from the writer’s childhood"],"Technology makes contact easy, yet face-to-face meetings are rare. The surprising contrast makes readers think.",["so easy to reach, or so hard to bump into"]),
q("Purpose","What does the writer want readers to do?",["Make a small effort to connect with their neighbours","Download an app that organises street events","Replace their high fences with larger garages","Move to an older suburb with warmer concrete"],"The last paragraph rejects an app as the answer and suggests sitting outside.",["if you carry a chair outside","Do it anyway."]),
q("Audience","Who is the article most likely written for?",["Adults living in suburban streets","Young children learning to read","Builders who work with concrete","Investors in new phone apps"],"References to driving into garages, fences and neighbours suggest adult residents of suburbs.",["we drive into our garages","neighbours","one high fence"]),
q("Tone","How does the tone develop?",["From nostalgic to concerned and then encouraging","From excited to jealous and then boastful","From scientific to comic and then indifferent","From cheerful to fearful and then hopeless"],"The writer looks back fondly, worries about the present, then urges readers to act.",["Remember the front step?","Nobody planned this loneliness.","Do it anyway."])
]},
{type:"Visual text",title:"Room for You",by:"Practice poster",art:"poster",
vocab:[["community","the people who live in one area","cộng đồng"],["invitation","asking someone to come","lời mời"],["salience","the part of an image you notice first","điểm nổi bật"]],
qs:[
q("Visual technique","How is the empty chair made to stand out?",["Salience, through bright yellow against dark blue","A close-up shot of a person’s facial expression","A high camera angle looking down from a roof","Blurred lines that suggest very fast movement"],"The bright, large chair in the foreground contrasts with the dark background, so the eye goes to it first.",["chair"]),
q("Visual technique","What does the empty chair most likely symbolise?",["An open place where the viewer can belong","A warning that the furniture is damaged","A person who has left the table in anger","An event that nobody wishes to attend"],"The chair faces the shared table and sits beside the words “room for you”.",["chair","headline"]),
q("Language technique","What is the effect of the word “you”?",["It speaks directly to the viewer, making the invitation personal","It describes a character in a story who is eating lunch","It gives a factual detail about the time of the event","It creates distance between the viewer and the organisers"],"This is direct address, also called second person.",["headline"]),
q("Purpose","What is the main purpose of the poster?",["To invite people to a free community lunch","To sell new dining furniture to families","To teach readers how to cook a Sunday meal","To report on a meeting held at a local hall"],"The details give the event, cost, day, time and place.",["details"]),
q("Audience","Who is the poster most likely aimed at?",["Local people who would welcome some company","Chefs looking for work in a restaurant","International tourists booking a hotel","Students enrolling in a furniture course"],"A local hall and a free shared lunch suggest nearby residents, especially those who may feel alone.",["headline","details"]),
q("Mood","What mood does the poster create?",["Warm and welcoming","Tense and threatening","Gloomy and hopeless","Chaotic and noisy"],"The warm light over the table and the friendly wording make the viewer feel included.",["light","headline"])
]},
{type:"Visual text",title:"Platform 3",by:"Practice illustration",art:"platform",
vocab:[["platform","where people wait for a train","sân ga"],["departure","the act of leaving","sự khởi hành"],["isolation","being separated from others","sự cô lập"]],
qs:[
q("Visual technique","What is the effect of showing the person as very small in a wide space?",["It suggests isolation and vulnerability","It suggests power and control over others","It shows the person’s exact facial expression","It creates the feeling of a crowded event"],"A long shot makes the surroundings dominate the person.",["person"]),
q("Visual technique","The platform edge draws the eye towards the train. What is this called?",["Leading line","Direct gaze","Close-up","Typography"],"Strong lines in a composition guide the viewer’s eye from one part to another.",["edge","train"]),
q("Visual technique","What helps the person stand out?",["Contrast between the pool of light and the dark night","A large written label placed above the person","A direct gaze from the person to the viewer","A bright crowd gathered closely around the person"],"The dark figure is framed by the pale lamplight, with darkness around it.",["lamp","person"]),
q("Mood","What mood is created?",["Lonely and still","Festive and lively","Angry and violent","Silly and playful"],"Cool colours, empty space and a single figure create quietness and loneliness.",["person","train"]),
q("Theme","Which theme is best supported by the visual evidence?",["Separation and the feeling of being left behind","The excitement of travelling with a large group","The joy of a family meeting after many years","The success of modern technology in daily life"],"The red tail lights show a train moving away while one person remains with a suitcase. This is the strongest interpretation of these details.",["train","person"])
]},
{type:"HSC practice",title:"Short-answer skills",by:"Two practice texts",
body:`TEXT A: from a diary
Day 12. Ate lunch behind the library again. I have started counting the bricks. There are 212 that I can see.

TEXT B: from a letter
Dear Nan, you asked if I’ve made friends. On Friday a girl named Priya saved me a seat. It was only a seat. I have thought about it all weekend.`,
vocab:[["explain","to make clear how or why","giải thích"],["analyse","to examine how parts work and what they mean","phân tích"],["convey","to communicate an idea or feeling","truyền tải"],["belonging","feeling that you are part of a group","cảm giác thuộc về"]],
qs:[
q("Exam skill","A question begins “Explain how…”. What should your answer do?",["Make clear how or why, using evidence from the text","List as many techniques as possible without detail","Give your personal opinion without mentioning the text","Retell the whole text in the order that events happen"],"“Explain” asks for a clear link between what the composer does and the meaning it creates."),
q("Evidence","Which quotation from Text A best shows isolation?",["“I have started counting the bricks”","“Day 12”","“from a diary”","“that I can see”"],"Counting bricks suggests the writer has nobody to talk to during lunch.",["I have started counting the bricks."]),
q("Technique","In Text B, what is shown by “It was only a seat. I have thought about it all weekend.”?",["Contrast shows that a small act mattered a great deal","Hyperbole shows that the seat was unusually large","Irony shows that the writer is annoyed with Priya","A simile shows that school feels like a weekend"],"“Only” makes the act sound small, but the next sentence reveals its large effect.",["It was only a seat. I have thought about it all weekend."]),
q("Exam skill","“Explain how Text A conveys loneliness.” Which answer is strongest?",["The exact number “212” shows the writer has spent long lunches counting bricks alone, so readers sense how empty this time feels.","Text A uses many language techniques very well to show loneliness, which makes readers feel emotions and keeps them interested.","The writer is at lunch behind the library on day 12 and counts the bricks, and there are 212 bricks that the writer can see.","Loneliness is a very common human experience, and I think almost everyone has felt lonely at school at some time in their life."],"It uses evidence, explains how it works and links it to loneliness. The others are vague, retell the text or give only opinion.",["There are 212 that I can see."]),
q("Theme","Which statement best compares the two texts?",["Text A shows isolation, while Text B shows kindness beginning to ease it","Both texts show writers who enjoy spending every lunch completely alone","Text A celebrates friendship, while Text B argues that friendship is useless","Both texts mainly give instructions about how to behave in a library"],"A good comparison names the shared idea (belonging) and shows how each text treats it differently.",["Ate lunch behind the library again.","saved me a seat"]),
q("Exam skill","What is in Paper 1, Section I of the new HSC EAL/D exam?",["Short-answer questions on stimulus and/or unseen texts","One long creative story written from your own idea","A listening test based on several audio recordings","Only multiple-choice questions on your prescribed text"],"Section I has 4 to 6 short-answer questions worth 20 marks.")
]},
{type:"Exam style: visual",title:"Eighty Candles",by:"Practice illustration",art:"birthday",
vocab:[["celebrate","to mark a happy event","ăn mừng"],["gaze","where a person is looking","ánh nhìn"],["vector","a line that leads your eye","đường dẫn mắt"]],
qs:[
q("Visual technique","Why does the viewer notice the grandmother first?",["Salience: her bright red clothing and central position","Typography: large words are printed above her head","A long shot: she is tiny and far from the viewer","Darkness: she is hidden in shadow behind the family"],"Strong colour and a central position make her the salient figure.",["grandmother"]),
q("Visual technique","What do the family members’ eyes and leaning bodies create?",["Vectors that lead the viewer’s eye to the grandmother","A barrier that separates the grandmother from everyone","A sense that the family would prefer to leave the room","A focus on the decorations instead of the people"],"Gazes and body angles act as lines pointing towards her.",["family","familyR","grandmother"]),
q("Visual technique","What does the phone in the foreground suggest?",["The moment is valued and worth recording","The family is bored and ignoring the party","The grandmother is making a business call","The photograph was taken many centuries ago"],"Someone is saving the moment, which shows it matters to them.",["phone"]),
q("Mood","What mood is created?",["Joyful and affectionate","Tense and suspicious","Lonely and empty","Solemn and mournful"],"Smiles, candles, decorations and closeness create warmth.",["cake","family","familyR","garland"])
]},
{type:"Exam style: article",title:"Why Your Nerves Are on Your Side",by:"Practice feature article",
body:`It is the morning of your driving test. Your mouth is dry, your stomach turns and your hands feel strange on the wheel. Is something wrong with you? Probably not.

Many of us treat nervousness like a thief that steals our best performance. We tell friends to “just relax”, as if calm were a switch on the wall.

Nerves as an alarm

That jumpy feeling is your body paying attention. A faster heartbeat and sharper focus can help you check the mirror twice, or notice the cyclist you might have missed. The alarm is noisy, but it is trying to protect you.

Nerves as a wall

The same feeling can also stop us. When we fight it or fear it, it grows. A student who is sure she will fail may never raise her hand, and a talented singer may never audition.

So next time your heart races, do not order it to be quiet. Say, “Thank you, I am ready.” Then take one slow breath and begin.`,
vocab:[["nervousness","feeling worried before something","sự lo lắng"],["alarm","a warning signal","báo động"],["protect","to keep safe","bảo vệ"],["audition","a test performance to win a role","buổi thử giọng"]],
qs:[
q("Technique","“Like a thief that steals our best performance” is an example of which technique?",["Simile","Statistic","Onomatopoeia","Rhetorical question"],"“Like” compares nervousness to a thief, showing how many people see it as an enemy.",["like a thief that steals our best performance"]),
q("Structure","What do the two subheadings do?",["Divide the article into two sides of the same feeling","List two people who were interviewed by the writer","Show the order of events during one driving test","Introduce two products that readers should buy"],"“Alarm” presents nerves as helpful, while “wall” presents them as limiting.",["Nerves as an alarm","Nerves as a wall"]),
q("Technique","What is the effect of opening with “your driving test”?",["Direct address places the reader in a stressful moment","Third person keeps the reader far from the experience","A statistic proves that driving tests are unfair","Dialogue reveals an argument between two drivers"],"“Your” makes readers imagine the feelings for themselves.",["It is the morning of your driving test."]),
q("Purpose","What is the writer’s main purpose?",["To persuade readers to understand and work with nerves","To warn readers never to take a driving test","To entertain readers with a story about a famous singer","To instruct readers how to repair a car mirror"],"The ending tells readers how to respond positively to nerves.",["do not order it to be quiet","Then take one slow breath and begin."])
]},
{type:"Exam style: memoir",title:"Flour on the Ceiling",by:"Practice memoir extract",
body:`Dad was my first cooking teacher, mostly because he would not let anyone else near the stove. He had folded dumplings since he was seven and could do it with his eyes shut, which he often did, to show off.

My first dumpling looked like a sock that had been through the wash. My second one exploded. By the tenth, there was flour on the table, the dog and somehow the ceiling.

‘Smaller spoon!’ said Dad.

‘Pinch it! Don’t pat it, it is not a baby!’

‘Why is this one crying?’

For the record, it was soup.

But every so often I got one right. Dad would hold it up to the kitchen light and study it like a rare diamond. He did not say much. He just placed it on the tray beside his own, and I grinned for the rest of the night.`,
vocab:[["stove","the appliance you cook on","bếp"],["explode","to burst apart suddenly","nổ tung"],["grin","to smile widely","cười toe toét"],["memoir","true writing about your own memories","hồi ký"]],
qs:[
q("Technique","How does “like a sock that had been through the wash” create humour?",["A simile mocks the shapeless first attempt","A metaphor praises the perfect first attempt","A statistic measures the size of the dumpling","Personification shows the sock learning to cook"],"Comparing food with a washed sock is unexpected and makes the failure funny.",["like a sock that had been through the wash"]),
q("Technique","What is the effect of “the table, the dog and somehow the ceiling”?",["A list builds to a surprising end and exaggerates the mess","A list calmly records the ingredients needed for cooking","A contrast shows that the kitchen stayed completely clean","A question asks the reader to help tidy the kitchen"],"Each item is less expected than the one before.",["the table, the dog and somehow the ceiling"]),
q("Voice","What do Dad’s exclamations suggest about him?",["He is a demanding but playful teacher","He is silent and has no interest in cooking","He is frightened of making any mistakes","He is a stranger who dislikes the narrator"],"Short commands show high standards. The joke about a baby keeps them light.",["‘Smaller spoon!’","it is not a baby!"]),
q("Theme","Which theme is best supported?",["Practising a skill with a parent can build closeness","Children should avoid skills that are hard to learn","Cooking is only worthwhile when nothing goes wrong","Parents and children rarely enjoy time together"],"Success is rewarded by Dad placing the dumpling beside his own.",["He just placed it on the tray beside his own, and I grinned for the rest of the night."])
]},
{type:"Exam style: fiction",title:"The Night Bus Home",by:"Practice story extract",
body:`The bus climbed the last hill as the sky turned the colour of ripe persimmon. Warm air slid through the window and smelled of wet rice fields. I had not known I missed that smell.

‘Ten minutes,’ called the driver.

Ten years, I thought. That was how long it had been since Grandpa walked me down to the creek with an old jam jar in his hand.

‘Don’t chase them,’ he had whispered. ‘Stand still, and they will think you are a tree.’

So I stood still. One firefly blinked beside my ear, then another, until the dark was stitched with tiny green lights. Grandpa’s face glowed. I had never seen him look so young.

Now I study the water that fireflies need. He would laugh at the long words in my textbooks.

The bus rounded the corner. Below me, beyond the last house, something small and green blinked. Then another. I pressed my palm to the glass. I was nearly home.`,
vocab:[["persimmon","a sweet orange fruit","quả hồng"],["creek","a small stream","con suối nhỏ"],["firefly","an insect that makes light","đom đóm"],["stitched","sewn with thread","được khâu"]],
qs:[
q("Technique","“Warm air slid through the window and smelled of wet rice fields” mainly uses:",["Sensory imagery","Rhetorical question","Direct address","Statistics"],"Touch and smell help readers experience the return home.",["Warm air slid through the window and smelled of wet rice fields."]),
q("Technique","“The dark was stitched with tiny green lights” is an example of which technique?",["Metaphor","Simile","Onomatopoeia","Imperative"],"The lights are described as stitches without using “like” or “as”.",["the dark was stitched with tiny green lights"]),
q("Structure","What does the move from “Ten minutes” to “Ten years” do?",["Links the present journey to a flashback","Shows that the bus is running very late","Changes the narrator to the bus driver","Ends the story before the memory begins"],"The repeated “Ten” leads from the present into the past.",["‘Ten minutes,’","Ten years, I thought."]),
q("Theme","What do the fireflies most strongly symbolise?",["A lasting connection to Grandpa and home","The danger of travelling alone at night","The narrator’s dislike of the countryside","The speed of modern public transport"],"They appear in the memory, shape the narrator’s study and greet the return.",["One firefly blinked beside my ear","something small and green blinked","I was nearly home."])
]}
];

// Technique → effect sets: [name, usual effect, example, three wrong choices (names of other techniques)]
const DRILLS=[["Language effects",[
["Simile","Compares two things using “like” or “as” to make an idea clearer","Her voice was like warm tea.",["Onomatopoeia","Rhetorical question","Flashback"]],
["Metaphor","Describes one thing as another, giving it that thing’s qualities","The classroom was a zoo.",["Imperative","Alliteration","Direct address"]],
["Personification","Gives human qualities to non-human things, making them feel alive","The wind whispered through the trees.",["Hyperbole","Contrast","Anecdote"]],
["Hyperbole","Exaggerates to stress a feeling or to create humour","I have told you a million times.",["Onomatopoeia","Symbolism","First-person narration"]],
["Alliteration","Repeats starting sounds to create rhythm and draw attention to words","The silent snake slid south.",["Flashback","Personification","Imperative"]],
["Onomatopoeia","Uses words that copy sounds, so the reader can almost hear them","Drip, drip went the rain.",["Anaphora","Symbolism","Imperative"]],
["Repetition","Says a word or idea again to stress it and make it memorable","Never give up. Never.",["Flashback","Onomatopoeia","Simile"]],
["Anaphora","Starts several lines or sentences with the same words to build force","We will learn. We will try. We will grow.",["Personification","Contrast","Flashback"]],
["Rhetorical question","Makes the audience think, without needing a spoken answer","Who does not want a safe home?",["Onomatopoeia","Flashback","Alliteration"]],
["Sensory imagery","Appeals to sight, sound, smell, taste or touch so readers experience a scene","The warm bread smelled sweet.",["Imperative","Contrast","Anaphora"]],
["Contrast","Places differences side by side so that each one stands out","The street was loud, but her room was silent.",["Onomatopoeia","Direct address","Anecdote"]],
["Symbolism","Uses an object or image to stand for a bigger idea","A white dove represents peace.",["Alliteration","Imperative","Rhetorical question"]],
["Direct address","Speaks to the audience as “you” to involve them personally","You can make a difference.",["Flashback","Simile","Alliteration"]],
["Imperative","Gives a command that urges the audience to act","Join us today.",["Metaphor","Flashback","Onomatopoeia"]],
["Anecdote","Shares a brief personal story to make an idea relatable","When I was six, I got lost at a market.",["Alliteration","Imperative","Personification"]],
["Emotive language","Chooses powerful words to stir feelings such as pity or anger","Helpless puppies were cruelly abandoned.",["Flashback","Onomatopoeia","Simile"]],
["Short sentence","Creates a sharp pause that highlights a moment or builds tension","Then the lights went out.",["Simile","Anecdote","Alliteration"]],
["Flashback","Moves back to an earlier time to reveal a memory or background","Ten years earlier, I stood on this step.",["Rhetorical question","Hyperbole","Onomatopoeia"]],
["First-person narration","Uses “I” to bring readers close to one person’s thoughts","I held my breath and opened the letter.",["Personification","Imperative","Alliteration"]]
]],["Visual effects",[
["Salience","Makes one element stand out so the viewer notices it first","A red umbrella in a grey crowd.",["High angle","Low angle","Direct gaze"]],
["Vector","Creates a line that leads the viewer’s eye to something","A pointing arm leads your eye to the sky.",["Close-up","Colour","Low angle"]],
["Close-up","Shows details such as facial expression, building closeness with the subject","A tearful face fills the picture.",["Long shot","Vector","Low angle"]],
["Long shot","Shows the whole subject in its surroundings, giving a sense of place and scale","A tiny figure walks on a wide beach.",["Close-up","Direct gaze","Vector"]],
["Direct gaze","Has the subject look at the viewer, demanding attention","A child on a poster looks straight at you.",["Vector","Long shot","Colour"]],
["High angle","Looks down on a subject, often making it seem small or weak","The camera looks down on a lost child.",["Low angle","Colour","Direct gaze"]],
["Low angle","Looks up at a subject, often making it seem powerful","The camera looks up at a firefighter.",["High angle","Colour","Vector"]],
["Colour","Uses warm or cool shades to create a mood","Blue shadows fill an empty room.",["Vector","Direct gaze","Low angle"]],
["Framing","Surrounds a subject with edges or objects to focus on it or separate it","A person is seen alone inside a window.",["Colour","Low angle","Direct gaze"]]
]]];
DRILLS.forEach(([title,list])=>TEXTS.push({type:"Technique and effect",title,drill:true,
qs:list.map(([name,effect,example,wrong])=>({...q("Technique effect",name,[effect,...wrong.map(w=>list.find(r=>r[0]===w)[1])],`Example: “${example}”`),from:[name,...wrong]}))}));

// Exam practice. Each checklist line is worth one mark. "ev" maps a text number to its proof.
const VISUAL=/\b(salien\w*|vectors?|fram\w+|foreground|background|gaze|symbol\w*|colou?r\w*|contrast\w*|light\w*|composition|body language|position\w*|clothing|costume)\b/i;
const LANGUAGE=/\b(simile|metaphor|hyperbole|exaggerat\w*|imagery|dialogue|voice|anecdote|personif\w*|repetition|contrast|symbol\w*|first[- ]person|tone|idiom|exclamation|list|flashback|narrat\w*|irony)\b/i;
const COMPARE=/\b(similarly|whereas|in contrast|both|while|however|likewise|compared|on the other hand)\b/i;
const PAPER=[
{verb:"Describe",marks:2,mins:4,texts:[8],words:25,tech:VISUAL,
ask:"Describe how TWO visual techniques show that this moment matters to the family.",
means:"Describe: name what you can see and say what it shows.",
frame:"The composer uses ___ (a detail you can see) to show ___.",
crit:["Technique 1: I named it, pointed to a detail and said why the moment matters","Technique 2: I did the same with a different technique"],
sample:"Salience draws the eye to the grandmother, whose bright red top and central position show that she is the heart of the celebration. The family members lean in and look towards her, creating vectors that show how much they value her and want to share this milestone.",
ev:{8:["grandmother","family","familyR"]}},
{verb:"Explain",marks:3,mins:6,texts:[9],words:40,
ask:"Explain TWO aspects of nervousness in this article and their effect on people.",
means:"Explain: show how or why, using the text.",
frame:"One aspect of nervousness is ___. The text states “___”, so people ___.",
crit:["I explained one aspect of nervousness and its effect on people","I explained a second aspect and its effect on people","I supported both with short quotations or close references"],
sample:"First, nervousness can protect people because it is “your body paying attention”. Sharper focus may help a driver “notice the cyclist” they could otherwise miss. However, it can also hold people back. When it is feared it grows, so a student “may never raise her hand” and loses the chance to show what she can do.",
ev:{9:["That jumpy feeling is your body paying attention.","notice the cyclist","The same feeling can also stop us.","may never raise her hand"]}},
{verb:"Analyse",marks:4,mins:8,texts:[10],words:70,tech:LANGUAGE,
ask:"Analyse how humour conveys the experience of learning to cook.",
means:"Analyse: examine how the parts work together to create meaning.",
frame:"The ___ “___” creates humour by ___. This conveys that learning is ___.",
crit:["I named at least two ways the text creates humour","I quoted the text for each one","I explained HOW each one creates humour","I linked the humour to the experience of learning"],
sample:"Humour shows that learning is messy but rewarding. The simile “like a sock that had been through the wash” mocks the narrator’s first attempt, inviting readers to laugh at a beginner’s clumsiness. The list “the table, the dog and somehow the ceiling” builds to an absurd exaggeration, capturing the chaos of repeated practice. Dad’s exclamation “it is not a baby!” gives him a strict yet playful voice, so his criticism feels affectionate. The final success therefore feels earned and draws parent and child closer.",
ev:{10:["like a sock that had been through the wash","the table, the dog and somehow the ceiling","it is not a baby!","I grinned for the rest of the night."]}},
{verb:"Compare",marks:6,mins:12,texts:[10,11],words:110,tech:LANGUAGE,compare:true,
ask:"Compare how “Flour on the Ceiling” and “The Night Bus Home” explore family connections through textual conventions and language features.",
means:"Compare: show similarities and differences between BOTH texts.",
frame:"Both composers show that ___. In the memoir, ___. Similarly / In contrast, the story ___.",
crit:["I opened with an idea about family connection that both texts share","Memoir: I named a textual convention, such as anecdote or dialogue","Memoir: I quoted a language feature and linked it to connection","Story: I named a textual convention, such as flashback or narrator","Story: I quoted a language feature and linked it to connection","I compared them using words such as similarly, whereas or in contrast"],
sample:"Both composers show that family connections grow through learning from an older relative. As a memoir, “Flour on the Ceiling” uses a first-person anecdote and lively dialogue to recreate time shared in the kitchen. The simile “like a rare diamond” shows how much Dad values his child’s success, even though “He did not say much.” Similarly, “The Night Bus Home” uses first-person narration, but as fiction it moves into a flashback prompted by the journey. In contrast to the noisy humour of the memoir, the quiet metaphor “the dark was stitched with tiny green lights” creates wonder and suggests that memory still joins the narrator to Grandpa. While one connection is built through everyday practice, the other lasts through memory and shapes what the narrator studies.",
ev:{10:["Dad would hold it up to the kitchen light and study it like a rare diamond. He did not say much."],11:["the dark was stitched with tiny green lights","Now I study the water that fireflies need."]}},
{verb:"Write",marks:0,mins:30,texts:[],words:200,tech:null,
ask:"Write an imaginative or persuasive piece about how one small part of life can bring both difficulty and joy. Use ONE stimulus.",
means:"Choose a clear audience and purpose before you start.",
frame:"Plan first: Who is it for? What is the difficulty? Where does the joy appear?",
crit:["My piece shows both a difficulty and a joy","One stimulus plays an important part","My ideas have a clear beginning, development and ending","I used at least two techniques on purpose","My language suits my audience and purpose, and I proofread it"]}
];

const ART={
birthday:{label:"Illustration. A grandmother in a bright red top sits at the centre behind a birthday cake with lit candles. Four family members lean in and look at her, under a flower garland. In the foreground, two hands hold a phone that is photographing the scene.",
spots:{grandmother:[150,136,100,150],cake:[136,252,128,96],family:[14,128,126,200],familyR:[260,128,126,200],phone:[92,384,216,132],garland:[8,24,384,100]},
svg:`<rect width="400" height="520" fill="#20424a"/>
<path d="M12 48Q200 150 388 48" stroke="#5f8f6a" stroke-width="8" fill="none"/>
<g fill="#f2b8c6"><circle cx="40" cy="62" r="13"/><circle cx="126" cy="93" r="13"/><circle cx="232" cy="99" r="13"/><circle cx="330" cy="75" r="13"/></g>
<g fill="#ffe08a"><circle cx="80" cy="80" r="11"/><circle cx="178" cy="101" r="11"/><circle cx="284" cy="90" r="11"/><circle cx="364" cy="60" r="11"/></g>
<g fill="#7894a0"><path d="M30 340l26-130q40-22 64 6l10 124zM370 340l-26-130q-40-22-64 6l-10 124z"/></g>
<g fill="#c98f6a"><circle cx="94" cy="178" r="27"/><circle cx="306" cy="178" r="27"/><circle cx="42" cy="244" r="21"/><circle cx="358" cy="244" r="21"/></g>
<g fill="#5b7682"><path d="M16 340q2-76 28-76t30 76zM384 340q-2-76-28-76t-30 76z"/></g>
<g fill="#1b1d24"><circle cx="103" cy="176" r="3.5"/><circle cx="115" cy="177" r="3.5"/><circle cx="297" cy="176" r="3.5"/><circle cx="285" cy="177" r="3.5"/><circle cx="50" cy="240" r="3"/><circle cx="350" cy="240" r="3"/></g>
<path d="M98 190q9 9 18-1M302 190q-9 9-18-1" stroke="#1b1d24" stroke-width="3" fill="none"/>
<path d="M148 340q2-122 52-122t52 122z" fill="#e0303f"/><circle cx="200" cy="184" r="32" fill="#d9a47c"/>
<path d="M167 184q-2-42 33-42t33 42q-12-24-33-24t-33 24z" fill="#e4e4e8"/>
<path d="M186 183q4-5 8 0M206 183q4-5 8 0M187 197q13 13 26 0" stroke="#1b1d24" stroke-width="3" fill="none"/>
<rect x="14" y="338" width="372" height="22" rx="4" fill="#c9a27a"/>
<ellipse cx="200" cy="280" rx="62" ry="30" fill="#ffd98a" opacity=".28"/>
<rect x="152" y="300" width="96" height="40" rx="6" fill="#fff4ea"/><path d="M152 312q12 14 24 0t24 0 24 0 24 0" stroke="#f08aa4" stroke-width="6" fill="none"/>
<g stroke="#ffe08a" stroke-width="5"><path d="M168 300v-22M189 300v-26M211 300v-26M232 300v-22"/></g>
<g fill="#ffab2e"><ellipse cx="168" cy="272" rx="4" ry="7"/><ellipse cx="189" cy="268" rx="4" ry="7"/><ellipse cx="211" cy="268" rx="4" ry="7"/><ellipse cx="232" cy="272" rx="4" ry="7"/></g>
<path d="M60 520l58-76 30 18-30 58zM340 520l-58-76-30 18 30 58z" fill="#b97f5c"/>
<rect x="112" y="402" width="176" height="94" rx="12" fill="#0b0d12"/><rect x="124" y="412" width="152" height="74" rx="4" fill="#335d66"/>
<circle cx="200" cy="436" r="10" fill="#d9a47c"/><path d="M180 474q2-30 20-30t20 30z" fill="#e0303f"/><rect x="184" y="466" width="32" height="12" fill="#fff4ea"/>
<g fill="#7894a0"><circle cx="152" cy="448" r="9"/><circle cx="248" cy="448" r="9"/></g>`},
poster:{label:"Poster. A dark blue background with a warm lamp above a long table. Three grey figures sit behind the table. A large empty yellow chair stands in front. The words read: There’s room for you. Free community lunch, Sundays 12 pm, Wattle Street Hall.",
spots:{headline:[22,20,356,112],light:[110,138,180,92],chair:[128,262,144,170],details:[22,440,356,66]},
svg:`<rect width="400" height="520" fill="#14233f"/>
<g font-family="'Bricolage Grotesque',sans-serif" font-weight="800" fill="#fff" text-anchor="middle"><text x="200" y="68" font-size="38">THERE’S ROOM</text><text x="200" y="116" font-size="44">FOR <tspan fill="#ffd23f">YOU</tspan></text></g>
<path d="M188 150h24l62 142H126z" fill="#ffd98a" opacity=".22"/><path d="M176 168q24-34 48 0z" fill="#ffd98a"/>
<g fill="#8b98b0"><circle cx="90" cy="244" r="19"/><path d="M62 300q4-36 28-36t28 36z"/><circle cx="200" cy="238" r="19"/><path d="M172 298q4-36 28-36t28 36z"/><circle cx="310" cy="244" r="19"/><path d="M282 300q4-36 28-36t28 36z"/></g>
<rect x="30" y="296" width="340" height="18" rx="4" fill="#c9a27a"/><path d="M52 314h12v86H52zM336 314h12v86h-12z" fill="#a5825f"/>
<g fill="#fff"><ellipse cx="90" cy="295" rx="24" ry="5"/><ellipse cx="200" cy="295" rx="24" ry="5"/><ellipse cx="310" cy="295" rx="24" ry="5"/></g>
<g fill="#ffd23f"><rect x="142" y="272" width="14" height="96" rx="5"/><rect x="244" y="272" width="14" height="96" rx="5"/><rect x="150" y="286" width="100" height="17" rx="5"/><rect x="150" y="318" width="100" height="17" rx="5"/><rect x="134" y="360" width="132" height="20" rx="6"/><path d="M142 378h15l-5 48h-14zM243 378h15l4 48h-14z"/></g>
<g font-family="'Atkinson Hyperlegible',sans-serif" fill="#fff" text-anchor="middle"><text x="200" y="468" font-size="21" font-weight="700">Free Community Lunch</text><text x="200" y="494" font-size="16">Sundays 12 pm · Wattle Street Hall</text></g>`},
platform:{label:"Illustration. A wide, empty railway platform at night. A small person with a suitcase stands alone under a lamp. The platform edge leads towards the red tail lights of a distant train.",
spots:{lamp:[62,66,120,92],person:[88,240,76,104],train:[268,150,100,92],edge:[190,238,120,250]},
svg:`<rect width="400" height="520" fill="#0c1830"/>
<circle cx="338" cy="62" r="18" fill="#cfdcf5"/>
<rect y="214" width="400" height="306" fill="#1b2c4d"/>
<path d="M0 214H292L214 520H0z" fill="#3a4d70"/>
<path d="M292 214L214 520" stroke="#e8eefc" stroke-width="5" fill="none"/>
<path d="M312 214L286 520M338 214L384 520" stroke="#7285a8" stroke-width="3" fill="none"/>
<rect x="286" y="168" width="64" height="58" rx="8" fill="#253a60"/><rect x="296" y="177" width="44" height="20" rx="3" fill="#8fa6cc"/>
<circle cx="299" cy="214" r="5" fill="#ff4d4d"/><circle cx="337" cy="214" r="5" fill="#ff4d4d"/>
<path d="M114 106h20l62 236H52z" fill="#ffe9b0" opacity=".24"/>
<path d="M76 92h6v246h-6zM76 92h50v6H76z" fill="#0a1020"/><ellipse cx="124" cy="104" rx="16" ry="9" fill="#ffe9b0"/>
<ellipse cx="156" cy="336" rx="44" ry="7" fill="#101c35" opacity=".7"/>
<g fill="#080d1a"><circle cx="122" cy="264" r="10"/><path d="M110 278h24l5 34h-8v24h-7v-22h-4v22h-7v-24h-8z"/><rect x="141" y="312" width="18" height="24" rx="3"/><path d="M146 312v-6h8v6" stroke="#080d1a" stroke-width="2" fill="none"/></g>
<text x="24" y="492" font-family="'Atkinson Hyperlegible',sans-serif" font-size="18" fill="#fff">Platform 3 · 11:48 pm</text>`}
};

const $=id=>document.getElementById(id);
const shuffle=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
let best={};
try{best=JSON.parse(localStorage.getItem("evidence-best"))||{}}catch(e){}
let S,mode="quiz";
let P={i:0,a:PAPER.map(()=>({text:"",shown:false,ticks:[]}))};
try{const old=JSON.parse(localStorage.getItem("evidence-paper"));if(old?.a?.length===PAPER.length)P=old}catch(e){}
const item=(t,n)=>({t,n,order:shuffle([0,1,2,3]),pick:null});
function start(set,items){
  if(!items) items=set==="mix"
    ? shuffle(TEXTS.flatMap((x,t)=>x.qs.map((_,n)=>[t,n]))).slice(0,10).map(p=>item(...p))
    : TEXTS[set].qs.map((_,n)=>item(set,n));
  S={set,items,i:0,done:false,retry:false};
  render();
}
function nav(){
  document.querySelectorAll("[data-mode]").forEach(b=>b.setAttribute("aria-pressed",b.dataset.mode===mode));
  if(mode==="paper"){
    $("nav").innerHTML=PAPER.map((p,i)=>{const a=P.a[i];
      const status=a.shown?`Self-mark ${tally(i)}/${p.crit.length}`:a.text.trim()?"Draft started":`About ${p.mins} minutes`;
      return `<button data-paper="${i}" aria-pressed="${P.i===i}"><small>Question ${i+1}${p.marks?` · ${p.marks} marks`:""}</small><b>${p.verb}</b><small>${status}</small></button>`}).join("");
    return;
  }
  const entries=TEXTS.map((x,i)=>[i,x.type,x.title,x.qs.length]).sort((a,b)=>!!TEXTS[b[0]].drill-!!TEXTS[a[0]].drill).concat([["mix","All text types","Mixed practice",10]]);
  $("nav").innerHTML=entries.map(([id,type,title,n])=>`<button data-set="${id}" aria-pressed="${S.set===id}"><small>${type}</small><b>${title}</b><small>${best[id]!=null?`Best ${best[id]}/${n}`:`${n} questions`}</small></button>`).join("");
}
function reading(x,ev){
  let content;
  if(x.art){
    const a=ART[x.art];
    content=`<svg class="visual" viewBox="0 0 400 520" role="img" aria-label="${a.label}">${a.svg}${ev.map(k=>{const [X,Y,W,H]=a.spots[k];return `<rect class="spot" x="${X}" y="${Y}" width="${W}" height="${H}" rx="8"/>`}).join("")}</svg>`;
  }else{
    // collect every match, then merge overlaps so the markup stays valid
    const r=[];
    ev.forEach(e=>{const at=x.body.indexOf(e);if(at>-1)r.push([at,at+e.length])});
    r.sort((a,b)=>a[0]-b[0]);
    let out="",pos=0;
    r.forEach(([a,b])=>{if(b<=pos)return;a=Math.max(a,pos);out+=x.body.slice(pos,a)+"<mark>"+x.body.slice(a,b)+"</mark>";pos=b});
    content=`<div class="reading">${out+x.body.slice(pos)}</div>`;
  }
  return `<section class="panel"><p class="kicker">${x.type} · ${x.by}</p><h2>${x.title}</h2>${content}
  <details class="vocab"><summary>Vocabulary with Vietnamese</summary><dl>${x.vocab.map(v=>`<div><dt>${v[0]} · <span lang="vi">${v[2]}</span></dt><dd>${v[1]}</dd></div>`).join("")}</dl></details></section>`;
}
const right=it=>it.pick===0;
const tally=i=>P.a[i].ticks.filter(Boolean).length;
const totalMark=()=>PAPER.reduce((n,p,i)=>n+(p.marks&&P.a[i].shown?tally(i):0),0);
const save=()=>{try{localStorage.setItem("evidence-paper",JSON.stringify(P))}catch(e){}};
const words=s=>(s.match(/\S+/g)||[]).length;
const plain=s=>" "+s.toLowerCase().replace(/[^a-z0-9]+/g," ").trim()+" ";
// true when the answer repeats any three words in a row from the text
function usesText(answer,body){
  const w=plain(answer).trim().split(" "),b=plain(body);
  return w.some((_,k)=>k+2<w.length&&b.includes(` ${w.slice(k,k+3).join(" ")} `));
}
function quickChecks(p,text){
  const out=[[`At least ${p.words} words`,words(text)>=p.words]];
  if(p.tech) out.push(["Names a technique",p.tech.test(text)]);
  p.texts.filter(t=>TEXTS[t].body).forEach(t=>out.push([`Uses words from “${TEXTS[t].title}”`,usesText(text,TEXTS[t].body)]));
  if(p.compare) out.push(["Uses a comparing word",COMPARE.test(text)]);
  return out;
}
const STIMULI=`<section class="panel"><p class="kicker">Writing stimulus</p><h2>Choose one</h2><div class="stimuli">
<figure><svg viewBox="0 0 160 100" role="img" aria-label="A bent house key"><g fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"><circle cx="35" cy="50" r="20"/><path d="M55 50h44l40 14M112 55l-5 14M130 61l-5 14"/></g></svg><figcaption>A bent house key</figcaption></figure>
<figure><svg viewBox="0 0 160 100" role="img" aria-label="A paper boat on water"><g fill="none" stroke="currentColor" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"><path d="M25 58h110l-24 24H49zM50 58l30-42 30 42M80 16v42M15 92q16-9 32 0t32 0 32 0 32 0"/></g></svg><figcaption>A paper boat</figcaption></figure></div></section>`;
function paper(m){
  const i=P.i,p=PAPER[i],a=P.a[i],open=[...document.querySelectorAll(".vocab")].map(d=>d.open);
  m.className="exam";
  const left=p.texts.length?p.texts.map(t=>reading(TEXTS[t],a.shown?p.ev[t]:[])).join(""):STIMULI;
  const checked=!a.shown?"":`<div class="review"><h3>Quick check</h3>
    <ul class="checks">${quickChecks(p,a.text).map(([label,ok])=>`<li class="${ok?"ok":"bad"}"><b>${ok?"✓":"✗"}</b> ${label}</li>`).join("")}</ul>
    <p class="note">The quick check only looks for words. It cannot judge your ideas.</p>
    <fieldset><legend>${p.marks?"Mark yourself: tick only what your answer really does":"Tick what your writing really does"}</legend>
    ${p.crit.map((c,k)=>`<label><input type="checkbox" id="tick-${i}-${k}" data-tick="${k}" ${a.ticks[k]?"checked":""}><span>${c}</span></label>`).join("")}</fieldset>
    <p class="mark-line" id="markline" aria-live="polite"></p>
    ${p.sample?`<details open><summary>Sample answer (one good way, not the only way)</summary><p class="sample">${p.sample}</p></details>`:""}</div>`;
  m.innerHTML=`<div class="stack" id="reading">${left}</div><section class="panel">
    <span class="skill">Question ${i+1}${p.marks?` · ${p.marks} marks`:""} · about ${p.mins} minutes</span><h2>${p.ask}</h2>
    <p class="note">${p.means}</p><details><summary>Help me start</summary><p>${p.frame}</p></details>
    <label class="answer-label" for="answer">Your answer</label><textarea id="answer" rows="${p.marks&&p.marks<4?7:12}"></textarea>
    <p class="note" id="count"></p>
    <div class="actions"><button class="btn" data-act="check">${a.shown?"Check again":"Check my answer"}</button></div>
    ${checked}
    ${a.shown?`<div class="actions">${i<PAPER.length-1?`<button class="btn" data-act="pnext">Next question</button>`:""}${p.texts.length?`<button class="btn quiet phone" data-act="show">Show proof in the text</button>`:""}</div>`:""}</section>`;
  $("answer").value=a.text;
  $("count").textContent=`${words(a.text)} words`;
  document.querySelectorAll(".vocab").forEach((d,k)=>d.open=!!open[k]);
  markLine();
}
function markLine(){
  const el=$("markline");if(!el)return;
  const p=PAPER[P.i];
  el.textContent=p.marks?`This question: ${tally(P.i)}/${p.marks}. Questions 1 to 4 so far: ${totalMark()}/15.`:`Checklist: ${tally(P.i)}/${p.crit.length}`;
}
function render(){
  nav();
  const m=$("main");
  if(mode==="paper") return paper(m);
  m.className=S.done?"done":"";
  if(S.done) return results(m);
  const it=S.items[S.i],x=TEXTS[it.t],c=x.qs[it.n],answered=it.pick!==null;
  const open=document.querySelector(".vocab")?.open;
  if(x.drill) m.className="solo";
  const dots=S.items.map((d,i)=>`<i class="${d.pick===null?"":right(d)?"ok":"bad"} ${i===S.i?"now":""}">${d.pick===null?i+1:right(d)?"✓":"✗"}</i>`).join("");
  const opts=it.order.map((o,k)=>{
    let cls="",tag="";
    if(answered&&o===0){cls="ok";tag="✓ Correct"}
    else if(answered&&o===it.pick){cls="bad";tag="✗ Your answer"}
    return `<button class="${cls}" data-pick="${o}" ${answered?"disabled":""}><b>${"ABCD"[k]}</b><span>${c.o[o]}</span>${tag?`<span class="tag">${tag}</span>`:""}</button>`}).join("");
  m.innerHTML=(x.drill?"":`<div class="stack" id="reading">${reading(x,answered?c.ev:[])}</div>`)+`<section class="panel"><div class="dots" aria-label="Question ${S.i+1} of ${S.items.length}">${dots}</div>
  <span class="skill">${c.s}</span><h2>${c.ask}</h2>${x.drill?`<p class="note">Which effect matches this technique?</p>`:""}<div class="options">${opts}</div>
  <div aria-live="polite">${answered?`<div class="feedback ${right(it)?"ok":"bad"}"><strong>${right(it)?"Right":"Wrong"}</strong><p>${c.why}</p>${c.from&&!right(it)?`<p>The effect you chose belongs to <b>${c.from[it.pick]}</b>.</p>`:""}${x.drill?`<p>This is the usual effect. In an exam, explain how it works in that text.</p>`:""}</div>
  <div class="actions"><button class="btn" data-act="next" id="next">${S.i<S.items.length-1?"Next question":"See results"}</button>${c.ev.length?`<button class="btn quiet phone" data-act="show">Show proof in the text</button>`:""}</div>`:""}</div></section>`;
  const v=document.querySelector(".vocab");if(open&&v) v.open=true;
}
function results(m){
  const n=S.items.length,score=S.items.filter(right).length,skills={};
  S.items.forEach(it=>{const k=TEXTS[it.t].qs[it.n].s;skills[k]??=[0,0];skills[k][1]++;if(right(it))skills[k][0]++});
  const missed=n-score;
  m.innerHTML=`<section class="panel"><h2>${S.retry?"Retry results":"Your results"}</h2><div class="score">${score}/${n}</div>
  <p>${missed?`Practise the ${missed} you missed, and read each explanation again.`:"Every answer is right. Try another text, or write your own explanation for one question."}</p>
  <div class="scroll"><table><tr><th>Skill</th><th>Right</th></tr>${Object.entries(skills).map(([k,[a,b]])=>`<tr><td>${k}</td><td>${a} of ${b}</td></tr>`).join("")}</table></div>
  <div class="actions">${missed?`<button class="btn" data-act="missed">Retry missed questions</button>`:""}<button class="btn quiet" data-act="again">Start this set again</button></div></section>`;
}
document.addEventListener("click",e=>{
  const b=e.target.closest("button");if(!b)return;
  if(b.dataset.mode){mode=b.dataset.mode;render();return}
  if(b.dataset.paper!=null){P.i=+b.dataset.paper;save();render();return}
  if(b.dataset.act==="check"){
    const a=P.a[P.i];
    if(!a.text.trim()){$("count").textContent="Write your answer first, then check it.";$("answer").focus();return}
    a.shown=true;save();render();return}
  if(b.dataset.act==="pnext"){P.i++;save();render();$("main").scrollIntoView({block:"start"});return}
  if(b.dataset.set!=null){start(b.dataset.set==="mix"?"mix":+b.dataset.set);return}
  if(b.dataset.pick!=null){
    S.items[S.i].pick=+b.dataset.pick;render();$("next").focus({preventScroll:true});return}
  const a=b.dataset.act;
  if(a==="show") $("reading").scrollIntoView({block:"start"});
  if(a==="next"){
    if(S.i<S.items.length-1) S.i++;
    else{
      S.done=true;
      const score=S.items.filter(right).length;
      if(!S.retry){best[S.set]=Math.max(score,best[S.set]??0);try{localStorage.setItem("evidence-best",JSON.stringify(best))}catch(e){}}
    }
    render();$("main").scrollIntoView({block:"nearest"});
  }
  if(a==="again") start(S.set);
  if(a==="missed"){start(S.set,S.items.filter(i=>!right(i)).map(i=>item(i.t,i.n)));S.retry=true;render()}
});
document.addEventListener("input",e=>{
  if(e.target.id!=="answer")return;
  P.a[P.i].text=e.target.value;save();$("count").textContent=`${words(e.target.value)} words`;
});
document.addEventListener("change",e=>{
  const k=e.target.dataset.tick;if(k==null)return;
  P.a[P.i].ticks[+k]=e.target.checked;save();markLine();nav();
});
window.claude?.hot?.snapshot?.(()=>({S,P,mode}));
const boot=d=>{
  if(d?.P){P=d.P}
  if(d?.S){S=d.S;mode=d.mode||"quiz";render()}else start(0)};
window.claude?.hot?.ready?window.claude.hot.ready(boot):boot(window.claude?.hot?.data);
