import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnStepsComponent } from '@klini-saude/ds';
import { MenuItem } from 'primeng/api';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-steps-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnStepsComponent, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">Steps</h1>
        <span class="badge badge--version">kln-steps</span>
      </div>
      <p class="docs-page-description">
        Indicador de progresso em etapas. Wrapper sobre <code class="font-mono">p-steps</code> do PrimeNG.
        Usado no fluxo de contratação de plano e no wizard de autorização de procedimentos.
      </p>

      <div class="docs-section">
        <h2>Contratação de plano</h2>
        <p>Fluxo de 4 etapas: Dados Pessoais, Dependentes, Cobertura, Confirmação.</p>
        <app-component-preview [code]="codeContratacao">
          <div preview style="padding:16px">
            <kln-steps [items]="etapasContratacao" [activeIndex]="1" />
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Autorização de procedimento</h2>
        <p>Fluxo de autorização médica com 5 etapas.</p>
        <app-component-preview [code]="codeAutorizacao">
          <div preview style="padding:16px">
            <kln-steps [items]="etapasAutorizacao" [activeIndex]="2" />
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Props</h2>
        <app-props-table [props]="props" />
      </div>
    </div>
  `,
})
export class StepsPageComponent {
  etapasContratacao: MenuItem[] = [
    { label: 'Dados Pessoais' },
    { label: 'Dependentes' },
    { label: 'Cobertura' },
    { label: 'Confirmação' },
  ];

  etapasAutorizacao: MenuItem[] = [
    { label: 'Identificação' },
    { label: 'Procedimento' },
    { label: 'Documentos' },
    { label: 'Revisão' },
    { label: 'Envio' },
  ];

  codeContratacao = `<kln-steps [items]="etapasContratacao" [activeIndex]="1" />

// No componente:
etapasContratacao: MenuItem[] = [
  { label: 'Dados Pessoais' },
  { label: 'Dependentes' },
  { label: 'Cobertura' },
  { label: 'Confirmação' },
];`;

  codeAutorizacao = `<kln-steps [items]="etapasAutorizacao" [activeIndex]="2" />`;

  props: PropDef[] = [
    { name: 'items', type: 'MenuItem[]', default: '[]', description: 'Array de etapas do fluxo.', required: true },
    { name: 'activeIndex', type: 'number', default: '0', description: 'Índice da etapa ativa (0-based).' },
    { name: 'readonly', type: 'boolean', default: 'true', description: 'Desabilita a navegação por clique.' },
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais.' },
  ];
}
