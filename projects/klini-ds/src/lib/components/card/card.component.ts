import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';

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
