import React from "react"
import Image from "next/image"

async function getBlog(id: string) {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : process.env.NEXT_PUBLIC_BASE_URL
    ? process.env.NEXT_PUBLIC_BASE_URL
    : "http://localhost:3000"
  const res = await fetch(`${baseUrl}/api/blogs`, { cache: "no-store" })
  const blogs = await res.json()
  return blogs.find((b: any) => b._id === id)
}

export default async function BlogDetail({
  params,
}: {
  params: { id: string }
}) {
  const blog = await getBlog(params.id)
  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Blog not found.
      </div>
    )
  }
  return (
    <div className="min-h-screen max-w-3xl mx-auto py-20 px-4">
      {blog.coverImage && (
        <div className="mb-8 flex justify-center">
          <Image
            src={blog.coverImage}
            alt="Cover"
            width={400}
            height={250}
            className="rounded-lg object-cover max-h-80 w-auto"
          />
        </div>
      )}
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <div className="flex flex-wrap gap-2 mb-4">
        {blog.tags &&
          blog.tags.map((tag: string, i: number) => (
            <span
              key={i}
              className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs"
            >
              {tag}
            </span>
          ))}
      </div>
      <div
        className="text-neutral-600 dark:text-neutral-300 prose max-w-none"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
      <p className="text-sm text-neutral-400 mt-8">
        {blog.createdAt ? new Date(blog.createdAt).toLocaleDateString() : ""}
      </p>
    </div>
  )
}
