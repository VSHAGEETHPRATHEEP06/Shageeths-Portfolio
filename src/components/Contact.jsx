import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { CONTACT } from '../constants'
import { motion, AnimatePresence } from "framer-motion"
import { FiMapPin, FiPhone, FiMail, FiAlertCircle, FiCheckCircle } from 'react-icons/fi'
import { TbSend } from 'react-icons/tb'

function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  
  const onSubmit = async (data) => {
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    try {
      // Simple fetch request to formsubmit.co which doesn't require signup
      // This will forward emails directly to your inbox
      const formData = new FormData()
      formData.append('name', data.name)
      formData.append('email', data.email)
      formData.append('message', data.message)
      
      const response = await fetch('https://formsubmit.co/shagith06@gmail.com', {
        method: 'POST',
        body: formData
      })

      if (response.status === 200) {
        setSubmitStatus('success')
        reset()
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Email send error:', error)
      setSubmitStatus('error')
    }
    setIsSubmitting(false)
  }

  return (
    <div id="contact" className="relative border-b border-neutral-900 pb-16 md:pb-24 pt-12 md:pt-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.03 }}
          transition={{ duration: 1.5 }}
          className="absolute -top-32 -left-32 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-xl md:blur-3xl"
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.03 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute -bottom-48 -right-48 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full blur-xl md:blur-3xl"
        />
      </div>

      <div className="relative max-w-3xl lg:max-w-4xl xl:max-w-7xl mx-auto px-4 sm:px-6">
        <motion.h1 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="my-12 md:my-20 text-center text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent pb-2 overflow-visible"
        >
          Get in Touch
        </motion.h1>
        
        <div className="grid lg:grid-cols-2 gap-6 md:gap-10">
          {/* Contact Information */}
          <motion.div
            className="space-y-4 md:space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
          >
            {[
              { icon: <FiMapPin />, title: "Location", content: CONTACT.address },
              { icon: <FiPhone />, title: "Phone", content: CONTACT.phoneNo },
              { icon: <FiMail />, title: "Email", content: CONTACT.email, link: `mailto:${CONTACT.email}` },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -3 }}
                className="group relative p-4 md:p-5 rounded-xl bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 hover:border-cyan-500/30 transition-all"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                <div className="flex items-start gap-3 md:gap-4 relative">
                  <div className="p-2 md:p-2.5 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg text-cyan-400">
                    {React.cloneElement(item.icon, { className: "w-4 h-4 md:w-5 md:h-5" })}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm md:text-base font-medium text-neutral-300 mb-1">
                      {item.title}
                    </h3>
                    {item.link ? (
                      <a href={item.link} className="text-neutral-400 text-xs md:text-sm hover:text-cyan-400 transition-colors">
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">
                        {item.content}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="p-5 md:p-6 rounded-xl bg-neutral-900/50 backdrop-blur-sm border border-neutral-800"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4 md:space-y-5">
              {/* Name Field */}
              <div>
                <label className="block text-xs md:text-sm font-medium text-neutral-400 mb-2">
                  Name
                </label>
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <input
                    {...register("name", { required: "Name is required" })}
                    className={`w-full px-3 py-2.5 text-xs md:text-sm rounded-lg bg-neutral-800/50 border ${
                      errors.name ? 'border-red-500' : 'border-neutral-700 focus:border-cyan-500'
                    } focus:ring-2 focus:ring-cyan-500/20 transition-all`}
                    placeholder="John Doe"
                  />
                </motion.div>
                <AnimatePresence>
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="text-red-500 text-xs mt-1 flex items-center gap-1.5"
                    >
                      <FiAlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                      {errors.name.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-xs md:text-sm font-medium text-neutral-400 mb-2">
                  Email
                </label>
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <input
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className={`w-full px-3 py-2.5 text-xs md:text-sm rounded-lg bg-neutral-800/50 border ${
                      errors.email ? 'border-red-500' : 'border-neutral-700 focus:border-cyan-500'
                    } focus:ring-2 focus:ring-cyan-500/20 transition-all`}
                    placeholder="john@example.com"
                  />
                </motion.div>
                <AnimatePresence>
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="text-red-500 text-xs mt-1 flex items-center gap-1.5"
                    >
                      <FiAlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                      {errors.email.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-xs md:text-sm font-medium text-neutral-400 mb-2">
                  Message
                </label>
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <textarea
                    {...register("message", { 
                      required: "Message is required",
                      minLength: {
                        value: 20,
                        message: "Message must be at least 20 characters"
                      }
                    })}
                    rows="4"
                    className={`w-full px-3 py-2.5 text-xs md:text-sm rounded-lg bg-neutral-800/50 border ${
                      errors.message ? 'border-red-500' : 'border-neutral-700 focus:border-cyan-500'
                    } focus:ring-2 focus:ring-cyan-500/20 transition-all`}
                    placeholder="Write your message here..."
                  />
                </motion.div>
                <AnimatePresence>
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="text-red-500 text-xs mt-1 flex items-center gap-1.5"
                    >
                      <FiAlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                      {errors.message.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Gradient Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`w-full py-2.5 md:py-3 px-4 text-xs md:text-sm font-medium rounded-lg transition-all 
                  bg-gradient-to-r from-cyan-400 via-purple-500 to-purple-600 hover:from-cyan-500 hover:to-purple-700
                  ${isSubmitting ? 'opacity-80 cursor-not-allowed' : ''}
                  relative overflow-hidden group shadow-lg hover:shadow-cyan-500/20
                  flex items-center justify-center gap-1.5`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-700 opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                {isSubmitting ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-white/80 border-t-transparent rounded-full animate-spin z-10" />
                    <span className="z-10">Sending...</span>
                  </>
                ) : (
                  <>
                    <TbSend className="w-4 h-4 z-10" />
                    <span className="z-10">Send Message</span>
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="p-3 text-sm text-green-400 bg-gradient-to-r from-green-900/30 to-green-800/20 rounded-lg border border-green-800 flex items-center gap-2"
                  >
                    <FiCheckCircle className="flex-shrink-0" />
                    <span>Message sent successfully!</span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="p-3 text-sm text-red-400 bg-gradient-to-r from-red-900/30 to-red-800/20 rounded-lg border border-red-800 flex items-center gap-2"
                  >
                    <FiAlertCircle className="flex-shrink-0" />
                    <span>Error sending message. Please try again.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  )
}

export default Contact