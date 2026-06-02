import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnDataViewComponent } from '@klini-saude/ds';
import { DataViewModule } from 'primeng/dataview';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-dataview-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnDataViewComponent, DataViewModule, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">DataView</h1>
        <span class="badge badge--version">kln-dataview</span>
      </div>
      <p class="docs-page-description">
        Exibição de dados em lista ou grade com paginação. Wrapper sobre <code class="font-mono">p-dataview</code> do PrimeNG.
        Usado para exibir prestadores credenciados e planos disponíveis.
      </p>

      <div class="docs-section">
        <h2>Prestadores credenciados</h2>
        <app-component-preview [code]="codePrestadores">
          <div preview>
            <kln-dataview [value]="prestadores" layout="list">
              <ng-template pTemplate="list" let-items>
                <div>
                  @for (p of items; track p.id) {
                    <div style="padding:12px;border-bottom:1px solid var(--docs-border);display:flex;justify-content:space-between;align-items:center">
                      <div>
                        <div style="font-size:14px;font-weight:600;color:var(--docs-text)">{{ p.nome }}</div>
                        <div style="font-size:12px;color:var(--docs-text-muted)">{{ p.especialidade }} — {{ p.cidade }}</div>
                      </div>
                      <span style="font-size:11px;padding:2px 8px;background:var(--docs-accent);color:#fff;border-radius:12px">Credenciado</span>
                    </div>
                  }
                </div>
              </ng-template>
            </kln-dataview>
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
export class DataviewPageComponent {
  prestadores = [
    { id: 1, nome: 'Hospital São Camilo', especialidade: 'Hospital Geral', cidade: 'São Paulo/SP' },
    { id: 2, nome: 'Clínica Klini Sul', especialidade: 'Clínica Médica', cidade: 'Santo André/SP' },
    { id: 3, nome: 'Lab Klini Centro', especialidade: 'Análises Clínicas', cidade: 'São Paulo/SP' },
    { id: 4, nome: 'Centro Cardiológico Klini', especialidade: 'Cardiologia', cidade: 'São Paulo/SP' },
  ];

  codePrestadores = `<kln-dataview [value]="prestadores" layout="list">
  <ng-template pTemplate="list" let-items>
    <div>
      @for (p of items; track p.id) {
        <div style="padding:12px;border-bottom:1px solid var(--docs-border)">
          <div>{{ p.nome }}</div>
          <div>{{ p.especialidade }} — {{ p.cidade }}</div>
        </div>
      }
    </div>
  </ng-template>
</kln-dataview>`;

  props: PropDef[] = [
    { name: 'value', type: 'unknown[]', default: '[]', description: 'Array de dados a exibir.', required: true },
    { name: 'layout', type: "'list' | 'grid'", default: "'list'", description: 'Modo de exibição.' },
    { name: 'paginator', type: 'boolean', default: 'false', description: 'Habilita paginação.' },
    { name: 'rows', type: 'number', default: '10', description: 'Itens por página (quando paginator ativo).' },
    { name: 'emptyMessage', type: 'string', default: "'Nenhum resultado encontrado.'", description: 'Mensagem quando lista vazia.' },
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais.' },
  ];
}
