import { HoverEffect } from "@/components/ui/card-hover-effect"
import React from "react"

const projects = [
  {
    title: "CampusStay",
    description:
      "A full-featured MERN stack platform to discover the best PGs and hostels, complete with an advanced admin dashboard and integrated payment gateway for seamless bookings.",
    link: "https://campusstay.com",
  },
  {
    title: "Chess Game",
    description:
      "A real-time multiplayer chess game built with the MERN stack and Socket.io, enabling seamless gameplay and instant move synchronization between players.",
    link: "https://kingchess.vercel.app",
  },
  {
    title: "Marketing Website Portfolio",
    description:
      "A modern, responsive portfolio and marketing website built with React and MUI, featuring beautiful UI, interactive forms powered by Nodemailer, and a focus on frontend excellence.",
    link: "https://widetake.vercel.app",
  },
  {
    title: "Real Time Chat Application",
    description:
      "A feature-rich MERN chat app with DaisyUI, great UI, real-time messaging via Socket.io, and video calls using WebRTC for seamless communication.",
    link: "https://buzz",
  },
  {
    title: "Mental Health Chatbot",
    description:
      "A MERN-based mental health chatbot powered by Gemini API, visualizing user progress with Chart.js and providing supportive, AI-driven conversations.",
    link: "#",
  },
  {
    title: "Smart Learning Dashboard",
    description:
      "A MERN-based smart learning dashboard that uses web scraping for personalized learning, offers clear roadmaps, and makes the learning journey easy and effective.",
    link: "https://smartlearning.com",
  },
  {
    title: "Task Manager",
    description:
      "A college project task manager built with PHP, HTML, CSS, JS, and CDN Tailwind, enabling students to efficiently organize and track their assignments.",
    link: "#",
  },
  {
    title: "AI Powered Image Generator",
    description:
      "An AI-powered image generator using OpenAI API, allowing users to generate images from prompts with a pricing-based model.",
    link: "#",
  },
  {
    title: "AI powered legal Case Summarizer",
    description:
      "A MERN-based legal case summarizer with voice assistance, speech features, and advanced NLP (NLTK) for tokenizing, removing stopwords, and generating perfect summaries from PDF, DOCX, and images.",
    link: "#",
  },
  {
    title: "AI Powered Process Anomoly Detector",
    description:
      "A college operations system project that monitors and manages processes using htop and pslist in the backend, with a React-based advanced UI for real-time CPU and memory monitoring and process control.",
    link: "#",
  },
]
const page = () => {
  return (
    <div className="min-h-screen max-w-7xl mx-auto">
      <div className="flex flex-col py-32 mt-10 space-y-10 px-10">
        <div className="max-w-5xl mx-auto px-8">
          <div className="flex flex-col gap-4">
            <h2 className="font-semibold text-3xl md:text-4xl tracking-tight">
              My Projects
            </h2>
            <p className="font-light text-neutral-600 text-base md:text-lg lg:text-xl leading-relaxed tracking-wide">
              A showcase of my work, featuring full-stack applications, fintech
              solutions, and innovative web projects built with MERN, Next.js,
              and modern JavaScript.
            </p>
          </div>
          <HoverEffect items={projects} />
        </div>
      </div>
    </div>
  )
}

export default page
