import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnFileUploadComponent } from '@klini-saude/ds';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-file-upload-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnFileUploadComponent, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">FileUpload</h1>
        <span class="badge badge--version">kln-file-upload</span>
      </div>
      <p class="docs-page-description">
        Upload de arquivos com preview e validação. Wrapper sobre <code class="font-mono">p-fileupload</code> do PrimeNG.
        Usado para envio de laudos, exames, comprovantes e documentos do beneficiário.
      </p>

      <div class="docs-section">
        <h2>Upload de laudo médico</h2>
        <p>Aceita PDF e imagens até 5 MB.</p>
        <app-component-preview [code]="codeLaudo">
          <div preview>
            <kln-file-upload
              accept=".pdf,.jpg,.jpeg,.png"
              [maxFileSize]="5000000"
              chooseLabel="Selecionar arquivo"
              uploadLabel="Enviar laudo"
              cancelLabel="Cancelar"
            />
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Upload múltiplo — documentos</h2>
        <p>Envio de múltiplos documentos para solicitação de reembolso.</p>
        <app-component-preview [code]="codeMulti">
          <div preview>
            <kln-file-upload
              accept=".pdf,.jpg,.jpeg,.png"
              [multiple]="true"
              [maxFileSize]="10000000"
              chooseLabel="Adicionar documentos"
            />
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
export class FileUploadPageComponent {
  codeLaudo = `<kln-file-upload
  accept=".pdf,.jpg,.jpeg,.png"
  [maxFileSize]="5000000"
  chooseLabel="Selecionar arquivo"
  uploadLabel="Enviar laudo"
  cancelLabel="Cancelar"
/>`;

  codeMulti = `<kln-file-upload
  accept=".pdf,.jpg,.jpeg,.png"
  [multiple]="true"
  [maxFileSize]="10000000"
  chooseLabel="Adicionar documentos"
/>`;

  props: PropDef[] = [
    { name: 'url', type: 'string', default: "''", description: 'URL do endpoint de upload.' },
    { name: 'multiple', type: 'boolean', default: 'false', description: 'Permite seleção de múltiplos arquivos.' },
    { name: 'accept', type: 'string', default: "''", description: 'Tipos de arquivo aceitos (ex: .pdf,.jpg).' },
    { name: 'maxFileSize', type: 'number | undefined', default: 'undefined', description: 'Tamanho máximo em bytes.' },
    { name: 'auto', type: 'boolean', default: 'false', description: 'Upload automático ao selecionar.' },
    { name: 'chooseLabel', type: 'string', default: "'Selecionar'", description: 'Rótulo do botão de seleção.' },
    { name: 'uploadLabel', type: 'string', default: "'Enviar'", description: 'Rótulo do botão de upload.' },
    { name: 'cancelLabel', type: 'string', default: "'Cancelar'", description: 'Rótulo do botão de cancelar.' },
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais.' },
  ];
}
