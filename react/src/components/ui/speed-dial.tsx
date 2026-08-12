import * as React from "react"
import { Plus, X } from "lucide-react"

import { cn } from "@/lib/utils"
import type { TreeMenuItem } from "./tiered-menu"

export interface SpeedDialProps {
  items: TreeMenuItem[]
  direction?: "up" | "down" | "left" | "right"
  type?: "linear" | "circle" | "semi-circle" | "quarter-circle"
  radius?: number
  hideOnClickOutside?: boolean
  className?: string
}

function getOffset(
  type: NonNullable<SpeedDialProps["type"]>,
  direction: NonNullable<SpeedDialProps["direction"]>,
  radius: number,
  index: number,
  total: number
): { x: number; y: number } {
  if (type === "linear") {
    const step = 56 * (index + 1)
    if (direction === "up") return { x: 0, y: -step }
    if (direction === "down") return { x: 0, y: step }
    if (direction === "left") return { x: -step, y: 0 }
    return { x: step, y: 0 }
  }

  const r = radius || 80
  let start = 0
  let end = 360
  if (type === "semi-circle") {
    if (direction === "up") [start, end] = [180, 360]
    else if (direction === "down") [start, end] = [0, 180]
    else if (direction === "left") [start, end] = [90, 270]
    else [start, end] = [-90, 90]
  } else if (type === "quarter-circle") {
    if (direction === "up") [start, end] = [270, 360]
    else if (direction === "down") [start, end] = [90, 180]
    else if (direction === "left") [start, end] = [180, 270]
    else [start, end] = [0, 90]
  }

  const step = total > 1 ? (end - start) / (total - 1) : 0
  const angle = ((start + step * index) * Math.PI) / 180
  return { x: r * Math.cos(angle), y: r * Math.sin(angle) }
}

const SpeedDial = React.forwardRef<HTMLDivElement, SpeedDialProps>(
  ({ items, direction = "up", type = "linear", radius = 0, hideOnClickOutside = true, className }, ref) => {
    const [open, setOpen] = React.useState(false)
    const containerRef = React.useRef<HTMLDivElement>(null)
    React.useImperativeHandle(ref, () => containerRef.current!)

    React.useEffect(() => {
      if (!hideOnClickOutside || !open) return
      const onClick = (e: MouseEvent) => {
        if (!containerRef.current?.contains(e.target as Node)) setOpen(false)
      }
      document.addEventListener("mousedown", onClick)
      return () => document.removeEventListener("mousedown", onClick)
    }, [open, hideOnClickOutside])

    return (
      <div ref={containerRef} className={cn("relative inline-block", className)}>
        {items.map((item, index) => {
          const { x, y } = getOffset(type, direction, radius, index, items.length)
          return (
            <button
              key={index}
              type="button"
              disabled={item.disabled}
              onClick={() => {
                item.onClick?.()
                setOpen(false)
              }}
              aria-label={item.label}
              style={{
                transform: open ? `translate(${x}px, ${y}px) scale(1)` : "translate(0, 0) scale(0.4)",
                opacity: open ? 1 : 0,
                pointerEvents: open ? "auto" : "none",
                transitionDelay: `${index * 30}ms`,
              }}
              className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground shadow-md transition-all duration-200"
            >
              {item.icon}
            </button>
          )
        })}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar" : "Abrir"}
          className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:bg-primary/90"
        >
          {open ? <X className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
        </button>
      </div>
    )
  }
)
SpeedDial.displayName = "SpeedDial"

export { SpeedDial }
