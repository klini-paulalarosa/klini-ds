import * as React from "react"
import { ZoomIn } from "lucide-react"

import { cn } from "@/lib/utils"
import { Dialog, DialogContent, DialogTitle } from "./dialog"

export interface ImageProps {
  src: string
  alt?: string
  width?: string | number
  height?: string | number
  preview?: boolean
  className?: string
}

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ src, alt = "", width, height, preview = false, className }, ref) => {
    const [open, setOpen] = React.useState(false)

    if (!preview) {
      return <img ref={ref} src={src} alt={alt} width={width} height={height} className={className} />
    }

    return (
      <>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className={cn("group relative inline-block cursor-zoom-in overflow-hidden rounded-md", className)}
        >
          <img ref={ref} src={src} alt={alt} width={width} height={height} className="block" />
          <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all group-hover:bg-black/40 group-hover:opacity-100">
            <ZoomIn className="h-6 w-6 text-white" />
          </span>
        </button>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-3xl border-none bg-transparent p-0 shadow-none">
            <DialogTitle className="sr-only">{alt || "Visualização da imagem"}</DialogTitle>
            <img src={src} alt={alt} className="h-auto w-full rounded-md" />
          </DialogContent>
        </Dialog>
      </>
    )
  }
)
Image.displayName = "Image"

export { Image }
