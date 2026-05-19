/**
 * kln-chart — wrapper PrimeNG p-chart (Chart.js)
 *
 * Tipos nativos suportados (zero dependência extra):
 *   bar | line | pie | doughnut | radar | scatter | polarArea | bubble
 *
 * Padrão para Adherence Heatmap (adesão ao tratamento):
 *   Use type="bar" com datasets.stack e indexAxis: 'y' para simular
 *   o grid de semanas colorido. Exemplo completo no README.
 *
 * Upgrade opcional — Heatmap visual com células (type="matrix"):
 *   Instale o plugin: npm install chartjs-chart-matrix
 *   Registre antes de usar:
 *     import { Chart } from 'chart.js';
 *     import { MatrixController, MatrixElement } from 'chartjs-chart-matrix';
 *     Chart.register(MatrixController, MatrixElement);
 *   Depois use <kln-chart type="matrix" [data]="data" />.
 *   O DS não garante suporte a plugins externos — use por sua conta.
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ChartModule } from 'primeng/chart';

/** Tipos nativos garantidos pelo DS. Plugins externos (ex: 'matrix') são passados via $any no template. */
export type KliniChartType =
  | 'bar'
  | 'line'
  | 'pie'
  | 'doughnut'
  | 'radar'
  | 'scatter'
  | 'polarArea'
  | 'bubble';

@Component({
  selector: 'kln-chart',
  standalone: true,
  imports: [ChartModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-chart
      [type]="$any(type)"
      [data]="data"
      [options]="mergedOptions"
      [width]="width"
      [height]="height"
      [responsive]="responsive"
      [class]="'kln-chart ' + styleClass"
    />
  `,
  styles: [`:host { display: block; }`],
})
export class KliniChartComponent {
  /**
   * Tipo do gráfico nativo: bar | line | pie | doughnut | radar | scatter | polarArea | bubble.
   * Para plugins externos (ex: 'matrix'), passe via [type]="$any('matrix')" no template do consumidor.
   */
  @Input({ required: true }) type: KliniChartType = 'bar';
  /** Dataset Chart.js */
  @Input({ required: true }) data: Record<string, unknown> = {};
  /** Opções Chart.js. Mescladas com defaults do DS (responsivo, sem borda). */
  @Input() options: Record<string, unknown> = {};
  @Input() width = '100%';
  @Input() height = '300px';
  @Input() responsive = true;
  @Input() styleClass = '';

  /**
   * Preset de opções para stacked bar (padrão para adherence heatmap).
   * Ativado automaticamente quando stacked=true.
   */
  @Input() stacked = false;

  get mergedOptions(): Record<string, unknown> {
    if (!this.stacked) return this.options;
    return {
      scales: {
        x: { stacked: true },
        y: { stacked: true },
      },
      ...this.options,
    };
  }
}
