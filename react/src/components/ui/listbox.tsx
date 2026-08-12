import * as React from "react"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"
import { Input } from "./input"

export interface ListboxOption {
  label: string
  value: string
  disabled?: boolean
}

export interface ListboxProps {
  options: ListboxOption[]
  value?: string | string[] | null
  multiple?: boolean
  filter?: boolean
  disabled?: boolean
  onValueChange?: (value: string | string[] | null) => void
  className?: string
}

const Listbox = React.forwardRef<HTMLDivElement, ListboxProps>(
  ({ options, value, multiple = false, filter = false, disabled = false, onValueChange, className }, ref) => {
    const [query, setQuery] = React.useState("")

    const filtered = React.useMemo(
      () => (query ? options.filter((o) => o.label.toLowerCase().includes(query.toLowerCase())) : options),
      [options, query]
    )

    const isSelected = (optValue: string) =>
      multiple ? Array.isArray(value) && value.includes(optValue) : value === optValue

    const handleSelect = (optValue: string) => {
      if (multiple) {
        const current = Array.isArray(value) ? value : []
        const next = current.includes(optValue) ? current.filter((v) => v !== optValue) : [...current, optValue]
        onValueChange?.(next)
      } else {
        onValueChange?.(optValue)
      }
    }

    return (
      <div ref={ref} className={cn("rounded-md border", className)}>
        {filter && (
          <div className="border-b p-2">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar..."
              disabled={disabled}
              className="h-8"
            />
          </div>
        )}
        <div className="max-h-60 overflow-y-auto p-1">
          {filtered.map((option) => (
            <button
              key={option.value}
              type="button"
              disabled={disabled || option.disabled}
              onClick={() => handleSelect(option.value)}
              className={cn(
                "flex w-full items-center justify-between rounded-sm px-2 py-1.5 text-left text-sm outline-none hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-50",
                isSelected(option.value) && "bg-accent text-accent-foreground"
              )}
            >
              {option.label}
              {isSelected(option.value) && <Check className="h-4 w-4" />}
            </button>
          ))}
        </div>
      </div>
    )
  }
)
Listbox.displayName = "Listbox"

export { Listbox }
