import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MessageModule } from 'primeng/message';

export interface KliniRadioOption {
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
  disabled?: boolean;
}

@Component({
  selector: 'klini-radio-group',
  standalone: true,
  imports: [FormsModule, RadioButtonModule, MessageModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => KliniRadioGroupComponent),
      multi: true,
    },
  ],
  template: `
    <div
      class="klini-radio-group"
      [class.klini-radio-group--row]="layout === 'row'"
    >
      @for (opt of options; track $index) {
        <div class="klini-radio-option">
          <p-radioButton
            [name]="name"
            [value]="opt.value"
            [(ngModel)]="value"
            [inputId]="name + '_' + $index"
            [disabled]="disabled || !!opt.disabled"
            (ngModelChange)="onValueChange($event)"
          />
          <label [for]="name + '_' + $index" class="klini-radio-label">{{ opt.label }}</label>
        </div>
      }
      @if (errorMessage) {
        <p-message
          severity="error"
          [text]="errorMessage"
        />
      }
    </div>
  `,
  styles: [
    `
      .klini-radio-group {
        display: flex;
        flex-direction: column;
        gap: var(--klini-space-2);
      }
      .klini-radio-group--row {
        flex-direction: row;
        flex-wrap: wrap;
        gap: var(--klini-space-4);
      }
      .klini-radio-option {
        display: flex;
        align-items: center;
        gap: var(--klini-space-2);
      }
      .klini-radio-label {
        font-size: var(--klini-font-size-body-sm);
        color: var(--klini-text-primary);
        font-family: 'Plus Jakarta Sans', sans-serif;
        cursor: pointer;
      }
    `,
  ],
})
export class KliniRadioGroupComponent implements ControlValueAccessor {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) options: KliniRadioOption[] = [];
  @Input() layout: 'column' | 'row' = 'column';
  @Input() errorMessage = '';
  @Input() disabled = false;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Output() valueChange = new EventEmitter<any>();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any = null;

  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-explicit-any
  private onChange: (v: any) => void = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouched: () => void = () => {};

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onValueChange(v: any): void {
    this.value = v;
    this.onChange(v);
    this.valueChange.emit(v);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  writeValue(v: any): void {
    this.value = v;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registerOnChange(fn: (v: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
