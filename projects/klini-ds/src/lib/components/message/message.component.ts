import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { MessageModule } from 'primeng/message';

export type KliniMessageSeverity = 'success' | 'info' | 'warn' | 'error' | 'secondary' | 'contrast';

/**
 * Wrapper sobre p-message do PrimeNG.
 * Feedbacks contextuais — exibidos inline no conteúdo (não flutuante).
 * Para notificações flutuantes use klini-toast.
 *
 * Estilização 100% via KliniPrime theme preset.
 */
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
  @Input() severity: KliniMessageSeverity = 'info';
  @Input() icon        = '';
  @Input() closable    = false;
  @Input() styleClass  = '';
}
