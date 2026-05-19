import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Inplace } from 'primeng/inplace';

@Component({
  selector: 'kln-inplace',
  standalone: true,
  imports: [Inplace],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-inplace
      [active]="active"
      [disabled]="disabled"
      [closable]="closable"
      [styleClass]="styleClass"
      (onActivate)="activeChange.emit(true)"
      (onDeactivate)="activeChange.emit(false)"
    >
      <ng-content />
    </p-inplace>
  `,
})
export class KliniInplaceComponent {
  @Input() active = false;
  @Input() disabled = false;
  @Input() closable = false;
  @Input() styleClass = '';

  @Output() activeChange = new EventEmitter<boolean>();
}
