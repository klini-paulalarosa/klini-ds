import * as React from "react"
import {
  type ColumnDef,
  type ExpandedState,
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./table"

export interface TreeTableProps<TData extends { children?: TData[] }> {
  columns: ColumnDef<TData>[]
  value: TData[]
  emptyMessage?: string
  className?: string
}

function TreeTable<TData extends { children?: TData[] }>({
  columns,
  value,
  emptyMessage = "Nenhum resultado encontrado.",
  className,
}: TreeTableProps<TData>) {
  const [expanded, setExpanded] = React.useState<ExpandedState>({})

  const table = useReactTable({
    data: value,
    columns,
    state: { expanded },
    onExpandedChange: setExpanded,
    getSubRows: (row) => row.children,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
  })

  return (
    <div className={cn("rounded-md border", className)}>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((hg) => (
            <TableRow key={hg.id}>
              {hg.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell, cellIndex) => (
                  <TableCell key={cell.id}>
                    {cellIndex === 0 ? (
                      <span className="flex items-center gap-1" style={{ paddingLeft: `${row.depth * 1.25}rem` }}>
                        {row.subRows.length > 0 ? (
                          <button
                            type="button"
                            onClick={row.getToggleExpandedHandler()}
                            className="flex h-4 w-4 shrink-0 items-center justify-center"
                          >
                            <ChevronRight
                              className={cn("h-3.5 w-3.5 transition-transform", row.getIsExpanded() && "rotate-90")}
                            />
                          </button>
                        ) : (
                          <span className="w-4 shrink-0" />
                        )}
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </span>
                    ) : (
                      flexRender(cell.column.columnDef.cell, cell.getContext())
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center text-muted-foreground">
                {emptyMessage}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}

export { TreeTable }
