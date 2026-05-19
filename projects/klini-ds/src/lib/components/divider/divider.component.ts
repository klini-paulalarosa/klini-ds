import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { DividerModule } from 'primeng/divider';

export type KliniDividerType   = 'solid' | 'dashed' | 'dotted';
export type KliniDividerLayout = 'horizontal' | 'vertical';
export type KliniDividerAlign  = 'left' | 'center' | 'right' | 'top' | 'bottom';

/**
 * Wrapper sobre p-divider do PrimeNG.
 * Separadores — solid / dashed / dotted — horizontais ou verticais.
 * Estilização 100% via KliniPrime theme preset.
 *
 * Uso básico:
 *   <klini-divider />
 *   <klini-divider type="dashed" />
 *   <klini-divider align="center">ou</klini-divider>
 *   <klini-divider layout="vertical" />
 */
@Component({
  selector: 'kln-divider',
  standalone: true,
  imports: [DividerModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-divider
      [layout]="layout"
      [type]="type"
      [align]="hasContent ? align : undefined"
      [styleClass]="styleClass"
    >
      <ng-content />
    </p-divider>
  `,
  styles: [`
    :host { display: block; }
    :host ::ng-deep .p-divider .p-divider-content {
      font-size: var(--klini-font-size-body-sm);
      color: var(--klini-text-muted);
      font-family: 'Plus Jakarta Sans', sans-serif;
      background: var(--klini-surface-base);
      padding: 0 var(--klini-space-3);
    }
  `],
})
export class DividerComponent {
  @Input() layout: KliniDividerLayout = 'horizontal';
  @Input() type: KliniDividerType     = 'solid';
  @Input() align: KliniDividerAlign   = 'center';
  @Input() styleClass = '';

  /** @internal — detecta se há conteúdo projetado para habilitar o align */
  readonly hasContent = true;
}
