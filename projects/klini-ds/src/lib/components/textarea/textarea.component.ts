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
import { TextareaModule } from 'primeng/textarea';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'klini-textarea',
  standalone: true,
  imports: [CommonModule, FormsModule, TextareaModule, MessageModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => KliniTextareaComponent),
      multi: true,
    },
  ],
  template: `
    <div class="klini-textarea-wrapper">
      <label *ngIf="label" class="klini-textarea-label">{{ label }}</label>
      <textarea
        pTextarea
        [rows]="rows"
        [autoResize]="autoResize"
        [disabled]="disabled"
        [placeholder]="placeholder"
        [attr.maxlength]="maxLength || null"
        [class.p-invalid]="!!errorMessage"
        [(ngModel)]="value"
        (ngModelChange)="onValueChange($event)"
        (blur)="onTouched()"
        [ngClass]="styleClass"
      ></textarea>
      <p-message *ngIf="errorMessage" severity="error" [text]="errorMessage" />
      <small *ngIf="hint && !errorMessage" class="klini-textarea-hint">{{ hint }}</small>
    </div>
  `,
  styles: [
    `
      .klini-textarea-wrapper {
        display: flex;
        flex-direction: column;
        gap: var(--klini-space-1);
      }
      .klini-textarea-label {
        font-size: var(--klini-font-size-body-sm);
        font-weight: 600;
        color: var(--klini-field-label);
        font-family: 'Plus Jakarta Sans', sans-serif;
      }
      .klini-textarea-hint {
        font-size: var(--klini-font-size-caption);
        color: var(--klini-text-muted);
      }
    `,
  ],
})
export class KliniTextareaComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() rows = 4;
  @Input() autoResize = false;
  @Input() maxLength: number | null = null;
  @Input() hint = '';
  @Input() errorMessage = '';
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
