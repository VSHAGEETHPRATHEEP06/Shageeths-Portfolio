// import React from 'react'
// import aboutImg from "../assets/about.png"
// import { ABOUT_TEXT } from '../constants'
// import { motion } from "framer-motion"
// import { FiCode, FiSmartphone, FiDatabase, FiZap } from 'react-icons/fi'

// function About() {
//   const features = [
//     { title: "Full-Stack", icon: <FiCode />, count: "3+ Projects" },
//     { title: "Mobile First", icon: <FiSmartphone />, count: "100% Responsive" },
//     { title: "Database", icon: <FiDatabase />, count: "4+ Systems" },
//     { title: "Performance", icon: <FiZap />, count: "<100ms" }
//   ]

//   return (
//     <div id="about" className="border-b border-neutral-900 pb-12 md:pb-24">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div 
//           className="grid lg:grid-cols-2 gap-8 xl:gap-16 items-center"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//         >
//           {/* Image Section */}
//           <motion.div
//             className="relative group"
//             variants={{
//               hidden: { opacity: 0, scale: 0.9 },
//               visible: { opacity: 1, scale: 1 }
//             }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <div className="absolute -inset-2 bg-gradient-to-br from-cyan-400/10 via-purple-500/10 to-pink-500/10 blur-2xl rounded-3xl" />
//             <motion.img
//               whileInView={{ opacity: 1, y: 0 }}
//               initial={{ opacity: 0, y: -100 }}
//               transition={{ duration: 1.5 }} 
//               className="rounded-2xl w-full h-auto object-cover shadow-2xl 
//                         border-4 border-neutral-800/50 hover:border-cyan-500/30
//                         transition-all duration-300 cursor-pointer"
//               src={aboutImg} 
//               alt="About visual"
//               whileHover={{ y: -5 }}
//             />
//           </motion.div>

//           {/* Content Section */}
//           <motion.div
//             className="space-y-6"
//             variants={{
//               hidden: { opacity: 0, x: 50 },
//               visible: { opacity: 1, x: 0 }
//             }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//           >
//             <div className="mb-8">
//               <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
//                 Development Expertise
//               </h2>
//               <motion.div
//                 className="h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mt-2"
//                 initial={{ scaleX: 0 }}
//                 whileInView={{ scaleX: 1 }}
//                 transition={{ duration: 0.8, delay: 0.6 }}
//               />
//             </div>

//             <div className="relative">
//               <p className="text-base md:text-lg leading-relaxed md:leading-loose text-neutral-400">
//                 {ABOUT_TEXT}
//               </p>
//             </div>

//             {/* Interactive Features Grid */}
//             <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3 md:gap-4">
//               {features.map((feature, index) => (
//                 <motion.div
//                   key={index}
//                   whileHover={{ y: -5 }}
//                   whileTap={{ scale: 0.98 }}
//                   className="p-3 md:p-4 rounded-xl bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 hover:border-cyan-500/30 transition-all group"
//                   variants={{
//                     hidden: { opacity: 0, y: 20 },
//                     visible: { opacity: 1, y: 0 }
//                   }}
//                   transition={{ delay: 0.6 + index * 0.1 }}
//                 >
//                   <div className="flex items-center gap-3">
//                     <span className="text-cyan-400 text-xl md:text-2xl">
//                       {feature.icon}
//                     </span>
//                     <div>
//                       <h3 className="text-sm md:text-base font-semibold text-neutral-300">
//                         {feature.title}
//                       </h3>
//                       <p className="text-xs md:text-sm text-neutral-500 mt-1">
//                         {feature.count}
//                       </p>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </div>
//   )
// }

// export default About





import React from 'react'
import aboutImg from "../assets/about.png"
import { ABOUT_TEXT } from '../constants'
import { motion } from "framer-motion"
import { FiCode, FiSmartphone, FiDatabase, FiZap } from 'react-icons/fi'

function About() {
  const features = [
    { title: "Full-Stack", icon: <FiCode />, count: "3+ Projects" },
    { title: "Mobile First", icon: <FiSmartphone />, count: "100% Responsive" },
    { title: "Database", icon: <FiDatabase />, count: "4+ Systems" },
    { title: "Performance", icon: <FiZap />, count: "<100ms" }
  ]

  return (
    <div id="about" className="border-b border-neutral-900 pb-12 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid lg:grid-cols-2 gap-8 xl:gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Image Section with Parallax Effect */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: -50, rotateY: 15 }}
            whileInView={{ 
              opacity: 1, 
              x: 0, 
              rotateY: 0,
              transition: { 
                duration: 0.8, 
                delay: 0.2,
                ease: "easeOut"
              }
            }}
          >
            <motion.div
              className="absolute -inset-2 bg-gradient-to-br from-cyan-400/10 via-purple-500/10 to-pink-500/10 blur-2xl rounded-3xl"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            />
            <motion.img
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: { 
                  duration: 0.8, 
                  delay: 0.3,
                  ease: "easeOut"
                }
              }}
              className="rounded-2xl w-full h-auto object-cover shadow-2xl 
                        border-4 border-neutral-800/50 hover:border-cyan-500/30
                        transition-all duration-300 cursor-pointer"
              src={aboutImg} 
              alt="About visual"
              whileHover={{ y: -5 }}
            />
          </motion.div>

          {/* Content Section with Staggered Animations */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.6,
                  delay: 0.4
                }
              }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Development Expertise
              </h2>
              <motion.div
                className="h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mt-2"
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ 
                  scaleX: 1,
                  transition: { 
                    duration: 0.8, 
                    delay: 0.6,
                    ease: "circOut"
                  }
                }}
              />
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.6,
                  delay: 0.5
                }
              }}
            >
              <p className="text-base md:text-lg leading-relaxed md:leading-loose text-neutral-400">
                {ABOUT_TEXT}
              </p>
            </motion.div>

            {/* Animated Features Grid */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3 md:gap-4"
              initial="hidden"
              whileInView="visible"
            >
              {features.map((feature, index) => (
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
                        delay: index * 0.1 + 0.6
                      }
                    }
                  }}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  className="p-3 md:p-4 rounded-xl bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 hover:border-cyan-500/30 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <motion.span
                      className="text-cyan-400 text-xl md:text-2xl"
                      initial={{ rotate: 45, scale: 0 }}
                      whileInView={{ 
                        rotate: 0, 
                        scale: 1,
                        transition: { 
                          delay: index * 0.1 + 0.7,
                          type: "spring" 
                        }
                      }}
                    >
                      {feature.icon}
                    </motion.span>
                    <div>
                      <h3 className="text-sm md:text-base font-semibold text-neutral-300">
                        {feature.title}
                      </h3>
                      <motion.p
                        className="text-xs md:text-sm text-neutral-500 mt-1"
                        initial={{ x: 10 }}
                        whileInView={{ x: 0 }}
                        transition={{ delay: index * 0.1 + 0.8 }}
                      >
                        {feature.count}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default About