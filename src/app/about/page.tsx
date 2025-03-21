import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="min-h-screen max-w-4xl mx-auto">
      <div className="flex flex-col py-32 mt-10 space-y-10 px-10">
        {/* About Me Section */}
        <h2 className="font-semibold text-4xl tracking-tight">About Me</h2>
        <p className="font-light text-neutral-600 text-xl leading-relaxed tracking-wide">
          Hello, I&apos;m Rajeev, a full-stack developer from India with expertise in
          the MERN stack, Next.js, and JavaScript. I thrive on solving complex
          problems and building scalable, high-performance applications. With a
          passion for clean code, modern design, and continuous learning, I&apos;m
          always eager to work on innovative projects that create a real impact.
        </p>

        {/* Experience Section */}
        <h2 className="font-semibold text-4xl tracking-tight">Experience</h2>

        {/* Experience 1 - Freelance Frontend Developer */}
        <div className="">

          <div className="flex justify-between items-start space-x-6 ">
            <div className="flex flex-col items-center">
              <div className="p-6 w-20 h-20 flex justify-center items-center border border-neutral-500 rounded-full">
                <Image src="/globe.svg" width={40} height={40} alt="exp" className="rounded-full" />
              </div>
              <span className="w-0.5 h-40 bg-gray-200"></span>
            </div>
            <div className="flex flex-col w-full">
              <h6 className="text-xs text-gray-400 uppercase">Feb 2025 - Present</h6>
              <h3 className="font-semibold text-xl">Freelance - Frontend Developer</h3>
              <div className="space-y-4 mt-2">
                <p className="text-neutral-600 text-lg leading-relaxed">
                  <strong>Built and deployed full-stack web applications</strong> using 
                  <strong> React.js, Node.js, MongoDB, and Tailwind CSS</strong>, ensuring <strong>seamless responsiveness</strong> 
                  and an <strong>optimal user experience</strong> across devices.
                </p>
                <p className="text-neutral-600 text-lg leading-relaxed">
                  Worked closely with clients to design scalable solutions, optimizing <strong>database efficiency and application performance</strong> to meet business objectives.
                </p>
              </div>
            </div>
          </div>

          {/* Experience 2 - Full Stack Developer Intern */}
          <div className="flex justify-between items-start space-x-6">
            <div className="flex flex-col items-center">
              <div className="p-6 w-20 h-20 flex justify-center items-center border border-neutral-500 rounded-full">
                <Image src="/globe.svg" width={40} height={40} alt="exp" className="rounded-full" />
              </div>
              {/* <span className="w-0.5 h-40 bg-gray-200"></span> */}
            </div>
            <div className="flex flex-col w-full">
              <h6 className="text-xs text-gray-400 uppercase">Feb 2025 - Present</h6>
              <h3 className="font-semibold text-xl">Full Stack Developer Intern - Wide Take</h3>
              <div className="space-y-4 mt-2">
                <p className="text-neutral-600 text-lg leading-relaxed">
                  <strong>Built a modern, responsive marketing agency website</strong> using <strong>React.js</strong> and <strong>Tailwind CSS</strong>, integrating smooth animations using <strong>Framer Motion</strong> and an intuitive user interface for an enhanced user experience.
                </p>
                <p className="text-neutral-600 text-lg leading-relaxed">
                  Enhanced <strong>website performance and SEO</strong>, for faster load times and improved search engine visibility.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
