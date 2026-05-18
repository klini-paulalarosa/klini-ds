import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { BadgeModule } from 'primeng/badge';

export type KliniBadgeSeverity = 'primary' | 'secondary' | 'success' | 'warn' | 'danger' | 'info' | 'contrast';

/**
 * Wrapper sobre p-badge do PrimeNG.
 * Estilização 100% via KliniPrime theme preset.
 */
@Component({
  selector: 'klini-badge',
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
  @Input() severity: KliniBadgeSeverity = 'primary';
  @Input() size: 'large' | 'xlarge' | undefined     = undefined;
  @Input() styleClass = '';
}
