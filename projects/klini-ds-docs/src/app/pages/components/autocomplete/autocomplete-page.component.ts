import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnAutoCompleteComponent } from '@klini-saude/ds';
import { FormsModule } from '@angular/forms';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-autocomplete-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnAutoCompleteComponent, FormsModule, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">AutoComplete</h1>
        <span class="badge badge--version">kln-autocomplete</span>
      </div>
      <p class="docs-page-description">
        Campo de texto com sugestões automáticas. Wrapper sobre <code class="font-mono">p-autocomplete</code> do PrimeNG.
        Usado para busca de CID-10, médicos por nome/CRM e prestadores credenciados.
      </p>

      <div class="docs-section">
        <h2>Busca de médico</h2>
        <p>Busca por nome ou CRM do médico solicitante.</p>
        <app-component-preview [code]="codeMedico">
          <div preview style="max-width:400px">
            <kln-autocomplete
              label="Médico solicitante"
              placeholder="Buscar por nome ou CRM..."
              [suggestions]="medicosFiltrados"
              (completeMethod)="buscarMedico($event)"
              [(ngModel)]="medicoSel"
            />
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Busca de CID-10</h2>
        <app-component-preview [code]="codeCid">
          <div preview style="max-width:400px">
            <kln-autocomplete
              label="CID-10"
              placeholder="Buscar código ou diagnóstico..."
              [suggestions]="cidsFiltrados"
              (completeMethod)="buscarCid($event)"
              [(ngModel)]="cidSel"
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
export class AutocompletePageComponent {
  medicoSel: string = '';
  medicosFiltrados: string[] = [];
  private todosMedicos = [
    'Dr. Carlos Mendes — CRM 12345/SP — Cardiologista',
    'Dra. Ana Rodrigues — CRM 23456/SP — Neurologista',
    'Dr. João Pereira — CRM 34567/SP — Ortopedista',
    'Dra. Maria Santos — CRM 45678/SP — Clínica Geral',
    'Dr. Paulo Lima — CRM 56789/SP — Dermatologista',
  ];

  buscarMedico(query: string) {
    const q = query.toLowerCase();
    this.medicosFiltrados = this.todosMedicos.filter(m => m.toLowerCase().includes(q));
  }

  cidSel: string = '';
  cidsFiltrados: string[] = [];
  private todosCids = [
    'I10 — Hipertensão essencial',
    'E11 — Diabetes mellitus tipo 2',
    'J45 — Asma',
    'M54.5 — Lombalgia',
    'F32 — Episódio depressivo',
    'G43 — Enxaqueca',
  ];

  buscarCid(query: string) {
    const q = query.toLowerCase();
    this.cidsFiltrados = this.todosCids.filter(c => c.toLowerCase().includes(q));
  }

  codeMedico = `<kln-autocomplete
  label="Médico solicitante"
  placeholder="Buscar por nome ou CRM..."
  [suggestions]="medicosFiltrados"
  (completeMethod)="buscarMedico($event)"
  [(ngModel)]="medicoSel"
/>

// No componente:
buscarMedico(event: { query: string }) {
  const q = event.query.toLowerCase();
  this.medicosFiltrados = this.todosMedicos.filter(m => m.toLowerCase().includes(q));
}`;

  codeCid = `<kln-autocomplete
  label="CID-10"
  placeholder="Buscar código ou diagnóstico..."
  [suggestions]="cidsFiltrados"
  (completeMethod)="buscarCid($event)"
  [(ngModel)]="cidSel"
/>`;

  props: PropDef[] = [
    { name: 'label', type: 'string', default: "''", description: 'Rótulo do campo.' },
    { name: 'suggestions', type: 'unknown[]', default: '[]', description: 'Array de sugestões filtradas.' },
    { name: 'placeholder', type: 'string', default: "''", description: 'Texto placeholder.' },
    { name: 'dropdown', type: 'boolean', default: 'false', description: 'Exibe botão de dropdown.' },
    { name: 'multiple', type: 'boolean', default: 'false', description: 'Permite múltiplas seleções como chips.' },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Desabilita o campo.' },
    { name: 'errorMessage', type: 'string', default: "''", description: 'Mensagem de erro de validação.' },
  ];
}
