import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';

/**
 * Agrupa um campo de input com prefixo e/ou sufixo (ícone, texto, botão)
 * em uma única unidade visual coesa. Usa projeção de conteúdo via ng-content.
 *
 * @atomicLevel molecule
 * @selector kln-input-group
 * @primeng p-inputgroup
 * @example
 * <kln-input-group>
 *   <span>R$</span>
 *   <kln-input-number label="Valor" />
 * </kln-input-group>
 */
@Component({
  selector: 'kln-input-group',
  standalone: true,
  imports: [InputGroupModule, InputGroupAddonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<p-inputgroup><ng-content /></p-inputgroup>`,
  styles: [`:host { display: block; }`],
})
export class KlnInputGroupComponent {}
