import * as React from "react"
import { GripVertical } from "lucide-react"

import { cn } from "@/lib/utils"

export interface ImageCompareProps {
  before: string
  after: string
  beforeAlt?: string
  afterAlt?: string
  className?: string
}

const ImageCompare = React.forwardRef<HTMLDivElement, ImageCompareProps>(
  ({ before, after, beforeAlt = "Antes", afterAlt = "Depois", className }, ref) => {
    const containerRef = React.useRef<HTMLDivElement>(null)
    React.useImperativeHandle(ref, () => containerRef.current!)
    const [percent, setPercent] = React.useState(50)
    const dragging = React.useRef(false)

    const updateFromClientX = (clientX: number) => {
      const rect = containerRef.current?.getBoundingClientRect()
      if (!rect) return
      const next = ((clientX - rect.left) / rect.width) * 100
      setPercent(Math.max(0, Math.min(100, next)))
    }

    React.useEffect(() => {
      const onMove = (e: PointerEvent) => dragging.current && updateFromClientX(e.clientX)
      const onUp = () => (dragging.current = false)
      window.addEventListener("pointermove", onMove)
      window.addEventListener("pointerup", onUp)
      return () => {
        window.removeEventListener("pointermove", onMove)
        window.removeEventListener("pointerup", onUp)
      }
    }, [])

    return (
      <div
        ref={containerRef}
        className={cn("relative aspect-video w-full select-none overflow-hidden rounded-md", className)}
      >
        <img src={after} alt={afterAlt} className="absolute inset-0 h-full w-full object-cover" draggable={false} />
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${percent}%` }}>
          <img
            src={before}
            alt={beforeAlt}
            className="h-full w-full max-w-none object-cover"
            style={{ width: containerRef.current?.offsetWidth ?? "100%" }}
            draggable={false}
          />
        </div>
        <div
          className="absolute inset-y-0 flex w-8 -translate-x-1/2 cursor-ew-resize items-center justify-center"
          style={{ left: `${percent}%` }}
          onPointerDown={(e) => {
            dragging.current = true
            updateFromClientX(e.clientX)
          }}
        >
          <div className="h-full w-0.5 bg-white shadow" />
          <div className="absolute flex h-8 w-8 items-center justify-center rounded-full bg-white text-foreground shadow-md">
            <GripVertical className="h-4 w-4" />
          </div>
        </div>
      </div>
    )
  }
)
ImageCompare.displayName = "ImageCompare"

export { ImageCompare }
