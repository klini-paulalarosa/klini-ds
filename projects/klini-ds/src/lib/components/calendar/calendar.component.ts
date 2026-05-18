import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

// Klini Calendar — wrapper semântico sobre o p-datepicker do PrimeNG
// Aplica os tokens do Klini DS via CSS custom properties herdadas do tema

@Component({
  selector: 'klini-calendar',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="klini-calendar-wrapper">
      <label *ngIf="label" class="klini-calendar__label">{{ label }}</label>
      <!-- Projeta o p-datepicker do PrimeNG, já estilizado pelo KliniPrime theme -->
      <ng-content />
    </div>
  `,
  styles: [`
    .klini-calendar-wrapper {
      display: flex; flex-direction: column; gap: var(--klini-space-1);
      font-family: 'Plus Jakarta Sans', sans-serif;
    }
    .klini-calendar__label {
      font-size: var(--klini-font-size-body-sm); font-weight: 600;
      color: var(--klini-field-label);
    }
  `],
})
export class CalendarComponent {
  @Input() label = '';
}
