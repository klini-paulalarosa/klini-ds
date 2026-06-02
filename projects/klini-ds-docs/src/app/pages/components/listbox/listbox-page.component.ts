import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnListboxComponent } from '@klini-saude/ds';
import { FormsModule } from '@angular/forms';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-listbox-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnListboxComponent, FormsModule, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">Listbox</h1>
        <span class="badge badge--version">kln-listbox</span>
      </div>
      <p class="docs-page-description">
        Lista de seleção com rolagem. Wrapper sobre <code class="font-mono">p-listbox</code> do PrimeNG.
        Usado para seleção de planos disponíveis e tipos de cobertura.
      </p>

      <div class="docs-section">
        <h2>Seleção de plano</h2>
        <app-component-preview [code]="codePlano">
          <div preview style="max-width:380px">
            <kln-listbox
              [options]="planos"
              optionLabel="nome"
              optionValue="codigo"
              [(ngModel)]="planoSel"
            />
            <p style="font-size:13px;color:var(--docs-text-muted);margin-top:8px">
              Selecionado: {{ planoSel || 'Nenhum' }}
            </p>
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Com filtro</h2>
        <p>Lista de prestadores com campo de busca.</p>
        <app-component-preview [code]="codeFiltro">
          <div preview style="max-width:380px">
            <kln-listbox
              [options]="prestadores"
              optionLabel="label"
              optionValue="value"
              [filter]="true"
              [(ngModel)]="prestadorSel"
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
export class ListboxPageComponent {
  planoSel = 'START_PJ';
  planos = [
    { nome: 'Klini Start PJ — R$ 289,90/mês', codigo: 'START_PJ' },
    { nome: 'Klini Plus PJ — R$ 389,90/mês', codigo: 'PLUS_PJ' },
    { nome: 'Klini Premium PJ — R$ 489,90/mês', codigo: 'PREMIUM_PJ' },
    { nome: 'Klini Start PF — R$ 319,90/mês', codigo: 'START_PF' },
  ];

  prestadorSel = '';
  prestadores = [
    { label: 'Hospital São Camilo — São Paulo/SP', value: 'hsc' },
    { label: 'Clínica Klini Sul — Santo André/SP', value: 'kls' },
    { label: 'Lab Klini Centro — São Paulo/SP', value: 'lkc' },
    { label: 'Clínica Especialidades ABC — São Bernardo/SP', value: 'ceabc' },
    { label: 'Hospital Leforte — São Paulo/SP', value: 'hlf' },
  ];

  codePlano = `<kln-listbox
  [options]="planos"
  optionLabel="nome"
  optionValue="codigo"
  [(ngModel)]="planoSel"
/>`;

  codeFiltro = `<kln-listbox
  [options]="prestadores"
  optionLabel="label"
  optionValue="value"
  [filter]="true"
  [(ngModel)]="prestadorSel"
/>`;

  props: PropDef[] = [
    { name: 'options', type: 'unknown[]', default: '[]', description: 'Array de opções da lista.' },
    { name: 'optionLabel', type: 'string', default: "'label'", description: 'Campo do objeto usado como rótulo.' },
    { name: 'optionValue', type: 'string', default: "'value'", description: 'Campo do objeto usado como valor.' },
    { name: 'multiple', type: 'boolean', default: 'false', description: 'Permite múltipla seleção.' },
    { name: 'filter', type: 'boolean', default: 'false', description: 'Exibe campo de busca.' },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Desabilita a lista.' },
    { name: 'listStyle', type: 'string', default: "''", description: 'Estilo inline da lista.' },
  ];
}
