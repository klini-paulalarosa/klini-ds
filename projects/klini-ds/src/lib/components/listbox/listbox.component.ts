import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ListboxModule } from 'primeng/listbox';

@Component({
  selector: 'kln-listbox',
  standalone: true,
  imports: [FormsModule, ListboxModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => KliniListboxComponent), multi: true }],
  template: `
    <p-listbox
      [(ngModel)]="value"
      [options]="options"
      [optionLabel]="optionLabel"
      [optionValue]="optionValue"
      [multiple]="multiple"
      [filter]="filter"
      [disabled]="disabled"
      [listStyle]="listStyle ? { 'max-height': listStyle } : {}"
      [styleClass]="'kln-listbox ' + styleClass"
      (ngModelChange)="onValueChange($event)"
    />
  `,
  styles: [`:host { display: block; }`],
})
export class KliniListboxComponent implements ControlValueAccessor {
  @Input() options: unknown[] = [];
  @Input() optionLabel = 'label';
  @Input() optionValue = 'value';
  @Input() multiple = false;
  @Input() filter = false;
  @Input() disabled = false;
  @Input() styleClass = '';
  @Input() listStyle = '';

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
