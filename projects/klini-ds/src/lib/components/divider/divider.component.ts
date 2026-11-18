import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { DividerModule } from 'primeng/divider';

export type KlnDividerType   = 'solid' | 'dashed' | 'dotted';
export type KlnDividerLayout = 'horizontal' | 'vertical';
export type KlnDividerAlign  = 'left' | 'center' | 'right' | 'top' | 'bottom';

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
      font-size: var(--kln-font-size-body-sm);
      color: var(--kln-text-muted);
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      background: var(--kln-surface-raised);
      padding: 0 var(--kln-space-3);
    }
  `],
})
export class DividerComponent {
  @Input() layout: KlnDividerLayout = 'horizontal';
  @Input() type: KlnDividerType     = 'solid';
  @Input() align: KlnDividerAlign   = 'center';
  @Input() styleClass = '';

  readonly hasContent = true;
}
