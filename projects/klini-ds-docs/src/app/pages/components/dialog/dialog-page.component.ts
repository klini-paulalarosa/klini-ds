import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnDialogComponent, ButtonComponent } from '@klini-saude/ds';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-dialog-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnDialogComponent, ButtonComponent, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">Dialog</h1>
        <span class="badge badge--version">kln-dialog</span>
      </div>
      <p class="docs-page-description">
        Modal de diálogo baseado no <code class="font-mono">p-dialog</code> do PrimeNG.
        Suporta <code class="font-mono">[(visible)]</code> bidirecional, header personalizado,
        footer com ações e controle programático de abertura/fechamento.
      </p>

      <!-- Básico -->
      <div class="docs-section">
        <h2>Uso básico</h2>
        <app-component-preview [code]="basicCode">
          <div preview>
            <kln-button label="Abrir Dialog" (clicked)="basicVisible = true" />
            <kln-dialog
              [(visible)]="basicVisible"
              header="Confirmar agendamento"
            >
              <p style="color:var(--docs-text-muted);line-height:1.6">
                Deseja confirmar o agendamento da consulta com
                <strong>Dr. Carlos Mendes — Cardiologia</strong>
                para <strong>15/06/2026 às 14h30</strong>?
              </p>
              <ng-template pTemplate="footer">
                <kln-button label="Cancelar" severity="secondary" variant="outlined" (clicked)="basicVisible = false" />
                <kln-button label="Confirmar" (clicked)="basicVisible = false" />
              </ng-template>
            </kln-dialog>
          </div>
        </app-component-preview>
      </div>

      <!-- Modal não fechável -->
      <div class="docs-section">
        <h2>Dialog não dispensável</h2>
        <p>Use <code class="font-mono">[closable]="false"</code> + <code class="font-mono">[modal]="true"</code> para forçar o usuário a tomar uma ação.</p>
        <app-component-preview [code]="modalCode">
          <div preview>
            <kln-button label="Abrir Dialog não-dispensável" severity="warn" (clicked)="modalVisible = true" />
            <kln-dialog
              [(visible)]="modalVisible"
              header="Sessão expirando"
              [closable]="false"
              [modal]="true"
            >
              <p style="color:var(--docs-text-muted);line-height:1.6">
                Sua sessão irá expirar em <strong>2 minutos</strong>.
                Deseja continuar conectado?
              </p>
              <ng-template pTemplate="footer">
                <kln-button label="Sair" severity="secondary" variant="text" (clicked)="modalVisible = false" />
                <kln-button label="Continuar conectado" (clicked)="modalVisible = false" />
              </ng-template>
            </kln-dialog>
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
export class DialogPageComponent {
  basicVisible = false;
  modalVisible = false;

  basicCode = `import { KlnDialogComponent, ButtonComponent } from '@klini-saude/ds';

visible = false;

// template
<kln-button label="Abrir Dialog" (clicked)="visible = true" />

<kln-dialog
  [(visible)]="visible"
  header="Confirmar agendamento"
>
  <p>Conteúdo do dialog aqui...</p>
  <ng-template pTemplate="footer">
    <kln-button label="Cancelar" severity="secondary" variant="outlined" (clicked)="visible = false" />
    <kln-button label="Confirmar" (clicked)="onConfirm()" />
  </ng-template>
</kln-dialog>`;

  modalCode = `<kln-dialog
  [(visible)]="visible"
  header="Sessão expirando"
  [closable]="false"
  [modal]="true"
  [style]="{ width: '380px' }"
>
  <p>Conteúdo...</p>
  <ng-template pTemplate="footer">
    <kln-button label="Sair"              severity="secondary" variant="text" (clicked)="logout()" />
    <kln-button label="Continuar conectado" (clicked)="refresh()" />
  </ng-template>
</kln-dialog>`;

  props: PropDef[] = [
    { name: 'visible', type: 'boolean', default: 'false', description: 'Controla a visibilidade do dialog. Suporta [(visible)] bidirecional.' },
    { name: 'header', type: 'string', default: "''", description: 'Texto do cabeçalho.' },
    { name: 'modal', type: 'boolean', default: 'true', description: 'Exibe overlay atrás do dialog.' },
    { name: 'closable', type: 'boolean', default: 'true', description: 'Exibe botão X de fechar.' },
    { name: 'closeOnEscape', type: 'boolean', default: 'true', description: 'Fecha o dialog ao pressionar Esc.' },
    { name: 'dismissableMask', type: 'boolean', default: 'false', description: 'Fecha ao clicar no overlay.' },
    { name: 'draggable', type: 'boolean', default: 'true', description: 'Permite arrastar o dialog pela tela.' },
    { name: 'resizable', type: 'boolean', default: 'true', description: 'Permite redimensionar o dialog.' },
    { name: 'maximizable', type: 'boolean', default: 'false', description: 'Botão de maximizar.' },
    { name: 'style', type: 'object', default: '{}', description: 'Estilos CSS inline (ex: { width: "500px" }).' },
    { name: 'position', type: 'string', default: "'center'", description: "Posição: 'center' | 'top' | 'bottom' | 'left' | 'right' | etc." },
  ];
}
