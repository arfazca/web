"use client"

import type React from "react"
import type { BlogPost as BlogPostType } from "../types/blog"

interface BlogPostProps {
  post: BlogPostType
  onBack: () => void
}

const BlogPost: React.FC<BlogPostProps> = ({ post, onBack }) => {
  const formatDate = (dateString?: string) => {
    if (!dateString) return ""
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <article className="max-w-4xl mx-auto">
      <button
        onClick={onBack}
        className="mb-6 flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium"
      >
        ← Back to all posts
      </button>

      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">{post.title}</h1>
        {post.publishedDate && (
          <time className="text-gray-500 text-sm">Published on {formatDate(post.publishedDate)}</time>
        )}
      </header>

      <div className="prose prose-lg max-w-none">
        <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">{post.content}</div>
      </div>
    </article>
  )
}

export default BlogPost
