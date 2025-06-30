"use client"

import type React from "react"
import type { BlogPostPreview } from "../types/blog"

interface BlogCardProps {
  post: BlogPostPreview
  onClick: (id: number) => void
}

const BlogCard: React.FC<BlogCardProps> = ({ post, onClick }) => {
  const truncateContent = (content: string, maxLength = 150) => {
    if (content.length <= maxLength) return content
    return content.substring(0, maxLength) + "..."
  }

  return (
    <article
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer border border-gray-200"
      onClick={() => onClick(post.id)}
    >
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">{post.title}</h2>
        <p className="text-gray-600 leading-relaxed mb-4">{truncateContent(post.content)}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-blue-600 font-medium hover:text-blue-800 transition-colors">Read more →</span>
        </div>
      </div>
    </article>
  )
}

export default BlogCard
