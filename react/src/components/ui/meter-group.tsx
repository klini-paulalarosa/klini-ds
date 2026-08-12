import * as React from "react"

import { cn } from "@/lib/utils"

export interface MeterItem {
  label?: string
  value: number
  color?: string
}

export interface MeterGroupProps {
  value: MeterItem[]
  max?: number
  orientation?: "horizontal" | "vertical"
  labelPosition?: "start" | "end"
  indicatorValue?: number | null
  indicatorUnit?: string
  className?: string
}

const MeterGroup = React.forwardRef<HTMLDivElement, MeterGroupProps>(
  ({ value, max = 100, orientation = "horizontal", labelPosition = "end", indicatorValue = null, indicatorUnit = "", className }, ref) => {
    const indicatorPercent =
      indicatorValue !== null ? (Math.max(0, Math.min(max, indicatorValue)) / max) * 100 : null

    const bar = (
      <div
        className={cn(
          "flex overflow-hidden rounded-full bg-muted",
          orientation === "horizontal" ? "h-3 w-full" : "h-40 w-3 flex-col-reverse"
        )}
      >
        {value.map((item, index) => {
          const percent = (item.value / max) * 100
          return (
            <div
              key={index}
              style={{
                [orientation === "horizontal" ? "width" : "height"]: `${percent}%`,
                background: item.color ?? "hsl(var(--primary))",
              }}
              title={item.label}
            />
          )
        })}
      </div>
    )

    const labels = (
      <div className="flex flex-wrap gap-x-4 gap-y-1">
        {value.map((item, index) => (
          <span key={index} className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className="h-2 w-2 rounded-full" style={{ background: item.color ?? "hsl(var(--primary))" }} />
            {item.label}
          </span>
        ))}
      </div>
    )

    return (
      <div ref={ref} className={cn("flex flex-col gap-2", className)}>
        {indicatorPercent !== null && (
          <div className="relative h-3">
            <div
              className="absolute -translate-x-1/2 text-foreground transition-[left] duration-300"
              style={{ left: `${indicatorPercent}%` }}
              aria-label={`Valor atual: ${indicatorValue}${indicatorUnit ? ` ${indicatorUnit}` : ""}`}
            >
              <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                <path d="M6 9L0.803848 0.75L11.1962 0.75L6 9Z" fill="currentColor" />
              </svg>
            </div>
          </div>
        )}
        {labelPosition === "start" && labels}
        {bar}
        {labelPosition === "end" && labels}
      </div>
    )
  }
)
MeterGroup.displayName = "MeterGroup"

export { MeterGroup }
