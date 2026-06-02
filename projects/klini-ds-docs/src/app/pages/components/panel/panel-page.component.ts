import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnPanelComponent } from '@klini-saude/ds';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-panel-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnPanelComponent, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">Panel</h1>
        <span class="badge badge--version">kln-panel</span>
      </div>
      <p class="docs-page-description">
        Container colapsável com header. Wrapper sobre <code class="font-mono">p-panel</code> do PrimeNG.
        Usado para agrupar seções de formulários e detalhes do beneficiário.
      </p>

      <div class="docs-section">
        <h2>Padrão</h2>
        <app-component-preview [code]="codeBasic">
          <div preview style="display:flex;flex-direction:column;gap:16px">
            <kln-panel header="Dados do Titular">
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;font-size:13px">
                <div><span style="color:var(--docs-text-muted)">Nome:</span> <strong>Carlos Eduardo Silva</strong></div>
                <div><span style="color:var(--docs-text-muted)">CPF:</span> <strong>123.456.789-00</strong></div>
                <div><span style="color:var(--docs-text-muted)">Plano:</span> <strong>Klini Start PJ</strong></div>
                <div><span style="color:var(--docs-text-muted)">Carteirinha:</span> <strong>00123456789</strong></div>
              </div>
            </kln-panel>
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Colapsável</h2>
        <app-component-preview [code]="codeToggle">
          <div preview style="display:flex;flex-direction:column;gap:16px">
            <kln-panel header="Carências do Plano" [toggleable]="true">
              <table style="width:100%;border-collapse:collapse;font-size:13px">
                <tr style="border-bottom:1px solid var(--docs-border)">
                  <td style="padding:6px 0">Consultas</td>
                  <td style="padding:6px 0;text-align:right;color:var(--docs-text-muted)">30 dias</td>
                </tr>
                <tr style="border-bottom:1px solid var(--docs-border)">
                  <td style="padding:6px 0">Exames</td>
                  <td style="padding:6px 0;text-align:right;color:var(--docs-text-muted)">90 dias</td>
                </tr>
                <tr>
                  <td style="padding:6px 0">Internações</td>
                  <td style="padding:6px 0;text-align:right;color:var(--docs-text-muted)">180 dias</td>
                </tr>
              </table>
            </kln-panel>
            <kln-panel header="Cobertura de Urgência" [toggleable]="true" [collapsed]="true">
              <p style="font-size:13px;color:var(--docs-text-muted);margin:0">
                Urgência e emergência com cobertura imediata (sem carência) conforme resolução ANS.
              </p>
            </kln-panel>
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
export class PanelPageComponent {
  codeBasic = `<kln-panel header="Dados do Titular">
  <!-- conteúdo -->
</kln-panel>`;

  codeToggle = `<kln-panel header="Carências do Plano" [toggleable]="true">
  <!-- conteúdo colapsável -->
</kln-panel>

<kln-panel header="Cobertura de Urgência" [toggleable]="true" [collapsed]="true">
  <!-- inicia fechado -->
</kln-panel>`;

  props: PropDef[] = [
    { name: 'header', type: 'string', default: "''", description: 'Texto do cabeçalho do painel.' },
    { name: 'toggleable', type: 'boolean', default: 'false', description: 'Habilita botão de colapsar/expandir.' },
    { name: 'collapsed', type: 'boolean', default: 'false', description: 'Estado inicial colapsado.' },
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais.' },
  ];
}
