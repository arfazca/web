"use client"

import { ExternalLink } from "lucide-react"
import { LinkIcon } from "@/components/tree/profile-link-icon"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"

interface LinkCardProps {
  title: string
  url: string
  description: string 
}

export function LinkCard({ title, url, description }: LinkCardProps) {
  const router = useRouter();
  
  const handleClick = () => {
    if (url.startsWith('/')) {
      router.push(url);
    } else {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  }

  return (
    <div className="relative group">
      {/* Hover glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm" />
      
      <button
        onClick={handleClick}
        className={cn(
          "relative w-full group/button overflow-hidden",
          "flex items-center gap-3 p-4",
          "bg-background border border-border rounded-lg",
          "hover:bg-accent hover:border-primary/30",
          "transition-all duration-200 ease-in-out",
          "hover:shadow-lg hover:shadow-primary/5 hover:scale-[1.02]",
          "active:scale-[0.98]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          "focus:outline-none"
        )}
      >
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground group-hover/button:shadow-md group-hover/button:shadow-primary/20 transition-shadow duration-200">
          <LinkIcon url={url} size={18} />
        </div>
        <div className="flex-1 text-left">
          <h3 className="font-medium text-foreground group-hover/button:text-primary transition-colors">{title}</h3>
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover/button:text-primary transition-colors" />
      </button>
    </div>
  )
}