import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToggleButton } from 'primeng/togglebutton';

@Component({
  selector: 'kln-toggle-button',
  standalone: true,
  imports: [FormsModule, ToggleButton],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-togglebutton
      [(ngModel)]="value"
      (onChange)="valueChange.emit($event.checked)"
      [onLabel]="onLabel"
      [offLabel]="offLabel"
      [onIcon]="onIcon"
      [offIcon]="offIcon"
      [disabled]="disabled"
      [styleClass]="styleClass"
    />
  `,
})
export class KlnToggleButtonComponent {
  @Input() value = false;
  @Input() onLabel = 'Sim';
  @Input() offLabel = 'Não';
  @Input() onIcon = '';
  @Input() offIcon = '';
  @Input() disabled = false;
  @Input() styleClass = '';

  @Output() valueChange = new EventEmitter<boolean>();
}
