import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnPaginatorComponent } from '@klini-saude/ds';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-paginator-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnPaginatorComponent, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">Paginator</h1>
        <span class="badge badge--version">kln-paginator</span>
      </div>
      <p class="docs-page-description">
        Componente de paginação para tabelas e listas. Wrapper sobre <code class="font-mono">p-paginator</code> do PrimeNG.
        Usado em tabelas de guias, autorizações e histórico de consultas.
      </p>

      <div class="docs-section">
        <h2>Paginação de guias</h2>
        <app-component-preview [code]="codeGuias">
          <div preview>
            <div style="font-size:13px;color:var(--docs-text-muted);margin-bottom:8px">
              Exibindo {{ first + 1 }}–{{ min(first + rows, total) }} de {{ total }} guias
            </div>
            <kln-paginator
              [totalRecords]="total"
              [rows]="rows"
              [first]="first"
              [rowsPerPageOptions]="[10, 25, 50]"
              (pageChange)="onPage($event)"
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
export class PaginatorPageComponent {
  total = 247;
  rows = 10;
  first = 0;

  min(a: number, b: number): number {
    return Math.min(a, b);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onPage(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }

  codeGuias = `<kln-paginator
  [totalRecords]="total"
  [rows]="rows"
  [first]="first"
  [rowsPerPageOptions]="[10, 25, 50]"
  (pageChange)="onPage($event)"
/>

// No componente:
onPage(event: any) {
  this.first = event.first;
  this.rows = event.rows;
}`;

  props: PropDef[] = [
    { name: 'totalRecords', type: 'number', default: '0', description: 'Total de registros.' },
    { name: 'rows', type: 'number', default: '10', description: 'Registros por página.' },
    { name: 'first', type: 'number', default: '0', description: 'Índice do primeiro registro exibido.' },
    { name: 'rowsPerPageOptions', type: 'number[]', default: '[10, 25, 50]', description: 'Opções de registros por página.' },
    { name: 'showJumpToPage', type: 'boolean', default: 'false', description: 'Exibe campo para ir a página específica.' },
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais.' },
  ];
}
