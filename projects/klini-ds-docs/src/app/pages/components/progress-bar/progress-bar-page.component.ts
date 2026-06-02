import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnProgressBarComponent } from '@klini-saude/ds';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-progress-bar-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnProgressBarComponent, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">ProgressBar</h1>
        <span class="badge badge--version">kln-progress-bar</span>
      </div>
      <p class="docs-page-description">
        Barra de progresso determinada ou indeterminada. Wrapper sobre <code class="font-mono">p-progressbar</code> do PrimeNG.
        Usada para sinistralidade, carência cumprida e utilização de benefícios.
      </p>

      <div class="docs-section">
        <h2>Indicadores do plano</h2>
        <p>Sinistralidade, carência cumprida e limite de reembolso utilizado.</p>
        <app-component-preview [code]="codeIndicadores">
          <div preview style="display:flex;flex-direction:column;gap:24px;max-width:480px">
            <div>
              <div style="display:flex;justify-content:space-between;margin-bottom:6px">
                <span style="font-size:13px;color:var(--docs-text)">Sinistralidade</span>
                <span style="font-size:13px;font-weight:600;color:var(--docs-accent)">68%</span>
              </div>
              <kln-progress-bar [value]="68" />
            </div>
            <div>
              <div style="display:flex;justify-content:space-between;margin-bottom:6px">
                <span style="font-size:13px;color:var(--docs-text)">Carência cumprida</span>
                <span style="font-size:13px;font-weight:600;color:var(--docs-accent)">75%</span>
              </div>
              <kln-progress-bar [value]="75" />
            </div>
            <div>
              <div style="display:flex;justify-content:space-between;margin-bottom:6px">
                <span style="font-size:13px;color:var(--docs-text)">Limite de reembolso usado</span>
                <span style="font-size:13px;font-weight:600;color:var(--docs-accent)">45%</span>
              </div>
              <kln-progress-bar [value]="45" />
            </div>
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Upload de laudo</h2>
        <p>Barra de progresso durante envio de documento.</p>
        <app-component-preview [code]="codeUpload">
          <div preview style="max-width:480px">
            <div style="display:flex;justify-content:space-between;margin-bottom:6px">
              <span style="font-size:13px;color:var(--docs-text)">Enviando laudo...</span>
              <span style="font-size:13px;font-weight:600;color:var(--docs-accent)">45%</span>
            </div>
            <kln-progress-bar [value]="45" [showValue]="false" />
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Modo indeterminado</h2>
        <p>Processando autorização — duração desconhecida.</p>
        <app-component-preview [code]="codeIndet">
          <div preview style="max-width:480px">
            <kln-progress-bar mode="indeterminate" [showValue]="false" />
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
export class ProgressBarPageComponent {
  codeIndicadores = `<kln-progress-bar [value]="68" />
<kln-progress-bar [value]="75" />
<kln-progress-bar [value]="45" />`;

  codeUpload = `<kln-progress-bar [value]="45" [showValue]="false" />`;

  codeIndet = `<kln-progress-bar mode="indeterminate" [showValue]="false" />`;

  props: PropDef[] = [
    { name: 'value', type: 'number', default: '0', description: 'Percentual de progresso (0-100).' },
    { name: 'mode', type: "'determinate' | 'indeterminate'", default: "'determinate'", description: 'Modo de exibição.' },
    { name: 'showValue', type: 'boolean', default: 'true', description: 'Exibe o valor percentual dentro da barra.' },
    { name: 'unit', type: 'string', default: "'%'", description: 'Unidade exibida junto ao valor.' },
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais.' },
  ];
}
