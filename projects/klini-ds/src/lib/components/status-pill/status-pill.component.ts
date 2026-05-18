import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

export type StatusPillValue =
  | 'em-processo'
  | 'autorizada'
  | 'parcialmente'
  | 'negado'
  | 'inativa';

const STATUS_LABELS: Record<StatusPillValue, string> = {
  'em-processo':  'Em Auditoria',
  'autorizada':   'Autorizada',
  'parcialmente': 'Parcial',
  'negado':       'Negado',
  'inativa':      'Inativa',
};

@Component({
  selector: 'klini-status-pill',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span [class]="'klini-status-pill klini-status-pill--' + status">
      <span class="klini-status-pill__dot"></span>
      <span class="klini-status-pill__label">{{ label || statusLabel }}</span>
    </span>
  `,
  styleUrl: './status-pill.component.scss',
})
export class StatusPillComponent {
  @Input({ required: true }) status!: StatusPillValue;
  @Input() label = '';

  get statusLabel(): string {
    return STATUS_LABELS[this.status] ?? this.status;
  }
}
