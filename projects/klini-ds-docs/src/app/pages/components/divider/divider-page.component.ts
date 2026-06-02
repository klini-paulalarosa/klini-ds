import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DividerComponent } from '@klini-saude/ds';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-divider-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DividerComponent, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">Divider</h1>
        <span class="badge badge--version">kln-divider</span>
      </div>
      <p class="docs-page-description">
        Separador visual horizontal ou vertical com label opcional. Wrapper sobre <code class="font-mono">p-divider</code> do PrimeNG.
      </p>

      <div class="docs-section">
        <h2>Horizontal simples</h2>
        <app-component-preview [code]="codeBasic">
          <div preview style="padding:8px">
            <p style="font-size:13px;color:var(--docs-text-muted)">Dados pessoais</p>
            <kln-divider />
            <p style="font-size:13px;color:var(--docs-text-muted)">Dados do plano</p>
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Com label</h2>
        <app-component-preview [code]="codeLabel">
          <div preview style="padding:8px">
            <p style="font-size:13px;color:var(--docs-text-muted)">Seção anterior</p>
            <kln-divider align="center">
              <span style="font-size:12px;color:var(--docs-text-muted)">ou</span>
            </kln-divider>
            <p style="font-size:13px;color:var(--docs-text-muted)">Próxima seção</p>
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Tipos de linha</h2>
        <app-component-preview [code]="codeTypes">
          <div preview style="display:flex;flex-direction:column;gap:8px;padding:8px">
            <kln-divider type="solid" />
            <kln-divider type="dashed" />
            <kln-divider type="dotted" />
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
export class DividerPageComponent {
  codeBasic = `<kln-divider />`;

  codeLabel = `<kln-divider align="center">
  <span>ou</span>
</kln-divider>`;

  codeTypes = `<kln-divider type="solid" />
<kln-divider type="dashed" />
<kln-divider type="dotted" />`;

  props: PropDef[] = [
    { name: 'layout', type: "'horizontal' | 'vertical'", default: "'horizontal'", description: 'Orientação do divisor.' },
    { name: 'type', type: "'solid' | 'dashed' | 'dotted'", default: "'solid'", description: 'Estilo da linha.' },
    { name: 'align', type: "'left' | 'center' | 'right'", default: "'center'", description: 'Alinhamento do label.' },
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais.' },
  ];
}
