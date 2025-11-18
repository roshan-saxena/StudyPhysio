// StudyPhysio - Unit 3: Self Defense Checkup 1 Questions
// 50 True/False questions covering 10 topics

const unit3SelfDefenseCheckup1 = {
    'unit3-self-defense-checkup1': [

        // TOPIC 1: Pathogens (5 questions)
        {
            type: 'tf',
            topic: 'Pathogens',
            question: 'Bacteria are single-celled organisms that can be treated with antibiotics.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Bacteria</strong> are prokaryotic single-celled organisms, and bacterial infections can be treated with <strong>antibiotics</strong> that target bacterial cell walls, protein synthesis, or other bacterial-specific processes.'
        },
        {
            type: 'tf',
            topic: 'Pathogens',
            question: 'Viruses can reproduce on their own without needing a host cell.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Viruses cannot reproduce independently</strong>. They must infect host cells and hijack the cell\'s machinery to replicate. This is why antibiotics don\'t work on viruses—they need antiviral medications.'
        },
        {
            type: 'tf',
            topic: 'Pathogens',
            question: 'Fungi can cause infections in humans, such as athlete\'s foot and ringworm.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Fungi</strong> are eukaryotic organisms that can cause various infections in humans, including superficial infections (athlete\'s foot, ringworm) and more serious systemic infections, especially in immunocompromised individuals.'
        },
        {
            type: 'tf',
            topic: 'Pathogens',
            question: 'Parasites live on or in a host organism and benefit at the host\'s expense.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Parasites</strong> depend on host organisms for survival, obtaining nutrients and shelter while causing harm. Examples include protozoans (malaria), helminths (tapeworms), and ectoparasites (lice, ticks).'
        },
        {
            type: 'tf',
            topic: 'Pathogens',
            question: 'A vector is an organism that transmits pathogens from one host to another.',
            correct: true,
            explanation: 'This is <strong>true</strong>. A <strong>vector</strong> is a carrier organism (often an insect like mosquitoes or ticks) that transmits pathogens between hosts. Examples include mosquitoes spreading malaria and ticks spreading Lyme disease.'
        },

        // TOPIC 2: Infections by location (5 questions)
        {
            type: 'tf',
            topic: 'Infection Sites',
            question: 'Meningitis is an infection or inflammation of the membranes covering the brain and spinal cord.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Meningitis</strong> is inflammation of the meninges (protective membranes around the brain and spinal cord). It can be caused by bacteria, viruses, or fungi and is potentially life-threatening.'
        },
        {
            type: 'tf',
            topic: 'Infection Sites',
            question: 'Pneumonia is an infection of the urinary tract.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Pneumonia</strong> is an infection of the <strong>lungs</strong> (specifically the alveoli), not the urinary tract. Urinary tract infections (UTIs) affect the bladder, urethra, or kidneys.'
        },
        {
            type: 'tf',
            topic: 'Infection Sites',
            question: 'Bronchitis is inflammation of the bronchial tubes that carry air to the lungs.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Bronchitis</strong> is inflammation of the bronchi (airways leading to the lungs), causing coughing, mucus production, and breathing difficulty. It can be acute or chronic.'
        },
        {
            type: 'tf',
            topic: 'Infection Sites',
            question: 'A urinary tract infection (UTI) can affect the bladder, urethra, or kidneys.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>UTIs</strong> can occur in any part of the urinary system: urethra (urethritis), bladder (cystitis), or kidneys (pyelonephritis). They\'re more common in women due to shorter urethras.'
        },
        {
            type: 'tf',
            topic: 'Infection Sites',
            question: 'Septicemia (sepsis) is a localized infection that remains in one part of the body.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Septicemia (sepsis)</strong> is a <strong>systemic infection</strong> where bacteria or their toxins spread throughout the bloodstream. It\'s a life-threatening condition requiring immediate treatment.'
        },

        // TOPIC 3: Endemic epidemic pandemic (5 questions)
        {
            type: 'tf',
            topic: 'Outbreak Types',
            question: 'An endemic disease is constantly present in a particular region or population.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Endemic</strong> means a disease is consistently present in a specific geographic area or population at expected levels. Examples include malaria in tropical regions or Lyme disease in certain U.S. areas.'
        },
        {
            type: 'tf',
            topic: 'Outbreak Types',
            question: 'An epidemic is a disease outbreak that occurs on a global scale.',
            correct: false,
            explanation: 'This is <strong>false</strong>. An <strong>epidemic</strong> is a disease outbreak that spreads rapidly and affects many people in a <strong>region or population</strong>, exceeding normal expectations. A <strong>pandemic</strong> is a global outbreak.'
        },
        {
            type: 'tf',
            topic: 'Outbreak Types',
            question: 'A pandemic is an epidemic that has spread across multiple countries or continents.',
            correct: true,
            explanation: 'This is <strong>true</strong>. A <strong>pandemic</strong> is an epidemic that spreads across international boundaries, affecting large numbers of people on multiple continents. COVID-19 and the 1918 flu were pandemics.'
        },
        {
            type: 'tf',
            topic: 'Outbreak Types',
            question: 'The distinction between endemic, epidemic, and pandemic is based only on the severity of the disease.',
            correct: false,
            explanation: 'This is <strong>false</strong>. The distinction is based on <strong>geographic spread and affected population size</strong>, not severity. Endemic is localized, epidemic is regional outbreak, pandemic is global—regardless of how deadly the disease is.'
        },
        {
            type: 'tf',
            topic: 'Outbreak Types',
            question: 'A disease can transition from endemic to epidemic if cases suddenly increase beyond expected levels.',
            correct: true,
            explanation: 'This is <strong>true</strong>. An endemic disease can become <strong>epidemic</strong> if there\'s a sudden surge in cases beyond normal levels. This can happen due to environmental changes, weakened immunity, or pathogen mutations.'
        },

        // TOPIC 4: Latent infections (5 questions)
        {
            type: 'tf',
            topic: 'Latent Infections',
            question: 'Latent infections are those where the pathogen remains inactive in the body for a period of time.',
            correct: true,
            explanation: 'This is <strong>true</strong>. In <strong>latent infections</strong>, the pathogen remains dormant in the body without causing symptoms but can reactivate later. The person carries the pathogen but isn\'t actively sick.'
        },
        {
            type: 'tf',
            topic: 'Latent Infections',
            question: 'Herpes simplex virus (HSV) can establish latent infections that may reactivate causing cold sores.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>HSV</strong> establishes latent infection in nerve cells. The virus can reactivate due to stress, illness, or immune suppression, causing recurrent cold sores or genital herpes outbreaks.'
        },
        {
            type: 'tf',
            topic: 'Latent Infections',
            question: 'During a latent infection, the pathogen is completely eliminated from the body.',
            correct: false,
            explanation: 'This is <strong>false</strong>. During latency, the pathogen <strong>remains in the body</strong> but is dormant/inactive. It hasn\'t been eliminated and can potentially reactivate. True elimination would mean the infection is cured.'
        },
        {
            type: 'tf',
            topic: 'Latent Infections',
            question: 'Chickenpox and shingles are caused by the same virus that can remain latent in nerve cells.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Varicella-zoster virus</strong> causes chickenpox in initial infection, then becomes latent in nerve cells. It can reactivate years later as shingles, causing painful rash along nerve pathways.'
        },
        {
            type: 'tf',
            topic: 'Latent Infections',
            question: 'A person with a latent infection cannot transmit the pathogen to others.',
            correct: false,
            explanation: 'This is <strong>false</strong>. While <strong>transmission is less likely</strong> during latency, some latent infections (like HIV) can still be transmitted. Additionally, reactivation produces active infection that is definitely contagious.'
        },

        // TOPIC 5: Sexually transmitted infections (5 questions)
        {
            type: 'tf',
            topic: 'STIs',
            question: 'STIs (sexually transmitted infections) can be caused by bacteria, viruses, and parasites.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>STIs</strong> can be bacterial (chlamydia, gonorrhea, syphilis), viral (HIV, herpes, HPV, hepatitis B), or parasitic (trichomoniasis). Treatment depends on the type of pathogen.'
        },
        {
            type: 'tf',
            topic: 'STIs',
            question: 'All STIs can be cured with antibiotics.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Only <strong>bacterial STIs</strong> can be cured with antibiotics. <strong>Viral STIs</strong> (HIV, herpes, HPV) cannot be cured, though symptoms can be managed with antiviral medications.'
        },
        {
            type: 'tf',
            topic: 'STIs',
            question: 'Many STIs can be asymptomatic, meaning infected people may not show symptoms.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Many STIs are <strong>asymptomatic</strong>, especially in early stages. People can be infected and transmit the disease without knowing. Regular testing is important for sexually active individuals.'
        },
        {
            type: 'tf',
            topic: 'STIs',
            question: 'HPV (human papillomavirus) infection can lead to cervical cancer.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Certain high-risk strains of <strong>HPV</strong> can cause cervical cancer and other cancers. HPV vaccines protect against these cancer-causing strains and are recommended for adolescents.'
        },
        {
            type: 'tf',
            topic: 'STIs',
            question: 'STIs can only be transmitted through sexual intercourse.',
            correct: false,
            explanation: 'This is <strong>false</strong>. While primarily sexually transmitted, some STIs can spread through <strong>other routes</strong>: blood transfusions, shared needles, mother to child during birth/breastfeeding, or close skin contact (like herpes).'
        },

        // TOPIC 6: Lymphatic system (5 questions)
        {
            type: 'tf',
            topic: 'Lymphatic System',
            question: 'The lymphatic system helps defend the body against infection and returns excess fluid to the bloodstream.',
            correct: true,
            explanation: 'This is <strong>true</strong>. The <strong>lymphatic system</strong> has two main functions: returning excess interstitial fluid (lymph) to blood circulation and housing immune cells (lymphocytes) that fight infection.'
        },
        {
            type: 'tf',
            topic: 'Lymphatic System',
            question: 'Lymph is a fluid that circulates through lymphatic vessels and contains white blood cells.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Lymph</strong> is clear fluid derived from blood plasma that leaks into tissues. It contains lymphocytes (white blood cells) and flows through lymphatic vessels back to the bloodstream.'
        },
        {
            type: 'tf',
            topic: 'Lymphatic System',
            question: 'The lymphatic system has a pump like the heart to circulate lymph.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Unlike blood circulation, the lymphatic system <strong>has no central pump</strong>. Lymph moves through muscle contractions, breathing movements, and one-way valves in lymphatic vessels.'
        },
        {
            type: 'tf',
            topic: 'Lymphatic System',
            question: 'Lymph nodes filter lymph and contain immune cells that can trap and destroy pathogens.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Lymph nodes</strong> filter lymph, trapping bacteria, viruses, and abnormal cells. They contain lymphocytes and macrophages that destroy pathogens. Swollen nodes indicate active immune response.'
        },
        {
            type: 'tf',
            topic: 'Lymphatic System',
            question: 'Lymphatic circulation is separate from blood circulation and the two never connect.',
            correct: false,
            explanation: 'This is <strong>false</strong>. While separate, the lymphatic and blood circulatory systems <strong>do connect</strong>. Lymph returns to blood circulation via the thoracic duct and right lymphatic duct, which empty into subclavian veins.'
        },

        // TOPIC 7: Blood cells (5 questions)
        {
            type: 'tf',
            topic: 'Blood Cells',
            question: 'Red blood cells (erythrocytes) contain hemoglobin that carries oxygen.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>RBCs</strong> contain hemoglobin protein that binds oxygen in the lungs and delivers it to tissues. Mature RBCs lack a nucleus, maximizing space for hemoglobin.'
        },
        {
            type: 'tf',
            topic: 'Blood Cells',
            question: 'White blood cells (leukocytes) are primarily responsible for fighting infections.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>WBCs (leukocytes)</strong> are the body\'s defense against infection and disease. Different types include neutrophils (bacteria fighters), lymphocytes (adaptive immunity), and eosinophils (parasites/allergies).'
        },
        {
            type: 'tf',
            topic: 'Blood Cells',
            question: 'Platelets (thrombocytes) are responsible for blood clotting.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Platelets</strong> are cell fragments that initiate blood clotting (coagulation) at injury sites. They clump together and release chemicals that form clots to stop bleeding.'
        },
        {
            type: 'tf',
            topic: 'Blood Cells',
            question: 'All blood cells are produced in the lymph nodes.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Blood cells are produced in <strong>bone marrow</strong>, not lymph nodes. Red bone marrow contains stem cells that differentiate into RBCs, WBCs, and platelets through hematopoiesis.'
        },
        {
            type: 'tf',
            topic: 'Blood Cells',
            question: 'Plasma is the liquid component of blood that carries cells, nutrients, and wastes.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Plasma</strong> is the straw-colored liquid (about 55% of blood) that suspends blood cells and transports nutrients, hormones, proteins, gases, and waste products throughout the body.'
        },

        // TOPIC 8: Blood disorders (5 questions)
        {
            type: 'tf',
            topic: 'Blood Disorders',
            question: 'Anemia is a condition where there is a deficiency in red blood cells or hemoglobin.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Anemia</strong> means insufficient RBCs or hemoglobin to carry adequate oxygen, causing fatigue, weakness, and pale skin. Causes include iron deficiency, blood loss, or genetic conditions.'
        },
        {
            type: 'tf',
            topic: 'Blood Disorders',
            question: 'Iron deficiency anemia results from inadequate iron needed to produce hemoglobin.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Iron deficiency anemia</strong> is the most common type, occurring when the body lacks sufficient iron to make hemoglobin. It can result from poor diet, blood loss, or absorption problems.'
        },
        {
            type: 'tf',
            topic: 'Blood Disorders',
            question: 'Sickle cell anemia causes red blood cells to become rigid and crescent-shaped.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Sickle cell anemia</strong> is a genetic disorder causing RBCs to become rigid, sticky, and sickle-shaped. These cells block blood flow, break down early, and cause pain crises and organ damage.'
        },
        {
            type: 'tf',
            topic: 'Blood Disorders',
            question: 'Leukemia is a cancer of the blood characterized by overproduction of abnormal white blood cells.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Leukemia</strong> is cancer of blood-forming tissues causing production of abnormal WBCs that don\'t function properly. These crowd out normal blood cells, impairing immunity and causing anemia.'
        },
        {
            type: 'tf',
            topic: 'Blood Disorders',
            question: 'All types of anemia are caused by iron deficiency.',
            correct: false,
            explanation: 'This is <strong>false</strong>. While iron deficiency is common, anemia has many causes: <strong>vitamin B12 or folate deficiency, chronic disease, blood loss, genetic disorders</strong> (sickle cell, thalassemia), or bone marrow problems.'
        },

        // TOPIC 9: Reading a CBC (5 questions)
        {
            type: 'tf',
            topic: 'Reading CBC',
            question: 'A CBC (Complete Blood Count) measures the numbers of different types of blood cells.',
            correct: true,
            explanation: 'This is <strong>true</strong>. A <strong>CBC</strong> measures RBCs, WBCs, platelets, hemoglobin, hematocrit, and other parameters. It helps diagnose conditions like anemia, infections, immune disorders, and blood cancers.'
        },
        {
            type: 'tf',
            topic: 'Reading CBC',
            question: 'Elevated white blood cell count typically indicates an infection or inflammation.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Elevated WBC count (leukocytosis)</strong> usually indicates infection, inflammation, stress, or leukemia. The body produces more WBCs to fight pathogens or in response to tissue damage.'
        },
        {
            type: 'tf',
            topic: 'Reading CBC',
            question: 'Low red blood cell count and low hemoglobin levels suggest anemia.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Low RBC count and hemoglobin</strong> indicate anemia—insufficient oxygen-carrying capacity. This causes fatigue and weakness. Further tests determine the specific type and cause of anemia.'
        },
        {
            type: 'tf',
            topic: 'Reading CBC',
            question: 'A CBC with differential breaks down the percentage of different types of white blood cells.',
            correct: true,
            explanation: 'This is <strong>true</strong>. A <strong>CBC with differential</strong> shows percentages of WBC types: neutrophils, lymphocytes, monocytes, eosinophils, and basophils. This pattern helps diagnose specific infections or immune conditions.'
        },
        {
            type: 'tf',
            topic: 'Reading CBC',
            question: 'Normal CBC values are the same for everyone regardless of age or sex.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Normal CBC ranges vary</strong> by age, sex, and sometimes altitude or pregnancy status. For example, men typically have higher RBC counts and hemoglobin than women.'
        },

        // TOPIC 10: CBC/Differential (5 questions)
        {
            type: 'tf',
            topic: 'CBC Differential',
            question: 'Neutrophils are the most abundant type of white blood cell and are first responders to bacterial infections.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Neutrophils</strong> comprise 50-70% of WBCs and are first responders to infection. They phagocytose (engulf) bacteria and release antimicrobial chemicals. Elevated neutrophils suggest bacterial infection.'
        },
        {
            type: 'tf',
            topic: 'CBC Differential',
            question: 'Lymphocytes include B cells and T cells that are important for adaptive immunity.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Lymphocytes</strong> (20-40% of WBCs) include B cells (produce antibodies) and T cells (cell-mediated immunity). Elevated lymphocytes often indicate viral infections or immune disorders.'
        },
        {
            type: 'tf',
            topic: 'CBC Differential',
            question: 'Eosinophils increase in number primarily during bacterial infections.',
            correct: false,
            explanation: 'This is <strong>false</strong>. <strong>Eosinophils</strong> increase primarily during <strong>parasitic infections and allergic reactions</strong>, not bacterial infections. They release chemicals that damage parasites and moderate allergic responses.'
        },
        {
            type: 'tf',
            topic: 'CBC Differential',
            question: 'A shift in the differential can help doctors determine whether an infection is bacterial or viral.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Elevated neutrophils</strong> suggest bacterial infection, while <strong>elevated lymphocytes</strong> suggest viral infection. The pattern in the differential helps guide diagnosis and treatment decisions.'
        },
        {
            type: 'tf',
            topic: 'CBC Differential',
            question: 'Monocytes differentiate into macrophages that engulf pathogens and dead cells.',
            correct: true,
            explanation: 'This is <strong>true</strong>. <strong>Monocytes</strong> circulate in blood and migrate into tissues where they differentiate into <strong>macrophages</strong>—large phagocytic cells that engulf pathogens, dead cells, and debris.'
        }
    ],

};
