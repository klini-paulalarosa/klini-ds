import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';

@Component({
  selector: 'kln-input-group',
  standalone: true,
  imports: [InputGroupModule, InputGroupAddonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<p-inputgroup><ng-content /></p-inputgroup>`,
  styles: [`:host { display: block; }`],
})
export class KliniInputGroupComponent {}
