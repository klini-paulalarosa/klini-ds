import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TreeModule } from 'primeng/tree';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'kln-tree',
  standalone: true,
  imports: [TreeModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-tree
      [value]="nodes"
      [selectionMode]="selectionMode"
      [(selection)]="selection"
      [filter]="filter"
      [loading]="loading"
      [styleClass]="'kln-tree ' + styleClass"
      (selectionChange)="selectionChange.emit($event)"
    />
  `,
  styles: [`:host { display: block; }`],
})
export class KlnTreeComponent {
  @Input({ required: true }) nodes: TreeNode[] = [];
  @Input() selectionMode: 'single' | 'multiple' | 'checkbox' | null = null;
  @Input() selection: TreeNode | TreeNode[] | null = null;
  @Input() filter = false;
  @Input() loading = false;
  @Input() styleClass = '';
  @Output() selectionChange = new EventEmitter<TreeNode | TreeNode[] | null>();
}
