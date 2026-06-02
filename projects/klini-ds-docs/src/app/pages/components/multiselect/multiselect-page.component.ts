import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnMultiSelectComponent } from '@klini-saude/ds';
import { FormsModule } from '@angular/forms';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-multiselect-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnMultiSelectComponent, FormsModule, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">MultiSelect</h1>
        <span class="badge badge--version">kln-multiselect</span>
      </div>
      <p class="docs-page-description">
        Seleção múltipla com busca integrada. Wrapper sobre <code class="font-mono">p-multiselect</code> do PrimeNG.
        Usado para seleção de especialidades médicas, dependentes e coberturas.
      </p>

      <div class="docs-section">
        <h2>Especialidades cobertas</h2>
        <app-component-preview [code]="codeEspec">
          <div preview style="max-width:400px">
            <kln-multiselect
              label="Especialidades"
              [options]="especialidades"
              optionLabel="label"
              optionValue="value"
              placeholder="Selecione especialidades..."
              [filter]="true"
              [(ngModel)]="especialidadesSel"
            />
            <p style="font-size:13px;color:var(--docs-text-muted);margin-top:8px">
              Selecionadas: {{ especialidadesSel.length }}
            </p>
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Dependentes na guia</h2>
        <app-component-preview [code]="codeDep">
          <div preview style="max-width:400px">
            <kln-multiselect
              label="Dependentes incluídos"
              [options]="dependentes"
              optionLabel="nome"
              optionValue="cpf"
              placeholder="Selecione dependentes..."
              [showClear]="true"
              [(ngModel)]="dependentesSel"
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
export class MultiselectPageComponent {
  especialidadesSel: string[] = ['cardiologia', 'ortopedia'];
  especialidades = [
    { label: 'Cardiologia', value: 'cardiologia' },
    { label: 'Ortopedia', value: 'ortopedia' },
    { label: 'Neurologia', value: 'neurologia' },
    { label: 'Clínica Geral', value: 'clinica' },
    { label: 'Dermatologia', value: 'dermatologia' },
    { label: 'Oftalmologia', value: 'oftalmologia' },
    { label: 'Ginecologia', value: 'ginecologia' },
    { label: 'Pediatria', value: 'pediatria' },
  ];

  dependentesSel: string[] = [];
  dependentes = [
    { nome: 'Ana Silva (cônjuge)', cpf: '123.456.789-01' },
    { nome: 'Lucas Silva (filho, 12a)', cpf: '123.456.789-02' },
    { nome: 'Beatriz Silva (filha, 8a)', cpf: '123.456.789-03' },
  ];

  codeEspec = `<kln-multiselect
  label="Especialidades"
  [options]="especialidades"
  optionLabel="label"
  optionValue="value"
  placeholder="Selecione especialidades..."
  [filter]="true"
  [(ngModel)]="especialidadesSel"
/>`;

  codeDep = `<kln-multiselect
  label="Dependentes incluídos"
  [options]="dependentes"
  optionLabel="nome"
  optionValue="cpf"
  placeholder="Selecione dependentes..."
  [showClear]="true"
  [(ngModel)]="dependentesSel"
/>`;

  props: PropDef[] = [
    { name: 'label', type: 'string', default: "''", description: 'Rótulo acima do campo.' },
    { name: 'options', type: 'unknown[]', default: '[]', description: 'Array de opções disponíveis.' },
    { name: 'optionLabel', type: 'string', default: "'label'", description: 'Campo do objeto usado como rótulo.' },
    { name: 'optionValue', type: 'string', default: "'value'", description: 'Campo do objeto usado como valor.' },
    { name: 'placeholder', type: 'string', default: "'Selecione...'", description: 'Texto placeholder.' },
    { name: 'filter', type: 'boolean', default: 'true', description: 'Exibe campo de busca dentro do dropdown.' },
    { name: 'showClear', type: 'boolean', default: 'false', description: 'Exibe botão para limpar seleção.' },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Desabilita o componente.' },
    { name: 'errorMessage', type: 'string', default: "''", description: 'Mensagem de erro de validação.' },
  ];
}
