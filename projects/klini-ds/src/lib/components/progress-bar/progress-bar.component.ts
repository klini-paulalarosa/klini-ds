import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
  selector: 'kln-progress-bar',
  standalone: true,
  imports: [ProgressBarModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-progressbar
      [value]="value"
      [mode]="mode"
      [showValue]="showValue"
      [unit]="unit"
      [styleClass]="styleClass"
    />
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class KlnProgressBarComponent {
  @Input() value = 0;
  @Input() mode: 'determinate' | 'indeterminate' = 'determinate';
  @Input() showValue = true;
  @Input() unit = '%';
  @Input() styleClass = '';
}
