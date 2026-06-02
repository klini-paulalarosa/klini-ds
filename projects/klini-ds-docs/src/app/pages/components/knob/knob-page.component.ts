import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnKnobComponent } from '@klini-saude/ds';
import { FormsModule } from '@angular/forms';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-knob-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnKnobComponent, FormsModule, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">Knob</h1>
        <span class="badge badge--version">kln-knob</span>
      </div>
      <p class="docs-page-description">
        Indicador circular de progresso ou valor. Wrapper sobre <code class="font-mono">p-knob</code> do PrimeNG.
        Usado para sinistralidade, NPS de atendimento e percentual de cobertura utilizada.
      </p>

      <div class="docs-section">
        <h2>Indicadores do plano</h2>
        <app-component-preview [code]="codeIndicadores">
          <div preview style="display:flex;gap:32px;flex-wrap:wrap;justify-content:center;padding:16px">
            <div style="display:flex;flex-direction:column;align-items:center;gap:8px">
              <kln-knob [(ngModel)]="sinistralidade" [min]="0" [max]="100" [size]="100" [readonly]="true" valueColor="#CD7925" />
              <span style="font-size:12px;color:var(--docs-text-muted)">Sinistralidade</span>
            </div>
            <div style="display:flex;flex-direction:column;align-items:center;gap:8px">
              <kln-knob [(ngModel)]="carencia" [min]="0" [max]="100" [size]="100" [readonly]="true" valueColor="#259591" />
              <span style="font-size:12px;color:var(--docs-text-muted)">Carência cumprida</span>
            </div>
            <div style="display:flex;flex-direction:column;align-items:center;gap:8px">
              <kln-knob [(ngModel)]="nps" [min]="0" [max]="100" [size]="100" [readonly]="true" valueColor="#6AA7AE" />
              <span style="font-size:12px;color:var(--docs-text-muted)">NPS de atendimento</span>
            </div>
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Interativo</h2>
        <app-component-preview [code]="codeInterativo">
          <div preview style="display:flex;flex-direction:column;align-items:center;gap:12px;padding:16px">
            <kln-knob [(ngModel)]="cobertura" [min]="0" [max]="100" [step]="5" [size]="120" />
            <span style="font-size:13px;color:var(--docs-text-muted)">Limite de cobertura: {{ cobertura }}%</span>
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
export class KnobPageComponent {
  sinistralidade = 68;
  carencia = 75;
  nps = 82;
  cobertura = 60;

  codeIndicadores = `<kln-knob [(ngModel)]="sinistralidade" [min]="0" [max]="100" [size]="100" [readonly]="true" valueColor="#CD7925" />`;

  codeInterativo = `<kln-knob [(ngModel)]="cobertura" [min]="0" [max]="100" [step]="5" [size]="120" />`;

  props: PropDef[] = [
    { name: 'min', type: 'number', default: '0', description: 'Valor mínimo.' },
    { name: 'max', type: 'number', default: '100', description: 'Valor máximo.' },
    { name: 'step', type: 'number', default: '1', description: 'Incremento por passo.' },
    { name: 'size', type: 'number', default: '100', description: 'Tamanho em pixels.' },
    { name: 'readonly', type: 'boolean', default: 'false', description: 'Apenas visualização.' },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Desabilita interação.' },
    { name: 'showValue', type: 'boolean', default: 'true', description: 'Exibe valor no centro.' },
    { name: 'valueColor', type: 'string', default: "''", description: 'Cor do arco de valor.' },
    { name: 'rangeColor', type: 'string', default: "''", description: 'Cor do arco de fundo.' },
    { name: 'strokeWidth', type: 'number', default: '14', description: 'Espessura do arco.' },
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais.' },
  ];
}
