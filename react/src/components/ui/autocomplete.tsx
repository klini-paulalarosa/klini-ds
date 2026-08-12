import * as React from "react"

import { cn } from "@/lib/utils"
import { Label } from "./label"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from "./command"

export interface AutocompleteProps {
  label?: string
  value?: string
  suggestions: string[]
  placeholder?: string
  disabled?: boolean
  errorMessage?: string
  hint?: string
  id?: string
  onValueChange?: (value: string) => void
  onSearch?: (query: string) => void
  className?: string
}

const Autocomplete = React.forwardRef<HTMLInputElement, AutocompleteProps>(
  (
    {
      label,
      value = "",
      suggestions,
      placeholder,
      disabled = false,
      errorMessage,
      hint,
      id,
      onValueChange,
      onSearch,
      className,
    },
    ref
  ) => {
    const [open, setOpen] = React.useState(false)

    return (
      <div className={cn("flex flex-col gap-1.5", className)}>
        {label && <Label htmlFor={id}>{label}</Label>}
        <Popover open={open && suggestions.length > 0} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <input
              ref={ref}
              id={id}
              type="text"
              value={value}
              placeholder={placeholder}
              disabled={disabled}
              autoComplete="off"
              onChange={(e) => {
                onValueChange?.(e.target.value)
                onSearch?.(e.target.value)
                setOpen(true)
              }}
              onFocus={() => setOpen(true)}
              className={cn(
                "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                errorMessage && "border-destructive"
              )}
            />
          </PopoverTrigger>
          <PopoverContent
            className="w-[var(--radix-popover-trigger-width)] p-0"
            onOpenAutoFocus={(e) => e.preventDefault()}
          >
            <Command shouldFilter={false}>
              <CommandList>
                <CommandEmpty>Nenhum resultado.</CommandEmpty>
                <CommandGroup>
                  {suggestions.map((suggestion) => (
                    <CommandItem
                      key={suggestion}
                      onSelect={() => {
                        onValueChange?.(suggestion)
                        setOpen(false)
                      }}
                    >
                      {suggestion}
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
Autocomplete.displayName = "Autocomplete"

export { Autocomplete }
