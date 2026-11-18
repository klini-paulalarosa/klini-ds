import { Component, Input, ChangeDetectionStrategy, inject } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

export type KlnToastSeverity = 'success' | 'warn' | 'error' | 'info' | 'secondary' | 'contrast';

export type KlnToastPosition =
  | 'top-right' | 'top-left' | 'top-center'
  | 'bottom-right' | 'bottom-left' | 'bottom-center'
  | 'center';

export interface KlnToastMessage {
  severity?: KlnToastSeverity;
  summary?: string;
  detail:   string;
  life?:    number;
  sticky?:  boolean;
  key?:     string;
}

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
  @Input() position: KlnToastPosition = 'top-right';
  @Input() life        = 4000;
  @Input() baseZIndex  = 500;
  @Input() styleClass  = '';
}

export class KlnToastService {
  private readonly ms = inject(MessageService);

  show(msg: KlnToastMessage): void {
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
