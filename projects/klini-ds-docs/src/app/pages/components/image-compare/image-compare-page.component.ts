import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnImageCompareComponent } from '@klini-saude/ds';
import { ImageCompareModule } from 'primeng/imagecompare';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-image-compare-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnImageCompareComponent, ImageCompareModule, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">ImageCompare</h1>
        <span class="badge badge--version">kln-image-compare</span>
      </div>
      <p class="docs-page-description">
        Comparação lado a lado de duas imagens com divisor deslizável. Wrapper sobre <code class="font-mono">p-imagecompare</code> do PrimeNG.
        Usado para comparar exames de imagem (antes/depois do tratamento).
      </p>

      <div class="docs-section">
        <h2>Comparação de exames</h2>
        <p>Arraste o divisor para comparar imagem anterior e atual do exame.</p>
        <app-component-preview [code]="codeCompare">
          <div preview>
            <kln-image-compare>
              <img
                slot="before"
                src="https://primefaces.org/cdn/primeng/images/demo/nature/nature1.jpg"
                alt="Exame anterior — Jan/2025"
                style="width:100%;display:block"
              />
              <img
                slot="after"
                src="https://primefaces.org/cdn/primeng/images/demo/nature/nature2.jpg"
                alt="Exame atual — Jun/2025"
                style="width:100%;display:block"
              />
            </kln-image-compare>
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
export class ImageComparePageComponent {
  codeCompare = `<kln-image-compare>
  <img slot="before" src="exame-anterior.jpg" alt="Exame anterior — Jan/2025" style="width:100%" />
  <img slot="after" src="exame-atual.jpg" alt="Exame atual — Jun/2025" style="width:100%" />
</kln-image-compare>`;

  props: PropDef[] = [
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais.' },
    { name: 'slot before', type: 'ng-content', default: '—', description: 'Imagem da esquerda (antes).' },
    { name: 'slot after', type: 'ng-content', default: '—', description: 'Imagem da direita (depois).' },
  ];
}
