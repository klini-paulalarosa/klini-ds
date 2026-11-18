import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { KlnPortalHeaderComponent } from '../portal-header/portal-header.component';
import { KlnPortalFooterComponent } from '../portal-footer/portal-footer.component';

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
  @Input({ required: true }) userName = '';

  @Input() planLabel = '';

  @Input() ansNumber = '42.202-9';

  @Output() avatarClick = new EventEmitter<MouseEvent>();
}
