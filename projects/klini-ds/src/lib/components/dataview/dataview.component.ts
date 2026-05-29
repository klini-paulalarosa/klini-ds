import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';

@Component({
  selector: 'kln-dataview',
  standalone: true,
  imports: [DataViewModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-dataview
      [value]="value"
      [layout]="layout"
      [paginator]="paginator"
      [rows]="rows"
      [emptyMessage]="emptyMessage"
      [styleClass]="'kln-dataview ' + styleClass"
    >
      <ng-content />
    </p-dataview>
  `,
  styles: [`:host { display: block; }`],
})
export class KlnDataViewComponent {
  @Input({ required: true }) value: unknown[] = [];
  @Input() layout: 'list' | 'grid' = 'list';
  @Input() paginator = false;
  @Input() rows = 10;
  @Input() emptyMessage = 'Nenhum resultado encontrado.';
  @Input() styleClass = '';
}
