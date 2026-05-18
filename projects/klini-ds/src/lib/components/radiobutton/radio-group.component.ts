import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MessageModule } from 'primeng/message';

export interface KliniRadioOption {
  label: string;
  value: any;
  disabled?: boolean;
}

@Component({
  selector: 'klini-radio-group',
  standalone: true,
  imports: [CommonModule, FormsModule, RadioButtonModule, MessageModule],
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
      <div *ngFor="let opt of options; let i = index" class="klini-radio-option">
        <p-radioButton
          [name]="name"
          [value]="opt.value"
          [(ngModel)]="value"
          [inputId]="name + '_' + i"
          [disabled]="disabled || !!opt.disabled"
          (ngModelChange)="onValueChange($event)"
        />
        <label [for]="name + '_' + i" class="klini-radio-label">{{ opt.label }}</label>
      </div>
      <p-message
        *ngIf="errorMessage"
        severity="error"
        [text]="errorMessage"
      />
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

  @Output() valueChange = new EventEmitter<any>();

  value: any = null;

  private onChange: (v: any) => void = () => {};
  onTouched: () => void = () => {};

  onValueChange(v: any): void {
    this.value = v;
    this.onChange(v);
    this.valueChange.emit(v);
  }

  writeValue(v: any): void {
    this.value = v;
  }

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
