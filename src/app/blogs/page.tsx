"use client"
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

const Blogs = () => {
  return (
    <div className="min-h-screen max-w-7xl mx-auto">
      <div className="flex flex-col py-32 mt-10 space-y-10 px-10">
        <div className="max-w-5xl mx-auto px-8">
          <div className=" flex flex-col w-full">
            <div className="flex flex-col gap-5">
              <div className="relative flex flex-col justify-start px-4 sm:px-10 md:px-20 flex-grow z-10">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-4">
                    <h2 className="font-semibold text-3xl md:text-4xl tracking-tight">
                      My Blogs
                    </h2>
                    <p className="font-light text-neutral-600 text-base md:text-lg lg:text-xl leading-relaxed tracking-wide">
                    Insights on web development, JavaScript, and tech trends. I share my experiences, coding tips, and project breakdowns.
                    </p>
                  </div>
                </div>

                <div className="mt-10 space-y-10">
                  {articles.map((article, index) => (
                    <div
                      key={index}
                      className="flex flex-col-reverse md:flex-row items-center md:items-start gap-6 border-b pb-6"
                    >
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold">
                          {article.title}
                        </h3>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs
