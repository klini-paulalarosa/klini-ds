import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { BadgeModule } from 'primeng/badge';

export type KlnBadgeSeverity =
  | 'primary' | 'secondary' | 'success' | 'warn' | 'danger' | 'info' | 'contrast' | 'help';

export type KlnBadgeSize = 'small' | 'large' | 'xlarge';

/**
 * Wrapper sobre p-badge do PrimeNG.
 * Estilização 100% via KlnPrime theme preset.
 */
@Component({
  selector: 'kln-badge',
  standalone: true,
  imports: [BadgeModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-badge
      [value]="value"
      [severity]="severity"
      [size]="size"
      [styleClass]="styleClass"
    />
  `,
})
export class BadgeComponent {
  @Input({ required: true }) value: string | number = '';
  @Input() severity: KlnBadgeSeverity = 'primary';
  @Input() size: KlnBadgeSize         = 'large';
  @Input() styleClass = '';
}
