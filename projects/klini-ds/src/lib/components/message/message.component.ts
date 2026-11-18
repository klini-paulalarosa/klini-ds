import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { MessageModule } from 'primeng/message';

export type KlnMessageSeverity = 'success' | 'info' | 'warn' | 'error' | 'secondary' | 'contrast';

@Component({
  selector: 'kln-message',
  standalone: true,
  imports: [MessageModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-message
      [severity]="severity"
      [text]="text"
      [icon]="icon || undefined"
      [closable]="closable"
      [styleClass]="styleClass"
    />
  `,
  styles: [`
    :host { display: block; }
  `],
})
export class MessageComponent {
  @Input({ required: true }) text = '';
  @Input() severity: KlnMessageSeverity = 'info';
  @Input() icon        = '';
  @Input() closable    = false;
  @Input() styleClass  = '';
}
