import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { KliniPortalHeaderComponent } from '../portal-header/portal-header.component';
import { KliniPortalFooterComponent } from '../portal-footer/portal-footer.component';

/**
 * kln-portal-shell
 *
 * Layout completo dos portais Klini: Header + Conteúdo + Footer.
 *
 * Combina kln-portal-header e kln-portal-footer em torno de um slot
 * de conteúdo livre via ng-content.
 *
 * Uso:
 * ```html
 * <kln-portal-shell
 *   userName="PAULA ROSA"
 *   planLabel="plano klini start pj"
 *   (avatarClick)="openMenu($event)"
 * >
 *   <!-- conteúdo da página -->
 *   <section class="p-4">...</section>
 * </kln-portal-shell>
 * ```
 *
 * Layout gerado:
 * ```
 * ┌─ gradient bar ─────────────────────────────────────────────────┐
 * │ Toolbar: "Olá, NOME" ··············· [avatar]                  │
 * ├─────────────────────────────────────────────────────────────────┤
 * │                                                                  │
 * │                   <ng-content />                                │
 * │                                                                  │
 * ├─────────────────────────────────────────────────────────────────┤
 * │ klini saúde                                      ANS - nº ...   │
 * └──────────────────────────────────────────────────────────────────┘
 * ```
 */
@Component({
  selector: 'kln-portal-shell',
  standalone: true,
  imports: [KliniPortalHeaderComponent, KliniPortalFooterComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="kln-portal-shell">
      <kln-portal-header
        [userName]="userName"
        [planLabel]="planLabel"
        (avatarClick)="avatarClick.emit($event)"
      />

      <main class="kln-portal-shell__content" role="main">
        <ng-content />
      </main>

      <kln-portal-footer [ansNumber]="ansNumber" />
    </div>
  `,
  styles: [`
    :host { display: block; }

    .kln-portal-shell {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      background: var(--klini-surface-page, #FAFAFA);
    }

    .kln-portal-shell__content {
      flex: 1;
      padding: 1.5rem;
      max-width: 1440px;
      width: 100%;
      margin: 0 auto;
      box-sizing: border-box;

      @media (max-width: 768px) {
        padding: 1rem;
      }
    }
  `],
})
export class KliniPortalShellComponent {
  /** Repassado para kln-portal-header */
  @Input({ required: true }) userName = '';

  /** Subtítulo opcional no header (ex: nome do plano) */
  @Input() planLabel = '';

  /** Número de registro ANS no footer */
  @Input() ansNumber = '42.202-9';

  /** Clique no avatar — repassado do header */
  @Output() avatarClick = new EventEmitter<MouseEvent>();
}
