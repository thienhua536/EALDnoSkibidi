/* =====================================================================
   content-paperc.js  —  PRACTICE PAPER C (new picture, no poem)
   ---------------------------------------------------------------------
   Same shape as Paper A and B. Four questions:
     c1 Describe (2)  the NEW picture "Room for one more"
     c2 Explain  (3)  the story "Saturday Rice"
     c3 Analyse  (4)  the speech "One More Chair"
     c4 Compare  (6)  the story and the speech
   To add a question: copy one object in PAPER_C and change the words.
   "ev" lists the exact words (or picture spots) shown when the student
   presses "Show proof in the text". Words must match the text EXACTLY.
   cat:"paperc" keeps these texts out of the Reading and Unseen tabs.
   ===================================================================== */

// ---- the new picture. spots = [x, y, width, height] boxes that can be highlighted ----
ART.makeroom={label:"Cartoon. A school lunch table. Three students sit on one side, looking towards a new student on the right in a bright orange hoodie who holds a tray. One student lifts his green bag off the seat to make space. The caption reads: Room for one more.",
spots:{newkid:[284,172,100,232],bag:[214,246,84,66],group:[26,168,200,150],table:[12,296,376,78],caption:[36,442,328,58]},
svg:`<rect width="400" height="520" fill="#f6ecd8"/><rect y="388" width="400" height="132" fill="#cdb892"/>
<rect x="40" y="40" width="120" height="86" rx="6" fill="#bfe0ef" stroke="#8a6a44" stroke-width="5"/><path d="M100 40v86M40 83h120" stroke="#8a6a44" stroke-width="4"/>
<g><path d="M44 316q-4-72 28-78t30 78zM118 316q-4-72 28-78t30 78z" fill="#5b8fb9"/><path d="M190 316q-4-72 28-78t30 78z" fill="#6aa37a"/></g>
<circle cx="73" cy="212" r="21" fill="#c98f6a"/><circle cx="147" cy="212" r="21" fill="#8f5f3f"/><circle cx="219" cy="212" r="21" fill="#e2b48c"/>
<path d="M52 205q21-26 42 0M126 203q21-28 42 2" fill="#2b2118"/><path d="M200 204q20-22 40 2" fill="#d9a441"/>
<g fill="#1b1d24"><circle cx="81" cy="214" r="3"/><circle cx="64" cy="214" r="3"/><circle cx="155" cy="214" r="3"/><circle cx="138" cy="214" r="3"/><circle cx="227" cy="214" r="3"/><circle cx="210" cy="214" r="3"/></g>
<path d="M66 224q8 6 16 0M140 224q8 6 16 0M212 224q8 6 16 0" stroke="#5a2f26" stroke-width="2.500" fill="none" stroke-linecap="round"/>
<rect x="12" y="300" width="376" height="16" rx="4" fill="#8a6a44"/><rect x="26" y="316" width="12" height="62" fill="#6f5436"/><rect x="360" y="316" width="12" height="62" fill="#6f5436"/>
<path d="M232 292l30-34 28 22-12 28z" fill="#3f7f5b" stroke="#2c5a41" stroke-width="3"/><path d="M246 282l14-8" stroke="#2c5a41" stroke-width="3"/><path d="M212 262q-10 4-14 12M214 276q-12 2-18 8" stroke="#8a6a44" stroke-width="3" fill="none" stroke-linecap="round"/>
<path d="M302 412C300 300 312 244 346 242S392 300 390 412z" fill="#f28c28"/><circle cx="346" cy="216" r="22" fill="#b97d58"/><path d="M324 210q22-26 44 0" fill="#1f1a16"/>
<g fill="#1b1d24"><circle cx="338" cy="218" r="3"/><circle cx="354" cy="218" r="3"/></g><path d="M338 230q8 7 16 0" stroke="#5a2f26" stroke-width="2.500" fill="none" stroke-linecap="round"/>
<rect x="308" y="268" width="72" height="12" rx="4" fill="#6b7480"/><rect x="316" y="262" width="56" height="8" rx="3" fill="#e9eef2"/><path d="M322 242l-18 24M368 244l18 24" stroke="#f28c28" stroke-width="9" stroke-linecap="round"/>
<path d="M300 288q-26 6-22 56 6 32 26 30z" fill="#d1491f" stroke="#a63512" stroke-width="3"/>
<rect x="36" y="446" width="328" height="52" rx="12" fill="#ffffff" opacity=".85"/><text x="200" y="482" text-anchor="middle" font-family="'Bricolage Grotesque',sans-serif" font-weight="800" font-size="30" fill="#1b2a3a">ROOM FOR ONE MORE.</text>`};

// ---- two new texts (no poem). cat:"paperc" hides them from the Reading and Unseen tabs ----
TEXTS.makeroom={cat:"paperc",kind:"Visual text",title:"Room for One More",by:"Practice cartoon",art:"makeroom",
vocab:[["tray","a flat board for carrying food","khay"],["hopeful","feeling that something good may happen","đầy hy vọng"],["gesture","a movement that shows a feeling","cử chỉ"]]};
TEXTS.rice={cat:"paperc",kind:"Fiction",title:"Saturday Rice",by:"Practice story extract",
body:`Every Saturday, Nana and I caught the 7:15 bus to the market. She carried the bags. I carried the words.

‘Two kilos of rice, please,’ I told the man at the stall, using my best grown-up voice. Nana nodded at every sentence as if she had written it herself.

On the bus home the bags sat between us like two sleeping dogs. She pressed a warm bun into my hand. She never said thank you, and I never needed her to.

Last Saturday, a girl from my class stood behind us in the queue. I heard her giggle. My face grew hot, and I wanted to shrink until I fitted inside my own shoe.

Then Nana turned and said, slowly, in careful English, ‘This is my granddaughter. She is my voice.’

I stood a little taller. The queue moved forward, and so did I.`,
vocab:[["queue","a line of people waiting","hàng người chờ"],["stall","a small table or booth selling things","quầy hàng"],["shrink","to become smaller","co lại"]]};
TEXTS.chair={cat:"paperc",kind:"Speech",title:"One More Chair",by:"Practice speech",
body:`Good morning, everyone.

When I first joined this school, I ate lunch in the library. Not because I loved books, although I do now, but because a library has no seats you can be refused.

Some of you know that feeling. Some of you have never needed to know it. Today I want to talk to both groups.

Belonging does not simply arrive. It is a chair that somebody pulls out for you. Somebody has to move their bag. Somebody has to say, “Sit here.”

So I am asking you to be that somebody. Look at the table you walk past tomorrow. Who is eating alone? And what would it cost you to move your bag?

It costs nothing. It costs one sentence. And it can change someone’s whole year.

Let us make this a school where every table has room for one more. Thank you.`,
vocab:[["refused","told that you cannot have or join something","bị từ chối"],["belonging","the feeling of being accepted in a group","cảm giác thuộc về"],["arrive","to come to a place","đến"]]};

const PAPER_C=[
{id:"c1",verb:"Describe",marks:2,mins:4,words:25,tech:"visual",texts:["makeroom"],ask:"Describe how TWO visual techniques show that the new student is being welcomed.",means:"Describe: name what you can see and say what it shows.",frame:"The cartoon uses ___ (a detail you can see) to show ___.",crit:["Technique 1: I named it, pointed to a detail and said what it shows about welcome","Technique 2: I did the same with a different technique"],sample:"Gaze and body language show welcome: the three seated students all look towards the newcomer, creating vectors that tell us he has their attention. Gesture adds to this, because one student lifts his green bag off the seat, a clear action that makes space. Colour also shows the newcomer is still an outsider: his bright orange hoodie stands out against the cool blues and greens of the group.",ev:{makeroom:["newkid","bag","group"]}},
{id:"c2",verb:"Explain",marks:3,mins:6,words:40,tech:null,texts:["rice"],ask:"Explain TWO ways the story shows how close the narrator and Nana are.",means:"Explain: show how or why, using the text.",frame:"One way is ___, shown by “___”. Another way is ___.",crit:["I explained one way the bond is shown","I explained a second way","I supported both with quotations or close references"],sample:"First, they depend on each other, shown by the metaphor “She carried the bags. I carried the words.” Each gives what the other lacks. Second, their love is shown quietly. Nana “pressed a warm bun into my hand”, and the narrator says she “never said thank you, and I never needed her to”, which shows they understand each other without speaking.",ev:{rice:["She carried the bags. I carried the words.","She pressed a warm bun into my hand.","She never said thank you, and I never needed her to."]}},
{id:"c3",verb:"Analyse",marks:4,mins:8,words:70,tech:"language",texts:["chair"],ask:"Analyse how the speaker uses language to persuade students to include others.",means:"Analyse: examine how the parts work together to create meaning.",frame:"The ___ “___” persuades the audience by ___. This makes students feel ___.",crit:["I named at least two language features","I quoted the text for each one","I explained HOW each one persuades","I linked the features to including others"],sample:"The speaker persuades by making inclusion feel small and easy. The metaphor “a chair that somebody pulls out for you” turns belonging into a simple action anyone can do. The repetition of “Somebody has to move their bag. Somebody has to say, ‘Sit here’” builds a steady rhythm that points to each listener. The direct question “what would it cost you to move your bag?” invites students to answer for themselves, and the short answer “It costs nothing.” shows how small the effort is. Together these make kindness seem possible for every student.",ev:{chair:["It is a chair that somebody pulls out for you.","Somebody has to move their bag. Somebody has to say, “Sit here.”","what would it cost you to move your bag?","It costs nothing."]}},
{id:"c4",verb:"Compare",marks:6,mins:12,words:110,tech:"language",compare:true,texts:["rice","chair"],ask:"Compare how “Saturday Rice” and “One More Chair” present belonging through language features.",means:"Compare: show similarities and differences between BOTH texts.",frame:"Both composers present belonging as ___. In the story, ___. Similarly / In contrast, the speech ___.",crit:["I opened with an idea about belonging that both texts share","Story: I named a language feature or convention, such as first-person voice","Story: I quoted a feature and linked it to belonging","Speech: I named a language feature or convention, such as direct address","Speech: I quoted a feature and linked it to belonging","I compared them using words such as similarly, whereas or in contrast"],sample:"Both composers present belonging as something one person gives to another. The story uses a metaphor, “She is my voice”, to show that Nana’s public support makes the narrator feel accepted. Similarly, the speech uses a metaphor, “a chair that somebody pulls out for you”, to turn belonging into a kind action. However, the story is told in first person, placing readers inside one moment of shame and relief, whereas the speech uses direct address and the question “what would it cost you?” to push the whole audience to act. While the story shows belonging being received, the speech shows it being offered.",ev:{rice:["She carried the bags. I carried the words.","She is my voice."],chair:["It is a chair that somebody pulls out for you.","what would it cost you to move your bag?"]}}
];

PLAIN_WRITE.c1="Look at the picture. Find TWO things, such as colour, where people look, or the bag being moved. Say how each one shows the new student is welcome.";
PLAIN_WRITE.c2="Find TWO places in the story that show Nana and the narrator care about each other. Quote them and say what each one shows.";
PLAIN_WRITE.c3="Find TWO tools the speaker uses, such as a comparison, repeated words, or a question. Say how each one makes students want to include others.";
PLAIN_WRITE.c4="Say what both texts show about belonging. Then give one example from the story and one from the speech, and say how they are alike and different.";
