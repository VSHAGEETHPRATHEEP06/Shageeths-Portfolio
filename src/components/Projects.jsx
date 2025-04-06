import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from "framer-motion"

function Projects() {
  return (
    <div id="projects" className="border-b border-neutral-900 pb-4">
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-12 md:my-20 text-center text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent pb-2 overflow-visible"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-12 lg:mb-16">
            <motion.div 
              whileInView={{ opacity:1, y: 0 }}
              initial={{ opacity:0, y: 50 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center"
            >
              <div className="w-full lg:w-1/4 p-4 flex justify-center mb-6 lg:mb-0">
                <img 
                  className="rounded-xl w-64 h-64 md:w-72 md:h-72 lg:w-48 lg:h-48 object-cover shadow-lg hover:shadow-cyan-500/20 transition-shadow duration-300"
                  src={project.image} 
                  alt={project.title} 
                />
              </div>
              <div className="w-full lg:w-3/4 p-4 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
                <h6 className="mb-3 text-xl md:text-2xl lg:text-2xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent inline-block">
                  {project.title}
                </h6>
                <p className="mb-4 text-sm md:text-base text-neutral-400 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs md:text-sm rounded-full bg-neutral-800/80 px-3 py-1 font-medium text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects