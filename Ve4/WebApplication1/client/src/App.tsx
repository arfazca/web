"use client"

import type React from "react"
import { useState } from "react"
import type { BlogPost as BlogPostType } from "./types/blog"
import { fetchPostById } from "./services/blogService"
import BlogList from "./pages/BlogList"
import BlogPost from "./components/BlogPost"
import LoadingSpinner from "./components/LoadingSpinner"
import ErrorMessage from "./components/ErrorMessage"
import "./App.css"

type ViewMode = "list" | "post"

const App: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>("list")
  const [selectedPost, setSelectedPost] = useState<BlogPostType | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handlePostSelect = async (postId: number) => {
    try {
      setLoading(true)
      setError(null)
      const post = await fetchPostById(postId)
      setSelectedPost(post)
      setViewMode("post")
    } catch (err) {
      setError("Failed to load the blog post. Please try again.")
      console.error("Error fetching post:", err)
    } finally {
      setLoading(false)
    }
  }

  const handleBackToList = () => {
    setViewMode("list")
    setSelectedPost(null)
    setError(null)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1
                className="text-2xl font-bold text-gray-900 cursor-pointer hover:text-blue-600 transition-colors"
                onClick={handleBackToList}
              >
                My Blog
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button
                onClick={handleBackToList}
                className={`text-sm font-medium transition-colors ${
                  viewMode === "list"
                    ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                All Posts
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading && <LoadingSpinner />}

        {error && !loading && (
          <ErrorMessage
            message={error}
            onRetry={() => {
              setError(null)
              if (viewMode === "list") {
                window.location.reload()
              } else {
                handleBackToList()
              }
            }}
          />
        )}

        {!loading && !error && (
          <>
            {viewMode === "list" && <BlogList onPostSelect={handlePostSelect} />}

            {viewMode === "post" && selectedPost && <BlogPost post={selectedPost} onBack={handleBackToList} />}
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-500 text-sm">
            <p>&copy; 2024 My Blog. Built with React, TypeScript, and Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
