import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MessageComponent } from '@klini-saude/ds';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-message-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MessageComponent, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">Message</h1>
        <span class="badge badge--version">kln-message</span>
      </div>
      <p class="docs-page-description">
        Mensagem de alerta inline. Wrapper sobre <code class="font-mono">p-message</code> do PrimeNG.
        Usado para feedback de validação de formulários de autorização.
      </p>

      <div class="docs-section">
        <h2>Severidades</h2>
        <p>Quatro níveis de severidade para diferentes contextos do plano de saúde.</p>
        <app-component-preview [code]="codeAll">
          <div preview style="display:flex;flex-direction:column;gap:12px">
            <kln-message severity="success" text="Autorização de consulta aprovada com sucesso." />
            <kln-message severity="info" text="Sua carência para consultas encerra em 30 dias." />
            <kln-message severity="warn" text="Documento pendente: comprovante de residência." />
            <kln-message severity="error" text="CPF inválido. Verifique os dados informados." />
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Mensagem dispensável</h2>
        <p>Com botão de fechar para alertas não críticos.</p>
        <app-component-preview [code]="codeClosable">
          <div preview>
            <kln-message
              severity="info"
              text="Novo benefício disponível: Telemedicina ilimitada a partir de julho."
              [closable]="true"
            />
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
export class MessagePageComponent {
  codeAll = `<kln-message severity="success" text="Autorização aprovada com sucesso." />
<kln-message severity="info" text="Sua carência encerra em 30 dias." />
<kln-message severity="warn" text="Documento pendente: comprovante de residência." />
<kln-message severity="error" text="CPF inválido. Verifique os dados." />`;

  codeClosable = `<kln-message
  severity="info"
  text="Novo benefício disponível: Telemedicina ilimitada."
  [closable]="true"
/>`;

  props: PropDef[] = [
    { name: 'text', type: 'string', default: "''", description: 'Texto da mensagem.', required: true },
    { name: 'severity', type: "'success' | 'info' | 'warn' | 'error'", default: "'info'", description: 'Nível de severidade.' },
    { name: 'icon', type: 'string', default: "''", description: 'Ícone personalizado (ex: pi pi-shield).' },
    { name: 'closable', type: 'boolean', default: 'false', description: 'Exibe botão para fechar a mensagem.' },
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais.' },
  ];
}
