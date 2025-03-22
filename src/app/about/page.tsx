import Image from "next/image"

const About = () => {
  return (
    <div className="min-h-screen w-full max-w-4xl mx-auto">
      <div className="flex flex-col py-16 md:py-24 lg:py-32 mt-4 md:mt-10 space-y-8 md:space-y-10 px-4 sm:px-6 md:px-10">
        {/* About Me Section */}
        <h2 className="font-semibold text-3xl md:text-4xl tracking-tight">About Me</h2>
        <p className="font-light text-neutral-600 text-base md:text-lg lg:text-xl leading-relaxed tracking-wide">
          Hello, I&apos;m Rajeev, a full-stack developer from India with expertise in the MERN stack, Next.js, and
          JavaScript. I thrive on solving complex problems and building scalable, high-performance applications. With a
          passion for clean code, modern design, and continuous learning, I&apos;m always eager to work on innovative
          projects that create a real impact.
        </p>

        {/* Experience Section */}
        <h2 className="font-semibold text-3xl md:text-4xl tracking-tight pt-4">Experience</h2>

        <div className="space-y-8 md:space-y-0">
          {/* Experience 1 - Freelance Frontend Developer */}
          <div className="flex flex-col md:flex-row justify-between items-start md:space-x-6">
            <div className="flex flex-row md:flex-col items-center mb-4 md:mb-0">
              <div className="p-4 md:p-6 w-16 h-16 md:w-20 md:h-20 flex justify-center items-center border border-neutral-500 rounded-full shrink-0">
                <Image src="/globe.svg" width={32} height={32} alt="exp" className="rounded-full" />
              </div>
              <span className="hidden md:block w-0.5 h-40 bg-gray-200"></span>
              <span className="hidden h-0.5 w-6 md:hidden bg-gray-200 mx-2"></span>
            </div>
            <div className="flex flex-col w-full">
              <h6 className="text-xs text-gray-400 uppercase">Feb 2025 - Present</h6>
              <h3 className="font-semibold text-lg md:text-xl">Freelance - Frontend Developer</h3>
              <div className="space-y-3 md:space-y-4 mt-2">
                <p className="text-neutral-600 text-base md:text-lg leading-relaxed">
                  <strong>Built and deployed full-stack web applications</strong> using
                  <strong> React.js, Node.js, MongoDB, and Tailwind CSS</strong>, ensuring{" "}
                  <strong>seamless responsiveness</strong>
                  and an <strong>optimal user experience</strong> across devices.
                </p>
                <p className="text-neutral-600 text-base md:text-lg leading-relaxed">
                  Worked closely with clients to design scalable solutions, optimizing{" "}
                  <strong>database efficiency and application performance</strong> to meet business objectives.
                </p>
              </div>
            </div>
          </div>

          {/* Experience 2 - Full Stack Developer Intern */}
          <div className="flex flex-col md:flex-row justify-between items-start md:space-x-6 mt-8 md:mt-0">
            <div className="flex flex-row md:flex-col items-center mb-4 md:mb-0">
              <div className="p-4 md:p-6 w-16 h-16 md:w-20 md:h-20 flex justify-center items-center border border-neutral-500 rounded-full shrink-0">
                <Image src="/globe.svg" width={32} height={32} alt="exp" className="rounded-full" />
              </div>
              {/* No vertical line for the last item */}
            </div>
            <div className="flex flex-col w-full">
              <h6 className="text-xs text-gray-400 uppercase">Feb 2025 - Present</h6>
              <h3 className="font-semibold text-lg md:text-xl">Full Stack Developer Intern - Wide Take</h3>
              <div className="space-y-3 md:space-y-4 mt-2">
                <p className="text-neutral-600 text-base md:text-lg leading-relaxed">
                  <strong>Built a modern, responsive marketing agency website</strong> using <strong>React.js</strong>{" "}
                  and <strong>Tailwind CSS</strong>, integrating smooth animations using <strong>Framer Motion</strong>{" "}
                  and an intuitive user interface for an enhanced user experience.
                </p>
                <p className="text-neutral-600 text-base md:text-lg leading-relaxed">
                  Enhanced <strong>website performance and SEO</strong>, for faster load times and improved search
                  engine visibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

