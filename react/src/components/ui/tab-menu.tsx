import * as React from "react"

import { cn } from "@/lib/utils"
import type { MenuItem } from "./menu"

export interface TabMenuProps {
  items: MenuItem[]
  activeItem?: MenuItem
  onActiveItemChange?: (item: MenuItem) => void
  className?: string
}

const TabMenu = React.forwardRef<HTMLDivElement, TabMenuProps>(
  ({ items, activeItem, onActiveItemChange, className }, ref) => (
    <div ref={ref} role="tablist" className={cn("flex gap-1 border-b", className)}>
      {items.map((item, index) => {
        const isActive = activeItem === item
        return (
          <button
            key={index}
            type="button"
            role="tab"
            aria-selected={isActive}
            disabled={item.disabled}
            onClick={() => {
              item.onClick?.()
              onActiveItemChange?.(item)
            }}
            className={cn(
              "flex items-center gap-2 border-b-2 px-4 py-2 text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50",
              isActive
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            )}
          >
            {item.icon}
            {item.label}
          </button>
        )
      })}
    </div>
  )
)
TabMenu.displayName = "TabMenu"

export { TabMenu }
