import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { TableModule } from 'primeng/table';

export interface KlnTableColumn {
  field: string;
  header: string;
  sortable?: boolean;
  width?: string;
}

@Component({
  selector: 'kln-table',
  standalone: true,
  imports: [TableModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-table
      [value]="value"
      [columns]="columns"
      [loading]="loading"
      [paginator]="paginator"
      [rows]="pageSize"
      [rowsPerPageOptions]="rowsPerPageOptions"
      [styleClass]="'klini-table ' + styleClass"
    >
      <ng-template pTemplate="header" let-columns>
        <tr>
          @for (col of columns; track col.field) {
            <th
              [pSortableColumn]="col.sortable ? col.field : null"
              [style.width]="col.width || null"
            >
              {{ col.header }}
              @if (col.sortable) {
                <p-sortIcon [field]="col.field" />
              }
            </th>
          }
        </tr>
      </ng-template>
      <ng-template pTemplate="body" let-row let-columns="columns">
        <tr>
          @for (col of columns; track col.field) {
            <td>{{ $any(row)[col.field] }}</td>
          }
        </tr>
      </ng-template>
      <ng-template pTemplate="emptymessage">
        <tr>
          <td [attr.colspan]="columns?.length || 1" class="klini-table__empty">
            {{ emptyMessage }}
          </td>
        </tr>
      </ng-template>
      <ng-content />
    </p-table>
  `,
  styles: [
    `
      :host {
        display: block;
      }
      .klini-table__empty {
        text-align: center;
        color: var(--kln-text-muted);
        padding: var(--kln-space-6) 0;
        font-family: 'Objective', system-ui, -apple-system, sans-serif;
      }
    `,
  ],
})
export class KlnTableComponent {
  @Input() value: Record<string, unknown>[] = [];
  @Input() columns: KlnTableColumn[] = [];
  @Input() loading = false;
  @Input() paginator = false;
  @Input() pageSize = 10;
  @Input() rowsPerPageOptions: number[] = [10, 25, 50];
  @Input() emptyMessage = 'Nenhum resultado encontrado.';
  @Input() styleClass = '';
}
