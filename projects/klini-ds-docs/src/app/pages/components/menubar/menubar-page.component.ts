import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnMenubarComponent } from '@klini-saude/ds';
import { MenuItem } from 'primeng/api';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-menubar-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnMenubarComponent, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">Menubar</h1>
        <span class="badge badge--version">kln-menubar</span>
      </div>
      <p class="docs-page-description">
        Barra de menu horizontal com suporte a submenus. Wrapper sobre <code class="font-mono">p-menubar</code> do PrimeNG.
        Usado como navegação principal do portal do beneficiário ou do portal médico.
      </p>

      <div class="docs-section">
        <h2>Portal do Beneficiário</h2>
        <app-component-preview [code]="codePortal">
          <div preview>
            <kln-menubar [items]="menuPortal" />
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
export class MenubarPageComponent {
  menuPortal: MenuItem[] = [
    {
      label: 'Meu Plano',
      icon: 'pi pi-id-card',
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
        { separator: true },
        { label: 'Histórico', icon: 'pi pi-history' },
      ],
    },
    {
      label: 'Rede Credenciada',
      icon: 'pi pi-map-marker',
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
  ];

  codePortal = `<kln-menubar [items]="menuPortal" />

// No componente:
menuPortal: MenuItem[] = [
  {
    label: 'Meu Plano',
    icon: 'pi pi-id-card',
    items: [
      { label: 'Dados do plano', icon: 'pi pi-info-circle' },
      { label: 'Carteirinha', icon: 'pi pi-credit-card' },
    ],
  },
  { label: 'Rede Credenciada', icon: 'pi pi-map-marker' },
];`;

  props: PropDef[] = [
    { name: 'items', type: 'MenuItem[]', default: '[]', description: 'Array de itens do menu.', required: true },
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais.' },
  ];
}
