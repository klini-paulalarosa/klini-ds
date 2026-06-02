/**
 * kln-card
 *
 * Diretiva companion (import de '@klini-saude/ds'):
 *
 * pAnimateOnScroll — anima o card ao entrar no viewport (scroll reveal)
 *   <kln-card pAnimateOnScroll enterClass="fadein" leaveClass="fadeout" />
 *   <kln-card pAnimateOnScroll enterClass="fadeinleft" />
 *
 *   Classes disponíveis: fadein | fadeout | fadeinleft | fadeinright |
 *   fadeinup | fadeindown | zoomin | zoomindown | zoominleft | zoominright
 *
 * pStyleClass — toggle de classes com animação
 *   <button pStyleClass="#meu-card" enterClass="fadein" leaveToClass="fadeout">
 *     Mostrar/Ocultar
 *   </button>
 */
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';

/**
 * Card genérico do Klini DS — container elevado com header, conteúdo e footer
 * projetáveis. Base estrutural para Guia-Info, Nav-Row e demais cards de produto.
 * Usa tokens de elevação (`--kln-elevation-sm/md`) para comunicar interatividade.
 * Para cards de métricas (KPI), use `kln-kpi-card`.
 *
 * @atomicLevel organism
 * @selector kln-card
 * @primeng p-card
 * @example
 * <kln-card header="Detalhes da Guia" subheader="Nº 00123456">
 *   <ng-template kliniCardHeader>Header customizado</ng-template>
 *   Conteúdo do card
 *   <ng-template kliniCardFooter>Ações do footer</ng-template>
 * </kln-card>
 */
@Component({
  selector: 'kln-card',
  standalone: true,
  imports: [CardModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-card
      [header]="header"
      [subheader]="subheader"
      [styleClass]="'klini-card ' + styleClass"
    >
      <ng-template pTemplate="header">
        <ng-content select="[kliniCardHeader]" />
      </ng-template>

      <ng-content />

      <ng-template pTemplate="footer">
        <ng-content select="[kliniCardFooter]" />
      </ng-template>
    </p-card>
  `,
  styles: [`
    :host ::ng-deep .klini-card {
      border-radius: var(--kln-radius-lg);
      box-shadow: var(--kln-elevation-sm);
      transition: box-shadow 150ms var(--kln-easing-inout),
                  transform   150ms var(--kln-easing-inout);
    }

    :host ::ng-deep .klini-card:where([kliniInteractive]) {
      cursor: pointer;
    }
    :host ::ng-deep .klini-card:where([kliniInteractive]):hover {
      box-shadow: var(--kln-elevation-md);
      transform: var(--kln-interaction-hover-transform);
    }
  `],
})
export class CardComponent {
  @Input() header     = '';
  @Input() subheader  = '';
  @Input() styleClass = '';
}
