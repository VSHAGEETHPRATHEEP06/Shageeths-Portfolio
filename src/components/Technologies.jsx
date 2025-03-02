// import React from 'react'
// import { RiReactjsLine } from "react-icons/ri";
// import { TbBrandNextjs } from "react-icons/tb";
// import { SiMongodb } from "react-icons/si";
// import { DiRedis } from "react-icons/di";
// import { FaNodeJs } from "react-icons/fa";
// import { BiLogoPostgresql } from "react-icons/bi";
// import { motion } from "framer-motion"

// const iconVariants = (duration) => ({
//   initial: { y: -10 },
//   animate: {
//     y: [10, -10],
//     transition: {
//       duration: duration,
//       ease: "linear",
//       repeat: Infinity,
//       repeatType: "reverse",
//     },
//   },
// });

// function Technologies() {
//   return (
//     <div id="technologies" className="border-b border-neutral-800 py-12 md:py-24">
//       <motion.h1 
//         whileInView={{ opacity: 1, y: 0 }}
//         initial={{ opacity: 0, y: -100 }}
//         transition={{ duration: 1.5 }}
//         className="my-12 md:my-20 text-center text-3xl md:text-4xl lg:text-5xl"
//       >
//         Technologies
//       </motion.h1>
//       <motion.div 
//         whileInView={{ opacity: 1, x: 0 }}
//         initial={{ opacity: 0, x: -100 }}
//         transition={{ duration: 1.5 }}
//         className="flex flex-wrap items-center justify-center gap-4 md:gap-8 lg:gap-12"
//       >
//         {[
//           { icon: RiReactjsLine, color: "text-cyan-400" },
//           { icon: TbBrandNextjs, color: "text-neutral-100" },
//           { icon: SiMongodb, color: "text-green-500" },
//           { icon: DiRedis, color: "text-red-700" },
//           { icon: FaNodeJs, color: "text-green-500" },
//           { icon: BiLogoPostgresql, color: "text-sky-700" },
//         ].map((tech, index) => (
//           <motion.div 
//             key={index}
//             variants={iconVariants(2.5 + index * 0.5)}
//             initial="initial"
//             animate="animate"
//             className="rounded-lg md:rounded-2xl border-2 md:border-4 border-neutral-800 p-2 md:p-4"
//           >
//             <tech.icon className={`text-4xl md:text-5xl lg:text-7xl ${tech.color}`} />
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   )
// }

// export default Technologies




import React from 'react'
import { RiReactjsLine } from "react-icons/ri"
import { TbBrandNextjs } from "react-icons/tb"
import { SiMongodb } from "react-icons/si"
import { DiRedis } from "react-icons/di"
import { FaNodeJs } from "react-icons/fa"
import { BiLogoPostgresql } from "react-icons/bi"
import { motion } from "framer-motion"

const technologies = [
  { icon: RiReactjsLine, name: "React", color: "text-cyan-400" },
  { icon: TbBrandNextjs, name: "Next.js", color: "text-neutral-100" },
  { icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
  { icon: DiRedis, name: "Redis", color: "text-red-500" },
  { icon: FaNodeJs, name: "Node.js", color: "text-green-600" },
  { icon: BiLogoPostgresql, name: "PostgreSQL", color: "text-sky-600" },
]

function Technologies() {
  return (
    <div id="technologies" className="border-b border-neutral-800 pb-12 md:pb-24">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      >

        <motion.h1 
          className="my-12 md:my-20 text-center text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent pb-2 overflow-visible"
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          Technologies
        </motion.h1>
      </motion.div>

      <div className="py-5 max-w-7xl mx-auto px-4">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 20 },
                visible: { 
                  opacity: 1, 
                  scale: 1,
                  y: 0,
                  transition: { 
                    type: "spring",
                    stiffness: 300,
                    delay: index * 0.1,
                  }
                }
              }}
              className="relative group"
            >
              {/* Parallax Card Container */}
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  rotateZ: 5,
                  rotateX: 5,
                  translateZ: 20
                }}
                whileInView={{
                  opacity: 1,
                  rotateY: 0,
                  transition: { 
                    duration: 0.6, 
                    delay: index * 0.2 
                  }
                }}
                initial={{ 
                  opacity: 0,
                  rotateY: 45
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="rounded-xl bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 p-4 md:p-6 cursor-pointer shadow-xl hover:shadow-cyan-500/20 transition-all"
              >
                {/* Floating Icon with Scroll Animation */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ 
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: "easeOut"
                  }}
                  className="flex justify-center"
                >
                  <tech.icon className={`text-4xl md:text-5xl lg:text-6xl ${tech.color}`} />
                </motion.div>

                {/* Scroll-Activated Tooltip */}
                <motion.div
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 rounded-md bg-neutral-900 border border-neutral-800 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <span className="whitespace-nowrap text-neutral-300">
                    {tech.name}
                  </span>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-2 h-2 bg-neutral-900 border-b border-r border-neutral-800 rotate-45" />
                </motion.div>
              </motion.div>

              {/* Mobile Label with Scroll Animation */}
              <motion.div
                className="md:hidden mt-2 text-center text-sm text-neutral-500 font-medium"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 + 0.3 }}
              >
                {tech.name}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Background Scrolling Elements */}
        <motion.div 
          className="absolute left-0 -bottom-24 w-full h-24 bg-gradient-to-t from-neutral-900 to-transparent opacity-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  )
}

export default Technologies