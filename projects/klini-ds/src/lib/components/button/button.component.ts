/**
 * kln-button
 *
 * Diretiva companion (import de '@klini-saude/ds'):
 *
 * pRipple — adiciona efeito ripple no click
 *   <kln-button label="Salvar" pRipple />
 *   Requer que RippleModule esteja importado (já incluso em KlnDsModule).
 *
 * pAnimateOnScroll — anima o botão ao entrar no viewport
 *   <kln-button label="CTA" pAnimateOnScroll enterClass="fadein" />
 */
import {
  Component, Input, Output, EventEmitter,
  ChangeDetectionStrategy, booleanAttribute,
} from '@angular/core';
import { ButtonModule } from 'primeng/button';

export type KlnButtonSeverity = 'primary' | 'secondary' | 'success' | 'warn' | 'danger' | 'info' | 'contrast';
export type KlnButtonSize     = 'small' | 'large' | undefined;
export type KlnButtonVariant  = 'outlined' | 'text' | undefined;

/**
 * Botão de ação principal do Klini DS. Wrapper tipado sobre p-button do PrimeNG
 * com defaults da marca (severity, size, variant) e suporte a loading state.
 * O visual é 100% controlado pelo KlnPrime theme preset.
 *
 * @atomicLevel atom
 * @selector kln-button
 * @primeng p-button
 * @example
 * <kln-button label="Salvar" severity="primary" />
 * <kln-button label="Cancelar" severity="secondary" variant="outlined" />
 * <kln-button label="Aguarde" [loading]="true" />
 */
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
