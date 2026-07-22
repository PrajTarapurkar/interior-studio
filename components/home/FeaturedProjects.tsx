// "use client";

// import { motion } from "framer-motion";

// export default function FeaturedProjects() {
//   return (
//     <>
//       {/* FEATURED PROJECTS */}
// <motion.section
//   initial={{ opacity: 0, y: 80 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.8 }}
//   viewport={{ once: false, amount: 0.2 }}
// className="
// bg-black
// text-white
// py-[clamp(4rem,7vw,7rem)]
// px-5
// sm:px-6
// md:px-8
// lg:px-10
// xl:px-12
// 2xl:px-16
// ">
// <div className="max-w-[1440px] mx-auto">
//     {/* HEADING */}
//     <div className="text-center mb-[clamp(3rem,6vw,5rem)]">

//       <p className="uppercase tracking-[0.35em] text-[#d6b98c] text-[clamp(10px,1.3vw,15px)] mb-4">
//         Portfolio
//       </p>

//       <h2 className="leading-[0.95]">
//         <span className="block text-white font-semibold text-[clamp(2.8rem,6vw,5rem)]">
//           Featured
//         </span>

//         <span className="block text-[#d6b98c] font-medium text-[clamp(2.8rem,6vw,5rem)]">
//           Projects
//         </span>
//       </h2>

//       <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-[clamp(1rem,1.8vw,1.2rem)]">
//         Explore our finest residential and commercial interiors
//         crafted with elegance, luxury, and timeless design.
//       </p>

//     </div>

//     {/* PROJECTS GRID */}
//     <div className="grid
// grid-cols-1
// sm:grid-cols-2
// xl:grid-cols-3
// gap-[clamp(1.5rem,2vw,2rem)]">

//       {[1, 2, 3].map((item) => (

//         <motion.div
//           key={item}
// whileHover={{
//   y: -8,
//   scale: 1.015,
// }}          transition={{ duration: 0.3 }}
//           className="
// bg-[#111111]
// rounded-[clamp(22px,2vw,28px)]
// overflow-hidden
// border
// border-white/10
// group
// transform-gpu
// will-change-transform
// "
//         >

//           <div className="overflow-hidden">

//             <img
//               src={`/images/project${item}.jpg`}
//               alt="Project"
//               className="
//                h-[clamp(260px,35vw,420px)]
//                 w-full
//                 object-cover
//                 group-hover:scale-105
//                 transition
//                 duration-700
//               "
//             />

//           </div>

//           <div className="p-[clamp(1.4rem,3vw,2rem)]">

//             <p className="uppercase tracking-[0.25em] text-[#d6b98c] text-[clamp(11px,1vw,13px)] mb-3">
//               Luxury Interior
//             </p>

//             <h3 className="text-[clamp(1.5rem,2.5vw,2rem)] font-bold text-white">

//               {item === 1
//                 ? "Modern Living Room"
//                 : item === 2
//                 ? "Contemporary Bedroom"
//                 : "Luxury Kitchen"}

//             </h3>

//             <p className="mt-4 text-gray-300
// text-[clamp(.95rem,1.4vw,1.05rem)] leading-relaxed">

//               Elegant luxury interiors crafted with timeless aesthetics,
//               premium materials and modern sophistication.

//             </p>

//           </div>

//         </motion.div>

//       ))}

//     </div>

//     {/* BUTTON */}
//     <div className="flex justify-center mt-[clamp(3rem,6vw,5rem)]">

//       <a
//         href="projects"
//         className="
//           inline-flex
//           items-center
//           justify-center
//           gap-3
//           bg-[#d6b98c]
//           text-black
//           px-[clamp(2rem,3vw,2.6rem)]
// py-[clamp(.9rem,2vw,1rem)]
// min-h-[48px]
//           rounded-full
//           font-semibold
//           text-[clamp(1rem,1.5vw,1.1rem)]
//           hover:scale-105
//           hover:bg-[#e4c89b]
//           transition-all
//           duration-300
//           shadow-[0_8px_25px_rgba(214,185,140,0.35)]
//         "
//       >
//         Explore Full Portfolio
//         <span>→</span>
//       </a>

//     </div>

//   </div>
// </motion.section>
//     </>
//   );
// }