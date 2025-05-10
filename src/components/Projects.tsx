import React from "react"
import Link from "next/link"
import { StickyScroll } from "./ui/sticky-scroll-reveal"
import Image from "next/image"
import {
  SiReact,
  SiMongodb,
  SiTailwindcss,
  SiFramer,
  SiFirebase,
  SiHuggingface,
  SiPython,
  SiSocketdotio,
} from "react-icons/si"
import { DiNodejs } from "react-icons/di"

const content = [
  {
    title: "CampusStay",
    description:
      "A full-featured MERN stack platform to discover the best PGs and hostels, complete with an advanced admin dashboard and integrated payment gateway for seamless bookings.",
    link: "https://campusstay.com",
    techStack: [
      { icon: <SiReact title="React.js" />, name: "React.js" },
      { icon: <DiNodejs title="Node.js" />, name: "Node.js" },
      { icon: <SiMongodb title="MongoDB" />, name: "MongoDB" },
      { icon: <SiTailwindcss title="Tailwind CSS" />, name: "Tailwind CSS" },
    ],
    videoSrc: "/campusstay.mp4",
    content: null,
  },
  {
    title: "Chess Game",
    description:
      "A real-time multiplayer chess game built with the MERN stack and Socket.io, enabling seamless gameplay and instant move synchronization between players.",
    link: "https://kingchess.vercel.app",
    techStack: [
      { icon: <SiReact title="React.js" />, name: "React.js" },
      { icon: <DiNodejs title="Node.js" />, name: "Node.js" },
      { icon: <SiMongodb title="MongoDB" />, name: "MongoDB" },
      { icon: <SiSocketdotio title="Socket.io" />, name: "Socket.io" },
    ],
    videoSrc: "/chess.mp4",
    content: null,
  },
  {
    title: "Marketing Website Portfolio",
    description:
      "A modern, responsive portfolio and marketing website built with React and MUI, featuring beautiful UI, interactive forms powered by Nodemailer, and a focus on frontend excellence.",
    link: "https://widetake.vercel.app",
    techStack: [
      { icon: <SiReact title="React.js" />, name: "React.js" },
      { icon: <SiTailwindcss title="Tailwind CSS" />, name: "Tailwind CSS" },
      { icon: <SiFramer title="Framer Motion" />, name: "Framer Motion" },
    ],
    videoSrc: "/widetake.mp4",
    content: null,
  },
  {
    title: "Real Time Chat Application",
    description:
      "A feature-rich MERN chat app with DaisyUI, great UI, real-time messaging via Socket.io, and video calls using WebRTC for seamless communication.",
    link: "https://buzz",
    techStack: [
      { icon: <SiReact title="React.js" />, name: "React.js" },
      { icon: <DiNodejs title="Node.js" />, name: "Node.js" },
      { icon: <SiMongodb title="MongoDB" />, name: "MongoDB" },
      { icon: <SiSocketdotio title="Socket.io" />, name: "Socket.io" },
    ],
    videoSrc: "/buzz.mp4",
    content: null,
  },
  {
    title: "Mental Health Chatbot",
    description:
      "A MERN-based mental health chatbot powered by Gemini API, visualizing user progress with Chart.js and providing supportive, AI-driven conversations.",
    link: "#",
    techStack: [
      { icon: <SiReact title="React.js" />, name: "React.js" },
      { icon: <DiNodejs title="Node.js" />, name: "Node.js" },
      { icon: <SiMongodb title="MongoDB" />, name: "MongoDB" },
      { icon: <SiPython title="Python" />, name: "Python" },
    ],
    videoSrc: "/mentalhealth.mp4",
    content: null,
  },
  {
    title: "Smart Learning Dashboard",
    description:
      "A MERN-based smart learning dashboard that uses web scraping for personalized learning, offers clear roadmaps, and makes the learning journey easy and effective.",
    link: "https://smartlearning.com",
    techStack: [
      { icon: <SiReact title="React.js" />, name: "React.js" },
      { icon: <DiNodejs title="Node.js" />, name: "Node.js" },
      { icon: <SiMongodb title="MongoDB" />, name: "MongoDB" },
    ],
    videoSrc: "/smartlearning.mp4",
    content: null,
  },
  {
    title: "Task Manager",
    description:
      "A college project task manager built with PHP, HTML, CSS, JS, and CDN Tailwind, enabling students to efficiently organize and track their assignments.",
    link: "#",
    techStack: [],
    videoSrc: "/taskmanager.mp4",
    content: null,
  },
  {
    title: "AI Powered Image Generator",
    description:
      "An AI-powered image generator using OpenAI API, allowing users to generate images from prompts with a pricing-based model.",
    link: "#",
    techStack: [
      { icon: <SiReact title="React.js" />, name: "React.js" },
      { icon: <SiPython title="Python" />, name: "Python" },
    ],
    videoSrc: "/imagegen.mp4",
    content: null,
  },
  {
    title: "AI powered legal Case Summarizer",
    description:
      "A MERN-based legal case summarizer with voice assistance, speech features, and advanced NLP (NLTK) for tokenizing, removing stopwords, and generating perfect summaries from PDF, DOCX, and images.",
    link: "#",
    techStack: [
      { icon: <SiReact title="React.js" />, name: "React.js" },
      { icon: <DiNodejs title="Node.js" />, name: "Node.js" },
      { icon: <SiPython title="Python" />, name: "Python" },
    ],
    videoSrc: "/legalease.mp4",
    content: null,
  },
  {
    title: "AI Powered Process Anomoly Detector",
    description:
      "A college operations system project that monitors and manages processes using htop and pslist in the backend, with a React-based advanced UI for real-time CPU and memory monitoring and process control.",
    link: "#",
    techStack: [
      { icon: <SiReact title="React.js" />, name: "React.js" },
      { icon: <DiNodejs title="Node.js" />, name: "Node.js" },
    ],
    videoSrc: "/anomaly.mp4",
    content: null,
  },
]

const Projects = () => {
  return (
    <div className=" flex flex-col w-full">
      <div className="flex flex-col gap-5">
        <div className="relative flex flex-col justify-start px-4 sm:px-10 md:px-20  flex-grow z-10">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold leading-10 tracking-tight text-neutral-900 dark:text-neutral-100">
                Projects
              </h2>
              <p className="text-lg text-neutral-700 dark:text-neutral-300">
                A showcase of impactful projects demonstrating problem-solving,
                clean architecture, and performance-driven development.
              </p>
            </div>
            <div className="hidden md:block relative w-full pl-5 overflow-x-hidden md:pl-0">
              <div className="absolute w-full h-px bg-gradient-to-r from-transparent to-white md:from-white dark:from-transparent dark:to-neutral-950 md:dark:from-neutral-950 md:via-transparent md:dark:via-transparent md:to-neutral-300 md:dark:to-neutral-600"></div>
              <div className="w-full h-px border-t border-solid border-neutral-300 dark:border-neutral-600"></div>
            </div>
          </div>
        </div>

        <div className="w-full py-4">
          <StickyScroll content={content} contentClassName="text-black" />
        </div>
        <button
          type="button"
          className="border border-black px-6 py-2 rounded-full bg-transparent hover:bg-black hover:text-white cursor-pointer transition-all duration-500 max-w-fit mx-auto"
        >
          <Link href="/projects">Explore More Projects</Link>
        </button>
      </div>
    </div>
  )
}

export default Projects
