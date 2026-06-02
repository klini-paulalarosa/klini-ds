import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnTieredMenuComponent, ButtonComponent } from '@klini-saude/ds';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { MenuItem } from 'primeng/api';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-tiered-menu-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnTieredMenuComponent, ButtonComponent, TieredMenuModule, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">TieredMenu</h1>
        <span class="badge badge--version">kln-tiered-menu</span>
      </div>
      <p class="docs-page-description">
        Menu hierárquico com submenus aninhados. Wrapper sobre <code class="font-mono">p-tieredmenu</code> do PrimeNG.
        Usado para navegação de serviços com múltiplos níveis.
      </p>

      <div class="docs-section">
        <h2>Embutido</h2>
        <p>Menu de serviços Klini com hierarquia de categorias.</p>
        <app-component-preview [code]="codeEmbed">
          <div preview style="max-width:280px">
            <kln-tiered-menu [model]="menuServicos" />
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Como popup</h2>
        <p>Para o modo popup com controle programático, use <code class="font-mono">p-tieredmenu</code> diretamente:</p>
        <app-component-preview [code]="codePopup">
          <div preview style="padding:24px">
            <p-tieredmenu #tm [model]="menuServicos" [popup]="true" />
            <kln-button label="Serviços" icon="pi pi-list" (onClick)="tm.show($event)" />
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
export class TieredMenuPageComponent {
  menuServicos: MenuItem[] = [
    {
      label: 'Autorizações',
      icon: 'pi pi-check-circle',
      items: [
        { label: 'Consultas', icon: 'pi pi-calendar' },
        { label: 'Exames', icon: 'pi pi-chart-bar' },
        {
          label: 'Internações',
          icon: 'pi pi-heart',
          items: [
            { label: 'Eletiva', icon: 'pi pi-check' },
            { label: 'Urgência', icon: 'pi pi-exclamation-triangle' },
          ],
        },
      ],
    },
    {
      label: 'Rede Credenciada',
      icon: 'pi pi-map-marker',
      items: [
        { label: 'Hospitais', icon: 'pi pi-building' },
        { label: 'Clínicas', icon: 'pi pi-home' },
      ],
    },
    { separator: true },
    { label: 'Financeiro', icon: 'pi pi-wallet' },
  ];

  codeEmbed = `<kln-tiered-menu [model]="menuServicos" />`;

  codePopup = `<!-- Para popup com show(), use p-tieredmenu diretamente -->
<p-tieredmenu #tm [model]="menuServicos" [popup]="true" />
<kln-button label="Serviços" (onClick)="tm.show($event)" />`;

  props: PropDef[] = [
    { name: 'model', type: 'MenuItem[]', default: '[]', description: 'Array de itens do menu.' },
    { name: 'popup', type: 'boolean', default: 'false', description: 'Modo popup (acionado por referência).' },
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais.' },
  ];
}
