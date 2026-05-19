import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { RatingModule } from 'primeng/rating';

@Component({
  selector: 'kln-rating',
  standalone: true,
  imports: [FormsModule, RatingModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => KliniRatingComponent), multi: true }],
  template: `
    <p-rating
      [(ngModel)]="value"
      [stars]="stars"
      [disabled]="disabled"
      [readonly]="readonly"
      (ngModelChange)="onValueChange($event)"
    />
  `,
  styles: [`:host { display: inline-block; }`],
})
export class KliniRatingComponent implements ControlValueAccessor {
  @Input() stars = 5;
  @Input() disabled = false;
  @Input() readonly = false;

  @Output() valueChange = new EventEmitter<number>();

  value: number | null = null;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onChange: (v: number | null) => void = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouched: () => void = () => {};

  onValueChange(v: number | null): void { this.value = v; this.onChange(v); this.valueChange.emit(v ?? 0); }
  writeValue(v: number | null): void { this.value = v; }
  registerOnChange(fn: (v: number | null) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
  setDisabledState(isDisabled: boolean): void { this.disabled = isDisabled; }
}
