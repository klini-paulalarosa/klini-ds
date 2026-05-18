import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'klini-empty-state',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="klini-empty-state" [ngClass]="styleClass">
      <i [class]="'pi ' + icon + ' klini-empty-state__icon'"></i>
      <p class="klini-empty-state__title">{{ title }}</p>
      <p *ngIf="description" class="klini-empty-state__description">{{ description }}</p>
      <div class="klini-empty-state__actions">
        <ng-content />
      </div>
    </div>
  `,
  styles: [
    `
      .klini-empty-state {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: var(--klini-space-8) var(--klini-space-4);
        text-align: center;
        gap: var(--klini-space-3);
      }
      .klini-empty-state__icon {
        font-size: 2.5rem;
        color: var(--klini-text-muted);
      }
      .klini-empty-state__title {
        font-size: var(--klini-font-size-body-lg);
        font-weight: 600;
        color: var(--klini-text-primary);
        margin: 0;
        font-family: 'Plus Jakarta Sans', sans-serif;
      }
      .klini-empty-state__description {
        font-size: var(--klini-font-size-body-sm);
        color: var(--klini-text-muted);
        margin: 0;
        font-family: 'Plus Jakarta Sans', sans-serif;
      }
      .klini-empty-state__actions {
        margin-top: var(--klini-space-2);
      }
    `,
  ],
})
export class KliniEmptyStateComponent {
  @Input() title = 'Nenhum resultado encontrado';
  @Input() description = '';
  @Input() icon = 'pi-inbox';
  @Input() styleClass = '';
}
