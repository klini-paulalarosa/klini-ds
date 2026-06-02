import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnIftaLabelComponent, KlnFloatLabelComponent, InputTextComponent, KlnSelectComponent } from '@klini-saude/ds';
import { FormsModule } from '@angular/forms';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-ifta-label-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnIftaLabelComponent, KlnFloatLabelComponent, InputTextComponent, KlnSelectComponent, FormsModule, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">IftaLabel</h1>
        <span class="badge badge--version">kln-ifta-label</span>
      </div>
      <p class="docs-page-description">
        Label embutido permanentemente no campo (IFTA = In-Field The Actual label). Wrapper sobre
        <code class="font-mono">p-iftalabel</code> do PrimeNG. Diferente do FloatLabel, o label permanece
        visível mesmo quando o campo tem valor.
      </p>

      <div class="docs-section">
        <h2>Campos com label fixo</h2>
        <p>Útil para formulários onde o contexto do campo precisa ser sempre visível.</p>
        <app-component-preview [code]="codeBasic">
          <div preview style="display:flex;flex-direction:column;gap:16px;max-width:380px;padding-top:8px">
            <kln-ifta-label>
              <kln-input-text id="nome-tit" [(ngModel)]="nomeTitular" />
              <label for="nome-tit">Nome do titular</label>
            </kln-ifta-label>
            <kln-ifta-label>
              <kln-select
                id="plano-sel"
                [options]="planos"
                optionLabel="label"
                optionValue="value"
                [(ngModel)]="planoSel"
              />
              <label for="plano-sel">Tipo de plano</label>
            </kln-ifta-label>
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Comparação FloatLabel vs IftaLabel</h2>
        <p>FloatLabel: label se move ao focar. IftaLabel: label permanece visível dentro do campo.</p>
        <app-component-preview [code]="codeCompare">
          <div preview style="display:flex;gap:24px;flex-wrap:wrap;padding-top:16px">
            <div style="flex:1;min-width:160px">
              <p style="font-size:12px;color:var(--docs-text-muted);margin:0 0 8px">FloatLabel</p>
              <kln-float-label variant="over">
                <kln-input-text id="fl" [(ngModel)]="fl" />
                <label for="fl">Especialidade</label>
              </kln-float-label>
            </div>
            <div style="flex:1;min-width:160px">
              <p style="font-size:12px;color:var(--docs-text-muted);margin:0 0 8px">IftaLabel</p>
              <kln-ifta-label>
                <kln-input-text id="il" [(ngModel)]="il" />
                <label for="il">Especialidade</label>
              </kln-ifta-label>
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
export class IftaLabelPageComponent {
  nomeTitular = '';
  planoSel = '';
  fl = '';
  il = '';

  planos = [
    { label: 'Klini Start PJ', value: 'start_pj' },
    { label: 'Klini Plus PJ', value: 'plus_pj' },
    { label: 'Klini Premium PJ', value: 'premium_pj' },
  ];

  codeBasic = `<kln-ifta-label>
  <kln-input-text id="nome-tit" [(ngModel)]="nomeTitular" />
  <label for="nome-tit">Nome do titular</label>
</kln-ifta-label>`;

  codeCompare = `<!-- FloatLabel: label flutua ao focar -->
<kln-float-label variant="over">
  <kln-input-text id="fl" [(ngModel)]="fl" />
  <label for="fl">Especialidade</label>
</kln-float-label>

<!-- IftaLabel: label sempre visível -->
<kln-ifta-label>
  <kln-input-text id="il" [(ngModel)]="il" />
  <label for="il">Especialidade</label>
</kln-ifta-label>`;

  props: PropDef[] = [
    { name: '—', type: '—', default: '—', description: 'Sem props. Usado como wrapper com ng-content.' },
  ];
}
