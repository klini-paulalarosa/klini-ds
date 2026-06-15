import * as React from 'react'
import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface KliniAuthShellLogo {
  text: string
  subtext?: string
  src?: string
  icon?: LucideIcon
}

export interface KliniAuthShellProps {
  logo?: KliniAuthShellLogo
  title: string
  description?: string
  /** Conteúdo do painel lateral esquerdo (marca, benefícios, etc.) */
  sideContent?: React.ReactNode
  /** Formulário ou conteúdo do lado direito */
  children: React.ReactNode
  className?: string
}

/**
 * KliniAuthShell — layout de autenticação split-screen.
 *
 * Layout: painel de marca (esquerdo, oculto em mobile) + formulário (direito).
 * Ideal para login, cadastro, recuperação de senha, etc.
 *
 * @example
 * <KliniAuthShell
 *   logo={{ text: 'Klini Saúde', subtext: 'Portal do Beneficiário' }}
 *   title="Entrar"
 *   description="Digite seu CPF e senha para acessar o portal."
 *   sideContent={<KliniAuthBrandPanel />}
 * >
 *   <LoginForm onSubmit={handleLogin} />
 * </KliniAuthShell>
 */
export function KliniAuthShell({
  logo,
  title,
  description,
  sideContent,
  children,
  className,
}: KliniAuthShellProps) {
  return (
    <div className={cn('min-h-svh', className)}>
      <div className="flex min-h-svh flex-col lg:grid lg:grid-cols-2">
        {/* Painel de marca — visível apenas em lg+ */}
        <div className="relative hidden lg:flex lg:flex-col lg:justify-between bg-primary/5 p-10">
          {/* Logo */}
          <div className="flex items-center gap-3">
            {logo?.src ? (
              <img src={logo.src} alt={logo.text} className="h-9 w-auto" />
            ) : logo?.icon ? (
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <logo.icon className="h-5 w-5" />
              </div>
            ) : (
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground text-base font-bold">
                {(logo?.text ?? 'K')[0]}
              </div>
            )}
            <div className="grid leading-tight">
              <span className="text-sm font-semibold text-foreground">{logo?.text ?? 'Klini Saúde'}</span>
              {logo?.subtext && (
                <span className="text-xs text-muted-foreground">{logo.subtext}</span>
              )}
            </div>
          </div>

          {/* Conteúdo lateral personalizado */}
          {sideContent && (
            <div className="flex flex-1 items-center justify-center py-12">
              {sideContent}
            </div>
          )}

          {/* Rodapé do painel */}
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Klini Saúde. Todos os direitos reservados.
          </p>
        </div>

        {/* Painel do formulário */}
        <div className="flex flex-col items-center justify-center px-6 py-12 sm:px-10 lg:px-16">
          {/* Logo mobile */}
          <div className="mb-8 flex items-center gap-3 lg:hidden">
            {logo?.src ? (
              <img src={logo.src} alt={logo.text} className="h-8 w-auto" />
            ) : (
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-bold">
                {(logo?.text ?? 'K')[0]}
              </div>
            )}
            <span className="text-sm font-semibold">{logo?.text ?? 'Klini Saúde'}</span>
          </div>

          <div className="w-full max-w-sm space-y-6">
            <div className="space-y-1.5 text-center">
              <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
              {description && (
                <p className="text-sm text-muted-foreground">{description}</p>
              )}
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
