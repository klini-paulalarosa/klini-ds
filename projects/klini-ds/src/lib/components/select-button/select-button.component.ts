import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';

@Component({
  selector: 'kln-select-button',
  standalone: true,
  imports: [FormsModule, SelectButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => KliniSelectButtonComponent), multi: true }],
  template: `
    <p-selectbutton
      [(ngModel)]="value"
      [options]="options"
      [optionLabel]="optionLabel"
      [optionValue]="optionValue"
      [multiple]="multiple"
      [disabled]="disabled"
      [styleClass]="'kln-select-button ' + styleClass"
      (ngModelChange)="onValueChange($event)"
    />
  `,
  styles: [`:host { display: inline-block; }`],
})
export class KliniSelectButtonComponent implements ControlValueAccessor {
  @Input() options: unknown[] = [];
  @Input() optionLabel = 'label';
  @Input() optionValue = 'value';
  @Input() multiple = false;
  @Input() disabled = false;
  @Input() styleClass = '';

  @Output() valueChange = new EventEmitter<unknown>();

  value: unknown = null;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onChange: (v: unknown) => void = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouched: () => void = () => {};

  onValueChange(v: unknown): void { this.value = v; this.onChange(v); this.valueChange.emit(v); }
  writeValue(v: unknown): void { this.value = v; }
  registerOnChange(fn: (v: unknown) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
  setDisabledState(isDisabled: boolean): void { this.disabled = isDisabled; }
}
