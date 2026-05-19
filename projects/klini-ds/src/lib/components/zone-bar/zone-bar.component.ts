import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ZoneBarZone {
  /** Nome da zona (ex: 'Normal', 'Atenção', 'Alta') */
  label: string;
  /** Valor máximo desta zona (0–100, relativo ao range total) */
  max: number;
  /** Cor de fundo da zona — aceita CSS custom property ou hex */
  color?: string;
}

@Component({
  selector: 'kln-zone-bar',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="kln-zone-bar">
      @if (title) {
        <p class="kln-zone-bar__title">{{ title }}</p>
      }
      @if (value !== null) {
        <div class="kln-zone-bar__value-row">
          <span class="kln-zone-bar__value">{{ value }}</span>
          @if (unit) {
            <span class="kln-zone-bar__unit">{{ unit }}</span>
          }
        </div>
      }

      <div class="kln-zone-bar__track-wrap">
        <!-- Indicador triangular da posição atual -->
        @if (value !== null) {
          <div
            class="kln-zone-bar__indicator"
            [style.left]="indicatorPosition + '%'"
          >
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
              <path d="M7 10L0.937822 0.25L13.0622 0.25L7 10Z" fill="currentColor"/>
            </svg>
          </div>
        }

        <!-- Zonas -->
        <div class="kln-zone-bar__track">
          @for (zone of zones; track zone.label; let i = $index) {
            <div
              class="kln-zone-bar__zone"
              [style.flex]="zoneWidths[i]"
              [style.background-color]="zone.color || defaultColors[i % defaultColors.length]"
            ></div>
          }
        </div>
      </div>

      <!-- Labels das zonas -->
      <div class="kln-zone-bar__labels">
        @for (zone of zones; track zone.label) {
          <span class="kln-zone-bar__zone-label">{{ zone.label }}</span>
        }
      </div>
    </div>
  `,
  styles: [`
    .kln-zone-bar {
      display: flex;
      flex-direction: column;
      gap: 6px;
      font-family: inherit;
    }

    .kln-zone-bar__title {
      margin: 0;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--klini-text-secondary, #6b7280);
    }

    .kln-zone-bar__value-row {
      display: flex;
      align-items: baseline;
      gap: 4px;
    }

    .kln-zone-bar__value {
      font-size: 40px;
      font-weight: 700;
      line-height: 1;
      color: var(--klini-text-primary, #111827);
    }

    .kln-zone-bar__unit {
      font-size: 14px;
      color: var(--klini-text-secondary, #6b7280);
    }

    .kln-zone-bar__track-wrap {
      position: relative;
      padding-top: 16px;
    }

    .kln-zone-bar__indicator {
      position: absolute;
      top: 0;
      transform: translateX(-50%);
      color: var(--klini-text-primary, #374151);
      transition: left 0.3s ease;
    }

    .kln-zone-bar__track {
      display: flex;
      height: 12px;
      border-radius: 6px;
      overflow: hidden;
      gap: 2px;
    }

    .kln-zone-bar__zone {
      height: 100%;
      border-radius: 4px;
    }

    .kln-zone-bar__labels {
      display: flex;
    }

    .kln-zone-bar__zone-label {
      flex: 1;
      text-align: center;
      font-size: 11px;
      color: var(--klini-text-secondary, #6b7280);
    }
  `],
})
export class KliniZoneBarComponent implements OnChanges {
  /** Título da métrica (ex: 'PRESSÃO ARTERIAL') */
  @Input() title = '';
  /** Valor atual da métrica */
  @Input() value: number | null = null;
  /** Unidade de medida (ex: 'mmHg', 'bpm') */
  @Input() unit = '';
  /** Valor mínimo do range */
  @Input() min = 0;
  /** Valor máximo do range */
  @Input() max = 200;
  /** Zonas do indicador — devem somar até `max` */
  @Input() zones: ZoneBarZone[] = [
    { label: 'Normal',  max: 80,  color: 'var(--kln-chart-status-success, #259591)' },
    { label: 'Atenção', max: 140, color: 'var(--kln-chart-status-warn, #cd7925)' },
    { label: 'Alta',    max: 200, color: 'var(--kln-chart-status-danger, #e05759)' },
  ];

  readonly defaultColors = [
    'var(--kln-chart-status-success, #259591)',
    'var(--kln-chart-status-warn, #cd7925)',
    'var(--kln-chart-status-danger, #e05759)',
    'var(--kln-chart-status-info, #6aa7ae)',
  ];

  zoneWidths: number[] = [];
  indicatorPosition = 0;

  ngOnChanges(): void {
    this.calcZoneWidths();
    this.calcIndicator();
  }

  private calcZoneWidths(): void {
    const total = this.max - this.min;
    let prev = this.min;
    this.zoneWidths = this.zones.map(z => {
      const w = z.max - prev;
      prev = z.max;
      return w / total;
    });
  }

  private calcIndicator(): void {
    if (this.value === null) return;
    const clamped = Math.max(this.min, Math.min(this.max, this.value));
    this.indicatorPosition = ((clamped - this.min) / (this.max - this.min)) * 100;
  }
}
