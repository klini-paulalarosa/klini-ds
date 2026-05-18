import {
  Component, Input, Output, EventEmitter,
  ChangeDetectionStrategy, booleanAttribute,
} from '@angular/core';
import { DrawerModule } from 'primeng/drawer';

export type KliniDrawerPosition = 'left' | 'right' | 'top' | 'bottom' | 'full';

/**
 * Wrapper sobre p-drawer do PrimeNG (ex p-sidebar).
 * Estilização 100% via KliniPrime theme preset.
 */
@Component({
  selector: 'klini-drawer',
  standalone: true,
  imports: [DrawerModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-drawer
      [(visible)]="visible"
      [header]="header"
      [position]="position"
      [modal]="modal"
      [closeOnEscape]="closeOnEscape"
      [styleClass]="styleClass"
      (onHide)="closed.emit()"
      (visibleChange)="visibleChange.emit($event)"
    >
      <ng-content />
      <ng-template pTemplate="footer">
        <ng-content select="[slot=footer]" />
      </ng-template>
    </p-drawer>
  `,
})
export class DrawerComponent {
  @Input() header   = '';
  @Input() position: KliniDrawerPosition = 'right';
  @Input() styleClass = '';
  @Input({ transform: booleanAttribute }) visible       = false;
  @Input({ transform: booleanAttribute }) modal         = true;
  @Input({ transform: booleanAttribute }) closeOnEscape = true;

  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() closed        = new EventEmitter<void>();
}
