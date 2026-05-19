import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { PickList } from 'primeng/picklist';

@Component({
  selector: 'kln-pick-list',
  standalone: true,
  imports: [PickList],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-picklist
      [source]="source"
      [target]="target"
      [sourceHeader]="sourceHeader"
      [targetHeader]="targetHeader"
      [filterBy]="filterBy"
      [showSourceFilter]="showSourceFilter"
      [showTargetFilter]="showTargetFilter"
      [styleClass]="styleClass"
      (onMoveToTarget)="targetChange.emit(target)"
      (onMoveToSource)="sourceChange.emit(source)"
    >
      <ng-template pTemplate="item" let-item>
        <ng-content />
      </ng-template>
    </p-picklist>
  `,
})
export class KliniPickListComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() source: any[] = [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() target: any[] = [];
  @Input() sourceHeader = 'Disponível';
  @Input() targetHeader = 'Selecionado';
  @Input() filterBy = '';
  @Input() showSourceFilter = true;
  @Input() showTargetFilter = true;
  @Input() styleClass = '';

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Output() sourceChange = new EventEmitter<any[]>();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Output() targetChange = new EventEmitter<any[]>();
}
