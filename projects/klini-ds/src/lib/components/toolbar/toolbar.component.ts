import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';

/**
 * Barra de ferramentas com três zonas de conteúdo (start, center, end)
 * via slots de projeção com atributos de conteúdo nomeado.
 * Usada em cabeçalhos de seção, toolbars de tabela e portais.
 *
 * @atomicLevel molecule
 * @selector kln-toolbar
 * @primeng p-toolbar
 * @example
 * <kln-toolbar>
 *   <kln-button klnStart label="Novo" icon="pi-plus" />
 *   <span klnCenter>Pacientes</span>
 *   <kln-input-text klnEnd placeholder="Buscar..." />
 * </kln-toolbar>
 */
@Component({
  selector: 'kln-toolbar',
  standalone: true,
  imports: [ToolbarModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-toolbar [styleClass]="'kln-toolbar ' + styleClass">
      <ng-template pTemplate="start"><ng-content select="[klnStart]" /></ng-template>
      <ng-template pTemplate="center"><ng-content select="[klnCenter]" /></ng-template>
      <ng-template pTemplate="end"><ng-content select="[klnEnd]" /></ng-template>
    </p-toolbar>
  `,
  styles: [`:host { display: block; }`],
})
export class KlnToolbarComponent {
  @Input() styleClass = '';
}
