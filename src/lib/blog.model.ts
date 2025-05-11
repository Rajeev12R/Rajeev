import mongoose, { Schema, models, model } from "mongoose"

const BlogSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    coverImage: { type: String },
    tags: [{ type: String }],
  },
  { timestamps: true }
)

export default models.Blog || model("Blog", BlogSchema)
