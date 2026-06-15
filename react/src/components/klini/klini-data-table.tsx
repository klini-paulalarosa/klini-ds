'use client'

import * as React from 'react'
import {
  type Column,
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { ArrowUpDown, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { cn } from '@/lib/utils'

export interface KliniDataTableProps<TData> {
  columns: ColumnDef<TData>[]
  data: TData[]
  /** Filter placeholder text (enables global filter input when set) */
  filterPlaceholder?: string
  /** Column key to filter on (leave undefined for global filter) */
  filterColumn?: string
  /** Show column visibility toggle (default true) */
  showColumnToggle?: boolean
  /** Show pagination controls (default true) */
  showPagination?: boolean
  /** Rows per page options */
  pageSizeOptions?: number[]
  className?: string
}

/**
 * Full-featured data table built on TanStack Table v8 + Shadcn Table.
 * Supports sorting, filtering, column visibility, and pagination out of the box.
 *
 * @example
 * const columns: ColumnDef<User>[] = [
 *   { accessorKey: 'name', header: 'Nome' },
 *   { accessorKey: 'email', header: 'E-mail' },
 *   {
 *     accessorKey: 'status',
 *     header: ({ column }) => <KliniSortableHeader column={column} label="Status" />,
 *   },
 * ]
 * <KliniDataTable columns={columns} data={users} filterPlaceholder="Buscar usuário…" />
 */
export function KliniDataTable<TData>({
  columns,
  data,
  filterPlaceholder,
  filterColumn,
  showColumnToggle = true,
  showPagination = true,
  pageSizeOptions = [10, 20, 50],
  className,
}: KliniDataTableProps<TData>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [globalFilter, setGlobalFilter] = React.useState('')
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [pagination, setPagination] = React.useState({ pageIndex: 0, pageSize: pageSizeOptions[0] })

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: { sorting, columnFilters, globalFilter, columnVisibility, pagination },
  })

  return (
    <div className={cn('space-y-3', className)}>
      {/* Toolbar */}
      {(filterPlaceholder || showColumnToggle) && (
        <div className="flex items-center gap-2">
          {filterPlaceholder && (
            <Input
              placeholder={filterPlaceholder}
              value={filterColumn
                ? (table.getColumn(filterColumn)?.getFilterValue() as string) ?? ''
                : globalFilter}
              onChange={(e) => filterColumn
                ? table.getColumn(filterColumn)?.setFilterValue(e.target.value)
                : setGlobalFilter(e.target.value)}
              className="h-8 max-w-xs"
            />
          )}
          {showColumnToggle && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="ml-auto h-8 gap-1">
                  Colunas <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {table
                  .getAllColumns()
                  .filter((col) => col.getCanHide())
                  .map((col) => (
                    <DropdownMenuCheckboxItem
                      key={col.id}
                      className="capitalize"
                      checked={col.getIsVisible()}
                      onCheckedChange={(v) => col.toggleVisibility(!!v)}
                    >
                      {col.id}
                    </DropdownMenuCheckboxItem>
                  ))}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      )}

      {/* Table */}
      <div className="rounded-md border">
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
                <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center text-muted-foreground">
                  Nenhum resultado encontrado.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      {showPagination && (
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>
            {table.getFilteredRowModel().rows.length} registro(s)
          </span>
          <div className="flex items-center gap-2">
            <span>Linhas por página</span>
            <Select
              value={String(pagination.pageSize)}
              onValueChange={(v) => setPagination((p) => ({ ...p, pageSize: Number(v), pageIndex: 0 }))}
            >
              <SelectTrigger className="h-8 w-16">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {pageSizeOptions.map((size) => (
                  <SelectItem key={size} value={String(size)}>{size}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <span>
              Página {table.getState().pagination.pageIndex + 1} de {table.getPageCount()}
            </span>
            <Button
              variant="outline" size="icon"
              className="h-8 w-8"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline" size="icon"
              className="h-8 w-8"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

/**
 * Helper: sortable column header button.
 * @example
 * { header: ({ column }) => <KliniSortableHeader column={column} label="Nome" /> }
 */
export function KliniSortableHeader({
  column,
  label,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  column: Column<any, unknown>
  label: string
}) {
  return (
    <Button
      variant="ghost"
      size="sm"
      className="-ml-3 h-8 gap-1 text-muted-foreground hover:text-foreground"
      onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
    >
      {label}
      <ArrowUpDown className="h-3.5 w-3.5" />
    </Button>
  )
}
