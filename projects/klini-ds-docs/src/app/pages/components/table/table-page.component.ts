import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnTableComponent, KlnTableColumn } from '@klini-saude/ds';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';
import { CodeBlockComponent } from '../../../shared/code-block/code-block.component';

interface Beneficiario extends Record<string, unknown> {
  nome: string;
  plano: string;
  status: string;
  sinistro: number;
  adesao: string;
}

@Component({
  selector: 'app-table-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnTableComponent, ComponentPreviewComponent, PropsTableComponent, CodeBlockComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">Table</h1>
        <span class="badge badge--version">kln-table</span>
      </div>
      <p class="docs-page-description">
        Tabela de dados baseada no <code class="font-mono">p-table</code> do PrimeNG.
        Suporte a colunas configuráveis via <code class="font-mono">KlnTableColumn[]</code>,
        ordenação, paginação, estado de carregamento e seleção de linhas.
      </p>

      <!-- Básico -->
      <div class="docs-section">
        <h2>Tabela básica</h2>
        <app-component-preview [code]="basicCode">
          <div preview style="width:100%">
            <kln-table [columns]="columns" [value]="beneficiarios" />
          </div>
        </app-component-preview>
      </div>

      <!-- Ordenável -->
      <div class="docs-section">
        <h2>Com ordenação</h2>
        <p>Passe <code class="font-mono">sortable: true</code> nas colunas para habilitar ordenação por clique no header.</p>
        <app-component-preview [code]="sortableCode">
          <div preview style="width:100%">
            <kln-table [columns]="sortableColumns" [value]="beneficiarios" />
          </div>
        </app-component-preview>
      </div>

      <!-- Paginado -->
      <div class="docs-section">
        <h2>Com paginação</h2>
        <app-component-preview [code]="pagedCode">
          <div preview style="width:100%">
            <kln-table
              [columns]="columns"
              [value]="beneficiarios"
              [paginator]="true"
              [pageSize]="3"
              [rowsPerPageOptions]="[3, 5, 10]"
            />
          </div>
        </app-component-preview>
      </div>

      <!-- Loading -->
      <div class="docs-section">
        <h2>Estado de carregamento</h2>
        <app-component-preview [code]="loadingCode">
          <div preview style="width:100%">
            <kln-table [columns]="columns" [value]="[]" [loading]="true" />
          </div>
        </app-component-preview>
      </div>

      <!-- Column config -->
      <div class="docs-section">
        <h2>Configuração de colunas (KlnTableColumn)</h2>
        <app-code-block language="typescript" [code]="columnConfigCode" />
      </div>

      <!-- Props -->
      <div class="docs-section">
        <h2>Props</h2>
        <app-props-table [props]="props" />
      </div>
    </div>
  `,
})
export class TablePageComponent {
  columns: KlnTableColumn[] = [
    { field: 'nome', header: 'Beneficiário' },
    { field: 'plano', header: 'Plano' },
    { field: 'status', header: 'Status' },
    { field: 'sinistro', header: 'Sinistro (R$)' },
    { field: 'adesao', header: 'Adesão' },
  ];

  sortableColumns: KlnTableColumn[] = [
    { field: 'nome', header: 'Beneficiário', sortable: true },
    { field: 'plano', header: 'Plano', sortable: true },
    { field: 'status', header: 'Status' },
    { field: 'sinistro', header: 'Sinistro (R$)', sortable: true },
    { field: 'adesao', header: 'Adesão', sortable: true },
  ];

  beneficiarios: Beneficiario[] = [
    { nome: 'Paula Rosa', plano: 'Klini Start PJ', status: 'Ativo', sinistro: 1842, adesao: '01/03/2023' },
    { nome: 'Carlos Mendes', plano: 'Klini Plus', status: 'Ativo', sinistro: 3210, adesao: '15/06/2022' },
    { nome: 'Ana Ferreira', plano: 'Klini Start PJ', status: 'Carência', sinistro: 0, adesao: '01/05/2026' },
    { nome: 'Roberto Lima', plano: 'Klini Plus', status: 'Ativo', sinistro: 5680, adesao: '10/01/2021' },
    { nome: 'Juliana Costa', plano: 'Klini Start', status: 'Suspenso', sinistro: 920, adesao: '20/09/2022' },
    { nome: 'Marcos Oliveira', plano: 'Klini Plus', status: 'Ativo', sinistro: 2140, adesao: '03/07/2023' },
  ];

  basicCode = `import { KlnTableComponent, KlnTableColumn } from '@klini-saude/ds';

columns: KlnTableColumn[] = [
  { field: 'nome',     header: 'Beneficiário' },
  { field: 'plano',    header: 'Plano' },
  { field: 'status',   header: 'Status' },
  { field: 'sinistro', header: 'Sinistro (R$)' },
  { field: 'adesao',   header: 'Adesão' },
];

// template
<kln-table [columns]="columns" [value]="beneficiarios" />`;

  sortableCode = `columns: KlnTableColumn[] = [
  { field: 'nome',     header: 'Beneficiário', sortable: true },
  { field: 'sinistro', header: 'Sinistro (R$)', sortable: true },
];

<kln-table [columns]="columns" [value]="data" />`;

  pagedCode = `<kln-table
  [columns]="columns"
  [value]="beneficiarios"
  [paginator]="true"
  [pageSize]="10"
  [rowsPerPageOptions]="[10, 25, 50]"
/>`;

  loadingCode = `<kln-table
  [columns]="columns"
  [value]="[]"
  [loading]="isLoading"
/>

// No componente:
isLoading = true;
ngOnInit() {
  this.service.getBeneficiarios().subscribe(list => {
    this.beneficiarios = list;
    this.isLoading = false;
  });
}`;

  columnConfigCode = `export interface KlnTableColumn {
  field: string;       // Chave do objeto de dados
  header: string;      // Texto do cabeçalho
  sortable?: boolean;  // Habilita ordenação por clique no header
  width?: string;      // Largura da coluna (ex: '200px', '20%')
}`;

  props: PropDef[] = [
    { name: 'columns', type: 'KlnTableColumn[]', default: '[]', description: 'Definição das colunas da tabela.', required: true },
    { name: 'value', type: 'Record<string, unknown>[]', default: '[]', description: 'Array de objetos com os dados a exibir.' },
    { name: 'loading', type: 'boolean', default: 'false', description: 'Exibe skeleton de carregamento.' },
    { name: 'paginator', type: 'boolean', default: 'false', description: 'Habilita paginação.' },
    { name: 'pageSize', type: 'number', default: '10', description: 'Linhas por página.' },
    { name: 'rowsPerPageOptions', type: 'number[]', default: '[10, 25, 50]', description: 'Opções de linhas por página.' },
    { name: 'emptyMessage', type: 'string', default: "'Nenhum resultado encontrado.'", description: 'Mensagem exibida quando não há dados.' },
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais para o container da tabela.' },
  ];
}
