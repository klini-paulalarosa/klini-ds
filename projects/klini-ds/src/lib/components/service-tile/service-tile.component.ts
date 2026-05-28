import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ButtonModule } from 'primeng/button';

/**
 * kln-service-tile
 *
 * Tile de acesso rápido — ícone + label em card clicável.
 * Usado na home do Portal do Beneficiário para os serviços disponíveis.
 *
 * Base PrimeNG: p-button com variant="text" (estilizado como tile).
 *
 * Uso:
 * ```html
 * <div class="klini-services-grid">
 *   <kln-service-tile icon="pi-file-text" label="Consultas" (tileClick)="goTo('consultas')" />
 *   <kln-service-tile icon="pi-shield" label="Carências"   (tileClick)="goTo('carencias')" />
 *   <kln-service-tile icon="pi-clock" label="Atendimentos" (tileClick)="goTo('atendimentos')" />
 * </div>
 * ```
 *
 * Grid recomendado (CSS):
 * ```css
 * .klini-services-grid {
 *   display: grid;
 *   grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
 *   gap: 0.75rem;
 * }
 * ```
 */
@Component({
  selector: 'kln-service-tile',
  standalone: true,
  imports: [ButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-button
      variant="text"
      [styleClass]="'kln-service-tile' + (disabled ? ' kln-service-tile--disabled' : '')"
      [disabled]="disabled"
      [ariaLabel]="label"
      (onClick)="tileClick.emit($event)"
    >
      <div class="kln-service-tile__inner">
        <i [class]="'pi ' + icon + ' kln-service-tile__icon'"></i>
        <span class="kln-service-tile__label">{{ label }}</span>
      </div>
    </p-button>
  `,
  styles: [`
    :host { display: block; }

    :host ::ng-deep {
      .kln-service-tile {
        width: 100%;
        height: 100%;
        min-height: 96px;
        background: #ffffff !important;
        border: 1px solid var(--klini-border-subtle, #E5E7EB) !important;
        border-radius: 8px !important;
        box-shadow: 0px 2px 8px 0px rgba(15, 27, 26, 0.06);
        padding: 1rem 0.75rem !important;
        cursor: pointer;
        transition: box-shadow 0.15s ease, border-color 0.15s ease;

        &:hover:not(.kln-service-tile--disabled) {
          border-color: var(--klini-color-teal-500, #259591) !important;
          box-shadow: 0px 4px 12px 0px rgba(37, 149, 145, 0.12) !important;
        }

        &:focus-visible {
          outline: 2px solid var(--klini-color-teal-500, #259591);
          outline-offset: 2px;
        }

        .p-button-label { display: none; }
        .p-button-icon  { display: none; }
      }

      .kln-service-tile--disabled {
        opacity: 0.5;
        cursor: not-allowed !important;
      }
    }

    .kln-service-tile__inner {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      width: 100%;
    }

    .kln-service-tile__icon {
      font-size: 1.5rem;
      color: var(--klini-color-teal-500, #259591);
    }

    .kln-service-tile__label {
      font-family: 'Objective', system-ui, -apple-system, sans-serif;
      font-size: 0.8125rem;
      font-weight: 400;
      color: var(--klini-text-primary, #111827);
      text-align: center;
      line-height: 1.3;
    }
  `],
})
export class KliniServiceTileComponent {
  /** Classe do ícone PrimeIcons (ex: "pi-shield", "pi-calendar", "pi-file-text") */
  @Input({ required: true }) icon = '';

  /** Texto do tile */
  @Input({ required: true }) label = '';

  /** Desabilita o tile (opacity + cursor not-allowed) */
  @Input() disabled = false;

  /** Clique no tile */
  @Output() tileClick = new EventEmitter<MouseEvent>();
}
