"use client"

import { ExternalLink } from "lucide-react"
import { LinkIcon } from "@/components/tree/profile-link-icon"
import { cn } from "@/lib/utils"

interface LinkCardProps {
  title: string
  url: string
  description: string // Change from category to description
}

export function LinkCard({ title, url, description }: LinkCardProps) {
  const handleClick = () => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <button
      onClick={handleClick}
      className={cn(
        "w-full group relative overflow-hidden",
        "flex items-center gap-3 p-4",
        "bg-background border border-border rounded-lg",
        "hover:bg-accent hover:border-primary/30",
        "transition-all duration-200 ease-in-out",
        "hover:shadow-md hover:scale-[1.02]",
        "active:scale-[0.98]",
        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
      )}
    >
      {/* Icon */}
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground">
        <LinkIcon url={url} size={18} />
      </div>

      {/* Content */}
      <div className="flex-1 text-left">
        <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>

      {/* External link icon */}
      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
    </button>
  )
}