/**
 * kln-meter-group — wrapper PrimeNG p-metergroup
 *
 * Variante padrão:
 *   <kln-meter-group [value]="items" />
 *
 * Variante WithIndicator (Zone Bar — pressão arterial, glicemia, IMC):
 *   Exibe um ponteiro triangular na posição do valor atual sobre a barra.
 *   <kln-meter-group [value]="zones" [indicatorValue]="128" [max]="200" />
 *   O indicador usa os tokens de status do DS (--kln-chart-status-*).
 */
import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
import { MeterGroupModule, MeterItem } from 'primeng/metergroup';

@Component({
  selector: 'kln-meter-group',
  standalone: true,
  imports: [MeterGroupModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="kln-meter-group-wrap">
      @if (indicatorValue !== null) {
        <div class="kln-meter-group-wrap__indicator-row">
          <div
            class="kln-meter-group-wrap__indicator"
            [style.left]="indicatorPercent + '%'"
            [attr.aria-label]="'Valor atual: ' + indicatorValue + (indicatorUnit ? ' ' + indicatorUnit : '')"
          >
            <svg width="12" height="9" viewBox="0 0 12 9" fill="none" aria-hidden="true">
              <path d="M6 9L0.803848 0.75L11.1962 0.75L6 9Z" fill="currentColor"/>
            </svg>
          </div>
        </div>
      }

      <p-metergroup
        [value]="value"
        [max]="max"
        [orientation]="orientation"
        [labelPosition]="labelPosition"
        [styleClass]="'kln-meter-group ' + styleClass"
      />
    </div>
  `,
  styles: [`
    .kln-meter-group-wrap {
      display: block;
    }

    .kln-meter-group-wrap__indicator-row {
      position: relative;
      height: 14px;
      margin-bottom: 2px;
    }

    .kln-meter-group-wrap__indicator {
      position: absolute;
      transform: translateX(-50%);
      color: var(--klini-text-primary, #374151);
      transition: left 0.3s ease;
      line-height: 0;
    }
  `],
})
export class KliniMeterGroupComponent implements OnChanges {
  /** Segmentos da barra — cada item tem label, value, color */
  @Input({ required: true }) value: MeterItem[] = [];
  /** Valor máximo total da barra */
  @Input() max = 100;
  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';
  @Input() labelPosition: 'start' | 'end' = 'end';
  @Input() styleClass = '';

  /**
   * Variante WithIndicator: valor atual a ser marcado com ponteiro triangular.
   * null = comportamento padrão sem indicador.
   */
  @Input() indicatorValue: number | null = null;
  /** Unidade exibida no aria-label do indicador (ex: 'mmHg', 'bpm') */
  @Input() indicatorUnit = '';

  indicatorPercent = 0;

  ngOnChanges(): void {
    if (this.indicatorValue !== null) {
      const clamped = Math.max(0, Math.min(this.max, this.indicatorValue));
      this.indicatorPercent = (clamped / this.max) * 100;
    }
  }
}
