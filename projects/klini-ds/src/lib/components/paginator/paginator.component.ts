import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';

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
      (onPageChange)="onPage($event)"
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

  @Output() pageChange = new EventEmitter<any>();
  @Output() firstChange = new EventEmitter<number>();

  onPage(e: any): void {
    this.firstChange.emit(e.first);
    this.pageChange.emit(e);
  }
}
