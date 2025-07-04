// export default function FAQ({ faq }) {
//   return (
//     <section className="section about-a-faq">
//       <div className="w-layout-blockcontainer main-container w-container">
//         <div className="w-layout-grid faq-halves">
//           <div className="heading-faq">
//             <h3 className="no-margins">Frequently asked questions</h3>
//           </div>

//           <div className="faq-block">
//             <div className="expandable-single">
//               <div className="expandable-top">
//                 <div className="text-h5">
//                   What is GFRP and how is it different from steel rebars?
//                 </div>
//                 <div className="faq-animated-box">
//                   <div className="faq-horizontal"></div>
//                   <div className="faq-vertical"></div>
//                 </div>
//               </div>
//               <div className="expandable-bottom">
//                 <p className="faq-paragraph">
//                   GFRP (Glass Fiber Reinforced Polymer) is a
//                   corrosion-resistant, lightweight material that is 2x stronger
//                   and up to 80% lighter than steel. It doesn’t rust, making it
//                   ideal for long-lasting infrastructure in harsh environments.
//                 </p>
//               </div>
//             </div>

//             <div className="expandable-single">
//               <div className="expandable-top">
//                 <div className="text-h5">Where can GFRP rebars be used?</div>
//                 <div className="faq-animated-box">
//                   <div className="faq-horizontal"></div>
//                   <div className="faq-vertical"></div>
//                 </div>
//               </div>
//               <div className="expandable-bottom">
//                 <p className="faq-paragraph">
//                   GFRP rebars are perfect for bridges, highways, tunnels, marine
//                   structures, chemical plants, and any project where durability
//                   and corrosion resistance are critical. They’re also ideal for
//                   electromagnetic-sensitive zones like MRI rooms.
//                 </p>
//               </div>
//             </div>

//             <div className="expandable-single">
//               <div className="expandable-top">
//                 <div className="text-h5">
//                   Is RebarX GFRP certified to international standards?
//                 </div>
//                 <div className="faq-animated-box">
//                   <div className="faq-horizontal"></div>
//                   <div className="faq-vertical"></div>
//                 </div>
//               </div>
//               <div className="expandable-bottom">
//                 <p className="faq-paragraph">
//                   Yes. RebarX GFRP rebars are manufactured in compliance with
//                   ACI, ASTM, and BIS standards. Our rigorous quality control
//                   ensures top-grade performance and reliability for global-scale
//                   infrastructure.
//                 </p>
//               </div>
//             </div>

//             <div className="expandable-single">
//               <div className="expandable-top">
//                 <div className="text-h5">
//                   Can I request custom sizes or pre-bent GFRP elements?
//                 </div>
//                 <div className="faq-animated-box">
//                   <div className="faq-horizontal"></div>
//                   <div className="faq-vertical"></div>
//                 </div>
//               </div>
//               <div className="expandable-bottom">
//                 <p className="faq-paragraph">
//                   Absolutely. We offer diameters from 4mm to 32mm and lengths up
//                   to 12 meters. We also provide pre-formed bends, stirrups, and
//                   U-bars tailored to your project specifications for seamless
//                   construction integration.
//                 </p>
//               </div>
//             </div>

//             <div className="expandable-single">
//               <div className="expandable-top">
//                 <div className="text-h5">
//                   Is GFRP installation different from steel?
//                 </div>
//                 <div className="faq-animated-box">
//                   <div className="faq-horizontal"></div>
//                   <div className="faq-vertical"></div>
//                 </div>
//               </div>
//               <div className="expandable-bottom">
//                 <p className="faq-paragraph">
//                   GFRP is easy to handle and install with basic construction
//                   tools. While it doesn’t require welding, it can be cut and
//                   tied like steel. We also provide installation guides to help
//                   your team get started quickly.
//                 </p>
//               </div>
//             </div>

//             <div className="expandable-single">
//               <div className="expandable-top">
//                 <div className="text-h5">
//                   Can I talk to a technical expert before ordering?
//                 </div>
//                 <div className="faq-animated-box">
//                   <div className="faq-horizontal"></div>
//                   <div className="faq-vertical"></div>
//                 </div>
//               </div>
//               <div className="expandable-bottom">
//                 <p className="faq-paragraph">
//                   Of course! Our composite material experts are ready to help
//                   you with product selection, customization, and structural
//                   guidance. Reach out to our team and we’ll ensure your project
//                   gets the best-fit solution.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ({ faq }) {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const faqData = [
    {
      question: "What is GFRP and how is it different from steel rebars?",
      answer:
        "GFRP (Glass Fiber Reinforced Polymer) is a corrosion-resistant, lightweight material that is 2x stronger and up to 80% lighter than steel. It doesn't rust, making it ideal for long-lasting infrastructure in harsh environments.",
    },
    {
      question: "Where can GFRP rebars be used?",
      answer:
        "GFRP rebars are perfect for bridges, highways, tunnels, marine structures, chemical plants, and any project where durability and corrosion resistance are critical. They're also ideal for electromagnetic-sensitive zones like MRI rooms.",
    },
    {
      question: "Is RebarX GFRP certified to international standards?",
      answer:
        "Yes. RebarX GFRP rebars are manufactured in compliance with ACI, ASTM, and BIS standards. Our rigorous quality control ensures top-grade performance and reliability for global-scale infrastructure.",
    },
    {
      question: "Can I request custom sizes or pre-bent GFRP elements?",
      answer:
        "Absolutely. We offer diameters from 4mm to 32mm and lengths up to 12 meters. We also provide pre-formed bends, stirrups, and U-bars tailored to your project specifications for seamless construction integration.",
    },
    {
      question: "Is GFRP installation different from steel?",
      answer:
        "GFRP is easy to handle and install with basic construction tools. While it doesn't require welding, it can be cut and tied like steel. We also provide installation guides to help your team get started quickly.",
    },
    {
      question: "Can I talk to a technical expert before ordering?",
      answer:
        "Of course! Our composite material experts are ready to help you with product selection, customization, and structural guidance. Reach out to our team and we'll ensure your project gets the best-fit solution.",
    },
  ];

  return (
    <section className="section about-a-faq">
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="w-layout-grid faq-halves">
          <div className="heading-faq">
            <h3 className="no-margins">{faq.sectionTitle}</h3>
          </div>

          <div className="faq-block">
            {faq.faqs.map((item, index) => (
              <div key={index} className="expandable-single">
                <div
                  className="expandable-top"
                  onClick={() => toggleItem(index)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="text-h5">{item.question}</div>
                  <div className="faq-animated-box">
                    <motion.div
                      className="faq-horizontal"
                      animate={{
                        scaleX: openItems.has(index) ? 0 : 1,
                        opacity: openItems.has(index) ? 0 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    ></motion.div>
                    <motion.div
                      className="faq-vertical"
                      animate={{ rotate: openItems.has(index) ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                    ></motion.div>
                  </div>
                </div>
                <AnimatePresence>
                  {openItems.has(index) && (
                    <motion.div
                      className="expandable-bottom"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <p className="faq-paragraph">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}