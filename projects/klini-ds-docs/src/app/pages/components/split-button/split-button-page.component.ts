import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnSplitButtonComponent } from '@klini-saude/ds';
import { MenuItem } from 'primeng/api';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-split-button-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnSplitButtonComponent, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">SplitButton</h1>
        <span class="badge badge--version">kln-split-button</span>
      </div>
      <p class="docs-page-description">
        Botão principal com dropdown de ações secundárias. Wrapper sobre <code class="font-mono">p-splitbutton</code> do PrimeNG.
        Usado para ações de formulário com opções adicionais (Salvar / Salvar e fechar / Exportar).
      </p>

      <div class="docs-section">
        <h2>Salvar autorização</h2>
        <app-component-preview [code]="codeSalvar">
          <div preview style="padding:24px;display:flex;gap:16px">
            <kln-split-button label="Salvar" icon="pi pi-check" [items]="acoesSalvar" />
            <kln-split-button label="Aprovar" icon="pi pi-check-circle" [items]="acoesAprovar" severity="success" />
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Exportar relatório</h2>
        <app-component-preview [code]="codeExportar">
          <div preview style="padding:24px">
            <kln-split-button label="Exportar PDF" icon="pi pi-file-pdf" [items]="acoesExportar" severity="secondary" />
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
export class SplitButtonPageComponent {
  acoesSalvar: MenuItem[] = [
    { label: 'Salvar e fechar', icon: 'pi pi-save', command: () => console.log('Salvar e fechar') },
    { label: 'Salvar rascunho', icon: 'pi pi-pencil', command: () => console.log('Rascunho') },
    { separator: true },
    { label: 'Cancelar', icon: 'pi pi-times', command: () => console.log('Cancelar') },
  ];

  acoesAprovar: MenuItem[] = [
    { label: 'Aprovar e notificar', icon: 'pi pi-bell', command: () => console.log('Aprovar e notificar') },
    { label: 'Aprovar silenciosamente', icon: 'pi pi-check', command: () => console.log('Aprovar silencioso') },
  ];

  acoesExportar: MenuItem[] = [
    { label: 'Exportar Excel', icon: 'pi pi-file-excel', command: () => console.log('Excel') },
    { label: 'Exportar CSV', icon: 'pi pi-table', command: () => console.log('CSV') },
    { label: 'Imprimir', icon: 'pi pi-print', command: () => console.log('Print') },
  ];

  codeSalvar = `<kln-split-button label="Salvar" icon="pi pi-check" [items]="acoesSalvar" />

// No componente:
acoesSalvar: MenuItem[] = [
  { label: 'Salvar e fechar', icon: 'pi pi-save' },
  { label: 'Salvar rascunho', icon: 'pi pi-pencil' },
  { separator: true },
  { label: 'Cancelar', icon: 'pi pi-times' },
];`;

  codeExportar = `<kln-split-button
  label="Exportar PDF"
  icon="pi pi-file-pdf"
  [items]="acoesExportar"
  severity="secondary"
/>`;

  props: PropDef[] = [
    { name: 'label', type: 'string', default: "''", description: 'Texto do botão principal.', required: true },
    { name: 'icon', type: 'string', default: "''", description: 'Ícone do botão principal.' },
    { name: 'items', type: 'MenuItem[]', default: '[]', description: 'Array de ações do dropdown.', required: true },
    { name: 'severity', type: "'primary' | 'secondary' | 'success' | 'info' | 'warn' | 'danger' | 'contrast'", default: "'primary'", description: 'Variante de cor.' },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Desabilita o botão.' },
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais.' },
  ];
}
