import * as React from "react"
import { Inbox } from "lucide-react"

import { cn } from "@/lib/utils"

export interface KliniEmptyStateProps {
  title?: string
  description?: string
  icon?: React.ReactNode
  action?: React.ReactNode
  className?: string
}

/**
 * KliniEmptyState — estado vazio padrão Klini: ícone circular + título + descrição.
 *
 * @example
 * <KliniEmptyState title="Nenhuma requisição encontrada" description="Tente ajustar os filtros." />
 */
export function KliniEmptyState({
  title = "Nenhum resultado encontrado",
  description,
  icon,
  action,
  className,
}: KliniEmptyStateProps) {
  return (
    <div className={cn("flex flex-col items-center gap-3 py-12 text-center", className)}>
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-muted text-muted-foreground">
        {icon ?? <Inbox className="h-6 w-6" />}
      </div>
      <p className="text-sm font-semibold">{title}</p>
      {description && <p className="max-w-xs text-sm text-muted-foreground">{description}</p>}
      {action && <div className="mt-2">{action}</div>}
    </div>
  )
}
