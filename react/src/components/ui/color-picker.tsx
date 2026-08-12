import * as React from "react"
import { HexColorPicker, HexColorInput } from "react-colorful"

import { cn } from "@/lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"

export interface ColorPickerProps {
  value?: string | null
  format?: "hex" | "rgb" | "hsb"
  inline?: boolean
  disabled?: boolean
  onValueChange?: (value: string | null) => void
  className?: string
}

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const clean = hex.replace("#", "")
  const num = parseInt(clean, 16)
  return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 }
}

function hexToHsb(hex: string): { h: number; s: number; b: number } {
  const { r, g, b } = hexToRgb(hex)
  const rn = r / 255
  const gn = g / 255
  const bn = b / 255
  const max = Math.max(rn, gn, bn)
  const min = Math.min(rn, gn, bn)
  const delta = max - min
  let h = 0
  if (delta !== 0) {
    if (max === rn) h = ((gn - bn) / delta) % 6
    else if (max === gn) h = (bn - rn) / delta + 2
    else h = (rn - gn) / delta + 4
    h = Math.round(h * 60)
    if (h < 0) h += 360
  }
  const s = max === 0 ? 0 : Math.round((delta / max) * 100)
  return { h, s, b: Math.round(max * 100) }
}

function formatValue(hex: string, format: NonNullable<ColorPickerProps["format"]>): string {
  if (format === "rgb") {
    const { r, g, b } = hexToRgb(hex)
    return `rgb(${r}, ${g}, ${b})`
  }
  if (format === "hsb") {
    const { h, s, b } = hexToHsb(hex)
    return `hsb(${h}, ${s}%, ${b}%)`
  }
  return hex
}

const ColorPicker = React.forwardRef<HTMLDivElement, ColorPickerProps>(
  ({ value, format = "hex", inline = false, disabled = false, onValueChange, className }, ref) => {
    const hex = value && value.startsWith("#") ? value : "#259591"

    const picker = (
      <div className={cn("flex flex-col gap-2", inline && className)}>
        <HexColorPicker color={hex} onChange={(next) => onValueChange?.(formatValue(next, format))} />
        <div className="flex items-center gap-2">
          <span className="h-6 w-6 shrink-0 rounded border" style={{ background: hex }} />
          <HexColorInput
            color={hex}
            onChange={(next) => onValueChange?.(formatValue(next, format))}
            prefixed
            className="h-8 w-full rounded-md border border-input bg-background px-2 text-sm"
          />
        </div>
      </div>
    )

    if (inline) {
      return <div ref={ref}>{picker}</div>
    }

    return (
      <Popover>
        <PopoverTrigger asChild>
          <button
            type="button"
            disabled={disabled}
            className={cn(
              "h-8 w-8 rounded-md border shadow-sm disabled:cursor-not-allowed disabled:opacity-50",
              className
            )}
            style={{ background: hex }}
            aria-label="Selecionar cor"
          />
        </PopoverTrigger>
        <PopoverContent ref={ref} className="w-auto p-3">
          {picker}
        </PopoverContent>
      </Popover>
    )
  }
)
ColorPicker.displayName = "ColorPicker"

export { ColorPicker }
