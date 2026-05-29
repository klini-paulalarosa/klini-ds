import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'kln-empty-state',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="klini-empty-state" [ngClass]="styleClass">
      <i [class]="'pi ' + icon + ' klini-empty-state__icon'"></i>
      <p class="klini-empty-state__title">{{ title }}</p>
      @if (description) {
        <p class="klini-empty-state__description">{{ description }}</p>
      }
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
        padding: var(--kln-space-8) var(--kln-space-4);
        text-align: center;
        gap: var(--kln-space-3);
      }
      .klini-empty-state__icon {
        font-size: 2.5rem;
        color: var(--kln-text-muted);
      }
      .klini-empty-state__title {
        font-size: var(--kln-font-size-body-lg);
        font-weight: 600;
        color: var(--kln-text-primary);
        margin: 0;
        font-family: 'Objective', system-ui, -apple-system, sans-serif;
      }
      .klini-empty-state__description {
        font-size: var(--kln-font-size-body-sm);
        color: var(--kln-text-muted);
        margin: 0;
        font-family: 'Objective', system-ui, -apple-system, sans-serif;
      }
      .klini-empty-state__actions {
        margin-top: var(--kln-space-2);
      }
    `,
  ],
})
export class KlnEmptyStateComponent {
  @Input() title = 'Nenhum resultado encontrado';
  @Input() description = '';
  @Input() icon = 'pi-inbox';
  @Input() styleClass = '';
}
