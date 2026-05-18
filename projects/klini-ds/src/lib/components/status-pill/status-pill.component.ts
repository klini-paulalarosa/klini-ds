import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';

export type StatusPillValue =
  | 'em-processo'
  | 'autorizada'
  | 'parcialmente'
  | 'negado'
  | 'inativa';

type PrimeSeverity = 'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast';

interface StatusConfig {
  label:    string;
  severity: PrimeSeverity;
  cssClass: string;
}

const STATUS_MAP: Record<StatusPillValue, StatusConfig> = {
  'em-processo':  { label: 'Em Auditoria', severity: 'secondary', cssClass: 'klini-status--em-processo' },
  'autorizada':   { label: 'Autorizada',   severity: 'success',   cssClass: 'klini-status--autorizada'  },
  'parcialmente': { label: 'Parcial',      severity: 'info',      cssClass: 'klini-status--parcialmente' },
  'negado':       { label: 'Negado',       severity: 'danger',    cssClass: 'klini-status--negado'       },
  'inativa':      { label: 'Inativa',      severity: 'warn',      cssClass: 'klini-status--inativa'      },
};

/**
 * Componente de domínio Klini — mapeia os status de guias/autorizações para p-tag.
 * Usa CSS custom properties dos tokens de status para sobrescrever as cores do tema.
 */
@Component({
  selector: 'klini-status-pill',
  standalone: true,
  imports: [TagModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-tag
      [value]="displayLabel"
      [severity]="config.severity"
      [styleClass]="'klini-status-pill ' + config.cssClass"
      [rounded]="true"
    />
  `,
  styles: [`
    :host ::ng-deep {
      .klini-status-pill { font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 600; }

      .klini-status--em-processo  { background: var(--klini-status-em-processo-bg)  !important; color: var(--klini-status-em-processo-fg)  !important; }
      .klini-status--autorizada   { background: var(--klini-status-autorizada-bg)   !important; color: var(--klini-status-autorizada-fg)   !important; }
      .klini-status--parcialmente { background: var(--klini-status-parcialmente-bg) !important; color: var(--klini-status-parcialmente-fg) !important; }
      .klini-status--negado       { background: var(--klini-status-negado-bg)       !important; color: var(--klini-status-negado-fg)       !important; }
      .klini-status--inativa      { background: var(--klini-status-inativa-bg)      !important; color: var(--klini-status-inativa-fg)      !important; }
    }
  `],
})
export class StatusPillComponent {
  @Input({ required: true }) status!: StatusPillValue;
  @Input() label = '';

  get config(): StatusConfig { return STATUS_MAP[this.status]; }
  get displayLabel(): string { return this.label || this.config.label; }
}
