import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StatusPillComponent } from '@klini-saude/ds';
import type { StatusPillValue } from '@klini-saude/ds';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-status-pill-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [StatusPillComponent, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">Status Pill</h1>
        <span class="badge badge--version">kln-status-pill</span>
      </div>
      <p class="docs-page-description">
        Indicador visual de status para autorizações, consultas e coberturas do plano de saúde.
        Cada status possui cor e semântica específicas para o contexto Klini Saúde.
      </p>

      <!-- Todos os status -->
      <div class="docs-section">
        <h2>Todos os status</h2>
        <p>Os 5 valores possíveis de <code class="font-mono">StatusPillValue</code> com suas cores semânticas.</p>
        <app-component-preview [code]="allStatusCode">
          <div preview style="display:flex;gap:12px;flex-wrap:wrap;align-items:center">
            @for (item of statuses; track item.status) {
              <kln-status-pill [status]="item.status" />
            }
          </div>
        </app-component-preview>
      </div>

      <!-- Com label customizado -->
      <div class="docs-section">
        <h2>Com label customizado</h2>
        <p>Sobrescreva o texto padrão com <code class="font-mono">[label]</code> para contextos específicos.</p>
        <app-component-preview [code]="customLabelCode">
          <div preview style="display:flex;gap:12px;flex-wrap:wrap;align-items:center">
            <kln-status-pill status="autorizada" label="Consulta Aprovada" />
            <kln-status-pill status="negado" label="Procedimento Negado" />
            <kln-status-pill status="em-processo" label="Aguardando Análise" />
            <kln-status-pill status="parcialmente" label="Cob. Parcial" />
            <kln-status-pill status="inativa" label="Contrato Encerrado" />
          </div>
        </app-component-preview>
      </div>

      <!-- Em tabela -->
      <div class="docs-section">
        <h2>Em tabela</h2>
        <p>Uso típico em tabelas de consultas, autorizações e histórico de atendimentos.</p>
        <app-component-preview [code]="tableCode">
          <div preview>
            <table style="width:100%;border-collapse:collapse;font-size:0.9rem">
              <thead>
                <tr style="background:var(--docs-sidebar-bg);border-bottom:2px solid var(--docs-border)">
                  <th style="text-align:left;padding:10px 12px">Procedimento</th>
                  <th style="text-align:left;padding:10px 12px">Médico</th>
                  <th style="text-align:left;padding:10px 12px">Data</th>
                  <th style="text-align:left;padding:10px 12px">Status</th>
                </tr>
              </thead>
              <tbody>
                @for (row of tableRows; track row.procedimento) {
                  <tr style="border-bottom:1px solid var(--docs-border)">
                    <td style="padding:10px 12px">{{ row.procedimento }}</td>
                    <td style="padding:10px 12px">{{ row.medico }}</td>
                    <td style="padding:10px 12px">{{ row.data }}</td>
                    <td style="padding:10px 12px">
                      <kln-status-pill [status]="row.status" />
                    </td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        </app-component-preview>
      </div>

      <!-- Props -->
      <div class="docs-section">
        <h2>Props</h2>
        <app-props-table [props]="props" />
      </div>

      <!-- Referência de valores -->
      <div class="docs-section">
        <h2>StatusPillValue — referência</h2>
        <app-props-table [props]="statusReference" />
      </div>
    </div>
  `,
})
export class StatusPillPageComponent {
  statuses: { status: StatusPillValue; label: string }[] = [
    { status: 'autorizada', label: 'Autorizada' },
    { status: 'negado', label: 'Negado' },
    { status: 'em-processo', label: 'Em processo' },
    { status: 'parcialmente', label: 'Parcialmente' },
    { status: 'inativa', label: 'Inativa' },
  ];

  tableRows: { procedimento: string; medico: string; data: string; status: StatusPillValue }[] = [
    { procedimento: 'Ressonância Magnética', medico: 'Dr. Marcos Oliveira', data: '10/05/2025', status: 'autorizada' },
    { procedimento: 'Cirurgia Ortopédica', medico: 'Dra. Ana Costa', data: '02/05/2025', status: 'em-processo' },
    { procedimento: 'Tomografia Abdominal', medico: 'Dr. Paulo Lima', data: '28/04/2025', status: 'negado' },
    { procedimento: 'Fisioterapia (20 sessões)', medico: 'Ft. Carla Mendes', data: '15/04/2025', status: 'parcialmente' },
    { procedimento: 'Consulta Dermatologia', medico: 'Dra. Fernanda Reis', data: '01/03/2025', status: 'inativa' },
  ];

  allStatusCode = `// Classe
statuses: { status: StatusPillValue; label: string }[] = [
  { status: 'autorizada',   label: 'Autorizada' },
  { status: 'negado',       label: 'Negado' },
  { status: 'em-processo',  label: 'Em processo' },
  { status: 'parcialmente', label: 'Parcialmente' },
  { status: 'inativa',      label: 'Inativa' },
];

// Template
@for (item of statuses; track item.status) {
  <kln-status-pill [status]="item.status" />
}`;

  customLabelCode = `<kln-status-pill status="autorizada"   label="Consulta Aprovada" />
<kln-status-pill status="negado"       label="Procedimento Negado" />
<kln-status-pill status="em-processo"  label="Aguardando Análise" />
<kln-status-pill status="parcialmente" label="Cob. Parcial" />
<kln-status-pill status="inativa"      label="Contrato Encerrado" />`;

  tableCode = `@for (row of tableRows; track row.procedimento) {
  <tr>
    <td>{{ row.procedimento }}</td>
    <td>{{ row.medico }}</td>
    <td>{{ row.data }}</td>
    <td><kln-status-pill [status]="row.status" /></td>
  </tr>
}`;

  props: PropDef[] = [
    { name: 'status', type: 'StatusPillValue', default: '—', description: "OBRIGATÓRIO. Um dos 5 valores: 'autorizada' | 'negado' | 'em-processo' | 'parcialmente' | 'inativa'." },
    { name: 'label', type: 'string', default: 'undefined', description: 'Sobrescreve o texto padrão do status. Opcional.' },
  ];

  // Familia de cor conforme _status.scss — valores exatos do DS
  statusReference: PropDef[] = [
    { name: "'autorizada'",   type: 'Teal — #259591',    default: '--kln-status-autorizada-*',   description: 'Procedimento ou consulta autorizada pelo plano.' },
    { name: "'negado'",       type: 'Coral — #E05759',   default: '--kln-status-negado-*',       description: 'Procedimento negado pela operadora.' },
    { name: "'em-processo'",  type: 'Slate — #90A4AE',   default: '--kln-status-em-processo-*',  description: 'Em análise, auditoria ou aguardando documentação.' },
    { name: "'parcialmente'", type: 'Sea — #6AA7AE',     default: '--kln-status-parcialmente-*', description: 'Autorização parcial — cobertura limitada pelo plano.' },
    { name: "'inativa'",      type: 'Orange — #CD7925',  default: '--kln-status-inativa-*',      description: 'Registro inativo, contrato encerrado ou carência não cumprida.' },
  ];
}
