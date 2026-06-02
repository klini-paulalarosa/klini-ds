import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CardModule } from 'primeng/card';

export type KpiTrend = 'up' | 'down' | 'neutral';

/**
 * Card de indicador de performance (KPI) para dashboards do Klini App.
 * Compõe internamente: ícone (PrimeIcons), valor principal, badge de tendência
 * (up/down/neutral com cores semânticas) e descrição auxiliar opcionais.
 *
 * @atomicLevel organism
 * @selector kln-kpi-card
 * @primeng p-card
 * @composedOf Ícone PrimeIcons, Valor tipográfico, Tendência com cores semânticas, Slot de footer
 * @example
 * <kln-kpi-card
 *   label="Consultas realizadas"
 *   value="1.248"
 *   icon="pi-calendar"
 *   trend="up"
 *   trendLabel="+12% vs mês anterior"
 *   description="Últimos 30 dias"
 * />
 */
@Component({
  selector: 'kln-kpi-card',
  standalone: true,
  imports: [CardModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-card styleClass="klini-kpi-card">
      <ng-template pTemplate="header">
        <div class="klini-kpi-card__header">
          <span class="klini-kpi-card__label">{{ label }}</span>
          @if (icon) {
            <i [class]="'pi ' + icon + ' klini-kpi-card__icon'"></i>
          }
        </div>
      </ng-template>

      <div class="klini-kpi-card__body">
        <span class="klini-kpi-card__value">{{ value }}</span>
        @if (trend) {
          <div [class]="'klini-kpi-card__trend klini-kpi-card__trend--' + trend">
            <i [class]="trendIcon"></i>
            @if (trendLabel) {
              <span>{{ trendLabel }}</span>
            }
          </div>
        }
      </div>

      <ng-template pTemplate="footer">
        @if (description) {
          <p class="klini-kpi-card__description">{{ description }}</p>
        }
        <ng-content select="[slot=footer]" />
      </ng-template>
    </p-card>
  `,
  styles: [`
    :host ::ng-deep {
      .klini-kpi-card {
        .p-card-body { padding: var(--kln-space-4) var(--kln-space-5); }
        .p-card-header { padding: 0; }
        .p-card-footer { padding: var(--kln-space-2) 0 0; }
        .p-card-content { padding: var(--kln-space-2) 0; }
      }

      .klini-kpi-card__header {
        display: flex; align-items: center; justify-content: space-between;
        padding: var(--kln-space-4) var(--kln-space-5) 0;
      }
      .klini-kpi-card__label {
        font-size: var(--kln-font-size-body-sm); font-weight: 500;
        color: var(--kln-text-secondary); font-family: 'Objective', system-ui, -apple-system, sans-serif;
      }
      .klini-kpi-card__icon { font-size: var(--kln-size-icon-md); color: var(--kln-text-muted); }
      .klini-kpi-card__body { display: flex; align-items: baseline; gap: var(--kln-space-3); }
      .klini-kpi-card__value {
        font-size: var(--kln-font-size-h2); font-weight: 700;
        color: var(--kln-text-primary); line-height: 1;
        font-family: 'Objective', system-ui, -apple-system, sans-serif;
      }
      .klini-kpi-card__trend {
        display: flex; align-items: center; gap: var(--kln-space-1);
        font-size: var(--kln-font-size-body-sm); font-weight: 600;
        font-family: 'Objective', system-ui, -apple-system, sans-serif;
      }
      .klini-kpi-card__trend--up      { color: var(--kln-feedback-success-fg); }
      .klini-kpi-card__trend--down    { color: var(--kln-feedback-danger-fg);  }
      .klini-kpi-card__trend--neutral { color: var(--kln-text-muted); }
      .klini-kpi-card__description {
        font-size: var(--kln-font-size-body-sm); color: var(--kln-text-muted);
        margin: 0; font-family: 'Objective', system-ui, -apple-system, sans-serif;
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
