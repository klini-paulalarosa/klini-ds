import * as React from "react"
import { ChevronDown } from "lucide-react"
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"

import { cn } from "@/lib/utils"

export interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
  header?: string
  toggleable?: boolean
  collapsed?: boolean
  onCollapsedChange?: (collapsed: boolean) => void
}

const Panel = React.forwardRef<HTMLDivElement, PanelProps>(
  ({ className, header, toggleable = false, collapsed = false, onCollapsedChange, children, ...props }, ref) => {
    if (!toggleable) {
      return (
        <div ref={ref} className={cn("rounded-lg border bg-card text-card-foreground", className)} {...props}>
          {header && <div className="border-b px-4 py-3 text-sm font-semibold">{header}</div>}
          <div className="p-4">{children}</div>
        </div>
      )
    }

    return (
      <CollapsiblePrimitive.Root
        ref={ref}
        open={!collapsed}
        onOpenChange={(open) => onCollapsedChange?.(!open)}
        className={cn("rounded-lg border bg-card text-card-foreground", className)}
        {...props}
      >
        <CollapsiblePrimitive.Trigger asChild>
          <button
            type="button"
            className="flex w-full items-center justify-between border-b px-4 py-3 text-sm font-semibold [&[data-state=open]>svg]:rotate-180"
          >
            {header}
            <ChevronDown className="h-4 w-4 shrink-0 transition-transform" />
          </button>
        </CollapsiblePrimitive.Trigger>
        <CollapsiblePrimitive.Content className="p-4">{children}</CollapsiblePrimitive.Content>
      </CollapsiblePrimitive.Root>
    )
  }
)
Panel.displayName = "Panel"

export { Panel }
