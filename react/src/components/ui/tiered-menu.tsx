import * as React from "react"
import { ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "./dropdown-menu"

export interface TreeMenuItem {
  label?: string
  icon?: React.ReactNode
  disabled?: boolean
  separator?: boolean
  onClick?: () => void
  items?: TreeMenuItem[]
}

export interface TieredMenuProps {
  model: TreeMenuItem[]
  popup?: boolean
  trigger?: React.ReactElement
  className?: string
}

function renderPopupItems(items: TreeMenuItem[]) {
  return items.map((item, index) => {
    if (item.separator) return <DropdownMenuSeparator key={index} />
    if (item.items?.length) {
      return (
        <DropdownMenuSub key={index}>
          <DropdownMenuSubTrigger className="gap-2">
            {item.icon}
            {item.label}
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>{renderPopupItems(item.items)}</DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      )
    }
    return (
      <DropdownMenuItem key={index} disabled={item.disabled} onClick={item.onClick} className="gap-2">
        {item.icon}
        {item.label}
      </DropdownMenuItem>
    )
  })
}

function InlineNode({ item }: { item: TreeMenuItem }) {
  if (item.separator) return <div className="-mx-1 my-1 h-px bg-muted" />

  const hasChildren = !!item.items?.length

  return (
    <div className="group/node relative">
      <button
        type="button"
        disabled={item.disabled}
        onClick={item.onClick}
        className="flex w-full items-center justify-between gap-4 rounded-sm px-2 py-1.5 text-left text-sm outline-none hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-50"
      >
        <span className="flex items-center gap-2">
          {item.icon}
          {item.label}
        </span>
        {hasChildren && <ChevronRight className="h-4 w-4 shrink-0" />}
      </button>
      {hasChildren && (
        <div className="invisible absolute left-full top-0 z-10 min-w-[10rem] rounded-md border bg-popover p-1 text-popover-foreground opacity-0 shadow-md transition-opacity group-hover/node:visible group-hover/node:opacity-100">
          {item.items!.map((child, i) => (
            <InlineNode key={i} item={child} />
          ))}
        </div>
      )}
    </div>
  )
}

const TieredMenu = React.forwardRef<HTMLDivElement, TieredMenuProps>(
  ({ model, popup = false, trigger, className }, ref) => {
    if (!popup) {
      return (
        <div ref={ref} className={cn("min-w-[10rem] rounded-md border bg-popover p-1 text-popover-foreground", className)}>
          {model.map((item, index) => (
            <InlineNode key={index} item={item} />
          ))}
        </div>
      )
    }

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
        <DropdownMenuContent ref={ref} className={className}>
          {renderPopupItems(model)}
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }
)
TieredMenu.displayName = "TieredMenu"

export { TieredMenu }
