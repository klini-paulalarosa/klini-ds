import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SplitterModule } from 'primeng/splitter';

@Component({
  selector: 'kln-splitter',
  standalone: true,
  imports: [SplitterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-splitter
      [layout]="layout"
      [gutterSize]="gutterSize"
      [stateKey]="stateKey || null"
      [styleClass]="'kln-splitter ' + styleClass"
    >
      <ng-content />
    </p-splitter>
  `,
  styles: [`:host { display: block; }`],
})
export class KlnSplitterComponent {
  @Input() layout: 'horizontal' | 'vertical' = 'horizontal';
  @Input() gutterSize = 4;
  @Input() stateKey = '';
  @Input() styleClass = '';
}
