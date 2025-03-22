import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import Writings from "@/components/Writings"


export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden max-w-7xl mx-auto sm:px-10 px-5">
      <div className="w-full ">
        <Hero/>
        <Projects/>
        <Writings/>
      </div>
    </main>
  )
}
