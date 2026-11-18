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
      color: var(--kln-text-primary, #374151);
      transition: left 0.3s ease;
      line-height: 0;
    }
  `],
})
export class KlnMeterGroupComponent implements OnChanges {
  @Input({ required: true }) value: MeterItem[] = [];
  @Input() max = 100;
  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';
  @Input() labelPosition: 'start' | 'end' = 'end';
  @Input() styleClass = '';

  @Input() indicatorValue: number | null = null;
  @Input() indicatorUnit = '';

  indicatorPercent = 0;

  ngOnChanges(): void {
    if (this.indicatorValue !== null) {
      const clamped = Math.max(0, Math.min(this.max, this.indicatorValue));
      this.indicatorPercent = (clamped / this.max) * 100;
    }
  }
}
