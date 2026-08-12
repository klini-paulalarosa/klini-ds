import * as React from "react"

import { cn } from "@/lib/utils"

const InputGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex items-stretch [&>*]:rounded-none [&>*:first-child]:rounded-l-md [&>*:last-child]:rounded-r-md [&>*:not(:first-child)]:-ml-px",
        className
      )}
      {...props}
    />
  )
)
InputGroup.displayName = "InputGroup"

const InputGroupAddon = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        "inline-flex items-center border border-input bg-muted px-3 text-sm text-muted-foreground",
        className
      )}
      {...props}
    />
  )
)
InputGroupAddon.displayName = "InputGroupAddon"

export { InputGroup, InputGroupAddon }
