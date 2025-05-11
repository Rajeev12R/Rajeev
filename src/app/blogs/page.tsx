"use client"
import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

const Blogs = () => {
  const [blogs, setBlogs] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchBlogs() {
      setLoading(true)
      const res = await fetch("/api/blogs")
      const data = await res.json()
      setBlogs(data)
      setLoading(false)
    }
    fetchBlogs()
  }, [])

  return (
    <div className="min-h-screen max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-10 pt-28">
      <div className="flex flex-col space-y-10">
        <div className="max-w-5xl mx-auto px-0">
          <div className=" flex flex-col w-full">
            <div className="flex flex-col gap-5">
              <div className="relative flex flex-col justify-start flex-grow z-10">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-4">
                    <h2 className="font-semibold text-3xl md:text-4xl tracking-tight">
                      My Blogs
                    </h2>
                    <p className="font-light text-neutral-600 text-base md:text-lg lg:text-xl leading-relaxed tracking-wide">
                      Insights on web development, JavaScript, and tech trends.
                      I share my experiences, coding tips, and project
                      breakdowns.
                    </p>
                  </div>
                </div>

                <div className="mt-10 space-y-10">
                  {loading ? (
                    <div>Loading...</div>
                  ) : blogs.length === 0 ? (
                    <div>No blogs found.</div>
                  ) : (
                    blogs.map((blog) => (
                      <div
                        key={blog._id}
                        className="flex flex-col-reverse md:flex-row items-center md:items-start gap-6 border-b pb-6"
                      >
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold">
                            {blog.title}
                          </h3>
                          <div
                            className="text-neutral-600 dark:text-neutral-300 mt-2 prose max-w-none"
                            dangerouslySetInnerHTML={{
                              __html:
                                blog.content?.length > 300
                                  ? blog.content.slice(0, 300) +
                                    `... <a href='/blogs/${blog._id}' class='text-blue-600 hover:underline font-medium'>See more</a>`
                                  : blog.content,
                            }}
                          />
                          <p className="text-sm text-neutral-400 mt-1">
                            {" "}
                            Date:
                            {blog.createdAt
                              ? new Date(blog.createdAt).toLocaleDateString()
                              : ""}
                          </p>
                          {blog.tags && blog.tags.length > 0 && (
                            <div className="mt-2 flex flex-wrap gap-2">
                              {blog.tags.map((tag: string, i: number) => (
                                <span
                                  key={tag + i}
                                  className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                        <div className="p-5">
                          {blog.coverImage && (
                            <Image
                              src={blog.coverImage}
                              alt="Article Thumbnail"
                              width={120}
                              height={120}
                              className="w-24 h-24 object-cover rounded-lg"
                            />
                          )}
                        </div>
                      </div>
                    ))
                  )}
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
