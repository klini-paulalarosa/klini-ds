import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnDockComponent } from '@klini-saude/ds';
import { MenuItem } from 'primeng/api';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-dock-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnDockComponent, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">Dock</h1>
        <span class="badge badge--version">kln-dock</span>
      </div>
      <p class="docs-page-description">
        Barra de ícones estilo dock macOS com efeito de ampliação. Wrapper sobre <code class="font-mono">p-dock</code> do PrimeNG.
        Componente de navegação visual para acesso rápido a módulos do portal.
      </p>

      <div class="docs-section">
        <h2>Dock inferior</h2>
        <p>Navegação por ícones na parte inferior do portal.</p>
        <app-component-preview [code]="codeDock">
          <div preview style="position:relative;height:160px;background:var(--docs-sidebar-bg);border-radius:8px;border:1px solid var(--docs-border)">
            <kln-dock [model]="dockItems" position="bottom" />
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Dock lateral</h2>
        <app-component-preview [code]="codeDockSide">
          <div preview style="position:relative;height:200px;background:var(--docs-sidebar-bg);border-radius:8px;border:1px solid var(--docs-border)">
            <kln-dock [model]="dockItems" position="left" />
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
export class DockPageComponent {
  dockItems: MenuItem[] = [
    { label: 'Início', icon: 'pi pi-home', command: () => console.log('Início') },
    { label: 'Meu Plano', icon: 'pi pi-id-card', command: () => console.log('Plano') },
    { label: 'Autorizações', icon: 'pi pi-check-circle', command: () => console.log('Autorizações') },
    { label: 'Rede', icon: 'pi pi-map-marker', command: () => console.log('Rede') },
    { label: 'Financeiro', icon: 'pi pi-wallet', command: () => console.log('Financeiro') },
    { label: 'Suporte', icon: 'pi pi-headphones', command: () => console.log('Suporte') },
  ];

  codeDock = `<kln-dock [model]="dockItems" position="bottom" />

// No componente:
dockItems: MenuItem[] = [
  { label: 'Início', icon: 'pi pi-home' },
  { label: 'Meu Plano', icon: 'pi pi-id-card' },
  { label: 'Autorizações', icon: 'pi pi-check-circle' },
];`;

  codeDockSide = `<kln-dock [model]="dockItems" position="left" />`;

  props: PropDef[] = [
    { name: 'model', type: 'MenuItem[]', default: '[]', description: 'Array de itens do dock.' },
    { name: 'position', type: "'bottom' | 'top' | 'left' | 'right'", default: "'bottom'", description: 'Posição do dock.' },
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais.' },
  ];
}
