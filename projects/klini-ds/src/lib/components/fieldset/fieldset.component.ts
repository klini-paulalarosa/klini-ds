import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';

@Component({
  selector: 'kln-fieldset',
  standalone: true,
  imports: [FieldsetModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-fieldset
      [legend]="legend"
      [toggleable]="toggleable"
      [collapsed]="collapsed"
      [styleClass]="'kln-fieldset ' + styleClass"
    >
      <ng-content />
    </p-fieldset>
  `,
  styles: [`:host { display: block; }`],
})
export class KlnFieldsetComponent {
  @Input() legend = '';
  @Input() toggleable = false;
  @Input() collapsed = false;
  @Input() styleClass = '';
}
