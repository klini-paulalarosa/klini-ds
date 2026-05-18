import {
  Component, Input, Output, EventEmitter,
  ChangeDetectionStrategy, booleanAttribute,
} from '@angular/core';
import { ButtonModule } from 'primeng/button';

export type KliniButtonSeverity = 'primary' | 'secondary' | 'success' | 'warn' | 'danger' | 'info' | 'contrast';
export type KliniButtonSize     = 'small' | 'large' | undefined;
export type KliniButtonVariant  = 'outlined' | 'text' | undefined;

/**
 * Wrapper sobre p-button do PrimeNG.
 * O visual é 100% controlado pelo KliniPrime theme preset.
 * Este componente apenas pré-configura defaults Klini e expõe a API tipada.
 */
@Component({
  selector: 'klini-button',
  standalone: true,
  imports: [ButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-button
      [label]="label"
      [icon]="icon"
      [iconPos]="iconPos"
      [severity]="severity"
      [size]="size"
      [variant]="variant"
      [disabled]="disabled"
      [loading]="loading"
      [type]="type"
      [styleClass]="styleClass"
      (onClick)="clicked.emit($event)"
    />
  `,
})
export class ButtonComponent {
  @Input() label     = '';
  @Input() icon      = '';
  @Input() iconPos: 'left' | 'right' | 'top' | 'bottom' = 'left';
  @Input() type      = 'button';
  @Input() severity: KliniButtonSeverity  = 'primary';
  @Input() size: KliniButtonSize          = undefined;
  @Input() variant: KliniButtonVariant    = undefined;
  @Input() styleClass = '';
  @Input({ transform: booleanAttribute }) disabled = false;
  @Input({ transform: booleanAttribute }) loading  = false;

  @Output() clicked = new EventEmitter<MouseEvent>();
}
