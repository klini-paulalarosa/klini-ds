import * as React from "react"

import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { InputMask } from "@/components/ui/input-mask"
import { Password } from "@/components/ui/password"

export interface KliniPortalLoginPayload {
  cpf: string
  password: string
}

export interface KliniPortalLoginProps {
  logoText?: string
  loginLabel?: string
  loginMask?: string
  loginPlaceholder?: string
  showFirstAccess?: boolean
  onLoginSubmit?: (payload: KliniPortalLoginPayload) => void
  onFirstAccessClick?: () => void
  onForgotPasswordClick?: () => void
  className?: string
}

/**
 * KliniPortalLogin — tela de login padrão dos portais Klini: logo, campo
 * de identificação (CPF/matrícula, com máscara), senha, "esqueci minha
 * senha" e "primeiro acesso" opcional.
 *
 * @example
 * <KliniPortalLogin onLoginSubmit={(v) => login(v)} onForgotPasswordClick={() => nav('/recuperar')} />
 */
export function KliniPortalLogin({
  logoText = "klini saúde",
  loginLabel = "CPF",
  loginMask = "999.999.999-99",
  loginPlaceholder = "___.___.___ -__",
  showFirstAccess = true,
  onLoginSubmit,
  onFirstAccessClick,
  onForgotPasswordClick,
  className,
}: KliniPortalLoginProps) {
  const [cpf, setCpf] = React.useState("")
  const [password, setPassword] = React.useState("")

  const canSubmit = cpf.replace(/\D/g, "").length >= 8 && password.length >= 4

  const handleSubmit = () => {
    if (!canSubmit) return
    onLoginSubmit?.({ cpf, password })
  }

  return (
    <div
      className={cn(
        "flex min-h-screen flex-col items-center justify-center gap-8 bg-muted/30 px-4 py-8",
        className
      )}
    >
      <div className="flex flex-col items-center leading-none" aria-label={logoText}>
        <span className="text-4xl font-bold tracking-tight text-klini-teal-500">klini</span>
        <span className="-mt-1 text-xs font-semibold uppercase tracking-widest text-klini-teal-500">saúde</span>
      </div>

      <Card className="w-full max-w-[420px] shadow-sm">
        <CardContent className="flex flex-col gap-4 p-7">
          <InputMask
            id="klini-login-cpf"
            label={loginLabel}
            mask={loginMask}
            placeholder={loginPlaceholder}
            value={cpf}
            onValueChange={setCpf}
          />
          <Password id="klini-login-password" label="Senha" placeholder="Digite sua senha" value={password} onValueChange={setPassword} />

          <div className="-mt-1 flex justify-end">
            <button
              type="button"
              onClick={onForgotPasswordClick}
              className="text-[13px] font-semibold text-klini-teal-500 hover:text-klini-teal-700"
            >
              Esqueci minha senha
            </button>
          </div>

          <Button className="w-full" disabled={!canSubmit} onClick={handleSubmit}>
            Acessar
          </Button>

          {showFirstAccess && (
            <Button
              variant="outline"
              className="w-full border-klini-teal-500 text-klini-teal-500 hover:bg-klini-teal-50"
              onClick={onFirstAccessClick}
            >
              Primeiro acesso
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
