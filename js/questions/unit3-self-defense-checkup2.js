// Self Defense Checkup 2 - Complete Question Bank
// 50 Questions Total: 10 Topics × 5 Questions per Topic
// Distribution: 25 True / 25 False

const unit3SelfDefenseCheckup2 = {
    'unit3-self-defense-checkup2': [
        // ==========================================
        // TOPIC 1: Physical Barriers (5 questions)
        // ==========================================
        {
            type: 'tf',
            topic: 'Physical Barriers',
            question: 'Innate immunity provides immediate, nonspecific defense that doesn\'t require prior exposure to a pathogen, unlike adaptive immunity which takes days to develop.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Innate (nonspecific) immunity is the first line of defense</strong> that acts within minutes to hours. It includes barriers (skin, mucous membranes), chemicals (lysozymes, stomach acid), and cells (neutrophils, macrophages) that respond to any threat. <strong>Adaptive immunity</strong> is pathogen-specific but takes 5-7 days to develop, requiring antigen recognition and lymphocyte activation.'
        },
        {
            type: 'tf',
            topic: 'Physical Barriers',
            question: 'Intact skin serves as a physical barrier preventing most pathogens from entering the body, which is why breaks in skin increase infection risk.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Skin is the body\'s primary physical barrier</strong>—its tough keratinized layers prevent pathogen penetration. Skin also has chemical defenses (sebum, sweat with antimicrobials) and resident microbiome that compete with pathogens. Cuts, burns, surgical incisions, or IV sites breach this barrier, creating entry points. This is why wound care and aseptic technique are crucial.'
        },
        {
            type: 'tf',
            topic: 'Physical Barriers',
            question: 'Mucous membranes line body cavities exposed to the external environment and secrete mucus that traps pathogens, which are then expelled through mechanisms like coughing.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Mucous membranes protect internal passages</strong> (respiratory, digestive, urogenital tracts). They secrete sticky mucus that traps bacteria, viruses, and particles. Cilia in respiratory tract sweep mucus upward toward the throat (mucociliary escalator) where it\'s coughed out or swallowed. Coughing, sneezing, tears, and urination physically expel trapped pathogens.'
        },
        {
            type: 'tf',
            topic: 'Physical Barriers',
            question: 'Lysozymes are antibodies produced by B cells that specifically target and destroy bacterial cell walls.',
            correct: false,
            explanation: 'This is <strong>false</strong> on multiple counts. <strong>Lysozymes are enzymes, not antibodies</strong>, and they\'re part of <strong>innate immunity, not adaptive</strong>. Lysozymes are antimicrobial enzymes found in tears, saliva, mucus, and other secretions that break down peptidoglycan in bacterial cell walls, killing bacteria nonspecifically. Antibodies are specific proteins made by B cells as part of adaptive immunity.'
        },
        {
            type: 'tf',
            topic: 'Physical Barriers',
            question: 'The microbiome refers to pathogenic bacteria that cause disease and must be eliminated with antibiotics to maintain health.',
            correct: false,
            explanation: 'This is <strong>false</strong>. The <strong>microbiome consists of beneficial bacteria and other microorganisms</strong> that normally live on skin and in the body (especially gut). They provide biological defense by: competing with pathogens for space/nutrients, producing antimicrobial substances, and training the immune system. Excessive antibiotic use can harm the microbiome, reducing this protective effect and allowing pathogenic overgrowth.'
        },

        // ==========================================
        // TOPIC 2: Inflammation (5 questions)
        // ==========================================
        {
            type: 'tf',
            topic: 'Inflammation',
            question: 'Inflammation is a protective nonspecific immune response to tissue damage or infection, characterized by redness, heat, swelling, and pain.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>The four cardinal signs of inflammation are</strong>: <strong>redness</strong> (rubor) from vasodilation, <strong>heat</strong> (calor) from increased blood flow, <strong>swelling</strong> (tumor) from fluid accumulation, and <strong>pain</strong> (dolor) from chemical mediators and pressure. These changes help eliminate pathogens, prevent spread, remove debris, and begin tissue repair.'
        },
        {
            type: 'tf',
            topic: 'Inflammation',
            question: 'Vasodilation explains the warmth and redness of inflammation but reduces delivery of immune cells because widened vessels move blood away from the affected tissue.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Vasodilation increases local blood flow, helping deliver immune cells, oxygen, nutrients, and chemical mediators to the affected area. The same increased flow contributes to warmth and redness. <strong>The misconception correctly recognizes visible signs but reverses the functional consequence of increased local circulation.</strong>'
        },
        {
            type: 'tf',
            topic: 'Inflammation',
            question: 'Increased permeability of blood vessels during inflammation allows immune cells and proteins to leave the bloodstream and enter infected tissues to combat pathogens.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Increased vascular permeability (leakiness) is essential</strong>. Chemical mediators (histamine, cytokines) cause endothelial cells lining vessels to separate slightly, creating gaps. This allows: phagocytes to squeeze through (diapedesis), antibodies and complement proteins to enter tissues, and clotting factors to reach damaged areas. However, it also causes edema (swelling) as fluid leaks into tissues.'
        },
        {
            type: 'tf',
            topic: 'Inflammation',
            question: 'Neutrophils and macrophages engulf pathogens during inflammation but leave dead cells and tissue debris for the adaptive immune response to remove.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Phagocytes help clear pathogens as well as dead cells and tissue debris. Their cleanup function supports resolution and tissue repair, while some phagocytes also help activate adaptive immunity through antigen presentation. <strong>The misconception divides cleanup and pathogen defense into separate immune systems when phagocytosis contributes to both.</strong>'
        },
        {
            type: 'tf',
            topic: 'Inflammation',
            question: 'Fever is harmful and should always be immediately suppressed with medication because it serves no beneficial purpose in fighting infection.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Moderate fever is protective</strong>. Fever (elevated body temperature) triggered by cytokines (pyrogens): inhibits growth of many pathogens, speeds up immune cell activity and metabolism, enhances phagocytosis, and increases interferon activity. Only very high fevers (>104°F/40°C) or fevers in vulnerable patients need aggressive treatment. Moderate fevers actually help fight infection.'
        },

        // ==========================================
        // TOPIC 3: T Cells and B Cells (5 questions)
        // ==========================================
        {
            type: 'tf',
            topic: 'T Cells and B Cells',
            question: 'Adaptive immunity is pathogen-specific, takes days to develop, but creates immunological memory for faster responses to future encounters with the same pathogen.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Adaptive immunity\'s key features are specificity and memory</strong>. Unlike innate immunity\'s general response, adaptive immunity precisely targets specific pathogens through antigen recognition. Initial response takes 5-7 days (primary response) as lymphocytes proliferate and differentiate. However, memory cells persist for years/life, enabling rapid, stronger secondary responses upon re-exposure—the basis of vaccination.'
        },
        {
            type: 'tf',
            topic: 'T Cells and B Cells',
            question: 'B cells and T cells are both types of lymphocytes involved in adaptive immunity, with B cells producing antibodies and T cells providing cell-mediated immunity.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>B and T lymphocytes have distinct but complementary roles</strong>. <strong>B cells</strong> mature in bone marrow, produce antibodies (humoral immunity) targeting extracellular pathogens in blood/lymph. <strong>T cells</strong> mature in thymus, provide cell-mediated immunity—helper T cells coordinate responses, cytotoxic T cells kill infected cells. Together they constitute adaptive immunity.'
        },
        {
            type: 'tf',
            topic: 'T Cells and B Cells',
            question: 'Helper T cells are crucial for coordinating immune responses because they activate both B cells to produce antibodies and cytotoxic T cells to kill infected cells.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Helper T cells (CD4+) are immune system "coordinators"</strong>. After recognizing antigens presented by APCs, they: activate B cells to differentiate into antibody-producing plasma cells, activate cytotoxic T cells to kill infected cells, stimulate macrophages to increase phagocytosis, and release cytokines regulating inflammation. HIV\'s destruction of helper T cells explains AIDS—without coordinators, the entire immune response collapses.'
        },
        {
            type: 'tf',
            topic: 'T Cells and B Cells',
            question: 'Cytotoxic T cells protect against viral infection mainly by destroying free virus particles in the blood rather than the body cells producing those viruses.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Cytotoxic T cells recognize and destroy infected or cancerous body cells displaying abnormal antigens. Eliminating those compromised cells removes a source of viral production or malignant growth. <strong>The misconception assigns cytotoxic T cells the job of directly neutralizing free particles instead of targeting altered self-cells.</strong>'
        },
        {
            type: 'tf',
            topic: 'T Cells and B Cells',
            question: 'B cells and T cells can recognize and respond to any pathogen immediately without requiring activation or differentiation.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Lymphocytes require activation and clonal expansion</strong>. Naive B and T cells with specific antigen receptors must: (1) encounter their specific antigen, (2) receive activation signals (from helper T cells or APCs), (3) proliferate through clonal expansion (creating many identical cells), and (4) differentiate into effector cells (plasma cells, cytotoxic T cells) and memory cells. This takes days—why adaptive immunity isn\'t immediate.'
        },

        // ==========================================
        // TOPIC 4: Immune Responses (5 questions)
        // ==========================================
        {
            type: 'tf',
            topic: 'Immune Responses',
            question: 'The primary immune response occurs during the first exposure to a pathogen and takes several days to produce antibodies and activated T cells.',
            correct: true,
            explanation: 'This is <strong>true</strong>. The <strong>primary response is slower and weaker</strong>. Upon first exposure: (1) antigen recognition takes time, (2) few lymphocytes have matching receptors, (3) clonal expansion requires multiple cell divisions (days), (4) antibody levels peak around 10-14 days, (5) antibodies are initially IgM. During this lag, innate immunity provides defense while adaptive immunity develops.'
        },
        {
            type: 'tf',
            topic: 'Immune Responses',
            question: 'The secondary immune response is faster, stronger, and longer-lasting than the primary response because memory cells recognize the pathogen immediately and respond rapidly.',
            correct: true,
            explanation: 'This is <strong>true</strong>. The <strong>secondary response demonstrates immunological memory</strong>. Memory B and T cells from primary response: (1) recognize antigen immediately, (2) proliferate faster, (3) produce antibodies within 2-3 days (not 10-14), (4) generate higher antibody levels, (5) produce more effective IgG antibodies, (6) mount stronger cell-mediated response. This memory is why vaccines work and why you don\'t get chickenpox twice.'
        },
        {
            type: 'tf',
            topic: 'Immune Responses',
            question: 'Long-lived memory cells provide broad protection against unrelated pathogens because immune memory becomes less antigen-specific as it persists.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Memory B and T cells support a faster response when the specific antigen they recognize returns. Their long lifespan does not convert that acquired immunity into nonspecific protection against unrelated pathogens. <strong>The misconception confuses durability with breadth.</strong>'
        },
        {
            type: 'tf',
            topic: 'Immune Responses',
            question: 'The primary immune response provides immediate, complete protection upon first exposure to a pathogen, preventing any symptoms of illness.',
            correct: false,
            explanation: 'This is <strong>false</strong>. The <strong>primary response has a lag period of days</strong> during which you can get sick. While adaptive immunity develops, innate immunity provides initial defense but may not prevent illness. You typically experience symptoms during first infection as the primary response is mounting. Only the secondary response (on re-exposure) is fast enough to prevent illness, which is why vaccination before exposure is crucial.'
        },
        {
            type: 'tf',
            topic: 'Immune Responses',
            question: 'Vaccines work by triggering a secondary immune response, which is why they provide immediate protection without needing memory cell formation.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Vaccines trigger PRIMARY responses, not secondary</strong>. They introduce antigen (weakened/killed pathogen, or mRNA) causing the immune system to mount a primary response—producing antibodies and creating memory cells—without causing disease. These memory cells enable a fast secondary response if the real pathogen is later encountered. Vaccines don\'t provide immediate protection; they require weeks to develop memory.'
        },

        // ==========================================
        // TOPIC 5: Active vs Passive Immunity (5 questions)
        // ==========================================
        {
            type: 'tf',
            topic: 'Active vs Passive Immunity',
            question: 'Active immunity occurs when the body produces its own antibodies and memory cells in response to antigens from infection or vaccination.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Active immunity means self-produced immunity</strong>. The person\'s own immune system responds to antigen exposure (natural infection or vaccine), producing: antibodies, effector T cells, and crucially, memory cells. Development takes time (days-weeks) but provides long-lasting protection (years to life). Examples: recovering from measles, receiving MMR vaccine.'
        },
        {
            type: 'tf',
            topic: 'Active vs Passive Immunity',
            question: 'Passive immunity involves receiving pre-formed antibodies from another source, providing immediate but temporary protection without creating memory cells.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Passive immunity is "borrowed" immunity</strong>. Pre-formed antibodies transferred from another person/animal provide immediate protection (no lag) but are temporary (antibodies degrade over weeks-months) and don\'t create memory. Examples: maternal antibodies crossing placenta/breast milk, antibody injections (immunoglobulins) for rabies exposure, tetanus, hepatitis. Used when immediate protection needed.'
        },
        {
            type: 'tf',
            topic: 'Active vs Passive Immunity',
            question: 'Breastfeeding provides passive immunity to infants through maternal antibodies (especially IgA) in breast milk, protecting newborns while their own immune systems develop.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Breast milk is rich in maternal antibodies</strong>, especially secretory IgA coating mucous membranes to prevent pathogen attachment. Infants also receive IgG across the placenta before birth. This passive immunity protects for ~6 months while the infant\'s immature immune system develops. Breastfeeding reduces infant infections significantly, though protection is temporary as maternal antibodies degrade.'
        },
        {
            type: 'tf',
            topic: 'Active vs Passive Immunity',
            question: 'Active immunity provides immediate protection but only lasts a few weeks, while passive immunity takes weeks to develop but lasts a lifetime.',
            correct: false,
            explanation: 'This is <strong>false</strong>—it\'s completely reversed! <strong>Active immunity</strong> takes days-weeks to develop but lasts years-life (due to memory cells). <strong>Passive immunity</strong> provides immediate protection but lasts only weeks-months (antibodies degrade, no memory cells formed). This distinction is crucial: vaccines (active) require advance planning but provide durability; antibody injections (passive) give instant protection but are temporary.'
        },
        {
            type: 'tf',
            topic: 'Active vs Passive Immunity',
            question: 'All vaccines provide passive immunity by injecting pre-formed antibodies into the recipient.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Most vaccines provide ACTIVE immunity</strong>, not passive. Vaccines contain antigens (weakened/killed pathogens, proteins, mRNA) that stimulate the recipient\'s immune system to produce its own antibodies and memory cells. <strong>Immune globulin injections</strong> (not vaccines) provide passive immunity with pre-formed antibodies. The terminology matters: vaccines stimulate active immunity.'
        },

        // ==========================================
        // TOPIC 6: Vaccines (5 questions)
        // ==========================================
        {
            type: 'tf',
            topic: 'Vaccines',
            question: 'Vaccines work by exposing the immune system to antigens from a pathogen in a way that triggers immunity without causing the actual disease.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Vaccines safely mimic infection</strong>. They contain: weakened (attenuated) pathogens, killed pathogens, pathogen components (proteins), toxoids, or mRNA coding for pathogen proteins. These antigens trigger primary immune response—antibody production, T cell activation, memory cell formation—without causing disease. When later exposed to real pathogen, memory cells mount rapid secondary response preventing illness.'
        },
        {
            type: 'tf',
            topic: 'Vaccines',
            question: 'mRNA vaccines contain genetic instructions that cause cells to temporarily produce a harmless piece of pathogen protein, triggering immune response without using any actual virus.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>mRNA vaccines are a novel approach</strong>. They contain mRNA instructions for cells to make a harmless viral protein (like COVID spike protein). Cells produce this protein, display it, then destroy the mRNA. The immune system recognizes the protein as foreign, producing antibodies and memory cells. Importantly, mRNA vaccines contain NO virus (live, weakened, or killed), cannot cause infection, and don\'t alter DNA.'
        },
        {
            type: 'tf',
            topic: 'Vaccines',
            question: 'Once a vaccine series is completed, protection cannot be reduced by immune suppression or major pathogen mutation because memory cells respond equally under all conditions.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Protection depends on the person mounting and maintaining an adequate immune response and on the pathogen retaining recognizable antigens. Immune suppression can weaken the response, and substantial mutation can reduce recognition. <strong>The misconception treats immune memory as guaranteed and unaffected by either host or pathogen variation.</strong>'
        },
        {
            type: 'tf',
            topic: 'Vaccines',
            question: 'Once vaccinated, a person can never contract the disease they were vaccinated against under any circumstances.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Vaccines are highly effective but not 100% guaranteed</strong>. Breakthrough infections can occur due to: incomplete immune response, waning immunity over time, immunocompromised state, pathogen mutation, or overwhelming pathogen exposure. However, vaccinated individuals who do get infected typically have milder, shorter illness than unvaccinated. Vaccines dramatically reduce risk but don\'t eliminate it entirely.'
        },
        {
            type: 'tf',
            topic: 'Vaccines',
            question: 'The only purpose of vaccination is to protect the individual who receives the vaccine, with no benefits for the broader community.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Vaccination provides both individual and community protection</strong> through herd immunity. When enough people are vaccinated, disease transmission decreases dramatically, protecting: unvaccinated infants, immunocompromised individuals who can\'t be vaccinated, people for whom vaccines failed, and reducing overall disease burden. High vaccination rates can eliminate diseases entirely (smallpox eradication). Individual vaccination is also a community benefit.'
        },

        // ==========================================
        // TOPIC 7: Herd Immunity (5 questions)
        // ==========================================
        {
            type: 'tf',
            topic: 'Herd Immunity',
            question: 'Herd immunity occurs when a large percentage of a population becomes immune to a disease, making disease spread unlikely and protecting vulnerable individuals who cannot be vaccinated.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Herd immunity is community-level protection</strong>. When sufficient people are immune (through vaccination or previous infection), pathogens have fewer susceptible hosts, chains of transmission are broken, and disease spread slows/stops. This protects vulnerable people (infants too young for vaccines, immunocompromised, those with contraindications). The immune majority shields the susceptible minority.'
        },
        {
            type: 'tf',
            topic: 'Herd Immunity',
            question: 'The threshold percentage needed for herd immunity varies by disease, with highly contagious diseases like measles requiring higher vaccination rates than less contagious diseases.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Herd immunity thresholds depend on contagiousness</strong> (R0—basic reproduction number). Highly contagious diseases need higher immunity: measles (R0=12-18) requires ~95% immunity, polio needs ~80%, rubella needs ~85%. Less contagious diseases need lower percentages. The threshold formula: 1-(1/R0). More transmissible diseases require more people immune to interrupt spread effectively.'
        },
        {
            type: 'tf',
            topic: 'Herd Immunity',
            question: 'Vaccine hesitancy and declining vaccination rates can reduce herd immunity, leading to disease outbreaks even in previously well-protected communities.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Herd immunity is fragile</strong>. When vaccination rates drop below the threshold (due to hesitancy, misinformation, access issues), diseases resurge. Examples: measles outbreaks in US communities with low vaccination rates, whooping cough resurgence in areas with vaccine refusal. Even small immunity gaps can allow outbreaks because pathogens exploit unvaccinated clusters. Maintaining high coverage is essential.'
        },
        {
            type: 'tf',
            topic: 'Herd Immunity',
            question: 'Herd immunity can only be achieved through widespread vaccination and cannot occur through natural infection.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Herd immunity can develop through either vaccination OR natural infection</strong>. Historically, populations developed herd immunity through devastating epidemics where survivors were immune. However, achieving herd immunity through natural infection causes tremendous suffering, death, and long-term complications. Vaccination achieves the same protection without disease burden—it\'s the safe, ethical path to herd immunity.'
        },
        {
            type: 'tf',
            topic: 'Herd Immunity',
            question: 'As long as most people in a community are vaccinated, unvaccinated individuals face no personal health risk because herd immunity provides complete protection.',
            correct: false,
            explanation: 'This is <strong>false</strong>. While <strong>herd immunity reduces risk, unvaccinated individuals remain personally vulnerable</strong>. They can still: (1) get infected from outside the community, (2) be infected during outbreaks if immunity drops, (3) suffer severe disease (being unvaccinated means no personal protection), (4) face complications vaccinated people avoid. Herd immunity is a partial shield, not complete protection. Personal vaccination provides best protection.'
        },

        // ==========================================
        // TOPIC 8: Immune Disorders (5 questions)
        // ==========================================
        {
            type: 'tf',
            topic: 'Immune Disorders',
            question: 'Immunocompromised individuals have weakened immune systems due to disease or medical treatments, making them more susceptible to infections that healthy immune systems easily control.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Immunocompromised means impaired immunity</strong> from: HIV/AIDS (destroys helper T cells), cancer treatments (chemotherapy damages bone marrow), immunosuppressants (transplant anti-rejection drugs, autoimmune disease treatments), or congenital immunodeficiencies. These individuals get frequent, severe, or opportunistic infections (pathogens healthy immune systems easily eliminate). They need prophylactic antibiotics, antifungals, and cannot receive live vaccines.'
        },
        {
            type: 'tf',
            topic: 'Immune Disorders',
            question: 'Autoimmune diseases occur when the immune system mistakenly attacks the body\'s own healthy cells and tissues, requiring immunosuppressant medications to reduce this inappropriate immune response.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Autoimmunity is misdirected immunity</strong>. Self-tolerance mechanisms fail, causing immune attacks on healthy tissues: Type 1 diabetes (pancreatic beta cells), rheumatoid arthritis (joints), multiple sclerosis (myelin), lupus (multiple tissues), Hashimoto\'s thyroiditis (thyroid). Treatment uses immunosuppressants (corticosteroids, biologics) to reduce attack, though this increases infection risk. Balancing immune suppression with infection prevention is challenging.'
        },
        {
            type: 'tf',
            topic: 'Immune Disorders',
            question: 'HIV primarily destroys antibody-producing B cells, while helper T-cell numbers remain stable until after AIDS has developed.',
            correct: false,
            explanation: 'This is <strong>false</strong>. HIV primarily targets CD4+ helper T cells. Their progressive loss weakens coordination of immune responses and is central to the development of AIDS when untreated. <strong>The misconception assigns HIV\'s main target to a different lymphocyte and reverses the order of immune decline and disease progression.</strong>'
        },
        {
            type: 'tf',
            topic: 'Immune Disorders',
            question: 'Autoimmune diseases can be permanently cured with a single course of antibiotics.',
            correct: false,
            explanation: 'This is <strong>false</strong> on multiple levels. <strong>Autoimmune diseases cannot be cured and don\'t respond to antibiotics</strong>. Antibiotics treat bacterial infections; autoimmune diseases involve immune system dysfunction attacking self-tissues. Treatment focuses on: immune suppression (corticosteroids, biologics, DMARDs), symptom management, and preventing complications. Autoimmune diseases are typically chronic, requiring lifelong management, not curable with any current therapy.'
        },
        {
            type: 'tf',
            topic: 'Immune Disorders',
            question: 'Immunosuppressant medications used to treat autoimmune diseases or prevent organ rejection have no side effects or risks.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Immunosuppressants have significant risks</strong>: increased infection susceptibility (bacteria, viruses, fungi), increased cancer risk (immune surveillance against abnormal cells is impaired), delayed wound healing, and medication-specific toxicities (kidney damage, bone marrow suppression). Benefits must outweigh risks. Patients need monitoring for infections and cannot receive live vaccines. It\'s a careful balance between controlling disease and maintaining enough immunity.'
        },

        // ==========================================
        // TOPIC 9: Allergic Reactions (5 questions)
        // ==========================================
        {
            type: 'tf',
            topic: 'Allergic Reactions',
            question: 'An allergic reaction is an exaggerated immune response to a normally harmless substance (allergen), mediated by IgE antibodies and mast cells releasing histamine.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Allergies are hypersensitivity reactions</strong>. During sensitization, allergen exposure causes IgE antibody production. These IgE antibodies bind to mast cells. Upon re-exposure, allergen cross-links IgE on mast cells, triggering degranulation—massive release of histamine and other mediators causing: vasodilation, increased permeability, mucus production, smooth muscle contraction. Symptoms: itching, swelling, hives, runny nose, wheezing.'
        },
        {
            type: 'tf',
            topic: 'Allergic Reactions',
            question: 'Anaphylaxis is a severe, life-threatening allergic reaction that causes difficulty breathing, drop in blood pressure, and potentially death if not immediately treated with epinephrine.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Anaphylaxis is a medical emergency</strong>. Massive systemic histamine release causes: airway constriction (difficulty breathing, throat swelling), severe vasodilation (dangerously low blood pressure, shock), hives, vomiting. Common triggers: foods (peanuts, shellfish), insect stings, medications. Treatment: immediate epinephrine injection (EpiPen) reverses symptoms by constricting blood vessels, relaxing airways, reducing swelling. Delayed treatment can be fatal.'
        },
        {
            type: 'tf',
            topic: 'Allergic Reactions',
            question: 'Antihistamines are the first-line treatment for anaphylactic airway and blood-pressure changes, while epinephrine is reserved mainly for persistent skin symptoms.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Epinephrine is the first-line emergency treatment because it addresses life-threatening airway narrowing, swelling, and cardiovascular collapse. Antihistamines may help some allergic symptoms but are not an adequate substitute during anaphylaxis. <strong>The misconception reverses the urgency and physiological roles of the treatments.</strong>'
        },
        {
            type: 'tf',
            topic: 'Allergic Reactions',
            question: 'Antihistamines block histamine receptors and are equally effective as epinephrine for treating severe anaphylactic reactions.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Antihistamines are NOT adequate for anaphylaxis</strong>. While antihistamines (Benadryl, Zyrtec) block histamine receptors and help with mild allergic symptoms (itching, hives, runny nose), they: (1) act too slowly for anaphylaxis, (2) don\'t reverse airway constriction or cardiovascular collapse, (3) don\'t address non-histamine mediators. Only epinephrine treats life-threatening symptoms. Antihistamines are adjunct, not primary anaphylaxis treatment.'
        },
        {
            type: 'tf',
            topic: 'Allergic Reactions',
            question: 'During sensitization (first exposure to an allergen), a person experiences severe allergic symptoms because their body immediately recognizes the substance as dangerous.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Sensitization is symptom-free</strong>. During first exposure, the immune system encounters the allergen, inappropriately produces IgE antibodies, which bind to mast cells—priming the system. No symptoms occur because mast cells haven\'t degranulated yet. Allergic symptoms only appear on second/subsequent exposures when allergen cross-links the IgE on primed mast cells, triggering histamine release. This is why allergies often "suddenly appear" to familiar substances.'
        },

        // ==========================================
        // TOPIC 10: Cancer (5 questions)
        // ==========================================
        {
            type: 'tf',
            topic: 'Cancer',
            question: 'Cancer develops when mutations in genes regulating cell division and growth (oncogenes, tumor suppressor genes, DNA repair genes) lead to uncontrolled cell proliferation.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Cancer is a genetic disease of lost growth control</strong>. Multiple mutations accumulate over time: <strong>Oncogenes</strong> (mutated growth-promoting genes) become overactive; <strong>tumor suppressor genes</strong> (normally stop division) are inactivated; <strong>DNA repair genes</strong> fail to fix errors. Together, these allow cells to: divide continuously, ignore stop signals, evade apoptosis, invade tissues, and metastasize.'
        },
        {
            type: 'tf',
            topic: 'Cancer',
            question: 'Benign tumors are non-cancerous growths that remain localized and don\'t invade surrounding tissues or metastasize, while malignant tumors are cancerous, invasive, and can spread throughout the body.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Benign vs. malignant is critical distinction</strong>. <strong>Benign tumors</strong>: grow slowly, stay contained, don\'t invade or metastasize, can cause problems by pressure but aren\'t cancer. <strong>Malignant tumors</strong>: grow rapidly, invade nearby tissues, metastasize to distant sites via blood/lymph, are "cancer." Metastatic cancer is life-threatening because it disrupts multiple organs. Treatment and prognosis differ dramatically.'
        },
        {
            type: 'tf',
            topic: 'Cancer',
            question: 'Metastasis occurs when cancer cells break away from the primary tumor, travel through blood or lymph, and establish secondary tumors in distant organs.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Metastasis makes cancer deadly</strong>. Cancer cells: (1) break through basement membrane, (2) enter circulation (bloodstream or lymphatics), (3) survive circulation, (4) exit vessels at distant sites, (5) colonize new tissues, (6) establish secondary tumors. Metastatic cancer is much harder to treat than localized cancer—surgery can\'t remove all sites, and vital organs (lungs, liver, brain, bone) become compromised.'
        },
        {
            type: 'tf',
            topic: 'Cancer',
            question: 'All cancers are caused by inherited genetic mutations passed from parents to children.',
            correct: false,
            explanation: 'This is <strong>false</strong>. While <strong>5-10% of cancers involve inherited predisposition</strong> (BRCA mutations for breast cancer, Lynch syndrome for colon cancer), <strong>most cancers are caused by acquired mutations</strong> from: tobacco (lung cancer), UV radiation (skin cancer), viruses (HPV→cervical cancer, hepatitis→liver cancer), carcinogens, chronic inflammation, aging, and random DNA replication errors. Heredity plays a role in some cancers but isn\'t the primary cause for most.'
        },
        {
            type: 'tf',
            topic: 'Cancer',
            question: 'Once cancer develops, lifestyle changes like quitting smoking, improving diet, or exercising cannot affect cancer progression or treatment outcomes.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Lifestyle changes remain important even after cancer diagnosis</strong>. Evidence shows: quitting smoking improves cancer treatment effectiveness and survival, good nutrition supports immune function and treatment tolerance, exercise reduces fatigue and improves outcomes, stress reduction aids recovery. While lifestyle changes alone can\'t cure established cancer (requiring medical treatment), they significantly impact treatment success, quality of life, and recurrence risk.'
        }
    ]
};
