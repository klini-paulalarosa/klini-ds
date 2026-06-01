import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { OrganizationChart } from 'primeng/organizationchart';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'kln-organization-chart',
  standalone: true,
  imports: [OrganizationChart],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-organizationChart
      [value]="value"
      [selectionMode]="selectionMode"
      [styleClass]="styleClass"
      (selectionChange)="selectionChange.emit($event)"
    >
      <ng-content />
    </p-organizationChart>
  `,
})
export class KlnOrganizationChartComponent {
  @Input() value: TreeNode[] = [];
  @Input() selectionMode: 'single' | 'multiple' | undefined = undefined;
  @Input() styleClass = '';

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Output() selectionChange = new EventEmitter<any>();
}
