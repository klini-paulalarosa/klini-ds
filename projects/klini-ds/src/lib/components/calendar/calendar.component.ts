import { Component, Input, Output, EventEmitter, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';
import { FloatLabelModule } from 'primeng/floatlabel';

/**
 * Wrapper sobre p-datepicker do PrimeNG 18 (ex p-calendar).
 * Implementa ControlValueAccessor para Reactive/Template Forms.
 * Estilização 100% via KliniPrime theme preset.
 */
@Component({
  selector: 'kln-calendar',
  standalone: true,
  imports: [FormsModule, DatePickerModule, FloatLabelModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CalendarComponent),
    multi: true,
  }],
  template: `
    <div class="klini-calendar-wrapper">
      @if (floatLabel) {
        <p-floatlabel>
          <p-datepicker
            [inputId]="inputId"
            [placeholder]="placeholder"
            [showIcon]="showIcon"
            [showTime]="showTime"
            [showSeconds]="showSeconds"
            [selectionMode]="selectionMode"
            [minDate]="minDate"
            [maxDate]="maxDate"
            [dateFormat]="dateFormat"
            [disabled]="disabled"
            [inline]="inline"
            [(ngModel)]="value"
            (ngModelChange)="onValueChange($event)"
            (onBlur)="onTouched()"
            styleClass="klini-datepicker"
          />
          <label [for]="inputId">{{ label }}</label>
        </p-floatlabel>
      } @else {
        @if (label) {
          <label [for]="inputId" class="klini-calendar__label">{{ label }}</label>
        }
        <p-datepicker
          [inputId]="inputId"
          [placeholder]="placeholder"
          [showIcon]="showIcon"
          [showTime]="showTime"
          [showSeconds]="showSeconds"
          [selectionMode]="selectionMode"
          [minDate]="minDate"
          [maxDate]="maxDate"
          [dateFormat]="dateFormat"
          [disabled]="disabled"
          [inline]="inline"
          [(ngModel)]="value"
          (ngModelChange)="onValueChange($event)"
          (onBlur)="onTouched()"
          styleClass="klini-datepicker"
        />
      }
    </div>
  `,
  styles: [`
    .klini-calendar-wrapper { display: flex; flex-direction: column; gap: var(--klini-space-1); }
    .klini-calendar__label {
      font-size: var(--klini-font-size-body-sm); font-weight: 600;
      color: var(--klini-field-label); font-family: 'Objective', system-ui, -apple-system, sans-serif;
    }
    :host ::ng-deep .klini-datepicker { width: 100%; }
  `],
})
export class CalendarComponent implements ControlValueAccessor {
  private static idCounter = 0;

  @Input() label       = '';
  @Input() placeholder = '';
  @Input() dateFormat  = 'dd/mm/yy';
  @Input() selectionMode: 'single' | 'multiple' | 'range' = 'single';
  @Input() minDate: Date | undefined;
  @Input() maxDate: Date | undefined;
  @Input() inputId    = `klini-calendar-${++CalendarComponent.idCounter}`;
  @Input() showIcon   = true;
  @Input() showTime   = false;
  @Input() showSeconds = false;
  @Input() inline     = false;
  @Input() floatLabel = false;
  @Input() disabled   = false;

  @Output() valueChange = new EventEmitter<Date | Date[] | null>();

  value: Date | Date[] | null = null;
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  onChange  = (_val: Date | Date[] | null) => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouched = () => {};

  onValueChange(val: Date | Date[] | null): void {
    this.value = val;
    this.onChange(val);
    this.valueChange.emit(val);
  }

  writeValue(val: Date | Date[] | null): void { this.value = val; }
  registerOnChange(fn: (v: Date | Date[] | null) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
  setDisabledState(isDisabled: boolean): void { this.disabled = isDisabled; }
}
