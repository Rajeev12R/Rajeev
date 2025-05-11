import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import Writings from "@/components/Writings"

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen w-full bg-transparent">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-10 pt-28">
        <Hero />
        <Projects />
        <Writings />
      </div>
    </main>
  )
}
