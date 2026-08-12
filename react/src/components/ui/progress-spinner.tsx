import * as React from "react"

import { cn } from "@/lib/utils"

export interface ProgressSpinnerProps {
  size?: number
  strokeWidth?: number
  className?: string
}

const ProgressSpinner = React.forwardRef<SVGSVGElement, ProgressSpinnerProps>(
  ({ size = 50, strokeWidth = 8, className }, ref) => (
    <svg
      ref={ref}
      role="status"
      aria-label="Carregando"
      width={size}
      height={size}
      viewBox="0 0 50 50"
      className={cn("animate-spin text-primary", className)}
    >
      <circle
        cx="25"
        cy="25"
        r="20"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeDasharray="80, 200"
        strokeDashoffset="0"
        strokeLinecap="round"
        opacity={0.9}
      />
    </svg>
  )
)
ProgressSpinner.displayName = "ProgressSpinner"

export { ProgressSpinner }
