import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FloatLabelModule } from 'primeng/floatlabel';

/**
 * Label flutuante que envolve qualquer campo de formulário do DS.
 * O label sobe para a posição "over", "in" ou "on" conforme a variante
 * escolhida, seguindo o padrão PrimeNG 18+ de float labels.
 *
 * @atomicLevel molecule
 * @selector kln-float-label
 * @primeng p-floatlabel
 * @example
 * <kln-float-label variant="over">
 *   <kln-input-text label="Nome completo" />
 * </kln-float-label>
 */
@Component({
  selector: 'kln-float-label',
  standalone: true,
  imports: [FloatLabelModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<p-floatlabel [variant]="variant"><ng-content /></p-floatlabel>`,
  styles: [`:host { display: block; }`],
})
export class KlnFloatLabelComponent {
  @Input() variant: 'over' | 'in' | 'on' = 'over';
}
