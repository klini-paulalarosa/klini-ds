import * as React from "react"

import { cn } from "@/lib/utils"

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  layout?: "horizontal" | "vertical"
  type?: "solid" | "dashed" | "dotted"
  align?: "left" | "center" | "right" | "top" | "bottom"
}

const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  (
    { className, layout = "horizontal", type = "solid", align = "center", children, ...props },
    ref
  ) => {
    const borderStyle = type === "solid" ? "border-solid" : type === "dashed" ? "border-dashed" : "border-dotted"

    if (!children) {
      return (
        <div
          ref={ref}
          role="separator"
          className={cn(
            layout === "horizontal"
              ? cn("w-full border-t", borderStyle)
              : cn("h-full border-l", borderStyle),
            className
          )}
          {...props}
        />
      )
    }

    const justify =
      align === "left" || align === "top"
        ? "justify-start"
        : align === "right" || align === "bottom"
          ? "justify-end"
          : "justify-center"

    return (
      <div
        ref={ref}
        role="separator"
        className={cn(
          "flex items-center gap-3",
          layout === "vertical" && "flex-col",
          justify,
          className
        )}
        {...props}
      >
        <div className={cn("flex-1", layout === "horizontal" ? cn("border-t", borderStyle) : cn("border-l", borderStyle))} />
        <span className="shrink-0 text-sm text-muted-foreground">{children}</span>
        <div className={cn("flex-1", layout === "horizontal" ? cn("border-t", borderStyle) : cn("border-l", borderStyle))} />
      </div>
    )
  }
)
Divider.displayName = "Divider"

export { Divider }
