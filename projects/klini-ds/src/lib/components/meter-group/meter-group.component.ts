// kln-meter-group — wrapper PrimeNG p-metergroup
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MeterGroupModule, MeterItem } from 'primeng/metergroup';

@Component({
  selector: 'kln-meter-group',
  standalone: true,
  imports: [MeterGroupModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-metergroup
      [value]="value"
      [max]="max"
      [orientation]="orientation"
      [labelPosition]="labelPosition"
      [styleClass]="'kln-meter-group ' + styleClass"
    />
  `,
  styles: [`:host { display: block; }`],
})
export class KliniMeterGroupComponent {
  @Input({ required: true }) value: MeterItem[] = [];
  @Input() max = 100;
  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';
  @Input() labelPosition: 'start' | 'end' = 'end';
  @Input() styleClass = '';
}
