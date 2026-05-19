/**
 * kln-chart — wrapper PrimeNG p-chart (Chart.js)
 *
 * ─── Uso mínimo (sem nenhum conhecimento de Chart.js) ───────────────────────
 *
 *   import { KliniChartData } from '@klini-saude/ds';
 *
 *   data = KliniChartData.cartesian(['Jan','Fev','Mar'], [
 *     { label: 'Cardio',  data: [40, 55, 48] },
 *     { label: 'Ortoped', data: [30, 42, 38] },
 *   ]);
 *
 *   <kln-chart type="bar" preset="bar" [data]="data" />
 *
 * ─── Presets disponíveis ────────────────────────────────────────────────────
 *   bar | bar-horizontal | bar-stacked | bar-stacked-horizontal
 *   line | area | mixed | time-series
 *   pie | doughnut | polar-area | radar | scatter | bubble
 *
 * ─── Cores automáticas via autoColors ───────────────────────────────────────
 *   <kln-chart type="bar" preset="bar" [data]="rawData" [autoColors]="true" />
 *   Datasets sem cor recebem a paleta categorical do DS automaticamente.
 *
 * ─── Cores manuais via KliniChartTokens ────────────────────────────────────
 *   backgroundColor: KliniChartTokens.categorical
 *   backgroundColor: KliniChartTokens.status.success
 *
 * ─── Plugin externo (ex: matrix) ───────────────────────────────────────────
 *   Chart.register(MatrixController, MatrixElement);
 *   <kln-chart [type]="$any('matrix')" [data]="data" />
 */
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
} from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { KliniChartPreset, getChartPreset } from './chart.presets';
import { KliniChartTokens } from './chart.tokens';

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
type AnyObj = Record<string, any>;

const RADIAL_TYPES: string[] = ['pie', 'doughnut', 'polarArea'];

@Component({
  selector: 'kln-chart',
  standalone: true,
  imports: [ChartModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-chart
      [type]="$any(type)"
      [data]="resolvedData"
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

  /** Dataset Chart.js. Use KliniChartData.cartesian/radial/timeSeries/etc. para construir. */
  @Input({ required: true }) data: AnyObj = {};

  /**
   * Preset de opções do DS — aplica grid, legenda, tooltip e eixos automaticamente.
   * [options] passadas pelo dev são mescladas por cima (prioridade do dev).
   */
  @Input() preset: KliniChartPreset | null = null;

  /** Opções Chart.js customizadas. Mescladas por cima do preset quando [preset] está ativo. */
  @Input() options: AnyObj = {};

  /**
   * Quando true, aplica a paleta categorical do DS automaticamente
   * nos datasets que não tiverem backgroundColor/borderColor definidos.
   * Para pie/doughnut, aplica as 4 cores a todos os segmentos.
   * Não muta o objeto original de [data].
   */
  @Input() autoColors = false;

  /**
   * Atalho para bar-stacked (compat v0.3+).
   * Equivalente a [preset]="'bar-stacked'".
   */
  @Input() stacked = false;

  @Input() width = '100%';
  @Input() height = '300px';
  @Input() responsive = true;
  @Input() styleClass = '';

  resolvedData: AnyObj = {};
  resolvedOptions: AnyObj = {};

  ngOnChanges(): void {
    this.resolvedOptions = this.buildOptions();
    this.resolvedData    = this.buildData();
  }

  // ─── Options ──────────────────────────────────────────────────────────────

  private buildOptions(): AnyObj {
    const effectivePreset: KliniChartPreset | null =
      this.preset ?? (this.stacked ? 'bar-stacked' : null);
    const base = effectivePreset ? getChartPreset(effectivePreset) : {};
    return { ...base, ...this.options };
  }

  // ─── Data + autoColors ────────────────────────────────────────────────────

  private buildData(): AnyObj {
    if (!this.autoColors) return this.data;
    const datasets: AnyObj[] = this.data['datasets'] ?? [];
    if (!datasets.length)   return this.data;

    const palette = KliniChartTokens.categorical;
    const isRadial = RADIAL_TYPES.includes(this.type);

    const colored = datasets.map((ds: AnyObj, i: number) => {
      const hasColor = ds['backgroundColor'] || ds['borderColor'];
      if (hasColor) return ds;

      if (isRadial) {
        // pie/doughnut: aplica array de cores a todos os segmentos
        return {
          ...ds,
          backgroundColor: palette,
          borderColor:     palette.map(c => this.hexAlpha(c, 0.8)),
          borderWidth:     1,
          hoverOffset:     6,
        };
      }

      const color = palette[i % palette.length];
      const isLineType = ds['type'] === 'line' || this.type === 'line';
      return {
        ...ds,
        backgroundColor: isLineType ? this.hexAlpha(color, 0.15) : color,
        borderColor:     color,
        borderWidth:     isLineType ? 2 : 0,
      };
    });

    return { ...this.data, datasets: colored };
  }

  private hexAlpha(hex: string, alpha: number): string {
    const h = hex.replace('#', '');
    const r = parseInt(h.substring(0, 2), 16);
    const g = parseInt(h.substring(2, 4), 16);
    const b = parseInt(h.substring(4, 6), 16);
    return `rgba(${r},${g},${b},${alpha})`;
  }
}
