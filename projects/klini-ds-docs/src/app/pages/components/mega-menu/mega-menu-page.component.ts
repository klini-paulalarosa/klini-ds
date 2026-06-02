import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnMegaMenuComponent } from '@klini-saude/ds';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-mega-menu-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnMegaMenuComponent, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">MegaMenu</h1>
        <span class="badge badge--version">kln-mega-menu</span>
      </div>
      <p class="docs-page-description">
        Menu principal com submenu exibido em colunas. Wrapper sobre <code class="font-mono">p-megamenu</code> do PrimeNG.
        Ideal para portais com muitas categorias de serviços.
      </p>

      <div class="docs-section">
        <h2>Portal de Serviços Klini</h2>
        <app-component-preview [code]="codeMega">
          <div preview>
            <kln-mega-menu [model]="megaMenu" />
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
export class MegaMenuPageComponent {
  megaMenu = [
    {
      label: 'Beneficiário',
      icon: 'pi pi-user',
      items: [
        [
          {
            label: 'Meu Plano',
            items: [
              { label: 'Dados do plano', icon: 'pi pi-id-card' },
              { label: 'Carteirinha digital', icon: 'pi pi-credit-card' },
              { label: 'Dependentes', icon: 'pi pi-users' },
            ],
          },
        ],
        [
          {
            label: 'Financeiro',
            items: [
              { label: 'Boletos', icon: 'pi pi-file' },
              { label: 'Coparticipação', icon: 'pi pi-calculator' },
              { label: 'Reembolsos', icon: 'pi pi-arrow-circle-left' },
            ],
          },
        ],
      ],
    },
    {
      label: 'Autorizações',
      icon: 'pi pi-check-circle',
      items: [
        [
          {
            label: 'Procedimentos',
            items: [
              { label: 'Nova solicitação', icon: 'pi pi-plus' },
              { label: 'Acompanhar', icon: 'pi pi-list' },
              { label: 'Histórico', icon: 'pi pi-history' },
            ],
          },
        ],
      ],
    },
    {
      label: 'Rede Credenciada',
      icon: 'pi pi-map-marker',
      items: [
        [
          {
            label: 'Busca',
            items: [
              { label: 'Por especialidade', icon: 'pi pi-search' },
              { label: 'Por localização', icon: 'pi pi-map' },
              { label: 'Urgência 24h', icon: 'pi pi-clock' },
            ],
          },
        ],
      ],
    },
  ];

  codeMega = `<kln-mega-menu [model]="megaMenu" />

// No componente:
megaMenu = [
  {
    label: 'Beneficiário',
    items: [[{ label: 'Meu Plano', items: [...] }]],
  },
  { label: 'Autorizações', items: [...] },
];`;

  props: PropDef[] = [
    { name: 'model', type: 'MegaMenuItem[]', default: '[]', description: 'Array de itens do mega menu.' },
    { name: 'orientation', type: "'horizontal' | 'vertical'", default: "'horizontal'", description: 'Orientação do menu.' },
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais.' },
  ];
}
