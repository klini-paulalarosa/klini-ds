import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DrawerComponent, ButtonComponent } from '@klini-saude/ds';
import type { KlnDrawerPosition } from '@klini-saude/ds';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-drawer-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DrawerComponent, ButtonComponent, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">Drawer</h1>
        <span class="badge badge--version">kln-drawer</span>
      </div>
      <p class="docs-page-description">
        Painel lateral deslizante para exibir conteúdo adicional sem sair do contexto atual.
        Útil para filtros, formulários e detalhes de consultas ou beneficiários.
        Wrapper sobre <code class="font-mono">p-drawer</code> do PrimeNG.
      </p>

      <!-- Básico (direita) -->
      <div class="docs-section">
        <h2>Básico (direita)</h2>
        <p>Drawer padrão que abre pela direita. Use <code class="font-mono">[(visible)]</code> para controlar a visibilidade.</p>
        <app-component-preview [code]="basicCode">
          <div preview>
            <kln-button label="Abrir Drawer" (clicked)="basicVisible = true" />
            <kln-drawer header="Detalhes da Consulta" [(visible)]="basicVisible">
              <div style="padding:8px 0">
                <p><strong>Beneficiário:</strong> Paula Rosa</p>
                <p><strong>Especialidade:</strong> Cardiologia</p>
                <p><strong>Data:</strong> 20/06/2025 às 14h30</p>
                <p><strong>Médico:</strong> Dr. Marcos Oliveira</p>
                <p><strong>Unidade:</strong> Hospital São Lucas — Bloco B</p>
              </div>
            </kln-drawer>
          </div>
        </app-component-preview>
      </div>

      <!-- Posições -->
      <div class="docs-section">
        <h2>Posições</h2>
        <p>O drawer pode abrir pelos quatro lados da tela via <code class="font-mono">[position]</code>.</p>
        <app-component-preview [code]="positionsCode">
          <div preview style="display:flex;gap:8px;flex-wrap:wrap">
            <kln-button label="Esquerda" size="small" (clicked)="openDrawer('left')" />
            <kln-button label="Direita" size="small" (clicked)="openDrawer('right')" />
            <kln-button label="Topo" size="small" (clicked)="openDrawer('top')" />
            <kln-button label="Baixo" size="small" (clicked)="openDrawer('bottom')" />
          </div>
          <kln-drawer
            [header]="'Drawer — ' + position"
            [position]="position"
            [(visible)]="positionVisible">
            <p>Drawer aberto pela posição: <strong>{{ position }}</strong></p>
            <p>Use para filtros, formulários ou detalhes contextuais.</p>
          </kln-drawer>
        </app-component-preview>
      </div>

      <!-- Sem modal -->
      <div class="docs-section">
        <h2>Sem sobreposição (modal)</h2>
        <p>Com <code class="font-mono">[modal]="false"</code>, o conteúdo por trás permanece interativo.</p>
        <app-component-preview [code]="noModalCode">
          <div preview>
            <kln-button label="Abrir sem modal" severity="secondary" (clicked)="noModalVisible = true" />
            <kln-drawer header="Filtros de Busca" [modal]="false" [(visible)]="noModalVisible">
              <p>Especialidade, cidade, convênio — sem bloquear o conteúdo principal.</p>
            </kln-drawer>
          </div>
        </app-component-preview>
      </div>

      <!-- Props -->
      <div class="docs-section">
        <h2>Props</h2>
        <app-props-table [props]="props" />
      </div>
    </div>
  `,
})
export class DrawerPageComponent {
  basicVisible = false;
  positionVisible = false;
  noModalVisible = false;
  position: KlnDrawerPosition = 'right';

  openDrawer(pos: KlnDrawerPosition): void {
    this.position = pos;
    this.positionVisible = true;
  }

  basicCode = `<kln-button label="Abrir Drawer" (clicked)="visible = true" />

<kln-drawer header="Detalhes da Consulta" [(visible)]="visible">
  <p><strong>Beneficiário:</strong> Paula Rosa</p>
  <p><strong>Especialidade:</strong> Cardiologia</p>
  <p><strong>Data:</strong> 20/06/2025 às 14h30</p>
</kln-drawer>

// Classe
visible = false;`;

  positionsCode = `<kln-button label="Esquerda" (clicked)="openDrawer('left')" />
<kln-button label="Direita"  (clicked)="openDrawer('right')" />
<kln-button label="Topo"     (clicked)="openDrawer('top')" />
<kln-button label="Baixo"    (clicked)="openDrawer('bottom')" />

<kln-drawer
  [header]="'Drawer — ' + position"
  [position]="position"
  [(visible)]="positionVisible">
  <p>Drawer aberto pela posição: {{ position }}</p>
</kln-drawer>

// Classe
position: KlnDrawerPosition = 'right';
positionVisible = false;

openDrawer(pos: KlnDrawerPosition): void {
  this.position = pos;
  this.positionVisible = true;
}`;

  noModalCode = `<kln-button label="Abrir sem modal" (clicked)="visible = true" />

<kln-drawer header="Filtros de Busca" [modal]="false" [(visible)]="visible">
  <p>Especialidade, cidade, convênio.</p>
</kln-drawer>`;

  props: PropDef[] = [
    { name: 'header', type: 'string', default: "''", description: 'Título exibido na barra superior do drawer.' },
    { name: 'position', type: "'left' | 'right' | 'top' | 'bottom'", default: "'right'", description: 'Lado da tela a partir do qual o drawer desliza.' },
    { name: 'visible', type: 'boolean', default: 'false', description: 'Controla a visibilidade. Suporta two-way binding com [(visible)].' },
    { name: 'modal', type: 'boolean', default: 'true', description: 'Exibe sobreposição escurecida sobre o conteúdo ao fundo.' },
    { name: 'closeOnEscape', type: 'boolean', default: 'true', description: 'Fecha o drawer ao pressionar a tecla Escape.' },
    { name: '(visibleChange)', type: 'EventEmitter<boolean>', default: '—', description: 'Emite o novo valor de visibilidade (parte do two-way binding).' },
    { name: '(closed)', type: 'EventEmitter<void>', default: '—', description: 'Emite quando o drawer é fechado.' },
  ];
}
