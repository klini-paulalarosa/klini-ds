import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { KlnTextareaComponent } from '@klini-saude/ds';
import { FormsModule } from '@angular/forms';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-textarea-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnTextareaComponent, FormsModule, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">Textarea</h1>
        <span class="badge badge--version">kln-textarea</span>
      </div>
      <p class="docs-page-description">
        Area de texto multilinha com label, hint, validacao e redimensionamento automatico.
        Implementa Control Value Accessor — compativel com <code class="font-mono">ngModel</code>.
        Wrapper sobre <code class="font-mono">pTextarea</code> do PrimeNG.
      </p>

      <!-- Basico -->
      <div class="docs-section">
        <h2>Basico</h2>
        <p>Campo simples com label e placeholder.</p>
        <app-component-preview [code]="basicCode">
          <div preview style="width:100%;max-width:480px">
            <kln-textarea
              [(ngModel)]="observacao"
              label="Observacoes clinicas"
              placeholder="Descreva o quadro clinico do paciente..."
              [rows]="4"
            />
          </div>
        </app-component-preview>
      </div>

      <!-- AutoResize -->
      <div class="docs-section">
        <h2>AutoResize</h2>
        <p>Com <code class="font-mono">[autoResize]="true"</code> o campo cresce conforme o conteudo digitado.</p>
        <app-component-preview [code]="autoResizeCode">
          <div preview style="width:100%;max-width:480px">
            <kln-textarea
              [(ngModel)]="laudo"
              label="Laudo medico"
              placeholder="Digite o laudo — o campo se expande automaticamente..."
              [autoResize]="true"
              [rows]="3"
              hint="O campo cresce conforme necessario"
            />
          </div>
        </app-component-preview>
      </div>

      <!-- Limite de caracteres -->
      <div class="docs-section">
        <h2>Limite de caracteres</h2>
        <p>Use <code class="font-mono">[maxLength]</code> para limitar a entrada e mostrar contador.</p>
        <app-component-preview [code]="maxLengthCode">
          <div preview style="width:100%;max-width:480px">
            <kln-textarea
              [(ngModel)]="motivo"
              label="Motivo da solicitacao"
              placeholder="Descreva o motivo da solicitacao de autorizacao..."
              [rows]="3"
              [maxLength]="300"
              [hint]="motivo.length + ' / 300 caracteres'"
            />
          </div>
        </app-component-preview>
      </div>

      <!-- Erro e desabilitado -->
      <div class="docs-section">
        <h2>Estados: erro e desabilitado</h2>
        <app-component-preview [code]="statesCode">
          <div preview style="display:flex;flex-direction:column;gap:16px;width:100%;max-width:480px">
            <kln-textarea
              [ngModel]="''"
              label="Campo com erro"
              placeholder="Campo obrigatorio..."
              [rows]="2"
              errorMessage="O campo de observacoes e obrigatorio para autorizacao."
            />
            <kln-textarea
              [ngModel]="'Acesso bloqueado pelo administrador do plano.'"
              label="Campo desabilitado"
              [rows]="2"
              [disabled]="true"
            />
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
export class TextareaPageComponent {
  observacao = '';
  laudo = '';
  motivo = '';

  basicCode = `<kln-textarea
  [(ngModel)]="observacao"
  label="Observacoes clinicas"
  placeholder="Descreva o quadro clinico..."
  [rows]="4"
/>`;

  autoResizeCode = `<kln-textarea
  [(ngModel)]="laudo"
  label="Laudo medico"
  [autoResize]="true"
  [rows]="3"
  hint="O campo cresce conforme necessario"
/>`;

  maxLengthCode = `<kln-textarea
  [(ngModel)]="motivo"
  label="Motivo da solicitacao"
  [rows]="3"
  [maxLength]="300"
  [hint]="motivo.length + ' / 300 caracteres'"
/>`;

  statesCode = `<!-- Com erro -->
<kln-textarea
  label="Campo com erro"
  errorMessage="O campo de observacoes e obrigatorio."
/>

<!-- Desabilitado -->
<kln-textarea
  [ngModel]="'Acesso bloqueado.'"
  label="Campo desabilitado"
  [disabled]="true"
/>`;

  props: PropDef[] = [
    { name: 'label',        type: 'string',  default: "''",    description: 'Label exibido acima do campo.' },
    { name: 'placeholder',  type: 'string',  default: "''",    description: 'Texto placeholder quando vazio.' },
    { name: 'rows',         type: 'number',  default: '4',     description: 'Numero de linhas visiveis inicialmente.' },
    { name: 'autoResize',   type: 'boolean', default: 'false', description: 'Expande o campo automaticamente ao digitar.' },
    { name: 'maxLength',    type: 'number',  default: 'null',  description: 'Limite maximo de caracteres (nativo HTML).' },
    { name: 'hint',         type: 'string',  default: "''",    description: 'Texto auxiliar abaixo do campo (substituido pelo errorMessage se houver erro).' },
    { name: 'errorMessage', type: 'string',  default: "''",    description: 'Mensagem de erro — coloca o campo em estado invalido.' },
    { name: 'disabled',     type: 'boolean', default: 'false', description: 'Desabilita o campo.' },
    { name: 'styleClass',   type: 'string',  default: "''",    description: 'Classes CSS adicionais no textarea.' },
    { name: 'valueChange',  type: 'EventEmitter<string>', default: '—', description: 'Emite o valor ao digitar. Suporta ngModel.' },
  ];
}
