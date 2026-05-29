import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonGroupModule } from 'primeng/buttongroup';

@Component({
  selector: 'kln-button-group',
  standalone: true,
  imports: [ButtonGroupModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<p-buttongroup><ng-content /></p-buttongroup>`,
  styles: [`:host { display: inline-flex; }`],
})
export class KlnButtonGroupComponent {}
