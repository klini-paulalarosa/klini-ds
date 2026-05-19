// kln-slider — wrapper PrimeNG p-slider
import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SliderModule } from 'primeng/slider';
import { SliderChangeEvent } from 'primeng/slider';

@Component({
  selector: 'kln-slider',
  standalone: true,
  imports: [FormsModule, SliderModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => KliniSliderComponent),
    multi: true,
  }],
  template: `
    <p-slider
      [(ngModel)]="value"
      [min]="min"
      [max]="max"
      [step]="step"
      [range]="range"
      [orientation]="orientation"
      [disabled]="disabled"
      [styleClass]="'kln-slider ' + styleClass"
      (onChange)="onSliderChange($event)"
    />
  `,
  styles: [`:host { display: block; }`],
})
export class KliniSliderComponent implements ControlValueAccessor {
  @Input() min = 0;
  @Input() max = 100;
  @Input() step = 1;
  @Input() range = false;
  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';
  @Input() disabled = false;
  @Input() styleClass = '';

  @Output() valueChange = new EventEmitter<number | number[]>();

  value: number | number[] = 0;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onChange: (v: number | number[]) => void = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouched: () => void = () => {};

  onSliderChange(event: SliderChangeEvent): void {
    const v: number | number[] = event.values ?? event.value ?? 0;
    this.onValueChange(v);
  }

  onValueChange(v: number | number[]): void {
    this.value = v;
    this.onChange(v);
    this.valueChange.emit(v);
  }

  writeValue(v: number | number[]): void { this.value = v ?? 0; }
  registerOnChange(fn: (v: number | number[]) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
  setDisabledState(isDisabled: boolean): void { this.disabled = isDisabled; }
}
