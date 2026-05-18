import {
  Component, Input, Output, EventEmitter, forwardRef,
  ChangeDetectionStrategy, booleanAttribute,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

export type InputSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'klini-input-text',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputTextComponent),
    multi: true,
  }],
  template: `
    <div [class]="wrapperClass">
      <label *ngIf="label" [for]="inputId" class="klini-input__label">
        {{ label }}
        <span *ngIf="required" class="klini-input__required" aria-hidden="true"> *</span>
      </label>
      <div class="klini-input__control">
        <i *ngIf="iconLeft" [class]="'pi ' + iconLeft + ' klini-input__icon klini-input__icon--left'"></i>
        <input
          [id]="inputId"
          [type]="type"
          [placeholder]="placeholder"
          [disabled]="disabled"
          [value]="value"
          [attr.maxlength]="maxLength || null"
          [class]="inputClass"
          (input)="onInput($event)"
          (blur)="onTouched()"
        />
        <i *ngIf="iconRight" [class]="'pi ' + iconRight + ' klini-input__icon klini-input__icon--right'"></i>
      </div>
      <span *ngIf="errorMessage" class="klini-input__error">{{ errorMessage }}</span>
      <span *ngIf="hint && !errorMessage" class="klini-input__hint">{{ hint }}</span>
    </div>
  `,
  styleUrl: './input-text.component.scss',
})
export class InputTextComponent implements ControlValueAccessor {
  private static idCounter = 0;

  @Input() label       = '';
  @Input() placeholder = '';
  @Input() type        = 'text';
  @Input() size: InputSize = 'md';
  @Input() hint        = '';
  @Input() errorMessage = '';
  @Input() iconLeft    = '';
  @Input() iconRight   = '';
  @Input() maxLength: number | null = null;
  @Input() inputId     = `klini-input-${++InputTextComponent.idCounter}`;
  @Input({ transform: booleanAttribute }) required = false;
  @Input({ transform: booleanAttribute }) disabled = false;

  @Output() valueChange = new EventEmitter<string>();

  value = '';
  onChange  = (_: string) => {};
  onTouched = () => {};

  get wrapperClass(): string {
    return [
      'klini-input',
      `klini-input--${this.size}`,
      this.errorMessage ? 'klini-input--error' : '',
      this.disabled     ? 'klini-input--disabled' : '',
    ].filter(Boolean).join(' ');
  }

  get inputClass(): string {
    return [
      'klini-input__field',
      this.iconLeft  ? 'klini-input__field--icon-left'  : '',
      this.iconRight ? 'klini-input__field--icon-right' : '',
    ].filter(Boolean).join(' ');
  }

  onInput(event: Event): void {
    const val = (event.target as HTMLInputElement).value;
    this.value = val;
    this.onChange(val);
    this.valueChange.emit(val);
  }

  writeValue(val: string): void   { this.value = val ?? ''; }
  registerOnChange(fn: (v: string) => void): void  { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
  setDisabledState(isDisabled: boolean): void { this.disabled = isDisabled; }
}
