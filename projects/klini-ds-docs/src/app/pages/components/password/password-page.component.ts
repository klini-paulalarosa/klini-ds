import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { KlnPasswordComponent } from '@klini-saude/ds';
import { FormsModule } from '@angular/forms';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-password-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnPasswordComponent, FormsModule, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">Password</h1>
        <span class="badge badge--version">kln-password</span>
      </div>
      <p class="docs-page-description">
        Campo de senha com indicador de força e toggle de visibilidade.
        Usado em login de portal, troca de senha e primeiro acesso.
        Wrapper sobre <code class="font-mono">p-password</code> do PrimeNG.
      </p>

      <!-- Login básico -->
      <div class="docs-section">
        <h2>Login básico</h2>
        <p>
          Sem medidor de força — ideal para tela de login onde o campo é apenas de autenticação,
          não de criação de senha.
        </p>
        <app-component-preview [code]="loginCode">
          <div preview style="width:100%;max-width:320px;display:flex;flex-direction:column;gap:16px">
            <div>
              <label style="display:block;font-size:13px;font-weight:600;margin-bottom:6px;color:var(--docs-text)">CPF</label>
              <input
                type="text"
                style="width:100%;padding:9px 12px;border:1.5px solid var(--docs-border);border-radius:6px;font-size:14px;font-family:inherit;color:var(--docs-text);outline:none"
                placeholder="000.000.000-00"
                readonly
              />
            </div>
            <div>
              <label style="display:block;font-size:13px;font-weight:600;margin-bottom:6px;color:var(--docs-text)">Senha</label>
              <kln-password
                [(ngModel)]="senhaLogin"
                [feedback]="false"
                [toggleMask]="true"
                placeholder="Digite sua senha"
                styleClass="w-full"
              />
            </div>
          </div>
        </app-component-preview>
      </div>

      <!-- Com medidor de força (criação / troca de senha) -->
      <div class="docs-section">
        <h2>Com medidor de força</h2>
        <p>
          Use <code class="font-mono">[feedback]="true"</code> na tela de criação ou alteração de senha.
          O medidor usa os tokens de feedback do DS (teal = forte, coral = fraca).
        </p>
        <app-component-preview [code]="feedbackCode">
          <div preview style="width:100%;max-width:320px;display:flex;flex-direction:column;gap:16px">
            <div>
              <label style="display:block;font-size:13px;font-weight:600;margin-bottom:6px;color:var(--docs-text)">Nova senha</label>
              <kln-password
                [(ngModel)]="novaSenha"
                [feedback]="true"
                [toggleMask]="true"
                placeholder="Mínimo 8 caracteres"
                styleClass="w-full"
                promptLabel="Digite uma senha"
                weakLabel="Senha fraca"
                mediumLabel="Senha razoável"
                strongLabel="Senha forte"
              />
            </div>
            <div>
              <label style="display:block;font-size:13px;font-weight:600;margin-bottom:6px;color:var(--docs-text)">Confirmar senha</label>
              <kln-password
                [(ngModel)]="confirmaSenha"
                [feedback]="false"
                [toggleMask]="true"
                placeholder="Repita a nova senha"
                styleClass="w-full"
              />
            </div>
          </div>
        </app-component-preview>
      </div>

      <!-- Estado de erro -->
      <div class="docs-section">
        <h2>Estado de erro</h2>
        <p>Combine <code class="font-mono">[invalid]="true"</code> com uma mensagem de erro abaixo do campo.</p>
        <app-component-preview [code]="errorCode">
          <div preview style="width:100%;max-width:320px">
            <label style="display:block;font-size:13px;font-weight:600;margin-bottom:6px;color:var(--docs-text)">Senha atual</label>
            <kln-password
              [(ngModel)]="senhaErro"
              [feedback]="false"
              [toggleMask]="true"
              placeholder="Senha atual"
              errorMessage="Senha incorreta. Verifique e tente novamente."
              styleClass="w-full"
            />
          </div>
        </app-component-preview>
      </div>

      <!-- Regras de senha -->
      <div class="docs-section">
        <h2>Com lista de requisitos</h2>
        <p>Exiba os critérios de segurança ao lado — boa prática em cadastro e primeiro acesso.</p>
        <app-component-preview [code]="rulesCode">
          <div preview style="display:flex;flex-wrap:wrap;gap:24px;width:100%">
            <div style="flex:1;min-width:240px">
              <label style="display:block;font-size:13px;font-weight:600;margin-bottom:6px;color:var(--docs-text)">Criar senha de acesso</label>
              <kln-password
                [(ngModel)]="senhaRules"
                [feedback]="true"
                [toggleMask]="true"
                placeholder="Sua nova senha"
                styleClass="w-full"
              />
            </div>
            <div style="flex:1;min-width:200px;padding:14px;background:var(--docs-sidebar-bg);border-radius:8px;border:1px solid var(--docs-border)">
              <p style="font-size:12px;font-weight:700;color:var(--docs-text);margin-bottom:10px">Requisitos de senha</p>
              @for (rule of passwordRules; track rule.text) {
                <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
                  <i [class]="isRuleMet(rule.test, senhaRules) ? 'pi pi-check-circle' : 'pi pi-circle'"
                     [style.color]="isRuleMet(rule.test, senhaRules) ? '#259591' : '#9BA3A2'"
                     style="font-size:13px;flex-shrink:0"></i>
                  <span style="font-size:12px;color:var(--docs-text-muted)">{{ rule.text }}</span>
                </div>
              }
            </div>
          </div>
        </app-component-preview>
      </div>

      <!-- Props -->
      <div class="docs-section">
        <h2>Props</h2>
        <app-props-table [props]="props" />
      </div>
    </div>
  `,
})
export class PasswordPageComponent {
  senhaLogin   = '';
  novaSenha    = '';
  confirmaSenha = '';
  senhaErro    = 'senhaerrada';
  senhaRules   = '';

  passwordRules = [
    { text: 'Mínimo de 8 caracteres',         test: (v: string) => v.length >= 8 },
    { text: 'Pelo menos uma letra maiúscula',  test: (v: string) => /[A-Z]/.test(v) },
    { text: 'Pelo menos um número',            test: (v: string) => /\d/.test(v) },
    { text: 'Pelo menos um caractere especial', test: (v: string) => /[!@#$%^&*]/.test(v) },
  ];

  isRuleMet(test: (v: string) => boolean, value: string): boolean {
    return !!value && test(value);
  }

  loginCode = `import { KlnPasswordComponent } from '@klini-saude/ds';

// Login — sem medidor de força
<kln-password
  [(ngModel)]="senha"
  [feedback]="false"
  [toggleMask]="true"
  placeholder="Digite sua senha"
/>`;

  feedbackCode = `// Criação / troca de senha — com medidor
<kln-password
  [(ngModel)]="novaSenha"
  [feedback]="true"
  [toggleMask]="true"
  placeholder="Mínimo 8 caracteres"
  promptLabel="Digite uma senha"
  weakLabel="Senha fraca"
  mediumLabel="Senha razoável"
  strongLabel="Senha forte"
/>`;

  errorCode = `// errorMessage ativa o estado de erro (borda coral + mensagem abaixo)
<kln-password
  [(ngModel)]="senha"
  [feedback]="false"
  [toggleMask]="true"
  placeholder="Senha atual"
  errorMessage="Senha incorreta. Verifique e tente novamente."
/>`;

  rulesCode = `<kln-password
  [(ngModel)]="senha"
  [feedback]="true"
  [toggleMask]="true"
/>`;

  props: PropDef[] = [
    { name: 'feedback',      type: 'boolean', default: 'true',  description: 'Exibe o painel com medidor de força da senha.' },
    { name: 'toggleMask',    type: 'boolean', default: 'false', description: 'Exibe botão de olho para mostrar/ocultar a senha.' },
    { name: 'placeholder',   type: 'string',  default: "''",    description: 'Texto placeholder do campo.' },
    { name: 'invalid',       type: 'boolean', default: 'false', description: 'Estado de erro — aplica borda coral.' },
    { name: 'disabled',      type: 'boolean', default: 'false', description: 'Desabilita o campo.' },
    { name: 'promptLabel',   type: 'string',  default: 'Please enter a password', description: 'Texto inicial do painel de força.' },
    { name: 'weakLabel',     type: 'string',  default: 'Weak',   description: 'Label para senha fraca.' },
    { name: 'mediumLabel',   type: 'string',  default: 'Medium', description: 'Label para senha média.' },
    { name: 'strongLabel',   type: 'string',  default: 'Strong', description: 'Label para senha forte.' },
    { name: 'styleClass',    type: 'string',  default: "''",     description: 'Classes CSS adicionais no container.' },
  ];
}
