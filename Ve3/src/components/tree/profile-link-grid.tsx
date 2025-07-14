"use client"

import { LinkCard } from "@/components/tree/profile-link-card"
import type { Link } from "@/types"

interface LinksGridProps {
  links: Link[]
}

export function LinksGrid({ links }: LinksGridProps) {
  return (
    <div className="w-full space-y-2">
      {links.map((link) => (
        <LinkCard 
          key={link.id} 
          title={link.title} 
          url={link.url} 
          description={link.description} 
        />
      ))}
    </div>
  )
}