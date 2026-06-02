import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnPanelMenuComponent } from '@klini-saude/ds';
import { MenuItem } from 'primeng/api';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-panel-menu-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnPanelMenuComponent, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">PanelMenu</h1>
        <span class="badge badge--version">kln-panel-menu</span>
      </div>
      <p class="docs-page-description">
        Menu de painel colapsável com hierarquia. Wrapper sobre <code class="font-mono">p-panelmenu</code> do PrimeNG.
        Usado na sidebar de navegação do portal administrativo.
      </p>

      <div class="docs-section">
        <h2>Sidebar do portal</h2>
        <p>Menu colapsável da barra lateral com seções do portal.</p>
        <app-component-preview [code]="codeSidebar">
          <div preview style="max-width:280px;background:var(--docs-sidebar-bg);border-radius:8px;overflow:hidden">
            <kln-panel-menu [model]="menuSidebar" />
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
export class PanelMenuPageComponent {
  menuSidebar: MenuItem[] = [
    {
      label: 'Meu Plano',
      icon: 'pi pi-id-card',
      expanded: true,
      items: [
        { label: 'Dados do plano', icon: 'pi pi-info-circle' },
        { label: 'Carteirinha', icon: 'pi pi-credit-card' },
        { label: 'Dependentes', icon: 'pi pi-users' },
      ],
    },
    {
      label: 'Autorizações',
      icon: 'pi pi-check-circle',
      items: [
        { label: 'Nova solicitação', icon: 'pi pi-plus' },
        { label: 'Acompanhar', icon: 'pi pi-list' },
        { label: 'Histórico', icon: 'pi pi-history' },
      ],
    },
    {
      label: 'Financeiro',
      icon: 'pi pi-wallet',
      items: [
        { label: 'Boletos', icon: 'pi pi-file' },
        { label: 'Coparticipação', icon: 'pi pi-calculator' },
        { label: 'Reembolsos', icon: 'pi pi-arrow-circle-left' },
      ],
    },
    {
      label: 'Rede Credenciada',
      icon: 'pi pi-map-marker',
    },
  ];

  codeSidebar = `<kln-panel-menu [model]="menuSidebar" />

// No componente:
menuSidebar: MenuItem[] = [
  {
    label: 'Meu Plano',
    icon: 'pi pi-id-card',
    expanded: true,
    items: [
      { label: 'Dados do plano' },
      { label: 'Carteirinha' },
    ],
  },
  { label: 'Autorizações', items: [...] },
];`;

  props: PropDef[] = [
    { name: 'model', type: 'MenuItem[]', default: '[]', description: 'Array de seções e itens do menu.' },
    { name: 'multiple', type: 'boolean', default: 'true', description: 'Permite múltiplos painéis expandidos.' },
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais.' },
  ];
}
