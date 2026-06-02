import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnImageComponent } from '@klini-saude/ds';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-image-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnImageComponent, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">Image</h1>
        <span class="badge badge--version">kln-image</span>
      </div>
      <p class="docs-page-description">
        Exibição de imagem com suporte a preview em fullscreen. Wrapper sobre <code class="font-mono">p-image</code> do PrimeNG.
        Usado para exibir fotos do beneficiário, logos de prestadores e imagens de exames.
      </p>

      <div class="docs-section">
        <h2>Foto do beneficiário</h2>
        <app-component-preview [code]="codeFoto">
          <div preview style="display:flex;gap:24px;align-items:flex-start;padding:16px">
            <kln-image
              src="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png"
              alt="Foto do beneficiário"
              width="80"
              height="80"
            />
            <div>
              <p style="font-size:14px;font-weight:600;color:var(--docs-text);margin:0">Carlos Eduardo Silva</p>
              <p style="font-size:13px;color:var(--docs-text-muted);margin:4px 0 0">CPF: 123.456.789-00</p>
              <p style="font-size:13px;color:var(--docs-text-muted);margin:2px 0 0">Plano: Klini Start PJ</p>
            </div>
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Com preview (fullscreen)</h2>
        <p>Clique na imagem para abrir em tela cheia.</p>
        <app-component-preview [code]="codePreview">
          <div preview style="padding:16px">
            <kln-image
              src="https://primefaces.org/cdn/primeng/images/demo/nature/nature1.jpg"
              alt="Exame de imagem"
              width="200"
              [preview]="true"
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
export class ImagePageComponent {
  codeFoto = `<kln-image
  src="https://exemplo.com/foto.jpg"
  alt="Foto do beneficiário"
  width="80"
  height="80"
/>`;

  codePreview = `<kln-image
  src="https://exemplo.com/exame.jpg"
  alt="Exame de imagem"
  width="200"
  [preview]="true"
/>`;

  props: PropDef[] = [
    { name: 'src', type: 'string', default: "''", description: 'URL da imagem.' },
    { name: 'alt', type: 'string', default: "''", description: 'Texto alternativo para acessibilidade.' },
    { name: 'width', type: 'string', default: "''", description: 'Largura em pixels.' },
    { name: 'height', type: 'string', default: "''", description: 'Altura em pixels.' },
    { name: 'preview', type: 'boolean', default: 'false', description: 'Habilita visualização fullscreen ao clicar.' },
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais.' },
  ];
}
