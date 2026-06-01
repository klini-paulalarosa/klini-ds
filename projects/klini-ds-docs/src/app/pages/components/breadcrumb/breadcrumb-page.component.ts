import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnBreadcrumbComponent, ButtonComponent } from '@klini-saude/ds';
import { MenuItem } from 'primeng/api';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-breadcrumb-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnBreadcrumbComponent, ButtonComponent, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">Breadcrumb</h1>
        <span class="badge badge--version">kln-breadcrumb</span>
      </div>
      <p class="docs-page-description">
        Trilha de navegação hierárquica para orientar o usuário sobre sua localização no sistema.
        Essencial em portais com múltiplos níveis como Beneficiário → Consultas → Detalhe.
        Wrapper sobre <code class="font-mono">p-breadcrumb</code> do PrimeNG.
      </p>

      <div class="docs-section">
        <h2>Básico</h2>
        <p>Trilha de 3 níveis com ícone home como ponto de partida.</p>
        <app-component-preview [code]="basicCode">
          <div preview>
            <kln-breadcrumb [items]="basicItems" [home]="home" />
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Detalhe de consulta</h2>
        <p>Navegação até o detalhe de uma consulta específica — padrão Portal do Beneficiário.</p>
        <app-component-preview [code]="detailCode">
          <div preview>
            <kln-breadcrumb [items]="consultaItems" [home]="home" />
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Dinâmico</h2>
        <p>Breadcrumb que cresce conforme o usuário navega. Simula progressão de páginas com botões.</p>
        <app-component-preview [code]="dynamicCode">
          <div preview>
            <kln-breadcrumb [items]="dynamicItems" [home]="home" />
            <div style="display:flex;gap:8px;margin-top:12px;flex-wrap:wrap">
              <kln-button
                label="+ Consultas"
                size="small"
                severity="secondary"
                [disabled]="dynamicItems.length >= 1"
                (clicked)="addConsultas()" />
              <kln-button
                label="+ Detalhe"
                size="small"
                severity="secondary"
                [disabled]="dynamicItems.length < 1 || dynamicItems.length >= 2"
                (clicked)="addDetalhe()" />
              <kln-button
                label="Voltar tudo"
                size="small"
                variant="outlined"
                [disabled]="dynamicItems.length === 0"
                (clicked)="resetBreadcrumb()" />
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
export class BreadcrumbPageComponent {
  home: MenuItem = { icon: 'pi pi-home', routerLink: '/' };

  basicItems: MenuItem[] = [
    { label: 'Portal', routerLink: '/' },
    { label: 'Consultas', routerLink: '/consultas' },
    { label: 'Consulta #4821' },
  ];

  consultaItems: MenuItem[] = [
    { label: 'Beneficiário', routerLink: '/beneficiario' },
    { label: 'Minhas Consultas', routerLink: '/beneficiario/consultas' },
    { label: 'Cardiologia — 20/06/2025' },
  ];

  dynamicItems: MenuItem[] = [];

  addConsultas(): void {
    this.dynamicItems = [{ label: 'Consultas', routerLink: '/consultas' }];
  }

  addDetalhe(): void {
    this.dynamicItems = [
      { label: 'Consultas', routerLink: '/consultas' },
      { label: 'Consulta #4821' },
    ];
  }

  resetBreadcrumb(): void {
    this.dynamicItems = [];
  }

  basicCode = `// Classe
items: MenuItem[] = [
  { label: 'Portal',    routerLink: '/' },
  { label: 'Consultas', routerLink: '/consultas' },
  { label: 'Consulta #4821' },
];
home: MenuItem = { icon: 'pi pi-home', routerLink: '/' };

// Template
<kln-breadcrumb [items]="items" [home]="home" />`;

  detailCode = `items: MenuItem[] = [
  { label: 'Beneficiário',     routerLink: '/beneficiario' },
  { label: 'Minhas Consultas', routerLink: '/beneficiario/consultas' },
  { label: 'Cardiologia — 20/06/2025' },
];`;

  dynamicCode = `// Classe
dynamicItems: MenuItem[] = [];

addConsultas(): void {
  this.dynamicItems = [
    { label: 'Consultas', routerLink: '/consultas' }
  ];
}

addDetalhe(): void {
  this.dynamicItems = [
    { label: 'Consultas',     routerLink: '/consultas' },
    { label: 'Consulta #4821' },
  ];
}

// Template
<kln-breadcrumb [items]="dynamicItems" [home]="home" />`;

  props: PropDef[] = [
    { name: 'items', type: 'MenuItem[]', default: '[]', description: 'Array de itens da trilha de navegação. O último item geralmente é a página atual (sem routerLink).' },
    { name: 'home', type: 'MenuItem', default: "{ icon: 'pi pi-home', routerLink: '/' }", description: 'Item do início da trilha (ícone home). Configurável com ícone e rota.' },
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais.' },
  ];
}