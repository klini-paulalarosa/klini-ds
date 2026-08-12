import * as React from "react"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

export interface ChipProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  label: string
  icon?: React.ReactNode
  image?: string
  removable?: boolean
  onRemoved?: () => void
}

const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
  ({ className, label, icon, image, removable = false, onRemoved, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border bg-secondary px-3 py-1 text-sm text-secondary-foreground",
        className
      )}
      {...props}
    >
      {image ? (
        <img src={image} alt="" className="h-5 w-5 shrink-0 rounded-full object-cover" />
      ) : (
        icon && <span className="shrink-0">{icon}</span>
      )}
      <span>{label}</span>
      {removable && (
        <button
          type="button"
          onClick={onRemoved}
          aria-label="Remover"
          className="shrink-0 rounded-full opacity-70 transition-opacity hover:opacity-100"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      )}
    </div>
  )
)
Chip.displayName = "Chip"

export { Chip }
