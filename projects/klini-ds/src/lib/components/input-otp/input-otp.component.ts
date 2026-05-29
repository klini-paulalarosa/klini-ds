import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputOtp } from 'primeng/inputotp';

@Component({
  selector: 'kln-input-otp',
  standalone: true,
  imports: [FormsModule, InputOtp],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-inputotp
      [(ngModel)]="value"
      (onChange)="valueChange.emit($event.value)"
      [length]="length"
      [mask]="mask"
      [integerOnly]="integerOnly"
      [disabled]="disabled"
      [styleClass]="styleClass"
    />
  `,
})
export class KlnInputOtpComponent {
  @Input() value: string | null = null;
  @Input() length = 6;
  @Input() mask = false;
  @Input() integerOnly = false;
  @Input() disabled = false;
  @Input() styleClass = '';

  @Output() valueChange = new EventEmitter<string | null>();
}
