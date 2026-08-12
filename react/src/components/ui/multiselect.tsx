import * as React from "react"
import { Check, ChevronsUpDown, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Label } from "./label"
import { Badge } from "./badge"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./command"

export interface MultiSelectOption {
  label: string
  value: string
}

export interface MultiSelectProps {
  label?: string
  options: MultiSelectOption[]
  value?: string[]
  placeholder?: string
  filter?: boolean
  showClear?: boolean
  disabled?: boolean
  errorMessage?: string
  hint?: string
  id?: string
  onValueChange?: (value: string[]) => void
  className?: string
}

const MultiSelect = React.forwardRef<HTMLButtonElement, MultiSelectProps>(
  (
    {
      label,
      options,
      value = [],
      placeholder = "Selecione...",
      filter = true,
      showClear = false,
      disabled = false,
      errorMessage,
      hint,
      id,
      onValueChange,
      className,
    },
    ref
  ) => {
    const [open, setOpen] = React.useState(false)
    const selected = options.filter((o) => value.includes(o.value))

    const toggle = (optValue: string) => {
      const next = value.includes(optValue) ? value.filter((v) => v !== optValue) : [...value, optValue]
      onValueChange?.(next)
    }

    return (
      <div className={cn("flex flex-col gap-1.5", className)}>
        {label && <Label htmlFor={id}>{label}</Label>}
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <button
              ref={ref}
              id={id}
              type="button"
              disabled={disabled}
              className={cn(
                "flex h-auto min-h-10 w-full items-center justify-between gap-2 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                errorMessage && "border-destructive"
              )}
            >
              <span className="flex flex-1 flex-wrap gap-1">
                {selected.length === 0 ? (
                  <span className="text-muted-foreground">{placeholder}</span>
                ) : (
                  selected.map((option) => (
                    <Badge key={option.value} variant="secondary" className="gap-1">
                      {option.label}
                      <span
                        role="button"
                        tabIndex={-1}
                        onClick={(e) => {
                          e.stopPropagation()
                          toggle(option.value)
                        }}
                      >
                        <X className="h-3 w-3" />
                      </span>
                    </Badge>
                  ))
                )}
              </span>
              <span className="flex shrink-0 items-center gap-1">
                {showClear && selected.length > 0 && (
                  <X
                    className="h-4 w-4 text-muted-foreground hover:text-foreground"
                    onClick={(e) => {
                      e.stopPropagation()
                      onValueChange?.([])
                    }}
                  />
                )}
                <ChevronsUpDown className="h-4 w-4 shrink-0 text-muted-foreground" />
              </span>
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
            <Command>
              {filter && <CommandInput placeholder="Buscar..." />}
              <CommandList>
                <CommandEmpty>Nenhum resultado.</CommandEmpty>
                <CommandGroup>
                  {options.map((option) => (
                    <CommandItem key={option.value} onSelect={() => toggle(option.value)}>
                      <Check
                        className={cn("h-4 w-4", value.includes(option.value) ? "opacity-100" : "opacity-0")}
                      />
                      {option.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        {errorMessage ? (
          <p className="text-xs text-destructive">{errorMessage}</p>
        ) : hint ? (
          <p className="text-xs text-muted-foreground">{hint}</p>
        ) : null}
      </div>
    )
  }
)
MultiSelect.displayName = "MultiSelect"

export { MultiSelect }
