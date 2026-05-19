import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { MegaMenu } from 'primeng/megamenu';

@Component({
  selector: 'kln-mega-menu',
  standalone: true,
  imports: [MegaMenu],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-megamenu
      [model]="model"
      [orientation]="orientation"
      [styleClass]="styleClass"
    />
  `,
})
export class KliniMegaMenuComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() model: any[] = [];
  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';
  @Input() styleClass = '';
}
