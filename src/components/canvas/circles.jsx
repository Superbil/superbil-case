import React from "react";
import "../../style/components/circles.css";

function Circles() {
  return (
    <div id="Circles">
      <div className="circle" />
    </div>
  );
}

// function Circles() {
//   return (
//     <div id="Circles">
//       <svg width="500" height="300">
//         <g filter="url(#Blur)" fill="url(#linearGradient-1)">
//           <circle className="cricle2" r="50" cx="400" cy="150" />
//           <circle className="circle1" r="50" cx="100" cy="150" />
//         </g>
//         <defs>
//           <linearGradient
//             x1="92.5622228%"
//             y1="23.9611449%"
//             x2="11.4449801%"
//             y2="64.6522042%"
//             id="linearGradient-1"
//           >
//             <stop stop-color="#2271E5" offset="0%" />
//             <stop stop-color="#109BC8" offset="53.9869161%" />
//             <stop stop-color="#0F9EC7" offset="100%" />
//           </linearGradient>

//           <filter id="Blur">
//             <feGaussianBlur
//               in="SourceGraphic"
//               stdDeviation="12"
//               result="blur"
//             />
//             <feColorMatrix
//               in="blur"
//               mode="matrix"
//               values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 19 -7"
//               result="goo"
//             />
//           </filter>
//         </defs>
//       </svg>
//     </div>
//   );
// }

export default Circles;
