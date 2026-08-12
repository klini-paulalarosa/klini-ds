import * as React from "react"
import { useVirtualizer } from "@tanstack/react-virtual"

import { cn } from "@/lib/utils"

export interface VirtualScrollerProps<T> {
  items: T[]
  itemSize?: number
  scrollHeight?: string
  renderItem: (item: T, index: number) => React.ReactNode
  lazy?: boolean
  onLoadMore?: () => void
  className?: string
}

function VirtualScroller<T>({
  items,
  itemSize = 50,
  scrollHeight = "400px",
  renderItem,
  lazy = false,
  onLoadMore,
  className,
}: VirtualScrollerProps<T>) {
  const parentRef = React.useRef<HTMLDivElement>(null)

  const virtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => itemSize,
    overscan: 6,
  })

  const handleScroll = () => {
    if (!lazy || !parentRef.current) return
    const { scrollTop, scrollHeight: sh, clientHeight } = parentRef.current
    if (scrollTop + clientHeight >= sh - itemSize * 2) onLoadMore?.()
  }

  return (
    <div
      ref={parentRef}
      onScroll={handleScroll}
      style={{ height: scrollHeight }}
      className={cn("overflow-y-auto rounded-md border", className)}
    >
      <div style={{ height: virtualizer.getTotalSize(), position: "relative", width: "100%" }}>
        {virtualizer.getVirtualItems().map((virtualRow) => (
          <div
            key={virtualRow.key}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: virtualRow.size,
              transform: `translateY(${virtualRow.start}px)`,
            }}
          >
            {renderItem(items[virtualRow.index], virtualRow.index)}
          </div>
        ))}
      </div>
    </div>
  )
}

export { VirtualScroller }
