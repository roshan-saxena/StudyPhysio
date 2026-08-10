// Unit 6: Human Performance - Complete Checkup
// 50 True/False Questions: 10 Topics × 5 Questions per Topic
// Distribution: 25 True / 25 False

const unit6HumanPerformanceCheckup = {
    'unit6-human-performance-checkup': [
        // Topic 1: Bone Remodeling/Bone Cells (3 True / 2 False)
        {
            type: 'tf',
            topic: 'Bone Remodeling/Bone Cells',
            correct: false,
            question: 'If both osteoclasts and osteoblasts are active in a healing bone, the osteoclast activity indicates that repair is being reversed because successful healing should involve only bone deposition.',
            explanation: 'Bone repair includes remodeling, not just continuous deposition. Osteoclasts remove damaged or unnecessary bone, while osteoblasts deposit new bone. Their coordinated activity allows healing bone to become properly shaped and strengthened.'
        },
        {
            type: 'tf',
            topic: 'Bone Remodeling/Bone Cells',
            correct: true,
            question: 'An osteoblast that becomes surrounded by the bone matrix it deposited can mature into an osteocyte that helps maintain and monitor the surrounding bone tissue.',
            explanation: 'Osteoblasts build new bone matrix. Some remain on bone surfaces, while others become enclosed in that matrix and mature into osteocytes. Osteocytes help maintain bone and coordinate responses to stress or damage.'
        },
        {
            type: 'tf',
            topic: 'Bone Remodeling/Bone Cells',
            correct: false,
            question: 'Osteocytes are immature replacement cells whose main role during fracture healing is to divide rapidly and produce large numbers of new osteoblasts.',
            explanation: 'Osteocytes are mature bone cells embedded in bone matrix, not rapidly dividing replacement cells. Osteoblasts build new bone, while osteocytes help maintain existing bone and signal when remodeling is needed.'
        },
        {
            type: 'tf',
            topic: 'Bone Remodeling/Bone Cells',
            correct: true,
            question: 'Ossification begins before birth and continues as a child grows because cartilage and other developing tissues are gradually replaced with bone.',
            explanation: 'Infants are flexible partly because much of the developing skeleton has not fully ossified. Bone formation begins before birth and continues through childhood and into early adulthood as the skeleton grows and matures.'
        },
        {
            type: 'tf',
            topic: 'Bone Remodeling/Bone Cells',
            correct: true,
            question: 'Bone is living tissue whose remodeling supports more than movement because bones also protect organs, store minerals, and contain marrow that produces blood cells.',
            explanation: 'Bones provide structural support and movement, but they also protect organs, store minerals such as calcium and phosphorus, and house marrow that produces red blood cells, white blood cells, and platelets.'
        },

        // Topic 2: Blood Calcium Homeostasis (2 True / 3 False)
        {
            type: 'tf',
            topic: 'Blood Calcium Homeostasis',
            correct: true,
            question: 'Persistently high parathyroid hormone levels can weaken bones even when dietary calcium is adequate because calcium may be released from bone to maintain an elevated blood-calcium level.',
            explanation: 'Parathyroid hormone raises blood calcium partly by increasing osteoclast activity. If PTH remains excessive, bone may be broken down faster than it is replaced, reducing bone strength even when calcium is present in the diet.'
        },
        {
            type: 'tf',
            topic: 'Blood Calcium Homeostasis',
            correct: false,
            question: 'When blood calcium begins to fall, the parathyroid glands reduce PTH secretion so osteoclasts stop releasing calcium and the remaining calcium can be conserved inside bone.',
            explanation: 'Low blood calcium stimulates, rather than suppresses, PTH release. PTH helps raise blood calcium through effects on bone, the kidneys, and intestinal absorption. Protecting bone mineral is secondary to restoring the blood-calcium level needed for body functions.'
        },
        {
            type: 'tf',
            topic: 'Blood Calcium Homeostasis',
            correct: true,
            question: 'PTH can raise blood calcium through several coordinated responses, including increasing bone resorption, conserving calcium in the kidneys, and promoting greater calcium absorption from food.',
            explanation: 'Blood-calcium homeostasis involves more than bone alone. PTH promotes calcium release from bone, reduces calcium loss in urine, and supports increased intestinal absorption, allowing several organs to work together to restore the blood level.'
        },
        {
            type: 'tf',
            topic: 'Blood Calcium Homeostasis',
            correct: false,
            question: 'Osteoblast activity raises blood calcium because depositing new bone releases calcium from the bone matrix into circulation.',
            explanation: 'Osteoblasts use calcium and other materials to build and mineralize new bone, which moves calcium into bone rather than releasing it. Osteoclast-mediated bone breakdown is the process that releases stored calcium.'
        },
        {
            type: 'tf',
            topic: 'Blood Calcium Homeostasis',
            correct: false,
            question: 'High blood calcium should stimulate additional PTH release because calcium is required for muscle contraction and the body benefits from keeping as much calcium as possible in circulation.',
            explanation: 'Blood calcium must remain within a controlled range, not increase without limit. High blood calcium suppresses PTH secretion, while low blood calcium stimulates it. This negative-feedback response prevents excessive changes in either direction.'
        },

        // Topic 3: Bone Density/Osteoporosis (3 True / 2 False)
        {
            type: 'tf',
            topic: 'Bone Density/Osteoporosis',
            correct: true,
            question: 'A bone affected by osteoporosis can keep its general outer shape while losing internal bone tissue and developing larger spaces.',
            explanation: 'Osteoporosis is a reduction in bone density. The bone may retain its general shape even though it contains less bone tissue, has larger internal spaces, and is more vulnerable to fracture.'
        },
        {
            type: 'tf',
            topic: 'Bone Density/Osteoporosis',
            correct: false,
            question: 'Osteoporosis is more common in men than women because men generally place greater mechanical stress on their bones through exercise and physical work.',
            explanation: 'Osteoporosis is more common in women, especially after menopause. Mechanical loading generally helps maintain bone density rather than causing osteoporosis, although injuries can still occur when forces exceed bone strength.'
        },
        {
            type: 'tf',
            topic: 'Bone Density/Osteoporosis',
            correct: true,
            question: 'Smoking, poor nutrition, and physical inactivity can combine to increase osteoporosis risk because they reduce the conditions needed to maintain and rebuild strong bone.',
            explanation: 'Bone density reflects both available building materials and the remodeling response to mechanical stress. Poor nutrition limits mineral support, inactivity reduces bone-building stimulation, and smoking interferes with healthy bone maintenance.'
        },
        {
            type: 'tf',
            topic: 'Bone Density/Osteoporosis',
            correct: false,
            question: 'Once osteoporosis develops, osteoblasts are completely absent, so an affected person can no longer remodel bone or heal any fracture.',
            explanation: 'Osteoporosis does not mean osteoblasts disappear. Bone remodeling and fracture healing can still occur, but bone breakdown has exceeded bone formation over time, leaving the skeleton less dense and more vulnerable.'
        },
        {
            type: 'tf',
            topic: 'Bone Density/Osteoporosis',
            correct: true,
            question: 'If osteoclast removal of bone consistently exceeds osteoblast replacement, bone can develop larger spaces and reduced density even though remodeling is still occurring.',
            explanation: 'Healthy bone density depends on a balance between resorption and formation. When osteoclasts remove more bone than osteoblasts replace, the amount of bone tissue gradually decreases and fracture risk rises.'
        },

        // Topic 4: Muscle Structure/Contraction (2 True / 3 False)
        {
            type: 'tf',
            topic: 'Muscle Structure/Contraction',
            correct: true,
            question: 'A sarcomere can shorten even though its individual actin and myosin filaments remain the same length because the filaments slide past one another and increase their overlap.',
            explanation: 'Muscle contraction follows the sliding-filament model. Actin and myosin do not become shorter. Their movement increases overlap, shortening each sarcomere and ultimately shortening the muscle fiber.'
        },
        {
            type: 'tf',
            topic: 'Muscle Structure/Contraction',
            correct: false,
            question: 'Calcium supplies most of the energy for contraction by being broken down into ATP after it enters the muscle cell.',
            explanation: 'Calcium acts as a signal that permits actin and myosin to interact; it is not converted into ATP. ATP supplies usable energy for the contraction cycle and must be regenerated through cellular respiration and other energy systems.'
        },
        {
            type: 'tf',
            topic: 'Muscle Structure/Contraction',
            correct: true,
            question: 'Myofibrils are major components of muscle fibers because they contain repeating sarcomeres whose coordinated shortening produces contraction of the entire cell.',
            explanation: 'A muscle fiber contains many myofibrils, and each myofibril is organized into repeating sarcomeres. When sarcomeres shorten together, the myofibrils and then the whole muscle fiber shorten.'
        },
        {
            type: 'tf',
            topic: 'Muscle Structure/Contraction',
            correct: false,
            question: 'During a contraction, actin and myosin proteins shrink before returning to their original lengths during relaxation.',
            explanation: 'The proteins do not shrink and expand. Myosin pulls actin inward so the filaments slide past one another. Relaxation reduces their overlap without changing the length of either filament.'
        },
        {
            type: 'tf',
            topic: 'Muscle Structure/Contraction',
            correct: false,
            question: 'A stronger muscle contraction is produced by activating fewer sarcomeres at one time, which preserves ATP for each active contractile unit.',
            explanation: 'Reducing the number of active contractile units would reduce total force. Greater force requires more cross-bridge activity and greater recruitment of muscle fibers, which also increases the demand for ATP.'
        },

        // Topic 5: Movement (3 True / 2 False)
        {
            type: 'tf',
            topic: 'Movement',
            correct: false,
            question: 'When a person raises their body while climbing a stair, the gluteal muscles and quadriceps act mainly as flexors because the hip and knee begin in bent positions.',
            explanation: 'The starting position does not determine the action producing the movement. Raising the body requires hip extension by the gluteal muscles and knee extension by the quadriceps.'
        },
        {
            type: 'tf',
            topic: 'Movement',
            correct: true,
            question: 'At the elbow, the biceps can act as a flexor while the triceps acts as its antagonist, allowing the same joint to move in opposite directions when the muscles alternate their roles.',
            explanation: 'Muscles can pull but cannot push bones back into position. Antagonistic pairs solve this problem: one muscle produces flexion, while the opposing muscle produces extension when it contracts.'
        },
        {
            type: 'tf',
            topic: 'Movement',
            correct: true,
            question: 'The quadriceps extend the knee, so damage that prevents them from transmitting force to the lower leg would make standing up and climbing stairs more difficult.',
            explanation: 'Knee extension is essential for raising the body from a bent-knee position. The quadriceps produce this force and transmit it through connective tissue to the lower leg, so disruption weakens these movements.'
        },
        {
            type: 'tf',
            topic: 'Movement',
            correct: false,
            question: 'Lifting the front of the foot toward the shin is plantar flexion because the movement increases the angle between the top of the foot and the lower leg.',
            explanation: 'Lifting the front of the foot toward the shin is dorsiflexion. Plantar flexion points the foot and toes downward, as when pressing a gas pedal or rising onto the toes.'
        },
        {
            type: 'tf',
            topic: 'Movement',
            correct: true,
            question: 'Flexion generally decreases the angle at a joint while extension increases it, but which muscle performs each action depends on the joint being moved.',
            explanation: 'Flexion and extension describe changes in joint angle, not one specific muscle. For example, the biceps flex the elbow, while the quadriceps extend the knee and the gluteal muscles extend the hip.'
        },

        // Topic 6: Joint Structure (2 True / 3 False)
        {
            type: 'tf',
            topic: 'Joint Structure',
            correct: true,
            question: 'Damage to the Achilles tendon can weaken ankle movement because a tendon transfers the force of a contracting muscle to a bone, even though it does not connect two bones.',
            explanation: 'Tendons attach muscles to bones and transmit muscular force to the skeleton. Ligaments instead connect bones to other bones and help stabilize joints.'
        },
        {
            type: 'tf',
            topic: 'Joint Structure',
            correct: false,
            question: 'The ACL is a tendon because it connects the muscles of the thigh to the tibia and transfers their force across the knee.',
            explanation: 'The ACL is a ligament, not a tendon. It connects bones within the knee and helps stabilize the joint. Tendons connect muscles to bones and transfer muscular force.'
        },
        {
            type: 'tf',
            topic: 'Joint Structure',
            correct: true,
            question: 'In a synovial joint, articular cartilage and synovial fluid perform complementary functions: cartilage distributes pressure across bone ends while synovial fluid supports smooth movement.',
            explanation: 'Articular cartilage forms a smooth, cushioning surface over the ends of bones. Synovial fluid lubricates the joint and helps the surfaces move with less friction while also supporting the cartilage.'
        },
        {
            type: 'tf',
            topic: 'Joint Structure',
            correct: false,
            question: 'Ligaments actively contract to pull bones into position because their internal structure contains the same actin and myosin filaments found in skeletal muscle.',
            explanation: 'Ligaments are strong connective tissues that stabilize joints by connecting bone to bone. They do not actively contract and do not contain the contractile organization of skeletal muscle.'
        },
        {
            type: 'tf',
            topic: 'Joint Structure',
            correct: false,
            question: 'Cartilage and ligaments have the same structural role because both primarily connect one bone directly to another.',
            explanation: 'Ligaments connect bone to bone and help stabilize joints. Cartilage covers or cushions joint surfaces, reducing friction and absorbing force rather than serving primarily as a bone-to-bone connector.'
        },

        // Topic 7: Muscle Function and Health (3 True / 2 False)
        {
            type: 'tf',
            topic: 'Muscle Function and Health',
            correct: true,
            question: 'A person can substantially improve muscular endurance without developing large muscles because aerobic training can increase mitochondria and myoglobin more than muscle-fiber diameter.',
            explanation: 'Mitochondria support aerobic ATP production, while myoglobin helps store oxygen in muscle cells. Increasing these improves fatigue resistance and endurance without necessarily producing major hypertrophy.'
        },
        {
            type: 'tf',
            topic: 'Muscle Function and Health',
            correct: false,
            question: 'Muscle fatigue occurs only because lactic acid accumulates, so a fatigued muscle will immediately regain full function as soon as all lactic acid is removed.',
            explanation: 'Fatigue has multiple causes, including changes in available energy, nervous-system signaling, and the muscle cell environment. Treating lactic acid as the single cause oversimplifies why force production declines.'
        },
        {
            type: 'tf',
            topic: 'Muscle Function and Health',
            correct: true,
            question: 'Resistance training promotes strength and muscle growth because repeated loading stimulates muscle fibers to adapt by increasing their contractile capacity.',
            explanation: 'Appropriate resistance challenges muscle fibers beyond their usual workload. With recovery and adequate nutrition, the fibers adapt by increasing their ability to produce force and often increasing in size.'
        },
        {
            type: 'tf',
            topic: 'Muscle Function and Health',
            correct: false,
            question: 'Aerobic training improves endurance mainly by decreasing the number of mitochondria so muscle cells have more space available for actin and myosin.',
            explanation: 'Aerobic training generally increases mitochondrial capacity rather than decreasing it. More mitochondria allow muscle cells to produce ATP aerobically for longer periods and delay fatigue during sustained activity.'
        },
        {
            type: 'tf',
            topic: 'Muscle Function and Health',
            correct: true,
            question: 'Regular exercise can support both muscle and bone health because muscles adapt to repeated workload while the forces placed on bone stimulate maintenance of bone strength.',
            explanation: 'Exercise challenges muscles to maintain or increase their function, and weight-bearing forces stimulate bone remodeling. This is why activity can improve strength while also helping protect bone density.'
        },

        // Topic 8: Joint Health/Arthritis (2 True / 3 False)
        {
            type: 'tf',
            topic: 'Joint Health/Arthritis',
            correct: false,
            question: 'Osteoarthritis begins when immune cells attack the joint lining, and this immune response subsequently causes the cartilage to wear away.',
            explanation: 'Osteoarthritis primarily involves gradual deterioration and structural change in joint cartilage and surrounding tissues. An immune attack on joint tissues describes a different form of arthritis rather than the primary cause of osteoarthritis.'
        },
        {
            type: 'tf',
            topic: 'Joint Health/Arthritis',
            correct: true,
            question: 'Thinner cartilage, reduced synovial fluid, and less flexible ligaments can combine during aging to make joints stiffer and movement less comfortable.',
            explanation: 'These age-related changes reduce cushioning, lubrication, and flexibility. Because several joint structures change together, stiffness and discomfort cannot be explained by cartilage alone.'
        },
        {
            type: 'tf',
            topic: 'Joint Health/Arthritis',
            correct: false,
            question: 'Aging normally increases both bone density and synovial-fluid production, which compensates for thinner cartilage and keeps older joints as stable as younger joints.',
            explanation: 'Bone density and synovial-fluid production generally decrease rather than increase with aging. Along with thinning cartilage and changing ligaments, these losses can contribute to joint problems and reduced mobility.'
        },
        {
            type: 'tf',
            topic: 'Joint Health/Arthritis',
            correct: true,
            question: 'When severe osteoarthritis has extensively damaged a joint and other treatments no longer provide enough relief, replacing the damaged surfaces with an artificial joint may restore function.',
            explanation: 'Joint replacement can be used for severe osteoarthritis when pain and loss of function remain significant. The artificial joint replaces damaged surfaces; it does not reverse the original cartilage deterioration.'
        },
        {
            type: 'tf',
            topic: 'Joint Health/Arthritis',
            correct: false,
            question: 'Corticosteroid treatment permanently cures osteoarthritis by rebuilding the worn cartilage and restoring the joint to its original structure.',
            explanation: 'Treatments may reduce pain or inflammation, but corticosteroids do not rebuild worn cartilage or permanently cure osteoarthritis. Severe structural damage may require physical therapy, other symptom management, or joint replacement.'
        },

        // Topic 9: Musculoskeletal Injuries (3 True / 2 False)
        {
            type: 'tf',
            topic: 'Musculoskeletal Injuries',
            correct: false,
            question: 'An overstretched or partially torn Achilles tendon is classified as a sprain because sprains include injuries to any connective tissue located near a joint.',
            explanation: 'A sprain involves a ligament, which connects bone to bone. An injury to a muscle or tendon is a strain. Because the Achilles tendon connects muscle to bone, its overstretching or tearing is not classified as a sprain.'
        },
        {
            type: 'tf',
            topic: 'Musculoskeletal Injuries',
            correct: true,
            question: 'A partially torn knee ligament can be a serious sprain without being a dislocation because the ligament may be damaged while the bones remain in their normal alignment.',
            explanation: 'Sprains are ligament injuries and can range from stretching to complete tears. A dislocation is different: it occurs when the bones forming the joint are forced out of their normal positions.'
        },
        {
            type: 'tf',
            topic: 'Musculoskeletal Injuries',
            correct: true,
            question: 'A dislocation can damage ligaments even though the defining injury is displacement of the bones, because forcing a joint out of alignment can overstretch its supporting tissues.',
            explanation: 'Dislocation describes the abnormal position of the bones at a joint. The force that displaces them can also stretch or tear the ligaments and other tissues that normally stabilize that joint.'
        },
        {
            type: 'tf',
            topic: 'Musculoskeletal Injuries',
            correct: false,
            question: 'A torn biceps caused during weightlifting is classified as a sprain because the biceps acts across a joint.',
            explanation: 'A sprain damages a ligament, whereas an injury to a muscle or tendon is a strain. The classification depends on the tissue injured, not simply on whether that tissue acts across a joint.'
        },
        {
            type: 'tf',
            topic: 'Musculoskeletal Injuries',
            correct: true,
            question: 'A torn ligament can interfere with movement even though ligaments do not contract because loss of bone-to-bone stabilization can make the joint unstable under muscular force.',
            explanation: 'Ligaments guide and stabilize joints rather than producing movement. If one tears, the muscles may still contract normally, but the joint may move abnormally because its bones are no longer adequately supported.'
        },

        // Topic 10: Performance Enhancement (2 True / 3 False)
        {
            type: 'tf',
            topic: 'Performance Enhancement',
            correct: false,
            question: 'Creatine and EPO improve athletic performance through the same basic mechanism because both increase red-blood-cell production and deliver more oxygen to working muscles.',
            explanation: 'EPO increases red-blood-cell production and oxygen-carrying capacity. Creatine instead helps muscles regenerate ATP for short, intense efforts; it does not improve performance by increasing red blood cells.'
        },
        {
            type: 'tf',
            topic: 'Performance Enhancement',
            correct: true,
            question: 'EPO may improve endurance without directly increasing muscle mass because its primary effect is increasing red-blood-cell production and oxygen delivery.',
            explanation: 'EPO stimulates red-blood-cell production, which can increase oxygen delivery to working muscles and support endurance. Its primary effect is not directly building larger muscles.'
        },
        {
            type: 'tf',
            topic: 'Performance Enhancement',
            correct: false,
            question: 'A high-protein diet directly produces major muscle growth even without strength training because any extra dietary protein is automatically converted into new muscle tissue.',
            explanation: 'Protein supplies building materials, but it does not replace the training stimulus that tells muscle to adapt. Extra protein alone is not automatically converted into muscle, and extreme intake may create unnecessary health risks.'
        },
        {
            type: 'tf',
            topic: 'Performance Enhancement',
            correct: true,
            question: 'Carbohydrate loading is intended to increase stored fuel for prolonged activity rather than directly increasing muscle size or immediately increasing the number of red blood cells.',
            explanation: 'Carbohydrates can be stored as glycogen in muscles and used during extended exercise. Carbohydrate loading supports energy availability for endurance activity; it does not produce muscle hypertrophy or stimulate red-blood-cell formation.'
        },
        {
            type: 'tf',
            topic: 'Performance Enhancement',
            correct: false,
            question: 'Synthetic anabolic steroids can increase muscle mass without affecting reproductive function or cardiovascular health because they act only on skeletal muscle cells.',
            explanation: 'Anabolic steroids act throughout the body, not only in skeletal muscle. Although they can increase muscle mass, misuse can disrupt reproductive function and increase cardiovascular risks, including heart disease.'
        }
    ]
};
