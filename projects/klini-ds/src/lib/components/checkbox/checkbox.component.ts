import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'kln-checkbox',
  standalone: true,
  imports: [FormsModule, CheckboxModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => KliniCheckboxComponent), multi: true }],
  template: `
    <div class="kln-checkbox-wrapper">
      <p-checkbox
        [(ngModel)]="value"
        [binary]="binary"
        [ariaLabel]="label"
        [inputId]="inputId"
        [disabled]="disabled"
        [styleClass]="styleClass"
        (ngModelChange)="onValueChange($event)"
      />
      @if (label) {
        <label [for]="inputId" class="kln-checkbox-label">{{ label }}</label>
      }
    </div>
  `,
  styles: [`
    :host { display: inline-block; }
    .kln-checkbox-wrapper { display: inline-flex; align-items: center; gap: var(--klini-space-2); }
    .kln-checkbox-label { font-size: var(--klini-font-size-body-sm); color: var(--klini-text-primary); font-family: 'Objective', system-ui, -apple-system, sans-serif; cursor: pointer; }
  `],
})
export class KliniCheckboxComponent implements ControlValueAccessor {
  private static idCounter = 0;

  @Input() label = '';
  @Input() binary = true;
  @Input() disabled = false;
  @Input() styleClass = '';
  @Input() inputId = `kln-checkbox-${++KliniCheckboxComponent.idCounter}`;

  @Output() valueChange = new EventEmitter<boolean>();
  value = false;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onChange: (v: boolean) => void = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouched: () => void = () => {};
  onValueChange(v: boolean): void { this.value = v; this.onChange(v); this.valueChange.emit(v); }
  writeValue(v: boolean): void { this.value = !!v; }
  registerOnChange(fn: (v: boolean) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
  setDisabledState(isDisabled: boolean): void { this.disabled = isDisabled; }
}
