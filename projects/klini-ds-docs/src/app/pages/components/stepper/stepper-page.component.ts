import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StepperComponent, ButtonComponent } from '@klini-saude/ds';
import type { KlnStep } from '@klini-saude/ds';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-stepper-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [StepperComponent, ButtonComponent, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">Stepper</h1>
        <span class="badge badge--version">kln-stepper</span>
      </div>
      <p class="docs-page-description">
        Indicador de progresso para fluxos multi-etapas. Use em processos como contratação de plano,
        cadastro de beneficiário, solicitação de autorização e agendamento de consulta.
        Wrapper sobre <code class="font-mono">p-steps</code> do PrimeNG.
      </p>

      <!-- Básico -->
      <div class="docs-section">
        <h2>Básico</h2>
        <p>Três etapas para fluxo de adesão ao plano. O step ativo é controlado por <code class="font-mono">[activeStep]</code>.</p>
        <app-component-preview [code]="basicCode">
          <div preview>
            <kln-stepper [steps]="basicSteps" [activeStep]="0" />
          </div>
        </app-component-preview>
      </div>

      <!-- Linear -->
      <div class="docs-section">
        <h2>Linear</h2>
        <p>Com <code class="font-mono">[linear]="true"</code>, o usuário deve concluir as etapas na ordem.</p>
        <app-component-preview [code]="linearCode">
          <div preview>
            <kln-stepper [steps]="basicSteps" [activeStep]="1" [linear]="true" />
          </div>
        </app-component-preview>
      </div>

      <!-- Controlado -->
      <div class="docs-section">
        <h2>Controlado</h2>
        <p>Use botões Anterior/Próximo para navegar entre etapas programaticamente.</p>
        <app-component-preview [code]="controlledCode">
          <div preview>
            <kln-stepper [steps]="extendedSteps" [activeStep]="currentStep" />
            <div style="display:flex;justify-content:space-between;margin-top:16px;gap:8px">
              <kln-button
                label="Anterior"
                severity="secondary"
                variant="outlined"
                [disabled]="currentStep === 0"
                (clicked)="prevStep()" />
              <span style="align-self:center;font-size:0.85rem;color:#666">
                Etapa {{ currentStep + 1 }} de {{ extendedSteps.length }}
              </span>
              <kln-button
                [label]="currentStep === extendedSteps.length - 1 ? 'Concluir' : 'Próximo'"
                [severity]="currentStep === extendedSteps.length - 1 ? 'success' : 'primary'"
                (clicked)="nextStep()" />
            </div>
          </div>
        </app-component-preview>
      </div>

      <!-- Props -->
      <div class="docs-section">
        <h2>Props</h2>
        <app-props-table [props]="props" />
      </div>

      <!-- Interface KlnStep -->
      <div class="docs-section">
        <h2>Interface KlnStep</h2>
        <app-props-table [props]="stepInterface" />
      </div>
    </div>
  `,
})
export class StepperPageComponent {
  currentStep = 0;

  basicSteps: KlnStep[] = [
    { label: 'Dados Pessoais', description: 'Nome, CPF, data de nascimento' },
    { label: 'Escolha do Plano', description: 'Selecione o plano desejado' },
    { label: 'Confirmação', description: 'Revise e confirme os dados' },
  ];

  extendedSteps: KlnStep[] = [
    { label: 'Identificação', description: 'Dados do titular' },
    { label: 'Dependentes', description: 'Adicionar dependentes' },
    { label: 'Plano', description: 'Escolha da cobertura' },
    { label: 'Pagamento', description: 'Dados de faturamento' },
    { label: 'Confirmação', description: 'Revisão final' },
  ];

  nextStep(): void {
    if (this.currentStep < this.extendedSteps.length - 1) {
      this.currentStep++;
    }
  }

  prevStep(): void {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  basicCode = `// Classe
steps: KlnStep[] = [
  { label: 'Dados Pessoais', description: 'Nome, CPF, data de nascimento' },
  { label: 'Escolha do Plano', description: 'Selecione o plano desejado' },
  { label: 'Confirmação', description: 'Revise e confirme os dados' },
];

// Template
<kln-stepper [steps]="steps" [activeStep]="0" />`;

  linearCode = `<kln-stepper [steps]="steps" [activeStep]="1" [linear]="true" />`;

  controlledCode = `// Template
<kln-stepper [steps]="steps" [activeStep]="currentStep" />

<kln-button
  label="Anterior"
  severity="secondary"
  variant="outlined"
  [disabled]="currentStep === 0"
  (clicked)="prevStep()" />

<kln-button
  [label]="currentStep === steps.length - 1 ? 'Concluir' : 'Próximo'"
  (clicked)="nextStep()" />

// Classe
currentStep = 0;

nextStep(): void {
  if (this.currentStep < this.steps.length - 1) this.currentStep++;
}

prevStep(): void {
  if (this.currentStep > 0) this.currentStep--;
}`;

  props: PropDef[] = [
    { name: 'steps', type: 'KlnStep[]', default: '—', description: 'OBRIGATÓRIO. Array de etapas do fluxo.' },
    { name: 'activeStep', type: 'number', default: '0', description: 'Índice da etapa ativa (base 0).' },
    { name: 'linear', type: 'boolean', default: 'false', description: 'Quando true, o usuário deve concluir as etapas em ordem.' },
  ];

  stepInterface: PropDef[] = [
    { name: 'label', type: 'string', default: '—', description: 'Texto principal da etapa.' },
    { name: 'description', type: 'string', default: 'undefined', description: 'Subtexto descritivo abaixo do label.' },
  ];
}
