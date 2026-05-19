import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';

interface PaginatorPageEvent { first: number; rows: number; page: number; pageCount: number; }

@Component({
  selector: 'klini-paginator',
  standalone: true,
  imports: [PaginatorModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-paginator
      [totalRecords]="totalRecords"
      [rows]="rows"
      [first]="first"
      [rowsPerPageOptions]="rowsPerPageOptions"
      [showJumpToPageDropdown]="showJumpToPage"
      [styleClass]="styleClass"
      (onPageChange)="onPage($any($event))"
    />
  `,
})
export class KliniPaginatorComponent {
  @Input() totalRecords = 0;
  @Input() rows = 10;
  @Input() first = 0;
  @Input() rowsPerPageOptions: number[] = [10, 25, 50];
  @Input() showJumpToPage = false;
  @Input() styleClass = '';

  @Output() pageChange = new EventEmitter<PaginatorPageEvent>();
  @Output() firstChange = new EventEmitter<number>();

  onPage(e: PaginatorState): void {
    this.firstChange.emit(e.first ?? 0);
    this.pageChange.emit({
      first: e.first ?? 0,
      rows: e.rows ?? this.rows,
      page: e.page ?? 0,
      pageCount: e.pageCount ?? 0,
    });
  }
}
