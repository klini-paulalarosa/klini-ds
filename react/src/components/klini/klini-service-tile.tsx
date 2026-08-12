import * as React from "react"

import { cn } from "@/lib/utils"

export interface KliniServiceTileProps {
  icon: React.ReactNode
  label: string
  disabled?: boolean
  onTileClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  className?: string
}

/**
 * KliniServiceTile — atalho de serviço em grade (usado nas telas iniciais dos portais).
 *
 * @example
 * <KliniServiceTile icon={<Stethoscope />} label="Agendar consulta" onTileClick={() => nav('/agendar')} />
 */
export function KliniServiceTile({ icon, label, disabled = false, onTileClick, className }: KliniServiceTileProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onTileClick}
      className={cn(
        "flex flex-col items-center gap-2 rounded-xl border bg-card p-4 text-center transition-colors hover:bg-accent disabled:pointer-events-none disabled:opacity-50",
        className
      )}
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
        {icon}
      </span>
      <span className="text-sm font-medium">{label}</span>
    </button>
  )
}
