import * as React from "react"
import {
  DndContext,
  type DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useDroppable,
  useSensor,
  useSensors,
} from "@dnd-kit/core"
import {
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { ChevronLeft, ChevronRight, GripVertical } from "lucide-react"

import { cn } from "@/lib/utils"
import { Input } from "./input"

export interface PickListProps<T> {
  source: T[]
  target: T[]
  getItemId: (item: T) => string
  renderItem: (item: T) => React.ReactNode
  sourceHeader?: string
  targetHeader?: string
  filterBy?: (item: T, query: string) => boolean
  showSourceFilter?: boolean
  showTargetFilter?: boolean
  onSourceChange?: (source: T[]) => void
  onTargetChange?: (target: T[]) => void
  className?: string
}

function SortableRow({
  id,
  onTransfer,
  transferIcon,
  children,
}: {
  id: string
  onTransfer: () => void
  transferIcon: React.ReactNode
  children: React.ReactNode
}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id })

  return (
    <li
      ref={setNodeRef}
      style={{ transform: CSS.Transform.toString(transform), transition, opacity: isDragging ? 0.5 : 1 }}
      className="flex items-center gap-2 border-b bg-background px-2 py-1.5 last:border-b-0"
    >
      <button
        type="button"
        {...attributes}
        {...listeners}
        aria-label="Arrastar"
        className="cursor-grab touch-none text-muted-foreground active:cursor-grabbing"
      >
        <GripVertical className="h-4 w-4" />
      </button>
      <div className="flex-1 text-sm">{children}</div>
      <button
        type="button"
        onClick={onTransfer}
        aria-label="Transferir"
        className="text-muted-foreground hover:text-foreground"
      >
        {transferIcon}
      </button>
    </li>
  )
}

function ListPanel<T>({
  id,
  header,
  items,
  getItemId,
  renderItem,
  filterBy,
  showFilter,
  transferIcon,
  onTransfer,
}: {
  id: string
  header?: string
  items: T[]
  getItemId: (item: T) => string
  renderItem: (item: T) => React.ReactNode
  filterBy?: (item: T, query: string) => boolean
  showFilter?: boolean
  transferIcon: React.ReactNode
  onTransfer: (item: T) => void
}) {
  const [query, setQuery] = React.useState("")
  const { setNodeRef } = useDroppable({ id })
  const filtered = filterBy && query ? items.filter((item) => filterBy(item, query)) : items

  return (
    <div className="flex-1 rounded-md border">
      {(header || (filterBy && showFilter)) && (
        <div className="flex items-center justify-between gap-2 border-b p-2">
          {header && <p className="text-sm font-semibold">{header}</p>}
          {filterBy && showFilter && (
            <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Filtrar..." className="h-8" />
          )}
        </div>
      )}
      <SortableContext items={filtered.map(getItemId)} strategy={verticalListSortingStrategy}>
        <ul ref={setNodeRef} className="min-h-[3rem]">
          {filtered.map((item) => (
            <SortableRow key={getItemId(item)} id={getItemId(item)} onTransfer={() => onTransfer(item)} transferIcon={transferIcon}>
              {renderItem(item)}
            </SortableRow>
          ))}
        </ul>
      </SortableContext>
    </div>
  )
}

function PickList<T>({
  source,
  target,
  getItemId,
  renderItem,
  sourceHeader = "Disponível",
  targetHeader = "Selecionado",
  filterBy,
  showSourceFilter = true,
  showTargetFilter = true,
  onSourceChange,
  onTargetChange,
  className,
}: PickListProps<T>) {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  )

  const moveToTarget = (item: T) => {
    onSourceChange?.(source.filter((i) => getItemId(i) !== getItemId(item)))
    onTargetChange?.([...target, item])
  }

  const moveToSource = (item: T) => {
    onTargetChange?.(target.filter((i) => getItemId(i) !== getItemId(item)))
    onSourceChange?.([...source, item])
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (!over) return

    const activeInSource = source.some((i) => getItemId(i) === active.id)
    const overIsTargetContainer = over.id === "target-list" || target.some((i) => getItemId(i) === over.id)

    if (activeInSource && overIsTargetContainer) {
      const item = source.find((i) => getItemId(i) === active.id)!
      moveToTarget(item)
      return
    }

    const activeInTarget = target.some((i) => getItemId(i) === active.id)
    const overIsSourceContainer = over.id === "source-list" || source.some((i) => getItemId(i) === over.id)

    if (activeInTarget && overIsSourceContainer) {
      const item = target.find((i) => getItemId(i) === active.id)!
      moveToSource(item)
    }
  }

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div className={cn("flex gap-3", className)}>
        <ListPanel
          id="source-list"
          header={sourceHeader}
          items={source}
          getItemId={getItemId}
          renderItem={renderItem}
          filterBy={filterBy}
          showFilter={showSourceFilter}
          transferIcon={<ChevronRight className="h-4 w-4" />}
          onTransfer={moveToTarget}
        />
        <ListPanel
          id="target-list"
          header={targetHeader}
          items={target}
          getItemId={getItemId}
          renderItem={renderItem}
          filterBy={filterBy}
          showFilter={showTargetFilter}
          transferIcon={<ChevronLeft className="h-4 w-4" />}
          onTransfer={moveToSource}
        />
      </div>
    </DndContext>
  )
}

export { PickList }
