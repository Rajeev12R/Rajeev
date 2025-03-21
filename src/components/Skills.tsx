"use client"

import React, { useEffect, useState } from "react"
import { motion } from "motion/react"
import {
  FaJs,
  FaPython,
  FaReact,
  FaNodeJs,
  FaGit,
  FaDocker,
} from "react-icons/fa"
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiPostman,
  SiExpress,
  SiFigma,
  SiCplusplus,
  SiHtml5,
  SiCss3,
} from "react-icons/si"

const skills = [
  {
    category: "Languages",
    skills: [
      { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
      { name: "Python", icon: <FaPython className="text-yellow-400" /> },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
      { name: "React", icon: <FaReact className="text-blue-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-teal-400" />,
      },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
      { name: "Express", icon: <SiExpress className="text-gray-800" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: <FaGit className="text-red-500" /> },
      { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
      { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
    ],
  },
]

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300)
  }, [])

  return (
    <div className="w-full flex flex-col relative min-h-[400px] mt-2">
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="realtive text-2xl font-bold text-gray-800 dark:text-white pb-2 max-w-fit mb-4 flex items-center gap-2"
      >
        Top Skills
        <span className="absolute left-0 top-10 w-full max-w-1/3 mx-auto h-1 bg-purple-700 rounded-full"></span>
      </motion.h4>

      <motion.div
        className="mt-2 flex flex-col gap-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {skills.map(({ category, skills }, index) => (
          <div key={category} className="flex items-center w-full">
            {/* Skill Category Name */}
            <h5 className="text-lg font-bold text-gray-800 dark:text-white w-36 text-right">
              {category}
            </h5>

            <div className="w-10 h-0.5 bg-green-400 mx-4"></div>

            <div className="flex gap-4 flex-wrap">
              {skills.map(({ name, icon }, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.1 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                  }}
                  className="flex items-center gap-2 text-gray-900 dark:text-white text-md"
                >
                  {icon} {name}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Skills
