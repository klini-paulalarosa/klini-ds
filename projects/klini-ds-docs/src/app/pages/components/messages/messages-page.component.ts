import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnMessagesComponent } from '@klini-saude/ds';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-messages-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnMessagesComponent, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">Messages</h1>
        <span class="badge badge--version">kln-messages</span>
      </div>
      <p class="docs-page-description">
        Lista de múltiplas mensagens. Wrapper sobre <code class="font-mono">p-messages</code> do PrimeNG.
        Exibe o resultado de um processo de autorização com múltiplos alertas simultâneos.
      </p>

      <div class="docs-section">
        <h2>Resultado de autorização</h2>
        <p>Múltiplas mensagens retornadas pelo processo de autorização do procedimento.</p>
        <app-component-preview [code]="codeAuth">
          <div preview>
            <kln-messages [value]="msgAutorizacao" />
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Avisos de carência</h2>
        <app-component-preview [code]="codeCarencia">
          <div preview>
            <kln-messages [value]="msgCarencia" [closable]="false" />
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Props</h2>
        <app-props-table [props]="props" />
      </div>
    </div>
  `,
})
export class MessagesPageComponent {
  msgAutorizacao = [
    { severity: 'success', summary: 'Autorização aprovada', detail: 'Consulta de cardiologia autorizada. Guia: 2024-00123.' },
    { severity: 'warn', summary: 'Limite próximo', detail: 'Restam 2 consultas de especialidade no período.' },
  ];

  msgCarencia = [
    { severity: 'info', summary: 'Carência em andamento', detail: 'Consultas: 30 dias (vence 01/08/2026).' },
    { severity: 'info', summary: 'Carência em andamento', detail: 'Internações: 180 dias (vence 01/01/2027).' },
    { severity: 'warn', summary: 'Urgência e emergência', detail: 'Cobertura imediata para urgência e emergência.' },
  ];

  codeAuth = `<kln-messages [value]="msgAutorizacao" />

// No componente:
msgAutorizacao = [
  { severity: 'success', summary: 'Aprovada', detail: 'Guia: 2024-00123.' },
  { severity: 'warn', summary: 'Limite próximo', detail: 'Restam 2 consultas.' },
];`;

  codeCarencia = `<kln-messages [value]="msgCarencia" [closable]="false" />`;

  props: PropDef[] = [
    { name: 'value', type: 'ToastMessageOptions[]', default: '[]', description: 'Array de mensagens (severity, summary, detail).' },
    { name: 'closable', type: 'boolean', default: 'true', description: 'Exibe botão para fechar cada mensagem.' },
    { name: 'enableService', type: 'boolean', default: 'false', description: 'Escuta MessageService para mensagens dinâmicas.' },
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais.' },
  ];
}
