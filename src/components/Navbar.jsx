// import React from 'react'
// import logo from "../assets/VSPlogo 2.jpg"
// import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa"

// const Navbar = () => {
//   const scrollToSection = (id) => {
//     const element = document.getElementById(id)
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' })
//     }
//   }

//   return (
//     <nav className="mb-6 md:mb-12 relative">
//       {/* Fixed Navigation Bar */}
//       <div className="fixed top-0 left-0 right-0 bg-black backdrop-blur-sm z-50 py-2 md:py-3 px-4 md:px-6 flex items-center justify-between">
        
//         {/* Mobile Layout */}
//         <div className="flex md:hidden items-center justify-between w-full">
//           {/* Logo and Navigation */}
//           <div className="flex items-center gap-1.5">
//             <img 
//               className="w-8 mr-1 transition-all duration-300" 
//               src={logo} 
//               alt="VSP logo" 
//             />
//             <div className="flex items-center gap-0.5 overflow-x-auto">
//               <button 
//                 onClick={() => scrollToSection('about')}
//                 className="text-neutral-300 hover:text-cyan-500 transition-colors duration-300 px-1 text-xs whitespace-nowrap"
//               >
//                 About
//               </button>
//               <button 
//                 onClick={() => scrollToSection('technologies')}
//                 className="text-neutral-300 hover:text-cyan-500 transition-colors duration-300 px-1 text-xs whitespace-nowrap"
//               >
//                 Tech
//               </button>
//               <button 
//                 onClick={() => scrollToSection('projects')}
//                 className="text-neutral-300 hover:text-cyan-500 transition-colors duration-300 px-1 text-xs whitespace-nowrap"
//               >
//                 Projects
//               </button>
//               <button 
//                 onClick={() => scrollToSection('contact')}
//                 className="text-neutral-300 hover:text-cyan-500 transition-colors duration-300 px-1 text-xs whitespace-nowrap"
//               >
//                 Contact
//               </button>
//             </div>
//           </div>

//           {/* Mobile Social Icons */}
//           <div className="flex items-center gap-2 ml-2">
//             <a 
//               href="https://www.linkedin.com/in/shageeth-pratheep-varatharajan-333317282" 
//               target="_blank" 
//               rel="noopener noreferrer" 
//               className="text-neutral-300 hover:text-cyan-500 transition-colors duration-300"
//             >
//               <FaLinkedin className="text-base" />
//             </a>
//             <a 
//               href="https://github.com/VSHAGEETHPRATHEEP06" 
//               target="_blank" 
//               rel="noopener noreferrer" 
//               className="text-neutral-300 hover:text-cyan-500 transition-colors duration-300"
//             >
//               <FaGithub className="text-base" />
//             </a>
//             <a 
//               href="https://www.instagram.com/shageeth06_vsp" 
//               target="_blank" 
//               rel="noopener noreferrer" 
//               className="text-neutral-300 hover:text-cyan-500 transition-colors duration-300"
//             >
//               <FaInstagram className="text-base" />
//             </a>
//             <a 
//               href="https://www.facebook.com/share/18dCCKqXtS" 
//               target="_blank" 
//               rel="noopener noreferrer" 
//               className="text-neutral-300 hover:text-cyan-500 transition-colors duration-300"
//             >
//               <FaFacebook className="text-base" />
//             </a>
//           </div>
//         </div>

//         {/* Desktop Layout */}
//         <div className="hidden md:flex flex-1 items-center justify-between">
//           {/* Logo */}
//           <div className="flex-1 flex items-center justify-start">
//             <img 
//               className="w-14 lg:w-16 transition-all duration-300 mr-4" 
//               src={logo} 
//               alt="VSP logo" 
//             />
//           </div>

//           {/* Navigation Links */}
//           <div className="flex-1 flex justify-center">
//             <div className="flex items-center gap-4 text-sm lg:text-base">
//               <button 
//                 onClick={() => scrollToSection('about')}
//                 className="text-neutral-300 hover:text-cyan-500 transition-colors duration-300 px-2"
//               >
//                 About
//               </button>
//               <button 
//                 onClick={() => scrollToSection('technologies')}
//                 className="text-neutral-300 hover:text-cyan-500 transition-colors duration-300 px-2"
//               >
//                 Tech
//               </button>
//               <button 
//                 onClick={() => scrollToSection('projects')}
//                 className="text-neutral-300 hover:text-cyan-500 transition-colors duration-300 px-2"
//               >
//                 Projects
//               </button>
//               <button 
//                 onClick={() => scrollToSection('contact')}
//                 className="text-neutral-300 hover:text-cyan-500 transition-colors duration-300 px-2"
//               >
//                 Contact
//               </button>
//             </div>
//           </div>

//           {/* Social Icons */}
//           <div className="flex-1 flex justify-end items-center gap-3 lg:gap-4">
//             <div className="group relative">
//               <a 
//                 href="https://www.linkedin.com/in/shageeth-pratheep-varatharajan-333317282" 
//                 target="_blank" 
//                 rel="noopener noreferrer" 
//                 className="hover:text-cyan-500 transition-transform duration-300 ease-in-out transform hover:scale-125 block"
//               >
//                 <FaLinkedin className="inline-block text-lg" />
//               </a>
//               <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-neutral-800 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
//                 LinkedIn
//                 <span className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-neutral-800 rotate-45"></span>
//               </span>
//             </div>

//             <div className="group relative">
//               <a 
//                 href="https://github.com/VSHAGEETHPRATHEEP06" 
//                 target="_blank" 
//                 rel="noopener noreferrer" 
//                 className="hover:text-cyan-500 transition-transform duration-300 ease-in-out transform hover:scale-125 block"
//               >
//                 <FaGithub className="inline-block text-lg" />
//               </a>
//               <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-neutral-800 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
//                 GitHub
//                 <span className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-neutral-800 rotate-45"></span>
//               </span>
//             </div>

//             <div className="group relative">
//               <a 
//                 href="https://www.instagram.com/shageeth06_vsp" 
//                 target="_blank" 
//                 rel="noopener noreferrer" 
//                 className="hover:text-cyan-500 transition-transform duration-300 ease-in-out transform hover:scale-125 block"
//               >
//                 <FaInstagram className="inline-block text-lg" />
//               </a>
//               <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-neutral-800 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
//                 Instagram
//                 <span className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-neutral-800 rotate-45"></span>
//               </span>
//             </div>

//             <div className="group relative">
//               <a 
//                 href="https://www.facebook.com/share/18dCCKqXtS" 
//                 target="_blank" 
//                 rel="noopener noreferrer" 
//                 className="hover:text-cyan-500 transition-transform duration-300 ease-in-out transform hover:scale-125 block"
//               >
//                 <FaFacebook className="inline-block text-lg" />
//               </a>
//               <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-neutral-800 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
//                 Facebook
//                 <span className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-neutral-800 rotate-45"></span>
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Navbar






import React from 'react'
import { motion } from 'framer-motion'
import logo from "../assets/VSPlogo 2.jpg"
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa"

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const socialLinks = [
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/shageeth-pratheep-varatharajan-333317282", label: "LinkedIn" },
    { icon: <FaGithub />, href: "https://github.com/VSHAGEETHPRATHEEP06", label: "GitHub" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/shageeth06_vsp", label: "Instagram" },
    { icon: <FaFacebook />, href: "https://www.facebook.com/share/18dCCKqXtS", label: "Facebook" }
  ]

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'technologies', label: 'Tech' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <nav className="mb-6 md:mb-12 relative">
      {/* Fixed Navigation Bar */}
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-lg z-50 border-b border-neutral-800/50 py-2 md:py-3 px-4 md:px-6 flex items-center justify-between"
      >
        {/* Mobile Layout */}
        <div className="md:hidden flex items-center justify-between w-full">
          {/* Logo with animation */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="cursor-pointer"
          >
            <img 
              className="w-8 transition-all duration-300 rounded-full border border-cyan-500/20" 
              src={logo} 
              alt="VSP logo" 
            />
          </motion.div>

          {/* Mobile Social Icons */}
          <div className="flex items-center gap-2">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-cyan-500 p-1.5 rounded-lg bg-neutral-900/50 backdrop-blur-sm border border-neutral-800"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex w-full items-center justify-between">
          {/* Animated Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('hero')}
            className="cursor-pointer flex items-center gap-2"
          >
            <motion.img 
              // initial={{ rotate: 0 }}
              // animate={{ rotate: 360 }}
              // transition={{ 
              //   duration: 10,
              //   repeat: Infinity,
              //   ease: "linear"
              // }}
              className="w-10 lg:w-12 transition-all duration-300 rounded-full border-2 border-cyan-500/30" 
              src={logo} 
              alt="VSP logo" 
            />
          </motion.div>

          {/* Navigation Links with animated underline */}
          <div className="flex items-center gap-6">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-neutral-300 hover:text-cyan-500 relative px-2 py-1 text-sm"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {item.label}
                <motion.div 
                  className="absolute bottom-0 left-0 h-[2px] bg-cyan-500"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                />
              </motion.button>
            ))}
          </div>

          {/* Enhanced Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <motion.div 
                key={index}
                className="group relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-cyan-500 p-2 rounded-lg bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 flex items-center justify-center w-10 h-10"
                >
                  {link.icon}
                </a>
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-neutral-800 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                  {link.label}
                  <span className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-neutral-800 rotate-45"></span>
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-lg border-t border-neutral-800/50 z-50 py-2 px-4">
        <motion.div 
          className="flex justify-between items-center"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-neutral-300 hover:text-cyan-500 text-xs px-2 py-1"
              whileTap={{ scale: 0.9 }}
              whileHover={{ y: -2 }}
            >
              {item.label}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </nav>
  )
}

export default Navbar