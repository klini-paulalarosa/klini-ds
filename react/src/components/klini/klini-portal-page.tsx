import { cn } from "@/lib/utils"
import { KliniPortalHeader } from "./klini-portal-header"
import { KliniPortalFooter } from "./klini-portal-footer"

export interface KliniPortalPageProps {
  userName: string
  planLabel?: string
  ansNumber?: string
  onAvatarClick?: () => void
  children: React.ReactNode
  className?: string
}

/**
 * KliniPortalPage — shell completo de página de portal: header com saudação
 * e avatar + conteúdo central + footer com nº ANS. Equivalente ao antigo
 * `kln-portal-shell` do Angular DS (renomeado para não colidir com
 * `KliniPortalShell`, o shell de sidebar admin já existente em `blocks/`).
 *
 * @example
 * <KliniPortalPage userName="Paula Rosa" planLabel="plano klini start pj">
 *   <section>Conteúdo da página</section>
 * </KliniPortalPage>
 */
export function KliniPortalPage({
  userName,
  planLabel,
  ansNumber,
  onAvatarClick,
  children,
  className,
}: KliniPortalPageProps) {
  return (
    <div className={cn("flex min-h-screen flex-col bg-muted/30", className)}>
      <KliniPortalHeader userName={userName} planLabel={planLabel} onAvatarClick={onAvatarClick} />
      <main role="main" className="mx-auto w-full max-w-[1440px] flex-1 p-6">
        {children}
      </main>
      <KliniPortalFooter ansNumber={ansNumber} />
    </div>
  )
}
