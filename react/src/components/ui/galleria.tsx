import * as React from "react"
import Lightbox from "yet-another-react-lightbox"
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails"
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen"
import "yet-another-react-lightbox/styles.css"
import "yet-another-react-lightbox/plugins/thumbnails.css"

import { cn } from "@/lib/utils"

export interface GalleriaImage {
  src: string
  alt?: string
  thumbnail?: string
}

export interface GalleriaProps {
  value: GalleriaImage[]
  numVisible?: number
  showThumbnails?: boolean
  fullScreen?: boolean
  visible?: boolean
  onVisibleChange?: (visible: boolean) => void
  className?: string
}

const Galleria = React.forwardRef<HTMLDivElement, GalleriaProps>(
  ({ value, numVisible = 5, showThumbnails = true, fullScreen = false, visible = false, onVisibleChange, className }, ref) => {
    const [index, setIndex] = React.useState(0)

    return (
      <div ref={ref} className={className}>
        <div className={cn("grid gap-2", "grid-cols-5")}>
          {value.slice(0, numVisible).map((image, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                setIndex(i)
                onVisibleChange?.(true)
              }}
              className="aspect-square overflow-hidden rounded-md border"
            >
              <img src={image.thumbnail ?? image.src} alt={image.alt ?? ""} className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
        <Lightbox
          open={visible}
          close={() => onVisibleChange?.(false)}
          index={index}
          slides={value.map((v) => ({ src: v.src, alt: v.alt }))}
          plugins={[...(showThumbnails ? [Thumbnails] : []), ...(fullScreen ? [Fullscreen] : [])]}
        />
      </div>
    )
  }
)
Galleria.displayName = "Galleria"

export { Galleria }
