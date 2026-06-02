import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnPickListComponent } from '@klini-saude/ds';
import { PickListModule } from 'primeng/picklist';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-pick-list-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnPickListComponent, PickListModule, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">PickList</h1>
        <span class="badge badge--version">kln-pick-list</span>
      </div>
      <p class="docs-page-description">
        Transferência de itens entre duas listas. Wrapper sobre <code class="font-mono">p-picklist</code> do PrimeNG.
        Usado para mover dependentes entre grupos de cobertura e gerenciar coberturas do plano.
      </p>

      <div class="docs-section">
        <h2>Beneficiários por grupo</h2>
        <p>Mova beneficiários da lista disponível para o grupo selecionado.</p>
        <app-component-preview [code]="codeBeneficiarios">
          <div preview>
            <kln-pick-list
              [source]="beneficiariosDisponiveis"
              [target]="beneficiariosSelecionados"
              sourceHeader="Disponíveis"
              targetHeader="No grupo Plano Plus"
            >
              <ng-template pTemplate="item" let-item>
                <div style="padding:4px 0;font-size:13px">
                  <strong>{{ item.nome }}</strong>
                  <span style="color:var(--docs-text-muted);font-size:11px;margin-left:8px">{{ item.tipo }}</span>
                </div>
              </ng-template>
            </kln-pick-list>
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
export class PickListPageComponent {
  beneficiariosDisponiveis = [
    { nome: 'Carlos Eduardo Silva', tipo: 'Titular', cpf: '123.456.789-00' },
    { nome: 'Ana Paula Santos', tipo: 'Dependente', cpf: '987.654.321-00' },
    { nome: 'Lucas Silva', tipo: 'Dependente', cpf: '111.222.333-44' },
  ];

  beneficiariosSelecionados = [
    { nome: 'Beatriz Silva', tipo: 'Dependente', cpf: '555.666.777-88' },
  ];

  codeBeneficiarios = `<kln-pick-list
  [source]="beneficiariosDisponiveis"
  [target]="beneficiariosSelecionados"
  sourceHeader="Disponíveis"
  targetHeader="No grupo Plano Plus"
>
  <ng-template pTemplate="item" let-item>
    <div>
      <strong>{{ item.nome }}</strong>
      <span>{{ item.tipo }}</span>
    </div>
  </ng-template>
</kln-pick-list>`;

  props: PropDef[] = [
    { name: 'source', type: 'any[]', default: '[]', description: 'Array de itens da lista de origem.' },
    { name: 'target', type: 'any[]', default: '[]', description: 'Array de itens da lista de destino.' },
    { name: 'sourceHeader', type: 'string', default: "'Disponível'", description: 'Título da lista de origem.' },
    { name: 'targetHeader', type: 'string', default: "'Selecionado'", description: 'Título da lista de destino.' },
    { name: 'filterBy', type: 'string', default: "''", description: 'Campo usado para filtragem.' },
    { name: 'showSourceFilter', type: 'boolean', default: 'true', description: 'Exibe filtro na lista de origem.' },
    { name: 'showTargetFilter', type: 'boolean', default: 'true', description: 'Exibe filtro na lista de destino.' },
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais.' },
  ];
}
