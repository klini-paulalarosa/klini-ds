import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "./button"

export interface DataViewProps<T> {
  value: T[]
  layout?: "list" | "grid"
  paginator?: boolean
  rows?: number
  emptyMessage?: string
  renderItem: (item: T, layout: "list" | "grid") => React.ReactNode
  className?: string
}

function DataView<T>({
  value,
  layout = "list",
  paginator = false,
  rows = 10,
  emptyMessage = "Nenhum resultado encontrado.",
  renderItem,
  className,
}: DataViewProps<T>) {
  const [page, setPage] = React.useState(0)
  const pageCount = Math.max(1, Math.ceil(value.length / rows))
  const paged = paginator ? value.slice(page * rows, page * rows + rows) : value

  if (value.length === 0) {
    return <p className={cn("py-8 text-center text-sm text-muted-foreground", className)}>{emptyMessage}</p>
  }

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <div className={cn(layout === "grid" ? "grid grid-cols-2 gap-4 sm:grid-cols-3" : "flex flex-col gap-2")}>
        {paged.map((item, index) => (
          <React.Fragment key={index}>{renderItem(item, layout)}</React.Fragment>
        ))}
      </div>
      {paginator && pageCount > 1 && (
        <div className="flex items-center justify-center gap-2">
          <Button variant="outline" size="sm" disabled={page === 0} onClick={() => setPage((p) => p - 1)}>
            Anterior
          </Button>
          <span className="text-sm text-muted-foreground">
            {page + 1} / {pageCount}
          </span>
          <Button variant="outline" size="sm" disabled={page >= pageCount - 1} onClick={() => setPage((p) => p + 1)}>
            Próxima
          </Button>
        </div>
      )}
    </div>
  )
}

export { DataView }
