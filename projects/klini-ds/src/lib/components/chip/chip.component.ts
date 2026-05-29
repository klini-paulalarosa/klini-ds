import {
  Component, Input, Output, EventEmitter,
  ChangeDetectionStrategy, booleanAttribute,
} from '@angular/core';
import { ChipModule } from 'primeng/chip';

/**
 * Wrapper sobre p-chip do PrimeNG.
 * Estilização 100% via KlnPrime theme preset.
 */
@Component({
  selector: 'kln-chip',
  standalone: true,
  imports: [ChipModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-chip
      [label]="label"
      [icon]="icon || undefined"
      [image]="image || undefined"
      [removable]="removable"
      [styleClass]="styleClass"
      (onRemove)="removed.emit()"
    />
  `,
})
export class ChipComponent {
  @Input({ required: true }) label = '';
  @Input() icon       = '';
  @Input() image      = '';
  @Input() styleClass = '';
  @Input({ transform: booleanAttribute }) removable = false;

  @Output() removed = new EventEmitter<void>();
}
