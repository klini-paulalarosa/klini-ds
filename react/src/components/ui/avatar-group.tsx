import * as React from "react"

import { cn } from "@/lib/utils"

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center [&>*]:ring-2 [&>*]:ring-background [&>*:not(:first-child)]:-ml-3",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
)
AvatarGroup.displayName = "AvatarGroup"

export { AvatarGroup }
