import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { KlnPortalHeaderComponent } from '../portal-header/portal-header.component';
import { KlnPortalFooterComponent } from '../portal-footer/portal-footer.component';

/**
 * Template de layout completo para os portais Klini. Monta a estrutura
 * full-page com flexbox vertical: KlnPortalHeader no topo, `<ng-content>`
 * no centro (projeção livre do conteúdo da página) e KlnPortalFooter
 * no rodapé. Ocupa `min-height: 100vh` com fundo `--kln-surface-page`.
 *
 * @atomicLevel template
 * @selector kln-portal-shell
 * @composedOf KlnPortalHeader, ng-content (projeção da página), KlnPortalFooter
 * @example
 * <kln-portal-shell
 *   userName="PAULA ROSA"
 *   planLabel="plano klini start pj"
 *   (avatarClick)="openMenu($event)"
 * >
 *   <section class="p-4">Conteúdo da página</section>
 * </kln-portal-shell>
 */
@Component({
  selector: 'kln-portal-shell',
  standalone: true,
  imports: [KlnPortalHeaderComponent, KlnPortalFooterComponent],
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
      background: var(--kln-surface-page, #FAFAFA);
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
export class KlnPortalShellComponent {
  /** Repassado para kln-portal-header */
  @Input({ required: true }) userName = '';

  /** Subtítulo opcional no header (ex: nome do plano) */
  @Input() planLabel = '';

  /** Número de registro ANS no footer */
  @Input() ansNumber = '42.202-9';

  /** Clique no avatar — repassado do header */
  @Output() avatarClick = new EventEmitter<MouseEvent>();
}
