import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SpeedDialModule } from 'primeng/speeddial';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'kln-speed-dial',
  standalone: true,
  imports: [SpeedDialModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-speeddial
      [model]="items"
      [direction]="direction"
      [type]="type"
      [radius]="radius"
      [visible]="visible"
      [hideOnClickOutside]="hideOnClickOutside"
      [className]="styleClass"
    />
  `,
  styles: [`:host { display: block; position: relative; }`],
})
export class KliniSpeedDialComponent {
  @Input({ required: true }) items: MenuItem[] = [];
  @Input() direction: 'up' | 'down' | 'left' | 'right' = 'up';
  @Input() type: 'linear' | 'circle' | 'semi-circle' | 'quarter-circle' = 'linear';
  @Input() radius = 0;
  @Input() visible = true;
  @Input() hideOnClickOutside = true;
  @Input() styleClass = '';
}
