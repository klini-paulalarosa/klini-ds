import * as React from "react"

import { cn } from "@/lib/utils"

export interface TimelineEvent {
  status?: string
  date?: string
  icon?: React.ReactNode
  color?: string
  content?: string
}

export interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  events: TimelineEvent[]
  align?: "left" | "right" | "alternate"
  layout?: "vertical" | "horizontal"
}

const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
  ({ className, events, align = "left", layout = "vertical", ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex", layout === "vertical" ? "flex-col" : "flex-row", className)}
      {...props}
    >
      {events.map((event, index) => {
        const isAlternateRight = align === "alternate" && index % 2 === 1
        const reversed = align === "right" || isAlternateRight

        return (
          <div
            key={index}
            className={cn(
              "flex gap-3",
              layout === "vertical" ? "flex-1" : "flex-col items-center",
              reversed && layout === "vertical" && "flex-row-reverse text-right"
            )}
          >
            <div className="flex flex-col items-center">
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm text-white"
                style={{ background: event.color ?? "hsl(var(--primary))" }}
              >
                {event.icon}
              </span>
              {index < events.length - 1 && (
                <span
                  className={cn("bg-border", layout === "vertical" ? "w-px flex-1" : "h-px flex-1 w-8")}
                />
              )}
            </div>
            <div className={cn("pb-6", layout === "horizontal" && "pb-0 pt-2 text-center")}>
              {event.status && <p className="font-semibold">{event.status}</p>}
              {event.date && <p className="text-xs text-muted-foreground">{event.date}</p>}
              {event.content && <p className="mt-1 text-sm text-muted-foreground">{event.content}</p>}
            </div>
          </div>
        )
      })}
    </div>
  )
)
Timeline.displayName = "Timeline"

export { Timeline }
