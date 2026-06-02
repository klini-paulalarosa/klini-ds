import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnGalleriaComponent } from '@klini-saude/ds';
import { GalleriaModule } from 'primeng/galleria';
import { ButtonComponent } from '@klini-saude/ds';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-galleria-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnGalleriaComponent, GalleriaModule, ButtonComponent, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">Galleria</h1>
        <span class="badge badge--version">kln-galleria</span>
      </div>
      <p class="docs-page-description">
        Galeria de imagens com thumbnails e navegação. Wrapper sobre <code class="font-mono">p-galleria</code> do PrimeNG.
        Usada para visualizar exames de imagem e documentos do beneficiário.
      </p>

      <div class="docs-section">
        <h2>Exames de imagem</h2>
        <app-component-preview [code]="codeExames">
          <div preview>
            <kln-galleria [value]="exames" [numVisible]="5" [showThumbnails]="true">
              <ng-template pTemplate="item" let-item>
                <img [src]="item.url" [alt]="item.descricao" style="width:100%;max-height:300px;object-fit:cover" />
              </ng-template>
              <ng-template pTemplate="thumbnail" let-item>
                <img [src]="item.url" [alt]="item.descricao" style="width:60px;height:40px;object-fit:cover" />
              </ng-template>
            </kln-galleria>
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
export class GalleriaPageComponent {
  exames = [
    { url: 'https://primefaces.org/cdn/primeng/images/demo/nature/nature1.jpg', descricao: 'Raio-X Tórax — AP' },
    { url: 'https://primefaces.org/cdn/primeng/images/demo/nature/nature2.jpg', descricao: 'Raio-X Tórax — PA' },
    { url: 'https://primefaces.org/cdn/primeng/images/demo/nature/nature3.jpg', descricao: 'Ultrassom Abdominal' },
    { url: 'https://primefaces.org/cdn/primeng/images/demo/nature/nature4.jpg', descricao: 'Ressonância L5-S1' },
    { url: 'https://primefaces.org/cdn/primeng/images/demo/nature/nature5.jpg', descricao: 'TC Crânio' },
  ];

  codeExames = `<kln-galleria [value]="exames" [numVisible]="5" [showThumbnails]="true">
  <ng-template pTemplate="item" let-item>
    <img [src]="item.url" [alt]="item.descricao" style="width:100%;max-height:300px;object-fit:cover" />
  </ng-template>
  <ng-template pTemplate="thumbnail" let-item>
    <img [src]="item.url" [alt]="item.descricao" style="width:60px;height:40px;object-fit:cover" />
  </ng-template>
</kln-galleria>`;

  props: PropDef[] = [
    { name: 'value', type: 'any[]', default: '[]', description: 'Array de imagens.' },
    { name: 'numVisible', type: 'number', default: '5', description: 'Thumbnails visíveis.' },
    { name: 'circular', type: 'boolean', default: 'false', description: 'Navegação circular.' },
    { name: 'showThumbnails', type: 'boolean', default: 'true', description: 'Exibe painel de thumbnails.' },
    { name: 'showIndicators', type: 'boolean', default: 'false', description: 'Exibe indicadores de posição.' },
    { name: 'fullScreen', type: 'boolean', default: 'false', description: 'Permite visualização fullscreen.' },
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais.' },
  ];
}
