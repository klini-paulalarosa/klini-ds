import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnTabMenuComponent } from '@klini-saude/ds';
import { MenuItem } from 'primeng/api';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-tab-menu-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnTabMenuComponent, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">TabMenu</h1>
        <span class="badge badge--version">kln-tab-menu</span>
      </div>
      <p class="docs-page-description">
        Menu horizontal em formato de abas. Wrapper sobre <code class="font-mono">p-tabmenu</code> do PrimeNG.
        Usado para navegar entre seções do portal: Dados do Plano, Histórico, Documentos, Financeiro.
      </p>

      <div class="docs-section">
        <h2>Portal do Beneficiário</h2>
        <app-component-preview [code]="codePortal">
          <div preview style="padding:8px">
            <kln-tab-menu [items]="abasPortal" [activeItem]="abasPortal[0]" />
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Histórico médico</h2>
        <app-component-preview [code]="codeHistorico">
          <div preview style="padding:8px">
            <kln-tab-menu [items]="abasHistorico" [activeItem]="abasHistorico[1]" />
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
export class TabMenuPageComponent {
  abasPortal: MenuItem[] = [
    { label: 'Dados do Plano', icon: 'pi pi-id-card' },
    { label: 'Histórico', icon: 'pi pi-history' },
    { label: 'Documentos', icon: 'pi pi-file' },
    { label: 'Financeiro', icon: 'pi pi-wallet' },
  ];

  abasHistorico: MenuItem[] = [
    { label: 'Consultas', icon: 'pi pi-calendar' },
    { label: 'Autorizações', icon: 'pi pi-check-circle' },
    { label: 'Exames', icon: 'pi pi-chart-bar' },
    { label: 'Internações', icon: 'pi pi-heart' },
  ];

  codePortal = `<kln-tab-menu [items]="abasPortal" [activeItem]="abasPortal[0]" />

// No componente:
abasPortal: MenuItem[] = [
  { label: 'Dados do Plano', icon: 'pi pi-id-card' },
  { label: 'Histórico', icon: 'pi pi-history' },
  { label: 'Documentos', icon: 'pi pi-file' },
  { label: 'Financeiro', icon: 'pi pi-wallet' },
];`;

  codeHistorico = `<kln-tab-menu [items]="abasHistorico" [activeItem]="abasHistorico[1]" />`;

  props: PropDef[] = [
    { name: 'items', type: 'MenuItem[]', default: '[]', description: 'Array de itens do menu.', required: true },
    { name: 'activeItem', type: 'MenuItem | undefined', default: 'undefined', description: 'Item ativo atual.' },
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais.' },
  ];
}
