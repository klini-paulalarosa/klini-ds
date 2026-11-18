import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ButtonModule } from 'primeng/button';

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
        border: 1px solid var(--kln-border-default) !important;
        border-radius: 8px !important;
        box-shadow: 0px 2px 8px 0px rgba(15, 27, 26, 0.06);
        padding: 1rem 0.75rem !important;
        cursor: pointer;
        transition: box-shadow 0.15s ease, border-color 0.15s ease;

        &:hover:not(.kln-service-tile--disabled) {
          border-color: var(--kln-color-teal-500, #259591) !important;
          box-shadow: 0px 4px 12px 0px rgba(37, 149, 145, 0.12) !important;
        }

        &:focus-visible {
          outline: 2px solid var(--kln-color-teal-500, #259591);
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
      color: var(--kln-color-teal-500, #259591);
    }

    .kln-service-tile__label {
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      font-size: 0.8125rem;
      font-weight: 400;
      color: var(--kln-text-primary, #111827);
      text-align: center;
      line-height: 1.3;
    }
  `],
})
export class KlnServiceTileComponent {
  @Input({ required: true }) icon = '';

  @Input({ required: true }) label = '';

  @Input() disabled = false;

  @Output() tileClick = new EventEmitter<MouseEvent>();
}
