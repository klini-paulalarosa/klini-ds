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
import { InputNumberModule } from 'primeng/inputnumber';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'klini-input-number',
  standalone: true,
  imports: [CommonModule, FormsModule, InputNumberModule, MessageModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => KliniInputNumberComponent),
      multi: true,
    },
  ],
  template: `
    <div class="klini-input-number-wrapper">
      <label *ngIf="label" class="klini-input-number-label">{{ label }}</label>
      <p-inputnumber
        [(ngModel)]="value"
        [min]="min"
        [max]="max"
        [step]="step"
        [prefix]="prefix"
        [suffix]="suffix"
        [currency]="currency || undefined"
        [mode]="mode"
        [showButtons]="showButtons"
        [disabled]="disabled"
        [placeholder]="placeholder"
        [styleClass]="styleClass"
        [inputStyleClass]="errorMessage ? 'p-invalid' : ''"
        (ngModelChange)="onValueChange($event)"
        (onBlur)="onTouched()"
      />
      <p-message *ngIf="errorMessage" severity="error" [text]="errorMessage" />
      <small *ngIf="hint && !errorMessage" class="klini-input-number-hint">{{ hint }}</small>
    </div>
  `,
  styles: [
    `
      .klini-input-number-wrapper {
        display: flex;
        flex-direction: column;
        gap: var(--klini-space-1);
      }
      .klini-input-number-label {
        font-size: var(--klini-font-size-body-sm);
        font-weight: 600;
        color: var(--klini-field-label);
        font-family: 'Plus Jakarta Sans', sans-serif;
      }
      .klini-input-number-hint {
        font-size: var(--klini-font-size-caption);
        color: var(--klini-text-muted);
      }
    `,
  ],
})
export class KliniInputNumberComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() min: number | undefined = undefined;
  @Input() max: number | undefined = undefined;
  @Input() step = 1;
  @Input() prefix = '';
  @Input() suffix = '';
  @Input() currency = '';
  @Input() mode: 'decimal' | 'currency' = 'decimal';
  @Input() showButtons = false;
  @Input() errorMessage = '';
  @Input() hint = '';
  @Input() disabled = false;
  @Input() styleClass = '';

  @Output() valueChange = new EventEmitter<number | null>();

  value: number | null = null;

  private onChange: (v: number | null) => void = () => {};
  onTouched: () => void = () => {};

  onValueChange(v: number | null): void {
    this.value = v;
    this.onChange(v);
    this.valueChange.emit(v);
  }

  writeValue(v: number | null): void {
    this.value = v ?? null;
  }

  registerOnChange(fn: (v: number | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
