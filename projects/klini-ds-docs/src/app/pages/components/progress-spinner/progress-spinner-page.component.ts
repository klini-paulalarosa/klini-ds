import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnProgressSpinnerComponent } from '@klini-saude/ds';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-progress-spinner-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnProgressSpinnerComponent, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">ProgressSpinner</h1>
        <span class="badge badge--version">kln-progress-spinner</span>
      </div>
      <p class="docs-page-description">
        Indicador de carregamento circular. Wrapper sobre <code class="font-mono">p-progressspinner</code> do PrimeNG.
        Exibido durante consultas à API de autorizações e busca de prestadores.
      </p>

      <div class="docs-section">
        <h2>Padrão</h2>
        <p>Spinner padrão para loading de dados do plano.</p>
        <app-component-preview [code]="codeDefault">
          <div preview style="display:flex;align-items:center;gap:24px;padding:16px">
            <kln-progress-spinner />
            <span style="font-size:14px;color:var(--docs-text-muted)">Buscando prestadores credenciados...</span>
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Tamanhos</h2>
        <app-component-preview [code]="codeSizes">
          <div preview style="display:flex;align-items:center;gap:32px;padding:16px">
            <div style="display:flex;flex-direction:column;align-items:center;gap:8px">
              <kln-progress-spinner [size]="30" />
              <span style="font-size:11px;color:var(--docs-text-muted)">30px</span>
            </div>
            <div style="display:flex;flex-direction:column;align-items:center;gap:8px">
              <kln-progress-spinner [size]="50" />
              <span style="font-size:11px;color:var(--docs-text-muted)">50px</span>
            </div>
            <div style="display:flex;flex-direction:column;align-items:center;gap:8px">
              <kln-progress-spinner [size]="80" />
              <span style="font-size:11px;color:var(--docs-text-muted)">80px</span>
            </div>
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
export class ProgressSpinnerPageComponent {
  codeDefault = `<kln-progress-spinner />`;

  codeSizes = `<kln-progress-spinner [size]="30" />
<kln-progress-spinner [size]="50" />
<kln-progress-spinner [size]="80" />`;

  props: PropDef[] = [
    { name: 'size', type: 'number', default: '50', description: 'Tamanho em pixels do spinner.' },
    { name: 'strokeWidth', type: 'string', default: "'8'", description: 'Espessura da linha do spinner.' },
    { name: 'fill', type: 'string', default: "'transparent'", description: 'Cor de preenchimento interno.' },
    { name: 'animationDuration', type: 'string', default: "'2s'", description: 'Duração de um ciclo da animação.' },
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais.' },
  ];
}
