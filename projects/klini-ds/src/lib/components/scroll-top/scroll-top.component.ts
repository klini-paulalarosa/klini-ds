import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { ScrollTop } from 'primeng/scrolltop';

@Component({
  selector: 'kln-scroll-top',
  standalone: true,
  imports: [ScrollTop],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-scrolltop
      [target]="target"
      [threshold]="threshold"
      [icon]="icon"
      [styleClass]="styleClass"
    />
  `,
})
export class KlnScrollTopComponent {
  @Input() target: 'window' | 'parent' = 'window';
  @Input() threshold = 400;
  @Input() icon = 'pi pi-arrow-up';
  @Input() styleClass = '';
}
