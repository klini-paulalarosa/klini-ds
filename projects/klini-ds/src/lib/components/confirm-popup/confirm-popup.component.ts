import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { ConfirmPopup } from 'primeng/confirmpopup';

@Component({
  selector: 'kln-confirm-popup',
  standalone: true,
  imports: [ConfirmPopup],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-confirmpopup [styleClass]="styleClass" />
  `,
})
export class KliniConfirmPopupComponent {
  @Input() styleClass = '';
}
