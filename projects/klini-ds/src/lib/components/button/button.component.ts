import {
  Component, Input, Output, EventEmitter,
  ChangeDetectionStrategy, booleanAttribute,
} from '@angular/core';
import { ButtonModule } from 'primeng/button';

export type KlnButtonSeverity = 'primary' | 'secondary' | 'success' | 'warn' | 'danger' | 'info' | 'contrast';
export type KlnButtonSize     = 'small' | 'large' | undefined;
export type KlnButtonVariant  = 'outlined' | 'text' | undefined;

@Component({
  selector: 'kln-button',
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
  @Input() severity: KlnButtonSeverity  = 'primary';
  @Input() size: KlnButtonSize          = undefined;
  @Input() variant: KlnButtonVariant    = undefined;
  @Input() styleClass = '';
  @Input({ transform: booleanAttribute }) disabled = false;
  @Input({ transform: booleanAttribute }) loading  = false;

  @Output() clicked = new EventEmitter<MouseEvent>();
}
