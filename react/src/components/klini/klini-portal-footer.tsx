import { cn } from "@/lib/utils"

export interface KliniPortalFooterProps {
  ansNumber?: string
  className?: string
}

/**
 * KliniPortalFooter — rodapé padrão dos portais Klini: logo à esquerda, nº ANS à direita.
 *
 * @example
 * <KliniPortalFooter ansNumber="42.202-9" />
 */
export function KliniPortalFooter({ ansNumber = "42.202-9", className }: KliniPortalFooterProps) {
  return (
    <footer className={cn("flex items-center justify-between border-t bg-background px-6 py-3.5", className)}>
      <div className="flex flex-col leading-tight" aria-label="klini saúde">
        <span className="text-base font-bold tracking-tight text-klini-teal-500">klini</span>
        <span className="text-[10px] font-semibold uppercase tracking-wider text-klini-teal-500">saúde</span>
      </div>
      {ansNumber && (
        <span className="rounded border px-2.5 py-1 text-xs text-muted-foreground">ANS - nº {ansNumber}</span>
      )}
    </footer>
  )
}
