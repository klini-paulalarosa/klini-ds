import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { TagModule } from 'primeng/tag';

export type KliniTagSeverity =
  | 'primary' | 'secondary' | 'success' | 'warn' | 'danger' | 'info' | 'contrast';

type PrimeTagSeverity = 'secondary' | 'success' | 'info' | 'warn' | 'danger' | 'contrast' | undefined;

/**
 * Wrapper sobre p-tag do PrimeNG.
 * Estilização 100% via KliniPrime theme preset.
 * PrimeNG Tag não tem severity 'primary' — undefined usa o estilo padrão (primary visual).
 */
@Component({
  selector: 'klini-tag',
  standalone: true,
  imports: [TagModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-tag
      [value]="value"
      [severity]="primeSeverity"
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

  get primeSeverity(): PrimeTagSeverity {
    return this.severity === 'primary' ? undefined : (this.severity as PrimeTagSeverity);
  }
}
