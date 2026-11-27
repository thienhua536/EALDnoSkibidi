/* =====================================================================
   content-biology.js  —  BIOLOGY MODULE 5 (HEREDITY) FLASHCARDS
   ---------------------------------------------------------------------
   Original study notes written for this site, following the NSW Biology
   Stage 6 syllabus (2017) Module 5 Heredity. They are NOT NESA wording.
   Covered: Inquiry Question 1, 2, 3 and Inquiry Question 4 up to its
   second dot point (modelling meiosis/mutations; autosomal, sex-linked,
   co-dominance, incomplete dominance, multiple alleles, pedigrees, Punnett
   squares). Not yet covered: IQ4 dot point 3 (frequency data, SNPs) and IQ5.

   HOW TO ADD A CARD (copy one line):
     ["4.2", "The question or term", "The answer."],
   The first part ("4.2") is the dot point it belongs to: IQ number, then a dot,
   then the dot point number. It must be one of the keys in BIO_DP below.
   If you add a new dot point, add its title to BIO_DP too.
   ===================================================================== */

const BIO_IQ={
  1:"IQ1 · How does reproduction ensure the continuity of a species?",
  2:"IQ2 · How important is it for genetic material to be replicated exactly?",
  3:"IQ3 · Why is polypeptide synthesis important?",
  4:"IQ4 · How can the genetic similarities and differences within and between species be compared?"
};
const BIO_DP={
  "1.1":"Sexual and asexual reproduction in animals, plants, fungi, bacteria and protists",
  "1.2":"Fertilisation, implantation, hormonal control of pregnancy and birth in mammals",
  "1.3":"Impact of scientific knowledge on manipulating reproduction in agriculture",
  "2.1":"Modelling mitosis, meiosis and DNA replication",
  "2.2":"Effect of cell replication on the continuity of species",
  "3.1":"DNA in eukaryotes and prokaryotes",
  "3.2":"Polypeptide synthesis: transcription, translation, genes and environment",
  "3.3":"Structure and function of proteins",
  "4.1":"Modelling meiosis: crossing over, fertilisation and mutations",
  "4.2":"Inheritance patterns, Punnett squares and pedigrees"
};

const BIO=[
// ================= IQ1 · DOT POINT 1: reproduction methods =================
["1.1","Asexual reproduction","One parent produces offspring that are genetically identical to it (clones). No gametes fuse. It is fast and needs no mate, but gives no new variation."],
["1.1","Sexual reproduction","Two gametes (usually from two parents) fuse in fertilisation, producing offspring that are genetically different from both parents. It gives variation but needs a mate, time and energy."],
["1.1","Gamete","A haploid sex cell made by meiosis, such as a sperm or an egg. Two gametes fuse to form a zygote."],
["1.1","Zygote","The first diploid cell of a new organism, formed when two gametes fuse."],
["1.1","Why is variation an advantage of sexual reproduction?","If the environment changes, some offspring may carry alleles that help them survive, so the species is more likely to continue."],
["1.1","Why can asexual reproduction be a disadvantage in a changing environment?","All offspring are identical, so a disease or change that harms one can harm them all."],
["1.1","External fertilisation","Gametes are released into water and fuse outside the body (e.g. fish, frogs). Many gametes are lost, so huge numbers are released and survival of each offspring is low."],
["1.1","Internal fertilisation","Sperm are placed inside the female and fuse with the egg inside her body (e.g. mammals, birds, reptiles). Fertilisation is more likely and the embryo is protected, so fewer offspring are needed."],
["1.1","Advantages of external fertilisation","Needs little energy per gamete, many offspring can be produced and no close contact is needed. Disadvantages: gametes are exposed and need water, and most offspring do not survive."],
["1.1","Advantages of internal fertilisation","Higher chance of fertilisation, the embryo is protected and often cared for, so more offspring survive. Disadvantages: needs a mate and uses more energy for each offspring."],
["1.1","Plants: asexual reproduction","Vegetative propagation from a part of the parent, such as runners (strawberry), tubers (potato), bulbs or suckers. Offspring are clones and appear quickly."],
["1.1","Plants: sexual reproduction","Flowers make gametes. Pollen is transferred to the stigma (pollination), the pollen tube carries the male nucleus to the ovule, and fertilisation forms a zygote that becomes a seed."],
["1.1","Pollination","The transfer of pollen from an anther to a stigma, by wind, insects, birds or other animals."],
["1.1","After fertilisation in a flower, what do the ovule and the ovary become?","The fertilised ovule becomes the seed. The ovary becomes the fruit."],
["1.1","Fungi: budding","A small outgrowth forms on the parent cell (e.g. yeast), receives a copy of the nucleus and pinches off as a new, genetically identical cell."],
["1.1","Fungi: spores","Tiny reproductive cells released in huge numbers. They are carried by air or water and grow into a new fungus if they land somewhere suitable."],
["1.1","Bacteria: binary fission","The DNA is copied, the cell grows longer and then splits into two identical daughter cells. It can happen very quickly in good conditions."],
["1.1","Protists: how do they reproduce?","By binary fission (e.g. Amoeba splits into two) or by budding, which are both asexual and produce identical offspring."],
// ================= IQ1 · DOT POINT 2: mammals =================
["1.2","Fertilisation in mammals","A sperm nucleus fuses with the egg nucleus in the oviduct to form a zygote. Enzymes in the sperm head help it through the egg’s outer layers, and the egg then blocks other sperm."],
["1.2","Implantation","The early embryo (a ball of cells called a blastocyst) embeds in the endometrium, the lining of the uterus, about a week after fertilisation."],
["1.2","Endometrium","The lining of the uterus. It is thickened by progesterone so an embryo can implant and be nourished."],
["1.2","Ovulation","The release of a mature egg from the ovary, triggered by a surge of LH (luteinising hormone)."],
["1.2","Corpus luteum","The structure left in the ovary after ovulation. It secretes progesterone (and some oestrogen) and breaks down if there is no pregnancy."],
["1.2","What is the role of hCG in early pregnancy?","The embryo and placenta release hCG. It keeps the corpus luteum making progesterone, which stops the endometrium breaking down (no menstruation). Pregnancy tests detect hCG."],
["1.2","Role of progesterone in pregnancy","Maintains the thick endometrium and reduces contractions of the uterus. It is made by the corpus luteum, then by the placenta."],
["1.2","Role of oestrogen in pregnancy","Helps the uterus and milk glands grow. Late in pregnancy it makes the uterus more sensitive to oxytocin."],
["1.2","Placenta","An organ of fetal and maternal tissue where oxygen and nutrients diffuse to the fetus and wastes diffuse away. The two blood supplies do not mix. It also makes hormones."],
["1.2","Oxytocin","A hormone from the posterior pituitary that causes strong uterine contractions in labour. It also makes milk flow during breastfeeding."],
["1.2","Positive feedback in birth","Stretching of the cervix triggers oxytocin release, which causes stronger contractions, which stretch the cervix more. This repeats and builds until the baby is born."],
["1.2","Prolactin","A hormone from the anterior pituitary that stimulates milk production after birth."],
// ================= IQ1 · DOT POINT 3: agriculture =================
["1.3","Selective breeding (artificial selection)","Humans choose parents with desirable traits (e.g. high milk yield) and breed them. Over generations the desired alleles become more common but genetic diversity falls."],
["1.3","Artificial insemination","Semen is collected and placed in the female’s reproductive tract by people. One male can father many offspring, semen can be frozen and transported, and disease spread is reduced. Genetic diversity can fall."],
["1.3","Artificial pollination","Pollen from a chosen plant is placed by hand on the stigma of another to control which plants cross, for example to produce hybrids."],
["1.3","Plant tissue culture","Small pieces of a plant are grown in sterile nutrient medium to make many identical plants quickly, often disease-free. The plants are clones, so the crop lacks variation."],
["1.3","Embryo transfer in livestock","Embryos from a high-quality female are collected and placed in surrogate mothers, so one elite female can have many more offspring than she could carry herself."],
["1.3","Somatic cell nuclear transfer (cloning)","The nucleus of a body cell is placed in an egg whose own nucleus was removed. The egg is stimulated to divide and implanted in a surrogate. Dolly the sheep (1996) was made this way."],
["1.3","Genetic modification in agriculture","A gene from another organism is inserted into a crop or animal, e.g. Bt cotton makes a protein that harms some insect pests, which reduces pesticide use."],
["1.3","Ethical and economic issues of manipulating reproduction","Benefits: higher yield, faster production, less disease. Concerns: loss of genetic diversity, animal welfare, cost and who owns the technology, and unknown ecological effects."],
// ================= IQ2 · DOT POINT 1: replication =================
["2.1","Cell cycle","Interphase (G1, S, G2) followed by mitosis and cytokinesis. DNA is copied during the S phase."],
["2.1","Mitosis","Division of the nucleus into two genetically identical diploid nuclei. Used for growth, repair and asexual reproduction."],
["2.1","Name the stages of mitosis and what happens in each","Prophase: chromosomes condense and the spindle forms. Metaphase: chromosomes line up at the equator. Anaphase: sister chromatids are pulled apart. Telophase: nuclear envelopes re-form. Cytokinesis then splits the cell."],
["2.1","Chromosome, chromatid and centromere","A chromosome is a coiled DNA molecule with proteins. After replication it has two identical sister chromatids joined at the centromere."],
["2.1","Homologous chromosomes","A matching pair, one from each parent, with the same genes in the same positions. They may carry different alleles."],
["2.1","Diploid (2n) and haploid (n)","Diploid cells have two sets of chromosomes (humans 46). Haploid cells have one set (humans 23), as in gametes."],
["2.1","Meiosis","Two divisions that make four genetically different haploid cells from one diploid cell. It happens in the ovaries and testes and halves the chromosome number."],
["2.1","What happens in meiosis I?","Homologous chromosomes pair up, cross over, and are separated into two cells. This halves the chromosome number."],
["2.1","What happens in meiosis II?","Sister chromatids are separated, as in mitosis, giving four haploid cells."],
["2.1","Crossing over","In prophase I, non-sister chromatids of homologous chromosomes swap sections. This makes new combinations of alleles on the chromosomes."],
["2.1","Independent assortment","Homologous pairs line up at random in metaphase I, so each gamete receives a random mix of maternal and paternal chromosomes."],
["2.1","Compare mitosis and meiosis","Mitosis: one division, two identical diploid cells, for growth and repair. Meiosis: two divisions, four different haploid cells, for gametes, with crossing over and independent assortment."],
["2.1","Structure of DNA (Watson and Crick model)","A double helix of two strands. Each strand has a sugar-phosphate backbone and bases pointing inwards, held to the other strand by hydrogen bonds."],
["2.1","Nucleotide","The building block of DNA: a phosphate group, a deoxyribose sugar and a nitrogenous base (A, T, C or G)."],
["2.1","Base pairing rule","A pairs with T (two hydrogen bonds) and C pairs with G (three hydrogen bonds). This is complementary base pairing."],
["2.1","Which bonds hold DNA together?","Hydrogen bonds join the base pairs between strands. Strong covalent bonds join the sugar and phosphate in each backbone."],
["2.1","DNA replication is semi-conservative. What does that mean?","Each new DNA molecule has one original strand and one new strand."],
["2.1","Steps of DNA replication","Helicase unwinds and unzips the helix by breaking hydrogen bonds. DNA polymerase adds complementary nucleotides to each template strand. Ligase joins fragments. Two identical DNA molecules result."],
["2.1","When does DNA replication occur?","During the S phase of interphase, before mitosis or meiosis begins."],
// ================= IQ2 · DOT POINT 2: continuity =================
["2.2","How does mitosis contribute to continuity?","It produces identical cells for growth and repair, and it allows asexual species to produce clones that carry on the species."],
["2.2","How does meiosis contribute to continuity?","It halves the chromosome number in gametes. Fertilisation restores the diploid number, so each generation has the correct number of chromosomes and new variation."],
["2.2","Why must DNA replication be accurate?","Each daughter cell needs a complete, correct copy of the genes. Errors can change proteins, harming the cell or the offspring."],
["2.2","Non-disjunction","Chromosomes fail to separate in meiosis, giving gametes with an extra or missing chromosome. Trisomy 21 (Down syndrome) is an example."],
["2.2","Mutation from replication errors","A copying mistake changes the base sequence. If it happens in cells that make gametes it can be inherited and add new alleles to a species."],
// ================= IQ3 · DOT POINT 1: forms of DNA =================
["3.1","DNA in eukaryotes","Long linear chromosomes inside a nucleus, wound around histone proteins. There are several chromosomes, and genes contain introns and exons."],
["3.1","DNA in prokaryotes","A single circular chromosome in the cytoplasm (nucleoid), with no nucleus and no histone wrapping like eukaryotes. Usually no introns."],
["3.1","Plasmid","A small circular piece of DNA, separate from the main chromosome, found in bacteria. It may carry extra genes such as antibiotic resistance and is used as a vector in genetic engineering."],
["3.1","Histone","A protein that DNA is wound around in eukaryotes, packing the DNA tightly into chromatin and chromosomes."],
["3.1","Gene and allele","A gene is a section of DNA that codes for a polypeptide. An allele is one version of a gene."],
["3.1","Exon and intron","Exons are coding sections that stay in the finished mRNA. Introns are non-coding sections removed during RNA processing in eukaryotes."],
["3.1","Compare eukaryote and prokaryote DNA","Eukaryote: linear, in a nucleus, with histones and introns. Prokaryote: circular, in the cytoplasm, no histones like eukaryotes, plus plasmids."],
// ================= IQ3 · DOT POINT 2: polypeptide synthesis =================
["3.2","Polypeptide synthesis","The making of a chain of amino acids using the code in a gene. It has two stages: transcription and translation."],
["3.2","Transcription","RNA polymerase copies a gene’s template strand into a complementary mRNA strand in the nucleus. RNA uses uracil (U) instead of thymine (T)."],
["3.2","RNA processing in eukaryotes","The first mRNA copy has introns cut out, and a cap and tail are added, before mRNA leaves the nucleus."],
["3.2","mRNA (messenger RNA)","Carries a copy of the gene’s code from the nucleus to the ribosome, as a series of three-base codons."],
["3.2","Codon","A group of three bases on mRNA that codes for one amino acid (or a start or stop signal). AUG is the start codon."],
["3.2","tRNA (transfer RNA)","Carries a specific amino acid to the ribosome. Its anticodon pairs with the matching mRNA codon."],
["3.2","Anticodon","Three bases on a tRNA that are complementary to an mRNA codon."],
["3.2","Ribosome","The site of translation. It reads the mRNA codons and joins the amino acids with peptide bonds."],
["3.2","Translation","At the ribosome, tRNAs bring amino acids in the order the mRNA codons say. Peptide bonds join them until a stop codon is reached and the polypeptide is released."],
["3.2","Compare DNA and RNA","DNA: double strand, deoxyribose, bases A, T, C, G, stays in the nucleus. RNA: single strand, ribose, bases A, U, C, G, moves to the cytoplasm."],
["3.2","Worked example: template strand TAC CCG","mRNA is AUG GGC. The anticodons are UAC and CCG. The amino acids are methionine then glycine."],
["3.2","The genetic code is universal and degenerate. What does that mean?","Universal: nearly all organisms use the same code. Degenerate: most amino acids have more than one codon."],
["3.2","Why is polypeptide synthesis important?","Polypeptides make up proteins such as enzymes, hormones, antibodies and structural proteins. They control cell function and determine many traits (the phenotype)."],
["3.2","Phenotype and genotype","The genotype is the alleles an organism has. The phenotype is its observable features, which come from the genotype and the environment."],
["3.2","How can the environment affect phenotypic expression?","Examples: hydrangea flower colour changes with soil pH, Siamese cat fur darkens in cooler body parts, a child’s height depends on nutrition, skin darkens with sun exposure."],
// ================= IQ3 · DOT POINT 3: proteins =================
["3.3","Amino acid","The monomer of proteins, with an amino group, a carboxyl group and a variable R group. There are 20 different kinds."],
["3.3","Peptide bond","The bond between the carboxyl group of one amino acid and the amino group of the next."],
["3.3","Four levels of protein structure","Primary: the order of amino acids. Secondary: helices and sheets. Tertiary: the overall 3D fold. Quaternary: several polypeptides joined together."],
["3.3","Why is protein shape important?","A protein’s shape decides what it can do. Heat or extreme pH can denature it, changing the shape so it stops working."],
["3.3","Enzymes","Protein catalysts. They speed up reactions by lowering activation energy and are specific because the substrate fits the active site."],
["3.3","Examples of protein functions","Structural: collagen, keratin. Transport: haemoglobin. Hormone: insulin. Defence: antibodies. Movement: actin and myosin. Enzymes: amylase."],
["3.3","Haemoglobin","A protein of four polypeptides each with a haem group. It carries oxygen in red blood cells."],
["3.3","Fibrous and globular proteins","Fibrous: long strands, strong, structural (collagen, keratin). Globular: rounded and often soluble (enzymes, haemoglobin)."],
["3.3","Sickle cell disease and protein structure","One base substitution changes one amino acid in the haemoglobin chain. The haemoglobin folds differently and red blood cells can become sickle-shaped."],
// ================= IQ4 · DOT POINT 1: modelling variation =================
["4.1","Four sources of genetic variation in sexual reproduction","Crossing over, independent assortment, random fertilisation and mutation."],
["4.1","Random fertilisation","Any sperm can fuse with any egg. Without crossing over, a human couple could already make about 70 trillion different combinations."],
["4.1","How many chromosome combinations can one human make by independent assortment?","2 to the power of 23, which is about 8.4 million, because there are 23 pairs."],
["4.1","Why is genetic variation important for a species?","It gives natural selection something to work on, so some individuals are more likely to survive changes such as disease or climate."],
["4.1","Mutation","A change in the DNA base sequence. It is the original source of new alleles."],
["4.1","Somatic and germline mutations","Somatic mutations occur in body cells and are not passed on. Germline mutations occur in cells that make gametes and can be inherited."],
["4.1","Point mutation (substitution)","One base is swapped for another. It may be silent, missense or nonsense."],
["4.1","Silent, missense and nonsense mutations","Silent: the amino acid does not change. Missense: a different amino acid is used. Nonsense: a stop codon appears and the protein is cut short."],
["4.1","Frameshift mutation","Insertion or deletion of bases that are not a multiple of three. All codons after the change are read differently, which often ruins the protein."],
["4.1","Chromosomal mutations","Changes to the number or structure of chromosomes, such as trisomy 21 (Down syndrome) or Turner syndrome (XO)."],
["4.1","Mutagen","Something that raises the mutation rate, such as UV light, X-rays, some chemicals in tobacco smoke and some viruses."],
["4.1","Are all mutations harmful?","No. Mutations can be harmful, neutral or beneficial, depending on the change and the environment."],
["4.1","How do you model meiosis with beads or pipe cleaners?","Use two colours for maternal and paternal chromosomes, pair homologues, swap a segment to show crossing over, then separate them to show the four different gametes."],
// ================= IQ4 · DOT POINT 2: inheritance patterns =================
["4.2","Genotype, phenotype, homozygous, heterozygous","Genotype: alleles present. Phenotype: observable trait. Homozygous: two identical alleles. Heterozygous: two different alleles."],
["4.2","Phenotype","The phenotype is the product of many complex interactions between the genotype, the environment or epigenetic influences."],
["4.2","What include in Genotype","Alleles (alt ver of genes or DNA sequence), Mutations, single nucleotide variations and sexual reproduction."],
["4.2","Epigenetics","Changes to the DNA packing, Chemical markers on DNA."],
["4.2","Physical and biotic environment","temperature, seasonal changes, food response."],
["4.2","Polyphenism"," is the expression of different phenotypes in organisms with the same genotype as a result of environment or epigenetics influendes.."],
];
