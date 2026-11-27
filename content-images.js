/* =====================================================================
   content-images.js  —  PICTURES FOR FLASHCARDS
   ---------------------------------------------------------------------
   HOW TO ADD A PICTURE TO A FLASHCARD (3 easy steps)

   1. Find the card's FRONT text exactly as it appears on the card.
      Example: the Biology card whose front is "Mitosis".
   2. Get a picture:
        a) If you are using the ZIP on your own computer: make a folder called
           images next to index.html, put your file there (mitosis.png).
        b) If you want it to work in the online (artifact) version too, the picture
           must be INSIDE this file as text. Use svgUri(`<svg ...>...</svg>`)
           for an SVG drawing, or paste a data:image/png;base64,... address.
   3. Add one line inside CARD_IMAGES below:

        "Mitosis": "images/mitosis.png",                       (simple version)
        "Mitosis": {src:"images/mitosis.png", alt:"Four stages of mitosis"},
        "Mitosis": {src:"images/mitosis.png", alt:"...", front:true},   (show it on the FRONT too)

   - Lines end with a comma. The text before the colon must match the card exactly.
   - alt = a short description for people who cannot see the picture. Always write one.
   - Pictures normally appear on the BACK of the card (after you flip), so they do not give
     away the answer. Use front:true only when the picture is the question.
   - Cards you make yourself (Me > Make my own) can have a picture chosen from your device,
     with no code needed.
   ===================================================================== */

// svgUri turns SVG text into an address an <img> tag can use.
const svgUri=svg=>"data:image/svg+xml;charset=utf-8,"+encodeURIComponent(svg);

const CARD_IMAGES={

"Monohybrid cross Aa × Aa":{alt:"A Punnett square for Aa crossed with Aa. Boxes show AA, Aa, Aa and aa, giving a ratio of 1 AA to 2 Aa to 1 aa.",
 src:svgUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 260"><rect width="360" height="260" rx="12" fill="#fff"/>
 <g font-family="Arial,sans-serif" text-anchor="middle" fill="#1a2233">
 <text x="220" y="28" font-size="13" fill="#556">Parent 1 gametes</text><text x="48" y="160" font-size="13" fill="#556">Parent 2</text>
 <text x="48" y="176" font-size="13" fill="#556">gametes</text>
 <text x="170" y="58" font-size="22" font-weight="700">A</text><text x="270" y="58" font-size="22" font-weight="700">a</text>
 <text x="98" y="120" font-size="22" font-weight="700">A</text><text x="98" y="200" font-size="22" font-weight="700">a</text>
 <rect x="120" y="70" width="100" height="80" fill="#e8eefc" stroke="#1a2233"/><rect x="220" y="70" width="100" height="80" fill="#e8eefc" stroke="#1a2233"/>
 <rect x="120" y="150" width="100" height="80" fill="#e8eefc" stroke="#1a2233"/><rect x="220" y="150" width="100" height="80" fill="#ffe9c7" stroke="#1a2233"/>
 <text x="170" y="118" font-size="24">AA</text><text x="270" y="118" font-size="24">Aa</text><text x="170" y="198" font-size="24">Aa</text><text x="270" y="198" font-size="24">aa</text>
 <text x="220" y="250" font-size="13" fill="#556">1 AA : 2 Aa : 1 aa</text></g></svg>`)},

"Base pairing rule":{alt:"Two DNA strands. A pairs with T using two hydrogen bonds, and C pairs with G using three hydrogen bonds.",
 src:svgUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 250"><rect width="380" height="250" rx="12" fill="#fff"/>
 <g font-family="Arial,sans-serif" text-anchor="middle" fill="#1a2233" font-size="22" font-weight="700">
 <g stroke="#1a2233" stroke-width="2.5">
 <line x1="60" y1="92" x2="60" y2="148"/><line x1="70" y1="92" x2="70" y2="148"/>
 <line x1="140" y1="92" x2="140" y2="148"/><line x1="150" y1="92" x2="150" y2="148"/><line x1="145" y1="92" x2="145" y2="148" opacity="0"/>
 <line x1="215" y1="92" x2="215" y2="148"/><line x1="225" y1="92" x2="225" y2="148"/><line x1="220" y1="92" x2="220" y2="148"/>
 <line x1="295" y1="92" x2="295" y2="148"/><line x1="305" y1="92" x2="305" y2="148"/><line x1="300" y1="92" x2="300" y2="148"/></g>
 <circle cx="65" cy="70" r="22" fill="#cfe0ff"/><text x="65" y="78">A</text><circle cx="65" cy="170" r="22" fill="#ffe0b8"/><text x="65" y="178">T</text>
 <circle cx="145" cy="70" r="22" fill="#cfe0ff"/><text x="145" y="78">A</text><circle cx="145" cy="170" r="22" fill="#ffe0b8"/><text x="145" y="178">T</text>
 <circle cx="220" cy="70" r="22" fill="#d8f0d0"/><text x="220" y="78">C</text><circle cx="220" cy="170" r="22" fill="#f6d0e8"/><text x="220" y="178">G</text>
 <circle cx="300" cy="70" r="22" fill="#d8f0d0"/><text x="300" y="78">C</text><circle cx="300" cy="170" r="22" fill="#f6d0e8"/><text x="300" y="178">G</text>
 <text x="105" y="222" font-size="14" font-weight="400" fill="#556">A–T: 2 hydrogen bonds</text><text x="260" y="222" font-size="14" font-weight="400" fill="#556">C–G: 3 hydrogen bonds</text></g></svg>`)},

"Cell cycle":{alt:"A ring divided into G1, S, G2 and M phases. G1 is cell growth, S is DNA copying, G2 is preparation and M is mitosis and cytokinesis.",
 src:svgUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 260"><rect width="420" height="260" rx="12" fill="#fff"/>
 <g transform="rotate(-90 110 130)" fill="none" stroke-width="30">
 <circle cx="110" cy="130" r="70" stroke="#3b6fd8" stroke-dasharray="198 241.8"/>
 <circle cx="110" cy="130" r="70" stroke="#2f9e5b" stroke-dasharray="132 307.8" stroke-dashoffset="-198"/>
 <circle cx="110" cy="130" r="70" stroke="#e0932a" stroke-dasharray="66 373.8" stroke-dashoffset="-330"/>
 <circle cx="110" cy="130" r="70" stroke="#d0453d" stroke-dasharray="44 395.8" stroke-dashoffset="-396"/></g>
 <g font-family="Arial,sans-serif" fill="#1a2233" font-size="15">
 <text x="110" y="135" text-anchor="middle" font-size="14" font-weight="700">Cell cycle</text>
 <rect x="222" y="70" width="16" height="16" fill="#3b6fd8"/><text x="246" y="83">G1: the cell grows</text>
 <rect x="222" y="100" width="16" height="16" fill="#2f9e5b"/><text x="246" y="113">S: DNA is copied</text>
 <rect x="222" y="130" width="16" height="16" fill="#e0932a"/><text x="246" y="143">G2: prepares to divide</text>
 <rect x="222" y="160" width="16" height="16" fill="#d0453d"/><text x="246" y="173">M: mitosis, then split</text></g></svg>`)}

};


/* =====================================================================
   BIOLOGY PICTURES — drawn with small helper functions so each one stays short.
   To make your own: copy a picture below, change the labels and shapes.
   Colours: BL blue, OR orange, GR green, RD red, PK pink, PU purple.
   ===================================================================== */
const BL="#3b6fd8",OR="#e0932a",GR="#2f9e5b",RD="#d0453d",PK="#e4749c",PU="#7d5bd0",INK="#1a2233",MU="#556";
// pic(width,height,inner): wraps drawing parts in an svg with a white background
const pic=(w,h,inner)=>svgUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" font-family="Arial,sans-serif"><rect width="${w}" height="${h}" rx="12" fill="#fff"/>${inner}</svg>`);
// tx = text, ln = line, bar = chromosome rod, xchr = replicated X-shaped chromosome
const tx=(x,y,t,s=13,c=INK,a="middle",w=400)=>`<text x="${x}" y="${y}" font-size="${s}" fill="${c}" text-anchor="${a}" font-weight="${w}">${t}</text>`;
const ln=(x1,y1,x2,y2,c=INK,w=1.5,d="")=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="${w}" ${d?`stroke-dasharray="${d}"`:""}/>`;
const bar=(x,y,h,c,w=8)=>`<rect x="${x-w/2}" y="${y}" width="${w}" height="${h}" rx="${w/2}" fill="${c}"/>`;
const xchr=(cx,cy,len,c)=>`<g transform="translate(${cx} ${cy})"><rect x="-4" y="${-len/2}" width="8" height="${len}" rx="4" fill="${c}" transform="rotate(13)"/><rect x="-4" y="${-len/2}" width="8" height="${len}" rx="4" fill="${c}" transform="rotate(-13)"/><circle r="3.5" fill="#fff" stroke="${INK}"/></g>`;
const circ=(x,y,r,f="none",s=INK,w=1.5,d="")=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${f}" stroke="${s}" stroke-width="${w}" ${d?`stroke-dasharray="${d}"`:""}/>`;
const arrow=(x1,y1,x2,y2,c=MU)=>`${ln(x1,y1,x2,y2,c,2)}<path d="M${x2},${y2} l${x2>x1?-8:x2<x1?8:0},${y2>y1?-8:y2<y1?8:-5} m0,0" stroke="none"/>`+`<polygon points="${x2},${y2} ${x2-(x2>x1?9:x2<x1?-9:5)},${y2-(y2>y1?9:y2<y1?-9:5)} ${x2-(x2>x1?9:x2<x1?-9:-5)},${y2-(y2>y1?9:y2<y1?-9:-5)}" fill="${c}"/>`;
// smooth(): turns a list of [x,y] points into a smooth curve path
const smooth=p=>{let d=`M${p[0][0]},${p[0][1]}`;for(let i=1;i<p.length-1;i++)d+=` Q${p[i][0]},${p[i][1]} ${(p[i][0]+p[i+1][0])/2},${(p[i][1]+p[i+1][1])/2}`;const l=p[p.length-1];return d+` L${l[0]},${l[1]}`};
// curve(): draws data points [x,level] on a graph box (x0,y0)-(x1,y1); level is 0 to 1
const curve=(pts,xmax,x0,y0,x1,y1,c,dash="")=>`<path d="${smooth(pts.map(([x,v])=>[x0+x/xmax*(x1-x0),y1-v*(y1-y0)]))}" fill="none" stroke="${c}" stroke-width="3" stroke-linecap="round" ${dash?`stroke-dasharray="${dash}"`:""}/>`;
const legend=(items,x,y)=>items.map(([n,c],i)=>`<rect x="${x}" y="${y+i*18}" width="14" height="5" rx="2" fill="${c}"/>${tx(x+20,y+6+i*18,n,12,INK,"start")}`).join("");
const sub=(l,s)=>`${l}<tspan font-size="9" dy="-5">${s}</tspan><tspan dy="5"> </tspan>`;

Object.assign(CARD_IMAGES,{

// ---- IQ1 ----
"Plants: sexual reproduction":{alt:"Labelled flower: sepal, petal, stamen (anther and filament), carpel (stigma, style, ovary with ovules) and receptacle.",src:pic(520,300,`
 <ellipse cx="180" cy="262" rx="36" ry="10" fill="#7cc78f"/>${ln(180,270,180,296,GR,5)}
 <ellipse cx="138" cy="248" rx="30" ry="9" fill="#7cc78f" transform="rotate(-18 138 248)"/><ellipse cx="222" cy="248" rx="30" ry="9" fill="#7cc78f" transform="rotate(18 222 248)"/>
 <ellipse cx="108" cy="170" rx="22" ry="62" fill="#f3b6c8" stroke="#d98aa6" transform="rotate(-18 108 170)"/><ellipse cx="252" cy="170" rx="22" ry="62" fill="#f3b6c8" stroke="#d98aa6" transform="rotate(18 252 170)"/>
 ${ln(150,230,125,128,"#2f9e5b",3)}${ln(210,230,235,128,"#2f9e5b",3)}
 <ellipse cx="123" cy="116" rx="8" ry="15" fill="#f2c230" stroke="#a07c00" transform="rotate(10 123 116)"/><ellipse cx="237" cy="116" rx="8" ry="15" fill="#f2c230" stroke="#a07c00" transform="rotate(-10 237 116)"/>
 <ellipse cx="180" cy="205" rx="30" ry="40" fill="#bfe3a8" stroke="#2f9e5b" stroke-width="2"/>
 ${circ(172,208,6,"#fff",GR)}${circ(188,208,6,"#fff",GR)}${circ(180,192,6,"#fff",GR)}
 ${ln(180,166,180,104,GR,4)}${circ(180,98,9,"#e4749c","#a0305a")}
 ${ln(194,98,300,50)}${tx(304,50,"Stigma (catches pollen)",12,INK,"start")}
 ${ln(182,135,300,80)}${tx(304,80,"Style",12,INK,"start")}
 ${ln(206,200,300,110)}${tx(304,110,"Ovary (becomes the fruit)",12,INK,"start")}
 ${ln(190,208,300,140)}${tx(304,140,"Ovule (becomes the seed)",12,INK,"start")}
 ${ln(244,112,300,170)}${tx(304,170,"Anther (makes pollen)",12,INK,"start")}
 ${ln(228,170,300,198)}${tx(304,198,"Filament",12,INK,"start")}
 ${ln(268,150,300,226)}${tx(304,226,"Petal (attracts animals)",12,INK,"start")}
 ${ln(112,248,40,278)}${tx(8,292,"Sepal",12,INK,"start")}
 ${ln(215,266,300,262)}${tx(304,262,"Receptacle",12,INK,"start")}
 ${tx(10,18,"Stamen = anther + filament (male)",11,MU,"start")}${tx(10,34,"Carpel = stigma + style + ovary (female)",11,MU,"start")}`)},

"Implantation":{alt:"From zygote to implantation: zygote, two-cell stage, morula, blastocyst, then the blastocyst embeds in the endometrium about a week after fertilisation.",src:pic(620,200,`
 ${circ(50,80,16,"#ffe9c7",OR,2)}${tx(50,125,"Zygote",12)}${tx(50,142,"Day 0",11,MU)}
 ${arrow(80,80,108,80)}
 ${circ(138,80,12,"#ffe9c7",OR,2)}${circ(160,80,12,"#ffe9c7",OR,2)}${tx(149,125,"2 cells",12)}${tx(149,142,"Day 1 to 2",11,MU)}
 ${arrow(180,80,208,80)}
 ${[[236,70],[252,70],[228,86],[244,86],[260,86],[236,100],[252,100],[244,78]].map(([x,y])=>circ(x,y,8,"#ffe9c7",OR,1.5)).join("")}${tx(244,125,"Morula",12)}${tx(244,142,"Day 3 to 4",11,MU)}
 ${arrow(280,80,308,80)}
 ${circ(350,80,28,"#fff",OR,3)}${circ(340,86,12,"#ffd9a0",OR,1.5)}${tx(350,125,"Blastocyst",12)}${tx(350,142,"Day 5 to 6",11,MU)}${tx(350,60,"",10)}
 ${arrow(386,80,414,80)}
 <path d="M440,120 q15,-18 30,0 t30,0 t30,0 t30,0" fill="none" stroke="${PK}" stroke-width="5"/>${circ(500,102,18,"#fff",OR,3)}${circ(498,108,8,"#ffd9a0",OR,1.5)}
 ${tx(520,150,"Implants in the endometrium",12)}${tx(520,167,"about day 6 to 10",11,MU)}
 ${tx(310,20,"Cell divisions (mitosis) happen as the embryo travels down the oviduct",12,MU)}`)},

"Menstrual cycle (about 28 days)":{alt:"Graph of FSH, LH, oestrogen and progesterone over a 28 day menstrual cycle, with menstruation, follicular phase, ovulation on day 14 and luteal phase marked.",src:pic(540,300,`
 ${tx(270,22,"Hormones in a 28-day menstrual cycle (relative levels)",14,INK,"middle",700)}
 ${ln(50,40,50,170)}${ln(50,170,500,170)}${tx(14,105,"Level",11,MU)}
 ${[0,7,14,21,28].map(d=>`${ln(50+d/28*450,170,50+d/28*450,175)}${tx(50+d/28*450,188,d,11,MU)}`).join("")}${tx(275,203,"Day of cycle",11,MU)}
 ${ln(50+14/28*450,54,50+14/28*450,170,MU,1.5,"5 4")}${tx(50+14/28*450,50,"Ovulation",11,INK,"middle",700)}
 ${curve([[0,.3],[5,.5],[9,.3],[13,.36],[14,.5],[16,.2],[28,.1]],28,50,40,500,170,PU)}
 ${curve([[0,.1],[12,.15],[13,.55],[14,1],[15,.5],[17,.12],[28,.1]],28,50,40,500,170,OR)}
 ${curve([[0,.1],[5,.15],[12,.8],[14,.4],[18,.35],[21,.5],[25,.2],[28,.1]],28,50,40,500,170,GR)}
 ${curve([[0,.05],[14,.08],[17,.5],[21,.85],[25,.4],[28,.1]],28,50,40,500,170,RD)}
 ${legend([["FSH",PU],["LH",OR],["Oestrogen",GR],["Progesterone",RD]],425,44)}
 <rect x="50" y="215" width="${5/28*450}" height="26" fill="#f6c5c5"/><rect x="${50+5/28*450}" y="215" width="${9/28*450}" height="26" fill="#ffe9c7"/><rect x="${50+14/28*450}" y="215" width="${14/28*450}" height="26" fill="#d8f0d0"/>
 ${tx(50+2.5/28*450,232,"Period",10)}${tx(50+9.5/28*450,232,"Follicular phase",11)}${tx(50+21/28*450,232,"Luteal phase",11)}
 ${tx(275,262,"Follicular: FSH matures a follicle, oestrogen rebuilds the endometrium. LH surge causes ovulation.",11,MU)}
 ${tx(275,280,"Luteal: corpus luteum makes progesterone to keep the endometrium thick.",11,MU)}`)},

"Hormone levels across pregnancy":{alt:"Graph over 40 weeks: hCG peaks around week 10 then falls, progesterone and oestrogen keep rising until birth, and oxytocin surges at labour.",src:pic(540,290,`
 ${tx(270,22,"Hormone levels during pregnancy (relative)",14,INK,"middle",700)}
 ${ln(50,64,50,200)}${ln(50,200,500,200)}${tx(14,120,"Level",11,MU)}
 ${[0,10,20,30,40].map(w=>`${ln(50+w/40*450,200,50+w/40*450,205)}${tx(50+w/40*450,218,w,11,MU)}`).join("")}${tx(275,234,"Weeks of pregnancy",11,MU)}
 ${ln(50+10/40*450,64,50+10/40*450,200,MU,1.5,"5 4")}${tx(50+10/40*450+60,82,"About week 10: placenta takes over",11,INK,"start",700)}${tx(50+10/40*450+60,96,"from the corpus luteum",11,INK,"start",700)}
 ${curve([[0,0],[3,.05],[6,.5],[9,1],[12,.8],[16,.4],[20,.25],[40,.2]],40,50,64,500,200,PU)}
 ${curve([[0,.1],[8,.2],[12,.35],[20,.5],[30,.75],[40,1]],40,50,64,500,200,RD)}
 ${curve([[0,.05],[10,.1],[20,.2],[30,.45],[36,.75],[40,1]],40,50,64,500,200,GR)}
 ${curve([[0,0],[36,0.02],[38.5,.08],[40,.9]],40,50,64,500,200,OR,"6 4")}
 ${[["hCG",PU],["Progesterone",RD],["Oestrogen",GR],["Oxytocin (labour)",OR]].map(([n,c],k)=>`<rect x="${60+k*115}" y="34" width="14" height="5" rx="2" fill="${c}"/>${tx(80+k*115,40,n,12,INK,"start")}`).join("")}
 ${tx(275,258,"hCG keeps the corpus luteum active in early pregnancy. Progesterone keeps the endometrium thick and",11,MU)}
 ${tx(275,274,"reduces contractions. Rising oestrogen makes the uterus sensitive to oxytocin before birth.",11,MU)}`)},

// ---- IQ2 ----
"Chromosome, chromatid and centromere":{alt:"A chromosome before replication is one rod. After DNA replication it is an X shape of two identical sister chromatids joined at the centromere. In anaphase the chromatids separate and each is a chromosome.",src:pic(540,220,`
 ${bar(60,40,100,BL,12)}${circ(60,90,5,"#fff",INK,1.2)}${tx(60,182,"1 chromosome",12)}${tx(60,198,"1 DNA molecule",11,MU)}
 ${arrow(100,90,170,90)}${tx(135,76,"DNA replicates",10,MU)}
 ${xchr(250,90,104,BL)}${ln(265,60,330,36)}${tx(334,36,"sister chromatids (identical)",11,INK,"start")}${ln(253,90,330,100)}${tx(334,104,"centromere",11,INK,"start")}
 ${tx(250,182,"1 chromosome",12)}${tx(250,198,"= 2 sister chromatids",11,MU)}
 ${tx(450,150,"In anaphase the chromatids",11,MU)}${tx(450,164,"separate. Each one is now a",11,MU)}${tx(450,178,"chromosome of its own.",11,MU)}`)},

"Homologous chromosomes":{alt:"A homologous pair: one chromosome from each parent, same genes in the same positions, with alleles A and a at one gene and B and B at another.",src:pic(420,230,`
 ${xchr(150,100,120,BL)}${xchr(270,100,120,OR)}
 ${ln(134,70,166,70,INK,5)}${ln(254,70,286,70,INK,5)}${ln(134,122,166,122,INK,5)}${ln(254,122,286,122,INK,5)}
 ${tx(104,74,"A",16,INK,"middle",700)}${tx(316,74,"a",16,INK,"middle",700)}${tx(104,126,"B",16,INK,"middle",700)}${tx(316,126,"B",16,INK,"middle",700)}
 ${tx(150,176,"From mother",12,BL,"middle",700)}${tx(270,176,"From father",12,OR,"middle",700)}
 ${tx(210,202,"Same genes in the same positions, but the alleles may differ",12,MU)}${tx(210,24,"A homologous pair",14,INK,"middle",700)}`)},

"Name the stages of mitosis and what happens in each":{alt:"Four cells showing prophase, metaphase, anaphase and telophase, with two pairs of chromosomes.",src:pic(600,210,`
 ${circ(75,85,52,"#f6fbff",MU,2)}${circ(75,85,32,"none",MU,1.2,"4 3")}${xchr(62,76,26,BL)}${xchr(88,72,26,OR)}${xchr(65,98,18,BL)}${xchr(86,96,18,OR)}
 ${circ(225,85,52,"#f6fbff",MU,2)}${ln(225,35,205,85,"#aab",1)}${ln(225,35,222,85,"#aab",1)}${ln(225,35,242,85,"#aab",1)}${ln(225,135,205,85,"#aab",1)}${ln(225,135,222,85,"#aab",1)}${ln(225,135,242,85,"#aab",1)}
 ${xchr(205,85,24,BL)}${xchr(222,85,24,OR)}${xchr(240,85,16,BL)}${xchr(256,85,16,OR)}
 <ellipse cx="375" cy="85" rx="52" ry="58" fill="#f6fbff" stroke="${MU}" stroke-width="2"/>
 ${[358,370,382,394].map((x,i)=>bar(x,50,14,i%2?OR:BL,6)+bar(x,106,14,i%2?OR:BL,6)).join("")}${tx(375,36,"↑",14,MU)}${tx(375,146,"↓",14,MU)}
 ${circ(525,55,34,"#f6fbff",MU,2)}${circ(525,115,34,"#f6fbff",MU,2)}${circ(525,55,19,"none",MU,1.2,"4 3")}${circ(525,115,19,"none",MU,1.2,"4 3")}${bar(518,48,14,BL,6)}${bar(532,48,14,OR,6)}${bar(518,108,14,BL,6)}${bar(532,108,14,OR,6)}
 ${tx(75,168,"Prophase",13,INK,"middle",700)}${tx(75,184,"chromosomes condense",10,MU)}${tx(75,196,"spindle forms",10,MU)}
 ${tx(225,168,"Metaphase",13,INK,"middle",700)}${tx(225,184,"line up at the equator",10,MU)}
 ${tx(375,168,"Anaphase",13,INK,"middle",700)}${tx(375,184,"sister chromatids",10,MU)}${tx(375,196,"pulled apart",10,MU)}
 ${tx(525,168,"Telophase",13,INK,"middle",700)}${tx(525,184,"two nuclei re-form,",10,MU)}${tx(525,196,"then cytokinesis",10,MU)}`)},

"Compare mitosis and meiosis":{alt:"Mitosis makes two identical diploid cells in one division. Meiosis makes four different haploid cells in two divisions.",src:(()=>{
  // cellbars: a cell with little chromosome rods inside. Each rod is [colour, tipColour or 0, length]
  const cell=(x,y,r,rods)=>circ(x,y,r,"#f6fbff",MU,2)+rods.map(([c,t,l],i)=>{const bx=x+(i-(rods.length-1)/2)*9;return bar(bx,y-l/2,l,c,6)+(t?bar(bx,y+l/2-l/3,l/3,t,6):"")}).join("");
  const P=[[BL,0,22],[OR,0,22],[BL,0,14],[OR,0,14]];
  return pic(720,270,`
  ${tx(20,32,"Mitosis",14,INK,"start",700)}${cell(70,70,32,P)}${arrow(112,70,190,70)}${tx(151,58,"1 division",10,MU)}${cell(240,70,32,P)}${cell(320,70,32,P)}${tx(480,66,"2 identical diploid (2n) cells",12,INK,"start",700)}${tx(480,84,"growth, repair, asexual reproduction",11,MU,"start")}
  ${tx(20,152,"Meiosis",14,INK,"start",700)}${cell(70,200,32,P)}${arrow(112,200,150,200)}${tx(131,188,"I",10,MU)}${cell(190,200,28,[[BL,OR,22],[BL,0,14]])}${cell(256,200,28,[[OR,BL,22],[OR,0,14]])}${arrow(290,200,328,200)}${tx(309,188,"II",10,MU)}
  ${cell(366,200,22,[[BL,0,22],[BL,0,14]])}${cell(416,200,22,[[BL,OR,22],[BL,0,14]])}${cell(466,200,22,[[OR,0,22],[OR,0,14]])}${cell(516,200,22,[[OR,BL,22],[OR,0,14]])}
  ${tx(566,196,"4 different",12,INK,"start",700)}${tx(566,212,"haploid (n)",12,INK,"start",700)}${tx(566,228,"gametes",11,MU,"start")}
  ${tx(320,256,"Simplified: coloured tips show crossing over. Maternal = blue, paternal = orange.",11,MU)}`)})()},

"Steps of DNA replication":{alt:"A replication fork: helicase unwinds the double helix, and DNA polymerase builds a new green strand against each template strand. Each new molecule has one old and one new strand.",src:pic(540,250,`
 <path d="M30,108 L200,108 L250,56 L500,56" fill="none" stroke="${BL}" stroke-width="4"/><path d="M30,128 L200,128 L250,180 L500,180" fill="none" stroke="${OR}" stroke-width="4"/>
 ${[50,70,90,110,130,150,170,190].map(x=>ln(x,108,x,128,"#889",1.5)).join("")}
 <path d="M258,82 L500,82" fill="none" stroke="${GR}" stroke-width="4"/><path d="M258,154 L500,154" fill="none" stroke="${GR}" stroke-width="4"/>
 ${[290,320,350,380,410,440,470].map(x=>ln(x,56,x,82,"#889",1.5)+ln(x,154,x,180,"#889",1.5)).join("")}
 ${circ(212,118,15,RD,INK,1.5)}${tx(212,122,"H",12,"#fff","middle",700)}
 <ellipse cx="486" cy="82" rx="22" ry="12" fill="${PK}" stroke="${INK}"/><ellipse cx="486" cy="154" rx="22" ry="12" fill="${PK}" stroke="${INK}"/>
 ${tx(110,92,"Parent DNA",12,INK,"middle",700)}${tx(212,150,"Helicase unwinds",11,INK,"middle")}${tx(212,164,"and unzips (H-bonds)",11,INK,"middle")}
 ${tx(486,40,"template strand",11,BL,"end")}${tx(486,124,"DNA polymerase",11,INK,"end")}${tx(430,72,"",10)}${tx(486,205,"template strand",11,OR,"end")}${tx(340,104,"new strand (green)",11,GR,"middle",700)}
 ${tx(270,232,"Semi-conservative: each new DNA molecule has one old strand and one new strand.",12,MU)}`)},

"Crossing over":{alt:"Before crossing over each chromatid is one colour. After crossing over the two inner non-sister chromatids have swapped segments and are recombinant.",src:pic(480,240,`
 ${tx(110,24,"Before",13,INK,"middle",700)}${tx(360,24,"After crossing over",13,INK,"middle",700)}
 ${[[60,BL,BL],[76,BL,BL],[104,OR,OR],[120,OR,OR]].map(([x,a,b])=>bar(x,40,48,a,12)+bar(x,88,48,b,12)).join("")}
 ${[[310,BL,BL],[326,BL,OR],[354,OR,BL],[370,OR,OR]].map(([x,a,b])=>bar(x,40,48,a,12)+bar(x,88,48,b,12)).join("")}
 ${arrow(160,90,270,90)}
 ${tx(68,160,"maternal",11,BL)}${tx(112,160,"paternal",11,OR)}${tx(318,160,"maternal",11,BL)}${tx(362,160,"paternal",11,OR)}
 ${ln(326,150,336,140)}${ln(354,150,344,140)}${tx(340,178,"2 recombinant chromatids",11,INK,"middle",700)}
 ${tx(240,210,"Non-sister chromatids of homologous chromosomes swap sections in prophase I.",11,MU)}${tx(240,226,"New allele combinations result.",11,MU)}`)},

// ---- IQ3 ----
"Four levels of protein structure":{alt:"Four panels: primary structure is a chain of amino acids, secondary is a helix, tertiary is a folded polypeptide, quaternary is several polypeptides together.",src:pic(560,210,`
 ${[0,1,2,3,4,5,6,7].map(i=>circ(22+i*14,86+(i%2?9:-9),7,[BL,OR,GR,RD,PU,PK,BL,OR][i],INK,1)).join("")}
 <path d="M${150},95 q10,-26 20,0 t20,0 t20,0 t20,0 t20,0" fill="none" stroke="${OR}" stroke-width="6" stroke-linecap="round"/>
 <path d="M300,60 C340,30 360,70 330,86 C300,104 340,126 365,108 C380,98 372,70 350,74" fill="none" stroke="${GR}" stroke-width="7" stroke-linecap="round"/>
 ${circ(446,70,20,BL+"cc",INK,1.5)}${circ(488,70,20,OR+"cc",INK,1.5)}${circ(446,112,20,GR+"cc",INK,1.5)}${circ(488,112,20,RD+"cc",INK,1.5)}
 ${arrow(128,90,142,90)}${arrow(262,90,284,90)}${arrow(396,90,416,90)}
 ${tx(70,160,"Primary",13,INK,"middle",700)}${tx(70,176,"order of amino acids",10,MU)}${tx(70,190,"(peptide bonds)",10,MU)}
 ${tx(200,160,"Secondary",13,INK,"middle",700)}${tx(200,176,"helix or sheet",10,MU)}${tx(200,190,"(hydrogen bonds)",10,MU)}
 ${tx(335,160,"Tertiary",13,INK,"middle",700)}${tx(335,176,"3D fold of one",10,MU)}${tx(335,190,"polypeptide (R groups)",10,MU)}
 ${tx(467,160,"Quaternary",13,INK,"middle",700)}${tx(467,176,"several polypeptides",10,MU)}${tx(467,190,"e.g. haemoglobin",10,MU)}`)},

"Polypeptide synthesis":{alt:"Transcription copies a gene in the nucleus into mRNA. In translation the ribosome reads mRNA codons AUG, GGC, UUA and tRNAs bring methionine, glycine and leucine until the stop codon UAA.",src:pic(600,290,`
 <ellipse cx="105" cy="100" rx="85" ry="62" fill="#f6fbff" stroke="${MU}" stroke-width="2"/>${tx(110,52,"Nucleus",11,MU)}
 ${ln(40,98,180,98,BL,4)}${ln(40,112,180,112,OR,4)}${tx(110,132,"DNA (gene)",11,INK)}
 ${arrow(200,105,262,105)}${tx(232,92,"Transcription",11,INK,"middle",700)}${tx(226,126,"mRNA copy",10,MU)}
 ${[["AUG",270],["GGC",330],["UUA",390],["UAA",450]].map(([c,x])=>`<rect x="${x}" y="180" width="54" height="26" rx="4" fill="#d8f0d0" stroke="${GR}"/>${tx(x+27,198,c,13,INK,"middle",700)}`).join("")}
 ${tx(540,198,"mRNA",12,GR,"middle",700)}
 <rect x="320" y="132" width="130" height="40" rx="20" fill="#d9dbe4" stroke="${MU}"/>${tx(385,157,"Ribosome",12,INK,"middle",700)}
 ${circ(297,118,12,BL,INK,1)}${tx(297,122,"Met",9,"#fff","middle",700)}${circ(357,118,12,OR,INK,1)}${tx(357,122,"Gly",9,"#fff","middle",700)}${ln(297,130,297,180,MU,1.5)}${ln(357,130,357,180,MU,1.5)}
 ${tx(270,226,"tRNA anticodons: UAC (Met), CCG (Gly)",11,MU,"start")}${tx(300,254,"Translation: tRNAs bring amino acids in codon order.",12,INK,"middle",700)}${tx(300,272,"Peptide bonds join them. UAA is a stop codon.",11,MU)}
 ${arrow(405,70,405,40)}${tx(470,52,"Met–Gly–Leu chain grows",11,INK,"start")}`)},

"Compare eukaryote and prokaryote DNA":{alt:"Eukaryote cell with linear chromosomes inside a nucleus. Prokaryote cell with one circular chromosome and a small plasmid in the cytoplasm and no nucleus.",src:pic(560,230,`
 ${circ(130,95,76,"#f6fbff",MU,2)}${circ(130,95,40,"#e8eefc",BL,2)}${bar(112,70,50,BL,7)}${bar(128,66,56,OR,7)}${bar(144,72,46,GR,7)}
 ${tx(130,198,"Eukaryote",14,INK,"middle",700)}${tx(130,214,"linear chromosomes in a nucleus",10,MU)}
 <rect x="320" y="30" width="200" height="130" rx="60" fill="#f6fbff" stroke="${MU}" stroke-width="2"/>${circ(405,95,34,"none",BL,5)}${circ(480,110,13,"none",RD,4)}
 ${tx(405,100,"DNA",11,BL,"middle",700)}${ln(486,98,505,50)}${tx(505,44,"plasmid",11,INK,"middle")}
 ${tx(420,198,"Prokaryote",14,INK,"middle",700)}${tx(420,214,"one circular chromosome + plasmids, no nucleus",10,MU)}`)},

// ---- agriculture/cells ----
"Bacteria: binary fission":{alt:"A bacterium copies its circular DNA, grows longer, forms a dividing wall and splits into two identical cells.",src:pic(560,190,`
 ${[[70,1],[190,2],[320,2],[450,3]].map(([x,k])=>"").join("")}
 <rect x="35" y="60" width="70" height="40" rx="20" fill="#f6fbff" stroke="${MU}" stroke-width="2"/>${circ(70,80,9,"none",BL,3)}
 <rect x="150" y="60" width="90" height="40" rx="20" fill="#f6fbff" stroke="${MU}" stroke-width="2"/>${circ(177,80,8,"none",BL,3)}${circ(213,80,8,"none",BL,3)}
 <rect x="275" y="58" width="100" height="44" rx="22" fill="#f6fbff" stroke="${MU}" stroke-width="2"/>${ln(325,60,325,100,MU,2)}${circ(300,80,8,"none",BL,3)}${circ(350,80,8,"none",BL,3)}
 <rect x="410" y="60" width="62" height="40" rx="20" fill="#f6fbff" stroke="${MU}" stroke-width="2"/><rect x="480" y="60" width="62" height="40" rx="20" fill="#f6fbff" stroke="${MU}" stroke-width="2"/>${circ(441,80,8,"none",BL,3)}${circ(511,80,8,"none",BL,3)}
 ${arrow(110,80,142,80)}${arrow(246,80,270,80)}${arrow(380,80,404,80)}
 ${tx(70,130,"1. One circular",11)}${tx(70,144,"chromosome",11)}${tx(195,130,"2. DNA is copied",11)}${tx(325,130,"3. Cell grows, wall forms",11)}${tx(476,130,"4. Two identical cells",11)}
 ${tx(280,26,"Binary fission (asexual reproduction in bacteria)",13,INK,"middle",700)}${tx(280,172,"Each daughter cell is a clone of the parent.",11,MU)}`)},

// ---- IQ4 ----
"Silent, missense and nonsense mutations":{alt:"Codon table: original AUG GAG GUA UAA gives Met Glu Val stop. A silent mutation GAG to GAA still gives Glu. Missense GAG to GUG gives Val. Nonsense GAG to UAG gives a stop. A deletion causes a frameshift.",src:(()=>{
  const rows=[["Original",["AUG","GAG","GUA","UAA"],["Met","Glu","Val","Stop"],-1],["Silent",["AUG","GAA","GUA","UAA"],["Met","Glu","Val","Stop"],1],["Missense",["AUG","GUG","GUA","UAA"],["Met","Val","Val","Stop"],1],["Nonsense",["AUG","UAG","GUA","UAA"],["Met","Stop","",""],1],["Frameshift (G deleted)",["AUG","AGG","UAU","AA"],["Met","Arg","Tyr","?"],1]];
  return pic(560,300,`${tx(280,24,"Effect of mutations on the mRNA code",14,INK,"middle",700)}`+rows.map(([n,cs,aa,ch],r)=>{const y=44+r*50;return tx(14,y+22,n,12,INK,"start",700)+cs.map((c,i)=>{const x=180+i*92,hit=ch>=0&&(r===4?i>0:i===ch);return `<rect x="${x}" y="${y}" width="84" height="26" rx="4" fill="${hit?"#ffe0e0":"#eef3ff"}" stroke="${hit?RD:BL}"/>${tx(x+42,y+18,c,14,INK,"middle",700)}${tx(x+42,y+40,aa[i],11,hit?RD:MU)}`}).join("")}).join(""))})()},

"Pedigree":{alt:"Pedigree: two unaffected carrier parents (square and circle with dots) have three children: an unaffected son, an affected daughter (shaded circle) and a carrier daughter. A key shows the symbols.",src:pic(520,290,`
 ${tx(10,22,"Generation I",11,MU,"start")}${tx(10,100,"Generation II",11,MU,"start")}
 <rect x="100" y="36" width="34" height="34" fill="#fff" stroke="${INK}" stroke-width="2"/>${circ(117,53,4,INK)}${circ(210,53,17,"#fff",INK,2)}${circ(210,53,4,INK)}
 ${ln(134,53,193,53,INK,2)}${ln(163,53,163,100,INK,2)}${ln(70,100,252,100,INK,2)}${ln(70,100,70,118,INK,2)}${ln(163,100,163,118,INK,2)}${ln(252,100,252,118,INK,2)}
 <rect x="53" y="118" width="34" height="34" fill="#fff" stroke="${INK}" stroke-width="2"/>${circ(163,135,17,INK,INK,2)}${circ(252,135,17,"#fff",INK,2)}${circ(252,135,4,INK)}
 ${tx(70,174,"unaffected male",10,MU)}${tx(163,174,"affected female",10,MU)}${tx(252,174,"carrier female",10,MU)}
 ${tx(390,28,"Key",12,INK,"middle",700)}<rect x="320" y="40" width="20" height="20" fill="#fff" stroke="${INK}" stroke-width="2"/>${tx(350,55,"male",11,INK,"start")}${circ(330,82,10,"#fff",INK,2)}${tx(350,86,"female",11,INK,"start")}
 ${circ(330,110,10,INK,INK,2)}${tx(350,114,"affected",11,INK,"start")}${circ(330,138,10,"#fff",INK,2)}${circ(330,138,3,INK)}${tx(350,142,"carrier (dot)",11,INK,"start")}${ln(318,162,342,162,INK,2)}${tx(350,166,"parents",11,INK,"start")}
 ${tx(260,214,"Two unaffected parents have an affected child:",12,INK,"middle",700)}${tx(260,232,"the trait is recessive, and both parents are carriers.",12,MU)}${tx(260,252,"An affected daughter with an unaffected father rules out X-linked recessive.",12,MU)}`)},

"Pattern of X-linked recessive inheritance":{alt:"Punnett square for a carrier mother XHXh and an unaffected father XHY. Daughters are normal or carriers, one son is normal and one son is affected.",src:(()=>{
  const X=(s)=>`X<tspan font-size="10" dy="-5">${s}</tspan>`;
  const cell=(x,y,t,l,f)=>`<rect x="${x}" y="${y}" width="120" height="70" fill="${f}" stroke="${INK}"/><text x="${x+60}" y="${y+34}" font-size="18" text-anchor="middle" font-weight="700" fill="${INK}">${t}</text>${tx(x+60,y+56,l,11,MU)}`;
  return pic(400,300,`${tx(200,24,"Carrier mother × unaffected father",14,INK,"middle",700)}
  <text x="190" y="62" font-size="18" text-anchor="middle" font-weight="700" fill="${INK}">${X("H")}</text><text x="310" y="62" font-size="18" text-anchor="middle" font-weight="700" fill="${INK}">Y</text>
  <text x="108" y="118" font-size="18" text-anchor="middle" font-weight="700" fill="${INK}">${X("H")}</text><text x="108" y="188" font-size="18" text-anchor="middle" font-weight="700" fill="${INK}">${X("h")}</text>
  ${tx(250,44,"Father's gametes",11,MU)}${tx(50,150,"Mother's",11,MU)}${tx(50,164,"gametes",11,MU)}
  ${cell(130,70,"XᴴXᴴ","normal girl","#e8eefc")}${cell(250,70,"XᴴY","normal boy","#e8eefc")}${cell(130,140,"XᴴXʰ","carrier girl","#ffe9c7")}${cell(250,140,"XʰY","affected boy","#ffd0d0")}
  ${tx(200,242,"50% of sons are affected. No daughters are affected,",12,INK,"middle",700)}${tx(200,260,"but 50% of daughters are carriers.",12,INK,"middle",700)}${tx(200,282,"H = normal allele, h = haemophilia allele (on the X)",11,MU)}`)})()},

"Incomplete dominance":{alt:"Red snapdragon crossed with white gives all pink offspring. Crossing two pink plants gives red, pink and white in the ratio 1 to 2 to 1.",src:pic(540,230,`
 ${tx(270,22,"Incomplete dominance (snapdragon flower colour)",14,INK,"middle",700)}
 ${circ(60,70,20,RD,INK,2)}${tx(60,108,"Red (RR)",11)}${tx(100,74,"×",16)}${circ(140,70,20,"#fff",INK,2)}${tx(140,108,"White (WW)",11)}
 ${arrow(180,70,240,70)}
 ${circ(290,70,20,"#f3b6c8",INK,2)}${circ(340,70,20,"#f3b6c8",INK,2)}${tx(315,108,"All pink (RW)",11)}
 ${tx(270,138,"Pink (RW) × Pink (RW)",12,INK,"middle",700)}${arrow(270,146,270,164)}
 ${circ(160,190,16,RD,INK,2)}${tx(160,222,"1 red (RR)",11)}${circ(260,190,16,"#f3b6c8",INK,2)}${circ(296,190,16,"#f3b6c8",INK,2)}${tx(278,222,"2 pink (RW)",11)}${circ(400,190,16,"#fff",INK,2)}${tx(400,222,"1 white (WW)",11)}`)}

});
