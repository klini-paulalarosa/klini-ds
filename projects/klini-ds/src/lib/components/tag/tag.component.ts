import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

export type TagSeverity = 'primary' | 'secondary' | 'success' | 'warn' | 'danger' | 'info';

@Component({
  selector: 'klini-tag',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span [class]="'klini-tag klini-tag--' + severity">
      <i *ngIf="icon" [class]="'pi ' + icon"></i>
      <span>{{ value }}</span>
    </span>
  `,
  styles: [`
    .klini-tag {
      display: inline-flex; align-items: center; gap: var(--klini-space-1);
      padding: 2px var(--klini-space-2); border-radius: var(--klini-radius-sm);
      font-size: var(--klini-font-size-caption); font-weight: 600;
      font-family: 'Plus Jakarta Sans', sans-serif; text-transform: uppercase;
      letter-spacing: 0.04em;

      &--primary  { background: var(--klini-surface-brand-soft);   color: var(--klini-text-brand); }
      &--secondary { background: var(--klini-surface-sunken);      color: var(--klini-text-secondary); }
      &--success  { background: var(--klini-feedback-success-bg);  color: var(--klini-feedback-success-fg); }
      &--warn     { background: var(--klini-feedback-warning-bg);  color: var(--klini-feedback-warning-fg); }
      &--danger   { background: var(--klini-feedback-danger-bg);   color: var(--klini-feedback-danger-fg); }
      &--info     { background: var(--klini-feedback-info-bg);     color: var(--klini-feedback-info-fg); }
    }
  `],
})
export class TagComponent {
  @Input({ required: true }) value = '';
  @Input() severity: TagSeverity = 'primary';
  @Input() icon = '';
}
