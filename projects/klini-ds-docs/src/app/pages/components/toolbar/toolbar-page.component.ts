import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnToolbarComponent, ButtonComponent, InputTextComponent } from '@klini-saude/ds';
import { FormsModule } from '@angular/forms';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-toolbar-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnToolbarComponent, ButtonComponent, InputTextComponent, FormsModule, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">Toolbar</h1>
        <span class="badge badge--version">kln-toolbar</span>
      </div>
      <p class="docs-page-description">
        Barra de ferramentas com slots para início, centro e fim. Wrapper sobre <code class="font-mono">p-toolbar</code> do PrimeNG.
        Usa atributos <code class="font-mono">klnStart</code>, <code class="font-mono">klnCenter</code> e <code class="font-mono">klnEnd</code>.
      </p>

      <div class="docs-section">
        <h2>Toolbar de tabela de autorizações</h2>
        <app-component-preview [code]="codeTable">
          <div preview>
            <kln-toolbar>
              <div klnStart style="display:flex;gap:8px;align-items:center">
                <kln-button label="Nova autorização" icon="pi pi-plus" />
                <kln-button label="Exportar" icon="pi pi-download" severity="secondary" />
              </div>
              <div klnCenter>
                <kln-input-text placeholder="Buscar por beneficiário ou guia..." [(ngModel)]="busca" styleClass="w-full" />
              </div>
              <div klnEnd style="display:flex;gap:8px">
                <kln-button icon="pi pi-filter" severity="secondary" />
                <kln-button icon="pi pi-refresh" severity="secondary" />
              </div>
            </kln-toolbar>
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
export class ToolbarPageComponent {
  busca = '';

  codeTable = `<kln-toolbar>
  <div klnStart style="display:flex;gap:8px">
    <kln-button label="Nova autorização" icon="pi pi-plus" />
    <kln-button label="Exportar" severity="secondary" />
  </div>
  <div klnCenter>
    <kln-input-text placeholder="Buscar..." [(ngModel)]="busca" />
  </div>
  <div klnEnd style="display:flex;gap:8px">
    <kln-button icon="pi pi-filter" severity="secondary" />
    <kln-button icon="pi pi-refresh" severity="secondary" />
  </div>
</kln-toolbar>`;

  props: PropDef[] = [
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais.' },
    { name: 'klnStart', type: 'slot', default: '—', description: 'Conteúdo do lado esquerdo da toolbar.' },
    { name: 'klnCenter', type: 'slot', default: '—', description: 'Conteúdo do centro da toolbar.' },
    { name: 'klnEnd', type: 'slot', default: '—', description: 'Conteúdo do lado direito da toolbar.' },
  ];
}
