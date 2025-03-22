import React from "react"
import Image from "next/image"
const articles = [
  {
    title: "Mastering Dynamic Theming in Tailwind CSS: A Step-by-Step Guide",
    description:
      "Master the art of dynamic theming in Tailwind CSS and create adaptable, user-centric interfaces in your React application. Master the art of dynamic theming in Tailwind CSS and create adaptable, user-centric interfaces in your React application.",
    date: "1 May 2024",
    image: "/globe.svg",
  },
  {
    title:
      "The Tao of Web Development - Reflections of a Senior Frontend Engineer",
    description:
      "Exploring the creative and philosophical aspects of coding in web development, comparing it to artistic expression. Master the art of dynamic theming in Tailwind CSS and create adaptable, user-centric interfaces in your React application.",
    date: "15 Mar 2024",
    image: "/globe.svg",
  },
  {
    title: "How to Set Up Tailwind CSS with Webpack: A Step-by-Step Guide",
    description:
      "Transform your React project's styling workflow with this step-by-step guide to integrating Tailwind CSS with Webpack. Master the art of dynamic theming in Tailwind CSS and create adaptable, user-centric interfaces in your React application. v",
    date: "1 Feb 2024",
    image: "/globe.svg",
  },
]

const Writings = () => {
  return (
    <div className="py-32 flex flex-col w-full">
      <div className="flex flex-col gap-5">
        <div className="relative flex flex-col justify-start px-4 sm:px-10 md:px-20 flex-grow z-10">

          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold leading-10 tracking-tight text-neutral-900 dark:text-neutral-100">
                My Writings
              </h2>
              <p className="text-lg text-neutral-700 dark:text-neutral-300">
                Along with coding, I also like to write about life and
                technology. Here are some of my recent posts.
              </p>
            </div>
            <div className="hidden md:block relative w-full pl-5 overflow-x-hidden md:pl-0">
              <div className="absolute w-full h-px bg-gradient-to-r from-transparent to-white md:from-white dark:from-transparent dark:to-neutral-950 md:dark:from-neutral-950 md:via-transparent md:dark:via-transparent md:to-neutral-300 md:dark:to-neutral-600"></div>
              <div className="w-full h-px border-t border-solid border-neutral-300 dark:border-neutral-600"></div>
            </div>
          </div>

          <div className="mt-10 space-y-10">
            {articles.map((article, index) => (
              <div
                key={index}
                className="flex flex-col-reverse md:flex-row items-center md:items-start gap-6 border-b pb-6"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{article.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-300 mt-2">
                    {article.description}
                  </p>
                  <p className="text-sm text-neutral-400 mt-1">
                    {article.date}
                  </p>
                </div>
                <div className="p-5">
                  <Image
                    src={article.image}
                    alt="Article Thumbnail"
                    width={120}
                    height={120}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <button
              type="button"
              className="border border-black px-6 py-2 rounded-full bg-transparent hover:bg-black hover:text-white cursor-pointer transition-all duration-500 max-w-fit mx-auto"
            >
              View All Articles
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Writings
