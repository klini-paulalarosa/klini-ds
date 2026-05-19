import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'kln-menu',
  standalone: true,
  imports: [MenuModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-menu [model]="items" [popup]="popup" [styleClass]="styleClass" />
  `,
})
export class KliniMenuComponent {
  @Input() items: MenuItem[] = [];
  @Input() popup = false;
  @Input() styleClass = '';
}
