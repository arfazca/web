export interface BlogPost {
  id: number
  title: string
  content: string
  publishedDate: string
}

export const fetchPosts = async (): Promise<BlogPost[]> => {
  const response = await fetch("https://localhost:5001/api/blog")
  if (!response.ok) {
    throw new Error("Failed to fetch posts")
  }
  return response.json()
}

export const fetchPostById = async (id: number): Promise<BlogPost> => {
  const response = await fetch(`https://localhost:5001/api/blog/${id}`)
  if (!response.ok) {
    throw new Error("Failed to fetch post")
  }
  return response.json()
}

// Keep the blogService object for consistency with the components
export const blogService = {
  getAllPosts: fetchPosts,
  getPostById: fetchPostById,
}

