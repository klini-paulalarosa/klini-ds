import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'kln-multiselect',
  standalone: true,
  imports: [FormsModule, MultiSelectModule, MessageModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => KliniMultiSelectComponent), multi: true }],
  template: `
    <div class="kln-multiselect-wrapper">
      @if (label) {
        <label [for]="inputId" class="kln-multiselect-label">{{ label }}</label>
      }
      <p-multiselect
        [(ngModel)]="value"
        [options]="options"
        [optionLabel]="optionLabel"
        [optionValue]="optionValue"
        [placeholder]="placeholder"
        [filter]="filter"
        [showClear]="showClear"
        [disabled]="disabled"
        [inputId]="inputId"
        [styleClass]="'kln-multiselect ' + (errorMessage ? 'ng-invalid ng-dirty ' : '') + styleClass"
        (ngModelChange)="onValueChange($event)"
        (onBlur)="onTouched()"
      />
      @if (errorMessage) {
        <p-message severity="error" [text]="errorMessage" />
      }
      @if (hint && !errorMessage) {
        <small class="kln-multiselect-hint">{{ hint }}</small>
      }
    </div>
  `,
  styles: [`
    .kln-multiselect-wrapper { display: flex; flex-direction: column; gap: var(--klini-space-1); }
    .kln-multiselect-label { font-size: var(--klini-font-size-body-sm); font-weight: 600; color: var(--klini-field-label); font-family: 'Objective', system-ui, -apple-system, sans-serif; }
    .kln-multiselect-hint { font-size: var(--klini-font-size-caption); color: var(--klini-text-muted); }
  `],
})
export class KliniMultiSelectComponent implements ControlValueAccessor {
  private static idCounter = 0;

  @Input() label = '';
  @Input() options: unknown[] = [];
  @Input() optionLabel = 'label';
  @Input() optionValue = 'value';
  @Input() placeholder = 'Selecione...';
  @Input() filter = true;
  @Input() showClear = false;
  @Input() disabled = false;
  @Input() errorMessage = '';
  @Input() hint = '';
  @Input() styleClass = '';
  @Input() inputId = `kln-multiselect-${++KliniMultiSelectComponent.idCounter}`;

  @Output() valueChange = new EventEmitter<unknown[]>();

  value: unknown[] = [];

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onChange: (v: unknown[]) => void = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouched: () => void = () => {};

  onValueChange(v: unknown[]): void { this.value = v; this.onChange(v); this.valueChange.emit(v); }
  writeValue(v: unknown[]): void { this.value = v ?? []; }
  registerOnChange(fn: (v: unknown[]) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
  setDisabledState(isDisabled: boolean): void { this.disabled = isDisabled; }
}
