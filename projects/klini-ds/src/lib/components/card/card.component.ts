import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';

/**
 * Wrapper genérico sobre p-card do PrimeNG.
 * Usos no Klini App: Base · Guia-Info · Nav-Row.
 *
 * Para cards de métricas use klini-kpi-card.
 * Estilização 100% via KliniPrime theme preset + tokens de elevação.
 *
 * Uso básico:
 *   <klini-card header="Título" subheader="Subtítulo">
 *     Conteúdo
 *   </klini-card>
 *
 * Com slots:
 *   <klini-card>
 *     <ng-template kliniCardHeader>Header customizado</ng-template>
 *     Conteúdo
 *     <ng-template kliniCardFooter>Footer customizado</ng-template>
 *   </klini-card>
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
      border-radius: var(--klini-radius-lg);
      box-shadow: var(--klini-elevation-sm);
      transition: box-shadow 150ms var(--klini-easing-inout),
                  transform   150ms var(--klini-easing-inout);
    }

    :host ::ng-deep .klini-card:where([kliniInteractive]) {
      cursor: pointer;
    }
    :host ::ng-deep .klini-card:where([kliniInteractive]):hover {
      box-shadow: var(--klini-elevation-md);
      transform: var(--klini-interaction-hover-transform);
    }
  `],
})
export class CardComponent {
  @Input() header     = '';
  @Input() subheader  = '';
  @Input() styleClass = '';
}
