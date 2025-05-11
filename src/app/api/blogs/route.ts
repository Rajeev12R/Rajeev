import { NextRequest, NextResponse } from "next/server"
import Blog from "@/lib/blog.model"
import { dbConnect } from "@/lib/db"

export async function GET() {
  await dbConnect()
  const blogs = await Blog.find().sort({ createdAt: -1 })
  return NextResponse.json(blogs)
}

export async function POST(req: NextRequest) {
  await dbConnect()
  const data = await req.json()
  const blog = await Blog.create(data)
  return NextResponse.json(blog, { status: 201 })
}

export async function PUT(req: NextRequest) {
  await dbConnect()
  const { id, ...data } = await req.json()
  const blog = await Blog.findByIdAndUpdate(id, data, { new: true })
  if (!blog) return NextResponse.json({ error: "Not found" }, { status: 404 })
  return NextResponse.json(blog)
}

export async function DELETE(req: NextRequest) {
  await dbConnect()
  const { id } = await req.json()
  const blog = await Blog.findByIdAndDelete(id)
  if (!blog) return NextResponse.json({ error: "Not found" }, { status: 404 })
  return NextResponse.json({ success: true })
}
