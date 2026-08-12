import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const messageVariants = cva("flex items-start gap-2 rounded-lg border p-3 text-sm", {
  variants: {
    severity: {
      success: "border-klini-teal-200 bg-klini-teal-50 text-klini-teal-700",
      info: "border-klini-sea-200 bg-klini-sea-50 text-klini-sea-700",
      warn: "border-klini-orange-200 bg-klini-orange-50 text-klini-orange-700",
      error: "border-klini-coral-200 bg-klini-coral-50 text-klini-coral-700",
      secondary: "border-klini-slate-200 bg-klini-slate-50 text-klini-slate-700",
      contrast: "border-foreground bg-foreground text-background",
    },
  },
  defaultVariants: { severity: "info" },
})

export interface MessageProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children">,
    VariantProps<typeof messageVariants> {
  text: string
  icon?: React.ReactNode
  closable?: boolean
  onClose?: () => void
}

const Message = React.forwardRef<HTMLDivElement, MessageProps>(
  ({ className, text, severity, icon, closable = false, onClose, ...props }, ref) => (
    <div ref={ref} role="alert" className={cn(messageVariants({ severity }), className)} {...props}>
      {icon && <span className="mt-0.5 shrink-0">{icon}</span>}
      <span className="flex-1">{text}</span>
      {closable && (
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="shrink-0 rounded-sm opacity-70 transition-opacity hover:opacity-100"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  )
)
Message.displayName = "Message"

export { Message, messageVariants }
