import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { OverlayBadge } from 'primeng/overlaybadge';

@Component({
  selector: 'kln-overlay-badge',
  standalone: true,
  imports: [OverlayBadge],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-overlaybadge
      [value]="value"
      [severity]="severity"
      [styleClass]="styleClass"
    >
      <ng-content />
    </p-overlaybadge>
  `,
})
export class KliniOverlayBadgeComponent {
  @Input() value = '';
  @Input() severity: 'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast' | null = null;
  @Input() styleClass = '';
}
