import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'kln-dialog',
  standalone: true,
  imports: [CommonModule, DialogModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-dialog
      [(visible)]="visible"
      (visibleChange)="visibleChange.emit($event)"
      [header]="header"
      [modal]="modal"
      [closable]="closable"
      [maximizable]="maximizable"
      [draggable]="draggable"
      [position]="position"
      [styleClass]="'klini-dialog ' + styleClass"
      [contentStyleClass]="contentStyleClass"
    >
      <ng-content />
      <ng-template pTemplate="footer">
        <ng-content select="[kliniDialogFooter]" />
      </ng-template>
    </p-dialog>
  `,
  styles: [
    `
      :host ::ng-deep .klini-dialog {
        border-radius: var(--klini-radius-xl);
        box-shadow: var(--klini-elevation-xl);
        font-family: 'Plus Jakarta Sans', sans-serif;
      }
    `,
  ],
})
export class KliniDialogComponent {
  @Input() visible = false;
  @Input() header = '';
  @Input() modal = true;
  @Input() closable = true;
  @Input() maximizable = false;
  @Input() draggable = false;
  @Input() position:
    | 'center'
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'topleft'
    | 'topright'
    | 'bottomleft'
    | 'bottomright' = 'center';
  @Input() styleClass = '';
  @Input() contentStyleClass = '';

  @Output() visibleChange = new EventEmitter<boolean>();
}
