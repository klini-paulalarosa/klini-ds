import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { OrderListModule } from 'primeng/orderlist';

@Component({
  selector: 'kln-order-list',
  standalone: true,
  imports: [OrderListModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-orderlist
      [value]="value"
      [header]="header"
      [filterBy]="filterBy"
      [styleClass]="'kln-order-list ' + styleClass"
      (onReorder)="reordered.emit($event)"
    >
      <ng-content />
    </p-orderlist>
  `,
  styles: [`:host { display: block; }`],
})
export class KliniOrderListComponent {
  @Input({ required: true }) value: unknown[] = [];
  @Input() header = '';
  @Input() filterBy = '';
  @Input() styleClass = '';
  @Output() reordered = new EventEmitter<unknown>();
}
