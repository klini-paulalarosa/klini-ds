import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputMaskModule } from 'primeng/inputmask';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'kln-input-mask',
  standalone: true,
  imports: [FormsModule, InputMaskModule, MessageModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => KliniInputMaskComponent), multi: true }],
  template: `
    <div class="kln-input-mask-wrapper">
      @if (label) {
        <label [for]="inputId" class="kln-input-mask-label">{{ label }}</label>
      }
      <p-inputmask
        [(ngModel)]="value"
        [mask]="mask"
        [placeholder]="placeholder"
        [slotChar]="slotChar"
        [autoClear]="autoClear"
        [disabled]="disabled"
        [inputId]="inputId"
        [styleClass]="'kln-input-mask ' + (errorMessage ? 'ng-invalid ng-dirty ' : '') + styleClass"
        (ngModelChange)="onValueChange($event)"
        (onBlur)="onTouched()"
      />
      @if (errorMessage) {
        <p-message severity="error" [text]="errorMessage" />
      }
      @if (hint && !errorMessage) {
        <small class="kln-input-mask-hint">{{ hint }}</small>
      }
    </div>
  `,
  styles: [`
    .kln-input-mask-wrapper { display: flex; flex-direction: column; gap: var(--klini-space-1); }
    .kln-input-mask-label { font-size: var(--klini-font-size-body-sm); font-weight: 600; color: var(--klini-field-label); font-family: 'Plus Jakarta Sans', sans-serif; }
    .kln-input-mask-hint { font-size: var(--klini-font-size-caption); color: var(--klini-text-muted); }
  `],
})
export class KliniInputMaskComponent implements ControlValueAccessor {
  private static idCounter = 0;

  @Input() label = '';
  @Input() mask = '';
  @Input() placeholder = '';
  @Input() slotChar = '_';
  @Input() autoClear = true;
  @Input() disabled = false;
  @Input() errorMessage = '';
  @Input() hint = '';
  @Input() styleClass = '';
  @Input() inputId = `kln-input-mask-${++KliniInputMaskComponent.idCounter}`;

  @Output() valueChange = new EventEmitter<string>();

  value: string | null = null;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onChange: (v: string | null) => void = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouched: () => void = () => {};

  onValueChange(v: string | null): void { this.value = v; this.onChange(v); this.valueChange.emit(v ?? ''); }
  writeValue(v: string | null): void { this.value = v; }
  registerOnChange(fn: (v: string | null) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
  setDisabledState(isDisabled: boolean): void { this.disabled = isDisabled; }
}
