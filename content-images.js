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
