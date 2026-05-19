import { Component, Input, ChangeDetectionStrategy, inject } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

export type KliniToastSeverity = 'success' | 'warn' | 'error' | 'info' | 'secondary' | 'contrast';

export type KliniToastPosition =
  | 'top-right' | 'top-left' | 'top-center'
  | 'bottom-right' | 'bottom-left' | 'bottom-center'
  | 'center';

export interface KliniToastMessage {
  severity?: KliniToastSeverity;
  summary?: string;
  detail:   string;
  life?:    number;
  sticky?:  boolean;
  key?:     string;
}

/**
 * Wrapper sobre p-toast do PrimeNG.
 *
 * Uso:
 *   1. Adicione <klini-toast /> (ou <klini-toast key="main" />) no template do componente raiz.
 *   2. Injete KliniToastService e chame .show({ ... }) para exibir mensagens.
 *
 * Estilização 100% via KliniPrime theme preset.
 */
@Component({
  selector: 'kln-toast',
  standalone: true,
  imports: [ToastModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MessageService],
  template: `
    <p-toast
      [key]="key"
      [position]="position"
      [life]="life"
      [baseZIndex]="baseZIndex"
      [styleClass]="styleClass"
    />
  `,
})
export class ToastComponent {
  @Input() key         = '';
  @Input() position: KliniToastPosition = 'top-right';
  @Input() life        = 4000;
  @Input() baseZIndex  = 500;
  @Input() styleClass  = '';
}

/**
 * Serviço auxiliar — injete nos componentes que precisam disparar toasts.
 * Provê tipagem Klini sobre o MessageService do PrimeNG.
 */
export class KliniToastService {
  private readonly ms = inject(MessageService);

  show(msg: KliniToastMessage): void {
    this.ms.add({
      severity: msg.severity ?? 'info',
      summary:  msg.summary,
      detail:   msg.detail,
      life:     msg.life,
      sticky:   msg.sticky,
      key:      msg.key,
    });
  }

  success(detail: string, summary = 'Sucesso')   { this.show({ severity: 'success', summary, detail }); }
  error  (detail: string, summary = 'Erro')       { this.show({ severity: 'error',   summary, detail }); }
  warn   (detail: string, summary = 'Atenção')    { this.show({ severity: 'warn',    summary, detail }); }
  info   (detail: string, summary = 'Informação') { this.show({ severity: 'info',    summary, detail }); }

  clear(key?: string): void { this.ms.clear(key); }
}
