"use client"
import { useState, useEffect, useRef } from "react"
import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Image from "@tiptap/extension-image"
import TextStyle from "@tiptap/extension-text-style"
import Color from "@tiptap/extension-color"
import Highlight from "@tiptap/extension-highlight"
import FontFamily from "@tiptap/extension-font-family"
import Heading from "@tiptap/extension-heading"
import ListItem from "@tiptap/extension-list-item"
import BulletList from "@tiptap/extension-bullet-list"
import OrderedList from "@tiptap/extension-ordered-list"
import Blockquote from "@tiptap/extension-blockquote"
import CodeBlock from "@tiptap/extension-code-block"
import "@fontsource/poppins/400.css"
import "@fontsource/poppins/700.css"

const PASSWORD = process.env.NEXT_PUBLIC_PASSWORD // Change this to your desired password

const fontFamilies = [
  "Poppins",
  "Arial",
  "Roboto",
  "Georgia",
  "Courier New",
  "Times New Roman",
]

const extensions = [
  StarterKit,
  Image,
  TextStyle,
  Color,
  Highlight,
  FontFamily,
  Heading,
  ListItem,
  BulletList,
  OrderedList,
  Blockquote,
  CodeBlock,
]

function Toolbar({ editor }: { editor: any }) {
  if (!editor) return null
  return (
    <div className="flex flex-wrap gap-2 mb-4 items-center bg-neutral-100 dark:bg-neutral-800 p-2 rounded-lg shadow-sm sticky top-0 z-20">
      <button
        title="Undo"
        onClick={() => editor.chain().focus().undo().run()}
        className="px-2 text-lg"
      >
        ↺
      </button>
      <button
        title="Redo"
        onClick={() => editor.chain().focus().redo().run()}
        className="px-2 text-lg"
      >
        ↻
      </button>
      <span className="mx-2 border-l h-6 border-neutral-300 dark:border-neutral-700"></span>
      <button
        title="Bold"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={
          editor.isActive("bold")
            ? "font-bold bg-blue-200 px-2 rounded"
            : "px-2"
        }
      >
        B
      </button>
      <button
        title="Italic"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={
          editor.isActive("italic") ? "italic bg-blue-200 px-2 rounded" : "px-2"
        }
      >
        I
      </button>
      <button
        title="Highlight"
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        className={
          editor.isActive("highlight") ? "bg-yellow-200 px-2 rounded" : "px-2"
        }
      >
        H
      </button>
      <input
        title="Text color"
        type="color"
        onChange={(e) => editor.chain().focus().setColor(e.target.value).run()}
        className="w-6 h-6 border-none bg-transparent"
      />
      <select
        title="Font family"
        onChange={(e) =>
          editor.chain().focus().setFontFamily(e.target.value).run()
        }
        defaultValue=""
      >
        <option value="">Font</option>
        {fontFamilies.map((f) => (
          <option key={f} value={f}>
            {f}
          </option>
        ))}
      </select>
      <span className="mx-2 border-l h-6 border-neutral-300 dark:border-neutral-700"></span>
      <button
        title="Heading 1"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={
          editor.isActive("heading", { level: 1 })
            ? "bg-blue-200 px-2 rounded"
            : "px-2"
        }
      >
        H1
      </button>
      <button
        title="Heading 2"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={
          editor.isActive("heading", { level: 2 })
            ? "bg-blue-200 px-2 rounded"
            : "px-2"
        }
      >
        H2
      </button>
      <button
        title="Heading 3"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={
          editor.isActive("heading", { level: 3 })
            ? "bg-blue-200 px-2 rounded"
            : "px-2"
        }
      >
        H3
      </button>
      <span className="mx-2 border-l h-6 border-neutral-300 dark:border-neutral-700"></span>
      <button
        title="Bullet List"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={
          editor.isActive("bulletList") ? "bg-blue-200 px-2 rounded" : "px-2"
        }
      >
        • List
      </button>
      <button
        title="Numbered List"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={
          editor.isActive("orderedList") ? "bg-blue-200 px-2 rounded" : "px-2"
        }
      >
        1. List
      </button>
      <button
        title="Blockquote"
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={
          editor.isActive("blockquote") ? "bg-blue-200 px-2 rounded" : "px-2"
        }
      >
        ❝
      </button>
      <button
        title="Code Block"
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={
          editor.isActive("codeBlock") ? "bg-blue-200 px-2 rounded" : "px-2"
        }
      >
        {"</>"}
      </button>
      <button
        title="Image"
        onClick={() => {
          const url = prompt("Image URL")
          if (url) editor.chain().focus().setImage({ src: url }).run()
        }}
        className="px-2"
      >
        🖼️
      </button>
      <button
        title="Font 16px"
        onClick={() => editor.chain().focus().setFontSize("16px").run()}
        className="px-2"
      >
        16px
      </button>
      <button
        title="Font 24px"
        onClick={() => editor.chain().focus().setFontSize("24px").run()}
        className="px-2"
      >
        24px
      </button>
      <button
        title="Font 32px"
        onClick={() => editor.chain().focus().setFontSize("32px").run()}
        className="px-2"
      >
        32px
      </button>
    </div>
  )
}

function Toast({ message, onClose }: { message: string; onClose: () => void }) {
  if (!message) return null
  return (
    <div className="fixed top-6 right-6 z-50 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in">
      {message}
      <button onClick={onClose} className="ml-4 text-white font-bold">
        ×
      </button>
    </div>
  )
}

export default function Dashboard() {
  const [input, setInput] = useState("")
  const [authed, setAuthed] = useState(false)
  const [error, setError] = useState("")
  const [blogs, setBlogs] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [editing, setEditing] = useState<any>(null)
  const [title, setTitle] = useState("")
  const [coverImage, setCoverImage] = useState("")
  const [tags, setTags] = useState("")
  const [toast, setToast] = useState("")
  const [showDelete, setShowDelete] = useState<{
    id: string | null
    open: boolean
  }>({ id: null, open: false })
  const editor = useEditor({
    extensions,
    content: "",
    editorProps: {
      attributes: {
        style:
          "font-family: Poppins, Arial, sans-serif; min-height: 200px; background: #f8fafc; border-radius: 0.5rem; padding: 1rem;",
      },
    },
  })
  const fileInputRef = useRef<HTMLInputElement>(null)

  function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    if (input === PASSWORD) {
      setAuthed(true)
      setError("")
    } else {
      setError("Incorrect password")
    }
  }

  async function fetchBlogs() {
    setLoading(true)
    const res = await fetch("/api/blogs")
    const data = await res.json()
    setBlogs(data)
    setLoading(false)
  }

  useEffect(() => {
    if (authed) fetchBlogs()
  }, [authed])

  function resetForm() {
    setTitle("")
    setCoverImage("")
    setTags("")
    editor?.commands.setContent("")
    setEditing(null)
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault()
    const payload = {
      title,
      content: editor?.getHTML() || "",
      coverImage,
      tags: tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
    }
    let res
    if (editing) {
      res = await fetch("/api/blogs", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: editing._id, ...payload }),
      })
    } else {
      res = await fetch("/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
    }
    if (res.ok) {
      fetchBlogs()
      resetForm()
      setToast(editing ? "Blog updated!" : "Blog published!")
    }
  }

  function handleEdit(blog: any) {
    setEditing(blog)
    setTitle(blog.title)
    setCoverImage(blog.coverImage || "")
    setTags(blog.tags?.join(", ") || "")
    editor?.commands.setContent(blog.content)
  }

  function handleDeletePrompt(id: string) {
    setShowDelete({ id, open: true })
  }

  async function handleDelete(id: string) {
    setShowDelete({ id: null, open: false })
    await fetch("/api/blogs", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    })
    fetchBlogs()
    setToast("Blog deleted!")
  }

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    // For demo: use a local URL. In production, upload to a server or cloud storage.
    const url = URL.createObjectURL(file)
    setCoverImage(url)
  }

  if (!authed) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-4 p-8 bg-white rounded shadow-md w-80"
        >
          <h2 className="text-xl font-bold">Dashboard Login</h2>
          <input
            type="password"
            placeholder="Enter password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border px-3 py-2 rounded"
          />
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <button type="submit" className="bg-black text-white py-2 rounded">
            Login
          </button>
        </form>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pt-28 font-[Poppins,Arial,sans-serif]">
      <Toast message={toast} onClose={() => setToast("")} />
      <div className="my-10">
        <form
          onSubmit={handleSave}
          className="bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-lg mb-10 max-w-2xl mx-auto border border-neutral-200 dark:border-neutral-800"
        >
          <div className="mb-6">
            <label className="block font-semibold mb-2 text-neutral-700 dark:text-neutral-200 font-[Poppins,Arial,sans-serif]">
              Title
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-neutral-300 dark:border-neutral-700 px-4 py-2 rounded w-full bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block font-semibold mb-2 text-neutral-700 dark:text-neutral-200 font-[Poppins,Arial,sans-serif]">
              Cover Image
            </label>
            <input
              type="text"
              value={coverImage}
              onChange={(e) => setCoverImage(e.target.value)}
              className="border border-neutral-300 dark:border-neutral-700 px-4 py-2 rounded w-full mb-2 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
              placeholder="Paste image URL or upload below"
            />
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageUpload}
            />
            {coverImage && (
              <img
                src={coverImage}
                alt="cover"
                className="mt-2 max-h-32 rounded shadow"
              />
            )}
          </div>
          <div className="mb-6">
            <label className="block font-semibold mb-2 text-neutral-700 dark:text-neutral-200 font-[Poppins,Arial,sans-serif]">
              Tags (comma separated)
            </label>
            <input
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="border border-neutral-300 dark:border-neutral-700 px-4 py-2 rounded w-full bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
              placeholder="e.g. tech, react, nextjs"
            />
          </div>
          <div className="mb-6">
            <label className="block font-semibold mb-2 text-neutral-700 dark:text-neutral-200 font-[Poppins,Arial,sans-serif]">
              Content
            </label>
            <Toolbar editor={editor} />
            <div className="border border-neutral-200 dark:border-neutral-700 rounded min-h-[200px] p-2 bg-neutral-50 dark:bg-neutral-800">
              <EditorContent editor={editor} />
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:scale-105 transition"
            >
              {editing ? "Update" : "Publish"}
            </button>
            {editing && (
              <button
                type="button"
                onClick={resetForm}
                className="bg-neutral-300 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 px-6 py-2 rounded-full font-semibold shadow"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
        <h2 className="text-2xl font-bold mb-6 font-[Poppins,Arial,sans-serif] text-neutral-800 dark:text-neutral-100">
          Your Blogs
        </h2>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="grid gap-8 max-w-4xl mx-auto">
            {blogs.map((blog) => (
              <div
                key={blog._id}
                className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow flex flex-col md:flex-row gap-6 items-center border border-neutral-200 dark:border-neutral-800 relative group transition hover:shadow-xl"
              >
                {blog.coverImage && (
                  <img
                    src={blog.coverImage}
                    alt="cover"
                    className="w-32 h-24 object-cover rounded shadow"
                  />
                )}
                <div className="flex-1">
                  <h3 className="font-bold text-lg font-[Poppins,Arial,sans-serif] text-neutral-900 dark:text-neutral-100">
                    {blog.title}
                  </h3>
                  <div className="text-sm text-gray-500 mb-1">
                    {blog.tags?.join(", ")}
                  </div>
                  <div
                    className="prose max-w-none text-neutral-700 dark:text-neutral-300"
                    dangerouslySetInnerHTML={{
                      __html:
                        blog.content?.slice(0, 200) +
                        (blog.content?.length > 200 ? "..." : ""),
                    }}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => handleEdit(blog)}
                    className="bg-yellow-300 hover:bg-yellow-400 px-3 py-1 rounded font-semibold transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeletePrompt(blog._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded font-semibold transition"
                  >
                    Delete
                  </button>
                </div>
                {/* Delete confirmation modal */}
                {showDelete.open && showDelete.id === blog._id && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                    <div className="bg-white dark:bg-neutral-900 p-8 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-800 flex flex-col items-center">
                      <p className="mb-4 text-lg font-semibold text-neutral-800 dark:text-neutral-100">
                        Are you sure you want to delete this blog?
                      </p>
                      <div className="flex gap-4">
                        <button
                          onClick={() => handleDelete(blog._id)}
                          className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-semibold"
                        >
                          Yes, Delete
                        </button>
                        <button
                          onClick={() =>
                            setShowDelete({ id: null, open: false })
                          }
                          className="bg-neutral-300 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 px-6 py-2 rounded-full font-semibold"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
