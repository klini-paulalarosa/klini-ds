import { cn } from "@/lib/utils"

export interface KliniPortalHeaderProps {
  userName: string
  planLabel?: string
  onAvatarClick?: () => void
  className?: string
}

function getInitials(userName: string): string {
  const parts = userName.trim().split(" ").filter(Boolean)
  if (parts.length === 0) return ""
  if (parts.length === 1) return parts[0][0].toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

/**
 * KliniPortalHeader — cabeçalho padrão dos portais Klini: barra gradiente
 * laranja→teal, saudação "Olá, NOME" + plano opcional, avatar com iniciais.
 *
 * @example
 * <KliniPortalHeader userName="Paula Rosa" planLabel="plano klini start pj" onAvatarClick={openMenu} />
 */
export function KliniPortalHeader({ userName, planLabel, onAvatarClick, className }: KliniPortalHeaderProps) {
  return (
    <header className={cn("bg-background", className)}>
      <div
        aria-hidden
        className="h-1 bg-gradient-to-r from-klini-orange-500 to-klini-teal-500"
      />
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex flex-col">
          <span className="text-sm text-muted-foreground">Olá,</span>
          <span className="text-xl font-bold uppercase leading-tight text-foreground">{userName}</span>
          {planLabel && (
            <span className="mt-0.5 text-xs text-muted-foreground">
              <span className="font-semibold">Logado em:</span> {planLabel}
            </span>
          )}
        </div>
        <button
          type="button"
          onClick={onAvatarClick}
          aria-label={`Menu de ${userName}`}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-input text-sm font-medium text-muted-foreground hover:bg-accent"
        >
          {getInitials(userName)}
        </button>
      </div>
      <div className="h-px bg-border" />
    </header>
  )
}
