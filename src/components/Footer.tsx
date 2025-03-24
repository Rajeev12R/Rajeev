import React from "react";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-400 py-6 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 py-16">
        {/* Left Section */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 text-2xl">
            Rajeev Ranjan
          </h4>
          <span className="text-neutral-600">|</span>
          <h4 className="text-neutral-600 dark:text-neutral-400 text-lg">
            &copy; {new Date().getFullYear()} Rajeev Ranjan. All rights reserved.
          </h4>
        </div>

        {/* Right Section */}
        <div className="flex gap-5 items-center">

        <Link
          href="/contact"
          className="border border-black dark:border-white px-6 py-2 rounded-full bg-transparent hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black cursor-pointer transition-all duration-300"
          >
          Contact Me
        </Link>
        <Link href="https://github.com/rajeev12r" target="_blank"><SiGithub className="h-8 w-8"/></Link>
        <Link href="https://www.linkedin.com/in/rajeev12r" target="_blank"><SiLinkedin className="h-8 w-8"/></Link>
        <Link href="https://x.com/RajeevR16816742" target="_blank"><FaSquareXTwitter className="h-8 w-8"/></Link>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
