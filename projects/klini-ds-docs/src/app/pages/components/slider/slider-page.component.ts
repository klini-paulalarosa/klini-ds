import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnSliderComponent } from '@klini-saude/ds';
import { FormsModule } from '@angular/forms';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-slider-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnSliderComponent, FormsModule, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">Slider</h1>
        <span class="badge badge--version">kln-slider</span>
      </div>
      <p class="docs-page-description">
        Controle deslizante para seleção de valores em uma faixa. Wrapper sobre <code class="font-mono">p-slider</code> do PrimeNG.
        Útil para faixa etária, percentual de cobertura e valor de franquia.
      </p>

      <div class="docs-section">
        <h2>Percentual de sinistralidade</h2>
        <p>Slider simples para indicar percentual atual de sinistralidade.</p>
        <app-component-preview [code]="codeSinistro">
          <div preview style="display:flex;flex-direction:column;gap:16px;max-width:400px">
            <div style="display:flex;justify-content:space-between">
              <span style="font-size:14px;color:var(--docs-text)">Sinistralidade</span>
              <span style="font-size:14px;font-weight:600;color:var(--docs-accent)">{{ sinistralidade }}%</span>
            </div>
            <kln-slider [(ngModel)]="sinistralidade" [min]="0" [max]="100" [step]="1" />
            <div style="display:flex;justify-content:space-between;font-size:12px;color:var(--docs-text-muted)">
              <span>0%</span><span>Meta: 75%</span><span>100%</span>
            </div>
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Faixa etária (range)</h2>
        <p>Filtro de beneficiários por faixa etária com dois handles.</p>
        <app-component-preview [code]="codeRange">
          <div preview style="display:flex;flex-direction:column;gap:16px;max-width:400px">
            <div style="display:flex;justify-content:space-between">
              <span style="font-size:14px;color:var(--docs-text)">Faixa etária</span>
              <span style="font-size:14px;font-weight:600;color:var(--docs-accent)">{{ faixaIdade[0] }}–{{ faixaIdade[1] }} anos</span>
            </div>
            <kln-slider [(ngModel)]="faixaIdade" [min]="0" [max]="100" [step]="5" [range]="true" />
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Valor de franquia</h2>
        <p>Limite de franquia anual em reais.</p>
        <app-component-preview [code]="codeFranquia">
          <div preview style="display:flex;flex-direction:column;gap:16px;max-width:400px">
            <div style="display:flex;justify-content:space-between">
              <span style="font-size:14px;color:var(--docs-text)">Franquia anual</span>
              <span style="font-size:14px;font-weight:600;color:var(--docs-accent)">R$ {{ franquia }}</span>
            </div>
            <kln-slider [(ngModel)]="franquia" [min]="0" [max]="5000" [step]="100" />
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
export class SliderPageComponent {
  sinistralidade = 68;
  faixaIdade = [25, 55];
  franquia = 1500;

  codeSinistro = `<kln-slider [(ngModel)]="sinistralidade" [min]="0" [max]="100" [step]="1" />`;

  codeRange = `<kln-slider
  [(ngModel)]="faixaIdade"
  [min]="0"
  [max]="100"
  [step]="5"
  [range]="true"
/>`;

  codeFranquia = `<kln-slider [(ngModel)]="franquia" [min]="0" [max]="5000" [step]="100" />`;

  props: PropDef[] = [
    { name: 'min', type: 'number', default: '0', description: 'Valor mínimo do slider.' },
    { name: 'max', type: 'number', default: '100', description: 'Valor máximo do slider.' },
    { name: 'step', type: 'number', default: '1', description: 'Incremento de cada passo.' },
    { name: 'range', type: 'boolean', default: 'false', description: 'Modo range com dois handles.' },
    { name: 'orientation', type: "'horizontal' | 'vertical'", default: "'horizontal'", description: 'Orientação do slider.' },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Desabilita o controle.' },
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais.' },
  ];
}
