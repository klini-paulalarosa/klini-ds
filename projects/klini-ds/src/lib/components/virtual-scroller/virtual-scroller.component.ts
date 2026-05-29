import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ScrollerModule } from 'primeng/scroller';

@Component({
  selector: 'kln-virtual-scroller',
  standalone: true,
  imports: [ScrollerModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-scroller
      [items]="items"
      [itemSize]="itemSize"
      [scrollHeight]="scrollHeight"
      [lazy]="lazy"
      [styleClass]="'kln-virtual-scroller ' + styleClass"
    >
      <ng-content />
    </p-scroller>
  `,
  styles: [`:host { display: block; }`],
})
export class KlnVirtualScrollerComponent {
  @Input({ required: true }) items: unknown[] = [];
  @Input() itemSize = 50;
  @Input() scrollHeight = '400px';
  @Input() lazy = false;
  @Input() styleClass = '';
}
