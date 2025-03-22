import { HoverEffect } from "@/components/ui/card-hover-effect"
import React from "react"

const projects = [
  {
    title: "WeSell",
    description:
      "A platform for students to buy and sell old items on the college campus, including gadgets, furniture, and more.",
    link: "https://wesell.com",
  },
  {
    title: "Campus Stay",
    description:
      "A website that helps students find accommodation and facilities near their college, making student life easier.",
    link: "https://campusstay.com",
  },
  {
    title: "Fintech Platform",
    description:
      "A financial services platform with advanced features built using the MERN stack, aiming to simplify digital transactions.",
    link: "https://fintechplatform.com",
  },
  {
    title: "Fraud Alert App",
    description:
      "A React Native app where users can report and discuss fraud calls, messages, and emails to help prevent scams.",
    link: "https://fraudalertapp.com",
  },
  {
    title: "Cricket Website",
    description:
      "A website providing live scores, highlights, articles, and player stats for cricket enthusiasts.",
    link: "https://cricketlive.com",
  },
  {
    title: "Online Hospital",
    description:
      "A telemedicine platform that allows patients to book appointments, consult doctors via video calls, and get medical assistance.",
    link: "https://onlinehospital.com",
  },
  {
    title: "AI Chatbot",
    description:
      "An AI-powered chatbot that interacts with users, provides recommendations, and assists with various inquiries.",
    link: "https://aichatbot.com",
  },
  {
    title: "Smart Learning Dashboard",
    description:
      "A personalized learning platform with reading statistics, progress tracking, and AI-driven learning paths.",
    link: "https://smartlearning.com",
  },
  {
    title: "Salon Management System",
    description:
      "A system where clients can generate appointment tokens, and barbers can efficiently manage their queue.",
    link: "https://salonmanage.com",
  },
  {
    title: "Restaurant QR Menu",
    description:
      "A QR-based restaurant menu where customers can view items, order, pay online, and notify the restaurant instantly.",
    link: "https://restaurantqrcode.com",
  },
  {
    title: "Family Task Manager",
    description:
      "A collaborative family task management app to assign, track, and complete household chores efficiently.",
    link: "https://familytasks.com",
  },
  {
    title: "Omegle Alternative",
    description:
      "A real-time anonymous chat platform that connects users randomly for conversations and social interactions.",
    link: "https://omeglealt.com",
  },
  {
    title: "Trending Tech Aggregator",
    description:
      "A website that curates trending technology news, updates, and insights to keep users informed.",
    link: "https://techtrends.com",
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
            solutions, and innovative web projects built with MERN, Next.js, and
            modern JavaScript.
          </p>
          </div>
          <HoverEffect items={projects} />
        </div>
      </div>
    </div>
  )
}

export default page
