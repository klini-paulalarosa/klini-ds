import * as React from "react"

import { cn } from "@/lib/utils"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./alert-dialog"
import { buttonVariants } from "./button"

export interface ConfirmDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  header?: string
  message: string
  icon?: React.ReactNode
  acceptLabel?: string
  rejectLabel?: string
  variant?: "default" | "danger"
  onAccept?: () => void
  onReject?: () => void
  className?: string
}

const ConfirmDialog = React.forwardRef<HTMLDivElement, ConfirmDialogProps>(
  (
    {
      open,
      onOpenChange,
      header = "Confirmar ação",
      message,
      icon,
      acceptLabel = "Confirmar",
      rejectLabel = "Cancelar",
      variant = "default",
      onAccept,
      onReject,
      className,
    },
    ref
  ) => (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent ref={ref} className={cn("rounded-xl", className)}>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-2">
            {icon}
            {header}
          </AlertDialogTitle>
          <AlertDialogDescription>{message}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onReject}>{rejectLabel}</AlertDialogCancel>
          <AlertDialogAction
            onClick={onAccept}
            className={variant === "danger" ? buttonVariants({ variant: "destructive" }) : undefined}
          >
            {acceptLabel}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
)
ConfirmDialog.displayName = "ConfirmDialog"

export { ConfirmDialog }
