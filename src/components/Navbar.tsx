"use client"
import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const burgerButtonRef = useRef<HTMLButtonElement>(null)

  // Handle scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // Close menu on ESC key or click outside
  useEffect(() => {
    if (!menuOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false)
        burgerButtonRef.current?.focus()
      }
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node) &&
        !(e.target as HTMLElement).closest(
          'button[aria-controls="mobile-menu"]'
        )
      ) {
        setMenuOpen(false)
        burgerButtonRef.current?.focus()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [menuOpen])

  // Trap focus in mobile menu when open
  useEffect(() => {
    if (!menuOpen || !mobileMenuRef.current) return

    const focusableElements =
      mobileMenuRef.current.querySelectorAll<HTMLElement>(
        'a, button, [tabindex]:not([tabindex="-1"])'
      )
    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus()
          e.preventDefault()
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus()
          e.preventDefault()
        }
      }
    }

    firstElement?.focus()
    mobileMenuRef.current.addEventListener("keydown", handleTabKey)

    return () => {
      mobileMenuRef.current?.removeEventListener("keydown", handleTabKey)
    }
  }, [menuOpen])

  return (
    <nav
      className={`fixed w-full left-0 z-50 flex items-center justify-center px-2 sm:px-4 py-3 transition-all duration-300 font-poppins ${
        isScrolled
          ? "bg-white/80 top-0 border-b border-white dark:border-neutral-800 backdrop-blur-md shadow-md"
          : "bg-transparent top-4"
      }`}
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-between w-full max-w-6xl mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 focus:outline-none  rounded"
          aria-label="Home"
        >
          <Image
            src="/logo.png"
            width={32}
            height={32}
            alt="Website logo"
            priority
            className="h-8 w-8"
          />
          <span className="font-bold text-lg text-stone-700 dark:text-white select-none">
            Rajeev
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-stone-700 font-medium text-md dark:text-white">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative transition focus:outline-none  rounded px-1
                  ${
                    pathname === link.href
                      ? "text-blue-600 dark:text-blue-400 font-semibold"
                      : "hover:text-blue-600"
                  }
                  after:absolute after:left-0 after:-bottom-0.5 after:w-full after:h-0.5 after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100
                  ${
                    pathname === link.href
                      ? "after:scale-x-100 after:bg-blue-600"
                      : ""
                  }
                `}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          ref={burgerButtonRef}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none "
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span
            className={`block w-6 h-0.5 bg-stone-700 dark:bg-white transition-all ${
              menuOpen ? "rotate-45 translate-y-1.5" : "mb-1"
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-stone-700 dark:bg-white transition-all ${
              menuOpen ? "opacity-0" : "mb-1"
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-stone-700 dark:bg-white transition-all ${
              menuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>

        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          id="mobile-menu"
          className={`md:hidden fixed inset-0 z-50 bg-white dark:bg-neutral-900 transition-all duration-300 ease-in-out transform
            ${menuOpen ? "translate-x-0" : "translate-x-full"}
            flex flex-col h-screen overflow-y-auto`}
          aria-hidden={!menuOpen}
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-neutral-800">
            <Link
              href="/"
              className="flex items-center gap-2 focus:outline-none rounded"
              onClick={() => setMenuOpen(false)}
            >
              <Image
                src="/logo.png"
                width={32}
                height={32}
                alt="Website logo"
                className="h-8 w-8"
              />
              <span className="font-bold text-lg text-stone-700 dark:text-white select-none">
                Rajeev
              </span>
            </Link>
            <button
              className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-stone-800"
              onClick={() => {
                setMenuOpen(false)
                burgerButtonRef.current?.focus()
              }}
              aria-label="Close navigation menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-stone-700 dark:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="p-6 flex-1">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative block py-2 px-4 rounded-lg text-lg font-medium transition-colors
                      ${
                        pathname === link.href
                          ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 after:scale-x-100 after:bg-blue-600"
                          : "text-stone-700 dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-800"
                      }
                      after:absolute after:left-4 after:bottom-1 after:w-[calc(100%-2rem)] after:h-0.5 after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100
                    `}
                    style={{ position: "relative" }}
                    onClick={() => {
                      setMenuOpen(false)
                      burgerButtonRef.current?.focus()
                    }}
                    aria-current={pathname === link.href ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
