import * as React from "react"

import { cn } from "@/lib/utils"

export interface IconFieldProps {
  icon: React.ReactNode
  iconPosition?: "left" | "right"
  children: React.ReactElement
  className?: string
}

const IconField = React.forwardRef<HTMLDivElement, IconFieldProps>(
  ({ icon, iconPosition = "left", children, className }, ref) => {
    const child = React.cloneElement(children, {
      className: cn(iconPosition === "left" ? "pl-9" : "pr-9", children.props.className),
    })

    return (
      <div ref={ref} className={cn("relative", className)}>
        {child}
        <span
          className={cn(
            "pointer-events-none absolute top-1/2 -translate-y-1/2 text-muted-foreground",
            iconPosition === "left" ? "left-3" : "right-3"
          )}
        >
          {icon}
        </span>
      </div>
    )
  }
)
IconField.displayName = "IconField"

export { IconField }
