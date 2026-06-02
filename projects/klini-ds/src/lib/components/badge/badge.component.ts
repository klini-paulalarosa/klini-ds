import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { BadgeModule } from 'primeng/badge';

export type KlnBadgeSeverity =
  | 'primary' | 'secondary' | 'success' | 'warn' | 'danger' | 'info' | 'contrast' | 'help';

export type KlnBadgeSize = 'small' | 'large' | 'xlarge';

/**
 * Badge de contagem ou notificação. Exibe um valor numérico ou string
 * em destaque com suporte a severidades semânticas do DS.
 * Estilização 100% via KlnPrime theme preset.
 *
 * @atomicLevel atom
 * @selector kln-badge
 * @primeng p-badge
 * @example
 * <kln-badge value="5" severity="danger" />
 * <kln-badge value="Novo" severity="success" size="small" />
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
