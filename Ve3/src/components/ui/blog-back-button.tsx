"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface BackButtonProps {
  href?: string
  label?: string
}

export function BackButton({ href = "/blog", label = "Back to Blog" }: BackButtonProps) {
  const router = useRouter()
  
  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault()
    if (window.history.length > 1) {
      router.back()
    } else {
      router.push(href)
    }
  }

  return (
    <div className="fixed top-4 left-4 z-50">
      <button
        onClick={handleBack}
        className="flex items-center gap-2 px-4 py-2 border rounded-lg bg-background/80 backdrop-blur-sm hover:bg-accent/50 transition-colors shadow-lg"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="font-medium text-sm hidden sm:inline">{label}</span>
      </button>
    </div>
  )
}