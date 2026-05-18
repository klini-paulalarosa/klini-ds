import {
  Component, Input, Output, EventEmitter,
  ChangeDetectionStrategy, booleanAttribute,
} from '@angular/core';
import { CommonModule } from '@angular/common';

export type ToastSeverity = 'success' | 'warn' | 'danger' | 'info';

const TOAST_ICONS: Record<ToastSeverity, string> = {
  success: 'pi-check-circle',
  warn:    'pi-exclamation-triangle',
  danger:  'pi-times-circle',
  info:    'pi-info-circle',
};

@Component({
  selector: 'klini-toast',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div [class]="'klini-toast klini-toast--' + severity" role="alert">
      <i [class]="'pi ' + severityIcon + ' klini-toast__icon'"></i>
      <div class="klini-toast__body">
        <p *ngIf="title" class="klini-toast__title">{{ title }}</p>
        <p class="klini-toast__message">{{ message }}</p>
      </div>
      <button *ngIf="closable" type="button" class="klini-toast__close" (click)="closed.emit()" aria-label="Fechar">
        <i class="pi pi-times"></i>
      </button>
    </div>
  `,
  styles: [`
    .klini-toast {
      display: flex; align-items: flex-start; gap: var(--klini-space-3);
      padding: var(--klini-space-4); border-radius: var(--klini-radius-lg);
      border-left: 4px solid; font-family: 'Plus Jakarta Sans', sans-serif;
      min-width: 300px; max-width: 480px;
      box-shadow: 0 4px 12px rgb(0 0 0 / 0.08);

      &--success { background: var(--klini-feedback-success-bg); border-color: var(--klini-feedback-success-fg); }
      &--warn    { background: var(--klini-feedback-warning-bg); border-color: var(--klini-feedback-warning-fg); }
      &--danger  { background: var(--klini-feedback-danger-bg);  border-color: var(--klini-feedback-danger-fg); }
      &--info    { background: var(--klini-feedback-info-bg);    border-color: var(--klini-feedback-info-fg); }

      &__icon { font-size: var(--klini-size-icon-md); margin-top: 2px;
        .klini-toast--success & { color: var(--klini-feedback-success-fg); }
        .klini-toast--warn    & { color: var(--klini-feedback-warning-fg); }
        .klini-toast--danger  & { color: var(--klini-feedback-danger-fg); }
        .klini-toast--info    & { color: var(--klini-feedback-info-fg); }
      }
      &__body { flex: 1; display: flex; flex-direction: column; gap: var(--klini-space-1); }
      &__title { font-weight: 700; font-size: var(--klini-font-size-body); color: var(--klini-text-primary); margin: 0; }
      &__message { font-size: var(--klini-font-size-body-sm); color: var(--klini-text-secondary); margin: 0; }
      &__close {
        background: none; border: none; cursor: pointer; padding: 2px;
        color: var(--klini-text-muted); line-height: 1;
        &:hover { color: var(--klini-text-primary); }
      }
    }
  `],
})
export class ToastComponent {
  @Input({ required: true }) message = '';
  @Input() title = '';
  @Input() severity: ToastSeverity = 'info';
  @Input({ transform: booleanAttribute }) closable = true;

  @Output() closed = new EventEmitter<void>();

  get severityIcon(): string { return TOAST_ICONS[this.severity]; }
}
