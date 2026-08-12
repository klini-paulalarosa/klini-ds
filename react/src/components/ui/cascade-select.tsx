import * as React from "react"
import { ChevronRight, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"

export interface CascadeOption {
  label: string
  value: string
  children?: CascadeOption[]
}

export interface CascadeSelectProps {
  options: CascadeOption[]
  value?: CascadeOption[]
  placeholder?: string
  disabled?: boolean
  onValueChange?: (path: CascadeOption[]) => void
  className?: string
}

const CascadeSelect = React.forwardRef<HTMLButtonElement, CascadeSelectProps>(
  ({ options, value = [], placeholder = "Selecione...", disabled = false, onValueChange, className }, ref) => {
    const [open, setOpen] = React.useState(false)
    const [path, setPath] = React.useState<CascadeOption[]>(value)

    const columns: CascadeOption[][] = [options]
    for (const step of path) {
      const last = columns[columns.length - 1]
      const match = last.find((o) => o.value === step.value)
      if (match?.children?.length) columns.push(match.children)
    }

    const selectAt = (depth: number, option: CascadeOption) => {
      const nextPath = [...path.slice(0, depth), option]
      setPath(nextPath)
      if (!option.children?.length) {
        onValueChange?.(nextPath)
        setOpen(false)
      }
    }

    const displayLabel = path.length > 0 ? path.map((p) => p.label).join(" / ") : placeholder

    return (
      <Popover
        open={open}
        onOpenChange={(next) => {
          setOpen(next)
          if (next) setPath(value)
        }}
      >
        <PopoverTrigger asChild>
          <button
            ref={ref}
            type="button"
            disabled={disabled}
            className={cn(
              "flex h-10 w-full items-center justify-between gap-2 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
              className
            )}
          >
            <span className={cn(path.length === 0 && "text-muted-foreground")}>{displayLabel}</span>
            <ChevronsUpDown className="h-4 w-4 shrink-0 text-muted-foreground" />
          </button>
        </PopoverTrigger>
        <PopoverContent className="flex w-auto gap-0 p-0">
          {columns.map((column, depth) => (
            <div key={depth} className={cn("max-h-60 w-44 overflow-y-auto p-1", depth > 0 && "border-l")}>
              {column.map((option) => {
                const active = path[depth]?.value === option.value
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => selectAt(depth, option)}
                    className={cn(
                      "flex w-full items-center justify-between rounded-sm px-2 py-1.5 text-left text-sm outline-none hover:bg-accent hover:text-accent-foreground",
                      active && "bg-accent text-accent-foreground"
                    )}
                  >
                    {option.label}
                    {!!option.children?.length && <ChevronRight className="h-4 w-4 shrink-0" />}
                  </button>
                )
              })}
            </div>
          ))}
        </PopoverContent>
      </Popover>
    )
  }
)
CascadeSelect.displayName = "CascadeSelect"

export { CascadeSelect }
