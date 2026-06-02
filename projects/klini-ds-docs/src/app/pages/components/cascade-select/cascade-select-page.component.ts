import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnCascadeSelectComponent } from '@klini-saude/ds';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-cascade-select-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnCascadeSelectComponent, FormsModule, CommonModule, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">CascadeSelect</h1>
        <span class="badge badge--version">kln-cascade-select</span>
      </div>
      <p class="docs-page-description">
        Seleção em cascata com múltiplos níveis hierárquicos. Wrapper sobre <code class="font-mono">p-cascadeselect</code> do PrimeNG.
        Usado para seleção de Estado > Cidade > Prestador na busca de rede credenciada.
      </p>

      <div class="docs-section">
        <h2>Busca de prestador por localização</h2>
        <app-component-preview [code]="codeLocal">
          <div preview style="max-width:380px">
            <kln-cascade-select
              [options]="redeCredenciada"
              optionLabel="nome"
              optionGroupLabel="nome"
              optionGroupChildren="cidades"
              placeholder="Estado > Cidade > Prestador"
              [(ngModel)]="prestadorSel"
            />
            @if (prestadorSel) {
              <p style="font-size:13px;color:var(--docs-text-muted);margin-top:8px">
                Selecionado: {{ prestadorSel | json }}
              </p>
            }
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
export class CascadeSelectPageComponent {
  prestadorSel: unknown = null;

  redeCredenciada = [
    {
      nome: 'São Paulo',
      cidades: [
        {
          nome: 'São Paulo',
          prestadores: [
            { nome: 'Hospital São Camilo', tipo: 'Hospital' },
            { nome: 'Clínica Klini Centro', tipo: 'Clínica' },
            { nome: 'Lab Fleury', tipo: 'Laboratório' },
          ],
        },
        {
          nome: 'Santo André',
          prestadores: [
            { nome: 'Clínica Klini Sul', tipo: 'Clínica' },
            { nome: 'Lab ABC', tipo: 'Laboratório' },
          ],
        },
      ],
    },
    {
      nome: 'Minas Gerais',
      cidades: [
        {
          nome: 'Belo Horizonte',
          prestadores: [
            { nome: 'Hospital Mater Dei', tipo: 'Hospital' },
          ],
        },
      ],
    },
  ];

  codeLocal = `<kln-cascade-select
  [options]="redeCredenciada"
  optionLabel="nome"
  optionGroupLabel="nome"
  optionGroupChildren="cidades"
  placeholder="Estado > Cidade > Prestador"
  [(ngModel)]="prestadorSel"
/>`;

  props: PropDef[] = [
    { name: 'options', type: 'unknown[]', default: '[]', description: 'Array de opções hierárquicas.' },
    { name: 'optionLabel', type: 'string', default: "'label'", description: 'Campo do objeto usado como rótulo.' },
    { name: 'optionGroupLabel', type: 'string', default: "'label'", description: 'Campo de rótulo dos grupos.' },
    { name: 'optionGroupChildren', type: 'string[]', default: '[]', description: 'Array com nomes dos campos filhos em cada nível.' },
    { name: 'placeholder', type: 'string', default: "'Selecione...'", description: 'Texto placeholder.' },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Desabilita o componente.' },
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais.' },
  ];
}
