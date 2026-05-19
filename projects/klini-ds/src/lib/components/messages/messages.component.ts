import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MessagesModule } from 'primeng/messages';
import { ToastMessageOptions } from 'primeng/api';

@Component({
  selector: 'kln-messages',
  standalone: true,
  imports: [MessagesModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-messages
      [value]="value"
      [closable]="closable"
      [enableService]="enableService"
      [styleClass]="styleClass"
    />
  `,
  styles: [`:host { display: block; }`],
})
export class KliniMessagesComponent {
  @Input() value: ToastMessageOptions[] = [];
  @Input() closable = true;
  @Input() enableService = false;
  @Input() styleClass = '';
}
