import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnOrganizationChartComponent } from '@klini-saude/ds';
import { TreeNode } from 'primeng/api';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-organization-chart-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnOrganizationChartComponent, OrganizationChartModule, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">OrganizationChart</h1>
        <span class="badge badge--version">kln-organization-chart</span>
      </div>
      <p class="docs-page-description">
        Gráfico de organização hierárquica. Wrapper sobre <code class="font-mono">p-organizationchart</code> do PrimeNG.
        Usado para visualizar hierarquia de planos, grupos de beneficiários e estrutura de prestadores.
      </p>

      <div class="docs-section">
        <h2>Estrutura de planos Klini</h2>
        <app-component-preview [code]="codePlanos">
          <div preview style="overflow:auto;padding:16px">
            <kln-organization-chart [value]="estruturaPlanos">
              <ng-template pTemplate="default" let-node>
                <div style="padding:8px 16px;background:var(--docs-sidebar-bg);border:1px solid var(--docs-border);border-radius:6px;text-align:center;min-width:120px">
                  <div style="font-size:13px;font-weight:600;color:var(--docs-text)">{{ node.label }}</div>
                  @if (node.data) {
                    <div style="font-size:11px;color:var(--docs-text-muted)">{{ node.data }}</div>
                  }
                </div>
              </ng-template>
            </kln-organization-chart>
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
export class OrganizationChartPageComponent {
  estruturaPlanos: TreeNode[] = [
    {
      label: 'Klini Saúde',
      data: 'Operadora ANS',
      expanded: true,
      children: [
        {
          label: 'Pessoa Jurídica',
          data: 'PJ',
          expanded: true,
          children: [
            { label: 'Start PJ', data: 'R$ 289,90' },
            { label: 'Plus PJ', data: 'R$ 389,90' },
            { label: 'Premium PJ', data: 'R$ 489,90' },
          ],
        },
        {
          label: 'Pessoa Física',
          data: 'PF',
          expanded: true,
          children: [
            { label: 'Start PF', data: 'R$ 319,90' },
            { label: 'Plus PF', data: 'R$ 419,90' },
          ],
        },
      ],
    },
  ];

  codePlanos = `<kln-organization-chart [value]="estruturaPlanos">
  <ng-template pTemplate="default" let-node>
    <div>
      <div>{{ node.label }}</div>
      @if (node.data) {
        <div>{{ node.data }}</div>
      }
    </div>
  </ng-template>
</kln-organization-chart>`;

  props: PropDef[] = [
    { name: 'value', type: 'TreeNode[]', default: '[]', description: 'Nó raiz da hierarquia.' },
    { name: 'selectionMode', type: "'single' | 'multiple' | undefined", default: 'undefined', description: 'Modo de seleção.' },
    { name: 'selection', type: 'any', default: 'null', description: 'Nó(s) selecionado(s).' },
    { name: 'collapsible', type: 'boolean', default: 'false', description: 'Permite colapsar nós.' },
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais.' },
  ];
}
