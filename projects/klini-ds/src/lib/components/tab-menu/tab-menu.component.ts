import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'kln-tab-menu',
  standalone: true,
  imports: [TabMenuModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-tabmenu
      [model]="items"
      [activeItem]="activeItem"
      [styleClass]="'kln-tab-menu ' + styleClass"
      (activeItemChange)="activeItemChange.emit($event)"
    />
  `,
  styles: [`:host { display: block; }`],
})
export class KlnTabMenuComponent {
  @Input({ required: true }) items: MenuItem[] = [];
  @Input() activeItem: MenuItem | undefined;
  @Input() styleClass = '';
  @Output() activeItemChange = new EventEmitter<MenuItem>();
}
