import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnTreeSelectComponent } from '@klini-saude/ds';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TreeNode } from 'primeng/api';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-tree-select-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnTreeSelectComponent, FormsModule, CommonModule, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">TreeSelect</h1>
        <span class="badge badge--version">kln-tree-select</span>
      </div>
      <p class="docs-page-description">
        Seleção de nó em estrutura hierárquica com dropdown. Wrapper sobre <code class="font-mono">p-treeselect</code> do PrimeNG.
        Usado para seleção de procedimentos por grupo CBHPM.
      </p>

      <div class="docs-section">
        <h2>Seleção de procedimento</h2>
        <app-component-preview [code]="codeProcedimento">
          <div preview style="max-width:420px">
            <kln-tree-select
              [options]="procedimentos"
              placeholder="Selecione o procedimento..."
              selectionMode="single"
              [(ngModel)]="procedimentoSel"
            />
            @if (procedimentoSel) {
              <p style="font-size:13px;color:var(--docs-text-muted);margin-top:8px">
                Selecionado: {{ procedimentoSel | json }}
              </p>
            }
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Seleção múltipla com checkbox</h2>
        <app-component-preview [code]="codeMulti">
          <div preview style="max-width:420px">
            <kln-tree-select
              [options]="procedimentos"
              placeholder="Selecione procedimentos..."
              selectionMode="checkbox"
              [filter]="true"
              [(ngModel)]="procedimentosSel"
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
export class TreeSelectPageComponent {
  procedimentoSel: unknown = null;
  procedimentosSel: unknown = null;

  procedimentos: TreeNode[] = [
    {
      label: 'Consultas (Grupo 1)',
      key: 'G1',
      children: [
        { label: 'Consulta em consultório — 1.01.01.01-1', key: 'C01' },
        { label: 'Consulta por telemedicina — 1.01.01.02-9', key: 'C02' },
      ],
    },
    {
      label: 'Diagnóstico (Grupo 4)',
      key: 'G4',
      children: [
        { label: 'Ressonância magnética — 4.03.03.29-9', key: 'D01' },
        { label: 'Tomografia — 4.02.01.10-9', key: 'D02' },
        { label: 'Ultrassonografia abdominal — 4.04.03.01-4', key: 'D03' },
      ],
    },
    {
      label: 'Terapias (Grupo 5)',
      key: 'G5',
      children: [
        { label: 'Fisioterapia — 5.01.01.01-1', key: 'T01' },
        { label: 'Psicoterapia — 5.01.02.01-8', key: 'T02' },
      ],
    },
  ];

  codeProcedimento = `<kln-tree-select
  [options]="procedimentos"
  placeholder="Selecione o procedimento..."
  selectionMode="single"
  [(ngModel)]="procedimentoSel"
/>`;

  codeMulti = `<kln-tree-select
  [options]="procedimentos"
  placeholder="Selecione procedimentos..."
  selectionMode="checkbox"
  [filter]="true"
  [(ngModel)]="procedimentosSel"
/>`;

  props: PropDef[] = [
    { name: 'options', type: 'TreeNode[]', default: '[]', description: 'Árvore de nós disponíveis.' },
    { name: 'placeholder', type: 'string', default: "'Selecione...'", description: 'Texto placeholder.' },
    { name: 'selectionMode', type: "'single' | 'multiple' | 'checkbox'", default: "'single'", description: 'Modo de seleção.' },
    { name: 'filter', type: 'boolean', default: 'false', description: 'Exibe campo de busca.' },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Desabilita o componente.' },
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais.' },
  ];
}
