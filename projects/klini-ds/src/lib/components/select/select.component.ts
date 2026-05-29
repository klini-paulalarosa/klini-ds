// kln-select — wrapper PrimeNG p-select (Dropdown)
import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { MessageModule } from 'primeng/message';
import { CommonModule } from '@angular/common';

export interface KlnSelectOption {
  label: string;
  value: unknown;
  disabled?: boolean;
}

@Component({
  selector: 'kln-select',
  standalone: true,
  imports: [CommonModule, FormsModule, SelectModule, MessageModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => KlnSelectComponent),
    multi: true,
  }],
  template: `
    <div class="kln-select-wrapper">
      @if (label) {
        <label [for]="inputId" class="kln-select-label">{{ label }}</label>
      }
      <p-select
        [(ngModel)]="value"
        [options]="options"
        [optionLabel]="optionLabel"
        [optionValue]="optionValue"
        [placeholder]="placeholder"
        [disabled]="disabled"
        [filter]="filter"
        [showClear]="showClear"
        [inputId]="inputId"
        [styleClass]="'kln-select ' + (errorMessage ? 'ng-invalid ng-dirty ' : '') + styleClass"
        (ngModelChange)="onValueChange($event)"
        (onBlur)="onTouched()"
      />
      @if (errorMessage) {
        <p-message severity="error" [text]="errorMessage" />
      }
      @if (hint && !errorMessage) {
        <small class="kln-select-hint">{{ hint }}</small>
      }
    </div>
  `,
  styles: [`
    .kln-select-wrapper { display: flex; flex-direction: column; gap: var(--kln-space-1); }
    .kln-select-label { font-size: var(--kln-font-size-body-sm); font-weight: 600; color: var(--kln-field-label); font-family: 'Objective', system-ui, -apple-system, sans-serif; }
    .kln-select-hint { font-size: var(--kln-font-size-caption); color: var(--kln-text-muted); }
  `],
})
export class KlnSelectComponent implements ControlValueAccessor {
  private static idCounter = 0;

  @Input() label = '';
  @Input() placeholder = 'Selecione...';
  @Input() options: KlnSelectOption[] | unknown[] = [];
  @Input() optionLabel = 'label';
  @Input() optionValue = 'value';
  @Input() filter = false;
  @Input() showClear = false;
  @Input() errorMessage = '';
  @Input() hint = '';
  @Input() disabled = false;
  @Input() styleClass = '';
  @Input() inputId = `kln-select-${++KlnSelectComponent.idCounter}`;

  @Output() valueChange = new EventEmitter<unknown>();

  value: unknown = null;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onChange: (v: unknown) => void = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouched: () => void = () => {};

  onValueChange(v: unknown): void {
    this.value = v;
    this.onChange(v);
    this.valueChange.emit(v);
  }

  writeValue(v: unknown): void { this.value = v; }
  registerOnChange(fn: (v: unknown) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
  setDisabledState(isDisabled: boolean): void { this.disabled = isDisabled; }
}
