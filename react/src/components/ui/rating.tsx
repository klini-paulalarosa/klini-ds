import * as React from "react"
import { Star } from "lucide-react"

import { cn } from "@/lib/utils"

export interface RatingProps {
  value?: number
  stars?: number
  disabled?: boolean
  readonly?: boolean
  onValueChange?: (value: number) => void
  className?: string
}

const Rating = React.forwardRef<HTMLDivElement, RatingProps>(
  ({ value = 0, stars = 5, disabled = false, readonly = false, onValueChange, className }, ref) => {
    const interactive = !disabled && !readonly

    return (
      <div ref={ref} role="radiogroup" className={cn("inline-flex items-center gap-1", className)}>
        {Array.from({ length: stars }, (_, i) => i + 1).map((star) => (
          <button
            key={star}
            type="button"
            role="radio"
            aria-checked={star <= value}
            disabled={disabled}
            onClick={() => interactive && onValueChange?.(star)}
            className={cn(
              "transition-colors",
              interactive ? "cursor-pointer" : "cursor-default",
              disabled && "opacity-50"
            )}
          >
            <Star
              className={cn(
                "h-5 w-5",
                star <= value ? "fill-klini-orange-500 text-klini-orange-500" : "fill-none text-muted-foreground"
              )}
            />
          </button>
        ))}
      </div>
    )
  }
)
Rating.displayName = "Rating"

export { Rating }
