import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { PanelMenu } from 'primeng/panelmenu';

@Component({
  selector: 'kln-panel-menu',
  standalone: true,
  imports: [PanelMenu],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-panelmenu
      [model]="model"
      [multiple]="multiple"
      [styleClass]="styleClass"
    />
  `,
})
export class KliniPanelMenuComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() model: any[] = [];
  @Input() multiple = true;
  @Input() styleClass = '';
}
