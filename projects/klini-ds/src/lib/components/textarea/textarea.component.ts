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
  selector: 'kln-textarea',
  standalone: true,
  imports: [CommonModule, FormsModule, TextareaModule, MessageModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => KlnTextareaComponent),
      multi: true,
    },
  ],
  template: `
    <div class="klini-textarea-wrapper">
      @if (label) {
        <label [for]="inputId" class="klini-textarea-label">{{ label }}</label>
      }
      <textarea
        pTextarea
        [id]="inputId"
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
      @if (errorMessage) {
        <p-message severity="error" [text]="errorMessage" />
      }
      @if (hint && !errorMessage) {
        <small class="klini-textarea-hint">{{ hint }}</small>
      }
    </div>
  `,
  styles: [
    `
      .klini-textarea-wrapper {
        display: flex;
        flex-direction: column;
        gap: var(--kln-space-1);
      }
      .klini-textarea-label {
        font-size: var(--kln-font-size-body-sm);
        font-weight: 600;
        color: var(--kln-field-label);
        font-family: 'Objective', system-ui, -apple-system, sans-serif;
      }
      .klini-textarea-hint {
        font-size: var(--kln-font-size-caption);
        color: var(--kln-text-muted);
      }
    `,
  ],
})
export class KlnTextareaComponent implements ControlValueAccessor {
  private static idCounter = 0;

  @Input() label = '';
  @Input() placeholder = '';
  @Input() inputId = `klini-textarea-${++KlnTextareaComponent.idCounter}`;
  @Input() rows = 4;
  @Input() autoResize = false;
  @Input() maxLength: number | null = null;
  @Input() hint = '';
  @Input() errorMessage = '';
  @Input() disabled = false;
  @Input() styleClass = '';

  @Output() valueChange = new EventEmitter<string>();

  value = '';

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onChange: (v: string) => void = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
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
