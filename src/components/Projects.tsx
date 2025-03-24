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
} from "react-icons/si"
import { DiNodejs } from "react-icons/di"

const content = [
  {
    title: "King Chess - Real-Time Chess Game",
    description: "Built a real-time multiplayer chess app with smooth synchronization, move validation, and an intuitive UI. Used WebSockets for seamless gameplay, allowing players to join via room codes and track move history.",
    link: "https://kingchess.vercel.app",
    techStack: [
      { icon: <SiReact title="React.js" />, name: "React.js" },
      { icon: <DiNodejs title="Node.js" />, name: "Node.js" },
      { icon: <SiMongodb title="MongoDB" />, name: "MongoDB" },
      { icon: <SiTailwindcss title="Tailwind CSS" />, name: "Tailwind CSS" },
    ],
    videoSrc: "/chess.mp4",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] p-6 rounded-md">
        Buzz 2.0 - Chat App
      </div>

    ),
  },
  {
    title: "Wide Take - Marketing Agency Website",
    description: "Built a sleek and responsive marketing agency website with interactive animations, SEO optimization, and a blog section. Ensured an engaging UI using React.js and Tailwind CSS.",
    link: "https://widetake.vercel.app",
    techStack: [
      { icon: <SiReact title="React.js" />, name: "React.js" },
      { icon: <DiNodejs title="Node.js" />, name: "Node.js" },
      { icon: <SiTailwindcss title="Tailwind CSS" />, name: "Tailwind CSS" },
      { icon: <SiFramer title="Framer Motion" />, name: "Framer Motion" },
    ],
    videoSrc: "/widetake.mp4", 
    content: (
      <div className="flex h-full w-full items-center justify-center text-black p-6 rounded-md">
        <Image
          src="/wide-take.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover rounded-md"
          alt="Marketing Agency Website"
        />
      </div>
    ),
  },
  {
    title: "CampusStay - Hostel/PG Booking Platform",
    description: "A full-stack PG booking platform with secure payments.",
    link: "https://campusstay.vercel.app",
    techStack: [
      { icon: <SiReact title="React.js" />, name: "React.js" },
      { icon: <DiNodejs title="Node.js" />, name: "Node.js" },
      { icon: <SiMongodb title="MongoDB" />, name: "MongoDB" },
      {
        icon: <SiFirebase title="Firebase Payments" />,
        name: "Firebase Payments",
      },
    ],
    videoSrc: "/campusstay-video.mp4", 
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-black p-6 rounded-md">
        CampusStay - Booking Platform
      </div>
    ),
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
