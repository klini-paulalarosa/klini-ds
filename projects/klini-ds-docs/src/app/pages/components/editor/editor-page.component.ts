import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnEditorComponent } from '@klini-saude/ds';
import { FormsModule } from '@angular/forms';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-editor-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnEditorComponent, FormsModule, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">Editor</h1>
        <span class="badge badge--version">kln-editor</span>
      </div>
      <p class="docs-page-description">
        Editor de texto rico com toolbar formatação. Wrapper sobre <code class="font-mono">p-editor</code> do PrimeNG.
        Usado para laudos médicos, observações clínicas e justificativas de autorização.
      </p>

      <div class="docs-section">
        <h2>Laudo médico</h2>
        <p>Campo de texto rico para digitação de laudos e relatórios clínicos.</p>
        <app-component-preview [code]="codeLaudo">
          <div preview>
            <kln-editor
              placeholder="Digite o laudo médico aqui..."
              [(ngModel)]="laudo"
            />
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Observações somente leitura</h2>
        <app-component-preview [code]="codeReadonly">
          <div preview>
            <kln-editor [value]="laudoExemplo" [readonly]="true" />
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
export class EditorPageComponent {
  laudo = '';
  laudoExemplo = '<p><strong>Laudo de Ecocardiograma Transtorácico</strong></p><p>Paciente: Carlos Eduardo Silva, 45 anos.</p><p>Conclusão: <em>Função sistólica do ventrículo esquerdo preservada.</em> FEVE estimada em 65%. Sem alterações valvares significativas.</p>';

  codeLaudo = `<kln-editor
  placeholder="Digite o laudo médico aqui..."
  [(ngModel)]="laudo"
/>`;

  codeReadonly = `<kln-editor [value]="laudoExemplo" [readonly]="true" />`;

  props: PropDef[] = [
    { name: 'value', type: 'string', default: "''", description: 'Conteúdo HTML do editor (ngModel).' },
    { name: 'placeholder', type: 'string', default: "''", description: 'Texto placeholder quando vazio.' },
    { name: 'readonly', type: 'boolean', default: 'false', description: 'Modo somente leitura.' },
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais.' },
  ];
}
