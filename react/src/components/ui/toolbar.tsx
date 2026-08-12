import * as React from "react"

import { cn } from "@/lib/utils"

export interface ToolbarProps extends React.HTMLAttributes<HTMLDivElement> {
  start?: React.ReactNode
  center?: React.ReactNode
  end?: React.ReactNode
}

const Toolbar = React.forwardRef<HTMLDivElement, ToolbarProps>(
  ({ className, start, center, end, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center justify-between gap-4 rounded-md border bg-card p-3", className)}
      {...props}
    >
      <div className="flex items-center gap-2">{start}</div>
      <div className="flex items-center gap-2">{center}</div>
      <div className="flex items-center gap-2">{end}</div>
    </div>
  )
)
Toolbar.displayName = "Toolbar"

export { Toolbar }
