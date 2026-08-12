import * as React from "react"
import { ArrowUp } from "lucide-react"

import { cn } from "@/lib/utils"

export interface ScrollTopProps {
  target?: "window" | "parent"
  threshold?: number
  icon?: React.ReactNode
  className?: string
}

const ScrollTop = React.forwardRef<HTMLButtonElement, ScrollTopProps>(
  ({ target = "window", threshold = 400, icon, className }, ref) => {
    const [visible, setVisible] = React.useState(false)
    const buttonRef = React.useRef<HTMLButtonElement>(null)
    React.useImperativeHandle(ref, () => buttonRef.current!)

    React.useEffect(() => {
      if (target === "window") {
        const onScroll = () => setVisible(window.scrollY > threshold)
        window.addEventListener("scroll", onScroll)
        onScroll()
        return () => window.removeEventListener("scroll", onScroll)
      }

      const parent = buttonRef.current?.parentElement
      if (!parent) return
      const onScroll = () => setVisible(parent.scrollTop > threshold)
      parent.addEventListener("scroll", onScroll)
      onScroll()
      return () => parent.removeEventListener("scroll", onScroll)
    }, [target, threshold])

    const handleClick = () => {
      if (target === "window") {
        window.scrollTo({ top: 0, behavior: "smooth" })
      } else {
        buttonRef.current?.parentElement?.scrollTo({ top: 0, behavior: "smooth" })
      }
    }

    if (!visible) return null

    return (
      <button
        ref={buttonRef}
        type="button"
        onClick={handleClick}
        aria-label="Voltar ao topo"
        className={cn(
          "fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-opacity hover:bg-primary/90",
          className
        )}
      >
        {icon ?? <ArrowUp className="h-5 w-5" />}
      </button>
    )
  }
)
ScrollTop.displayName = "ScrollTop"

export { ScrollTop }
