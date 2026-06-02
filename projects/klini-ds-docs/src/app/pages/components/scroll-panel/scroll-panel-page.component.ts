import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnScrollPanelComponent } from '@klini-saude/ds';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-scroll-panel-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnScrollPanelComponent, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">ScrollPanel</h1>
        <span class="badge badge--version">kln-scroll-panel</span>
      </div>
      <p class="docs-page-description">
        Área com scroll customizado e estilizado. Wrapper sobre <code class="font-mono">p-scrollpanel</code> do PrimeNG.
        Usado para exibir listas longas de prestadores e histórico de consultas.
      </p>

      <div class="docs-section">
        <h2>Lista de prestadores</h2>
        <app-component-preview [code]="codePrestadores">
          <div preview>
            <kln-scroll-panel [style]="{ width: '100%', height: '240px' }">
              @for (p of prestadores; track p.id) {
                <div style="padding:12px;border-bottom:1px solid var(--docs-border)">
                  <div style="font-size:14px;font-weight:600;color:var(--docs-text)">{{ p.nome }}</div>
                  <div style="font-size:12px;color:var(--docs-text-muted);margin-top:2px">
                    {{ p.especialidade }} — {{ p.cidade }}
                  </div>
                </div>
              }
            </kln-scroll-panel>
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
export class ScrollPanelPageComponent {
  prestadores = [
    { id: 1, nome: 'Hospital São Camilo', especialidade: 'Hospital Geral', cidade: 'São Paulo/SP' },
    { id: 2, nome: 'Clínica Klini Sul', especialidade: 'Clínica Médica', cidade: 'Santo André/SP' },
    { id: 3, nome: 'Lab Klini Centro', especialidade: 'Análises Clínicas', cidade: 'São Paulo/SP' },
    { id: 4, nome: 'Centro Cardiológico Klini', especialidade: 'Cardiologia', cidade: 'São Paulo/SP' },
    { id: 5, nome: 'Clínica Ortopédica ABC', especialidade: 'Ortopedia', cidade: 'São Bernardo/SP' },
    { id: 6, nome: 'Hospital Leforte', especialidade: 'Hospital Geral', cidade: 'São Paulo/SP' },
    { id: 7, nome: 'Lab Fleury', especialidade: 'Diagnósticos', cidade: 'São Paulo/SP' },
    { id: 8, nome: 'Clínica Neurológica Klini', especialidade: 'Neurologia', cidade: 'Santo André/SP' },
  ];

  codePrestadores = `<kln-scroll-panel [style]="{ width: '100%', height: '240px' }">
  @for (p of prestadores; track p.id) {
    <div style="padding:12px;border-bottom:1px solid var(--docs-border)">
      <div>{{ p.nome }}</div>
      <div>{{ p.especialidade }} — {{ p.cidade }}</div>
    </div>
  }
</kln-scroll-panel>`;

  props: PropDef[] = [
    { name: 'style', type: 'Record<string, string>', default: '{}', description: 'Estilos inline (use para definir width e height).' },
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais.' },
  ];
}
