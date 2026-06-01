import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KlnSelectComponent, KlnMultiSelectComponent, KlnAutoCompleteComponent } from '@klini-saude/ds';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-select-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    KlnSelectComponent,
    KlnMultiSelectComponent,
    KlnAutoCompleteComponent,
    ComponentPreviewComponent,
    PropsTableComponent,
  ],
  template: `
    <div>
      <h1 class="docs-page-title">Select / MultiSelect / AutoComplete</h1>
      <p class="docs-page-description">
        Componentes de seleção do Klini DS. <code class="font-mono">kln-select</code> para seleção única,
        <code class="font-mono">kln-multiselect</code> para múltipla escolha com chips,
        e <code class="font-mono">kln-autocomplete</code> para busca com sugestões.
        Todos suportam <code class="font-mono">ngModel</code> e Reactive Forms.
      </p>

      <!-- Select -->
      <div class="docs-section">
        <h2>Select (seleção única)</h2>
        <app-component-preview [code]="selectCode">
          <div preview style="display:flex;flex-direction:column;gap:16px;width:100%;max-width:340px">
            <kln-select
              [(ngModel)]="selectedEspec"
              [options]="especialidades"
              optionLabel="label"
              optionValue="value"
              placeholder="Escolha a especialidade"
              label="Especialidade"
            />
            @if (selectedEspec) {
              <small style="color:var(--docs-text-muted)">Selecionado: {{ selectedEspec }}</small>
            }
          </div>
        </app-component-preview>
      </div>

      <!-- MultiSelect -->
      <div class="docs-section">
        <h2>MultiSelect</h2>
        <app-component-preview [code]="multiCode">
          <div preview style="display:flex;flex-direction:column;gap:16px;width:100%;max-width:400px">
            <kln-multiselect
              [(ngModel)]="selectedEspecs"
              [options]="especialidades"
              optionLabel="label"
              optionValue="value"
              placeholder="Selecione as especialidades"
              label="Especialidades cobertas"
              display="chip"
            />
            @if (selectedEspecs.length) {
              <small style="color:var(--docs-text-muted)">{{ selectedEspecs.length }} selecionada(s)</small>
            }
          </div>
        </app-component-preview>
      </div>

      <!-- AutoComplete -->
      <div class="docs-section">
        <h2>AutoComplete</h2>
        <p>Busca com sugestões filtradas. O evento <code class="font-mono">(completeMethod)</code> dispara a pesquisa.</p>
        <app-component-preview [code]="autoCode">
          <div preview style="display:flex;flex-direction:column;gap:16px;width:100%;max-width:340px">
            <kln-autocomplete
              [(ngModel)]="selectedMedico"
              [suggestions]="medicoSuggestions"
              (completeMethod)="searchMedico($event)"
              placeholder="Buscar médico"
              label="Médico responsável"
            />
          </div>
        </app-component-preview>
      </div>

      <!-- Props Select -->
      <div class="docs-section">
        <h2>Props — kln-select</h2>
        <app-props-table [props]="selectProps" />
      </div>

      <!-- Props MultiSelect -->
      <div class="docs-section">
        <h2>Props — kln-multiselect</h2>
        <app-props-table [props]="multiProps" />
      </div>

      <!-- Props AutoComplete -->
      <div class="docs-section">
        <h2>Props — kln-autocomplete</h2>
        <app-props-table [props]="autoProps" />
      </div>
    </div>
  `,
})
export class SelectPageComponent {
  especialidades = [
    { label: 'Cardiologia', value: 'cardiologia' },
    { label: 'Ortopedia', value: 'ortopedia' },
    { label: 'Pediatria', value: 'pediatria' },
    { label: 'Ginecologia', value: 'ginecologia' },
    { label: 'Neurologia', value: 'neurologia' },
    { label: 'Dermatologia', value: 'dermatologia' },
    { label: 'Oftalmologia', value: 'oftalmologia' },
    { label: 'Psiquiatria', value: 'psiquiatria' },
  ];

  selectedEspec = '';
  selectedEspecs: string[] = [];
  selectedMedico = '';
  medicoSuggestions: string[] = [];

  private medicos = [
    'Dr. Carlos Mendes — Cardiologia',
    'Dra. Ana Ferreira — Pediatria',
    'Dr. Roberto Lima — Ortopedia',
    'Dra. Juliana Costa — Ginecologia',
    'Dr. Marcos Oliveira — Neurologia',
    'Dra. Patricia Souza — Dermatologia',
  ];

  searchMedico(query: string): void {
    const q = query.toLowerCase();
    this.medicoSuggestions = this.medicos.filter(m => m.toLowerCase().includes(q));
  }

  selectCode = `import { KlnSelectComponent } from '@klini-saude/ds';

especialidades = [
  { label: 'Cardiologia', value: 'cardiologia' },
  { label: 'Ortopedia',   value: 'ortopedia'   },
];

selectedEspec = '';

// template
<kln-select
  [(ngModel)]="selectedEspec"
  [options]="especialidades"
  optionLabel="label"
  optionValue="value"
  placeholder="Escolha a especialidade"
  label="Especialidade"
/>`;

  multiCode = `import { KlnMultiSelectComponent } from '@klini-saude/ds';

selectedEspecs: string[] = [];

// template
<kln-multiselect
  [(ngModel)]="selectedEspecs"
  [options]="especialidades"
  optionLabel="label"
  optionValue="value"
  placeholder="Selecione as especialidades"
  label="Especialidades cobertas"
  display="chip"
/>`;

  autoCode = `import { KlnAutoCompleteComponent } from '@klini-saude/ds';

selectedMedico = '';
suggestions: string[] = [];

// (completeMethod) emite uma string (a query digitada)
search(query: string): void {
  this.suggestions = this.medicos.filter(m =>
    m.toLowerCase().includes(query.toLowerCase())
  );
}

// template
<kln-autocomplete
  [(ngModel)]="selectedMedico"
  [suggestions]="suggestions"
  (completeMethod)="search($event)"
  placeholder="Buscar médico"
  label="Médico responsável"
/>`;

  selectProps: PropDef[] = [
    { name: 'options', type: 'KlnSelectOption[] | any[]', default: '[]', description: 'Lista de opções.' },
    { name: 'optionLabel', type: 'string', default: "'label'", description: 'Propriedade da opção exibida como texto.' },
    { name: 'optionValue', type: 'string', default: "'value'", description: 'Propriedade da opção usada como valor.' },
    { name: 'placeholder', type: 'string', default: "''", description: 'Texto placeholder quando nenhum item está selecionado.' },
    { name: 'label', type: 'string', default: "''", description: 'Label do campo.' },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Desabilita o select.' },
    { name: 'errorMessage', type: 'string', default: "''", description: 'Mensagem de erro exibida abaixo do select.' },
    { name: 'filter', type: 'boolean', default: 'false', description: 'Adiciona campo de busca dentro do dropdown.' },
    { name: 'showClear', type: 'boolean', default: 'false', description: 'Exibe botão para limpar a seleção.' },
  ];

  multiProps: PropDef[] = [
    { name: 'options', type: 'any[]', default: '[]', description: 'Lista de opções.' },
    { name: 'optionLabel', type: 'string', default: "'label'", description: 'Propriedade exibida como texto.' },
    { name: 'optionValue', type: 'string', default: "'value'", description: 'Propriedade usada como valor.' },
    { name: 'display', type: "'comma' | 'chip'", default: "'comma'", description: "Exibição dos itens selecionados: separados por vírgula ou como chips." },
    { name: 'maxSelectedLabels', type: 'number', default: '3', description: 'Quantidade máxima de labels exibidos antes de usar "N selecionados".' },
    { name: 'placeholder', type: 'string', default: "''", description: 'Texto placeholder.' },
    { name: 'showToggleAll', type: 'boolean', default: 'true', description: 'Exibe "Selecionar todos".' },
    { name: 'filter', type: 'boolean', default: 'true', description: 'Campo de busca interno.' },
  ];

  autoProps: PropDef[] = [
    { name: 'suggestions', type: 'any[]', default: '[]', description: 'Lista de sugestões filtradas.' },
    { name: 'field', type: 'string', default: "''", description: 'Campo do objeto exibido quando sugestões são objetos.' },
    { name: 'completeMethod', type: 'EventEmitter', default: '—', description: 'Evento disparado a cada keystroke para buscar sugestões.' },
    { name: 'dropdown', type: 'boolean', default: 'false', description: 'Adiciona botão dropdown para listar todos os itens.' },
    { name: 'multiple', type: 'boolean', default: 'false', description: 'Permite seleção múltipla (chips).' },
    { name: 'minLength', type: 'number', default: '1', description: 'Mínimo de caracteres antes de disparar completeMethod.' },
    { name: 'delay', type: 'number', default: '300', description: 'Delay em ms antes de disparar completeMethod.' },
  ];
}
