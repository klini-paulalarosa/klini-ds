import * as React from "react"
import { Minus, Plus } from "lucide-react"

import { cn } from "@/lib/utils"
import { Label } from "./label"

export interface InputNumberProps {
  label?: string
  placeholder?: string
  id?: string
  value?: number | null
  min?: number
  max?: number
  step?: number
  prefix?: string
  suffix?: string
  currency?: string
  mode?: "decimal" | "currency"
  showButtons?: boolean
  errorMessage?: string
  hint?: string
  disabled?: boolean
  onValueChange?: (value: number | null) => void
  className?: string
}

function currencySymbol(currency: string): string {
  try {
    const part = new Intl.NumberFormat("pt-BR", { style: "currency", currency }).formatToParts(0)
    return part.find((p) => p.type === "currency")?.value ?? currency
  } catch {
    return currency
  }
}

const InputNumber = React.forwardRef<HTMLInputElement, InputNumberProps>(
  (
    {
      label,
      placeholder,
      id,
      value = null,
      min,
      max,
      step = 1,
      prefix,
      suffix,
      currency = "BRL",
      mode = "decimal",
      showButtons = false,
      errorMessage,
      hint,
      disabled = false,
      onValueChange,
      className,
    },
    ref
  ) => {
    const resolvedPrefix = prefix || (mode === "currency" ? currencySymbol(currency) : "")

    const clamp = (n: number) => {
      let v = n
      if (min !== undefined) v = Math.max(min, v)
      if (max !== undefined) v = Math.min(max, v)
      return v
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value
      onValueChange?.(raw === "" ? null : clamp(Number(raw)))
    }

    const step_ = (delta: number) => () => onValueChange?.(clamp((value ?? 0) + delta))

    return (
      <div className={cn("flex flex-col gap-1.5", className)}>
        {label && <Label htmlFor={id}>{label}</Label>}
        <div className="relative flex items-stretch">
          {resolvedPrefix && (
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
              {resolvedPrefix}
            </span>
          )}
          <input
            ref={ref}
            id={id}
            type="number"
            inputMode="decimal"
            placeholder={placeholder}
            value={value ?? ""}
            min={min}
            max={max}
            step={step}
            disabled={disabled}
            onChange={handleChange}
            className={cn(
              "flex h-10 w-full rounded-md border border-input bg-background py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
              resolvedPrefix ? "pl-9" : "pl-3",
              suffix || showButtons ? "pr-9" : "pr-3"
            )}
          />
          {suffix && !showButtons && (
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
              {suffix}
            </span>
          )}
          {showButtons && (
            <div className="absolute right-1 top-1/2 flex -translate-y-1/2 flex-col">
              <button
                type="button"
                disabled={disabled}
                onClick={step_(step)}
                aria-label="Aumentar"
                className="flex h-4 w-6 items-center justify-center text-muted-foreground hover:text-foreground disabled:pointer-events-none disabled:opacity-50"
              >
                <Plus className="h-3 w-3" />
              </button>
              <button
                type="button"
                disabled={disabled}
                onClick={step_(-step)}
                aria-label="Diminuir"
                className="flex h-4 w-6 items-center justify-center text-muted-foreground hover:text-foreground disabled:pointer-events-none disabled:opacity-50"
              >
                <Minus className="h-3 w-3" />
              </button>
            </div>
          )}
        </div>
        {errorMessage ? (
          <p className="text-xs text-destructive">{errorMessage}</p>
        ) : hint ? (
          <p className="text-xs text-muted-foreground">{hint}</p>
        ) : null}
      </div>
    )
  }
)
InputNumber.displayName = "InputNumber"

export { InputNumber }
