"use client"

import { useEffect, useState, useRef } from "react"
import { ChevronDown, ChevronRight, List } from "lucide-react"
import { cn } from "@/lib/utils"

interface TocItem {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  className?: string
}

export function TableOfContents({ className }: TableOfContentsProps) {
  const [toc, setToc] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>("")
  const [isOpen, setIsOpen] = useState(false)
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set())
  const activeElementRef = useRef<HTMLButtonElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Add slight delay to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      // Only select headings from the article content, exclude TOC itself
      const headings = document.querySelectorAll("article h1, article h2, article h3, article h4, article h5, article h6")
      if (headings.length === 0) return
      
      const tocItems: TocItem[] = Array.from(headings).map((heading) => {
        // Ensure heading has an ID for navigation
        if (!heading.id) {
          heading.id = heading.textContent?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '') || ''
        }
        return {
          id: heading.id,
          text: heading.textContent || "",
          level: parseInt(heading.tagName.charAt(1)),
        }
      })
      setToc(tocItems)

      // Calculate the 10% threshold line and find active section
      const updateActiveSection = () => {
        if (tocItems.length === 0) return
        
        const viewportHeight = window.innerHeight
        const thresholdY = viewportHeight * 0.1 // 10% from top
        
        let activeSection = ""
        let closestDistance = Infinity
        
        // First, check headings that are above or at the 10% line
        headings.forEach((heading) => {
          const rect = heading.getBoundingClientRect()
          const headingTop = rect.top
          
          if (headingTop <= thresholdY) {
            const distance = thresholdY - headingTop
            if (distance < closestDistance) {
              closestDistance = distance
              activeSection = heading.id
            }
          }
        })
        
        // If no heading is above the 10% line, find the first one below it
        if (!activeSection) {
          let firstBelowDistance = Infinity
          headings.forEach((heading) => {
            const rect = heading.getBoundingClientRect()
            const headingTop = rect.top
            
            if (headingTop > thresholdY) {
              const distance = headingTop - thresholdY
              if (distance < firstBelowDistance) {
                firstBelowDistance = distance
                activeSection = heading.id
              }
            }
          })
        }
        
        // If still no active section and we have headings, use the first one
        if (!activeSection && tocItems.length > 0) {
          activeSection = tocItems[0].id
        }
        
        if (activeSection && activeSection !== activeId) {
          setActiveId(activeSection)
          
          // Auto-expand sections for active heading
          const activeItem = tocItems.find(item => item.id === activeSection)
          if (activeItem) {
            const newExpanded = new Set<string>()
            
            // Only expand the direct parent of the active item
            for (let i = 0; i < tocItems.length; i++) {
              const item = tocItems[i]
              if (item.id === activeSection) break
              
              // If this is a higher level heading that comes before our active item
              if (item.level < activeItem.level) {
                // Find if this is the immediate parent
                let isImmediateParent = true
                for (let j = i + 1; j < tocItems.length; j++) {
                  if (tocItems[j].id === activeSection) break
                  if (tocItems[j].level <= item.level && tocItems[j].level < activeItem.level) {
                    isImmediateParent = false
                    break
                  }
                }
                if (isImmediateParent) {
                  newExpanded.add(item.id)
                }
              }
            }
            
            setExpandedSections(newExpanded)
          }
        }
      }

      // Update on scroll
      const handleScroll = () => {
        updateActiveSection()
      }

      // Initial update
      updateActiveSection()
      
      // Listen to scroll events
      window.addEventListener('scroll', handleScroll, { passive: true })
      
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [activeId])

  // Center the active item when it changes
  useEffect(() => {
    if (activeId && activeElementRef.current && containerRef.current) {
      const container = containerRef.current
      const activeElement = activeElementRef.current
      
      const containerHeight = container.clientHeight
      const elementTop = activeElement.offsetTop
      const elementHeight = activeElement.clientHeight
      
      const scrollTo = elementTop - (containerHeight / 2) + (elementHeight / 2)
      
      container.scrollTo({
        top: scrollTo,
        behavior: 'smooth'
      })
    }
  }, [activeId])

  // Helper function to check if an item should be visible
  const isItemVisible = (item: TocItem, index: number) => {
    // Always show level 1 headings
    if (item.level === 1) return true
    
    // Find the parent section for this item
    for (let i = index - 1; i >= 0; i--) {
      const parentItem = toc[i]
      if (parentItem.level < item.level) {
        return expandedSections.has(parentItem.id)
      }
    }
    
    return true // Show if no parent found
  }

  const toggleSection = (id: string) => {
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(id)) {
      newExpanded.delete(id)
    } else {
      newExpanded.add(id)
    }
    setExpandedSections(newExpanded)
  }

  const handleClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      // Set active immediately for better UX
      setActiveId(id)
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
      setIsOpen(false)
    }
  }

  const hasChildren = (itemId: string, itemLevel: number, currentIndex: number) => {
    return currentIndex < toc.length - 1 && toc[currentIndex + 1].level > itemLevel
  }

  if (toc.length === 0) return null

  return (
    <>
      {/* Mobile TOC Toggle - Always floating at top and centered */}
      <div className="xl:hidden fixed top-4 left-1/2 transform -translate-x-1/2 z-50 mb-6 w-auto max-w-[90vw]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-4 py-2 border rounded-lg bg-background/80 backdrop-blur-sm hover:bg-accent/50 transition-colors shadow-lg whitespace-nowrap"
        >
          <List className="w-4 h-4" />
          <span className="font-medium text-sm">
            {activeId ? toc.find(item => item.id === activeId)?.text || "Table of Contents" : "Table of Contents"}
          </span>
          <ChevronDown className={cn("w-4 h-4 transition-transform", isOpen && "rotate-180")} />
        </button>
        
        {isOpen && (
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-background/90 backdrop-blur-md border rounded-lg p-4 shadow-xl w-80 max-w-[90vw] max-h-96 overflow-y-auto">
            <nav>
              <ul className="space-y-1">
                {toc.map((item, index) => {
                  if (!isItemVisible(item, index)) return null
                  const hasChildItems = hasChildren(item.id, item.level, index)
                  const isActive = activeId === item.id
                  
                  return (
                    <li key={item.id}>
                      <div className="flex items-center">
                        {hasChildItems && (
                          <button
                            onClick={() => toggleSection(item.id)}
                            className="p-1 hover:bg-accent/20 rounded mr-1"
                          >
                            {expandedSections.has(item.id) ? (
                              <ChevronDown className="w-3 h-3" />
                            ) : (
                              <ChevronRight className="w-3 h-3" />
                            )}
                          </button>
                        )}
                        <button
                          onClick={() => handleClick(item.id)}
                          className={cn(
                            "block w-full text-left text-sm py-1 px-2 rounded transition-all duration-200 hover:bg-accent/20",
                            !hasChildItems && "ml-5",
                            item.level === 1 && "font-semibold",
                            item.level === 2 && "pl-4 font-medium",
                            item.level === 3 && "pl-6",
                            item.level === 4 && "pl-8",
                            item.level >= 5 && "pl-10",
                            isActive
                              ? "text-primary font-medium border-l-2 border-primary pl-2 bg-primary/10"
                              : "text-muted-foreground hover:text-foreground"
                          )}
                        >
                          {item.text}
                        </button>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>
        )}
      </div>

      {/* Desktop TOC Sidebar - Left Side (unchanged) */}
      <aside 
        ref={containerRef}
        className={cn(
          "hidden xl:block xl:fixed xl:top-24 xl:left-8 xl:w-64 xl:max-h-[calc(100vh-200px)]",
          "overflow-y-auto scrollbar-hide z-10",
          className
        )}
      >
        <div className="space-y-1">
          <h4 className="font-semibold text-sm mb-4 text-foreground border-b pb-2">
            Table of Contents
          </h4>
          <nav>
            <ul className="space-y-1">
              {toc.map((item, index) => {
                if (!isItemVisible(item, index)) return null
                const hasChildItems = hasChildren(item.id, item.level, index)
                const isActive = activeId === item.id
                
                return (
                  <li key={item.id}>
                    <div className="flex items-center">
                      {hasChildItems && (
                        <button
                          onClick={() => toggleSection(item.id)}
                          className="p-1 hover:bg-accent/20 rounded mr-1 flex-shrink-0"
                        >
                          {expandedSections.has(item.id) ? (
                            <ChevronDown className="w-3 h-3" />
                          ) : (
                            <ChevronRight className="w-3 h-3" />
                          )}
                        </button>
                      )}
                      <button
                        ref={isActive ? activeElementRef : null}
                        onClick={() => handleClick(item.id)}
                        className={cn(
                          "block w-full text-left text-sm py-2 px-2 transition-all duration-200 hover:bg-accent/20",
                          !hasChildItems && "ml-5",
                          item.level === 1 && "font-semibold text-base",
                          item.level === 2 && "pl-4 font-medium",
                          item.level === 3 && "pl-6",
                          item.level === 4 && "pl-8",
                          item.level === 5 && "pl-10",
                          item.level >= 6 && "pl-12",
                          isActive
                            ? "text-primary font-medium border-l-2 border-primary"
                            : "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        {item.text}
                      </button>
                    </div>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  )
}