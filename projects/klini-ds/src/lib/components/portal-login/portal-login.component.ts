import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { InputMaskModule } from 'primeng/inputmask';

export interface KliniPortalLoginPayload {
  cpf: string;
  password: string;
}

/**
 * kln-portal-login
 *
 * Tela de login padrão para todos os portais Klini.
 * Suporta os dois perfis:
 *   - CPF (máscara 000.000.000-00) — Portal Beneficiário e Médico
 *   - Matrícula (máscara opcional)  — Portal Corretor
 *
 * Uso:
 * ```html
 * <kln-portal-login
 *   (loginSubmit)="onLogin($event)"
 *   (firstAccessClick)="goToFirstAccess()"
 *   (forgotPasswordClick)="goToForgot()"
 * />
 * ```
 *
 * Exemplo com campo customizado:
 * ```html
 * <kln-portal-login
 *   loginLabel="Matrícula"
 *   loginMask="99999999"
 *   loginPlaceholder="00000000"
 *   (loginSubmit)="onLogin($event)"
 * />
 * ```
 */
@Component({
  selector: 'kln-portal-login',
  standalone: true,
  imports: [FormsModule, CardModule, ButtonModule, PasswordModule, InputMaskModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="kln-portal-login">
      <!-- Logotipo -->
      <div class="kln-portal-login__logo" [attr.aria-label]="logoText">
        <span class="kln-portal-login__logo-klini">klini</span>
        <span class="kln-portal-login__logo-saude">saúde</span>
      </div>

      <!-- Card do formulário -->
      <p-card styleClass="kln-portal-login__card">
        <div class="kln-portal-login__form">

          <!-- Campo CPF / matrícula -->
          <div class="kln-portal-login__field">
            <label class="kln-portal-login__label" for="kln-login-cpf">
              {{ loginLabel }}
            </label>
            <p-inputMask
              inputId="kln-login-cpf"
              [mask]="loginMask"
              [placeholder]="loginPlaceholder"
              [(ngModel)]="cpfValue"
              styleClass="kln-portal-login__input"
              [style]="{ width: '100%' }"
              autocomplete="username"
            />
          </div>

          <!-- Campo senha -->
          <div class="kln-portal-login__field">
            <label class="kln-portal-login__label" for="kln-login-password">
              Senha
            </label>
            <p-password
              inputId="kln-login-password"
              [(ngModel)]="passwordValue"
              [feedback]="false"
              [toggleMask]="true"
              placeholder="Digite sua senha"
              styleClass="kln-portal-login__input"
              [inputStyle]="{ width: '100%' }"
              [style]="{ width: '100%' }"
              autocomplete="current-password"
            />
          </div>

          <!-- Esqueci minha senha -->
          <div class="kln-portal-login__forgot">
            <p-button
              label="Esqueci minha senha"
              variant="text"
              styleClass="kln-portal-login__link"
              (onClick)="forgotPasswordClick.emit()"
            />
          </div>

          <!-- Botão Acessar -->
          <p-button
            label="Acessar"
            [disabled]="!canSubmit()"
            styleClass="kln-portal-login__submit"
            [style]="{ width: '100%' }"
            (onClick)="onSubmit()"
          />

          <!-- Botão Primeiro acesso -->
          @if (showFirstAccess) {
            <p-button
              label="Primeiro acesso"
              variant="outlined"
              styleClass="kln-portal-login__first-access"
              [style]="{ width: '100%' }"
              (onClick)="firstAccessClick.emit()"
            />
          }

        </div>
      </p-card>
    </div>
  `,
  styles: [`
    :host { display: block; }

    .kln-portal-login {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      background: var(--klini-surface-page, #FAFAFA);
      padding: 2rem 1rem;
      gap: 2rem;
    }

    /* Logotipo */
    .kln-portal-login__logo {
      display: flex;
      flex-direction: column;
      align-items: center;
      line-height: 1.1;
    }

    .kln-portal-login__logo-klini {
      font-family: 'Objective', system-ui, -apple-system, sans-serif;
      font-size: 2.25rem;
      font-weight: 700;
      color: var(--klini-color-teal-500, #259591);
      letter-spacing: -0.02em;
    }

    .kln-portal-login__logo-saude {
      font-family: 'Objective', system-ui, -apple-system, sans-serif;
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--klini-color-teal-500, #259591);
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-top: -0.25rem;
    }

    /* Card */
    :host ::ng-deep {
      .kln-portal-login__card {
        width: 100%;
        max-width: 420px;
        border-radius: 8px;
        border: 1px solid var(--klini-border-subtle, #E5E7EB);
        box-shadow: 0px 2px 8px 0px rgba(15, 27, 26, 0.06);

        .p-card-body { padding: 1.75rem; }
        .p-card-content { padding: 0; }
      }
    }

    /* Formulário */
    .kln-portal-login__form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .kln-portal-login__field {
      display: flex;
      flex-direction: column;
      gap: 0.375rem;
    }

    .kln-portal-login__label {
      font-family: 'Objective', system-ui, -apple-system, sans-serif;
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--klini-text-primary, #111827);
    }

    :host ::ng-deep {
      .kln-portal-login__input {
        width: 100%;

        input {
          width: 100% !important;
          border-radius: 6px;
          border-color: var(--klini-border-default, #D1D5DB);

          &:focus {
            border-color: var(--klini-color-teal-500, #259591);
            box-shadow: 0 0 0 2px rgba(37, 149, 145, 0.15);
          }
        }
      }

      /* Alinha o toggle do password */
      .kln-portal-login__input .p-password {
        width: 100%;
        .p-password-input { width: 100%; }
      }
    }

    .kln-portal-login__forgot {
      display: flex;
      justify-content: flex-end;
      margin-top: -0.25rem;
    }

    :host ::ng-deep {
      .kln-portal-login__link.p-button {
        color: var(--klini-color-teal-500, #259591) !important;
        font-size: 0.8125rem;
        font-weight: 600;
        font-family: 'Objective', system-ui, -apple-system, sans-serif;
        padding: 0;
        height: auto;

        &:hover { color: var(--klini-color-teal-700, #1a706d) !important; }
      }

      .kln-portal-login__first-access.p-button {
        border-color: var(--klini-color-teal-500, #259591) !important;
        color: var(--klini-color-teal-500, #259591) !important;
        background: transparent !important;

        &:hover { background: rgba(37, 149, 145, 0.06) !important; }
      }
    }
  `],
})
export class KliniPortalLoginComponent {
  /** Texto exibido como logotipo acima do card (apenas para leitores de tela / aria-label) */
  @Input() logoText = 'klini saúde';

  /** Label do campo de identificação (default: CPF) */
  @Input() loginLabel = 'CPF';

  /** Máscara do campo de identificação */
  @Input() loginMask = '999.999.999-99';

  /** Placeholder do campo de identificação */
  @Input() loginPlaceholder = '___.___.___ -__';

  /** Exibe o botão "Primeiro acesso" */
  @Input() showFirstAccess = true;

  /** Clique em "Acessar" com CPF e senha preenchidos */
  @Output() loginSubmit = new EventEmitter<KliniPortalLoginPayload>();

  /** Clique em "Primeiro acesso" */
  @Output() firstAccessClick = new EventEmitter<void>();

  /** Clique em "Esqueci minha senha" */
  @Output() forgotPasswordClick = new EventEmitter<void>();

  protected cpfValue = '';
  protected passwordValue = '';

  protected canSubmit(): boolean {
    const cpfClean = this.cpfValue.replace(/\D/g, '');
    return cpfClean.length >= 8 && this.passwordValue.length >= 4;
  }

  protected onSubmit(): void {
    if (!this.canSubmit()) return;
    this.loginSubmit.emit({ cpf: this.cpfValue, password: this.passwordValue });
  }
}
