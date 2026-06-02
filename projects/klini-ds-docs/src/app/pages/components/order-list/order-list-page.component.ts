import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnOrderListComponent } from '@klini-saude/ds';
import { OrderListModule } from 'primeng/orderlist';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-order-list-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnOrderListComponent, OrderListModule, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">OrderList</h1>
        <span class="badge badge--version">kln-order-list</span>
      </div>
      <p class="docs-page-description">
        Lista reordenável de itens. Wrapper sobre <code class="font-mono">p-orderlist</code> do PrimeNG.
        Usado para definir prioridade de procedimentos em solicitações de autorização.
      </p>

      <div class="docs-section">
        <h2>Procedimentos por prioridade</h2>
        <p>Arraste ou use os botões para reordenar a lista de procedimentos.</p>
        <app-component-preview [code]="codeProcedimentos">
          <div preview>
            <kln-order-list [value]="procedimentos" header="Procedimentos por prioridade">
              <ng-template pTemplate="item" let-item>
                <div style="display:flex;align-items:center;gap:8px;padding:4px 0">
                  <i class="pi pi-list" style="color:var(--docs-text-muted)"></i>
                  <div>
                    <div style="font-size:13px;font-weight:600;color:var(--docs-text)">{{ item.nome }}</div>
                    <div style="font-size:11px;color:var(--docs-text-muted)">{{ item.codigo }}</div>
                  </div>
                </div>
              </ng-template>
            </kln-order-list>
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
export class OrderListPageComponent {
  procedimentos = [
    { nome: 'Consulta Cardiologia', codigo: '1.01.01.01-1' },
    { nome: 'ECG — Eletrocardiograma', codigo: '2.01.01.07-0' },
    { nome: 'Ecocardiograma', codigo: '2.02.04.49-9' },
    { nome: 'Holter 24h', codigo: '2.02.04.26-0' },
    { nome: 'Teste Ergométrico', codigo: '2.02.04.37-5' },
  ];

  codeProcedimentos = `<kln-order-list [value]="procedimentos" header="Procedimentos">
  <ng-template pTemplate="item" let-item>
    <div>
      <strong>{{ item.nome }}</strong>
      <small>{{ item.codigo }}</small>
    </div>
  </ng-template>
</kln-order-list>`;

  props: PropDef[] = [
    { name: 'value', type: 'unknown[]', default: '[]', description: 'Array de itens da lista.', required: true },
    { name: 'header', type: 'string', default: "''", description: 'Título da lista.' },
    { name: 'filterBy', type: 'string', default: "''", description: 'Campo de filtro de busca.' },
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais.' },
  ];
}
