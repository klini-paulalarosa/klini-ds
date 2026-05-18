import {
  Component, Input, Output, EventEmitter,
  ChangeDetectionStrategy, booleanAttribute,
} from '@angular/core';
import { CommonModule } from '@angular/common';

export type ButtonSeverity = 'primary' | 'secondary' | 'success' | 'warn' | 'danger';
export type ButtonSize      = 'sm' | 'md' | 'lg';
export type ButtonVariant   = 'filled' | 'outlined' | 'text';

@Component({
  selector: 'klini-button',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      [type]="type"
      [disabled]="disabled || loading"
      [class]="hostClass"
      (click)="clicked.emit($event)"
    >
      <i *ngIf="loading" class="pi pi-spinner pi-spin klini-btn__icon"></i>
      <i *ngIf="icon && !loading" [class]="'pi ' + icon + ' klini-btn__icon'"></i>
      <span *ngIf="label" class="klini-btn__label">{{ label }}</span>
      <ng-content />
    </button>
  `,
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() label     = '';
  @Input() icon      = '';
  @Input() type      = 'button';
  @Input() severity: ButtonSeverity = 'primary';
  @Input() size: ButtonSize         = 'md';
  @Input() variant: ButtonVariant   = 'filled';
  @Input({ transform: booleanAttribute }) disabled = false;
  @Input({ transform: booleanAttribute }) loading  = false;
  @Input({ transform: booleanAttribute }) fullWidth = false;

  @Output() clicked = new EventEmitter<MouseEvent>();

  get hostClass(): string {
    return [
      'klini-btn',
      `klini-btn--${this.severity}`,
      `klini-btn--${this.size}`,
      `klini-btn--${this.variant}`,
      this.fullWidth ? 'klini-btn--full' : '',
      this.disabled  ? 'klini-btn--disabled' : '',
      this.loading   ? 'klini-btn--loading' : '',
    ].filter(Boolean).join(' ');
  }
}
