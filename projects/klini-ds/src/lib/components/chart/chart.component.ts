import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
} from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { KlnChartPreset, getChartPreset } from './chart.presets';
import { KlnChartTokens } from './chart.tokens';

export type KlnChartType =
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
export class KlnChartComponent implements OnChanges {

  @Input({ required: true }) type: KlnChartType = 'bar';

  @Input({ required: true }) data: AnyObj = {};

  @Input() preset: KlnChartPreset | null = null;

  @Input() options: AnyObj = {};

  @Input() autoColors = false;

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


  private buildOptions(): AnyObj {
    const effectivePreset: KlnChartPreset | null =
      this.preset ?? (this.stacked ? 'bar-stacked' : null);
    const base = effectivePreset ? getChartPreset(effectivePreset) : {};
    return { ...base, ...this.options };
  }


  private buildData(): AnyObj {
    if (!this.autoColors) return this.data;
    const datasets: AnyObj[] = this.data['datasets'] ?? [];
    if (!datasets.length)   return this.data;

    const palette = KlnChartTokens.categorical;
    const isRadial = RADIAL_TYPES.includes(this.type);

    const colored = datasets.map((ds: AnyObj, i: number) => {
      const hasColor = ds['backgroundColor'] || ds['borderColor'];
      if (hasColor) return ds;

      if (isRadial) {
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
