import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'kln-autocomplete',
  standalone: true,
  imports: [FormsModule, AutoCompleteModule, MessageModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => KlnAutoCompleteComponent), multi: true }],
  template: `
    <div class="kln-autocomplete-wrapper">
      @if (label) {
        <label [for]="inputId" class="kln-autocomplete-label">{{ label }}</label>
      }
      <p-autocomplete
        [(ngModel)]="value"
        [suggestions]="suggestions"
        [placeholder]="placeholder"
        [dropdown]="dropdown"
        [multiple]="multiple"
        [disabled]="disabled"
        [inputId]="inputId"
        [styleClass]="'kln-autocomplete ' + (errorMessage ? 'ng-invalid ng-dirty ' : '') + styleClass"
        (ngModelChange)="onValueChange($event)"
        (completeMethod)="onComplete($event)"
        (onBlur)="onTouched()"
      />
      @if (errorMessage) {
        <p-message severity="error" [text]="errorMessage" />
      }
      @if (hint && !errorMessage) {
        <small class="kln-autocomplete-hint">{{ hint }}</small>
      }
    </div>
  `,
  styles: [`
    .kln-autocomplete-wrapper { display: flex; flex-direction: column; gap: var(--kln-space-1); }
    .kln-autocomplete-label { font-size: var(--kln-font-size-body-sm); font-weight: 600; color: var(--kln-field-label); font-family: 'Objective', system-ui, -apple-system, sans-serif; }
    .kln-autocomplete-hint { font-size: var(--kln-font-size-caption); color: var(--kln-text-muted); }
  `],
})
export class KlnAutoCompleteComponent implements ControlValueAccessor {
  private static idCounter = 0;

  @Input() label = '';
  @Input() suggestions: unknown[] = [];
  @Input() placeholder = '';
  @Input() dropdown = false;
  @Input() multiple = false;
  @Input() disabled = false;
  @Input() errorMessage = '';
  @Input() hint = '';
  @Input() styleClass = '';
  @Input() inputId = `kln-autocomplete-${++KlnAutoCompleteComponent.idCounter}`;

  @Output() valueChange = new EventEmitter<unknown>();
  @Output() completeMethod = new EventEmitter<string>();

  value: unknown = null;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onChange: (v: unknown) => void = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouched: () => void = () => {};

  onValueChange(v: unknown): void { this.value = v; this.onChange(v); this.valueChange.emit(v); }
  onComplete(event: { query: string }): void { this.completeMethod.emit(event.query); }
  writeValue(v: unknown): void { this.value = v; }
  registerOnChange(fn: (v: unknown) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
  setDisabledState(isDisabled: boolean): void { this.disabled = isDisabled; }
}
