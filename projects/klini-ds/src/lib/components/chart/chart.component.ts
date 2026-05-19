/**
 * kln-chart — wrapper PrimeNG p-chart (Chart.js)
 *
 * Uso básico — sem preset (dev controla tudo):
 *   <kln-chart type="bar" [data]="data" [options]="opts" />
 *
 * Uso com preset — opções DS aplicadas automaticamente:
 *   <kln-chart type="line" preset="line" [data]="data" />
 *
 * Presets disponíveis:
 *   bar | bar-horizontal | bar-stacked | bar-stacked-horizontal
 *   line | area | pie | doughnut | polar-area | radar | scatter | bubble
 *
 * Cores do DS em datasets — use KliniChartTokens para resolver tokens em runtime:
 *   import { KliniChartTokens } from '@klini/ds';
 *   backgroundColor: KliniChartTokens.categorical          // 4 cores da marca
 *   backgroundColor: KliniChartTokens.status.success       // verde teal
 *   backgroundColor: KliniChartTokens.sequential           // escala teal 5 stops
 *
 * Plugin externo (ex: matrix para heatmap visual com células):
 *   Instale: npm install chartjs-chart-matrix
 *   Registre: Chart.register(MatrixController, MatrixElement)
 *   Use: <kln-chart [type]="$any('matrix')" [data]="data" />
 *   O DS não garante suporte a plugins externos.
 */
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
} from '@angular/core';
import { ChartModule } from 'primeng/chart';
import {
  KliniChartPreset,
  getChartPreset,
} from './chart.presets';

export type KliniChartType =
  | 'bar'
  | 'line'
  | 'pie'
  | 'doughnut'
  | 'radar'
  | 'scatter'
  | 'polarArea'
  | 'bubble';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ChartOptions = Record<string, any>;

@Component({
  selector: 'kln-chart',
  standalone: true,
  imports: [ChartModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-chart
      [type]="$any(type)"
      [data]="data"
      [options]="resolvedOptions"
      [width]="width"
      [height]="height"
      [responsive]="responsive"
      [class]="'kln-chart ' + styleClass"
    />
  `,
  styles: [`:host { display: block; }`],
})
export class KliniChartComponent implements OnChanges {

  /** Tipo Chart.js. Para plugins externos, use [type]="$any('matrix')" no template consumidor. */
  @Input({ required: true }) type: KliniChartType = 'bar';

  /** Dataset Chart.js */
  @Input({ required: true }) data: ChartOptions = {};

  /**
   * Preset de opções do DS — aplica automaticamente grid, legenda, tooltips e
   * cores de texto alinhados aos tokens do Klini.
   * Quando informado, as [options] passadas são MESCLADAS por cima do preset
   * (options do dev têm prioridade).
   */
  @Input() preset: KliniChartPreset | null = null;

  /**
   * Opções Chart.js customizadas. Se [preset] estiver ativo, estas opções
   * são mescladas por cima do preset (prioridade do dev).
   * Se [preset] for null, são usadas diretamente.
   */
  @Input() options: ChartOptions = {};

  /**
   * Atalho para bar chart empilhado (compatibilidade v0.3+).
   * Equivalente a [preset]="'bar-stacked'".
   */
  @Input() stacked = false;

  @Input() width = '100%';
  @Input() height = '300px';
  @Input() responsive = true;
  @Input() styleClass = '';

  resolvedOptions: ChartOptions = {};

  ngOnChanges(): void {
    this.resolvedOptions = this.buildOptions();
  }

  private buildOptions(): ChartOptions {
    // 1. Determina preset efetivo (input [preset] tem prioridade, [stacked] é atalho)
    const effectivePreset: KliniChartPreset | null =
      this.preset ?? (this.stacked ? 'bar-stacked' : null);

    // 2. Parte base: preset (se houver) ou objeto vazio
    const base: ChartOptions = effectivePreset ? getChartPreset(effectivePreset) : {};

    // 3. Mescla superficial — options do dev sobrepõem o preset em cada chave de topo
    //    Para override profundo (ex: só trocar cor do grid) o dev usa spread no objeto
    return { ...base, ...this.options };
  }
}
