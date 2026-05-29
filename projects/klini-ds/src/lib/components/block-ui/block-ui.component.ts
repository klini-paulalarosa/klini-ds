import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { BlockUI } from 'primeng/blockui';

@Component({
  selector: 'kln-block-ui',
  standalone: true,
  imports: [BlockUI],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-blockui [blocked]="blocked" [styleClass]="styleClass">
      <ng-content />
    </p-blockui>
  `,
})
export class KlnBlockUiComponent {
  @Input() blocked = false;
  @Input() styleClass = '';
}
