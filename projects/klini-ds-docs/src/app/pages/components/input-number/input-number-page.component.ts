import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnInputNumberComponent } from '@klini-saude/ds';
import { FormsModule } from '@angular/forms';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-input-number-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnInputNumberComponent, FormsModule, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">InputNumber</h1>
        <span class="badge badge--version">kln-input-number</span>
      </div>
      <p class="docs-page-description">
        Campo numérico com formatação automática. Wrapper sobre <code class="font-mono">p-inputnumber</code> do PrimeNG.
        Ideal para valores monetários (mensalidade, coparticipação) e percentuais.
      </p>

      <div class="docs-section">
        <h2>Valor monetário</h2>
        <p>Mensalidade do plano com prefixo R$ e modo currency.</p>
        <app-component-preview [code]="codeMoney">
          <div preview style="display:flex;flex-direction:column;gap:16px;max-width:320px">
            <kln-input-number
              label="Mensalidade"
              [min]="0"
              prefix="R$ "
              placeholder="0,00"
              [(ngModel)]="mensalidade"
            />
            <span style="font-size:13px;color:var(--docs-text-muted)">Valor: R$ {{ mensalidade }}</span>
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Coparticipação</h2>
        <p>Valor de coparticipação com botões de incremento e limites.</p>
        <app-component-preview [code]="codeCopart">
          <div preview style="display:flex;flex-direction:column;gap:16px;max-width:320px">
            <kln-input-number
              label="Coparticipação por consulta"
              [min]="0"
              [max]="500"
              [step]="5"
              [showButtons]="true"
              prefix="R$ "
              [(ngModel)]="coparticipacao"
            />
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Percentual de reembolso</h2>
        <p>Percentual com sufixo % e limite 0-100.</p>
        <app-component-preview [code]="codePercent">
          <div preview style="display:flex;flex-direction:column;gap:16px;max-width:320px">
            <kln-input-number
              label="Percentual de reembolso"
              [min]="0"
              [max]="100"
              [step]="5"
              suffix="%"
              [showButtons]="true"
              [(ngModel)]="percentual"
            />
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
export class InputNumberPageComponent {
  mensalidade = 289.90;
  coparticipacao = 45;
  percentual = 80;

  codeMoney = `<kln-input-number
  label="Mensalidade"
  [min]="0"
  prefix="R$ "
  placeholder="0,00"
  [(ngModel)]="mensalidade"
/>`;

  codeCopart = `<kln-input-number
  label="Coparticipação por consulta"
  [min]="0"
  [max]="500"
  [step]="5"
  [showButtons]="true"
  prefix="R$ "
  [(ngModel)]="coparticipacao"
/>`;

  codePercent = `<kln-input-number
  label="Percentual de reembolso"
  [min]="0"
  [max]="100"
  [step]="5"
  suffix="%"
  [showButtons]="true"
  [(ngModel)]="percentual"
/>`;

  props: PropDef[] = [
    { name: 'label', type: 'string', default: "''", description: 'Rótulo do campo.' },
    { name: 'placeholder', type: 'string', default: "''", description: 'Texto placeholder.' },
    { name: 'min', type: 'number | undefined', default: 'undefined', description: 'Valor mínimo.' },
    { name: 'max', type: 'number | undefined', default: 'undefined', description: 'Valor máximo.' },
    { name: 'step', type: 'number', default: '1', description: 'Incremento dos botões.' },
    { name: 'prefix', type: 'string', default: "''", description: 'Prefixo exibido antes do valor.' },
    { name: 'suffix', type: 'string', default: "''", description: 'Sufixo exibido após o valor.' },
    { name: 'mode', type: "'decimal' | 'currency'", default: "'decimal'", description: 'Modo de formatação.' },
    { name: 'showButtons', type: 'boolean', default: 'false', description: 'Exibe botões +/- de incremento.' },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Desabilita o campo.' },
    { name: 'errorMessage', type: 'string', default: "''", description: 'Mensagem de erro de validação.' },
    { name: 'hint', type: 'string', default: "''", description: 'Texto de ajuda abaixo do campo.' },
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais.' },
  ];
}
