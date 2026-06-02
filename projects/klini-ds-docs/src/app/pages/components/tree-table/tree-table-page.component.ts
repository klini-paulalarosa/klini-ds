import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnTreeTableComponent } from '@klini-saude/ds';
import { TreeTableModule } from 'primeng/treetable';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-tree-table-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnTreeTableComponent, TreeTableModule, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">TreeTable</h1>
        <span class="badge badge--version">kln-tree-table</span>
      </div>
      <p class="docs-page-description">
        Tabela hierárquica com expansão de linhas. Wrapper sobre <code class="font-mono">p-treetable</code> do PrimeNG.
        Usado para exibir coberturas por grupo de procedimentos e custo por categoria.
      </p>

      <div class="docs-section">
        <h2>Coberturas por grupo CBHPM</h2>
        <app-component-preview [code]="codeCoberturas">
          <div preview>
            <kln-tree-table [value]="coberturas">
              <ng-template pTemplate="header">
                <tr>
                  <th style="padding:10px;text-align:left;font-size:13px;border-bottom:1px solid var(--docs-border)">Procedimento</th>
                  <th style="padding:10px;text-align:left;font-size:13px;border-bottom:1px solid var(--docs-border)">Cobertura</th>
                  <th style="padding:10px;text-align:left;font-size:13px;border-bottom:1px solid var(--docs-border)">Limite</th>
                </tr>
              </ng-template>
              <ng-template pTemplate="body" let-rowNode let-rowData="rowData">
                <tr [ttRow]="rowNode" style="border-bottom:1px solid var(--docs-border)">
                  <td style="padding:8px 10px;font-size:13px">
                    <p-treeTableToggler [rowNode]="rowNode" />
                    {{ rowData.nome }}
                  </td>
                  <td style="padding:8px 10px;font-size:13px">{{ rowData.cobertura }}</td>
                  <td style="padding:8px 10px;font-size:13px">{{ rowData.limite }}</td>
                </tr>
              </ng-template>
            </kln-tree-table>
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
export class TreeTablePageComponent {
  coberturas = [
    {
      data: { nome: 'Consultas (Grupo 1)', cobertura: '100%', limite: 'Ilimitado' },
      children: [
        { data: { nome: '1.01.01.01 — Consultório', cobertura: '100%', limite: 'Ilimitado' } },
        { data: { nome: '1.01.01.02 — Telemedicina', cobertura: '100%', limite: '6/mês' } },
      ],
    },
    {
      data: { nome: 'Diagnóstico (Grupo 4)', cobertura: '80%', limite: 'R$ 5.000/ano' },
      children: [
        { data: { nome: '4.01 — Radiologia', cobertura: '80%', limite: '12/ano' } },
        { data: { nome: '4.03 — Ressonância', cobertura: '80%', limite: '4/ano' } },
      ],
    },
  ];

  codeCoberturas = `<!-- Importe TreeTableModule de primeng/treetable -->
<kln-tree-table [value]="coberturas">
  <ng-template pTemplate="header">
    <tr>
      <th>Procedimento</th>
      <th>Cobertura</th>
      <th>Limite</th>
    </tr>
  </ng-template>
  <ng-template pTemplate="body" let-rowNode let-rowData="rowData">
    <tr [ttRow]="rowNode">
      <td>
        <p-treeTableToggler [rowNode]="rowNode" />
        {{ rowData.nome }}
      </td>
      <td>{{ rowData.cobertura }}</td>
      <td>{{ rowData.limite }}</td>
    </tr>
  </ng-template>
</kln-tree-table>`;

  props: PropDef[] = [
    { name: 'value', type: 'any[]', default: '[]', description: 'Array de nós da tabela hierárquica.' },
    { name: 'rows', type: 'number', default: '10', description: 'Linhas por página (quando paginator ativo).' },
    { name: 'paginator', type: 'boolean', default: 'false', description: 'Habilita paginação.' },
    { name: 'scrollable', type: 'boolean', default: 'false', description: 'Habilita scroll horizontal.' },
    { name: 'scrollHeight', type: 'string', default: "''", description: 'Altura máxima com scroll vertical.' },
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais.' },
  ];
}
