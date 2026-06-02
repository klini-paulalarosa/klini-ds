import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnMeterGroupComponent } from '@klini-saude/ds';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-meter-group-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnMeterGroupComponent, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">MeterGroup</h1>
        <span class="badge badge--version">kln-meter-group</span>
      </div>
      <p class="docs-page-description">
        Medidor de múltiplos segmentos em barra. Wrapper sobre <code class="font-mono">p-metergroup</code> do PrimeNG.
        Usado para mostrar utilização por categoria (consultas, exames, internações).
      </p>

      <div class="docs-section">
        <h2>Utilização por categoria</h2>
        <p>Distribuição do custo sinistrado por tipo de serviço.</p>
        <app-component-preview [code]="codeCategoria">
          <div preview style="padding:16px">
            <kln-meter-group [value]="utilizacao" [max]="100" labelPosition="end" />
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Carências por tipo</h2>
        <app-component-preview [code]="codeCarencia">
          <div preview style="padding:16px">
            <kln-meter-group [value]="carencias" [max]="180" labelPosition="start" />
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
export class MeterGroupPageComponent {
  utilizacao = [
    { label: 'Consultas', value: 35, color: '#259591' },
    { label: 'Exames', value: 25, color: '#6AA7AE' },
    { label: 'Internações', value: 28, color: '#CD7925' },
    { label: 'Terapias', value: 12, color: '#E05759' },
  ];

  carencias = [
    { label: 'Consultas (30d)', value: 30, color: '#259591' },
    { label: 'Exames (90d)', value: 90, color: '#6AA7AE' },
    { label: 'Internações (180d)', value: 180, color: '#CD7925' },
  ];

  codeCategoria = `<kln-meter-group [value]="utilizacao" [max]="100" labelPosition="end" />

// No componente:
utilizacao = [
  { label: 'Consultas', value: 35, color: '#259591' },
  { label: 'Exames', value: 25, color: '#6AA7AE' },
  { label: 'Internações', value: 28, color: '#CD7925' },
  { label: 'Terapias', value: 12, color: '#E05759' },
];`;

  codeCarencia = `<kln-meter-group [value]="carencias" [max]="180" labelPosition="start" />`;

  props: PropDef[] = [
    { name: 'value', type: 'MeterItem[]', default: '[]', description: 'Array de segmentos (label, value, color).', required: true },
    { name: 'max', type: 'number', default: '100', description: 'Valor máximo da barra.' },
    { name: 'orientation', type: "'horizontal' | 'vertical'", default: "'horizontal'", description: 'Orientação da barra.' },
    { name: 'labelPosition', type: "'start' | 'end'", default: "'end'", description: 'Posição dos labels em relação à barra.' },
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais.' },
  ];
}
