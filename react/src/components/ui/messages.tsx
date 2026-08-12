import * as React from "react"

import { cn } from "@/lib/utils"
import { Message, type MessageProps } from "./message"

export interface MessageItem {
  severity?: MessageProps["severity"]
  summary?: string
  detail?: string
  icon?: React.ReactNode
}

export interface MessagesProps extends React.HTMLAttributes<HTMLDivElement> {
  value: MessageItem[]
  closable?: boolean
  onRemove?: (index: number) => void
}

const Messages = React.forwardRef<HTMLDivElement, MessagesProps>(
  ({ className, value, closable = true, onRemove, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col gap-2", className)} {...props}>
      {value.map((item, index) => (
        <Message
          key={index}
          severity={item.severity}
          icon={item.icon}
          text={item.detail ?? item.summary ?? ""}
          closable={closable}
          onClose={() => onRemove?.(index)}
        />
      ))}
    </div>
  )
)
Messages.displayName = "Messages"

export { Messages }
