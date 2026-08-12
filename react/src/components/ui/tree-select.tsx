import * as React from "react"
import { ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"
import { Tree, type TreeNodeData } from "./tree"

export interface TreeSelectProps {
  options: TreeNodeData[]
  value?: TreeNodeData[]
  placeholder?: string
  selectionMode?: "single" | "multiple" | "checkbox"
  filter?: boolean
  disabled?: boolean
  onValueChange?: (value: TreeNodeData[]) => void
  className?: string
}

const TreeSelect = React.forwardRef<HTMLButtonElement, TreeSelectProps>(
  (
    { options, value = [], placeholder = "Selecione...", selectionMode = "single", filter = false, disabled = false, onValueChange, className },
    ref
  ) => {
    const [open, setOpen] = React.useState(false)
    const label = value.length > 0 ? value.map((v) => v.label).join(", ") : placeholder

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            ref={ref}
            type="button"
            disabled={disabled}
            className={cn(
              "flex h-10 w-full items-center justify-between gap-2 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
              className
            )}
          >
            <span className={cn("truncate text-left", value.length === 0 && "text-muted-foreground")}>{label}</span>
            <ChevronsUpDown className="h-4 w-4 shrink-0 text-muted-foreground" />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-2">
          <Tree
            nodes={options}
            selectionMode={selectionMode}
            filter={filter}
            height={240}
            onSelectionChange={(selected) => {
              onValueChange?.(selected)
              if (selectionMode === "single") setOpen(false)
            }}
          />
        </PopoverContent>
      </Popover>
    )
  }
)
TreeSelect.displayName = "TreeSelect"

export { TreeSelect }
