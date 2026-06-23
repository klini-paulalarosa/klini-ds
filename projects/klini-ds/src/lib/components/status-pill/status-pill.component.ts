import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';

export type StatusPillValue =
  | 'em-processo'
  | 'autorizada'
  | 'parcialmente'
  | 'negado'
  | 'inativa'
  // Códigos ANS — requisições (RN389/RN510)
  | 'A' | 'P' | 'T' | 'D' | 'N' | 'Z' | 'E' | 'C' | 'O' | 'R';

type PrimeSeverity = 'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast';

interface StatusConfig {
  label:    string;
  severity: PrimeSeverity;
  cssClass: string;
}

const STATUS_MAP: Record<StatusPillValue, StatusConfig> = {
  // Legacy — backward-compat
  'em-processo':  { label: 'Em Auditoria', severity: 'secondary', cssClass: 'klini-status--em-processo'  },
  'autorizada':   { label: 'Autorizada',   severity: 'success',   cssClass: 'klini-status--autorizada'   },
  'parcialmente': { label: 'Parcial',      severity: 'info',      cssClass: 'klini-status--parcialmente'  },
  'negado':       { label: 'Negado',       severity: 'danger',    cssClass: 'klini-status--negado'        },
  'inativa':      { label: 'Inativa',      severity: 'warn',      cssClass: 'klini-status--inativa'       },
  // Códigos ANS
  A: { label: 'Em auditoria',            severity: 'secondary', cssClass: 'klini-status--em-processo'  },
  P: { label: 'Parcialmente autorizado', severity: 'info',      cssClass: 'klini-status--parcialmente'  },
  T: { label: 'Em análise técnica',      severity: 'secondary', cssClass: 'klini-status--em-processo'  },
  D: { label: 'Aguardando documentação', severity: 'secondary', cssClass: 'klini-status--em-processo'  },
  N: { label: 'Negada',                  severity: 'danger',    cssClass: 'klini-status--negado'        },
  Z: { label: 'Autorizada',              severity: 'success',   cssClass: 'klini-status--autorizada'   },
  E: { label: 'Expirada',                severity: 'warn',      cssClass: 'klini-status--inativa'       },
  C: { label: 'Cancelada',               severity: 'warn',      cssClass: 'klini-status--inativa'       },
  O: { label: 'Em cotação de materiais', severity: 'secondary', cssClass: 'klini-status--em-processo'  },
  R: { label: 'Solicitação recebida',    severity: 'secondary', cssClass: 'klini-status--em-processo'  },
};

/**
 * Pílula de status de domínio Klini Saúde. Mapeia os cinco status de
 * guias e autorizações médicas para um p-tag com cores semânticas via
 * tokens de status (`--kln-status-*-bg/fg`). Cada status tem label e
 * cor padronizados, mas ambos podem ser sobrescritos via inputs.
 *
 * @atomicLevel atom
 * @selector kln-status-pill
 * @primeng p-tag
 * @example
 * <kln-status-pill status="autorizada" />
 * <kln-status-pill status="negado" />
 * <kln-status-pill status="em-processo" label="Em análise" />
 */
@Component({
  selector: 'kln-status-pill',
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
      .klini-status-pill { font-family: 'Objective', system-ui, -apple-system, sans-serif; font-weight: 600; }

      .klini-status--em-processo  { background: var(--kln-status-em-processo-bg)  !important; color: var(--kln-status-em-processo-fg)  !important; }
      .klini-status--autorizada   { background: var(--kln-status-autorizada-bg)   !important; color: var(--kln-status-autorizada-fg)   !important; }
      .klini-status--parcialmente { background: var(--kln-status-parcialmente-bg) !important; color: var(--kln-status-parcialmente-fg) !important; }
      .klini-status--negado       { background: var(--kln-status-negado-bg)       !important; color: var(--kln-status-negado-fg)       !important; }
      .klini-status--inativa      { background: var(--kln-status-inativa-bg)      !important; color: var(--kln-status-inativa-fg)      !important; }
    }
  `],
})
export class StatusPillComponent {
  @Input({ required: true }) status!: StatusPillValue;
  @Input() label = '';

  get config(): StatusConfig { return STATUS_MAP[this.status]; }
  get displayLabel(): string { return this.label || this.config.label; }
}
