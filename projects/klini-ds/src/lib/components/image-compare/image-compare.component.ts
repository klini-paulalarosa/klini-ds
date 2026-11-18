import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ImageCompareModule } from 'primeng/imagecompare';

@Component({
  selector:         'kln-image-compare',
  standalone:       true,
  imports:          [ImageCompareModule],
  changeDetection:  ChangeDetectionStrategy.OnPush,
  template: `
    <p-imagecompare [class]="styleClass">
      <ng-content />
    </p-imagecompare>
  `,
})
export class KlnImageCompareComponent {
  @Input() styleClass = '';
}
