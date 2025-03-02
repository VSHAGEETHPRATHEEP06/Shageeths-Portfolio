import React, { useState } from 'react'
import { HERO_CONTENT } from "../constants"
import profilepic from "../assets/Shageeth.jpg"
import cvFile from "../assets/Shageeth_CV.pdf"
import { motion } from "framer-motion"
import { TypeAnimation } from 'react-type-animation'
import { FiDownload, FiLoader } from 'react-icons/fi'

const container = (delay) => ({
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { 
      duration: 0.5, 
      delay: delay,
      ease: "easeOut"
    }
  }
})

const Hero = () => {

  const [rotate, setRotate] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width/2) / 20
    const y = (e.clientY - rect.top - rect.height/2) / 20
    setRotate({ x: -y, y: x })
  }

  const [isDownloading, setIsDownloading] = useState(false)
  
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    if (!projectsSection) return

    const startPosition = window.pageYOffset
    const targetPosition = projectsSection.offsetTop
    const distance = targetPosition - startPosition
    const duration = 1000
    let startTime = null

    const ease = (t) => {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
    }

    const animation = (currentTime) => {
      if (!startTime) startTime = currentTime
      const timeElapsed = currentTime - startTime
      const progress = Math.min(timeElapsed / duration, 1)
      const easedProgress = ease(progress)
      
      window.scrollTo(0, startPosition + distance * easedProgress)
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animation)
      }
    }

    requestAnimationFrame(animation)
  }

  const handleDownloadCV = () => {
    setIsDownloading(true)
    try {
      const link = document.createElement('a')
      link.href = cvFile
      link.download = 'Shageeth_Pratheep_CV.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error('Download failed:', error)
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <div className="border-b border-neutral-900 pb-4 lg:pb-12 lg:mb-16">
      <div className="flex flex-wrap items-center">
        {/* Image Column */}
        <div className="w-full lg:w-1/2 order-first p-4 md:p-6 lg:p-8">
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative group flex justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false)
          setRotate({ x: 0, y: 0 })
        }}
        onMouseMove={handleMouseMove}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-2xl rounded-full animate-pulse -z-10" />
        
        {/* 3D Animated Image */}
        <motion.div
          style={{
            perspective: 1000,
            transformStyle: 'preserve-3d'
          }}
          animate={{
            rotateX: rotate.x,
            rotateY: rotate.y,
            scale: isHovered ? 1.05 : 1
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <motion.img 
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              repeatType: 'mirror'
            }}
            className="rounded-2xl md:rounded-3xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg 
                      border-4 border-neutral-800/50 shadow-2xl hover:shadow-cyan-500/20 transition-shadow
                      cursor-pointer"
            src={profilepic} 
            alt="Shageeth Pratheep" 
            style={{
              transform: 'translateZ(50px)'
            }}
          />
        </motion.div>

        {/* Optional Glare Effect */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              backgroundPosition: `${rotate.y * 10}% ${rotate.x * 10}%`
            }}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.div>
    </div>
        
        {/* Text Content Column */}
        <div className="w-full lg:w-1/2 p-4 md:p-6 lg:p-8">
          <div className="flex flex-col items-center lg:items-start space-y-4 md:space-y-6">
            <motion.h1 
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-4 md:pb-6 text-3xl sm:text-3xl md:text-6xl font-bold tracking-tight 
                      bg-gradient-to-r from-neutral-300 via-neutral-100 to-neutral-400 bg-clip-text text-transparent
                      text-center lg:text-left" // Added responsive text alignment
            >
              <span className="block lg:inline">Shageeth Pratheep</span>
              <span className="block mt-2 md:mt-3 lg:ml-2">Varatharajan</span>
            </motion.h1>
            
            <motion.div
              variants={container(0.3)}
              initial="hidden"
              animate="visible" 
              className="relative inline-block"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-lg opacity-30" />
              <span className="relative bg-gradient-to-r from-cyan-400 via-slate-300 to-purple-400 
                             bg-clip-text text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-transparent">
                Full-Stack Developer
              </span>
            </motion.div>

            <motion.div 
              variants={container(0.6)}
              initial="hidden"
              animate="visible"
              className="my-2 md:my-4 max-w-xl lg:max-w-2xl py-2 lg:py-4"
            >
              <p className="text-sm md:text-base lg:text-lg font-light leading-relaxed md:leading-loose 
                           text-neutral-400 text-center lg:text-left">
                {HERO_CONTENT.static + " "}
                <TypeAnimation
                  sequence={[
                    HERO_CONTENT.dynamic[0],
                    1500,
                    '',
                    800,
                    HERO_CONTENT.dynamic[0], 
                    1500,
                    '',
                    800,
                  ]}
                  speed={40}
                  deletionSpeed={60}
                  repeat={Infinity}
                  cursor={true}
                  className="font-medium inline-block text-cyan-400"
                  style={{
                    fontWeight: 500,
                    cursor: 'text',
                    textShadow: '0 0 8px rgba(34, 211, 238, 0.3)'
                  }}
                />
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex gap-4 mt-4"
              variants={container(0.9)}
              initial="hidden"
              animate="visible"
            >
              <motion.button
                onClick={scrollToProjects}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 md:px-6 md:py-2.5 rounded-full bg-gradient-to-r from-cyan-600 to-purple-600 
                          hover:from-cyan-500 hover:to-purple-500 transition-all 
                          text-xs md:text-sm lg:text-base font-medium shadow-lg hover:shadow-cyan-500/20
                          whitespace-nowrap"
              >
                View Projects
              </motion.button>

              <motion.button
                onClick={handleDownloadCV}
                disabled={isDownloading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 md:px-6 md:py-2.5 rounded-full border border-cyan-500/30 hover:border-cyan-500/50 
                          bg-neutral-900/50 hover:bg-neutral-900/70 transition-all 
                          text-xs md:text-sm lg:text-base font-medium shadow-lg hover:shadow-cyan-500/10
                          flex items-center gap-1.5 md:gap-2 disabled:opacity-50 disabled:cursor-not-allowed
                          whitespace-nowrap"
              >
                {isDownloading ? (
                  <>
                    <FiLoader className="animate-spin w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                    <span>Downloading...</span>
                  </>
                ) : (
                  <>
                    <FiDownload className="text-cyan-400 w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                    <span>Download CV</span>
                  </>
                )}
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero