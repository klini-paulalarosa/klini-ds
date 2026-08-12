import * as React from "react"

import { cn } from "@/lib/utils"
import { Label } from "./label"

const MASK_TOKENS: Record<string, RegExp> = {
  "9": /[0-9]/,
  a: /[a-zA-Z]/,
  "*": /[a-zA-Z0-9]/,
}

function applyMask(raw: string, mask: string): string {
  const input = raw.split("")
  let result = ""
  let i = 0

  for (let m = 0; m < mask.length && i < input.length; m++) {
    const token = mask[m]
    const test = MASK_TOKENS[token]

    if (test) {
      while (i < input.length && !test.test(input[i])) i++
      if (i >= input.length) break
      result += input[i]
      i++
    } else {
      result += token
      if (input[i] === token) i++
    }
  }

  return result
}

export interface InputMaskProps {
  label?: string
  mask: string
  placeholder?: string
  value?: string
  disabled?: boolean
  errorMessage?: string
  hint?: string
  id?: string
  onValueChange?: (value: string) => void
  className?: string
}

const InputMask = React.forwardRef<HTMLInputElement, InputMaskProps>(
  ({ label, mask, placeholder, value = "", disabled = false, errorMessage, hint, id, onValueChange, className }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onValueChange?.(applyMask(e.target.value, mask))
    }

    return (
      <div className={cn("flex flex-col gap-1.5", className)}>
        {label && <Label htmlFor={id}>{label}</Label>}
        <input
          ref={ref}
          id={id}
          type="text"
          inputMode="numeric"
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          onChange={handleChange}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            errorMessage && "border-destructive"
          )}
        />
        {errorMessage ? (
          <p className="text-xs text-destructive">{errorMessage}</p>
        ) : hint ? (
          <p className="text-xs text-muted-foreground">{hint}</p>
        ) : null}
      </div>
    )
  }
)
InputMask.displayName = "InputMask"

export { InputMask }
