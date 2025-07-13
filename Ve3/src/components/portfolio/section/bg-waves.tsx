"use client"

import WaDe from "@/components/ui/graphics/waves"

export default function FullscreenWaves() {
  return (
    <div className="fixed inset-0 w-screen h-screen -z-50">
      <WaDe />
    </div>
  )
}