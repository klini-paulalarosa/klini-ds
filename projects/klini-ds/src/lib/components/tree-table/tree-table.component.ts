import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { TreeTableModule } from 'primeng/treetable';

@Component({
  selector: 'kln-tree-table',
  standalone: true,
  imports: [TreeTableModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-treetable
      [value]="value"
      [rows]="rows"
      [paginator]="paginator"
      [scrollable]="scrollable"
      [scrollHeight]="scrollHeight"
      [styleClass]="styleClass"
    >
      <ng-content />
    </p-treetable>
  `,
})
export class KliniTreeTableComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() value: any[] = [];
  @Input() rows = 10;
  @Input() paginator = false;
  @Input() scrollable = false;
  @Input() scrollHeight = '';
  @Input() styleClass = '';
}
