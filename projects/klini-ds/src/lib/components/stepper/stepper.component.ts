import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperModule } from 'primeng/stepper';

export interface KliniStep {
  label:       string;
  description?: string;
  icon?:        string;
}

/**
 * Wrapper sobre p-stepper do PrimeNG 18.
 * Aceita um array simples de steps via @Input e renderiza via p-step-list / p-step-panels.
 * Estilização 100% via KliniPrime theme preset.
 */
@Component({
  selector: 'klini-stepper',
  standalone: true,
  imports: [CommonModule, StepperModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-stepper [value]="activeStep" [linear]="linear">

      <p-step-list>
        <p-step
          *ngFor="let step of steps; let i = index"
          [value]="i"
        >{{ step.label }}</p-step>
      </p-step-list>

      <p-step-panels>
        <p-step-panel
          *ngFor="let step of steps; let i = index"
          [value]="i"
        >
          <ng-template pTemplate="content">
            <div class="klini-stepper__panel-content">
              <p *ngIf="step.description" class="klini-stepper__description">
                {{ step.description }}
              </p>
            </div>
          </ng-template>
        </p-step-panel>
      </p-step-panels>

    </p-stepper>
  `,
  styles: [`
    .klini-stepper__description {
      color: var(--klini-text-secondary);
      font-size: var(--klini-font-size-body-sm);
      font-family: 'Plus Jakarta Sans', sans-serif;
      margin: 0 0 var(--klini-space-4);
    }
    .klini-stepper__panel-content { padding: var(--klini-space-4) 0; }
  `],
})
export class StepperComponent {
  @Input({ required: true }) steps: KliniStep[] = [];
  @Input() activeStep = 0;
  @Input() linear     = false;
}
