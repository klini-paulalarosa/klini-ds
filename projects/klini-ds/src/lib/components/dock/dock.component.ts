import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Dock } from 'primeng/dock';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'kln-dock',
  standalone: true,
  imports: [Dock],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-dock
      [model]="model"
      [position]="position"
      [styleClass]="styleClass"
      [style]="style"
      [ariaLabel]="ariaLabel"
      [ariaLabelledBy]="ariaLabelledBy"
    />
  `,
})
export class KlnDockComponent {
  @Input() model: MenuItem[] = [];

  @Input() position: 'bottom' | 'top' | 'left' | 'right' = 'bottom';

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() style: Record<string, any> = {};

  @Input() styleClass = '';

  @Input() ariaLabel = '';

  @Input() ariaLabelledBy = '';
}
