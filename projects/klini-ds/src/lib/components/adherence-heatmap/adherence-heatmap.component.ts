import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';

export interface AdherenceWeek {
  /** Semana (ex: 'S1', 'S2', …) */
  label: string;
  /** Valor de adesão 0–100 */
  value: number;
}

@Component({
  selector: 'kln-adherence-heatmap',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="kln-heatmap">
      @if (title) {
        <p class="kln-heatmap__title">{{ title }}</p>
      }
      <div class="kln-heatmap__grid" [style.grid-template-columns]="'repeat(' + weeks.length + ', 1fr)'">
        @for (week of weeks; track week.label) {
          <div
            class="kln-heatmap__cell"
            [style.background-color]="getCellColor(week.value)"
            [title]="week.label + ': ' + week.value + '%'"
            [attr.aria-label]="week.label + ': ' + week.value + '%'"
          ></div>
        }
      </div>
      @if (showLabels) {
        <div class="kln-heatmap__labels" [style.grid-template-columns]="'repeat(' + weeks.length + ', 1fr)'">
          @for (week of weeks; track week.label) {
            <span class="kln-heatmap__label">{{ week.label }}</span>
          }
        </div>
      }
      <div class="kln-heatmap__legend">
        <span class="kln-heatmap__legend-label">{{ legendLow }}</span>
        <div class="kln-heatmap__legend-scale">
          @for (stop of legendStops; track $index) {
            <div class="kln-heatmap__legend-stop" [style.background-color]="stop"></div>
          }
        </div>
        <span class="kln-heatmap__legend-label">{{ legendHigh }}</span>
      </div>
    </div>
  `,
  styles: [`
    .kln-heatmap {
      display: flex;
      flex-direction: column;
      gap: 8px;
      font-family: inherit;
    }

    .kln-heatmap__title {
      margin: 0;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--klini-text-secondary, #6b7280);
    }

    .kln-heatmap__grid {
      display: grid;
      gap: 4px;
    }

    .kln-heatmap__cell {
      width: 100%;
      aspect-ratio: 1;
      border-radius: 4px;
      transition: opacity 0.15s;
      cursor: default;
    }

    .kln-heatmap__cell:hover {
      opacity: 0.8;
    }

    .kln-heatmap__labels {
      display: grid;
      gap: 4px;
    }

    .kln-heatmap__label {
      font-size: 10px;
      color: var(--klini-text-secondary, #6b7280);
      text-align: center;
    }

    .kln-heatmap__legend {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 4px;
    }

    .kln-heatmap__legend-label {
      font-size: 10px;
      color: var(--klini-text-secondary, #6b7280);
      white-space: nowrap;
    }

    .kln-heatmap__legend-scale {
      display: flex;
      flex: 1;
      height: 8px;
      border-radius: 4px;
      overflow: hidden;
    }

    .kln-heatmap__legend-stop {
      flex: 1;
    }
  `],
})
export class KliniAdherenceHeatmapComponent implements OnChanges {
  /** Dados das semanas */
  @Input() weeks: AdherenceWeek[] = [];
  /** Título exibido acima do heatmap */
  @Input() title = 'ADESÃO · 12 SEMANAS';
  /** Exibe labels de semana abaixo das células */
  @Input() showLabels = true;
  /** Texto do lado baixo da legenda */
  @Input() legendLow = 'Baixa';
  /** Texto do lado alto da legenda */
  @Input() legendHigh = 'Alta';

  // Escala sequential teal (5 stops: WASH → INK)
  readonly legendStops = [
    'var(--kln-chart-seq-wash, #e0f2f1)',
    'var(--kln-chart-seq-33,   #80cbc4)',
    'var(--kln-chart-seq-100,  #259591)',
    'var(--kln-chart-seq-deep, #00796b)',
    'var(--kln-chart-seq-ink,  #004d40)',
  ];

  private colorStops = [
    '#e0f2f1',
    '#80cbc4',
    '#26a69a',
    '#259591',
    '#00796b',
    '#004d40',
  ];

  ngOnChanges(): void {
    if (this.weeks.length === 0) {
      this.weeks = this.defaultWeeks();
    }
  }

  getCellColor(value: number): string {
    const clamped = Math.max(0, Math.min(100, value));
    const idx = Math.round((clamped / 100) * (this.colorStops.length - 1));
    return this.colorStops[idx];
  }

  private defaultWeeks(): AdherenceWeek[] {
    return Array.from({ length: 12 }, (_, i) => ({
      label: `S${i + 1}`,
      value: 0,
    }));
  }
}
