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
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div 
              whileInView={{ opacity:1, x: 0 }}
              initial={{ opacity:0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 p-4 flex justify-center"
            >
              <img 
                className="mb-6 rounded w-64 h-64 md:w-72 md:h-72 lg:w-48 lg:h-48 object-cover"
                src={project.image} 
                alt={project.title} 
              />
            </motion.div>
            <motion.div 
              whileInView={{ opacity:1, x: 0 }}
              initial={{ opacity:0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-2xl lg:w-3/4 p-4"
            >
              <h6 className="mb-2 text-lg md:text-xl lg:text-2xl font-semibold">
                {project.title}
              </h6>
              <p className="mb-4 text-sm md:text-base lg:text-lg text-neutral-400">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs md:text-sm rounded bg-neutral-900 px-2 py-1 font-medium text-purple-900"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects