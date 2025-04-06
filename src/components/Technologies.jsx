import React from 'react'
import { motion } from "framer-motion"
import { SiCplusplus, SiPython, SiJavascript, SiSpringboot, SiReact, SiDotnet, SiNextdotjs, SiNodedotjs, SiMysql, SiPostgresql, SiAndroidstudio, SiGit, SiIntellijidea, SiDocker, SiFigma } from "react-icons/si"
import { DiJava } from "react-icons/di"
import { FaAws } from "react-icons/fa"
import { VscCode } from "react-icons/vsc"

const technologies = {
  languages: [
    { icon: SiCplusplus, name: "C++", color: "text-blue-500" },
    { icon: SiPython, name: "Python", color: "text-yellow-500" },
    { icon: DiJava, name: "Java", color: "text-red-500" },
    { icon: SiJavascript, name: "JavaScript", color: "text-yellow-400" },
  ],
  devTools: [
    { icon: VscCode, name: "VS Code", color: "text-blue-500" },
    { icon: SiIntellijidea, name: "IntelliJ", color: "text-pink-500" },
    { icon: SiGit, name: "Git", color: "text-orange-500" },
    { icon: SiAndroidstudio, name: "Android Studio", color: "text-green-500" },
    { icon: SiDocker, name: "Docker", color: "text-blue-400" },
    { icon: SiFigma, name: "Figma", color: "text-purple-400" },
    { icon: FaAws, name: "AWS", color: "text-orange-400" },
  ],
  frameworks: [
    { icon: SiSpringboot, name: "Spring Boot", color: "text-green-500" },
    { icon: SiReact, name: "React", color: "text-cyan-400" },
    { icon: SiDotnet, name: ".NET", color: "text-purple-500" },
    { icon: SiReact, name: "MERN Stack", color: "text-blue-400" },
    { icon: SiNextdotjs, name: "Next.js", color: "text-neutral-100" },
    { icon: SiNodedotjs, name: "Node.js", color: "text-green-600" },
    { icon: SiMysql, name: "MySQL", color: "text-blue-600" },
    { icon: SiPostgresql, name: "PostgreSQL", color: "text-sky-600" },
  ]
}

function Technologies() {
  return (
    <div id="technologies" className="relative border-b border-neutral-800 pb-12 md:pb-24">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="overflow-hidden"
      >
        <motion.h1 
          className="my-12 md:my-20 text-center text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent pb-2 overflow-visible"
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
        >
          Technologies
        </motion.h1>

        {/* Categories */}
        <div className="max-w-7xl mx-auto px-4 space-y-12">
          {/* Languages */}
          <div className="space-y-6">
            <motion.h2 
              className="text-center md:text-left text-xl md:text-2xl font-medium text-neutral-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Languages
            </motion.h2>
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {technologies.languages.map((tech, index) => (
                <TechItem key={tech.name} tech={tech} index={index} />
              ))}
            </motion.div>
          </div>

          {/* Developer Tools */}
          <div className="space-y-6">
            <motion.h2 
              className="text-center md:text-left text-xl md:text-2xl font-medium text-neutral-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Developer Tools
            </motion.h2>
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {technologies.devTools.map((tech, index) => (
                <TechItem key={tech.name} tech={tech} index={index} />
              ))}
            </motion.div>
          </div>

          {/* Frameworks & Technologies */}
          <div className="space-y-6">
            <motion.h2 
              className="text-center md:text-left text-xl md:text-2xl font-medium text-neutral-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Technologies & Frameworks
            </motion.h2>
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {technologies.frameworks.map((tech, index) => (
                <TechItem key={tech.name} tech={tech} index={index} />
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

// Reusable tech item component
function TechItem({ tech, index }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.8, y: 20 },
        visible: { 
          opacity: 1, 
          scale: 1,
          y: 0,
        }
      }}
      transition={{ 
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: index * 0.05
      }}
      whileHover={{ scale: 1.05 }}
      className="group relative"
    >
      {/* Hover tooltip for desktop */}
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-neutral-800 text-white px-3 py-1.5 rounded text-sm font-medium pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-10 whitespace-nowrap hidden md:block">
        {tech.name}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-2 h-2 bg-neutral-800 rotate-45"></div>
      </div>
      
      <div className="rounded-xl bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 p-4 md:p-5 cursor-pointer shadow-md hover:shadow-cyan-500/20 hover:border-cyan-500/30 transition-all duration-300">
        <div className="flex flex-col items-center space-y-3">
          <tech.icon className={`text-2xl md:text-3xl ${tech.color}`} />
          <span className="text-xs md:text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors text-center md:hidden">
            {tech.name}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default Technologies