import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';

export type StatusPillValue =
  | 'em-processo'
  | 'autorizada'
  | 'parcialmente'
  | 'negado'
  | 'inativa'
  | 'A' | 'P' | 'T' | 'D' | 'N' | 'Z' | 'E' | 'C' | 'O' | 'R';

type PrimeSeverity = 'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast';

interface StatusConfig {
  label:    string;
  severity: PrimeSeverity;
  cssClass: string;
}

const STATUS_MAP: Record<StatusPillValue, StatusConfig> = {
  'em-processo':  { label: 'Em Auditoria', severity: 'secondary', cssClass: 'klini-status--em-processo'  },
  'autorizada':   { label: 'Autorizada',   severity: 'success',   cssClass: 'klini-status--autorizada'   },
  'parcialmente': { label: 'Parcial',      severity: 'info',      cssClass: 'klini-status--parcialmente'  },
  'negado':       { label: 'Negado',       severity: 'danger',    cssClass: 'klini-status--negado'        },
  'inativa':      { label: 'Inativa',      severity: 'warn',      cssClass: 'klini-status--inativa'       },
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
      .klini-status-pill { font-family: 'Inter', system-ui, -apple-system, sans-serif; font-weight: 600; }

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
