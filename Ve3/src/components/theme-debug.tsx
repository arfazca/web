"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function ThemeDebug() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Get current colors for debugging
  const currentTheme = resolvedTheme || theme
  const colors =
    currentTheme === "dark"
      ? {
          lineColor: "rgba(255, 255, 255, 0.2)",
          backgroundColor: "#000000",
        }
      : {
          lineColor: "rgba(0, 0, 0, 0.15)",
          backgroundColor: "#ffffff",
        }

  return (
    <div className="fixed top-4 right-4 z-50 p-4 bg-card border rounded-lg shadow-lg max-w-xs">
      <h3 className="font-semibold mb-2">Theme Debug</h3>
      <div className="space-y-2 text-sm">
        <div>
          Theme: <span className="font-mono">{theme}</span>
        </div>
        <div>
          Resolved: <span className="font-mono">{resolvedTheme}</span>
        </div>
        <div>
          System:{" "}
          <span className="font-mono">
            {typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches
              ? "dark"
              : "light"}
          </span>
        </div>
        <div className="pt-2 border-t">
          <div>
            Line Color: <span className="font-mono text-xs">{colors.lineColor}</span>
          </div>
          <div>
            BG Color: <span className="font-mono text-xs">{colors.backgroundColor}</span>
          </div>
        </div>
      </div>
      <div className="flex gap-2 mt-3">
        <Button size="sm" onClick={() => setTheme("light")} variant={theme === "light" ? "default" : "outline"}>
          Light
        </Button>
        <Button size="sm" onClick={() => setTheme("dark")} variant={theme === "dark" ? "default" : "outline"}>
          Dark
        </Button>
        <Button size="sm" onClick={() => setTheme("system")} variant={theme === "system" ? "default" : "outline"}>
          System
        </Button>
      </div>

      {/* Test canvas to verify colors work */}
      <div className="mt-4 pt-2 border-t">
        <div className="text-xs mb-2">Canvas Test:</div>
        <canvas
          width="100"
          height="50"
          style={{
            backgroundColor: colors.backgroundColor,
            border: "1px solid #ccc",
          }}
          ref={(canvas) => {
            if (canvas) {
              const ctx = canvas.getContext("2d")
              if (ctx) {
                ctx.clearRect(0, 0, 100, 50)
                ctx.fillStyle = colors.backgroundColor
                ctx.fillRect(0, 0, 100, 50)
                ctx.strokeStyle = colors.lineColor
                ctx.lineWidth = 2
                ctx.beginPath()
                ctx.moveTo(10, 25)
                ctx.lineTo(90, 25)
                ctx.stroke()
              }
            }
          }}
        />
      </div>
    </div>
  )
}
