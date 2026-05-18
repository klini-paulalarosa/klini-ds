import {
  Component, Input, Output, EventEmitter,
  ChangeDetectionStrategy, booleanAttribute,
} from '@angular/core';
import { CommonModule } from '@angular/common';

export type DrawerPosition = 'left' | 'right' | 'top' | 'bottom';

@Component({
  selector: 'klini-drawer',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-container *ngIf="visible">
      <div class="klini-drawer__scrim" (click)="closeOnScrim && close()"></div>
      <div [class]="'klini-drawer klini-drawer--' + position" role="dialog" [attr.aria-label]="header">
        <div *ngIf="header || showCloseBtn" class="klini-drawer__header">
          <span class="klini-drawer__title">{{ header }}</span>
          <button *ngIf="showCloseBtn" type="button" class="klini-drawer__close" (click)="close()" aria-label="Fechar">
            <i class="pi pi-times"></i>
          </button>
        </div>
        <div class="klini-drawer__body">
          <ng-content />
        </div>
        <div class="klini-drawer__footer">
          <ng-content select="[slot=footer]" />
        </div>
      </div>
    </ng-container>
  `,
  styleUrl: './drawer.component.scss',
})
export class DrawerComponent {
  @Input() header = '';
  @Input() position: DrawerPosition = 'right';
  @Input({ transform: booleanAttribute }) visible = false;
  @Input({ transform: booleanAttribute }) closeOnScrim = true;
  @Input({ transform: booleanAttribute }) showCloseBtn = true;

  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() closed        = new EventEmitter<void>();

  close(): void {
    this.visibleChange.emit(false);
    this.closed.emit();
  }
}
