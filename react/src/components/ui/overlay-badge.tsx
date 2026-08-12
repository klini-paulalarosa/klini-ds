import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const overlayBadgeVariants = cva(
  "absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full px-1 text-[10px] font-semibold leading-none text-white",
  {
    variants: {
      severity: {
        success: "bg-klini-teal-500",
        info: "bg-klini-sea-500",
        warn: "bg-klini-orange-500",
        danger: "bg-klini-coral-500",
        secondary: "bg-klini-slate-500",
        contrast: "bg-foreground",
      },
    },
    defaultVariants: { severity: "danger" },
  }
)

export interface OverlayBadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof overlayBadgeVariants> {
  value?: string
  children: React.ReactNode
}

const OverlayBadge = React.forwardRef<HTMLSpanElement, OverlayBadgeProps>(
  ({ className, value, severity, children, ...props }, ref) => (
    <span ref={ref} className="relative inline-flex" {...props}>
      {children}
      {value !== undefined && value !== "" && (
        <span className={cn(overlayBadgeVariants({ severity }), className)}>{value}</span>
      )}
    </span>
  )
)
OverlayBadge.displayName = "OverlayBadge"

export { OverlayBadge, overlayBadgeVariants }
