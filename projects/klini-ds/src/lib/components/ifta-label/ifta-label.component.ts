import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { IftaLabel } from 'primeng/iftalabel';

@Component({
  selector: 'kln-ifta-label',
  standalone: true,
  imports: [IftaLabel],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-iftalabel>
      <ng-content />
    </p-iftalabel>
  `,
})
export class KliniIftaLabelComponent {}
