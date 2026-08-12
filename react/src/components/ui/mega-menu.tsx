import * as React from "react"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./navigation-menu"

export interface MegaMenuLink {
  label: string
  icon?: React.ReactNode
  onClick?: () => void
}

export interface MegaMenuColumn {
  heading?: string
  items: MegaMenuLink[]
}

export interface MegaMenuItem {
  label: string
  icon?: React.ReactNode
  onClick?: () => void
  columns?: MegaMenuColumn[]
}

export interface MegaMenuProps {
  model: MegaMenuItem[]
  orientation?: "horizontal" | "vertical"
  className?: string
}

const MegaMenu = React.forwardRef<HTMLDivElement, MegaMenuProps>(
  ({ model, orientation = "horizontal", className }, ref) => (
    <NavigationMenu ref={ref} className={cn(orientation === "vertical" && "flex-col items-start", className)}>
      <NavigationMenuList className={cn(orientation === "vertical" && "flex-col items-start space-x-0")}>
        {model.map((item, index) => (
          <NavigationMenuItem key={index}>
            {item.columns?.length ? (
              <>
                <NavigationMenuTrigger className="gap-2">
                  {item.icon}
                  {item.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-3 gap-6 p-6" style={{ minWidth: `${item.columns.length * 180}px` }}>
                    {item.columns.map((column, colIndex) => (
                      <div key={colIndex} className="flex flex-col gap-1">
                        {column.heading && (
                          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                            {column.heading}
                          </p>
                        )}
                        {column.items.map((link, linkIndex) => (
                          <button
                            key={linkIndex}
                            type="button"
                            onClick={link.onClick}
                            className="flex items-center gap-2 rounded-sm px-2 py-1.5 text-left text-sm hover:bg-accent hover:text-accent-foreground"
                          >
                            {link.icon}
                            {link.label}
                          </button>
                        ))}
                      </div>
                    ))}
                  </div>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink
                onClick={item.onClick}
                className="group inline-flex h-10 w-max cursor-pointer items-center justify-center gap-2 rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
              >
                {item.icon}
                {item.label}
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
)
MegaMenu.displayName = "MegaMenu"

export { MegaMenu }
