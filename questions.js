// Question Bank for StudyPhysio
// Question Types: 'mcq' = Multiple Choice, 'tf' = True/False, 'fill' = Fill-in-the-blank, 'short' = Short Answer

const questionBank = {
    // ==========================================
    // UNIT 1: CARDIOVASCULAR SYSTEM
    // ==========================================
    'unit1-checkup': [
        {
            type: 'mcq',
            question: 'What is the normal resting heart rate for a healthy adult?',
            options: [
                '40-50 beats per minute',
                '60-100 beats per minute',
                '110-130 beats per minute',
                '140-160 beats per minute'
            ],
            correct: 1,
            explanation: 'The normal resting heart rate for adults ranges from <strong>60 to 100 beats per minute</strong>. Athletes may have lower resting heart rates due to cardiovascular conditioning.'
        },
        {
            type: 'tf',
            question: 'The right ventricle pumps oxygenated blood to the body.',
            correct: false,
            explanation: 'This is <strong>false</strong>. The right ventricle pumps <strong>deoxygenated blood</strong> to the lungs via the pulmonary artery. The left ventricle pumps oxygenated blood to the body.'
        },
        {
            type: 'mcq',
            question: 'Which of the following is the pacemaker of the heart?',
            options: [
                'Atrioventricular (AV) node',
                'Sinoatrial (SA) node',
                'Bundle of His',
                'Purkinje fibers'
            ],
            correct: 1,
            explanation: 'The <strong>sinoatrial (SA) node</strong> is the natural pacemaker of the heart. It generates electrical impulses that initiate each heartbeat, located in the right atrium.'
        },
        {
            type: 'fill',
            question: 'The contraction phase of the cardiac cycle is called _______.',
            correct: ['systole', 'Systole'],
            explanation: '<strong>Systole</strong> is the contraction phase when the heart pumps blood out. The relaxation phase is called diastole.'
        },
        {
            type: 'mcq',
            question: 'What is the function of heart valves?',
            options: [
                'Generate electrical impulses',
                'Prevent backflow of blood',
                'Pump blood through vessels',
                'Produce hormones'
            ],
            correct: 1,
            explanation: 'Heart valves <strong>prevent the backflow of blood</strong>, ensuring unidirectional flow through the heart chambers and into vessels.'
        }
    ],

    'unit1-practice': [
        {
            type: 'mcq',
            question: 'Which chamber of the heart has the thickest muscular wall?',
            options: [
                'Right atrium',
                'Left atrium',
                'Right ventricle',
                'Left ventricle'
            ],
            correct: 3,
            explanation: 'The <strong>left ventricle</strong> has the thickest wall because it must generate enough pressure to pump blood throughout the entire systemic circulation.'
        },
        {
            type: 'tf',
            question: 'Arteries always carry oxygenated blood.',
            correct: false,
            explanation: 'This is <strong>false</strong>. While most arteries carry oxygenated blood, the <strong>pulmonary arteries</strong> carry deoxygenated blood from the heart to the lungs.'
        },
        {
            type: 'fill',
            question: 'The two upper chambers of the heart are called _______.',
            correct: ['atria', 'Atria', 'the atria'],
            explanation: 'The two upper chambers are the <strong>atria</strong> (singular: atrium). They receive blood returning to the heart.'
        },
        {
            type: 'short',
            question: 'Explain the path of blood flow through the heart, starting from the right atrium.',
            correct: 'Right atrium → Right ventricle → Pulmonary artery → Lungs → Pulmonary veins → Left atrium → Left ventricle → Aorta → Body',
            explanation: 'Blood flows: <strong>Right atrium → Tricuspid valve → Right ventricle → Pulmonary valve → Pulmonary artery → Lungs (gas exchange) → Pulmonary veins → Left atrium → Mitral valve → Left ventricle → Aortic valve → Aorta → Systemic circulation</strong>.'
        },
        {
            type: 'mcq',
            question: 'What causes the "lub-dub" sounds of the heartbeat?',
            options: [
                'Contraction of the atria',
                'Contraction of the ventricles',
                'Closing of heart valves',
                'Blood flowing through arteries'
            ],
            correct: 2,
            explanation: 'The "lub-dub" sounds are caused by the <strong>closing of heart valves</strong>. "Lub" is from AV valves closing, "dub" is from semilunar valves closing.'
        }
    ],

    'unit1-practical': [
        {
            type: 'mcq',
            question: 'When measuring blood pressure, what does the systolic number represent?',
            options: [
                'Pressure during heart relaxation',
                'Pressure during heart contraction',
                'Average pressure over time',
                'Pressure in the veins'
            ],
            correct: 1,
            explanation: '<strong>Systolic pressure</strong> (the top number) represents the maximum pressure in arteries when the heart contracts and pumps blood.'
        },
        {
            type: 'fill',
            question: 'A blood pressure reading of 120/80 mmHg is considered _______.',
            correct: ['normal', 'Normal', 'healthy'],
            explanation: 'A reading of 120/80 mmHg is considered <strong>normal</strong> blood pressure for adults. Values above 130/80 may indicate hypertension.'
        },
        {
            type: 'tf',
            question: 'An electrocardiogram (ECG) measures the mechanical activity of the heart.',
            correct: false,
            explanation: 'This is <strong>false</strong>. An ECG measures the <strong>electrical activity</strong> of the heart, not mechanical activity. It records the electrical impulses that cause heart contractions.'
        },
        {
            type: 'short',
            question: 'Describe what happens during the cardiac cycle when you hear the first heart sound ("lub").',
            correct: 'The AV valves close, ventricles contract, and blood is pumped out',
            explanation: 'The first heart sound occurs when the <strong>atrioventricular (AV) valves close</strong> at the beginning of ventricular systole. This prevents backflow into the atria as the ventricles contract and pump blood.'
        },
        {
            type: 'mcq',
            question: 'Which diagnostic tool would be most useful for visualizing heart valve function?',
            options: [
                'X-ray',
                'Echocardiogram',
                'Blood test',
                'Stethoscope only'
            ],
            correct: 1,
            explanation: 'An <strong>echocardiogram</strong> (cardiac ultrasound) provides real-time imaging of heart structures and is excellent for visualizing valve function and blood flow.'
        }
    ],

    // ==========================================
    // UNIT 2: RESPIRATORY SYSTEM
    // ==========================================
    'unit2-checkup': [
        {
            type: 'mcq',
            question: 'What is the primary muscle involved in breathing?',
            options: [
                'Intercostal muscles',
                'Abdominal muscles',
                'Diaphragm',
                'Pectoralis major'
            ],
            correct: 2,
            explanation: 'The <strong>diaphragm</strong> is the primary muscle of respiration. When it contracts, it flattens and moves downward, increasing thoracic volume and drawing air into the lungs.'
        },
        {
            type: 'tf',
            question: 'Oxygen and carbon dioxide are exchanged in the alveoli.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Gas exchange occurs in the alveoli (tiny air sacs) where oxygen diffuses into the blood and carbon dioxide diffuses out.'
        },
        {
            type: 'fill',
            question: 'The process of breathing in is called _______.',
            correct: ['inspiration', 'Inspiration', 'inhalation', 'Inhalation'],
            explanation: '<strong>Inspiration</strong> (or inhalation) is the process of breathing in. It involves contraction of the diaphragm and external intercostal muscles.'
        },
        {
            type: 'mcq',
            question: 'Which structure prevents food from entering the trachea during swallowing?',
            options: [
                'Uvula',
                'Epiglottis',
                'Larynx',
                'Pharynx'
            ],
            correct: 1,
            explanation: 'The <strong>epiglottis</strong> is a flap of cartilage that covers the opening of the trachea during swallowing, directing food into the esophagus.'
        },
        {
            type: 'mcq',
            question: 'What is the approximate tidal volume during normal quiet breathing?',
            options: [
                '50 mL',
                '150 mL',
                '500 mL',
                '1500 mL'
            ],
            correct: 2,
            explanation: '<strong>Tidal volume</strong> is the amount of air moved in or out during normal breathing, approximately <strong>500 mL</strong> in adults.'
        }
    ],

    'unit2-practice': [
        {
            type: 'mcq',
            question: 'Which blood vessels carry deoxygenated blood to the lungs?',
            options: [
                'Pulmonary veins',
                'Pulmonary arteries',
                'Aorta',
                'Coronary arteries'
            ],
            correct: 1,
            explanation: '<strong>Pulmonary arteries</strong> carry deoxygenated blood from the right ventricle to the lungs for oxygenation.'
        },
        {
            type: 'tf',
            question: 'The right lung has three lobes while the left lung has two lobes.',
            correct: true,
            explanation: 'This is <strong>true</strong>. The right lung has three lobes (superior, middle, inferior) and the left has two lobes (superior, inferior) to accommodate the heart.'
        },
        {
            type: 'fill',
            question: 'The windpipe that connects the larynx to the bronchi is called the _______.',
            correct: ['trachea', 'Trachea'],
            explanation: 'The <strong>trachea</strong> (windpipe) is a tube reinforced with C-shaped cartilage rings that conducts air from the larynx to the bronchi.'
        },
        {
            type: 'short',
            question: 'Explain how the diaphragm facilitates inspiration.',
            correct: 'Diaphragm contracts and flattens, increasing thoracic volume, decreasing pressure, and air flows in',
            explanation: 'During inspiration, the <strong>diaphragm contracts and flattens</strong>, moving downward. This increases the volume of the thoracic cavity, which decreases the intrapulmonary pressure below atmospheric pressure, causing air to flow into the lungs.'
        },
        {
            type: 'mcq',
            question: 'What is the partial pressure of oxygen in atmospheric air at sea level?',
            options: [
                '40 mmHg',
                '100 mmHg',
                '160 mmHg',
                '760 mmHg'
            ],
            correct: 2,
            explanation: 'The partial pressure of oxygen in atmospheric air at sea level is approximately <strong>160 mmHg</strong> (21% of 760 mmHg total atmospheric pressure).'
        }
    ],

    'unit2-practical': [
        {
            type: 'mcq',
            question: 'Which test measures the maximum amount of air that can be exhaled after a maximum inhalation?',
            options: [
                'Tidal volume',
                'Vital capacity',
                'Residual volume',
                'Functional residual capacity'
            ],
            correct: 1,
            explanation: '<strong>Vital capacity</strong> is the maximum amount of air that can be exhaled after maximum inhalation, typically 4000-5000 mL in adults.'
        },
        {
            type: 'tf',
            question: 'Spirometry can be used to diagnose obstructive lung diseases like asthma.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Spirometry measures lung volumes and flow rates, helping diagnose obstructive diseases (asthma, COPD) and restrictive diseases.'
        },
        {
            type: 'fill',
            question: 'The percentage of oxygen in exhaled air is approximately _______% (give a number).',
            correct: ['16', '16%', 'sixteen'],
            explanation: 'Exhaled air contains approximately <strong>16% oxygen</strong> (compared to 21% in inspired air), along with about 4% carbon dioxide.'
        },
        {
            type: 'short',
            question: 'Describe what happens during forced expiration.',
            correct: 'Internal intercostals and abdominal muscles contract, thoracic volume decreases, pressure increases, air expelled',
            explanation: 'During forced expiration, <strong>internal intercostal muscles and abdominal muscles contract</strong>, pulling ribs down and pushing the diaphragm upward. This decreases thoracic volume, increases intrapulmonary pressure above atmospheric, and forcefully expels air.'
        },
        {
            type: 'mcq',
            question: 'In a healthy person, which factor primarily regulates breathing rate?',
            options: [
                'Oxygen levels in blood',
                'Carbon dioxide levels in blood',
                'pH of cerebrospinal fluid',
                'Blood pressure'
            ],
            correct: 1,
            explanation: '<strong>Carbon dioxide levels</strong> (and resulting pH changes) are the primary regulators of breathing rate. Chemoreceptors detect CO₂ levels and adjust ventilation accordingly.'
        }
    ],

    // ==========================================
    // UNIT 3: NERVOUS SYSTEM
    // ==========================================
    'unit3-checkup': [
        {
            type: 'mcq',
            question: 'What is the basic functional unit of the nervous system?',
            options: [
                'Glial cell',
                'Neuron',
                'Synapse',
                'Axon'
            ],
            correct: 1,
            explanation: 'The <strong>neuron</strong> is the basic functional unit of the nervous system. It transmits electrical and chemical signals throughout the body.'
        },
        {
            type: 'tf',
            question: 'The central nervous system consists of the brain and spinal cord.',
            correct: true,
            explanation: 'This is <strong>true</strong>. The CNS comprises the brain and spinal cord, while the peripheral nervous system includes all nerves outside the CNS.'
        },
        {
            type: 'fill',
            question: 'The gap between two neurons where neurotransmitters are released is called a _______.',
            correct: ['synapse', 'Synapse', 'synaptic cleft'],
            explanation: 'A <strong>synapse</strong> is the junction between two neurons where chemical neurotransmitters are released to transmit signals from one neuron to another.'
        },
        {
            type: 'mcq',
            question: 'What is the resting membrane potential of a typical neuron?',
            options: [
                '+30 mV',
                '0 mV',
                '-70 mV',
                '-140 mV'
            ],
            correct: 2,
            explanation: 'The resting membrane potential is approximately <strong>-70 mV</strong>, with the inside of the neuron being negative relative to the outside.'
        },
        {
            type: 'mcq',
            question: 'Which part of the neuron receives signals from other neurons?',
            options: [
                'Axon',
                'Axon terminal',
                'Cell body',
                'Dendrites'
            ],
            correct: 3,
            explanation: '<strong>Dendrites</strong> are branched extensions that receive signals from other neurons and conduct them toward the cell body.'
        }
    ],

    'unit3-practice': [
        {
            type: 'mcq',
            question: 'What insulates axons and increases the speed of nerve impulse conduction?',
            options: [
                'Synaptic vesicles',
                'Myelin sheath',
                'Neurotransmitters',
                'Dendrites'
            ],
            correct: 1,
            explanation: 'The <strong>myelin sheath</strong> is a fatty insulation around axons that allows for saltatory conduction, dramatically increasing impulse speed.'
        },
        {
            type: 'tf',
            question: 'Action potentials follow the all-or-none principle.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Once threshold is reached, an action potential occurs at full strength. If threshold is not reached, no action potential occurs.'
        },
        {
            type: 'fill',
            question: 'The autonomic nervous system is divided into sympathetic and _______ divisions.',
            correct: ['parasympathetic', 'Parasympathetic'],
            explanation: 'The autonomic nervous system has <strong>sympathetic</strong> (fight-or-flight) and <strong>parasympathetic</strong> (rest-and-digest) divisions.'
        },
        {
            type: 'short',
            question: 'Describe the sequence of events during an action potential.',
            correct: 'Depolarization (Na+ in), peak, repolarization (K+ out), hyperpolarization, return to resting',
            explanation: 'An action potential involves: 1) <strong>Depolarization</strong> - Na⁺ channels open, Na⁺ rushes in, membrane becomes positive; 2) <strong>Repolarization</strong> - K⁺ channels open, K⁺ exits, membrane becomes negative; 3) <strong>Hyperpolarization</strong> - brief overshoot; 4) Return to resting potential.'
        },
        {
            type: 'mcq',
            question: 'Which neurotransmitter is primarily involved in muscle contraction?',
            options: [
                'Dopamine',
                'Serotonin',
                'Acetylcholine',
                'GABA'
            ],
            correct: 2,
            explanation: '<strong>Acetylcholine</strong> is the neurotransmitter released at neuromuscular junctions, triggering muscle fiber contraction.'
        }
    ],

    'unit3-practical': [
        {
            type: 'mcq',
            question: 'What is tested during a reflex hammer test on the patellar tendon?',
            options: [
                'Muscle strength',
                'Spinal reflex arc',
                'Nerve conduction velocity',
                'Brain function'
            ],
            correct: 1,
            explanation: 'The patellar reflex tests the <strong>spinal reflex arc</strong>, specifically the L2-L4 spinal segments, bypassing conscious brain control.'
        },
        {
            type: 'tf',
            question: 'The pupillary light reflex involves both parasympathetic and sympathetic control.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Parasympathetic stimulation causes pupil constriction (in light), while sympathetic stimulation causes dilation (in darkness).'
        },
        {
            type: 'fill',
            question: 'The speed at which an action potential travels along an axon is called _______ velocity.',
            correct: ['conduction', 'Conduction', 'nerve conduction'],
            explanation: '<strong>Conduction velocity</strong> varies with axon diameter and myelination. Myelinated axons conduct much faster than unmyelinated ones.'
        },
        {
            type: 'short',
            question: 'Explain why the knee-jerk reflex occurs without conscious thought.',
            correct: 'Monosynaptic reflex arc through spinal cord, bypasses brain',
            explanation: 'The knee-jerk is a <strong>monosynaptic stretch reflex</strong>. Sensory neurons from muscle spindles synapse directly onto motor neurons in the spinal cord, causing immediate muscle contraction without needing brain processing.'
        },
        {
            type: 'mcq',
            question: 'Which technique records the electrical activity of the brain?',
            options: [
                'EMG',
                'ECG',
                'EEG',
                'MRI'
            ],
            correct: 2,
            explanation: '<strong>EEG (electroencephalogram)</strong> records electrical activity of the brain using electrodes placed on the scalp. Used to diagnose seizures, sleep disorders, and brain death.'
        }
    ],

    // ==========================================
    // UNIT 4: ENDOCRINE SYSTEM
    // ==========================================
    'unit4-checkup': [
        {
            type: 'mcq',
            question: 'Which gland is known as the "master gland" of the endocrine system?',
            options: [
                'Thyroid',
                'Adrenal',
                'Pituitary',
                'Pancreas'
            ],
            correct: 2,
            explanation: 'The <strong>pituitary gland</strong> is called the "master gland" because it secretes hormones that control other endocrine glands.'
        },
        {
            type: 'tf',
            question: 'Hormones are transported through the bloodstream to target cells.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Unlike neurotransmitters (which act locally), hormones travel through the bloodstream to reach distant target cells.'
        },
        {
            type: 'fill',
            question: 'The hormone that regulates blood glucose levels by promoting glucose uptake is _______.',
            correct: ['insulin', 'Insulin'],
            explanation: '<strong>Insulin</strong>, secreted by pancreatic beta cells, lowers blood glucose by promoting glucose uptake into cells and glycogen storage.'
        },
        {
            type: 'mcq',
            question: 'Which hormone increases metabolic rate and is produced by the thyroid gland?',
            options: [
                'Cortisol',
                'Thyroxine (T4)',
                'Melatonin',
                'Parathyroid hormone'
            ],
            correct: 1,
            explanation: '<strong>Thyroxine (T4)</strong> and T3 are thyroid hormones that increase metabolic rate, affecting nearly every cell in the body.'
        },
        {
            type: 'mcq',
            question: 'Where is cortisol produced?',
            options: [
                'Adrenal medulla',
                'Adrenal cortex',
                'Anterior pituitary',
                'Hypothalamus'
            ],
            correct: 1,
            explanation: '<strong>Cortisol</strong> is a glucocorticoid hormone produced by the adrenal cortex. It helps regulate metabolism and stress response.'
        }
    ],

    'unit4-practice': [
        {
            type: 'mcq',
            question: 'What is the primary function of the hormone glucagon?',
            options: [
                'Decrease blood glucose',
                'Increase blood glucose',
                'Regulate calcium levels',
                'Stimulate growth'
            ],
            correct: 1,
            explanation: '<strong>Glucagon</strong>, secreted by pancreatic alpha cells, <strong>increases blood glucose</strong> by promoting glycogen breakdown and gluconeogenesis.'
        },
        {
            type: 'tf',
            question: 'The hypothalamus controls the pituitary gland through releasing and inhibiting hormones.',
            correct: true,
            explanation: 'This is <strong>true</strong>. The hypothalamus secretes releasing and inhibiting hormones that control anterior pituitary hormone secretion, forming the hypothalamic-pituitary axis.'
        },
        {
            type: 'fill',
            question: 'The fight-or-flight response is mediated primarily by the hormone _______.',
            correct: ['epinephrine', 'Epinephrine', 'adrenaline', 'Adrenaline'],
            explanation: '<strong>Epinephrine</strong> (adrenaline) is released from the adrenal medulla during stress, increasing heart rate, blood pressure, and energy availability.'
        },
        {
            type: 'short',
            question: 'Explain the negative feedback mechanism in hormone regulation.',
            correct: 'Hormone level rises, inhibits further release, level decreases, inhibition removed, cycle repeats',
            explanation: 'In <strong>negative feedback</strong>, increased hormone levels inhibit further hormone release. For example, high thyroid hormone levels inhibit TSH release from the pituitary, reducing thyroid hormone production. When levels drop, inhibition is removed, and production resumes.'
        },
        {
            type: 'mcq',
            question: 'Which hormone is responsible for promoting calcium reabsorption in the kidneys?',
            options: [
                'Calcitonin',
                'Parathyroid hormone (PTH)',
                'Aldosterone',
                'Vasopressin'
            ],
            correct: 1,
            explanation: '<strong>Parathyroid hormone (PTH)</strong> increases blood calcium by promoting calcium reabsorption in kidneys, calcium release from bones, and vitamin D activation.'
        }
    ],

    'unit4-practical': [
        {
            type: 'mcq',
            question: 'A glucose tolerance test is primarily used to diagnose which condition?',
            options: [
                'Hypothyroidism',
                'Diabetes mellitus',
                'Addison\'s disease',
                'Cushing\'s syndrome'
            ],
            correct: 1,
            explanation: 'A glucose tolerance test measures how efficiently the body processes glucose, primarily used to diagnose <strong>diabetes mellitus</strong> and prediabetes.'
        },
        {
            type: 'tf',
            question: 'Thyroid function can be assessed by measuring TSH levels in blood.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Thyroid-stimulating hormone (TSH) levels indicate thyroid function. High TSH suggests hypothyroidism; low TSH suggests hyperthyroidism.'
        },
        {
            type: 'fill',
            question: 'A fasting blood glucose level above _______ mg/dL indicates diabetes.',
            correct: ['126', '126 mg/dL', '126mg/dL'],
            explanation: 'A fasting blood glucose level of <strong>126 mg/dL or higher</strong> on two separate occasions indicates diabetes mellitus.'
        },
        {
            type: 'short',
            question: 'Describe what happens during a cortisol response to stress.',
            correct: 'ACTH released, stimulates adrenal cortex, cortisol released, increases glucose, suppresses immune system',
            explanation: 'During stress, the hypothalamus releases <strong>CRH</strong>, which stimulates the pituitary to release <strong>ACTH</strong>. ACTH stimulates the adrenal cortex to release <strong>cortisol</strong>, which increases blood glucose, mobilizes fats, and modulates immune/inflammatory responses.'
        },
        {
            type: 'mcq',
            question: 'Which test measures the basal metabolic rate of thyroid hormones?',
            options: [
                'Blood glucose test',
                'TSH and T3/T4 levels',
                'Cortisol level',
                'Growth hormone test'
            ],
            correct: 1,
            explanation: 'Thyroid function is assessed by measuring <strong>TSH, T3, and T4 levels</strong> in the blood, indicating metabolic rate regulation.'
        }
    ],

    // ==========================================
    // UNIT 5: MUSCLE PHYSIOLOGY
    // ==========================================
    'unit5-checkup': [
        {
            type: 'mcq',
            question: 'What are the three types of muscle tissue in the human body?',
            options: [
                'Skeletal, smooth, voluntary',
                'Skeletal, cardiac, smooth',
                'Cardiac, involuntary, striated',
                'Smooth, rough, intermediate'
            ],
            correct: 1,
            explanation: 'The three types of muscle are: <strong>skeletal</strong> (voluntary, striated), <strong>cardiac</strong> (involuntary, striated), and <strong>smooth</strong> (involuntary, non-striated).'
        },
        {
            type: 'tf',
            question: 'Smooth muscle is found in the walls of hollow organs like the stomach and blood vessels.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Smooth muscle is involuntary and located in hollow organs (digestive tract, blood vessels, bladder, uterus).'
        },
        {
            type: 'fill',
            question: 'The basic contractile unit of skeletal muscle is called a _______.',
            correct: ['sarcomere', 'Sarcomere'],
            explanation: 'A <strong>sarcomere</strong> is the functional unit of muscle contraction, extending from one Z-line to the next in a myofibril.'
        },
        {
            type: 'mcq',
            question: 'What neurotransmitter is released at the neuromuscular junction?',
            options: [
                'Norepinephrine',
                'Dopamine',
                'Acetylcholine',
                'Serotonin'
            ],
            correct: 2,
            explanation: '<strong>Acetylcholine</strong> is released from motor neuron terminals and binds to receptors on the muscle fiber, initiating contraction.'
        },
        {
            type: 'mcq',
            question: 'Which protein in muscle fibers binds to calcium ions during contraction?',
            options: [
                'Actin',
                'Myosin',
                'Troponin',
                'Tropomyosin'
            ],
            correct: 2,
            explanation: '<strong>Troponin</strong> binds calcium ions, causing a conformational change that moves tropomyosin and exposes myosin-binding sites on actin.'
        }
    ],

    'unit5-practice': [
        {
            type: 'mcq',
            question: 'What is the primary energy source for muscle contraction?',
            options: [
                'Glucose',
                'ATP',
                'Creatine phosphate',
                'Fatty acids'
            ],
            correct: 1,
            explanation: '<strong>ATP (adenosine triphosphate)</strong> is the immediate energy source. Myosin heads use ATP hydrolysis to power the cross-bridge cycle.'
        },
        {
            type: 'tf',
            question: 'Cardiac muscle cells are connected by intercalated discs.',
            correct: true,
            explanation: 'This is <strong>true</strong>. Intercalated discs contain gap junctions and desmosomes, allowing electrical and mechanical coupling between cardiac cells.'
        },
        {
            type: 'fill',
            question: 'The sliding of actin filaments past myosin filaments is described by the _______ theory.',
            correct: ['sliding filament', 'Sliding filament', 'sliding-filament'],
            explanation: 'The <strong>sliding filament theory</strong> explains muscle contraction: myosin heads pull actin filaments toward the center of the sarcomere, shortening it.'
        },
        {
            type: 'short',
            question: 'Describe the steps of the cross-bridge cycle in muscle contraction.',
            correct: 'ATP binds myosin, detaches; ATP hydrolysis cocks head; binds actin; power stroke; ADP released',
            explanation: 'The cross-bridge cycle: 1) <strong>ATP binds</strong> myosin, causing detachment from actin; 2) ATP is hydrolyzed, <strong>cocking the myosin head</strong>; 3) Myosin binds actin forming a <strong>cross-bridge</strong>; 4) <strong>Power stroke</strong> occurs, pulling actin; 5) ADP released. Cycle repeats with new ATP.'
        },
        {
            type: 'mcq',
            question: 'What is muscle fatigue primarily caused by?',
            options: [
                'Accumulation of lactic acid and depletion of ATP',
                'Excess calcium in muscles',
                'Too much oxygen',
                'Overproduction of acetylcholine'
            ],
            correct: 0,
            explanation: 'Muscle fatigue results from <strong>lactic acid accumulation, ATP depletion, glycogen depletion, and ionic imbalances</strong> during prolonged or intense activity.'
        }
    ],

    'unit5-practical': [
        {
            type: 'mcq',
            question: 'During an EMG (electromyography), what is being measured?',
            options: [
                'Muscle strength',
                'Electrical activity of muscles',
                'Blood flow to muscles',
                'Muscle temperature'
            ],
            correct: 1,
            explanation: '<strong>EMG measures electrical activity</strong> produced by skeletal muscles during contraction, used to diagnose neuromuscular disorders.'
        },
        {
            type: 'tf',
            question: 'Isometric contractions involve muscle shortening without joint movement.',
            correct: false,
            explanation: 'This is <strong>false</strong>. Isometric contractions produce tension <strong>without muscle shortening or joint movement</strong>. Isotonic contractions involve shortening.'
        },
        {
            type: 'fill',
            question: 'The minimal stimulus needed to cause a muscle contraction is called the _______.',
            correct: ['threshold', 'Threshold', 'threshold stimulus'],
            explanation: 'The <strong>threshold</strong> is the minimum stimulus intensity required to generate an action potential and muscle contraction.'
        },
        {
            type: 'short',
            question: 'Explain the difference between a muscle twitch and tetanus.',
            correct: 'Twitch is single contraction-relaxation; tetanus is sustained contraction from rapid stimulation',
            explanation: 'A <strong>muscle twitch</strong> is a single, brief contraction following one stimulus. <strong>Tetanus</strong> is a sustained contraction resulting from high-frequency stimulation where relaxation cannot occur between stimuli, producing smooth, maximal force.'
        },
        {
            type: 'mcq',
            question: 'Which type of muscle fiber is most resistant to fatigue?',
            options: [
                'Fast glycolytic (Type IIb)',
                'Fast oxidative-glycolytic (Type IIa)',
                'Slow oxidative (Type I)',
                'All are equally resistant'
            ],
            correct: 2,
            explanation: '<strong>Slow oxidative (Type I) fibers</strong> are fatigue-resistant due to abundant mitochondria and myoglobin, relying on aerobic metabolism.'
        }
    ]
};
