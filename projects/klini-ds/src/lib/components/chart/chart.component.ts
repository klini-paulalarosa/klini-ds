// kln-chart — wrapper PrimeNG p-chart (Chart.js)
// Suporta: bar, line, pie, doughnut, radar, scatter, polarArea, area, bubble
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ChartModule } from 'primeng/chart';

export type KliniChartType = 'bar' | 'line' | 'pie' | 'doughnut' | 'radar' | 'scatter' | 'polarArea' | 'bubble';

@Component({
  selector: 'kln-chart',
  standalone: true,
  imports: [ChartModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-chart
      [type]="type"
      [data]="data"
      [options]="options"
      [width]="width"
      [height]="height"
      [responsive]="responsive"
      [class]="'kln-chart ' + styleClass"
    />
  `,
  styles: [`:host { display: block; }`],
})
export class KliniChartComponent {
  @Input({ required: true }) type: KliniChartType = 'bar';
  @Input({ required: true }) data: Record<string, unknown> = {};
  @Input() options: Record<string, unknown> = {};
  @Input() width = '100%';
  @Input() height = '300px';
  @Input() responsive = true;
  @Input() styleClass = '';
}
