import {
  Component, Input, Output, EventEmitter,
  ChangeDetectionStrategy, booleanAttribute,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'klini-chip',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div [class]="'klini-chip' + (selected ? ' klini-chip--selected' : '') + (removable ? ' klini-chip--removable' : '')">
      <i *ngIf="icon" [class]="'pi ' + icon + ' klini-chip__icon'"></i>
      <img *ngIf="image" [src]="image" class="klini-chip__image" [alt]="label" />
      <span class="klini-chip__label">{{ label }}</span>
      <button *ngIf="removable" type="button" class="klini-chip__remove" (click)="removed.emit()" aria-label="Remover">
        <i class="pi pi-times"></i>
      </button>
    </div>
  `,
  styles: [`
    .klini-chip {
      display: inline-flex; align-items: center; gap: var(--klini-space-2);
      padding: 0 var(--klini-space-3); height: 32px;
      border-radius: var(--klini-radius-pill);
      border: var(--klini-border-width-thin) solid var(--klini-border-default);
      background: var(--klini-surface-raised);
      font-size: var(--klini-font-size-body-sm);
      font-family: 'Plus Jakarta Sans', sans-serif;
      color: var(--klini-text-primary);

      &--selected {
        background: var(--klini-surface-brand-soft);
        border-color: var(--klini-border-brand);
        color: var(--klini-text-brand);
      }
      &__image { width: 20px; height: 20px; border-radius: 50%; object-fit: cover; }
      &__icon { font-size: var(--klini-size-icon-sm); }
      &__remove {
        background: none; border: none; padding: 0; cursor: pointer;
        color: inherit; line-height: 1; opacity: 0.6;
        &:hover { opacity: 1; }
      }
    }
  `],
})
export class ChipComponent {
  @Input({ required: true }) label = '';
  @Input() icon  = '';
  @Input() image = '';
  @Input({ transform: booleanAttribute }) removable = false;
  @Input({ transform: booleanAttribute }) selected  = false;

  @Output() removed = new EventEmitter<void>();
}
