import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Background from './components/Background'
import { motion } from 'framer-motion'


const App = () => {
  // Initialize smooth scrolling with Lenis
  useEffect(() => {
    // Add a CSS rule to improve scrolling
    const style = document.createElement('style')
    style.innerHTML = `
      html {
        scroll-behavior: smooth;
      }
      body {
        overflow-x: hidden;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      * {
        -webkit-tap-highlight-color: transparent;
      }
      @media (prefers-reduced-motion: reduce) {
        html {
          scroll-behavior: auto;
        }
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <div className="mt-20 min-h-screen overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <Background />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Contact />
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        className="fixed bottom-8 left-1/2 -translate-x-1/2 w-8 h-12 border-2 border-cyan-500/30 rounded-3xl hidden md:block"
        animate={{
          y: [0, 10, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity
        }}
      >
        <motion.div 
          className="w-1 h-2 bg-cyan-500/80 rounded-full mx-auto mt-2"
          animate={{
            y: [0, 5, 0]
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: 0.2
          }}
        />
      </motion.div>
    </div>
  )
}

export default App