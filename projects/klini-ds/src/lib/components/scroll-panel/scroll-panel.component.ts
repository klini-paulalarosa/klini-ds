import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ScrollPanelModule } from 'primeng/scrollpanel';

@Component({
  selector: 'kln-scroll-panel',
  standalone: true,
  imports: [ScrollPanelModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-scrollpanel [style]="style" [styleClass]="styleClass">
      <ng-content />
    </p-scrollpanel>
  `,
  styles: [`:host { display: block; }`],
})
export class KliniScrollPanelComponent {
  @Input() style: Record<string, string> = {};
  @Input() styleClass = '';
}
