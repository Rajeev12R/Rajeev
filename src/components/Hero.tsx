"use client"
import React, { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { FaLinkedin, FaGithub, FaTimes } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import CodingStats from "./tech-stack"

const Hero = () => {
  const [hovered, setHovered] = useState(false)
  const [showResume, setShowResume] = useState(false)

  return (
    <div className="relative text-stone-600 flex flex-col min-h-screen w-full">
      {/* Resume Modal */}
      {showResume && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-4xl h-[90vh]"
          >
            <button 
              onClick={() => setShowResume(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <FaTimes className="text-2xl" />
            </button>
            
            <iframe 
              src="/RajeevResume2.pdf" 
              className="w-full h-full rounded-lg"
            >
              Your browser does not support PDFs. 
              <a href="/resume.pdf">Download the resume</a> instead.
            </iframe>
          </motion.div>
        </div>
      )}

      <div className="relative flex flex-col justify-center px-4 sm:px-10 md:px-20 w-full mx-auto flex-grow z-10 py-44">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between w-full gap-10 lg:gap-20">
          
          {/* Left Section (Text) */}
          <div className="flex-1 flex flex-col gap-6 text-center sm:text-left max-w-xl">
            <div
              className="relative flex justify-center sm:justify-start mx-auto sm:mx-0"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative"
              >
                <Image
                  src="/myimg.png"
                  alt="Profile Icon"
                  width={120}
                  height={120}
                  className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full border border-gray-300 dark:border-gray-600 shadow-md"
                />
              </motion.div>

              {hovered && (
                <motion.div
                  className="absolute -inset-y-4 left-[20%] flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ type: "spring", stiffness: 150, damping: 10 }}
                >
                  <div className="relative w-40 h-40">
                    <motion.a
                      href="https://www.linkedin.com/in/rajeev12r"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
                      whileHover={{ scale: 1.2 }}
                    >
                      <FaLinkedin className="text-blue-600 dark:text-blue-400 text-2xl" />
                    </motion.a>

                    <motion.a
                      href="https://github.com/rajeev12r"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-1/3 left-2/3 transform -translate-x-1/2 -translate-y-1/2 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
                      whileHover={{ scale: 1.2 }}
                    >
                      <FaGithub className="text-black dark:text-white text-2xl" />
                    </motion.a>

                    <motion.a
                      href="https://x.com/RajeevR16816742"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-0 left-2/3 transform -translate-x-1/2 -translate-y-1/2 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
                      whileHover={{ scale: 1.2 }}
                    >
                      <FaSquareXTwitter className="text-black dark:text-gray-300 text-2xl" />
                    </motion.a>
                  </div>
                </motion.div>
              )}
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-black dark:text-white leading-snug sm:leading-tight">
              Hello, 👋🏻 <br /> I am Rajeev
            </h1>

            <p className="py-2 text-md sm:text-lg text-gray-700 dark:text-gray-300">
              Full Stack Web Developer | Building:{" "}
              <span className="font-semibold">CampusStay</span>,{" "}
              <span className="font-semibold">FraudDetector</span> & more...
            </p>

            <p className="max-w-[95%] sm:max-w-2xl text-md text-gray-600">
              Passionate about building scalable, efficient, and user-friendly
              applications. I craft seamless digital experiences with clean
              code, modern design, and robust architecture. Currently pursuing
              my B.Tech at LPU, I am constantly learning and refining my skills
              in full-stack development.
            </p>

            <p className="max-w-[95%] sm:max-w-2xl text-md text-gray-600 mt-4">
              I enjoy solving complex problems, writing efficient code, and
              bringing ideas to life through technology. With a strong
              foundation in web development, I believe in continuous improvement
              and staying updated with the latest advancements. Whether it's
              optimizing performance or enhancing user experiences, I approach
              every project with curiosity and dedication.
            </p>

            <div className="flex gap-5 justify-center sm:justify-start">
              <button
                type="button"
                onClick={() => setShowResume(true)}
                className="border border-black px-6 py-2 rounded-full bg-transparent hover:bg-black hover:text-white cursor-pointer transition-all duration-500"
              >
                View Resume
              </button>
            </div>
          </div>

          {/* Right Section (Skills / Tech Stack) */}
          <div className="flex-1 flex-col justify-center lg:justify-end w-full max-w-lg">
            <CodingStats />

            <p className="text-center mt-40 text-neutral-400">UI Components Example</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero