import * as React from "react"
import { AlertTriangle } from "lucide-react"

import { cn } from "@/lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"
import { Button } from "./button"

export interface ConfirmPopupProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  trigger: React.ReactElement
  message: string
  icon?: React.ReactNode
  acceptLabel?: string
  rejectLabel?: string
  variant?: "default" | "danger"
  onAccept?: () => void
  onReject?: () => void
  className?: string
}

const ConfirmPopup = React.forwardRef<HTMLDivElement, ConfirmPopupProps>(
  (
    {
      open,
      onOpenChange,
      trigger,
      message,
      icon,
      acceptLabel = "Sim",
      rejectLabel = "Não",
      variant = "default",
      onAccept,
      onReject,
      className,
    },
    ref
  ) => (
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>{trigger}</PopoverTrigger>
      <PopoverContent ref={ref} className={cn("w-64", className)}>
        <div className="flex gap-2">
          {icon ?? <AlertTriangle className="h-5 w-5 shrink-0 text-klini-orange-500" />}
          <p className="text-sm">{message}</p>
        </div>
        <div className="mt-3 flex justify-end gap-2">
          <Button
            size="sm"
            variant="ghost"
            onClick={() => {
              onReject?.()
              onOpenChange(false)
            }}
          >
            {rejectLabel}
          </Button>
          <Button
            size="sm"
            variant={variant === "danger" ? "destructive" : "default"}
            onClick={() => {
              onAccept?.()
              onOpenChange(false)
            }}
          >
            {acceptLabel}
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
)
ConfirmPopup.displayName = "ConfirmPopup"

export { ConfirmPopup }
