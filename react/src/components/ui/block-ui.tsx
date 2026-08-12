import * as React from "react"
import { Loader2 } from "lucide-react"

import { cn } from "@/lib/utils"

export interface BlockUIProps {
  blocked?: boolean
  spinner?: React.ReactNode
  children: React.ReactNode
  className?: string
}

const BlockUI = React.forwardRef<HTMLDivElement, BlockUIProps>(
  ({ blocked = false, spinner, children, className }, ref) => (
    <div ref={ref} className={cn("relative", className)}>
      {children}
      {blocked && (
        <div className="absolute inset-0 z-10 flex items-center justify-center rounded-[inherit] bg-background/70 backdrop-blur-[1px]">
          {spinner ?? <Loader2 className="h-6 w-6 animate-spin text-primary" />}
        </div>
      )}
    </div>
  )
)
BlockUI.displayName = "BlockUI"

export { BlockUI }
