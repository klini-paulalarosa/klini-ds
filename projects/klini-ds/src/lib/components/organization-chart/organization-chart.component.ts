import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { OrganizationChart } from 'primeng/organizationchart';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'kln-organization-chart',
  standalone: true,
  imports: [OrganizationChart],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-organizationchart
      [value]="value"
      [selectionMode]="selectionMode"
      [selection]="selection"
      [collapsible]="collapsible"
      [styleClass]="styleClass"
      (selectionChange)="selectionChange.emit($event)"
      (onNodeSelect)="onNodeSelect.emit($event)"
      (onNodeUnselect)="onNodeUnselect.emit($event)"
      (onNodeExpand)="onNodeExpand.emit($event)"
      (onNodeCollapse)="onNodeCollapse.emit($event)"
    />
  `,
})
export class KlnOrganizationChartComponent {
  /** No raiz da arvore de organizacao */
  @Input() value: TreeNode[] = [];

  /** Modo de selecao de nos */
  @Input() selectionMode: 'single' | 'multiple' | undefined = undefined;

  /** No(s) selecionado(s) — use com [(selection)] para two-way binding */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() selection: any = null;

  /** Permite colapsar/expandir nos */
  @Input() collapsible = false;

  /** Classes CSS adicionais no elemento raiz */
  @Input() styleClass = '';

  /** Emite o no selecionado quando a selecao muda */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Output() selectionChange = new EventEmitter<any>();

  /** Emite quando um no e selecionado */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Output() onNodeSelect = new EventEmitter<any>();

  /** Emite quando um no e desselecionado */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Output() onNodeUnselect = new EventEmitter<any>();

  /** Emite quando um no e expandido */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Output() onNodeExpand = new EventEmitter<any>();

  /** Emite quando um no e colapsado */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Output() onNodeCollapse = new EventEmitter<any>();
}
