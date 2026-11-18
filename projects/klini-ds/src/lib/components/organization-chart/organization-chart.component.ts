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
      (onNodeSelect)="nodeSelect.emit($event)"
      (onNodeUnselect)="nodeUnselect.emit($event)"
      (onNodeExpand)="nodeExpand.emit($event)"
      (onNodeCollapse)="nodeCollapse.emit($event)"
    />
  `,
})
export class KlnOrganizationChartComponent {
  @Input() value: TreeNode[] = [];

  @Input() selectionMode: 'single' | 'multiple' | undefined = undefined;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() selection: any = null;

  @Input() collapsible = false;

  @Input() styleClass = '';

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Output() selectionChange = new EventEmitter<any>();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Output() nodeSelect = new EventEmitter<any>();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Output() nodeUnselect = new EventEmitter<any>();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Output() nodeExpand = new EventEmitter<any>();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Output() nodeCollapse = new EventEmitter<any>();
}
