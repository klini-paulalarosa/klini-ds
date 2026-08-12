import * as React from "react"

import { ToggleGroup, ToggleGroupItem } from "./toggle-group"

export interface SelectButtonOption {
  label: string
  value: string
  disabled?: boolean
}

export interface SelectButtonProps {
  options: SelectButtonOption[]
  value?: string | string[] | null
  multiple?: boolean
  disabled?: boolean
  onValueChange?: (value: string | string[] | null) => void
  className?: string
}

const SelectButton = React.forwardRef<HTMLDivElement, SelectButtonProps>(
  ({ options, value, multiple = false, disabled = false, onValueChange, className }, ref) => {
    if (multiple) {
      return (
        <ToggleGroup
          ref={ref}
          type="multiple"
          value={Array.isArray(value) ? value : []}
          onValueChange={(v) => onValueChange?.(v)}
          className={className}
        >
          {options.map((option) => (
            <ToggleGroupItem key={option.value} value={option.value} disabled={disabled || option.disabled}>
              {option.label}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      )
    }

    return (
      <ToggleGroup
        ref={ref}
        type="single"
        value={typeof value === "string" ? value : undefined}
        onValueChange={(v) => onValueChange?.(v || null)}
        className={className}
      >
        {options.map((option) => (
          <ToggleGroupItem key={option.value} value={option.value} disabled={disabled || option.disabled}>
            {option.label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    )
  }
)
SelectButton.displayName = "SelectButton"

export { SelectButton }
