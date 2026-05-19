import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { TieredMenu } from 'primeng/tieredmenu';

@Component({
  selector: 'kln-tiered-menu',
  standalone: true,
  imports: [TieredMenu],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-tieredmenu
      [model]="model"
      [popup]="popup"
      [styleClass]="styleClass"
    />
  `,
})
export class KliniTieredMenuComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() model: any[] = [];
  @Input() popup = false;
  @Input() styleClass = '';
}
