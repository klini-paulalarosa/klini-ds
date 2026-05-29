// kln-knob — wrapper PrimeNG p-knob (Progress Ring circular)
import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { KnobModule } from 'primeng/knob';

@Component({
  selector: 'kln-knob',
  standalone: true,
  imports: [FormsModule, KnobModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => KlnKnobComponent),
    multi: true,
  }],
  template: `
    <p-knob
      [(ngModel)]="value"
      [min]="min"
      [max]="max"
      [step]="step"
      [size]="size"
      [readonly]="readonly"
      [disabled]="disabled"
      [showValue]="showValue"
      [valueColor]="valueColor || 'var(--kln-primary)'"
      [rangeColor]="rangeColor || 'var(--kln-surface-border)'"
      [textColor]="textColor || 'var(--kln-text-primary)'"
      [strokeWidth]="strokeWidth"
      [styleClass]="'kln-knob ' + styleClass"
      (onChange)="onValueChange($event)"
    />
  `,
  styles: [`:host { display: inline-block; }`],
})
export class KlnKnobComponent implements ControlValueAccessor {
  @Input() min = 0;
  @Input() max = 100;
  @Input() step = 1;
  @Input() size = 100;
  @Input() readonly = false;
  @Input() disabled = false;
  @Input() showValue = true;
  @Input() valueColor = '';
  @Input() rangeColor = '';
  @Input() textColor = '';
  @Input() strokeWidth = 14;
  @Input() styleClass = '';

  @Output() valueChange = new EventEmitter<number>();

  value = 0;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onChange: (v: number) => void = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouched: () => void = () => {};

  onValueChange(v: number): void {
    this.value = v;
    this.onChange(v);
    this.valueChange.emit(v);
  }

  writeValue(v: number): void { this.value = v ?? 0; }
  registerOnChange(fn: (v: number) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
  setDisabledState(isDisabled: boolean): void { this.disabled = isDisabled; }
}
