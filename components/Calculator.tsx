// // import React, { useState } from "react";
// // import {
// //   Calculator,
// //   Shield,
// //   Zap,
// //   Check,
// //   Clock,
// //   DollarSign,
// //   Activity,
// //   Wrench,
// // } from "lucide-react";

// // interface CalculatorInputs {
// //   constructionType: string;
// //   builtUpArea: number;
// //   floorArea: number;
// //   replacementPercentage: number;
// //   tmtCost: number;
// //   gfrpCost: number;
// // }

// // interface CalculationResults {
// //   tmtWeight: number;
// //   gfrpWeight: number;
// //   tmtTotalCost: number;
// //   gfrpTotalCost: number;
// //   savings: number;
// //   savingsPercentage: number;
// //   weightReduction: number;
// // }

// // const Calculators: React.FC = () => {
// //   const [inputs, setInputs] = useState<CalculatorInputs>({
// //     constructionType: "",
// //     builtUpArea: 0,
// //     floorArea: 0,
// //     replacementPercentage: 100,
// //     tmtCost: 0,
// //     gfrpCost: 0,
// //   });

// //   const [results, setResults] = useState<CalculationResults | null>(null);

// //   const constructionTypes = [
// //     "Residential Building",
// //     "Commercial Building",
// //     "Industrial Structure",
// //     "Bridge/Infrastructure",
// //     "Marine Structure",
// //     "High-rise Building",
// //   ];

// //   const calculateRebarWeight = (area: number, type: string): number => {
// //     // Approximate rebar weight per sq ft based on construction type
// //     const weightFactors: { [key: string]: number } = {
// //       "Residential Building": 8, // kg per sq ft
// //       "Commercial Building": 12,
// //       "Industrial Structure": 15,
// //       "Bridge/Infrastructure": 20,
// //       "Marine Structure": 18,
// //       "High-rise Building": 16,
// //     };

// //     return area * (weightFactors[type] || 10);
// //   };

// //   const handleInputChange = (
// //     field: keyof CalculatorInputs,
// //     value: string | number
// //   ) => {
// //     setInputs((prev) => ({
// //       ...prev,
// //       [field]: value,
// //     }));
// //   };

// //   const calculateSavings = () => {
// //     if (
// //       !inputs.constructionType ||
// //       !inputs.builtUpArea ||
// //       !inputs.tmtCost ||
// //       !inputs.gfrpCost
// //     ) {
// //       alert("Please fill in all required fields");
// //       return;
// //     }

// //     const totalArea = inputs.builtUpArea + inputs.floorArea;
// //     const tmtWeight = calculateRebarWeight(totalArea, inputs.constructionType);
// //     const gfrpWeight = tmtWeight * 0.2; // GFRP is 80% lighter
// //     const replacementFactor = inputs.replacementPercentage / 100;

// //     const tmtTotalCost = tmtWeight * inputs.tmtCost;
// //     const gfrpReplacementWeight = tmtWeight * replacementFactor * 0.2;
// //     const remainingTmtWeight = tmtWeight * (1 - replacementFactor);
// //     const gfrpTotalCost =
// //       gfrpReplacementWeight * inputs.gfrpCost +
// //       remainingTmtWeight * inputs.tmtCost;

// //     const savings = tmtTotalCost - gfrpTotalCost;
// //     const savingsPercentage = (savings / tmtTotalCost) * 100;
// //     const weightReduction =
// //       ((tmtWeight - (gfrpReplacementWeight + remainingTmtWeight)) / tmtWeight) *
// //       100;

// //     setResults({
// //       tmtWeight,
// //       gfrpWeight: gfrpReplacementWeight + remainingTmtWeight,
// //       tmtTotalCost,
// //       gfrpTotalCost,
// //       savings,
// //       savingsPercentage,
// //       weightReduction,
// //     });
// //   };

// //   return (
// //     <div className="main-container">
// //       <div className="section">
// //         <div className="headline-pricing">
// //           <div className="text-h2">GFRP Rebar Calculator</div>
// //           <div className="text-body">
// //             Calculate potential savings by switching from TMT to GFRP rebar
// //           </div>
// //         </div>

// //         <div className="product-thirdss">
// //           {/* Calculator Card */}
// //           <div className="pricing-cards" style={{ width: "100%" }}>
// //             <div className="plan-header">
// //               <div className="plan-name-wrap">
// //                 <div className="plan-title">
// //                   <Calculator className="icon-plan" />
// //                   <div className="text-h6">Project Calculator</div>
// //                 </div>
// //                 <div className="text-small">
// //                   Enter your project details to calculate savings
// //                 </div>
// //               </div>
// //               <div className="section-divider plan-divider"></div>
// //             </div>

// //             <div className="plan-bottom-tile">
// //               <div className="label text-semi-dark">Project Information</div>

// //               <div className="contact-input-wrap">
// //                 <label className="text-small">Construction Type</label>
// //                 <select
// //                   className="text-field"
// //                   value={inputs.constructionType}
// //                   onChange={(e) =>
// //                     handleInputChange("constructionType", e.target.value)
// //                   }
// //                 >
// //                   <option value="">Select Construction Type</option>
// //                   {constructionTypes.map((type) => (
// //                     <option key={type} value={type}>
// //                       {type}
// //                     </option>
// //                   ))}
// //                 </select>
// //               </div>

// //               <div className="contact-input-wrap">
// //                 <label className="text-small">
// //                   Total Built-up Area (sq ft)
// //                 </label>
// //                 <input
// //                   type="number"
// //                   className="text-field"
// //                   value={inputs.builtUpArea || ""}
// //                   onChange={(e) =>
// //                     handleInputChange(
// //                       "builtUpArea",
// //                       parseFloat(e.target.value) || 0
// //                     )
// //                   }
// //                   placeholder="Enter built-up area"
// //                 />
// //               </div>

// //               <div className="contact-input-wrap">
// //                 <label className="text-small">Total Floor Area (sq ft)</label>
// //                 <input
// //                   type="number"
// //                   className="text-field"
// //                   value={inputs.floorArea || ""}
// //                   onChange={(e) =>
// //                     handleInputChange(
// //                       "floorArea",
// //                       parseFloat(e.target.value) || 0
// //                     )
// //                   }
// //                   placeholder="Enter floor area"
// //                 />
// //               </div>

// //               <div className="contact-input-wrap">
// //                 <label className="text-small">
// //                   TMT Rebar Replacement Percentage (%)
// //                 </label>
// //                 <input
// //                   type="range"
// //                   min="0"
// //                   max="100"
// //                   value={inputs.replacementPercentage}
// //                   onChange={(e) =>
// //                     handleInputChange(
// //                       "replacementPercentage",
// //                       parseInt(e.target.value)
// //                     )
// //                   }
// //                   className="w-input"
// //                 />
// //                 <div className="text-body">{inputs.replacementPercentage}%</div>
// //               </div>

// //               <div className="section-divider plan-divider-2"></div>

// //               <div className="label text-semi-dark">Cost Information</div>

// //               <div className="contact-input-wrap">
// //                 <label className="text-small">TMT Rebar Cost per kg (₹)</label>
// //                 <input
// //                   type="number"
// //                   className="text-field"
// //                   value={inputs.tmtCost || ""}
// //                   onChange={(e) =>
// //                     handleInputChange(
// //                       "tmtCost",
// //                       parseFloat(e.target.value) || 0
// //                     )
// //                   }
// //                   placeholder="Enter TMT cost per kg"
// //                 />
// //               </div>

// //               <div className="contact-input-wrap">
// //                 <label className="text-small">GFRP Rebar Cost per kg (₹)</label>
// //                 <input
// //                   type="number"
// //                   className="text-field"
// //                   value={inputs.gfrpCost || ""}
// //                   onChange={(e) =>
// //                     handleInputChange(
// //                       "gfrpCost",
// //                       parseFloat(e.target.value) || 0
// //                     )
// //                   }
// //                   placeholder="Enter GFRP cost per kg"
// //                 />
// //               </div>

// //               <div className="plan-button-wrap">
// //                 <button className="cta-main" onClick={calculateSavings}>
// //                   Calculate Savings
// //                 </button>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Results Card */}
// //           {results && (
// //             <div className="pricing-cards last">
// //               <div className="plan-header">
// //                 <div className="plan-name-wrap">
// //                   <div className="plan-title">
// //                     <DollarSign className="icon-plan" />
// //                     <div className="text-h6">Calculation Results</div>
// //                   </div>
// //                   <div className="text-small">
// //                     Your potential savings with GFRP rebar
// //                   </div>
// //                 </div>
// //                 <div className="section-divider plan-divider semi-light-divider-plan"></div>
// //               </div>

// //               <div className="check-list">
// //                 <div className="check-wrap">
// //                   <div className="text-body">
// //                     <strong>TMT Total Weight:</strong>{" "}
// //                     {results.tmtWeight.toFixed(0)} kg
// //                   </div>
// //                 </div>
// //                 <div className="check-wrap">
// //                   <div className="text-body">
// //                     <strong>Hybrid Total Weight:</strong>{" "}
// //                     {results.gfrpWeight.toFixed(0)} kg
// //                   </div>
// //                 </div>
// //                 <div className="check-wrap">
// //                   <div className="text-body">
// //                     <strong>Weight Reduction:</strong>{" "}
// //                     {results.weightReduction.toFixed(1)}%
// //                   </div>
// //                 </div>
// //                 <div className="section-divider plan-divider-2 semi-light-divider-plan"></div>
// //                 <div className="check-wrap">
// //                   <div className="text-body">
// //                     <strong>TMT Total Cost:</strong> ₹
// //                     {results.tmtTotalCost.toLocaleString()}
// //                   </div>
// //                 </div>
// //                 <div className="check-wrap">
// //                   <div className="text-body">
// //                     <strong>Hybrid Total Cost:</strong> ₹
// //                     {results.gfrpTotalCost.toLocaleString()}
// //                   </div>
// //                 </div>
// //                 <div className="check-wrap">
// //                   <div className="text-h6" style={{ color: "var(--accent)" }}>
// //                     <strong>Total Savings:</strong> ₹
// //                     {results.savings.toLocaleString()}
// //                   </div>
// //                 </div>
// //                 <div className="check-wrap">
// //                   <div className="text-h6" style={{ color: "var(--accent)" }}>
// //                     <strong>Savings:</strong>{" "}
// //                     {results.savingsPercentage.toFixed(1)}%
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="plan-bottom-tile">
// //                 <div className="section-divider plan-divider-2 semi-light-divider-plan"></div>
// //                 <div className="label text-semi-light">
// //                   Additional Benefits:
// //                 </div>
// //                 <p className="text-small">
// //                   Reduced transportation costs, faster installation, and
// //                   long-term maintenance savings not included in calculation.
// //                 </p>
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Calculators;

// import React, { useState } from "react";
// import {
//   Calculator,
//   Shield,
//   Zap,
//   Check,
//   Clock,
//   DollarSign,
//   Activity,
//   Wrench,
//   BarChart3,
// } from "lucide-react";

// interface CalculatorInputs {
//   constructionType: string;
//   builtUpArea: number;
//   floorArea: number;
//   replacementPercentage: number;
//   tmtCost: number;
//   gfrpCost: number;
// }

// interface CalculationResults {
//   tmtWeight: number;
//   gfrpWeight: number;
//   tmtTotalCost: number;
//   gfrpTotalCost: number;
//   savings: number;
//   savingsPercentage: number;
//   weightReduction: number;
// }

// const Calculators: React.FC = () => {
//   const [inputs, setInputs] = useState<CalculatorInputs>({
//     constructionType: "",
//     builtUpArea: 0,
//     floorArea: 0,
//     replacementPercentage: 100,
//     tmtCost: 0,
//     gfrpCost: 0,
//   });

//   const [results, setResults] = useState<CalculationResults | null>(null);

//   const constructionTypes = [
//     "Residential Building",
//     "Commercial Building",
//     "Industrial Structure",
//     "Bridge/Infrastructure",
//     "Marine Structure",
//     "High-rise Building",
//   ];

//   const calculateRebarWeight = (area: number, type: string): number => {
//     // Approximate rebar weight per sq ft based on construction type
//     const weightFactors: { [key: string]: number } = {
//       "Residential Building": 8, // kg per sq ft
//       "Commercial Building": 12,
//       "Industrial Structure": 15,
//       "Bridge/Infrastructure": 20,
//       "Marine Structure": 18,
//       "High-rise Building": 16,
//     };

//     return area * (weightFactors[type] || 10);
//   };

//   const handleInputChange = (
//     field: keyof CalculatorInputs,
//     value: string | number
//   ) => {
//     setInputs((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   const calculateSavings = () => {
//     if (
//       !inputs.constructionType ||
//       !inputs.builtUpArea ||
//       !inputs.tmtCost ||
//       !inputs.gfrpCost
//     ) {
//       alert("Please fill in all required fields");
//       return;
//     }

//     const totalArea = inputs.builtUpArea + inputs.floorArea;
//     const tmtWeight = calculateRebarWeight(totalArea, inputs.constructionType);
//     const gfrpWeight = tmtWeight * 0.2; // GFRP is 80% lighter
//     const replacementFactor = inputs.replacementPercentage / 100;

//     const tmtTotalCost = tmtWeight * inputs.tmtCost;
//     const gfrpReplacementWeight = tmtWeight * replacementFactor * 0.2;
//     const remainingTmtWeight = tmtWeight * (1 - replacementFactor);
//     const gfrpTotalCost =
//       gfrpReplacementWeight * inputs.gfrpCost +
//       remainingTmtWeight * inputs.tmtCost;

//     const savings = tmtTotalCost - gfrpTotalCost;
//     const savingsPercentage = (savings / tmtTotalCost) * 100;
//     const weightReduction =
//       ((tmtWeight - (gfrpReplacementWeight + remainingTmtWeight)) / tmtWeight) *
//       100;

//     setResults({
//       tmtWeight,
//       gfrpWeight: gfrpReplacementWeight + remainingTmtWeight,
//       tmtTotalCost,
//       gfrpTotalCost,
//       savings,
//       savingsPercentage,
//       weightReduction,
//     });
//   };

//   return (
//     <div className="main-container">
//       <div className="section">
//         <div className="headline-pricing">
//           <div className="text-h2">GFRP Rebar Calculator</div>
//           <div className="text-body">
//             Calculate potential savings by switching from TMT to GFRP rebar
//           </div>
//         </div>

//         <div className="product-thirdss">
//           {/* <div></div> */}
//           {/* Calculator Card */}
//           <div className="pricing-cards" style={{ width: "100%" }}>
//             <div className="plan-header">
//               <div className="plan-name-wrap">
//                 <div className="plan-title">
//                   <Calculator className="icon-plan" />
//                   <div className="text-h6">Project Calculator</div>
//                 </div>
//                 <div className="text-small">
//                   Enter your project details to calculate savings
//                 </div>
//               </div>
//               <div className="section-divider plan-divider"></div>
//             </div>

//             <div className="plan-bottom-tile">
//               <div className="label text-semi-dark">Project Information</div>

//               <div className="contact-input-wrap">
//                 <label className="text-small">Construction Type</label>
//                 <select
//                   className="text-field"
//                   value={inputs.constructionType}
//                   onChange={(e) =>
//                     handleInputChange("constructionType", e.target.value)
//                   }
//                 >
//                   <option value="">Select Construction Type</option>
//                   {constructionTypes.map((type) => (
//                     <option key={type} value={type}>
//                       {type}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="contact-input-wrap">
//                 <label className="text-small">
//                   Total Built-up Area (sq ft)
//                 </label>
//                 <input
//                   type="number"
//                   className="text-field"
//                   value={inputs.builtUpArea || ""}
//                   onChange={(e) =>
//                     handleInputChange(
//                       "builtUpArea",
//                       parseFloat(e.target.value) || 0
//                     )
//                   }
//                   placeholder="Enter built-up area"
//                 />
//               </div>

//               <div className="contact-input-wrap">
//                 <label className="text-small">Total Floor Area (sq ft)</label>
//                 <input
//                   type="number"
//                   className="text-field"
//                   value={inputs.floorArea || ""}
//                   onChange={(e) =>
//                     handleInputChange(
//                       "floorArea",
//                       parseFloat(e.target.value) || 0
//                     )
//                   }
//                   placeholder="Enter floor area"
//                 />
//               </div>

//               <div className="contact-input-wrap">
//                 <label className="text-small">
//                   TMT Rebar Replacement Percentage (%)
//                 </label>
//                 <input
//                   type="range"
//                   min="0"
//                   max="100"
//                   value={inputs.replacementPercentage}
//                   onChange={(e) =>
//                     handleInputChange(
//                       "replacementPercentage",
//                       parseInt(e.target.value)
//                     )
//                   }
//                   className="w-input"
//                 />
//                 <div className="text-body">{inputs.replacementPercentage}%</div>
//               </div>

//               <div className="section-divider plan-divider-2"></div>

//               <div className="label text-semi-dark">Cost Information</div>

//               <div className="contact-input-wrap">
//                 <label className="text-small">TMT Rebar Cost per kg (₹)</label>
//                 <input
//                   type="number"
//                   className="text-field"
//                   value={inputs.tmtCost || ""}
//                   onChange={(e) =>
//                     handleInputChange(
//                       "tmtCost",
//                       parseFloat(e.target.value) || 0
//                     )
//                   }
//                   placeholder="Enter TMT cost per kg"
//                 />
//               </div>

//               <div className="contact-input-wrap">
//                 <label className="text-small">GFRP Rebar Cost per kg (₹)</label>
//                 <input
//                   type="number"
//                   className="text-field"
//                   value={inputs.gfrpCost || ""}
//                   onChange={(e) =>
//                     handleInputChange(
//                       "gfrpCost",
//                       parseFloat(e.target.value) || 0
//                     )
//                   }
//                   placeholder="Enter GFRP cost per kg"
//                 />
//               </div>

//               <div className="plan-button-wrap">
//                 <button className="cta-main" onClick={calculateSavings}>
//                   Calculate Savings
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Results Card - Always Visible */}
//           <div className="pricing-cards last">
//             <div className="plan-header">
//               <div className="plan-name-wrap">
//                 <div className="plan-title">
//                   <DollarSign className="icon-plan" />
//                   <div className="text-h6">Calculation Results</div>
//                 </div>
//                 <div className="text-small">
//                   {results
//                     ? "Your potential savings with GFRP rebar"
//                     : "Results will appear here after calculation"}
//                 </div>
//               </div>
//               <div className="section-divider plan-divider semi-light-divider-plan"></div>
//             </div>

//             {results ? (
//               <div className="check-list">
//                 <div className="check-wrap">
//                   <div className="text-body">
//                     <strong>TMT Total Weight:</strong>{" "}
//                     {results.tmtWeight.toFixed(0)} kg
//                   </div>
//                 </div>
//                 <div className="check-wrap">
//                   <div className="text-body">
//                     <strong>Hybrid Total Weight:</strong>{" "}
//                     {results.gfrpWeight.toFixed(0)} kg
//                   </div>
//                 </div>
//                 <div className="check-wrap">
//                   <div className="text-body">
//                     <strong>Weight Reduction:</strong>{" "}
//                     {results.weightReduction.toFixed(1)}%
//                   </div>
//                 </div>
//                 <div className="section-divider plan-divider-2 semi-light-divider-plan"></div>
//                 <div className="check-wrap">
//                   <div className="text-body">
//                     <strong>TMT Total Cost:</strong> ₹
//                     {results.tmtTotalCost.toLocaleString()}
//                   </div>
//                 </div>
//                 <div className="check-wrap">
//                   <div className="text-body">
//                     <strong>Hybrid Total Cost:</strong> ₹
//                     {results.gfrpTotalCost.toLocaleString()}
//                   </div>
//                 </div>
//                 <div className="check-wrap">
//                   <div className="text-h6" style={{ color: "var(--accent)" }}>
//                     <strong>Total Savings:</strong> ₹
//                     {results.savings.toLocaleString()}
//                   </div>
//                 </div>
//                 <div className="check-wrap">
//                   <div className="text-h6" style={{ color: "var(--accent)" }}>
//                     <strong>Savings:</strong>{" "}
//                     {results.savingsPercentage.toFixed(1)}%
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <div className="check-list">
//                 <div className="check-wrap">
//                   <div className="text-body">
//                     Fill in the project details and click "Calculate Savings" to
//                     see your potential benefits.
//                   </div>
//                 </div>
//                 <div className="section-divider plan-divider-2 semi-light-divider-plan"></div>
//                 <div className="check-wrap">
//                   <Activity className="icon-plan" />
//                   <div className="text-body">Weight reduction analysis</div>
//                 </div>
//                 <div className="check-wrap">
//                   <DollarSign className="icon-plan" />
//                   <div className="text-body">Cost comparison</div>
//                 </div>
//                 <div className="check-wrap">
//                   <Wrench className="icon-plan" />
//                   <div className="text-body">Installation benefits</div>
//                 </div>
//               </div>
//             )}

//             {results && (
//               <div className="plan-bottom-tile">
//                 <div className="section-divider plan-divider-2 semi-light-divider-plan"></div>
//                 <div className="label text-semi-light">
//                   Additional Benefits:
//                 </div>
//                 <p className="text-small">
//                   Reduced transportation costs, faster installation, and
//                   long-term maintenance savings not included in calculation.
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Calculators;

// import React, { useState } from "react";
// import {
//   Calculator,
//   DollarSign,
//   Activity,
//   Wrench,
//   BarChart3,
//   CheckCircle,
//   AlertCircle,
//   TrendingUp,
//   Weight,
//   Zap,
// } from "lucide-react";

// interface CalculatorInputs {
//   constructionType: string;
//   builtUpArea: number;
//   floorArea: number;
//   replacementPercentage: number;
//   tmtCost: number;
//   gfrpCost: number;
// }

// interface CalculationResults {
//   tmtWeight: number;
//   gfrpWeight: number;
//   tmtTotalCost: number;
//   gfrpTotalCost: number;
//   savings: number;
//   savingsPercentage: number;
//   weightReduction: number;
// }

// const Calculators: React.FC = () => {
//   const [inputs, setInputs] = useState<CalculatorInputs>({
//     constructionType: "",
//     builtUpArea: 0,
//     floorArea: 0,
//     replacementPercentage: 100,
//     tmtCost: 0,
//     gfrpCost: 0,
//   });

//   const [results, setResults] = useState<CalculationResults | null>(null);
//   const [isCalculating, setIsCalculating] = useState(false);

//   const constructionTypes = [
//     "Residential Building",
//     "Commercial Building",
//     "Industrial Structure",
//     "Bridge/Infrastructure",
//     "Marine Structure",
//     "High-rise Building",
//   ];

//   const calculateRebarWeight = (area: number, type: string): number => {
//     const weightFactors: { [key: string]: number } = {
//       "Residential Building": 8,
//       "Commercial Building": 12,
//       "Industrial Structure": 15,
//       "Bridge/Infrastructure": 20,
//       "Marine Structure": 18,
//       "High-rise Building": 16,
//     };
//     return area * (weightFactors[type] || 10);
//   };

//   const handleInputChange = (
//     field: keyof CalculatorInputs,
//     value: string | number
//   ) => {
//     setInputs((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   const calculateSavings = async () => {
//     if (
//       !inputs.constructionType ||
//       !inputs.builtUpArea ||
//       !inputs.tmtCost ||
//       !inputs.gfrpCost
//     ) {
//       alert("Please fill in all required fields");
//       return;
//     }

//     setIsCalculating(true);

//     // Simulate calculation delay for better UX
//     await new Promise((resolve) => setTimeout(resolve, 800));

//     const totalArea = inputs.builtUpArea + inputs.floorArea;
//     const tmtWeight = calculateRebarWeight(totalArea, inputs.constructionType);
//     const replacementFactor = inputs.replacementPercentage / 100;

//     const tmtTotalCost = tmtWeight * inputs.tmtCost;
//     const gfrpReplacementWeight = tmtWeight * replacementFactor * 0.2;
//     const remainingTmtWeight = tmtWeight * (1 - replacementFactor);
//     const gfrpTotalCost =
//       gfrpReplacementWeight * inputs.gfrpCost +
//       remainingTmtWeight * inputs.tmtCost;

//     const savings = tmtTotalCost - gfrpTotalCost;
//     const savingsPercentage = (savings / tmtTotalCost) * 100;
//     const weightReduction =
//       ((tmtWeight - (gfrpReplacementWeight + remainingTmtWeight)) / tmtWeight) *
//       100;

//     setResults({
//       tmtWeight,
//       gfrpWeight: gfrpReplacementWeight + remainingTmtWeight,
//       tmtTotalCost,
//       gfrpTotalCost,
//       savings,
//       savingsPercentage,
//       weightReduction,
//     });

//     setIsCalculating(false);
//   };

//   const clearCalculation = () => {
//     setResults(null);
//     setInputs({
//       constructionType: "",
//       builtUpArea: 0,
//       floorArea: 0,
//       replacementPercentage: 100,
//       tmtCost: 0,
//       gfrpCost: 0,
//     });
//   };

//   const isFormValid =
//     inputs.constructionType &&
//     inputs.builtUpArea &&
//     inputs.tmtCost &&
//     inputs.gfrpCost;

//   return (
//     <div className="main-container">
//       <div className="section">
//         {/* Centered Hero Section */}
//         <div className="headline-pricing">
//           <div className="text-h2">GFRP Rebar Calculator</div>
//           <div
//             className="text-body"
//             style={{ maxWidth: "600px", textAlign: "center" }}
//           >
//             Calculate potential savings and weight reduction by switching from
//             TMT to GFRP rebar for your construction project
//           </div>
//         </div>

//         {/* Centered Two-Column Layout */}
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "flex-start",
//             width: "100%",
//             maxWidth: "1200px",
//             margin: "0 auto",
//           }}
//         >
//           <div className="product-thirdss">
//             {/* Calculator Card */}
//             <div className="pricing-cards" style={{ position: "relative" }}>
//               <div className="plan-header">
//                 <div className="plan-name-wrap">
//                   <div className="plan-title">
//                     <Calculator className="icon-plan" />
//                     <div className="text-h6">Project Calculator</div>
//                   </div>
//                   <div className="text-small" style={{ opacity: 0.8 }}>
//                     Enter your project details to calculate potential savings
//                   </div>
//                 </div>
//                 <div className="section-divider plan-divider"></div>
//               </div>

//               <div className="plan-bottom-tile" style={{ gap: "20px" }}>
//                 {/* Project Information Section */}
//                 <div style={{ marginBottom: "20px" }}>
//                   <div
//                     className="label text-semi-dark"
//                     style={{ marginBottom: "12px" }}
//                   >
//                     {/* <Activity
//                       className="icon-plan"
//                       style={{ marginRight: "8px", display: "inline" }}
//                     /> */}
//                     Project Information
//                   </div>

//                   <div
//                     style={{
//                       display: "flex",
//                       flexDirection: "column",
//                       gap: "16px",
//                     }}
//                   >
//                     <div className="contact-input-wrap">
//                       <label
//                         className="text-small"
//                         style={{ fontWeight: "500" }}
//                       >
//                         Construction Type{" "}
//                         <span style={{ color: "red" }}>*</span>
//                       </label>
//                       <select
//                         className="text-field"
//                         value={inputs.constructionType}
//                         onChange={(e) =>
//                           handleInputChange("constructionType", e.target.value)
//                         }
//                         style={{
//                           backgroundColor: inputs.constructionType
//                             ? "var(--bg)"
//                             : "var(--light)",
//                           transition: "background-color 0.2s",
//                         }}
//                       >
//                         <option value="">Select Construction Type</option>
//                         {constructionTypes.map((type) => (
//                           <option key={type} value={type}>
//                             {type}
//                           </option>
//                         ))}
//                       </select>
//                     </div>

//                     <div className="input-halves">
//                       <div className="contact-input-wrap">
//                         <label
//                           className="text-small"
//                           style={{ fontWeight: "500" }}
//                         >
//                           Built-up Area (sq ft){" "}
//                           <span style={{ color: "red" }}>*</span>
//                         </label>
//                         <input
//                           type="number"
//                           className="text-field"
//                           value={inputs.builtUpArea || ""}
//                           onChange={(e) =>
//                             handleInputChange(
//                               "builtUpArea",
//                               parseFloat(e.target.value) || 0
//                             )
//                           }
//                           placeholder="e.g., 2000"
//                           min="0"
//                         />
//                       </div>

//                       <div className="contact-input-wrap">
//                         <label
//                           className="text-small"
//                           style={{ fontWeight: "500" }}
//                         >
//                           Floor Area (sq ft)
//                         </label>
//                         <input
//                           type="number"
//                           className="text-field"
//                           value={inputs.floorArea || ""}
//                           onChange={(e) =>
//                             handleInputChange(
//                               "floorArea",
//                               parseFloat(e.target.value) || 0
//                             )
//                           }
//                           placeholder="e.g., 500"
//                           min="0"
//                         />
//                       </div>
//                     </div>

//                     <div className="contact-input-wrap">
//                       <label
//                         className="text-small"
//                         style={{ fontWeight: "500", marginBottom: "8px" }}
//                       >
//                         TMT Rebar Replacement: {inputs.replacementPercentage}%
//                       </label>
//                       <input
//                         type="range"
//                         min="0"
//                         max="100"
//                         value={inputs.replacementPercentage}
//                         onChange={(e) =>
//                           handleInputChange(
//                             "replacementPercentage",
//                             parseInt(e.target.value)
//                           )
//                         }
//                         style={{
//                           width: "100%",
//                           height: "6px",
//                           borderRadius: "3px",
//                           background: `linear-gradient(to right, var(--accent) 0%, var(--accent) ${inputs.replacementPercentage}%, var(--border-dark) ${inputs.replacementPercentage}%, var(--border-dark) 100%)`,
//                           outline: "none",
//                           marginBottom: "8px",
//                         }}
//                       />
//                       <div
//                         className="text-small"
//                         style={{ opacity: 0.7, textAlign: "center" }}
//                       >
//                         {inputs.replacementPercentage < 25 &&
//                           "Minimal replacement"}
//                         {inputs.replacementPercentage >= 25 &&
//                           inputs.replacementPercentage < 75 &&
//                           "Partial replacement"}
//                         {inputs.replacementPercentage >= 75 &&
//                           "Full replacement"}
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="section-divider plan-divider-2"></div>

//                 {/* Cost Information Section */}
//                 <div style={{ marginBottom: "20px" }}>
//                   <div
//                     className="label text-semi-dark"
//                     style={{ marginBottom: "12px" }}
//                   >
//                     {/* <DollarSign
//                       className="icon-plan"
//                       style={{ marginRight: "8px", display: "inline" }}
//                     /> */}
//                     Cost Information
//                   </div>

//                   <div className="input-halves">
//                     <div className="contact-input-wrap">
//                       <label
//                         className="text-small"
//                         style={{ fontWeight: "500" }}
//                       >
//                         TMT Cost per kg (₹){" "}
//                         <span style={{ color: "red" }}>*</span>
//                       </label>
//                       <input
//                         type="number"
//                         className="text-field"
//                         value={inputs.tmtCost || ""}
//                         onChange={(e) =>
//                           handleInputChange(
//                             "tmtCost",
//                             parseFloat(e.target.value) || 0
//                           )
//                         }
//                         placeholder="e.g., 75"
//                         min="0"
//                         step="0.01"
//                       />
//                     </div>

//                     <div className="contact-input-wrap">
//                       <label
//                         className="text-small"
//                         style={{ fontWeight: "500" }}
//                       >
//                         GFRP Cost per kg (₹){" "}
//                         <span style={{ color: "red" }}>*</span>
//                       </label>
//                       <input
//                         type="number"
//                         className="text-field"
//                         value={inputs.gfrpCost || ""}
//                         onChange={(e) =>
//                           handleInputChange(
//                             "gfrpCost",
//                             parseFloat(e.target.value) || 0
//                           )
//                         }
//                         placeholder="e.g., 180"
//                         min="0"
//                         step="0.01"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="plan-button-wrap" style={{ marginTop: "24px" }}>
//                   <button
//                     className="cta-main"
//                     onClick={calculateSavings}
//                     disabled={!isFormValid || isCalculating}
//                     style={{
//                       opacity: !isFormValid || isCalculating ? 0.6 : 1,
//                       cursor:
//                         !isFormValid || isCalculating
//                           ? "not-allowed"
//                           : "pointer",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       gap: "8px",
//                     }}
//                   >
//                     {isCalculating ? (
//                       <>
//                         <div
//                           style={{
//                             width: "16px",
//                             height: "16px",
//                             border: "2px solid transparent",
//                             borderTop: "2px solid currentColor",
//                             borderRadius: "50%",
//                             animation: "spin 1s linear infinite",
//                           }}
//                         ></div>
//                         Calculating...
//                       </>
//                     ) : (
//                       <>
//                         <BarChart3 size={16} />
//                         Calculate Savings
//                       </>
//                     )}
//                   </button>

//                   {results && (
//                     <button
//                       className="cta-main bg-color"
//                       onClick={clearCalculation}
//                       style={{
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         gap: "8px",
//                       }}
//                     >
//                       <Calculator size={16} />
//                       New Calculation
//                     </button>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* Results Card */}
//             <div
//               className="pricing-cards last"
//               style={{ position: "relative" }}
//             >
//               <div className="plan-header">
//                 <div className="plan-name-wrap">
//                   <div className="plan-title">
//                     {results ? (
//                       <CheckCircle
//                         className="icon-plan"
//                         style={{ color: "var(--accent)" }}
//                       />
//                     ) : (
//                       <BarChart3 className="icon-plan" />
//                     )}
//                     <div className="text-h6">Calculation Results</div>
//                   </div>
//                   <div className="text-small">
//                     {results
//                       ? "Your potential savings with GFRP rebar"
//                       : "Results will appear here after calculation"}
//                   </div>
//                 </div>
//                 <div className="section-divider plan-divider semi-light-divider-plan"></div>
//               </div>

//               {results ? (
//                 <div className="check-list" style={{ gap: "16px" }}>
//                   {/* Weight Analysis */}
//                   <div style={{ marginBottom: "16px" }}>
//                     <div
//                       className="label text-semi-light"
//                       style={{ marginBottom: "12px" }}
//                     >
//                       Weight Analysis
//                     </div>
//                     <div
//                       style={{
//                         display: "flex",
//                         flexDirection: "column",
//                         gap: "8px",
//                       }}
//                     >
//                       <div className="check-wrap">
//                         <div className="check-icon-wrap">
//                           <Activity size={14} />
//                         </div>
//                         <div className="text-body">
//                           <strong>TMT Total Weight:</strong>{" "}
//                           {results.tmtWeight.toFixed(0)} kg
//                         </div>
//                       </div>
//                       <div className="check-wrap">
//                         <div className="check-icon-wrap">
//                           <Activity size={14} />
//                         </div>
//                         <div className="text-body">
//                           <strong>Hybrid Total Weight:</strong>{" "}
//                           {results.gfrpWeight.toFixed(0)} kg
//                         </div>
//                       </div>
//                       <div className="check-wrap">
//                         <div
//                           className="check-icon-wrap"
//                           style={{
//                             backgroundColor: "var(--accent)",
//                             color: "var(--dark)",
//                           }}
//                         >
//                           <CheckCircle size={14} />
//                         </div>
//                         <div className="text-body">
//                           <strong>Weight Reduction:</strong>{" "}
//                           <span
//                             style={{
//                               color: "var(--accent)",
//                               fontWeight: "bold",
//                             }}
//                           >
//                             {results.weightReduction.toFixed(1)}%
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="section-divider plan-divider-2 semi-light-divider-plan"></div>

//                   {/* Cost Analysis */}
//                   <div style={{ marginBottom: "16px" }}>
//                     <div
//                       className="label text-semi-light"
//                       style={{ marginBottom: "12px" }}
//                     >
//                       Cost Analysis
//                     </div>
//                     <div
//                       style={{
//                         display: "flex",
//                         flexDirection: "column",
//                         gap: "8px",
//                       }}
//                     >
//                       <div className="check-wrap">
//                         <div className="check-icon-wrap">
//                           <DollarSign size={14} />
//                         </div>
//                         <div className="text-body">
//                           <strong>TMT Total Cost:</strong> ₹
//                           {results.tmtTotalCost.toLocaleString()}
//                         </div>
//                       </div>
//                       <div className="check-wrap">
//                         <div className="check-icon-wrap">
//                           <DollarSign size={14} />
//                         </div>
//                         <div className="text-body">
//                           <strong>Hybrid Total Cost:</strong> ₹
//                           {results.gfrpTotalCost.toLocaleString()}
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="section-divider plan-divider-2 semi-light-divider-plan"></div>

//                   {/* Savings Highlight */}
//                   <div
//                     style={{
//                       backgroundColor: "var(--accent)",
//                       borderRadius: "var(--radius--small)",
//                       padding: "16px",
//                       textAlign: "center",
//                       marginBottom: "16px",
//                     }}
//                   >
//                     <div
//                       className="text-h6"
//                       style={{ color: "var(--dark)", marginBottom: "4px" }}
//                     >
//                       <strong>Total Savings</strong>
//                     </div>
//                     <div
//                       className="text-h4"
//                       style={{ color: "var(--dark)", marginBottom: "4px" }}
//                     >
//                       ₹{results.savings.toLocaleString()}
//                     </div>
//                     <div
//                       className="text-small"
//                       style={{ color: "var(--semi-transparent-dark)" }}
//                     >
//                       {results.savingsPercentage.toFixed(1)}% cost reduction
//                     </div>
//                   </div>

//                   {/* Additional Benefits */}
//                   <div>
//                     <div
//                       className="label text-semi-light"
//                       style={{ marginBottom: "12px" }}
//                     >
//                       Additional Benefits
//                     </div>
//                     <div
//                       style={{
//                         display: "flex",
//                         flexDirection: "column",
//                         gap: "8px",
//                       }}
//                     >
//                       <div className="check-wrap">
//                         <Wrench
//                           className="icon-plan"
//                           style={{ color: "var(--accent)" }}
//                         />
//                         <div className="text-small">
//                           Reduced transportation costs
//                         </div>
//                       </div>
//                       <div className="check-wrap">
//                         <Activity
//                           className="icon-plan"
//                           style={{ color: "var(--accent)" }}
//                         />
//                         <div className="text-small">
//                           Faster installation process
//                         </div>
//                       </div>
//                       <div className="check-wrap">
//                         <CheckCircle
//                           className="icon-plan"
//                           style={{ color: "var(--accent)" }}
//                         />
//                         <div className="text-small">
//                           Long-term maintenance savings
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ) : (
//                 <div className="check-list">
//                   <div style={{ textAlign: "center", padding: "40px 20px" }}>
//                     <div
//                       style={{
//                         width: "64px",
//                         height: "64px",
//                         borderRadius: "50%",
//                         backgroundColor: "var(--bg)",
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         margin: "0 auto 16px",
//                       }}
//                     >
//                       <Calculator size={24} style={{ opacity: 0.5 }} />
//                     </div>
//                     <div
//                       className="text-body"
//                       style={{ marginBottom: "16px", opacity: 0.8 }}
//                     >
//                       Fill in the project details and click "Calculate Savings"
//                       to see your potential benefits.
//                     </div>
//                   </div>

//                   <div className="section-divider plan-divider-2 semi-light-divider-plan"></div>

//                   <div
//                     className="label text-semi-light"
//                     style={{ marginBottom: "12px" }}
//                   >
//                     What You'll Get:
//                   </div>
//                   <div
//                     style={{
//                       display: "flex",
//                       flexDirection: "column",
//                       gap: "8px",
//                     }}
//                   >
//                     <div className="check-wrap">
//                       <Activity className="icon-plan" />
//                       <div className="text-body">Weight reduction analysis</div>
//                     </div>
//                     <div className="check-wrap">
//                       <DollarSign className="icon-plan" />
//                       <div className="text-body">Detailed cost comparison</div>
//                     </div>
//                     <div className="check-wrap">
//                       <Wrench className="icon-plan" />
//                       <div className="text-body">
//                         Installation and maintenance benefits
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Calculators;

import React, { useEffect, useState } from "react";
import {
  Calculator,
  DollarSign,
  Activity,
  Wrench,
  BarChart3,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Weight,
  Zap,
} from "lucide-react";

interface CalculatorInputs {
  constructionType: string;
  builtUpArea: number;
  floorArea: number;
  replacementPercentage: number;
  tmtCost: number;
  gfrpCost: number;
}

interface CalculationResults {
  tmtWeight: number;
  gfrpWeight: number;
  tmtTotalCost: number;
  gfrpTotalCost: number;
  savings: number;
  savingsPercentage: number;
  weightReduction: number;
}

const Calculators: React.FC = () => {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    constructionType: "",
    builtUpArea: 0,
    floorArea: 0,
    replacementPercentage: 100,
    tmtCost: 0,
    gfrpCost: 0,
  });

  const [results, setResults] = useState<CalculationResults | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const constructionTypes = [
    "Residential Building",
    "Commercial Building",
    "Industrial Structure",
    "Bridge/Infrastructure",
    "Marine Structure",
    "High-rise Building",
  ];

  const calculateRebarWeight = (area: number, type: string): number => {
    const weightFactors: { [key: string]: number } = {
      "Residential Building": 8,
      "Commercial Building": 12,
      "Industrial Structure": 15,
      "Bridge/Infrastructure": 20,
      "Marine Structure": 18,
      "High-rise Building": 16,
    };
    return area * (weightFactors[type] || 10);
  };

  const handleInputChange = (
    field: keyof CalculatorInputs,
    value: string | number
  ) => {
    setInputs((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const calculateSavings = async () => {
    if (
      !inputs.constructionType ||
      !inputs.builtUpArea ||
      !inputs.tmtCost ||
      !inputs.gfrpCost
    ) {
      alert("Please fill in all required fields");
      return;
    }

    setIsCalculating(true);

    // Simulate calculation delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 800));

    const totalArea = inputs.builtUpArea + inputs.floorArea;
    const tmtWeight = calculateRebarWeight(totalArea, inputs.constructionType);
    const replacementFactor = inputs.replacementPercentage / 100;

    const tmtTotalCost = tmtWeight * inputs.tmtCost;
    const gfrpReplacementWeight = tmtWeight * replacementFactor * 0.2;
    const remainingTmtWeight = tmtWeight * (1 - replacementFactor);
    const gfrpTotalCost =
      gfrpReplacementWeight * inputs.gfrpCost +
      remainingTmtWeight * inputs.tmtCost;

    const savings = tmtTotalCost - gfrpTotalCost;
    const savingsPercentage = (savings / tmtTotalCost) * 100;
    const weightReduction =
      ((tmtWeight - (gfrpReplacementWeight + remainingTmtWeight)) / tmtWeight) *
      100;

    setResults({
      tmtWeight,
      gfrpWeight: gfrpReplacementWeight + remainingTmtWeight,
      tmtTotalCost,
      gfrpTotalCost,
      savings,
      savingsPercentage,
      weightReduction,
    });

    setIsCalculating(false);
  };

  const clearCalculation = () => {
    setResults(null);
    setInputs({
      constructionType: "",
      builtUpArea: 0,
      floorArea: 0,
      replacementPercentage: 100,
      tmtCost: 0,
      gfrpCost: 0,
    });
  };

  const isFormValid =
    inputs.constructionType &&
    inputs.builtUpArea &&
    inputs.tmtCost &&
    inputs.gfrpCost;

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };

      handleResize(); // set initially
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }, []);

    const gridStyle = {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gridColumnGap: "32px",
      gridRowGap: "32px",
      width: "100%",
      alignItems: "flex-start",
    };

  return (
    <div className="main-container" id="calculator">
      <div className="section-divider"></div>
      <div className="section">
        {/* Centered Hero Section */}
        <div className="headline-pricing">
          <div className="text-h2">GFRP Rebar Calculator</div>
          <div
            className="text-body"
            style={{ maxWidth: "600px", textAlign: "center" }}
          >
            Calculate potential savings and weight reduction by switching from
            TMT to GFRP rebar for your construction project
          </div>
        </div>

        {/* Centered Two-Column Layout with Fixed Width */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div style={gridStyle}>
            {/* Calculator Card - Fixed Width */}
            <div
              className="pricing-cards"
              style={{
                width: "100%",
                minHeight: "600px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div className="plan-header">
                <div className="plan-name-wrap">
                  <div className="plan-title">
                    <Calculator className="icon-plan" />
                    <div className="text-h6">Project Calculator</div>
                  </div>
                  <div className="text-small" style={{ opacity: 0.8 }}>
                    Enter your project details to calculate potential savings
                  </div>
                </div>
                <div className="section-divider plan-divider"></div>
              </div>

              <div
                className="plan-bottom-tile"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  flex: 1,
                }}
              >
                {/* Project Information Section */}
                <div>
                  <div
                    className="label text-semi-dark"
                    style={{ marginBottom: "12px" }}
                  >
                    {/* <Activity
                      className="icon-plan"
                      style={{ marginRight: "8px", display: "inline" }}
                    /> */}
                    Project Information
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "16px",
                    }}
                  >
                    <div className="contact-input-wrap">
                      <label
                        className="text-small"
                        style={{ fontWeight: "500" }}
                      >
                        Construction Type{" "}
                        <span style={{ color: "red" }}>*</span>
                      </label>
                      <select
                        className="text-field"
                        value={inputs.constructionType}
                        onChange={(e) =>
                          handleInputChange("constructionType", e.target.value)
                        }
                        style={{
                          backgroundColor: inputs.constructionType
                            ? "var(--bg)"
                            : "var(--light)",
                          transition: "background-color 0.2s",
                        }}
                      >
                        <option value="">Select Construction Type</option>
                        {constructionTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="input-halves">
                      <div className="contact-input-wrap">
                        <label
                          className="text-small"
                          style={{ fontWeight: "500" }}
                        >
                          Built-up Area (sq ft){" "}
                          <span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          type="number"
                          className="text-field"
                          value={inputs.builtUpArea || ""}
                          onChange={(e) =>
                            handleInputChange(
                              "builtUpArea",
                              parseFloat(e.target.value) || 0
                            )
                          }
                          placeholder="e.g., 2000"
                          min="0"
                        />
                      </div>

                      <div className="contact-input-wrap">
                        <label
                          className="text-small"
                          style={{ fontWeight: "500" }}
                        >
                          Floor Area (sq ft)
                        </label>
                        <input
                          type="number"
                          className="text-field"
                          value={inputs.floorArea || ""}
                          onChange={(e) =>
                            handleInputChange(
                              "floorArea",
                              parseFloat(e.target.value) || 0
                            )
                          }
                          placeholder="e.g., 500"
                          min="0"
                        />
                      </div>
                    </div>

                    <div className="contact-input-wrap">
                      <label
                        className="text-small"
                        style={{ fontWeight: "500", marginBottom: "8px" }}
                      >
                        TMT Rebar Replacement: {inputs.replacementPercentage}%
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={inputs.replacementPercentage}
                        onChange={(e) =>
                          handleInputChange(
                            "replacementPercentage",
                            parseInt(e.target.value)
                          )
                        }
                        style={{
                          width: "100%",
                          height: "6px",
                          borderRadius: "3px",
                          background: `linear-gradient(to right, var(--accent) 0%, var(--accent) ${inputs.replacementPercentage}%, var(--border-dark) ${inputs.replacementPercentage}%, var(--border-dark) 100%)`,
                          outline: "none",
                          marginBottom: "8px",
                        }}
                      />
                      <div
                        className="text-small"
                        style={{ opacity: 0.7, textAlign: "center" }}
                      >
                        {inputs.replacementPercentage < 25 &&
                          "Minimal replacement"}
                        {inputs.replacementPercentage >= 25 &&
                          inputs.replacementPercentage < 75 &&
                          "Partial replacement"}
                        {inputs.replacementPercentage >= 75 &&
                          "Full replacement"}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="section-divider plan-divider-2"></div>

                {/* Cost Information Section */}
                <div>
                  <div
                    className="label text-semi-dark"
                    style={{ marginBottom: "12px" }}
                  >
                    {/* <DollarSign
                      className="icon-plan"
                      style={{ marginRight: "8px", display: "inline" }}
                    /> */}
                    Cost Information
                  </div>

                  <div className="input-halves">
                    <div className="contact-input-wrap">
                      <label
                        className="text-small"
                        style={{ fontWeight: "500" }}
                      >
                        TMT Cost per kg (₹){" "}
                        <span style={{ color: "red" }}>*</span>
                      </label>
                      <input
                        type="number"
                        className="text-field"
                        value={inputs.tmtCost || ""}
                        onChange={(e) =>
                          handleInputChange(
                            "tmtCost",
                            parseFloat(e.target.value) || 0
                          )
                        }
                        placeholder="e.g., 75"
                        min="0"
                        step="0.01"
                      />
                    </div>

                    <div className="contact-input-wrap">
                      <label
                        className="text-small"
                        style={{ fontWeight: "500" }}
                      >
                        GFRP Cost per kg (₹){" "}
                        <span style={{ color: "red" }}>*</span>
                      </label>
                      <input
                        type="number"
                        className="text-field"
                        value={inputs.gfrpCost || ""}
                        onChange={(e) =>
                          handleInputChange(
                            "gfrpCost",
                            parseFloat(e.target.value) || 0
                          )
                        }
                        placeholder="e.g., 180"
                        min="0"
                        step="0.01"
                      />
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div
                  className="plan-button-wrap"
                  style={{ marginTop: "auto", paddingTop: "24px" }}
                >
                  <button
                    className="cta-main"
                    onClick={calculateSavings}
                    disabled={!isFormValid || isCalculating}
                    style={{
                      opacity: !isFormValid || isCalculating ? 0.6 : 1,
                      cursor:
                        !isFormValid || isCalculating
                          ? "not-allowed"
                          : "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                    }}
                  >
                    {isCalculating ? (
                      <>
                        <div
                          style={{
                            width: "16px",
                            height: "16px",
                            border: "2px solid transparent",
                            borderTop: "2px solid currentColor",
                            borderRadius: "50%",
                            animation: "spin 1s linear infinite",
                          }}
                        ></div>
                        Calculating...
                      </>
                    ) : (
                      <>
                        <BarChart3 size={16} />
                        Calculate Savings
                      </>
                    )}
                  </button>

                  {results && (
                    <button
                      className="cta-main bg-color"
                      onClick={clearCalculation}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                      }}
                    >
                      <Calculator size={16} />
                      New Calculation
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Results Card - Fixed Width */}
            {(!isMobile || (isMobile && results)) && (
              <div
                className="pricing-cards last"
                style={{
                  width: "100%",
                  minHeight: "600px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div className="plan-header">
                  <div className="plan-name-wrap">
                    <div className="plan-title">
                      {results ? (
                        <CheckCircle
                          className="icon-plan"
                          style={{ color: "var(--accent)" }}
                        />
                      ) : (
                        <BarChart3 className="icon-plan" />
                      )}
                      <div className="text-h6">Calculation Results</div>
                    </div>
                    <div className="text-small">
                      {results
                        ? "Your potential savings with GFRP rebar"
                        : "Results will appear here after calculation"}
                    </div>
                  </div>
                  <div className="section-divider plan-divider semi-light-divider-plan"></div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    flex: 1,
                  }}
                >
                  {results ? (
                    <>
                      {/* Weight Analysis */}
                      <div>
                        <div
                          className="label text-semi-light"
                          style={{ marginBottom: "12px" }}
                        >
                          Weight Analysis
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "8px",
                          }}
                        >
                          <div className="check-wrap">
                            <div className="check-icon-wrap">
                              <Activity size={14} />
                            </div>
                            <div className="text-body">
                              <strong>TMT Total Weight:</strong>{" "}
                              {results.tmtWeight.toFixed(0)} kg
                            </div>
                          </div>
                          <div className="check-wrap">
                            <div className="check-icon-wrap">
                              <Activity size={14} />
                            </div>
                            <div className="text-body">
                              <strong>Hybrid Total Weight:</strong>{" "}
                              {results.gfrpWeight.toFixed(0)} kg
                            </div>
                          </div>
                          <div className="check-wrap">
                            <div
                              className="check-icon-wrap"
                              style={{
                                backgroundColor: "var(--accent)",
                                color: "var(--dark)",
                              }}
                            >
                              <CheckCircle size={14} />
                            </div>
                            <div className="text-body">
                              <strong>Weight Reduction:</strong>{" "}
                              <span
                                style={{
                                  color: "var(--accent)",
                                  fontWeight: "bold",
                                }}
                              >
                                {results.weightReduction.toFixed(1)}%
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="section-divider plan-divider-2 semi-light-divider-plan"></div>

                      {/* Cost Analysis */}
                      <div>
                        <div
                          className="label text-semi-light"
                          style={{ marginBottom: "12px" }}
                        >
                          Cost Analysis
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "8px",
                          }}
                        >
                          <div className="check-wrap">
                            <div className="check-icon-wrap">
                              <DollarSign size={14} />
                            </div>
                            <div className="text-body">
                              <strong>TMT Total Cost:</strong> ₹
                              {results.tmtTotalCost.toLocaleString()}
                            </div>
                          </div>
                          <div className="check-wrap">
                            <div className="check-icon-wrap">
                              <DollarSign size={14} />
                            </div>
                            <div className="text-body">
                              <strong>Hybrid Total Cost:</strong> ₹
                              {results.gfrpTotalCost.toLocaleString()}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="section-divider plan-divider-2 semi-light-divider-plan"></div>

                      {/* Savings Highlight */}
                      <div
                        style={{
                          backgroundColor: "var(--accent)",
                          borderRadius: "var(--radius--small)",
                          padding: "16px",
                          textAlign: "center",
                        }}
                      >
                        <div
                          className="text-h6"
                          style={{ color: "var(--dark)", marginBottom: "4px" }}
                        >
                          <strong>Total Savings</strong>
                        </div>
                        <div
                          className="text-h4"
                          style={{ color: "var(--dark)", marginBottom: "4px" }}
                        >
                          ₹{results.savings.toLocaleString()}
                        </div>
                        <div
                          className="text-small"
                          style={{ color: "var(--semi-transparent-dark)" }}
                        >
                          {results.savingsPercentage.toFixed(1)}% cost reduction
                        </div>
                      </div>

                      {/* Additional Benefits */}
                      <div style={{ marginTop: "auto" }}>
                        <div
                          className="label text-semi-light"
                          style={{ marginBottom: "12px" }}
                        >
                          Additional Benefits
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "8px",
                          }}
                        >
                          <div className="check-wrap">
                            <Wrench
                              className="icon-plan"
                              style={{ color: "var(--accent)" }}
                            />
                            <div className="text-small">
                              Reduced transportation costs
                            </div>
                          </div>
                          <div className="check-wrap">
                            <Activity
                              className="icon-plan"
                              style={{ color: "var(--accent)" }}
                            />
                            <div className="text-small">
                              Faster installation process
                            </div>
                          </div>
                          <div className="check-wrap">
                            <CheckCircle
                              className="icon-plan"
                              style={{ color: "var(--accent)" }}
                            />
                            <div className="text-small">
                              Long-term maintenance savings
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div
                        style={{
                          textAlign: "center",
                          padding: "40px 20px",
                          flex: 1,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                        }}
                      >
                        <div
                          style={{
                            width: "64px",
                            height: "64px",
                            borderRadius: "50%",
                            backgroundColor: "var(--bg)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            margin: "0 auto 16px",
                          }}
                        >
                          <Calculator size={24} style={{ opacity: 0.5 }} />
                        </div>
                        <div
                          className="text-body"
                          style={{ marginBottom: "16px", opacity: 0.8 }}
                        >
                          Fill in the project details and click "Calculate
                          Savings" to see your potential benefits.
                        </div>
                      </div>

                      <div className="section-divider plan-divider-2 semi-light-divider-plan"></div>

                      <div style={{ marginTop: "auto" }}>
                        <div
                          className="label text-semi-light"
                          style={{ marginBottom: "12px" }}
                        >
                          What You'll Get:
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "8px",
                          }}
                        >
                          <div className="check-wrap">
                            <Activity className="icon-plan" />
                            <div className="text-body">
                              Weight reduction analysis
                            </div>
                          </div>
                          <div className="check-wrap">
                            <DollarSign className="icon-plan" />
                            <div className="text-body">
                              Detailed cost comparison
                            </div>
                          </div>
                          <div className="check-wrap">
                            <Wrench className="icon-plan" />
                            <div className="text-body">
                              Installation and maintenance benefits
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculators;

