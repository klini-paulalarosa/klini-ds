import * as React from "react"
import { Tree as ArboristTree, type NodeRendererProps } from "react-arborist"
import { ChevronRight, Loader2 } from "lucide-react"

import { cn } from "@/lib/utils"
import { Input } from "./input"
import { Checkbox } from "./checkbox"

export interface TreeNodeData {
  key?: string
  label?: string
  icon?: React.ReactNode
  children?: TreeNodeData[]
}

export interface TreeProps {
  nodes: TreeNodeData[]
  selectionMode?: "single" | "multiple" | "checkbox" | null
  filter?: boolean
  loading?: boolean
  height?: number
  onSelectionChange?: (selection: TreeNodeData[]) => void
  className?: string
}

const Tree = React.forwardRef<HTMLDivElement, TreeProps>(
  ({ nodes, selectionMode = null, filter = false, loading = false, height = 300, onSelectionChange, className }, ref) => {
    const [searchTerm, setSearchTerm] = React.useState("")
    const showCheckbox = selectionMode === "checkbox"
    const disableMultiSelection = selectionMode !== "multiple" && selectionMode !== "checkbox"

    const Node = React.useCallback(
      ({ node, style, dragHandle }: NodeRendererProps<TreeNodeData>) => (
        <div
          ref={dragHandle}
          style={style}
          onClick={() => node.isInternal && node.toggle()}
          className={cn(
            "flex items-center gap-1.5 rounded-sm px-1 text-sm hover:bg-accent",
            node.isSelected && "bg-accent text-accent-foreground"
          )}
        >
          {node.isInternal ? (
            <ChevronRight className={cn("h-3.5 w-3.5 shrink-0 transition-transform", node.isOpen && "rotate-90")} />
          ) : (
            <span className="w-3.5 shrink-0" />
          )}
          {showCheckbox && (
            <Checkbox
              checked={node.isSelected}
              onCheckedChange={() => (node.isSelected ? node.deselect() : node.selectMulti())}
              onClick={(e) => e.stopPropagation()}
            />
          )}
          {node.data.icon}
          <span className="truncate">{node.data.label}</span>
        </div>
      ),
      [showCheckbox]
    )

    return (
      <div ref={ref} className={cn("rounded-md border p-2", className)}>
        {filter && (
          <Input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar..."
            className="mb-2 h-8"
          />
        )}
        {loading ? (
          <div className="flex items-center justify-center gap-2 py-8 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" />
            Carregando...
          </div>
        ) : (
          <ArboristTree<TreeNodeData>
            data={nodes}
            idAccessor={(d) => d.key ?? d.label ?? ""}
            childrenAccessor={(d) => d.children ?? null}
            searchTerm={searchTerm}
            searchMatch={(node, term) => (node.data.label ?? "").toLowerCase().includes(term.toLowerCase())}
            disableMultiSelection={disableMultiSelection}
            disableDrag
            disableDrop
            width="100%"
            height={height}
            rowHeight={28}
            onSelect={(selected) => onSelectionChange?.(selected.map((n) => n.data))}
          >
            {Node}
          </ArboristTree>
        )}
      </div>
    )
  }
)
Tree.displayName = "Tree"

export { Tree }
