// Self Defense Checkup 1 - Complete Question Bank
// 50 Questions Total: 10 Topics × 5 Questions per Topic
// Distribution: 25 True / 25 False

const unit3SelfDefenseCheckup1 = {
    'unit3-self-defense-checkup1': [
        // ==========================================
        // TOPIC 1: Pathogens (5 questions)
        // ==========================================
        {
            type: 'tf',
            topic: 'Pathogens',
            question: 'Although bacteria and fungi can both have cell walls, an antibiotic that targets bacterial cell-wall material is not automatically effective against a fungal cell wall.',
            correct: true,
            explanation: 'This is true. Sharing the general feature of a cell wall does not mean the walls have the same composition or respond to the same treatment. Antibiotics directed at bacterial structures do not therefore become antifungal drugs. This requires distinguishing a broad structural similarity from the specific biological target of a treatment.'
        },
        {
            type: 'tf',
            topic: 'Pathogens',
            question: 'A vector that carries the malaria parasite will eventually die from the infection because the pathogen will damage its body systems over time.',
            correct: false,
            explanation: 'This is false. This is a tricky question because we know infections cause disease in humans, so it seems logical a vector would also get sick. However, vectors like mosquitoes have evolved alongside their pathogens and the pathogen replicates in the mosquito without causing illness or death. The mosquito remains healthy enough to transmit the parasite to humans. If the pathogen killed the vector, it would be a poor survival strategy for the pathogen itself.'
        },
        {
            type: 'tf',
            topic: 'Pathogens',
            question: 'Viruses are smaller than bacteria, so if an antibiotic could squeeze through a bacterial cell wall, it would definitely be able to penetrate and kill a virus.',
            correct: false,
            explanation: 'This is false—this is a tricky logic trap. Size alone does not determine whether something can be killed by antibiotics. The real issue is that viruses are not cells at all. They\'re just genetic material (DNA or RNA) wrapped in a protein coat. Antibiotics are designed to attack living cellular structures like cell walls, ribosomes, and metabolic pathways. Viruses don\'t have these structures to attack. It\'s not about size; it\'s about the fundamental difference between a cell (bacteria) and a non-cellular infectious agent (virus).'
        },
        {
            type: 'tf',
            topic: 'Pathogens',
            question: 'Parasites include both helminths like tapeworms and protozoans like malaria parasites, even though they are very different in size and complexity.',
            correct: true,
            explanation: 'This is true. The category "parasites" is broad and includes helminths (multicellular worms) that can be seen with a microscope or sometimes with the naked eye, AND protozoans (single-celled organisms) like the parasite causing malaria. Despite their huge differences in size and complexity, they\'re grouped together as parasites because they all live on or inside a host and feed at the host\'s expense.'
        },
        {
            type: 'tf',
            topic: 'Pathogens',
            question: 'Bacteria have cell walls made of peptidoglycan, which is why antibiotics can target and destroy bacteria, but since viruses also use peptidoglycan in their structure, some antibiotics might work against viruses too.',
            correct: false,
            explanation: 'This is false. The trick here is the second part. While it\'s correct that bacteria have peptidoglycan cell walls that antibiotics target, viruses do not have peptidoglycan or any cell wall at all. Viruses consist only of genetic material surrounded by a protein coat—they\'re not even cells. There is no peptidoglycan for antibiotics to attack in viruses, which is why antibiotics are completely useless against viral infections no matter what type of antibiotic is used.'
        },

        // ==========================================
        // TOPIC 2: Infection Sites (5 questions)
        // ==========================================
        {
            type: 'tf',
            topic: 'Infection Sites',
            question: 'Pneumonia and bronchitis both affect the lungs, but pneumonia is more dangerous because it affects the alveoli where gas exchange occurs, while bronchitis only affects the airways.',
            correct: true,
            explanation: 'This is true, but it requires understanding why location matters for severity. Pneumonia infects the alveoli (tiny air sacs where oxygen enters the blood), causing fluid buildup that prevents oxygen from transferring into your bloodstream. Bronchitis infects the bronchi (the tubes that carry air down to the lungs), which causes coughing and mucus but usually doesn\'t prevent oxygen transfer. This anatomical difference in location directly explains why pneumonia is more life-threatening.'
        },
        {
            type: 'tf',
            topic: 'Infection Sites',
            question: 'Meningitis can be caused by bacteria, viruses, or fungi, but bacterial meningitis is the most contagious form and spreads faster than viral meningitis.',
            correct: false,
            explanation: 'This is false—this is tricky because bacterial meningitis IS more serious and dangerous, which might make you think it\'s also more contagious. However, contagiousness and severity are different things. Viral meningitis is actually more easily transmitted between people than bacterial meningitis (which requires close contact). Bacterial meningitis is deadlier and progresses faster, but not necessarily more contagious. Don\'t confuse "more dangerous" with "more contagious."'
        },
        {
            type: 'tf',
            topic: 'Infection Sites',
            question: 'A urinary tract infection can begin in the urethra or bladder, and if left untreated, it can travel upward to infect the kidneys, making early treatment important.',
            correct: true,
            explanation: 'This is true. UTIs can ascend from lower to upper parts of the urinary system. An infection that starts in the bladder can travel up the ureters to reach the kidneys. Kidney infections are much more serious and can cause permanent kidney damage and sepsis. This is why untreated bladder infections are dangerous—they can progress to more serious infections.'
        },
        {
            type: 'tf',
            topic: 'Infection Sites',
            question: 'Septicemia occurs when bacteria enter the bloodstream, and it is therefore always more serious than a localized infection like meningitis because it affects the whole body.',
            correct: false,
            explanation: 'This is false—this is tricky because it mixes accurate information with a wrong conclusion. Yes, septicemia affects the whole body systemically. However, meningitis is actually extremely serious even though it\'s localized to the brain and spinal cord membranes. A localized brain infection can be deadlier than some cases of septicemia because the brain is so vital. Severity depends on the location AND the pathogen, not just whether it\'s systemic or localized.'
        },
        {
            type: 'tf',
            topic: 'Infection Sites',
            question: 'Bronchitis and pneumonia both cause cough and affect the respiratory system, so they produce identical symptoms and require the same treatment approach.',
            correct: false,
            explanation: 'This is false. This is tricky because both diseases are respiratory infections and both cause cough. However, they affect different parts of the respiratory system and cause different patterns of symptoms. Bronchitis causes persistent cough with mucus but usually preserves normal oxygen levels. Pneumonia causes cough, fever, chest pain, and difficulty breathing due to fluid in the alveoli. This means pneumonia requires more aggressive treatment while mild bronchitis might only need supportive care.'
        },

        // ==========================================
        // TOPIC 3: Outbreak Types (5 questions)
        // ==========================================
        {
            type: 'tf',
            topic: 'Outbreak Types',
            question: 'An endemic disease is one that is constantly present in a particular population or region at a relatively stable rate, such as malaria in certain tropical areas.',
            correct: true,
            explanation: 'This is true. Endemic means predictable, consistent presence in a specific geographic area or population. The disease occurs at expected baseline levels continuously. Examples: malaria in sub-Saharan Africa, Lyme disease in northeastern US. "Endemic" describes pattern and geography, not severity or contagiousness.'
        },
        {
            type: 'tf',
            topic: 'Outbreak Types',
            question: 'An epidemic occurs when disease cases exceed normally expected levels in a region, while a pandemic is an epidemic that has spread across multiple countries or continents.',
            correct: true,
            explanation: 'This is true. Epidemic means outbreak beyond expected levels in a specific area—a rapid increase affecting many people. Pandemic means global epidemic with widespread geographic distribution across countries/continents. COVID-19 transitioned from epidemic (China) to pandemic (worldwide). Scale and geography distinguish them.'
        },
        {
            type: 'tf',
            topic: 'Outbreak Types',
            question: 'The distinction between endemic, epidemic, and pandemic is based solely on how deadly the disease is, with pandemics always being more lethal than epidemics.',
            correct: false,
            explanation: 'This is false. These terms describe geographic distribution and case patterns, NOT lethality. A mild disease can be pandemic (H1N1 flu 2009 was relatively mild but global). A severe disease can be a limited epidemic (Ebola was very deadly but geographically contained). Virulence and spread pattern are independent characteristics.'
        },
        {
            type: 'tf',
            topic: 'Outbreak Types',
            question: 'A disease cannot be endemic and epidemic simultaneously in the same location.',
            correct: false,
            explanation: 'This is false. Endemic diseases CAN have epidemic outbreaks. A disease with usual baseline presence (endemic) can experience sudden spikes above expected levels (epidemic). Example: Dengue fever is endemic in many tropical regions but can have epidemic outbreaks when cases surge dramatically. The baseline (endemic) and spike (epidemic) can coexist conceptually.'
        },
        {
            type: 'tf',
            topic: 'Outbreak Types',
            question: 'Endemic, epidemic, and pandemic classifications describe only how deadly a disease is, so they do not affect the geographic scale of public-health coordination or resource allocation.',
            correct: false,
            explanation: 'This is false. These classifications describe patterns and scale of disease occurrence, not simply severity. An endemic condition requires sustained management, an epidemic requires a concentrated response to cases above expectation, and a pandemic requires broad coordination across regions or countries. The misconception substitutes death rate for distribution and scope.'
        },

        // ==========================================
        // TOPIC 4: Latent Infections (5 questions)
        // ==========================================
        {
            type: 'tf',
            topic: 'Latent Infections',
            question: 'Latent infections occur when a pathogen remains dormant in the body without causing active symptoms, but can reactivate later under certain conditions like stress or weakened immunity.',
            correct: true,
            explanation: 'This is true. Latent infections are "hidden" infections where the pathogen persists in body cells without active replication or symptoms. The person carries the pathogen but isn\'t sick. Triggers like stress, illness, aging, or weakened immunity can reactivate dormant pathogens, causing recurrent disease. Classic examples: herpes viruses, chickenpox/shingles.'
        },
        {
            type: 'tf',
            topic: 'Latent Infections',
            question: 'Herpes simplex virus (HSV) can establish latent infection in nerve cells, which is why cold sores or genital herpes can recur even after the initial infection has healed.',
            correct: true,
            explanation: 'This is true. HSV latency explains recurrence. After initial infection, HSV travels along nerves to nerve cell bodies where it becomes dormant. The immune system can\'t reach it there. Stress, illness, sun exposure, or immune suppression can trigger reactivation, causing virus to travel back down nerves to cause new outbreaks at the original site.'
        },
        {
            type: 'tf',
            topic: 'Latent Infections',
            question: 'During a latent infection, the pathogen is completely eliminated from the body and only returns if the person is re-exposed to the same pathogen from an external source.',
            correct: false,
            explanation: 'This is false. In latent infections, the pathogen NEVER leaves the body. It remains dormant inside host cells indefinitely. Recurrence comes from reactivation of the existing internal infection, not new external exposure. This is why people with herpes have recurrent outbreaks without re-exposure—the virus is always present internally.'
        },
        {
            type: 'tf',
            topic: 'Latent Infections',
            question: 'The varicella-zoster virus that causes chickenpox in children can remain latent for decades and reactivate later in life to cause shingles (herpes zoster).',
            correct: true,
            explanation: 'This is true. Chickenpox and shingles are caused by the same virus. After chickenpox resolves (usually in childhood), varicella-zoster virus becomes latent in nerve root ganglia. Decades later, typically in older adults or immunocompromised individuals, it can reactivate and travel down sensory nerves, causing painful shingles rash in a specific pattern.'
        },
        {
            type: 'tf',
            topic: 'Latent Infections',
            question: 'Latent infections are highly contagious even when no symptoms are present, making them more dangerous than active infections.',
            correct: false,
            explanation: 'This is false. Latent infections are generally NOT contagious or much less contagious than active infections because the pathogen isn\'t actively replicating or being shed. Active infections produce and release pathogens, making them contagious. While some latent infections can occasionally shed virus asymptomatically, the main transmission risk is during active infection/reactivation.'
        },

        // ==========================================
        // TOPIC 5: STIs (5 questions)
        // ==========================================
        {
            type: 'tf',
            topic: 'STIs',
            question: 'Many sexually transmitted infections are asymptomatic, meaning infected individuals may not show symptoms but can still transmit the infection to partners.',
            correct: true,
            explanation: 'This is true. Asymptomatic STIs are a major public health challenge. Many people with chlamydia, gonorrhea, or other STIs have no symptoms but are contagious. This allows infections to spread unknowingly and can lead to serious complications before diagnosis. Regular STI screening is essential for sexually active individuals.'
        },
        {
            type: 'tf',
            topic: 'STIs',
            question: 'All sexually transmitted infections can be cured with antibiotics if caught early enough.',
            correct: false,
            explanation: 'This is false. Only bacterial STIs (chlamydia, gonorrhea, syphilis) can be cured with antibiotics. Viral STIs cannot be cured—HIV, herpes, and HPV are lifelong infections. Antivirals can manage symptoms and reduce transmission but don\'t eliminate the virus. This distinction between bacterial (curable) and viral (manageable but incurable) is crucial.'
        },
        {
            type: 'tf',
            topic: 'STIs',
            question: 'Human papillomavirus (HPV) infection is concerning because certain types can cause cervical cancer and other cancers over time.',
            correct: true,
            explanation: 'This is true. High-risk HPV types cause cancer. Persistent infection with certain strains can lead to cervical cancer and also cancers of other areas. The virus disrupts normal cell regulation. HPV vaccines protect against cancer-causing strains, which is why vaccination is recommended for adolescents.'
        },
        {
            type: 'tf',
            topic: 'STIs',
            question: 'STIs can only be transmitted through sexual intercourse and cannot be spread through other forms of contact or from mother to child.',
            correct: false,
            explanation: 'This is false. While primarily sexually transmitted, STIs have other transmission routes. Some spread through blood (HIV, hepatitis B), mother-to-child during pregnancy/birth/breastfeeding (HIV, syphilis, herpes), or close skin contact (herpes, HPV). Shared needles transmit HIV and hepatitis. Understanding all transmission routes is important for prevention.'
        },
        {
            type: 'tf',
            topic: 'STIs',
            question: 'Untreated sexually transmitted infections in women can lead to serious reproductive complications including chronic pain and infertility.',
            correct: true,
            explanation: 'This is true. Untreated bacterial STIs cause serious complications (especially chlamydia and gonorrhea). Infection ascends from cervix to uterus, fallopian tubes, and ovaries, causing inflammation and scarring. This damage can block fallopian tubes, leading to infertility or ectopic pregnancy. Chronic pain can persist even after treatment. Prevention through screening and treatment is crucial.'
        },

        // ==========================================
        // TOPIC 6: Lymphatic System (5 questions)
        // ==========================================
        {
            type: 'tf',
            topic: 'Lymphatic System',
            question: 'The lymphatic system returns excess fluid from tissues back to the bloodstream and plays a crucial role in immune defense by filtering lymph through lymph nodes.',
            correct: true,
            explanation: 'This is true. The lymphatic system has two main functions: (1) fluid balance—returning excess interstitial fluid (lymph) leaked from capillaries back to blood circulation, and (2) immune defense—lymph nodes contain immune cells that filter pathogens and abnormal cells from lymph before it returns to blood.'
        },
        {
            type: 'tf',
            topic: 'Lymphatic System',
            question: 'Lymph is a clear fluid that contains white blood cells, particularly lymphocytes, and circulates through lymphatic vessels separate from blood vessels.',
            correct: true,
            explanation: 'This is true. Lymph is tissue fluid rich in lymphocytes. It\'s derived from blood plasma that leaks into tissues, picks up waste products and pathogens, then drains into lymphatic vessels. Though separate from blood vessels, lymphatic vessels eventually return lymph to the bloodstream via the thoracic duct.'
        },
        {
            type: 'tf',
            topic: 'Lymphatic System',
            question: 'The lymphatic system has a central pump like the heart that actively circulates lymph throughout the body.',
            correct: false,
            explanation: 'This is false. Unlike blood circulation with the heart as a pump, lymph has no dedicated pump. Lymph moves through: (1) skeletal muscle contractions squeezing vessels, (2) breathing movements creating pressure changes, (3) smooth muscle in lymphatic vessel walls, and (4) one-way valves preventing backflow. This is why movement/exercise helps lymph circulation.'
        },
        {
            type: 'tf',
            topic: 'Lymphatic System',
            question: 'Swollen lymph nodes during an infection indicate that the lymph nodes are diseased and failing to function properly.',
            correct: false,
            explanation: 'This is false. Swollen lymph nodes usually indicate proper immune function, not failure. When fighting infection, lymph nodes trap pathogens and immune cells proliferate to combat the infection. This increases lymph node size and causes tenderness. Swelling shows the immune system is actively responding. Persistent or painless swelling might indicate other problems.'
        },
        {
            type: 'tf',
            topic: 'Lymphatic System',
            question: 'Lymphatic circulation and blood circulation are connected, with lymph eventually draining back into the bloodstream through ducts that empty into large veins near the heart.',
            correct: true,
            explanation: 'This is true. Though lymphatic and blood systems are separate, they do connect. Lymph from throughout the body collects in the thoracic duct (left side) and right lymphatic duct (right upper body), which empty into the subclavian veins near the heart. This returns filtered fluid to blood circulation, completing the cycle of fluid movement through the body.'
        },

        // ==========================================
        // TOPIC 7: Blood Cells (5 questions)
        // ==========================================
        {
            type: 'tf',
            topic: 'Blood Cells',
            question: 'Red blood cells (erythrocytes) contain hemoglobin protein that binds oxygen in the lungs and releases it to body tissues.',
            correct: true,
            explanation: 'This is true. RBCs are specialized oxygen carriers. Hemoglobin (iron-containing protein) binds oxygen in high-oxygen environments (lungs) and releases it in low-oxygen environments (tissues). Mature RBCs lack nuclei, maximizing space for hemoglobin. Each RBC contains millions of hemoglobin molecules, allowing efficient oxygen transport throughout the body.'
        },
        {
            type: 'tf',
            topic: 'Blood Cells',
            question: 'White blood cells (leukocytes) are primarily responsible for fighting infections and include several different types such as neutrophils, lymphocytes, and eosinophils.',
            correct: true,
            explanation: 'This is true. WBCs are the immune system\'s cellular defenders with different specialized roles: Neutrophils attack bacteria through phagocytosis; Lymphocytes (B cells and T cells) provide adaptive immunity; Eosinophils fight parasites and respond to allergens. Each type addresses specific threats.'
        },
        {
            type: 'tf',
            topic: 'Blood Cells',
            question: 'Platelets (thrombocytes) are complete cells responsible for initiating blood clotting at sites of blood vessel injury.',
            correct: false,
            explanation: 'This is false regarding "complete cells." Platelets are cell fragments, not whole cells—they\'re pieces of megakaryocytes (large bone marrow cells). However, they DO initiate clotting: platelets stick to damaged vessel walls, release chemical signals, clump together, and trigger the coagulation cascade forming blood clots to stop bleeding.'
        },
        {
            type: 'tf',
            topic: 'Blood Cells',
            question: 'All blood cells are produced in the bone marrow through a process called hematopoiesis.',
            correct: true,
            explanation: 'This is true. Bone marrow is the blood cell factory. Hematopoietic stem cells in red bone marrow differentiate into all blood cell types: erythrocytes (RBCs), leukocytes (WBCs of all types), and thrombocytes (platelets). This continuous production replaces aged or damaged blood cells. Bone marrow disorders disrupt blood cell production.'
        },
        {
            type: 'tf',
            topic: 'Blood Cells',
            question: 'Plasma makes up the solid portion of blood and contains the blood cells, while the liquid portion is called serum.',
            correct: false,
            explanation: 'This is false—it\'s reversed! Plasma is the liquid portion of blood (~55% of volume) that carries cells, nutrients, hormones, proteins, and waste. Serum is plasma minus clotting factors (what remains after blood clots). The cellular components (RBCs, WBCs, platelets) make up about 45% of blood volume and are suspended in plasma.'
        },

        // ==========================================
        // TOPIC 8: Blood Disorders (5 questions)
        // ==========================================
        {
            type: 'tf',
            topic: 'Blood Disorders',
            question: 'Anemia is a condition characterized by insufficient red blood cells or hemoglobin, resulting in reduced oxygen-carrying capacity of the blood.',
            correct: true,
            explanation: 'This is true. Anemia means inadequate oxygen delivery due to low RBC count, low hemoglobin, or dysfunctional hemoglobin. This causes fatigue, weakness, pale skin, shortness of breath, and dizziness. Causes include iron deficiency, vitamin deficiency, blood loss, chronic disease, genetic disorders, or bone marrow problems.'
        },
        {
            type: 'tf',
            topic: 'Blood Disorders',
            question: 'Iron deficiency anemia occurs when the body lacks sufficient iron to produce adequate hemoglobin, and is the most common type of anemia worldwide.',
            correct: true,
            explanation: 'This is true. Iron deficiency anemia is the most prevalent anemia globally. Iron is essential for hemoglobin synthesis. Causes include inadequate dietary iron, poor absorption, blood loss (menstruation, GI bleeding), or increased needs (pregnancy, growth). Treatment involves iron supplementation and addressing underlying causes like bleeding.'
        },
        {
            type: 'tf',
            topic: 'Blood Disorders',
            question: 'In sickle cell anemia, the altered red-cell shape affects appearance and lifespan but does not obstruct small vessels; painful crises result only from having fewer red blood cells.',
            correct: false,
            explanation: 'This is false. Sickled cells can become rigid and obstruct small vessels, producing vaso-occlusive pain and tissue injury in addition to breaking down early and contributing to anemia. The misconception separates cell shape from blood flow and reduces a multi-mechanism disorder to low cell count alone.'
        },
        {
            type: 'tf',
            topic: 'Blood Disorders',
            question: 'All types of anemia have the same cause and are treated with iron supplements.',
            correct: false,
            explanation: 'This is false. Anemia has many different causes requiring different treatments. Iron deficiency needs iron supplements. Vitamin B12 deficiency needs B12 injections. Sickle cell requires pain management, transfusions, and possibly medications. Anemia from kidney disease needs erythropoietin. Hemolytic anemia may need immunosuppressants. Treatment must match the underlying cause.'
        },
        {
            type: 'tf',
            topic: 'Blood Disorders',
            question: 'Leukemia and lymphoma are both cancers affecting white blood cells, with leukemia typically involving bone marrow and blood while lymphoma primarily affects lymph nodes.',
            correct: true,
            explanation: 'This is true. Both are cancers of white blood cells with different locations. Leukemia (liquid cancer) involves abnormal WBC proliferation in bone marrow and blood. Lymphoma (solid cancer) involves abnormal lymphocyte proliferation in lymph nodes and other lymphoid tissues. Both cause abnormal WBC proliferation and impaired immunity, but origination and presentation patterns differ.'
        },

        // ==========================================
        // TOPIC 9: Reading a CBC (5 questions)
        // ==========================================
        {
            type: 'tf',
            topic: 'Reading a CBC',
            question: 'A Complete Blood Count (CBC) measures the numbers and characteristics of red blood cells, white blood cells, and platelets, providing crucial diagnostic information.',
            correct: true,
            explanation: 'This is true. A CBC is a fundamental diagnostic test measuring: RBC count, hemoglobin, hematocrit, WBC count, platelet count, and cell indices (size, shape). It helps diagnose anemia, infections, immune disorders, blood cancers, clotting problems, and monitor treatment effects. It\'s one of the most commonly ordered lab tests.'
        },
        {
            type: 'tf',
            topic: 'Reading a CBC',
            question: 'An elevated white blood cell count always indicates a bacterial infection requiring immediate antibiotic treatment.',
            correct: false,
            explanation: 'This is false. While elevated WBC often suggests infection, it has many causes: viral infections, inflammation, stress, exercise, pregnancy, medications, smoking, or leukemia. Some bacterial infections paradoxically lower WBC count. Diagnosis requires clinical context, symptoms, and often a differential to see which WBC types are elevated. Treatment depends on the underlying cause.'
        },
        {
            type: 'tf',
            topic: 'Reading a CBC',
            question: 'Low hemoglobin and low red blood cell count on a CBC indicate anemia and warrant further testing to determine the specific type and cause.',
            correct: true,
            explanation: 'This is true. Low RBC/hemoglobin confirms anemia but doesn\'t reveal the cause. Further tests needed include: iron studies, vitamin B12/folate levels, reticulocyte count, blood smear examination, hemolysis markers, and sometimes bone marrow biopsy. The CBC identifies anemia; additional tests determine why and guide treatment.'
        },
        {
            type: 'tf',
            topic: 'Reading a CBC',
            question: 'A CBC with differential provides the same information as a standard CBC and is therefore unnecessary.',
            correct: false,
            explanation: 'This is false. The differential adds crucial information. A standard CBC gives total WBC count. A CBC with differential breaks down WBC types: neutrophils, lymphocytes, monocytes, eosinophils, basophils (as percentages and absolute numbers). This pattern helps distinguish bacterial infections (high neutrophils) from viral (high lymphocytes), parasites (high eosinophils), or blood cancers (abnormal differentials).'
        },
        {
            type: 'tf',
            topic: 'Reading a CBC',
            question: 'Normal CBC values are identical for all people regardless of age, sex, altitude, or pregnancy status.',
            correct: false,
            explanation: 'This is false. Normal ranges vary significantly. Males typically have higher RBC counts and hemoglobin than females. Children have different ranges that change with age. People at high altitude have elevated RBC counts (adaptation to low oxygen). Pregnancy causes physiological anemia (dilutional). Smoking increases RBC count. Labs provide reference ranges adjusted for these variables.'
        },

        // ==========================================
        // TOPIC 10: CBC/Differential (5 questions)
        // ==========================================
        {
            type: 'tf',
            topic: 'CBC/Differential',
            question: 'Neutrophils are the most abundant type of white blood cell and are particularly important for fighting bacterial infections through phagocytosis.',
            correct: true,
            explanation: 'This is true. Neutrophils comprise 50-70% of WBCs and are first responders to bacterial invasion. They perform phagocytosis (engulfing and digesting bacteria), release antimicrobial chemicals, and form pus at infection sites. Elevated neutrophils typically indicate bacterial infection. Severely low neutrophils causes dangerous susceptibility to bacterial infections.'
        },
        {
            type: 'tf',
            topic: 'CBC/Differential',
            question: 'Lymphocytes include both B cells (which produce antibodies) and T cells (which coordinate immune responses and kill infected cells), making them central to adaptive immunity.',
            correct: true,
            explanation: 'This is true. Lymphocytes are adaptive immunity specialists. B cells differentiate into plasma cells producing specific antibodies. Helper T cells coordinate immune responses, activating B cells and other immune cells. Cytotoxic T cells kill virus-infected and cancerous cells. Lymphocytosis often indicates viral infections, while severe lymphopenia occurs in AIDS.'
        },
        {
            type: 'tf',
            topic: 'CBC/Differential',
            question: 'An elevated eosinophil count is most commonly associated with bacterial infections such as strep throat or pneumonia.',
            correct: false,
            explanation: 'This is false. Eosinophilia typically indicates parasitic infections or allergic reactions, NOT bacterial infections. Eosinophils combat parasites (helminths) by releasing toxic proteins, and they moderate allergic responses. Bacterial infections typically elevate neutrophils instead. Eosinophilia suggests: parasites, asthma, allergies, or certain cancers/autoimmune diseases.'
        },
        {
            type: 'tf',
            topic: 'CBC/Differential',
            question: 'An elevated lymphocyte count by itself proves a viral infection and rules out bacterial infection, so the rest of the CBC and clinical pattern are unnecessary.',
            correct: false,
            explanation: 'This is false. Differential patterns can support a diagnosis—neutrophils commonly rise with bacterial infections and lymphocytes with viral infections—but they are not absolute proof in isolation. Clinicians interpret the complete pattern and patient context. The misconception turns a useful tendency into a definitive one-value diagnosis.'
        },
        {
            type: 'tf',
            topic: 'CBC/Differential',
            question: 'All white blood cell types perform the same function in the immune system, so the differential breakdown provides no useful clinical information.',
            correct: false,
            explanation: 'This is false. Each WBC type has specialized, distinct functions: Neutrophils fight bacteria; Lymphocytes provide adaptive immunity; Monocytes become tissue macrophages; Eosinophils combat parasites and allergies; Basophils release histamine in allergic reactions. The differential reveals which immune responses are activated, guiding diagnosis and treatment. This specialization is precisely why the differential is clinically valuable.'
        }
    ]
};
