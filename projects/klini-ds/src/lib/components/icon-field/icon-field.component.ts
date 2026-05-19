import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';

@Component({
  selector: 'kln-icon-field',
  standalone: true,
  imports: [IconField, InputIcon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-iconfield [iconPosition]="iconPosition">
      <ng-content />
    </p-iconfield>
  `,
})
export class KliniIconFieldComponent {
  @Input() iconPosition: 'left' | 'right' = 'left';
}
