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
import { ToggleSwitchModule } from 'primeng/toggleswitch';

@Component({
  selector: 'kln-toggle',
  standalone: true,
  imports: [CommonModule, FormsModule, ToggleSwitchModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => KlnToggleComponent),
      multi: true,
    },
  ],
  template: `
    <p-toggleswitch
      [(ngModel)]="value"
      [disabled]="disabled"
      [styleClass]="styleClass"
      (ngModelChange)="onValueChange($event)"
    />
  `,
})
export class KlnToggleComponent implements ControlValueAccessor {
  @Input() disabled = false;
  @Input() onLabel = '';
  @Input() offLabel = '';
  @Input() styleClass = '';

  @Output() valueChange = new EventEmitter<boolean>();

  value = false;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onChange: (v: boolean) => void = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouched: () => void = () => {};

  onValueChange(v: boolean): void {
    this.value = v;
    this.onChange(v);
    this.valueChange.emit(v);
  }

  writeValue(v: boolean): void {
    this.value = !!v;
  }

  registerOnChange(fn: (v: boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
