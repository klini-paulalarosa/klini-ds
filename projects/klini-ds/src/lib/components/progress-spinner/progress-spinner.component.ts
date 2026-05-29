import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'kln-progress-spinner',
  standalone: true,
  imports: [ProgressSpinnerModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-progressspinner
      [style]="spinnerStyle"
      [styleClass]="styleClass"
      [strokeWidth]="strokeWidth"
      [fill]="fill"
      [animationDuration]="animationDuration"
    />
  `,
  styles: [`:host { display: inline-block; }`],
})
export class KlnProgressSpinnerComponent {
  @Input() size = 50;
  @Input() strokeWidth = '8';
  @Input() fill = 'transparent';
  @Input() animationDuration = '2s';
  @Input() styleClass = '';
  get spinnerStyle(): Record<string, string> {
    return { width: `${this.size}px`, height: `${this.size}px` };
  }
}
