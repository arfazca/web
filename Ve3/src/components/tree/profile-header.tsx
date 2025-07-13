"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { VerifiedBadge } from "@/components/ui/verified-badge"
import type { Profile } from "@/types"

interface ProfileHeaderProps {
  profile: Profile
}

export function ProfileHeader({ profile }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center space-y-4 text-center">
      <Avatar className="h-24 w-24 border-2 border-border">
        <AvatarImage src={profile.avatarUrl || "/placeholder.svg"} alt={profile.name} />
        <AvatarFallback className="text-lg font-semibold">{profile.name.charAt(0)}</AvatarFallback>
      </Avatar>

      <div className="space-y-2">
        <div className="flex items-center justify-center gap-2">
          <h1 className="text-2xl font-bold text-foreground">{profile.name}</h1>
          {profile.verified && <VerifiedBadge />}
        </div>

        <p className="text-muted-foreground max-w-md leading-relaxed">{profile.bio}</p>
      </div>
    </div>
  )
}
