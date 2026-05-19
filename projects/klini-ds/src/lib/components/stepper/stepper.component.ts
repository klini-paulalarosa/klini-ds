import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
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
  imports: [StepperModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-stepper [value]="activeStep" [linear]="linear">

      <p-step-list>
        @for (step of steps; track $index) {
          <p-step [value]="$index">{{ step.label }}</p-step>
        }
      </p-step-list>

      <p-step-panels>
        @for (step of steps; track $index) {
          <p-step-panel [value]="$index">
            <ng-template pTemplate="content">
              <div class="klini-stepper__panel-content">
                @if (step.description) {
                  <p class="klini-stepper__description">
                    {{ step.description }}
                  </p>
                }
              </div>
            </ng-template>
          </p-step-panel>
        }
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
