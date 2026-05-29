import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';

/**
 * kln-portal-header
 *
 * Cabeçalho padrão dos portais Klini (Beneficiário, Médico, Corretor, TI).
 *
 * Features:
 *   - Barra gradiente superior (orange → teal, identidade da marca)
 *   - Saudação "Olá, [NOME]" com subtítulo opcional (ex: plano do beneficiário)
 *   - Botão avatar top-right com iniciais, emite `avatarClick`
 *
 * Uso:
 * ```html
 * <kln-portal-header
 *   userName="PAULA ROSA"
 *   planLabel="plano klini start pj"
 *   (avatarClick)="openProfileMenu($event)"
 * />
 * ```
 */
@Component({
  selector: 'kln-portal-header',
  standalone: true,
  imports: [ToolbarModule, ButtonModule, AvatarModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- Barra gradiente da marca (orange → teal) -->
    <div class="kln-portal-header__gradient-bar" aria-hidden="true"></div>

    <!-- Toolbar PrimeNG como base estrutural -->
    <p-toolbar styleClass="kln-portal-header__toolbar">
      <ng-template pTemplate="start">
        <div class="kln-portal-header__greeting">
          <span class="kln-portal-header__hello">Olá,</span>
          <span class="kln-portal-header__name">{{ userName }}</span>
          @if (planLabel) {
            <span class="kln-portal-header__plan">
              <span class="kln-portal-header__plan-label">Logado em:</span>
              {{ planLabel }}
            </span>
          }
        </div>
      </ng-template>

      <ng-template pTemplate="end">
        <p-button
          [rounded]="true"
          variant="outlined"
          styleClass="kln-portal-header__avatar-btn"
          (onClick)="avatarClick.emit($event)"
          [ariaLabel]="'Menu de ' + userName"
        >
          <p-avatar
            [label]="initials"
            shape="circle"
            styleClass="kln-portal-header__avatar"
          />
        </p-button>
      </ng-template>
    </p-toolbar>

    <!-- Linha separadora inferior -->
    <div class="kln-portal-header__divider" aria-hidden="true"></div>
  `,
  styles: [`
    :host { display: block; }

    .kln-portal-header__gradient-bar {
      height: 4px;
      background: linear-gradient(
        to right,
        var(--kln-color-orange-500, #CD7925) 0%,
        var(--kln-color-teal-500,   #259591) 100%
      );
    }

    :host ::ng-deep {
      .kln-portal-header__toolbar {
        background: #ffffff;
        border: none;
        border-radius: 0;
        padding: 0.75rem 1.5rem;
        box-shadow: none;

        .p-toolbar-start,
        .p-toolbar-end { gap: 0; }
      }
    }

    .kln-portal-header__greeting {
      display: flex;
      flex-direction: column;
      gap: 0;
    }

    .kln-portal-header__hello {
      font-family: 'Objective', system-ui, -apple-system, sans-serif;
      font-size: 0.875rem;
      font-weight: 400;
      color: var(--kln-text-secondary, #4B5563);
      line-height: 1.4;
    }

    .kln-portal-header__name {
      font-family: 'Objective', system-ui, -apple-system, sans-serif;
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--kln-text-primary, #111827);
      line-height: 1.2;
      text-transform: uppercase;
    }

    .kln-portal-header__plan {
      font-family: 'Objective', system-ui, -apple-system, sans-serif;
      font-size: 0.75rem;
      font-weight: 400;
      color: var(--kln-text-muted, #9CA3AF);
      line-height: 1.4;
      margin-top: 0.125rem;
    }

    .kln-portal-header__plan-label {
      font-weight: 600;
      margin-right: 0.25rem;
    }

    :host ::ng-deep {
      .kln-portal-header__avatar-btn {
        background: transparent !important;
        border: 1.5px solid var(--kln-border-default, #E5E7EB) !important;
        border-radius: 50% !important;
        padding: 0 !important;
        width: 2.5rem;
        height: 2.5rem;
        min-width: 2.5rem;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
          background: var(--kln-surface-hover, #F9FAFB) !important;
        }

        .p-button-label { display: none; }
      }

      .kln-portal-header__avatar {
        width: 2.25rem;
        height: 2.25rem;
        background: transparent;
        color: var(--kln-text-secondary, #4B5563);
        font-size: 0.875rem;
        font-family: 'Objective', system-ui, -apple-system, sans-serif;
      }
    }

    .kln-portal-header__divider {
      height: 1px;
      background: var(--kln-border-default, #E5E7EB);
    }
  `],
})
export class KlnPortalHeaderComponent {
  /** Nome completo do usuário (exibido em maiúsculas) */
  @Input({ required: true }) userName = '';

  /** Subtítulo opcional — ex: nome do plano (Portal Beneficiário) */
  @Input() planLabel = '';

  /** Clique no botão de avatar — abrir menu/dropdown de perfil */
  @Output() avatarClick = new EventEmitter<MouseEvent>();

  get initials(): string {
    const parts = this.userName.trim().split(' ').filter(Boolean);
    if (parts.length === 0) return '';
    if (parts.length === 1) return parts[0][0].toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
}
