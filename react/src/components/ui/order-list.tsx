import * as React from "react"
import {
  DndContext,
  type DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core"
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { GripVertical } from "lucide-react"

import { cn } from "@/lib/utils"
import { Input } from "./input"

export interface OrderListProps<T> {
  value: T[]
  getItemId: (item: T) => string
  renderItem: (item: T) => React.ReactNode
  header?: string
  filterBy?: (item: T, query: string) => boolean
  onReorder?: (value: T[]) => void
  className?: string
}

function SortableRow({ id, children }: { id: string; children: React.ReactNode }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id })

  return (
    <li
      ref={setNodeRef}
      style={{ transform: CSS.Transform.toString(transform), transition, opacity: isDragging ? 0.5 : 1 }}
      className="flex items-center gap-2 border-b bg-background px-3 py-2 last:border-b-0"
    >
      <button
        type="button"
        {...attributes}
        {...listeners}
        aria-label="Reordenar"
        className="cursor-grab touch-none text-muted-foreground active:cursor-grabbing"
      >
        <GripVertical className="h-4 w-4" />
      </button>
      <div className="flex-1">{children}</div>
    </li>
  )
}

function OrderList<T>({ value, getItemId, renderItem, header, filterBy, onReorder, className }: OrderListProps<T>) {
  const [query, setQuery] = React.useState("")
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  )

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (!over || active.id === over.id) return
    const oldIndex = value.findIndex((item) => getItemId(item) === active.id)
    const newIndex = value.findIndex((item) => getItemId(item) === over.id)
    const next = arrayMove(value, oldIndex, newIndex)
    onReorder?.(next)
  }

  const filtered = filterBy && query ? value.filter((item) => filterBy(item, query)) : value

  return (
    <div className={cn("rounded-md border", className)}>
      {(header || filterBy) && (
        <div className="flex items-center justify-between gap-2 border-b p-2">
          {header && <p className="text-sm font-semibold">{header}</p>}
          {filterBy && (
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Filtrar..."
              className="h-8 max-w-[200px]"
            />
          )}
        </div>
      )}
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={filtered.map(getItemId)} strategy={verticalListSortingStrategy}>
          <ul>
            {filtered.map((item) => (
              <SortableRow key={getItemId(item)} id={getItemId(item)}>
                {renderItem(item)}
              </SortableRow>
            ))}
          </ul>
        </SortableContext>
      </DndContext>
    </div>
  )
}

export { OrderList }
