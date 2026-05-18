import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface StepperStep {
  label: string;
  description?: string;
  icon?: string;
}

export type StepperOrientation = 'horizontal' | 'vertical';

@Component({
  selector: 'klini-stepper',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div [class]="'klini-stepper klini-stepper--' + orientation">
      <div
        *ngFor="let step of steps; let i = index; let last = last"
        [class]="stepClass(i)"
      >
        <div class="klini-stepper__indicator">
          <div class="klini-stepper__circle">
            <i *ngIf="i < activeStep" class="pi pi-check"></i>
            <span *ngIf="i >= activeStep">{{ i + 1 }}</span>
          </div>
          <div *ngIf="!last" class="klini-stepper__line"></div>
        </div>
        <div class="klini-stepper__content">
          <span class="klini-stepper__label">{{ step.label }}</span>
          <span *ngIf="step.description" class="klini-stepper__description">{{ step.description }}</span>
        </div>
      </div>
    </div>
  `,
  styleUrl: './stepper.component.scss',
})
export class StepperComponent {
  @Input({ required: true }) steps: StepperStep[] = [];
  @Input() activeStep = 0;
  @Input() orientation: StepperOrientation = 'horizontal';

  stepClass(index: number): string {
    return [
      'klini-stepper__step',
      index < this.activeStep  ? 'klini-stepper__step--completed' : '',
      index === this.activeStep ? 'klini-stepper__step--active' : '',
    ].filter(Boolean).join(' ');
  }
}
