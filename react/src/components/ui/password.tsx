import * as React from "react"
import { Eye, EyeOff } from "lucide-react"

import { cn } from "@/lib/utils"
import { Label } from "./label"

type Strength = "fraca" | "media" | "forte"

function evaluateStrength(value: string): Strength | null {
  if (!value) return null
  let score = 0
  if (value.length >= 8) score++
  if (/[a-z]/.test(value) && /[A-Z]/.test(value)) score++
  if (/\d/.test(value)) score++
  if (/[^a-zA-Z0-9]/.test(value)) score++
  if (score <= 1) return "fraca"
  if (score <= 3) return "media"
  return "forte"
}

const STRENGTH_STYLES: Record<Strength, string> = {
  fraca: "bg-klini-coral-500 w-1/3",
  media: "bg-klini-orange-500 w-2/3",
  forte: "bg-klini-teal-500 w-full",
}

export interface PasswordProps {
  label?: string
  placeholder?: string
  id?: string
  value?: string
  feedback?: boolean
  toggleMask?: boolean
  errorMessage?: string
  hint?: string
  disabled?: boolean
  onValueChange?: (value: string) => void
  className?: string
}

const Password = React.forwardRef<HTMLInputElement, PasswordProps>(
  (
    {
      label,
      placeholder,
      id,
      value = "",
      feedback = false,
      toggleMask = true,
      errorMessage,
      hint,
      disabled = false,
      onValueChange,
      className,
    },
    ref
  ) => {
    const [visible, setVisible] = React.useState(false)
    const strength = feedback ? evaluateStrength(value) : null

    return (
      <div className={cn("flex flex-col gap-1.5", className)}>
        {label && <Label htmlFor={id}>{label}</Label>}
        <div className="relative">
          <input
            ref={ref}
            id={id}
            type={visible ? "text" : "password"}
            placeholder={placeholder}
            value={value}
            disabled={disabled}
            onChange={(e) => onValueChange?.(e.target.value)}
            className={cn(
              "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              toggleMask && "pr-9",
              errorMessage && "border-destructive"
            )}
          />
          {toggleMask && (
            <button
              type="button"
              onClick={() => setVisible((v) => !v)}
              aria-label={visible ? "Ocultar senha" : "Mostrar senha"}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              {visible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          )}
        </div>
        {strength && (
          <div className="h-1 w-full overflow-hidden rounded-full bg-muted">
            <div className={cn("h-full transition-all", STRENGTH_STYLES[strength])} />
          </div>
        )}
        {errorMessage ? (
          <p className="text-xs text-destructive">{errorMessage}</p>
        ) : hint ? (
          <p className="text-xs text-muted-foreground">{hint}</p>
        ) : null}
      </div>
    )
  }
)
Password.displayName = "Password"

export { Password }
