import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { ContextMenu } from 'primeng/contextmenu';

@Component({
  selector: 'kln-context-menu',
  standalone: true,
  imports: [ContextMenu],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-contextmenu
      [model]="model"
      [global]="global"
      [target]="target"
      [styleClass]="styleClass"
    />
  `,
})
export class KlnContextMenuComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() model: any[] = [];
  @Input() global = false;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() target: any = null;
  @Input() styleClass = '';
}
