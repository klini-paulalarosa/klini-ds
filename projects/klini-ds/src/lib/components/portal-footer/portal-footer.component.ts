import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';

/**
 * kln-portal-footer
 *
 * Rodapé padrão dos portais Klini.
 *
 * Exibe:
 *   - Logotipo "klini saúde" (texto estilizado) à esquerda
 *   - Número de registro ANS à direita
 *
 * Uso:
 * ```html
 * <kln-portal-footer ansNumber="42.202-9" />
 * ```
 */
@Component({
  selector: 'kln-portal-footer',
  standalone: true,
  imports: [ToolbarModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-toolbar styleClass="kln-portal-footer__toolbar">
      <ng-template pTemplate="start">
        <div class="kln-portal-footer__logo" [attr.aria-label]="'klini saúde'">
          <span class="kln-portal-footer__logo-klini">klini</span>
          <span class="kln-portal-footer__logo-saude">saúde</span>
        </div>
      </ng-template>

      <ng-template pTemplate="end">
        @if (ansNumber) {
          <span class="kln-portal-footer__ans">ANS - nº {{ ansNumber }}</span>
        }
      </ng-template>
    </p-toolbar>
  `,
  styles: [`
    :host { display: block; }

    :host ::ng-deep {
      .kln-portal-footer__toolbar {
        background: #ffffff;
        border: none;
        border-top: 1px solid var(--klini-border-default, #E5E7EB);
        border-radius: 0;
        padding: 0.875rem 1.5rem;
        box-shadow: none;
      }
    }

    .kln-portal-footer__logo {
      display: flex;
      flex-direction: column;
      line-height: 1.1;
    }

    .kln-portal-footer__logo-klini {
      font-family: 'Objective', system-ui, -apple-system, sans-serif;
      font-size: 1rem;
      font-weight: 700;
      color: var(--klini-color-teal-500, #259591);
      letter-spacing: -0.01em;
    }

    .kln-portal-footer__logo-saude {
      font-family: 'Objective', system-ui, -apple-system, sans-serif;
      font-size: 0.625rem;
      font-weight: 600;
      color: var(--klini-color-teal-500, #259591);
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }

    .kln-portal-footer__ans {
      font-family: 'Objective', system-ui, -apple-system, sans-serif;
      font-size: 0.75rem;
      font-weight: 400;
      color: var(--klini-text-muted, #9CA3AF);
      border: 1px solid var(--klini-border-default, #E5E7EB);
      border-radius: 4px;
      padding: 0.25rem 0.625rem;
    }
  `],
})
export class KliniPortalFooterComponent {
  /** Número de registro na ANS. Default: 42.202-9 */
  @Input() ansNumber = '42.202-9';
}
