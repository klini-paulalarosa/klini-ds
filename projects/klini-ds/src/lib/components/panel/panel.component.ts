import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'kln-panel',
  standalone: true,
  imports: [PanelModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-panel
      [header]="header"
      [toggleable]="toggleable"
      [collapsed]="collapsed"
      [styleClass]="'kln-panel ' + styleClass"
    >
      <ng-content />
    </p-panel>
  `,
  styles: [`:host { display: block; }`],
})
export class KliniPanelComponent {
  @Input() header = '';
  @Input() toggleable = false;
  @Input() collapsed = false;
  @Input() styleClass = '';
}
