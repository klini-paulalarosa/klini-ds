import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnMenuComponent, ButtonComponent } from '@klini-saude/ds';
import { MenuItem } from 'primeng/api';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-menu-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnMenuComponent, ButtonComponent, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">Menu</h1>
        <span class="badge badge--version">kln-menu</span>
      </div>
      <p class="docs-page-description">
        Lista de navegação ou ações contextuais. Pode ser exibido inline ou como menu flutuante.
        Ideal para navegação lateral, menus de perfil e ações em tabelas.
        Wrapper sobre <code class="font-mono">p-menu</code> do PrimeNG.
      </p>

      <div class="docs-section">
        <h2>Lista fixa (inline)</h2>
        <p>Menu inline estático — ideal para navegação lateral e painéis de controle do portal.</p>
        <app-component-preview [code]="inlineCode">
          <div preview style="max-width:240px">
            <kln-menu [items]="profileItems" />
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Com separadores</h2>
        <p>Use <code class="font-mono">separator: true</code> para agrupar itens relacionados.</p>
        <app-component-preview [code]="separatorCode">
          <div preview style="max-width:240px">
            <kln-menu [items]="fullMenuItems" />
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Exibição condicional</h2>
        <p>Toggle programático do menu por um botão.</p>
        <app-component-preview [code]="toggleCode">
          <div preview>
            <kln-button
              label="Menu de Ações"
              icon="pi pi-ellipsis-v"
              severity="secondary"
              variant="outlined"
              (clicked)="menuVisible = !menuVisible" />
            @if (menuVisible) {
              <div style="margin-top:8px;max-width:220px">
                <kln-menu [items]="actionItems" />
              </div>
            }
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Props</h2>
        <app-props-table [props]="props" />
      </div>

      <div class="docs-section">
        <h2>MenuItem — principais campos</h2>
        <app-props-table [props]="menuItemProps" />
      </div>
    </div>
  `,
})
export class MenuPageComponent {
  menuVisible = false;

  profileItems: MenuItem[] = [
    { label: 'Meu Perfil', icon: 'pi pi-user', command: () => {} },
    { label: 'Meu Plano', icon: 'pi pi-id-card', command: () => {} },
    { label: 'Dependentes', icon: 'pi pi-users', command: () => {} },
    { label: 'Configurações', icon: 'pi pi-cog', command: () => {} },
  ];

  fullMenuItems: MenuItem[] = [
    { label: 'Perfil', icon: 'pi pi-user', command: () => {} },
    { label: 'Configurações', icon: 'pi pi-cog', command: () => {} },
    { separator: true },
    { label: 'Suporte', icon: 'pi pi-question-circle', command: () => {} },
    { separator: true },
    { label: 'Sair', icon: 'pi pi-sign-out', command: () => {} },
  ];

  actionItems: MenuItem[] = [
    { label: 'Ver detalhes', icon: 'pi pi-eye', command: () => { this.menuVisible = false; } },
    { label: 'Editar', icon: 'pi pi-pencil', command: () => { this.menuVisible = false; } },
    { separator: true },
    { label: 'Cancelar consulta', icon: 'pi pi-times', command: () => { this.menuVisible = false; } },
  ];

  inlineCode = `items: MenuItem[] = [
  { label: 'Meu Perfil',  icon: 'pi pi-user',    command: () => {} },
  { label: 'Meu Plano',   icon: 'pi pi-id-card', command: () => {} },
  { label: 'Dependentes', icon: 'pi pi-users',   command: () => {} },
];

<kln-menu [items]="items" />`;

  separatorCode = `items: MenuItem[] = [
  { label: 'Perfil',        icon: 'pi pi-user',           command: () => {} },
  { label: 'Configurações', icon: 'pi pi-cog',            command: () => {} },
  { separator: true },
  { label: 'Suporte',       icon: 'pi pi-question-circle',command: () => {} },
  { separator: true },
  { label: 'Sair',          icon: 'pi pi-sign-out',       command: () => {} },
];`;

  toggleCode = `<kln-button
  label="Menu de Ações"
  icon="pi pi-ellipsis-v"
  (clicked)="menuVisible = !menuVisible" />

@if (menuVisible) {
  <kln-menu [items]="actionItems" />
}

// Classe
menuVisible = false;
actionItems: MenuItem[] = [
  { label: 'Ver detalhes', icon: 'pi pi-eye',    command: () => {} },
  { label: 'Editar',       icon: 'pi pi-pencil', command: () => {} },
  { separator: true },
  { label: 'Cancelar',     icon: 'pi pi-times',  command: () => {} },
];`;

  props: PropDef[] = [
    { name: 'items', type: 'MenuItem[]', default: '[]', description: 'Array de itens. Importar MenuItem de primeng/api.' },
    { name: 'popup', type: 'boolean', default: 'false', description: 'Modo popup flutuante.' },
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais.' },
  ];

  menuItemProps: PropDef[] = [
    { name: 'label', type: 'string', default: 'undefined', description: 'Texto do item de menu.' },
    { name: 'icon', type: 'string', default: 'undefined', description: 'Classe PrimeIcons (ex: pi pi-user).' },
    { name: 'command', type: '(event) => void', default: 'undefined', description: 'Callback ao clicar no item.' },
    { name: 'routerLink', type: 'string | any[]', default: 'undefined', description: 'Rota Angular para navegação.' },
    { name: 'separator', type: 'boolean', default: 'false', description: 'Renderiza divisória em vez de item clicável.' },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Desabilita o item.' },
    { name: 'badge', type: 'string', default: 'undefined', description: 'Badge exibido ao lado do item.' },
  ];
}