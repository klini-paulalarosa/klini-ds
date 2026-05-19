import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ImageCompareModule } from 'primeng/imagecompare';

/**
 * kln-image-compare — wrapper sobre p-imagecompare do PrimeNG.
 *
 * Uso:
 *   <kln-image-compare>
 *     <img src="before.jpg" alt="Antes" />
 *     <img src="after.jpg"  alt="Depois" />
 *   </kln-image-compare>
 */
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
export class KliniImageCompareComponent {
  @Input() styleClass = '';
}
