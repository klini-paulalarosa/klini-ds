import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Dock } from 'primeng/dock';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'kln-dock',
  standalone: true,
  imports: [Dock],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-dock
      [model]="model"
      [position]="position"
      [styleClass]="styleClass"
      [style]="style"
      [ariaLabel]="ariaLabel"
      [ariaLabelledBy]="ariaLabelledBy"
    />
  `,
})
export class KlnDockComponent {
  /** Itens do dock — cada item e um MenuItem do PrimeNG (icon, label, command, routerLink, url) */
  @Input() model: MenuItem[] = [];

  /** Posicao do dock na tela */
  @Input() position: 'bottom' | 'top' | 'left' | 'right' = 'bottom';

  /** Estilo inline no elemento raiz */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() style: Record<string, any> = {};

  /** Classes CSS adicionais no elemento raiz */
  @Input() styleClass = '';

  /** aria-label para acessibilidade */
  @Input() ariaLabel = '';

  /** aria-labelledby para acessibilidade */
  @Input() ariaLabelledBy = '';
}
