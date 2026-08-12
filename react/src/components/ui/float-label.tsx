import * as React from "react"

import { cn } from "@/lib/utils"

export interface FloatLabelProps {
  label: string
  variant?: "over" | "in" | "on"
  children: React.ReactElement
  className?: string
}

/**
 * FloatLabel — envolve um input e faz o label flutuar para cima ao focar/preencher.
 * `over` corta a borda (label com fundo), `in` sobe dentro do campo, `on` fica sempre flutuado.
 */
const FloatLabel = React.forwardRef<HTMLDivElement, FloatLabelProps>(
  ({ label, variant = "over", children, className }, ref) => {
    const child = React.cloneElement(children, {
      className: cn("peer", children.props.className),
      placeholder: children.props.placeholder ?? " ",
    })

    const base = "pointer-events-none absolute left-3 text-sm text-muted-foreground transition-all"

    if (variant === "on") {
      return (
        <div ref={ref} className={cn("relative", className)}>
          {child}
          <label className={cn(base, "top-0 -translate-y-1/2 bg-background px-1 text-xs")}>{label}</label>
        </div>
      )
    }

    if (variant === "in") {
      return (
        <div ref={ref} className={cn("relative", className)}>
          {child}
          <label
            className={cn(
              base,
              "top-1/2 -translate-y-1/2",
              "peer-focus:top-1.5 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:text-foreground",
              "peer-[&:not(:placeholder-shown)]:top-1.5 peer-[&:not(:placeholder-shown)]:translate-y-0 peer-[&:not(:placeholder-shown)]:text-xs"
            )}
          >
            {label}
          </label>
        </div>
      )
    }

    // variant === 'over'
    return (
      <div ref={ref} className={cn("relative", className)}>
        {child}
        <label
          className={cn(
            base,
            "top-1/2 -translate-y-1/2",
            "peer-focus:top-0 peer-focus:bg-background peer-focus:px-1 peer-focus:text-xs peer-focus:text-foreground",
            "peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:bg-background peer-[&:not(:placeholder-shown)]:px-1 peer-[&:not(:placeholder-shown)]:text-xs"
          )}
        >
          {label}
        </label>
      </div>
    )
  }
)
FloatLabel.displayName = "FloatLabel"

export { FloatLabel }
