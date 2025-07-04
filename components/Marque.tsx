// "use client";

// import React, { useEffect, useState } from "react";

// const MarqueeSection: React.FC = () => {
//     const [marqueData, setMarqueData] = useState(null);

//     useEffect(() => {
//       fetch("http://localhost:3001/api/pages?where[slug][equals]=home&depth=2")
//         .then((res) => res.json())
//         .then((data) => setMarqueData(data.docs[0]));
//     }, []);

//     if (!marqueData) return;

//     const marquee = marqueData.layout.find(
//       (block) => block.blockType === "marquee"
//     );


//   return (
//     <section className="section">
//       <div className="w-layout-blockcontainer main-container w-container">
//         <div className="master-marquees">
//           <div
//             data-w-id="8f06eae9-5c5e-b467-6e86-ef78b0c6a7ca"
//             className="marquee-text-wrap"
//           >
//             {marquee?.items?.map((item, index) => (
//               <>
//                 <div className="single-text-marquee" key={index}>
//                   <h4 className="marquee-logo">{item.text}</h4>
//                 </div>
//               </>
//             ))}
            
            
//           </div>
//           <div className="marquee-shadow-light left"></div>
//           <div className="marquee-shadow-light"></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MarqueeSection;



"use client";

import React, { useEffect, useState } from "react";

const MarqueeSection: React.FC = ({ marquee }) => {

  // Create multiple copies for seamless scrolling
  const repeatedItems = [...marquee.items, ...marquee.items, ...marquee.items];

  return (
    <section className="section">
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="master-marquees">
          <div
            data-w-id="8f06eae9-5c5e-b467-6e86-ef78b0c6a7ca"
            className="marquee-text-wrap"
          >
            <div className="single-text-marquee">
              {repeatedItems.map((item, index) => (
                <h4 className="marquee-logo" key={index}>
                  {item.text}
                </h4>
              ))}
            </div>
            <div className="single-text-marquee">
              {repeatedItems.map((item, index) => (
                <h4 className="marquee-logo" key={`duplicate-${index}`}>
                  {item.text}
                </h4>
              ))}
            </div>
          </div>
          <div className="marquee-shadow-light left"></div>
          <div className="marquee-shadow-light"></div>
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;