"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed w-4/5 min-w-fit left-1/2 transform -translate-x-1/2 z-50 flex items-center justify-center px-6 py-4 rounded-xl transition-all duration-300
        ${
          isScrolled
            ? "bg-white/80 top-0 border-x border-white backdrop-blur-md shadow-md"
            : "bg-transparent top-4"
        }`}
    >
      <div className="flex items-center justify-between p-2 w-full">
        <div>

        <Image src="/logo.png" width={20} height={20} alt="Icon"></Image>
        </div>
        <div>

        <ul className="flex space-x-6 text-stone-700 font-medium text-md dark:text-white">
          <li>
            <Link href="/" className="hover:text-stone-500 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-stone-500 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-stone-500 transition">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/blogs" className="hover:text-stone-500 transition">
              Blogs
            </Link>
          </li>
        </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
