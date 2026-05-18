import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';

export type KpiTrend = 'up' | 'down' | 'neutral';

/**
 * Card de indicador (KPI) — usa p-card como base estrutural.
 * Layout e tipografia são definidos pelos tokens Klini via tema.
 */
@Component({
  selector: 'klini-kpi-card',
  standalone: true,
  imports: [CardModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-card styleClass="klini-kpi-card">
      <ng-template pTemplate="header">
        <div class="klini-kpi-card__header">
          <span class="klini-kpi-card__label">{{ label }}</span>
          <i *ngIf="icon" [class]="'pi ' + icon + ' klini-kpi-card__icon'"></i>
        </div>
      </ng-template>

      <div class="klini-kpi-card__body">
        <span class="klini-kpi-card__value">{{ value }}</span>
        <div *ngIf="trend" [class]="'klini-kpi-card__trend klini-kpi-card__trend--' + trend">
          <i [class]="trendIcon"></i>
          <span *ngIf="trendLabel">{{ trendLabel }}</span>
        </div>
      </div>

      <ng-template pTemplate="footer">
        <p *ngIf="description" class="klini-kpi-card__description">{{ description }}</p>
        <ng-content select="[slot=footer]" />
      </ng-template>
    </p-card>
  `,
  styles: [`
    :host ::ng-deep {
      .klini-kpi-card {
        .p-card-body { padding: var(--klini-space-4) var(--klini-space-5); }
        .p-card-header { padding: 0; }
        .p-card-footer { padding: var(--klini-space-2) 0 0; }
        .p-card-content { padding: var(--klini-space-2) 0; }
      }

      .klini-kpi-card__header {
        display: flex; align-items: center; justify-content: space-between;
        padding: var(--klini-space-4) var(--klini-space-5) 0;
      }
      .klini-kpi-card__label {
        font-size: var(--klini-font-size-body-sm); font-weight: 500;
        color: var(--klini-text-secondary); font-family: 'Plus Jakarta Sans', sans-serif;
      }
      .klini-kpi-card__icon { font-size: var(--klini-size-icon-md); color: var(--klini-text-muted); }
      .klini-kpi-card__body { display: flex; align-items: baseline; gap: var(--klini-space-3); }
      .klini-kpi-card__value {
        font-size: var(--klini-font-size-h2); font-weight: 700;
        color: var(--klini-text-primary); line-height: 1;
        font-family: 'Plus Jakarta Sans', sans-serif;
      }
      .klini-kpi-card__trend {
        display: flex; align-items: center; gap: var(--klini-space-1);
        font-size: var(--klini-font-size-body-sm); font-weight: 600;
        font-family: 'Plus Jakarta Sans', sans-serif;
        &--up      { color: var(--klini-feedback-success-fg); }
        &--down    { color: var(--klini-feedback-danger-fg);  }
        &--neutral { color: var(--klini-text-muted); }
      }
      .klini-kpi-card__description {
        font-size: var(--klini-font-size-body-sm); color: var(--klini-text-muted);
        margin: 0; font-family: 'Plus Jakarta Sans', sans-serif;
      }
    }
  `],
})
export class KpiCardComponent {
  @Input({ required: true }) label = '';
  @Input({ required: true }) value: string | number = '';
  @Input() description = '';
  @Input() icon        = '';
  @Input() trend: KpiTrend | undefined;
  @Input() trendLabel  = '';

  get trendIcon(): string {
    if (this.trend === 'up')      return 'pi pi-arrow-up';
    if (this.trend === 'down')    return 'pi pi-arrow-down';
    if (this.trend === 'neutral') return 'pi pi-minus';
    return '';
  }
}
