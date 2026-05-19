import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'kln-menubar',
  standalone: true,
  imports: [MenubarModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-menubar [model]="items" [styleClass]="'kln-menubar ' + styleClass">
      <ng-template pTemplate="end"><ng-content /></ng-template>
    </p-menubar>
  `,
  styles: [`:host { display: block; }`],
})
export class KliniMenubarComponent {
  @Input({ required: true }) items: MenuItem[] = [];
  @Input() styleClass = '';
}
