import * as React from "react"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"
import type { MenuItem } from "./menu"

export interface StepsProps {
  items: MenuItem[]
  activeIndex?: number
  readonly?: boolean
  className?: string
}

const Steps = React.forwardRef<HTMLDivElement, StepsProps>(
  ({ items, activeIndex = 0, readonly = true, className }, ref) => (
    <div ref={ref} className={cn("flex items-center", className)}>
      {items.map((item, index) => {
        const isDone = index < activeIndex
        const isActive = index === activeIndex
        const isLast = index === items.length - 1

        return (
          <React.Fragment key={index}>
            <button
              type="button"
              disabled={readonly || item.disabled}
              onClick={item.onClick}
              className={cn("flex flex-col items-center gap-1", !readonly && "cursor-pointer")}
            >
              <span
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-semibold",
                  isDone && "border-primary bg-primary text-primary-foreground",
                  isActive && !isDone && "border-primary text-primary",
                  !isDone && !isActive && "border-muted-foreground/30 text-muted-foreground"
                )}
              >
                {isDone ? <Check className="h-4 w-4" /> : index + 1}
              </span>
              <span
                className={cn(
                  "text-xs",
                  isActive ? "font-semibold text-foreground" : "text-muted-foreground"
                )}
              >
                {item.label}
              </span>
            </button>
            {!isLast && (
              <div className={cn("mx-2 h-px flex-1", isDone ? "bg-primary" : "bg-muted-foreground/30")} />
            )}
          </React.Fragment>
        )
      })}
    </div>
  )
)
Steps.displayName = "Steps"

export { Steps }
