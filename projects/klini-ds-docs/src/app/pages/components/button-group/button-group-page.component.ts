import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnButtonGroupComponent, ButtonComponent } from '@klini-saude/ds';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-button-group-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnButtonGroupComponent, ButtonComponent, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">ButtonGroup</h1>
        <span class="badge badge--version">kln-button-group</span>
      </div>
      <p class="docs-page-description">
        Grupo de botões relacionados sem espaçamento. Wrapper sobre <code class="font-mono">p-buttongroup</code> do PrimeNG.
        Usado para alternância de visualização (grade/lista) e filtros de período.
      </p>

      <div class="docs-section">
        <h2>Período de relatório</h2>
        <app-component-preview [code]="codePeriodo">
          <div preview style="display:flex;flex-direction:column;gap:16px;padding:16px">
            <kln-button-group>
              <kln-button label="Mês" severity="secondary" />
              <kln-button label="Trimestre" />
              <kln-button label="Semestre" severity="secondary" />
              <kln-button label="Ano" severity="secondary" />
            </kln-button-group>
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Visualização de prestadores</h2>
        <app-component-preview [code]="codeView">
          <div preview style="padding:16px">
            <kln-button-group>
              <kln-button icon="pi pi-list" severity="secondary" />
              <kln-button icon="pi pi-th-large" />
              <kln-button icon="pi pi-map" severity="secondary" />
            </kln-button-group>
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Ações de guia</h2>
        <app-component-preview [code]="codeAcoes">
          <div preview style="padding:16px">
            <kln-button-group>
              <kln-button label="Aprovar" icon="pi pi-check" severity="success" />
              <kln-button label="Negar" icon="pi pi-times" severity="danger" />
              <kln-button label="Pendenciar" icon="pi pi-clock" severity="warn" />
            </kln-button-group>
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
export class ButtonGroupPageComponent {
  codePeriodo = `<kln-button-group>
  <kln-button label="Mês" severity="secondary" />
  <kln-button label="Trimestre" />
  <kln-button label="Semestre" severity="secondary" />
  <kln-button label="Ano" severity="secondary" />
</kln-button-group>`;

  codeView = `<kln-button-group>
  <kln-button icon="pi pi-list" severity="secondary" />
  <kln-button icon="pi pi-th-large" />
  <kln-button icon="pi pi-map" severity="secondary" />
</kln-button-group>`;

  codeAcoes = `<kln-button-group>
  <kln-button label="Aprovar" severity="success" />
  <kln-button label="Negar" severity="danger" />
  <kln-button label="Pendenciar" severity="warn" />
</kln-button-group>`;

  props: PropDef[] = [
    { name: '—', type: '—', default: '—', description: 'Sem props. Use kln-button-group como wrapper em torno de kln-button.' },
  ];
}
