import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

export type BadgeSeverity = 'primary' | 'secondary' | 'success' | 'warn' | 'danger' | 'info';

@Component({
  selector: 'klini-badge',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span [class]="'klini-badge klini-badge--' + severity">
      {{ value }}
    </span>
  `,
  styles: [`
    .klini-badge {
      display: inline-flex; align-items: center; justify-content: center;
      min-width: 20px; height: 20px; padding: 0 var(--klini-space-1);
      border-radius: var(--klini-radius-pill);
      font-size: var(--klini-font-size-caption); font-weight: 700;
      font-family: 'Plus Jakarta Sans', sans-serif; line-height: 1;

      &--primary  { background: var(--klini-action-primary);        color: var(--klini-color-white); }
      &--secondary { background: var(--klini-color-ink-300);        color: var(--klini-text-primary); }
      &--success  { background: var(--klini-feedback-success-fg);   color: var(--klini-color-white); }
      &--warn     { background: var(--klini-feedback-warning-fg);   color: var(--klini-color-white); }
      &--danger   { background: var(--klini-action-danger);         color: var(--klini-color-white); }
      &--info     { background: var(--klini-feedback-info-fg);      color: var(--klini-color-white); }
    }
  `],
})
export class BadgeComponent {
  @Input({ required: true }) value: string | number = '';
  @Input() severity: BadgeSeverity = 'primary';
}
