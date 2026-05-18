import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'klini-password',
  standalone: true,
  imports: [CommonModule, FormsModule, PasswordModule, MessageModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => KliniPasswordComponent),
      multi: true,
    },
  ],
  template: `
    <div class="klini-password-wrapper">
      <label *ngIf="label" class="klini-password-label">{{ label }}</label>
      <p-password
        [(ngModel)]="value"
        [feedback]="feedback"
        [toggleMask]="toggleMask"
        [disabled]="disabled"
        [placeholder]="placeholder"
        [styleClass]="styleClass"
        [inputStyleClass]="'w-full' + (errorMessage ? ' p-invalid' : '')"
        (ngModelChange)="onValueChange($event)"
        (onBlur)="onTouched()"
      />
      <p-message *ngIf="errorMessage" severity="error" [text]="errorMessage" />
      <small *ngIf="hint && !errorMessage" class="klini-password-hint">{{ hint }}</small>
    </div>
  `,
  styles: [
    `
      .klini-password-wrapper {
        display: flex;
        flex-direction: column;
        gap: var(--klini-space-1);
      }
      .klini-password-label {
        font-size: var(--klini-font-size-body-sm);
        font-weight: 600;
        color: var(--klini-field-label);
        font-family: 'Plus Jakarta Sans', sans-serif;
      }
      .klini-password-hint {
        font-size: var(--klini-font-size-caption);
        color: var(--klini-text-muted);
      }
    `,
  ],
})
export class KliniPasswordComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() feedback = false;
  @Input() toggleMask = true;
  @Input() errorMessage = '';
  @Input() hint = '';
  @Input() disabled = false;
  @Input() styleClass = '';

  @Output() valueChange = new EventEmitter<string>();

  value = '';

  private onChange: (v: string) => void = () => {};
  onTouched: () => void = () => {};

  onValueChange(v: string): void {
    this.value = v;
    this.onChange(v);
    this.valueChange.emit(v);
  }

  writeValue(v: string): void {
    this.value = v ?? '';
  }

  registerOnChange(fn: (v: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
