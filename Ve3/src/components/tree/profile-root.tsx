"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ProfileHeader } from "@/components/tree/profile-header"
import { LinksGrid } from "@/components/tree/profile-link-grid"
import { DATA } from "@/data/resume"
import type { ProfileData } from "@/types"

export function MyLinkedTree() {
  const [data, setData] = useState<ProfileData | null>(null)
  const [loading, setLoading] = useState(true)
  const [currentTime, setCurrentTime] = useState<string>("")

  useEffect(() => {
    const loadData = async () => {
      try {
        // Extract the needed data from DATA object
        const profileData: ProfileData = {
          profile: DATA.profile,
          links: DATA.links,
          // theme: DATA.theme
        }
        
        setData(profileData)

        // Apply theme settings
        if (profileData.theme) {
          document.documentElement.classList.remove("font-sans", "font-serif", "font-mono")
          document.documentElement.classList.add(profileData.theme.font)

          // Apply pattern if specified
          const mainElement = document.querySelector("main")
          if (mainElement && profileData.theme.pattern !== "none") {
            mainElement.classList.add(profileData.theme.pattern)
          }
        }
      } catch (error) {
        console.error("Failed to load profile data:", error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  // Update time every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const pstTime = now.toLocaleString("en-US", {
        timeZone: "America/Vancouver",
        hour12: false,
        hour: "numeric",
        minute: "2-digit",
      })
      setCurrentTime(pstTime)
    }

    updateTime()
    const interval = setInterval(updateTime, 60000) 

    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-muted-foreground">Failed to load profile data</p>
      </div>
    )
  }

  const currentYear = new Date().getFullYear()

  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="shadow-2xl border backdrop-blur-md bg-black/[0.01] dark:bg-black/[0.03] border-white/[0.01] dark:border-white/[0.005] rounded-xl">
        <CardContent className="p-8 space-y-8">
          <ProfileHeader profile={data.profile} />
          <LinksGrid links={[...data.links]} />
            <div className="text-center text-xs text-muted-foreground space-y-2">
              <span className="text-sm">🌲⛴️🏂</span>
              <div className="text-center text-xs text-muted-foreground flex items-center justify-center gap-1">
                <span>{currentTime} Pacific Standard Time</span>
                <span className="text-[9px]">|</span>
                <span>© {currentYear} All rights reserved.</span>
              </div>
            </div>
        </CardContent>
      </Card>
    </div>
  )
}