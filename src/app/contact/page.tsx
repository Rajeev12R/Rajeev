"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react"
import { FaXTwitter } from "react-icons/fa6"
import ContactForm from "@/components/contact-form"

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false)

  return (
    <div className="min-h-screen w-full max-w-4xl mx-auto">
      <div className="flex flex-col py-32 md:py-24 lg:py-32 mt-4 md:mt-10 space-y-8 md:space-y-10 px-4 sm:px-6 md:px-10">
        {/* Contact Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-semibold text-3xl md:text-4xl tracking-tight">
            Get In Touch
          </h2>
          <p className="font-light text-neutral-600 text-base md:text-lg lg:text-xl leading-relaxed tracking-wide mt-4">
            Have a project in mind or want to discuss potential opportunities?
            I'd love to hear from you. Fill out the form below, and I'll get
            back to you as soon as possible.
          </p>
        </motion.div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-6">
          {/* Contact Info */}
          <motion.div
            className="md:col-span-1 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-black dark:text-white">
                Contact Information
              </h3>

              <div className="flex items-start space-x-3 text-neutral-600">
                <Mail className="w-5 h-5 mt-0.5 text-stone-600" />
                <span className="text-base">rjranjan2112@gmail.com</span>
              </div>

              <div className="flex items-start space-x-3 text-neutral-600">
                <Phone className="w-5 h-5 mt-0.5 text-stone-600" />
                <span className="text-base">+91 83604 26936</span>
              </div>

              <div className="flex items-start space-x-3 text-neutral-600">
                <MapPin className="w-5 h-5 mt-0.5 text-stone-600" />
                <span className="text-base">
                  Lovely Professional University, Punjab, India
                </span>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-xl font-medium text-black dark:text-white mb-3">
                Connect
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/rajeev12r"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-stone-300 rounded-full hover:bg-black hover:text-white hover:border-black transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a
                  href="https://github.com/rajeev12r"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-stone-300 rounded-full hover:bg-black hover:text-white hover:border-black transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-github"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
                <a
                  href="https://x.com/RajeevR16816742"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-stone-300 rounded-full hover:bg-black hover:text-white hover:border-black transition-all duration-300"
                >
                  <FaXTwitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {formSubmitted ? (
              <motion.div
                className="bg-stone-50 border border-stone-200 rounded-lg p-8 flex flex-col items-center justify-center h-full"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <CheckCircle className="w-16 h-16 text-green-600 mb-4" />
                <h3 className="text-2xl font-medium text-black mb-2">
                  Message Sent!
                </h3>
                <p className="text-center text-neutral-600 mb-6">
                  Thank you for reaching out. I'll get back to you as soon as
                  possible.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="border border-black px-6 py-2 rounded-full bg-transparent hover:bg-black hover:text-white cursor-pointer transition-all duration-500"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <ContactForm setFormSubmitted={setFormSubmitted} />
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact
