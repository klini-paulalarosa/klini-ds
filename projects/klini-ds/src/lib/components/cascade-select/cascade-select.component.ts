import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CascadeSelectModule } from 'primeng/cascadeselect';

@Component({
  selector: 'kln-cascade-select',
  standalone: true,
  imports: [FormsModule, CascadeSelectModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => KliniCascadeSelectComponent), multi: true }],
  template: `
    <p-cascadeselect
      [(ngModel)]="value"
      [options]="$any(options)"
      [optionLabel]="optionLabel"
      [optionValue]="optionValue"
      [optionGroupLabel]="optionGroupLabel"
      [optionGroupChildren]="optionGroupChildren"
      [placeholder]="placeholder"
      [disabled]="disabled"
      [styleClass]="'kln-cascade-select ' + styleClass"
      (ngModelChange)="onValueChange($event)"
      (onBlur)="onTouched()"
    />
  `,
  styles: [`:host { display: block; }`],
})
export class KliniCascadeSelectComponent implements ControlValueAccessor {
  @Input() options: unknown[] = [];
  @Input() optionLabel = 'label';
  @Input() optionValue = 'value';
  @Input() optionGroupLabel = 'label';
  @Input() optionGroupChildren = 'children';
  @Input() placeholder = 'Selecione...';
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
