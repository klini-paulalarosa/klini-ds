import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { TagModule } from 'primeng/tag';

export type KliniTagSeverity = 'primary' | 'secondary' | 'success' | 'warn' | 'danger' | 'info' | 'contrast';

/**
 * Wrapper sobre p-tag do PrimeNG.
 * Estilização 100% via KliniPrime theme preset.
 */
@Component({
  selector: 'klini-tag',
  standalone: true,
  imports: [TagModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-tag
      [value]="value"
      [severity]="severity"
      [icon]="icon"
      [rounded]="rounded"
      [styleClass]="styleClass"
    />
  `,
})
export class TagComponent {
  @Input({ required: true }) value    = '';
  @Input() severity: KliniTagSeverity = 'primary';
  @Input() icon       = '';
  @Input() rounded    = false;
  @Input() styleClass = '';
}
