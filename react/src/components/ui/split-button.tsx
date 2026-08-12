import * as React from "react"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button, type ButtonProps } from "./button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu"
import type { MenuItem } from "./menu"

export interface SplitButtonProps {
  label: string
  items: MenuItem[]
  variant?: ButtonProps["variant"]
  disabled?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  className?: string
}

const SplitButton = React.forwardRef<HTMLDivElement, SplitButtonProps>(
  ({ label, items, variant = "default", disabled = false, onClick, className }, ref) => (
    <div ref={ref} className={cn("inline-flex", className)}>
      <Button
        variant={variant}
        disabled={disabled}
        onClick={onClick}
        className="rounded-r-none"
      >
        {label}
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={variant} disabled={disabled} size="icon" className="w-9 rounded-l-none border-l border-l-background/20">
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {items.map((item, index) =>
            item.separator ? (
              <DropdownMenuSeparator key={index} />
            ) : (
              <DropdownMenuItem key={index} disabled={item.disabled} onClick={item.onClick} className="gap-2">
                {item.icon}
                {item.label}
              </DropdownMenuItem>
            )
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
)
SplitButton.displayName = "SplitButton"

export { SplitButton }
