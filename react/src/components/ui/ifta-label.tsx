import * as React from "react"

import { cn } from "@/lib/utils"

export interface IftaLabelProps {
  label: string
  children: React.ReactElement
  className?: string
}

const IftaLabel = React.forwardRef<HTMLDivElement, IftaLabelProps>(({ label, children, className }, ref) => {
  const child = React.cloneElement(children, {
    className: cn("h-12 pb-1 pt-5", children.props.className),
  })

  return (
    <div ref={ref} className={cn("relative", className)}>
      {child}
      <label className="pointer-events-none absolute left-3 top-1.5 text-xs text-muted-foreground">{label}</label>
    </div>
  )
})
IftaLabel.displayName = "IftaLabel"

export { IftaLabel }
