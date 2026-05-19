import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'kln-float-label',
  standalone: true,
  imports: [FloatLabelModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<p-floatlabel [variant]="variant"><ng-content /></p-floatlabel>`,
  styles: [`:host { display: block; }`],
})
export class KliniFloatLabelComponent {
  @Input() variant: 'over' | 'in' | 'on' = 'over';
}
