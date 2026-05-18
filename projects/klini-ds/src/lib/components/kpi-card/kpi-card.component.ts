import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

export type KpiTrend = 'up' | 'down' | 'neutral';

@Component({
  selector: 'klini-kpi-card',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="klini-kpi-card">
      <div class="klini-kpi-card__header">
        <span class="klini-kpi-card__label">{{ label }}</span>
        <i *ngIf="icon" [class]="'pi ' + icon + ' klini-kpi-card__icon'"></i>
      </div>
      <div class="klini-kpi-card__body">
        <span class="klini-kpi-card__value">{{ value }}</span>
        <div *ngIf="trend" [class]="'klini-kpi-card__trend klini-kpi-card__trend--' + trend">
          <i [class]="'pi ' + (trend === 'up' ? 'pi-arrow-up' : trend === 'down' ? 'pi-arrow-down' : 'pi-minus')"></i>
          <span *ngIf="trendLabel">{{ trendLabel }}</span>
        </div>
      </div>
      <p *ngIf="description" class="klini-kpi-card__description">{{ description }}</p>
    </div>
  `,
  styles: [`
    .klini-kpi-card {
      background: var(--klini-surface-raised);
      border-radius: var(--klini-radius-xl);
      border: var(--klini-border-width-thin) solid var(--klini-border-default);
      padding: var(--klini-space-4) var(--klini-space-5);
      display: flex; flex-direction: column; gap: var(--klini-space-2);
      font-family: 'Plus Jakarta Sans', sans-serif;

      &__header {
        display: flex; align-items: center; justify-content: space-between;
      }
      &__label {
        font-size: var(--klini-font-size-body-sm); font-weight: 500;
        color: var(--klini-text-secondary);
      }
      &__icon { font-size: var(--klini-size-icon-md); color: var(--klini-text-muted); }
      &__value {
        font-size: var(--klini-font-size-h2); font-weight: 700;
        color: var(--klini-text-primary); line-height: 1;
      }
      &__body { display: flex; align-items: baseline; gap: var(--klini-space-3); }
      &__trend {
        display: flex; align-items: center; gap: var(--klini-space-1);
        font-size: var(--klini-font-size-body-sm); font-weight: 600;
        &--up   { color: var(--klini-feedback-success-fg); }
        &--down { color: var(--klini-feedback-danger-fg); }
        &--neutral { color: var(--klini-text-muted); }
      }
      &__description {
        font-size: var(--klini-font-size-body-sm); color: var(--klini-text-muted);
        margin: 0;
      }
    }
  `],
})
export class KpiCardComponent {
  @Input({ required: true }) label = '';
  @Input({ required: true }) value: string | number = '';
  @Input() description = '';
  @Input() icon = '';
  @Input() trend: KpiTrend | undefined;
  @Input() trendLabel = '';
}
