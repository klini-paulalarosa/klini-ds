import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonGroupModule } from 'primeng/buttongroup';

/**
 * Agrupa múltiplos kln-button em uma unidade visual contínua,
 * sem gaps entre eles, compartilhando bordas. Ideal para conjuntos
 * de ações relacionadas como filtros ou opções de visualização.
 *
 * @atomicLevel molecule
 * @selector kln-button-group
 * @primeng p-buttongroup
 * @composedOf kln-button
 * @example
 * <kln-button-group>
 *   <kln-button label="Dia" severity="secondary" />
 *   <kln-button label="Semana" severity="primary" />
 *   <kln-button label="Mês" severity="secondary" />
 * </kln-button-group>
 */
@Component({
  selector: 'kln-button-group',
  standalone: true,
  imports: [ButtonGroupModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<p-buttongroup><ng-content /></p-buttongroup>`,
  styles: [`:host { display: inline-flex; }`],
})
export class KlnButtonGroupComponent {}
