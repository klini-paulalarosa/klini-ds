import * as React from "react"

import { cn } from "@/lib/utils"
import {
  DropdownMenu as DropdownMenuRoot,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu"

export interface MenuItem {
  label?: string
  icon?: React.ReactNode
  disabled?: boolean
  separator?: boolean
  onClick?: () => void
}

export interface MenuProps {
  items: MenuItem[]
  popup?: boolean
  trigger?: React.ReactElement
  className?: string
}

const Menu = React.forwardRef<HTMLDivElement, MenuProps>(({ items, popup = false, trigger, className }, ref) => {
  if (!popup) {
    return (
      <div ref={ref} className={cn("min-w-[10rem] rounded-md border bg-popover p-1 text-popover-foreground", className)}>
        {items.map((item, index) =>
          item.separator ? (
            <div key={index} className="-mx-1 my-1 h-px bg-muted" />
          ) : (
            <button
              key={index}
              type="button"
              disabled={item.disabled}
              onClick={item.onClick}
              className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-left text-sm outline-none hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-50"
            >
              {item.icon}
              {item.label}
            </button>
          )
        )}
      </div>
    )
  }

  return (
    <DropdownMenuRoot>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent ref={ref} className={className}>
        {items.map((item, index) =>
          item.separator ? (
            <DropdownMenuSeparator key={index} />
          ) : (
            <DropdownMenuItem key={index} disabled={item.disabled} onClick={item.onClick} className="gap-2">
              {item.icon}
              {item.label}
            </DropdownMenuItem>
          )
        )}
      </DropdownMenuContent>
    </DropdownMenuRoot>
  )
})
Menu.displayName = "Menu"

export { Menu }
