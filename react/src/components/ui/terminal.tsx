import * as React from "react"

import { cn } from "@/lib/utils"

export interface TerminalProps {
  welcomeMessage?: string
  prompt?: string
  onCommand?: (command: string) => string | void
  className?: string
}

const Terminal = React.forwardRef<HTMLDivElement, TerminalProps>(
  ({ welcomeMessage = "", prompt = "$", onCommand, className }, ref) => {
    const [history, setHistory] = React.useState<{ command: string; response?: string }[]>([])
    const [input, setInput] = React.useState("")
    const scrollRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
      scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight })
    }, [history])

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      if (!input.trim()) return
      const response = onCommand?.(input) ?? undefined
      setHistory((prev) => [...prev, { command: input, response: response ?? undefined }])
      setInput("")
    }

    return (
      <div
        ref={ref}
        className={cn("flex h-64 flex-col rounded-md bg-zinc-950 p-3 font-mono text-sm text-zinc-100", className)}
      >
        <div ref={scrollRef} className="flex-1 overflow-y-auto">
          {welcomeMessage && <p className="mb-2 text-zinc-400">{welcomeMessage}</p>}
          {history.map((entry, index) => (
            <div key={index}>
              <p>
                <span className="text-emerald-400">{prompt}</span> {entry.command}
              </p>
              {entry.response && <p className="whitespace-pre-wrap text-zinc-300">{entry.response}</p>}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-zinc-800 pt-2">
          <span className="text-emerald-400">{prompt}</span>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoComplete="off"
            spellCheck={false}
            className="flex-1 bg-transparent outline-none placeholder:text-zinc-600"
          />
        </form>
      </div>
    )
  }
)
Terminal.displayName = "Terminal"

export { Terminal }
