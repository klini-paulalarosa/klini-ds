import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnTreeComponent } from '@klini-saude/ds';
import { TreeNode } from 'primeng/api';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-tree-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnTreeComponent, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">Tree</h1>
        <span class="badge badge--version">kln-tree</span>
      </div>
      <p class="docs-page-description">
        Árvore hierárquica com expansão e seleção. Wrapper sobre <code class="font-mono">p-tree</code> do PrimeNG.
        Usado para navegação da rede de prestadores (Estado > Cidade > Clínica).
      </p>

      <div class="docs-section">
        <h2>Rede credenciada</h2>
        <app-component-preview [code]="codeRede">
          <div preview>
            <kln-tree [nodes]="redePrestadores" selectionMode="single" />
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Com filtro</h2>
        <app-component-preview [code]="codeFiltro">
          <div preview>
            <kln-tree [nodes]="redePrestadores" [filter]="true" selectionMode="single" />
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
export class TreePageComponent {
  redePrestadores: TreeNode[] = [
    {
      label: 'São Paulo',
      icon: 'pi pi-map-marker',
      expanded: true,
      children: [
        {
          label: 'Zona Sul',
          icon: 'pi pi-building',
          children: [
            { label: 'Clínica Klini Sul', icon: 'pi pi-heart', type: 'clinica' },
            { label: 'Lab Klini Sul', icon: 'pi pi-flask', type: 'lab' },
          ],
        },
        {
          label: 'Zona Centro',
          icon: 'pi pi-building',
          children: [
            { label: 'Clínica Klini Centro', icon: 'pi pi-heart', type: 'clinica' },
            { label: 'Hospital São Camilo', icon: 'pi pi-home', type: 'hospital' },
          ],
        },
      ],
    },
    {
      label: 'Santo André',
      icon: 'pi pi-map-marker',
      children: [
        { label: 'Clínica Ortopédica ABC', icon: 'pi pi-heart', type: 'clinica' },
        { label: 'Lab ABC', icon: 'pi pi-flask', type: 'lab' },
      ],
    },
  ];

  codeRede = `<kln-tree [nodes]="redePrestadores" selectionMode="single" />

// No componente:
redePrestadores: TreeNode[] = [
  {
    label: 'São Paulo',
    icon: 'pi pi-map-marker',
    children: [
      {
        label: 'Zona Sul',
        children: [
          { label: 'Clínica Klini Sul', icon: 'pi pi-heart' },
        ],
      },
    ],
  },
];`;

  codeFiltro = `<kln-tree [nodes]="redePrestadores" [filter]="true" selectionMode="single" />`;

  props: PropDef[] = [
    { name: 'nodes', type: 'TreeNode[]', default: '[]', description: 'Array de nós da árvore.', required: true },
    { name: 'selectionMode', type: "'single' | 'multiple' | 'checkbox' | null", default: 'null', description: 'Modo de seleção.' },
    { name: 'selection', type: 'TreeNode | TreeNode[] | null', default: 'null', description: 'Nó(s) selecionado(s).' },
    { name: 'filter', type: 'boolean', default: 'false', description: 'Exibe campo de busca.' },
    { name: 'loading', type: 'boolean', default: 'false', description: 'Estado de carregamento.' },
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais.' },
  ];
}
