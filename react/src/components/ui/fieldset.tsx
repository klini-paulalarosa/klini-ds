import * as React from "react"
import { ChevronDown } from "lucide-react"
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"

import { cn } from "@/lib/utils"

export interface FieldsetProps extends React.HTMLAttributes<HTMLFieldSetElement> {
  legend?: string
  toggleable?: boolean
  collapsed?: boolean
  onCollapsedChange?: (collapsed: boolean) => void
}

const Fieldset = React.forwardRef<HTMLFieldSetElement, FieldsetProps>(
  ({ className, legend, toggleable = false, collapsed = false, onCollapsedChange, children, ...props }, ref) => {
    if (!toggleable) {
      return (
        <fieldset ref={ref} className={cn("rounded-lg border p-4", className)} {...props}>
          {legend && <legend className="px-2 text-sm font-medium">{legend}</legend>}
          {children}
        </fieldset>
      )
    }

    return (
      <CollapsiblePrimitive.Root
        open={!collapsed}
        onOpenChange={(open) => onCollapsedChange?.(!open)}
        className={cn("rounded-lg border p-4", className)}
      >
        <CollapsiblePrimitive.Trigger asChild>
          <button
            type="button"
            className="flex w-full items-center justify-between text-sm font-medium [&[data-state=open]>svg]:rotate-180"
          >
            {legend}
            <ChevronDown className="h-4 w-4 shrink-0 transition-transform" />
          </button>
        </CollapsiblePrimitive.Trigger>
        <CollapsiblePrimitive.Content className="pt-3">{children}</CollapsiblePrimitive.Content>
      </CollapsiblePrimitive.Root>
    )
  }
)
Fieldset.displayName = "Fieldset"

export { Fieldset }
