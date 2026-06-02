import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnToggleButtonComponent } from '@klini-saude/ds';
import { FormsModule } from '@angular/forms';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-toggle-button-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnToggleButtonComponent, FormsModule, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">ToggleButton</h1>
        <span class="badge badge--version">kln-toggle-button</span>
      </div>
      <p class="docs-page-description">
        Botão de alternância com estados ligado/desligado. Wrapper sobre <code class="font-mono">p-togglebutton</code> do PrimeNG.
        Útil para ativar/desativar notificações e preferências do beneficiário.
      </p>

      <div class="docs-section">
        <h2>Notificações por e-mail</h2>
        <p>Ativar ou desativar alertas de cobrança e autorizações.</p>
        <app-component-preview [code]="codeNotif">
          <div preview style="display:flex;flex-direction:column;gap:16px">
            <kln-toggle-button
              [(ngModel)]="notificacoes"
              onLabel="Notificações ativas"
              offLabel="Notificações desativadas"
              onIcon="pi pi-bell"
              offIcon="pi pi-bell-slash"
            />
            <span style="font-size:13px;color:var(--docs-text-muted)">Estado: {{ notificacoes ? 'Ativo' : 'Inativo' }}</span>
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Plano ativo/suspenso</h2>
        <app-component-preview [code]="codePlano">
          <div preview style="display:flex;flex-direction:column;gap:16px">
            <kln-toggle-button
              [(ngModel)]="planoAtivo"
              onLabel="Plano ativo"
              offLabel="Plano suspenso"
              onIcon="pi pi-check-circle"
              offIcon="pi pi-times-circle"
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
export class ToggleButtonPageComponent {
  notificacoes = true;
  planoAtivo = true;

  codeNotif = `<kln-toggle-button
  [(ngModel)]="notificacoes"
  onLabel="Notificações ativas"
  offLabel="Notificações desativadas"
  onIcon="pi pi-bell"
  offIcon="pi pi-bell-slash"
/>`;

  codePlano = `<kln-toggle-button
  [(ngModel)]="planoAtivo"
  onLabel="Plano ativo"
  offLabel="Plano suspenso"
  onIcon="pi pi-check-circle"
  offIcon="pi pi-times-circle"
/>`;

  props: PropDef[] = [
    { name: 'value', type: 'boolean', default: 'false', description: 'Estado do botão (ngModel).' },
    { name: 'onLabel', type: 'string', default: "'Sim'", description: 'Rótulo quando ativo.' },
    { name: 'offLabel', type: 'string', default: "'Não'", description: 'Rótulo quando inativo.' },
    { name: 'onIcon', type: 'string', default: "''", description: 'Ícone quando ativo (ex: pi pi-check).' },
    { name: 'offIcon', type: 'string', default: "''", description: 'Ícone quando inativo.' },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Desabilita o botão.' },
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais.' },
  ];
}
