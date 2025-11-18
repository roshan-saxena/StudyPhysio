// StudyPhysio - Unit 3: Self Defense Checkup 2 Questions
// 50 True/False questions covering 10 topics

const unit3SelfDefenseCheckup2 = {
    'unit3-self-defense-checkup2': [

        // TOPIC 1: Nonspecific immunity — 1st line (5 questions)
        {
            type: 'tf',
            topic: 'Physical Barriers',
            question: 'Innate immunity provides immediate, non-specific defense against all pathogens.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Innate (nonspecific) immunity</strong> provides rapid, general defense against any pathogen. It doesn\'t require prior exposure and includes physical/chemical barriers and cellular responses.'
        },
        {
            type: 'tf',
            topic: 'Physical Barriers',
            question: 'Skin provides a physical barrier that prevents most pathogens from entering the body.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Intact skin</strong> is the body\'s first line of defense, providing a physical barrier that most pathogens cannot penetrate. Cuts or breaks in skin allow pathogen entry.'
        },
        {
            type: 'tf',
            topic: 'Physical Barriers',
            question: 'Mucous membranes line body cavities and produce mucus that traps pathogens.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Mucous membranes</strong> line respiratory, digestive, and urogenital tracts. They secrete <strong>mucus</strong> that traps pathogens, which are then expelled through coughing, sneezing, or other means.'
        },
        {
            type: 'tf',
            topic: 'Physical Barriers',
            question: 'Lysozymes are enzymes found in tears and saliva that can destroy bacterial cell walls.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Lysozymes</strong> are antibacterial enzymes in tears, saliva, mucus, and other secretions that break down bacterial cell walls, providing chemical defense at body surfaces.'
        },
        {
            type: 'tf',
            topic: 'Physical Barriers',
            question: 'The microbiome (normal bacteria on skin and in body) helps prevent pathogen colonization.',
            correct: true,
            explanation: 'This is <strong>true</strong>. The <strong>microbiome</strong> (beneficial bacteria) competes with pathogens for space and nutrients, produces antimicrobial substances, and helps train the immune system, providing biological defense.'
        },

        // TOPIC 2: Nonspecific immunity — 2nd line (inflammation) (5 questions)
        {
            type: 'tf',
            topic: 'Inflammation',
            question: 'Inflammation is a nonspecific immune response to tissue damage or infection.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Inflammation</strong> is a protective response to injury or infection involving vasodilation, increased permeability, immune cell recruitment, and release of chemical mediators to eliminate threats and begin healing.'
        },
        {
            type: 'tf',
            topic: 'Inflammation',
            question: 'The four classic signs of inflammation are redness, heat, swelling, and pain.',
            correct: true,
            explanation: 'This is <strong>true</strong>. The four cardinal signs are: <strong>redness</strong> (vasodilation), <strong>heat</strong> (increased blood flow), <strong>swelling</strong> (fluid accumulation), and <strong>pain</strong> (nerve stimulation by chemicals and pressure).'
        },
        {
            type: 'tf',
            topic: 'Inflammation',
            question: 'Vasodilation during inflammation decreases blood flow to the affected area.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Vasodilation increases blood flow</strong> to the inflamed area, bringing more oxygen, nutrients, immune cells, and chemical mediators to fight infection and promote healing.'
        },
        {
            type: 'tf',
            topic: 'Inflammation',
            question: 'Phagocytes are white blood cells that engulf and destroy pathogens and debris.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Phagocytes</strong> (neutrophils, macrophages) perform <strong>phagocytosis</strong>—engulfing and digesting pathogens, dead cells, and debris. They\'re crucial for clearing infections and damaged tissue.'
        },
        {
            type: 'tf',
            topic: 'Inflammation',
            question: 'Fever is an inflammatory response that can help inhibit pathogen growth and speed immune responses.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Fever</strong> (elevated body temperature) is triggered by cytokines. It inhibits some pathogens\' growth, speeds up immune cell activity and metabolism, and enhances repair processes.'
        },

        // TOPIC 3: Specific immunity: T cells and B cells (5 questions)
        {
            type: 'tf',
            topic: 'T Cells and B Cells',
            question: 'Adaptive immunity is specific to particular pathogens and has memory.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Adaptive (specific) immunity</strong> targets specific pathogens, takes days to develop, but creates <strong>immunological memory</strong> for faster, stronger responses to future encounters with the same pathogen.'
        },
        {
            type: 'tf',
            topic: 'T Cells and B Cells',
            question: 'T cells mature in the thymus and are responsible for cell-mediated immunity.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>T cells</strong> mature in the thymus gland. They provide <strong>cell-mediated immunity</strong>—directly attacking infected cells, activating other immune cells, and regulating immune responses.'
        },
        {
            type: 'tf',
            topic: 'T Cells and B Cells',
            question: 'B cells produce antibodies that circulate in blood and lymph to neutralize pathogens.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>B cells</strong> produce <strong>antibodies (immunoglobulins)</strong> that bind to specific antigens on pathogens, marking them for destruction, neutralizing toxins, and preventing pathogen attachment to cells.'
        },
        {
            type: 'tf',
            topic: 'T Cells and B Cells',
            question: 'Helper T cells activate both B cells and cytotoxic T cells, coordinating the immune response.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Helper T cells (CD4+)</strong> are crucial coordinators—they activate B cells to produce antibodies, activate cytotoxic T cells to kill infected cells, and stimulate macrophages. Loss of helper T cells (as in HIV) cripples immunity.'
        },
        {
            type: 'tf',
            topic: 'T Cells and B Cells',
            question: 'Cytotoxic T cells destroy cancer cells and cells infected with viruses.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Cytotoxic T cells (CD8+)</strong> recognize and destroy body cells that are infected with viruses or have become cancerous, releasing chemicals that induce programmed cell death (apoptosis).'
        },

        // TOPIC 4: Specific Immunity: Primary and secondary immune responses (5 questions)
        {
            type: 'tf',
            topic: 'Immune Responses',
            question: 'The primary immune response occurs the first time the body encounters a specific antigen.',
            correct: true,
            explanation: 'This is <strong>true</strong>. The <strong>primary response</strong> occurs on first exposure to an antigen. It takes several days to develop, produces moderate antibody levels, and establishes memory cells for future protection.'
        },
        {
            type: 'tf',
            topic: 'Immune Responses',
            question: 'The secondary immune response is faster and stronger than the primary response.',
            correct: true,
            explanation: 'This is <strong>true</strong>. The <strong>secondary response</strong> (upon re-exposure) is <strong>faster, stronger, and longer-lasting</strong> because memory B and T cells recognize the antigen immediately and mount a rapid, amplified response.'
        },
        {
            type: 'tf',
            topic: 'Immune Responses',
            question: 'Memory cells are produced during the primary immune response and provide long-term immunity.',
            correct: true,
            explanation: 'This is <strong>true</strong>. During primary response, some activated B and T cells become <strong>memory cells</strong> that persist for years or life, enabling rapid secondary responses and providing long-term immunity.'
        },
        {
            type: 'tf',
            topic: 'Immune Responses',
            question: 'The primary immune response provides immediate protection on first exposure to a pathogen.',
            correct: false,
            explanation: 'This is <strong>false</strong>. The primary response takes <strong>several days to weeks</strong> to develop full protection. During this lag period, innate immunity provides defense while adaptive immunity develops.'
        },
        {
            type: 'tf',
            topic: 'Immune Responses',
            question: 'Vaccination triggers a primary immune response without causing disease.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Vaccines</strong> contain weakened/killed pathogens or pathogen parts that trigger primary immune response and memory cell formation, providing protection against future real infection without causing disease.'
        },

        // TOPIC 5: Specific Immunity: Active and passive immunity (5 questions)
        {
            type: 'tf',
            topic: 'Active vs Passive',
            question: 'Active immunity occurs when the body produces its own antibodies in response to an antigen.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Active immunity</strong> develops when your immune system responds to an antigen (from infection or vaccine) by producing antibodies and memory cells. It\'s long-lasting but takes time to develop.'
        },
        {
            type: 'tf',
            topic: 'Active vs Passive',
            question: 'Passive immunity occurs when antibodies are transferred from another source rather than produced by the body.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Passive immunity</strong> comes from receiving antibodies made by another person/animal (maternal antibodies through placenta/breast milk, or antibody injections). It provides immediate but temporary protection.'
        },
        {
            type: 'tf',
            topic: 'Active vs Passive',
            question: 'Active immunity provides immediate protection but is short-lived.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Active immunity takes time to develop (days-weeks) but provides <strong>long-lasting protection</strong> through memory cells. <strong>Passive immunity</strong> provides immediate but short-lived protection.'
        },
        {
            type: 'tf',
            topic: 'Active vs Passive',
            question: 'Breastfeeding provides passive immunity to infants through maternal antibodies in breast milk.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Breast milk contains maternal antibodies (especially IgA)</strong> that provide passive immunity, protecting infants from infections while their own immune systems develop.'
        },
        {
            type: 'tf',
            topic: 'Active vs Passive',
            question: 'Vaccines provide passive immunity by injecting pre-formed antibodies.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Most vaccines provide <strong>active immunity</strong> by exposing the immune system to antigens, triggering antibody production and memory. Passive immunity comes from direct antibody transfer (like immune globulin injections).'
        },

        // TOPIC 6: Vaccines (5 questions)
        {
            type: 'tf',
            topic: 'Vaccines',
            question: 'Vaccines work by triggering an immune response without causing the disease.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Vaccines</strong> contain weakened, killed, or partial pathogens (or mRNA instructions) that stimulate immune response and memory cell formation without causing disease, preparing the body for future real infection.'
        },
        {
            type: 'tf',
            topic: 'Vaccines',
            question: 'mRNA vaccines contain weakened live virus that can cause mild infection.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>mRNA vaccines</strong> contain genetic instructions for cells to make a harmless piece of pathogen (like COVID spike protein). They contain <strong>no virus</strong>—live, weakened, or dead—and cannot cause infection.'
        },
        {
            type: 'tf',
            topic: 'Vaccines',
            question: 'Vaccines can sometimes fail to provide immunity if the immune system does not respond adequately.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Vaccines can fail if: the person is <strong>immunocompromised</strong>, doesn\'t complete the series, the pathogen mutates significantly, or the individual\'s immune system doesn\'t mount an adequate response.'
        },
        {
            type: 'tf',
            topic: 'Vaccines',
            question: 'Vaccination not only protects the individual but also helps protect communities through herd immunity.',
            correct: true,
            explanation: 'This is <strong>true</strong>. When enough people are vaccinated, it creates <strong>herd immunity</strong>, reducing disease spread and protecting vulnerable individuals who cannot be vaccinated (infants, immunocompromised).'
        },
        {
            type: 'tf',
            topic: 'Vaccines',
            question: 'Once vaccinated, a person can never get the disease they were vaccinated against.',
            correct: false,
            explanation: 'This is <strong>false</strong>. While vaccines are highly effective, they\'re not 100% guaranteed. <strong>Breakthrough infections can occur</strong>, especially if immunity wanes, the pathogen mutates, or the person is immunocompromised.'
        },

        // TOPIC 7: Herd immunity (5 questions)
        {
            type: 'tf',
            topic: 'Herd Immunity',
            question: 'Herd immunity occurs when enough people in a population are immune to prevent disease spread.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Herd immunity</strong> (community immunity) occurs when a large percentage of the population is immune (through vaccination or previous infection), making disease spread unlikely and protecting vulnerable individuals.'
        },
        {
            type: 'tf',
            topic: 'Herd Immunity',
            question: 'Herd immunity protects individuals who cannot be vaccinated, such as infants or immunocompromised people.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Herd immunity provides <strong>indirect protection</strong> for vulnerable people who cannot be vaccinated (too young, allergies, immunocompromised) by reducing their exposure to disease.'
        },
        {
            type: 'tf',
            topic: 'Herd Immunity',
            question: 'The percentage of population needed for herd immunity is the same for all diseases.',
            correct: false,
            explanation: 'This is <strong>false</strong>. The <strong>threshold varies by disease</strong> based on contagiousness. Highly contagious diseases (measles) require 95% immunity, while less contagious ones need lower percentages.'
        },
        {
            type: 'tf',
            topic: 'Herd Immunity',
            question: 'Vaccine hesitancy can reduce herd immunity and lead to disease outbreaks.',
            correct: true,
            explanation: 'This is <strong>true</strong>. When <strong>vaccination rates drop</strong> due to hesitancy, herd immunity weakens, allowing disease resurgence. This has caused measles and whooping cough outbreaks in communities with low vaccination rates.'
        },
        {
            type: 'tf',
            topic: 'Herd Immunity',
            question: 'Herd immunity can only be achieved through vaccination, not through natural infection.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Herd immunity can develop through <strong>either vaccination or widespread natural infection</strong>. However, vaccination is much safer—achieving herd immunity through natural infection causes many deaths and severe illness.'
        },

        // TOPIC 8: Immune disorders (5 questions)
        {
            type: 'tf',
            topic: 'Immune Disorders',
            question: 'Immunocompromised individuals have weakened immune systems and are more susceptible to infections.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Immunocompromised</strong> people have impaired immunity due to disease (HIV/AIDS), medications (chemotherapy, immunosuppressants), or conditions. They\'re more vulnerable to infections that healthy immune systems easily fight.'
        },
        {
            type: 'tf',
            topic: 'Immune Disorders',
            question: 'Autoimmune diseases occur when the immune system attacks the body\'s own healthy cells.',
            correct: true,
            explanation: 'This is <strong>true</strong>. In <strong>autoimmune diseases</strong>, the immune system mistakenly attacks healthy tissues. Examples include Type 1 diabetes (attacks pancreatic cells), rheumatoid arthritis (attacks joints), and lupus (attacks multiple tissues).'
        },
        {
            type: 'tf',
            topic: 'Immune Disorders',
            question: 'HIV/AIDS weakens the immune system by destroying helper T cells.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>HIV</strong> (Human Immunodeficiency Virus) targets and destroys <strong>helper T cells (CD4+)</strong>, progressively weakening immunity. AIDS develops when CD4+ counts drop critically low, causing severe opportunistic infections.'
        },
        {
            type: 'tf',
            topic: 'Immune Disorders',
            question: 'Immunosuppressant drugs are used to treat autoimmune diseases and prevent organ rejection.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Immunosuppressants</strong> deliberately weaken immune responses to treat autoimmune diseases (reducing self-attack) and prevent transplant rejection (preventing attack on donor organ).'
        },
        {
            type: 'tf',
            topic: 'Immune Disorders',
            question: 'Autoimmune diseases can be cured with antibiotics.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Autoimmune diseases <strong>cannot be cured</strong> and don\'t respond to antibiotics (which treat bacteria). Treatment focuses on managing symptoms and suppressing excessive immune response with immunosuppressants.'
        },

        // TOPIC 9: Allergic reactions (5 questions)
        {
            type: 'tf',
            topic: 'Allergies',
            question: 'An allergic reaction is an exaggerated immune response to a normally harmless substance.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Allergies</strong> occur when the immune system overreacts to harmless substances (allergens like pollen, food, or pet dander), treating them as dangerous invaders and causing symptoms.'
        },
        {
            type: 'tf',
            topic: 'Allergies',
            question: 'During an allergic reaction, mast cells release histamine that causes inflammation and symptoms.',
            correct: true,
            explanation: 'This is <strong>true</strong>. When allergens bind to IgE antibodies on <strong>mast cells</strong>, the cells release <strong>histamine</strong> and other chemicals, causing inflammation, mucus production, itching, swelling, and other allergy symptoms.'
        },
        {
            type: 'tf',
            topic: 'Allergies',
            question: 'Anaphylaxis is a mild allergic reaction that causes minor skin irritation.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Anaphylaxis (anaphylactic shock)</strong> is a <strong>severe, life-threatening allergic reaction</strong> causing difficulty breathing, drop in blood pressure, and potential death. It requires immediate epinephrine treatment.'
        },
        {
            type: 'tf',
            topic: 'Allergies',
            question: 'Epinephrine (adrenaline) is the first-line treatment for anaphylaxis.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Epinephrine</strong> (administered via EpiPen or injection) reverses anaphylaxis by constricting blood vessels, relaxing airway muscles, and reducing swelling. It must be given immediately when anaphylaxis occurs.'
        },
        {
            type: 'tf',
            topic: 'Allergies',
            question: 'Antihistamines work by blocking the effects of histamine released during allergic reactions.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Antihistamines</strong> block histamine receptors, reducing allergy symptoms like sneezing, itching, and runny nose. They\'re effective for mild-moderate allergies but cannot treat anaphylaxis (which requires epinephrine).'
        },

        // TOPIC 10: Cancer (5 questions)
        {
            type: 'tf',
            topic: 'Cancer',
            question: 'Cancer results from uncontrolled cell division due to mutations in genes that regulate the cell cycle.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Cancer</strong> develops when mutations in genes (oncogenes, tumor suppressors, DNA repair genes) disrupt normal cell cycle control, causing uncontrolled growth and division.'
        },
        {
            type: 'tf',
            topic: 'Cancer',
            question: 'Benign tumors are cancerous and can spread to other parts of the body.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Benign tumors are NOT cancerous</strong>—they don\'t invade nearby tissue or spread. <strong>Malignant tumors</strong> are cancerous, invading tissues and metastasizing to distant sites.'
        },
        {
            type: 'tf',
            topic: 'Cancer',
            question: 'Metastasis is the spread of cancer cells from the original tumor to other parts of the body.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Metastasis</strong> occurs when cancer cells break away from the primary tumor, travel through blood or lymph, and establish secondary tumors in other organs, making cancer much harder to treat.'
        },
        {
            type: 'tf',
            topic: 'Cancer',
            question: 'Chemotherapy and radiation therapy work by targeting and killing rapidly dividing cells.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Chemotherapy</strong> (drugs) and <strong>radiation therapy</strong> kill rapidly dividing cells. Unfortunately, they also damage healthy fast-growing cells (hair, digestive lining, bone marrow), causing side effects.'
        },
        {
            type: 'tf',
            topic: 'Cancer',
            question: 'Cancer risk can be reduced through lifestyle choices like not smoking, healthy diet, and exercise.',
            correct: true,
            explanation: 'This is <strong>true</strong>. While some cancers have genetic predisposition, many can be prevented through: <strong>avoiding tobacco, maintaining healthy weight, exercising, eating nutritious foods, limiting alcohol, protecting from UV radiation, and getting vaccinated</strong> (HPV, hepatitis B).'
        }
    ]
};
