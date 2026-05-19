/**
 * kln-input-text
 *
 * Diretivas companion (import de '@klini/ds'):
 *
 * pKeyFilter — filtra teclas permitidas no input
 *   <kln-input-text pKeyFilter="num" />          — só números
 *   <kln-input-text pKeyFilter="alpha" />         — só letras
 *   <kln-input-text pKeyFilter="alphanum" />      — alfanumérico
 *   <kln-input-text pKeyFilter="email" />         — formato e-mail
 *   Padrões: 'num' | 'int' | 'alpha' | 'alphanum' | 'hex' | 'email' | 'money'
 *
 * pAutoFocus — coloca foco inicial no campo
 *   <kln-input-text pAutoFocus [autofocus]="true" />
 */
import {
  Component, Input, Output, EventEmitter, forwardRef,
  ChangeDetectionStrategy, booleanAttribute,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { MessageModule } from 'primeng/message';

export type KliniInputSize = 'small' | 'large' | undefined;

/**
 * Wrapper sobre pInputText + p-floatlabel do PrimeNG.
 * Implementa ControlValueAccessor para integração com Reactive/Template Forms.
 * Estilização 100% via KliniPrime theme preset.
 */
@Component({
  selector: 'kln-input-text',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, FloatLabelModule, MessageModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputTextComponent),
    multi: true,
  }],
  template: `
    <div class="klini-input-wrapper">
      @if (floatLabel) {
        <p-floatlabel [variant]="floatLabelVariant">
          <input
            pInputText
            [id]="inputId"
            [type]="type"
            [size]="size"
            [disabled]="disabled"
            [value]="value"
            [attr.maxlength]="maxLength || null"
            [class.p-invalid]="!!errorMessage"
            (input)="onInput($event)"
            (blur)="onTouched()"
          />
          <label [for]="inputId">{{ label }}</label>
        </p-floatlabel>
      } @else {
        @if (label) {
          <label [for]="inputId" class="klini-input-label">{{ label }}</label>
        }
        <input
          pInputText
          [id]="inputId"
          [type]="type"
          [size]="size"
          [placeholder]="placeholder"
          [disabled]="disabled"
          [value]="value"
          [attr.maxlength]="maxLength || null"
          [class.p-invalid]="!!errorMessage"
          (input)="onInput($event)"
          (blur)="onTouched()"
        />
      }
      @if (errorMessage) {
        <p-message severity="error" [text]="errorMessage" styleClass="klini-input-error" />
      }
      @if (hint && !errorMessage) {
        <small class="klini-input-hint">{{ hint }}</small>
      }
    </div>
  `,
  styles: [`
    .klini-input-wrapper { display: flex; flex-direction: column; gap: var(--klini-space-1); }
    .klini-input-label {
      font-size: var(--klini-font-size-body-sm); font-weight: 600;
      color: var(--klini-field-label); font-family: 'Plus Jakarta Sans', sans-serif;
    }
    .klini-input-hint { font-size: var(--klini-font-size-caption); color: var(--klini-text-muted); }
    :host ::ng-deep .klini-input-error { margin-top: 0; }
  `],
})
export class InputTextComponent implements ControlValueAccessor {
  private static idCounter = 0;

  @Input() label       = '';
  @Input() placeholder = '';
  @Input() type        = 'text';
  @Input() size: KliniInputSize = undefined;
  @Input() hint         = '';
  @Input() errorMessage = '';
  @Input() maxLength: number | null = null;
  @Input() inputId     = `klini-input-${++InputTextComponent.idCounter}`;
  @Input() floatLabelVariant: 'in' | 'on' | 'over' = 'on';
  @Input({ transform: booleanAttribute }) floatLabel = false;
  @Input({ transform: booleanAttribute }) disabled   = false;

  @Output() valueChange = new EventEmitter<string>();

  value     = '';
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  onChange  = (_val: string) => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouched = () => {};

  onInput(event: Event): void {
    const val = (event.target as HTMLInputElement).value;
    this.value = val;
    this.onChange(val);
    this.valueChange.emit(val);
  }

  writeValue(val: string): void { this.value = val ?? ''; }
  registerOnChange(fn: (v: string) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
  setDisabledState(isDisabled: boolean): void { this.disabled = isDisabled; }
}
