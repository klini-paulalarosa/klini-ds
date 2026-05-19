import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'kln-carousel',
  standalone: true,
  imports: [CarouselModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-carousel
      [value]="value"
      [numVisible]="numVisible"
      [numScroll]="numScroll"
      [circular]="circular"
      [autoplayInterval]="autoplayInterval"
      [orientation]="orientation"
      [styleClass]="'kln-carousel ' + styleClass"
    >
      <ng-content />
    </p-carousel>
  `,
  styles: [`:host { display: block; }`],
})
export class KliniCarouselComponent {
  @Input({ required: true }) value: unknown[] = [];
  @Input() numVisible = 3;
  @Input() numScroll = 1;
  @Input() circular = false;
  @Input() autoplayInterval = 0;
  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';
  @Input() styleClass = '';
}
