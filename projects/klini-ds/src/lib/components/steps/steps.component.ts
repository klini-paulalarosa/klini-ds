import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { StepsModule } from 'primeng/steps';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'kln-steps',
  standalone: true,
  imports: [StepsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-steps
      [model]="items"
      [activeIndex]="activeIndex"
      [readonly]="readonly"
      [styleClass]="'kln-steps ' + styleClass"
    />
  `,
  styles: [`:host { display: block; }`],
})
export class KlnStepsComponent {
  @Input({ required: true }) items: MenuItem[] = [];
  @Input() activeIndex = 0;
  @Input() readonly = true;
  @Input() styleClass = '';
}
