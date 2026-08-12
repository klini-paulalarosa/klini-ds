import * as React from "react"
import { Pencil, X } from "lucide-react"

import { cn } from "@/lib/utils"

export interface InplaceProps {
  active?: boolean
  disabled?: boolean
  closable?: boolean
  display: React.ReactNode
  children: React.ReactNode
  onActiveChange?: (active: boolean) => void
  className?: string
}

const Inplace = React.forwardRef<HTMLDivElement, InplaceProps>(
  ({ active: activeProp, disabled = false, closable = false, display, children, onActiveChange, className }, ref) => {
    const [activeState, setActiveState] = React.useState(false)
    const active = activeProp ?? activeState

    const setActive = (value: boolean) => {
      setActiveState(value)
      onActiveChange?.(value)
    }

    return (
      <div ref={ref} className={cn("relative", className)}>
        {active ? (
          <>
            {children}
            {closable && (
              <button
                type="button"
                onClick={() => setActive(false)}
                aria-label="Fechar"
                className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-muted text-muted-foreground hover:text-foreground"
              >
                <X className="h-3 w-3" />
              </button>
            )}
          </>
        ) : (
          <button
            type="button"
            disabled={disabled}
            onClick={() => setActive(true)}
            className="group flex items-center gap-2 rounded-md px-2 py-1 text-left hover:bg-accent disabled:pointer-events-none disabled:opacity-50"
          >
            {display}
            <Pencil className="h-3.5 w-3.5 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
          </button>
        )}
      </div>
    )
  }
)
Inplace.displayName = "Inplace"

export { Inplace }
