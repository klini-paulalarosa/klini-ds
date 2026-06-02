import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-context-menu-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ContextMenuModule, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">ContextMenu</h1>
        <span class="badge badge--version">kln-context-menu</span>
      </div>
      <p class="docs-page-description">
        Menu de contexto acionado por clique direito. Wrapper sobre <code class="font-mono">p-contextmenu</code> do PrimeNG.
        Para controle programático (show/hide), use <code class="font-mono">p-contextmenu</code> diretamente.
      </p>

      <div class="docs-section">
        <h2>Menu em tabela de autorizações</h2>
        <p>Clique com o botão direito em uma linha da tabela para ver o menu de contexto.</p>
        <app-component-preview [code]="code1">
          <div preview>
            <p-contextmenu #cm [model]="menuItems" />
            <table style="width:100%;border-collapse:collapse;background:var(--docs-sidebar-bg)">
              <thead>
                <tr style="background:var(--docs-border)">
                  <th style="padding:8px 12px;text-align:left;font-size:13px">Guia</th>
                  <th style="padding:8px 12px;text-align:left;font-size:13px">Beneficiário</th>
                  <th style="padding:8px 12px;text-align:left;font-size:13px">Procedimento</th>
                  <th style="padding:8px 12px;text-align:left;font-size:13px">Status</th>
                </tr>
              </thead>
              <tbody>
                @for (guia of guias; track guia.id) {
                  <tr
                    (contextmenu)="cm.show($event)"
                    style="cursor:context-menu;border-bottom:1px solid var(--docs-border)"
                  >
                    <td style="padding:8px 12px;font-size:13px">{{ guia.id }}</td>
                    <td style="padding:8px 12px;font-size:13px">{{ guia.beneficiario }}</td>
                    <td style="padding:8px 12px;font-size:13px">{{ guia.procedimento }}</td>
                    <td style="padding:8px 12px;font-size:13px">{{ guia.status }}</td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Uso com kln-context-menu</h2>
        <p>O wrapper <code class="font-mono">kln-context-menu</code> aceita <code class="font-mono">[model]</code>,
          <code class="font-mono">[global]</code> e <code class="font-mono">[target]</code>. Para o evento show, use
          <code class="font-mono">p-contextmenu</code> com template reference diretamente.</p>
        <app-component-preview [code]="codeWrapper">
          <div preview style="padding:8px">
            <p style="font-size:13px;color:var(--docs-text-muted);margin:0">Veja o código de exemplo.</p>
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Props (kln-context-menu)</h2>
        <app-props-table [props]="props" />
      </div>
    </div>
  `,
})
export class ContextMenuPageComponent {
  guias = [
    { id: '2024-00123', beneficiario: 'Carlos E. Silva', procedimento: 'Consulta Cardiologia', status: 'Aprovada' },
    { id: '2024-00124', beneficiario: 'Ana P. Santos', procedimento: 'Ressonância Magnética', status: 'Pendente' },
    { id: '2024-00125', beneficiario: 'João R. Lima', procedimento: 'Exame de Sangue', status: 'Negada' },
  ];

  menuItems: MenuItem[] = [
    { label: 'Ver detalhes', icon: 'pi pi-eye' },
    { label: 'Aprovar', icon: 'pi pi-check', command: () => console.log('Aprovado') },
    { label: 'Negar', icon: 'pi pi-times' },
    { separator: true },
    { label: 'Imprimir guia', icon: 'pi pi-print' },
    { label: 'Exportar PDF', icon: 'pi pi-file-pdf' },
  ];

  code1 = `<!-- Use p-contextmenu diretamente para show() -->
<p-contextmenu #cm [model]="menuItems" />
<tr (contextmenu)="cm.show($event)">
  <!-- células da linha -->
</tr>`;

  codeWrapper = `<!-- kln-context-menu: wrapper sem show() exposto -->
<kln-context-menu [model]="menuItems" [global]="true" />`;

  props: PropDef[] = [
    { name: 'model', type: 'MenuItem[]', default: '[]', description: 'Array de itens do menu.' },
    { name: 'global', type: 'boolean', default: 'false', description: 'Ativa o menu em clique direito no documento inteiro.' },
    { name: 'target', type: 'any', default: 'null', description: 'Elemento alvo para o menu de contexto.' },
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais.' },
  ];
}
