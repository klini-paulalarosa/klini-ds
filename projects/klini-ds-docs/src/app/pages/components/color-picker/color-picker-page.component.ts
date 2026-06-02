import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnColorPickerComponent } from '@klini-saude/ds';
import { FormsModule } from '@angular/forms';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-color-picker-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnColorPickerComponent, FormsModule, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">ColorPicker</h1>
        <span class="badge badge--version">kln-color-picker</span>
      </div>
      <p class="docs-page-description">
        Seletor de cor com painel HSB. Wrapper sobre <code class="font-mono">p-colorpicker</code> do PrimeNG.
        Usado para configuração de categorias visuais e temas personalizados.
      </p>

      <div class="docs-section">
        <h2>Cor de categoria</h2>
        <p>Selecione a cor para identificar visualmente uma categoria de procedimento.</p>
        <app-component-preview [code]="codeBasic">
          <div preview style="display:flex;align-items:center;gap:16px;padding:16px">
            <kln-color-picker [(ngModel)]="corCategoria" />
            <div style="display:flex;flex-direction:column;gap:4px">
              <span style="font-size:14px;color:var(--docs-text)">Cor da categoria</span>
              <div style="display:flex;align-items:center;gap:8px">
                <div [style.background]="'#' + corCategoria" style="width:24px;height:24px;border-radius:4px;border:1px solid var(--docs-border)"></div>
                <span style="font-size:13px;color:var(--docs-text-muted);font-family:monospace">#{{ corCategoria }}</span>
              </div>
            </div>
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Inline</h2>
        <app-component-preview [code]="codeInline">
          <div preview style="padding:16px">
            <kln-color-picker [(ngModel)]="corInline" [inline]="true" />
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
export class ColorPickerPageComponent {
  corCategoria = '259591';
  corInline = '6AA7AE';

  codeBasic = `<kln-color-picker [(ngModel)]="corCategoria" />`;

  codeInline = `<kln-color-picker [(ngModel)]="corInline" [inline]="true" />`;

  props: PropDef[] = [
    { name: 'value', type: 'string | null', default: 'null', description: 'Cor selecionada (ngModel).' },
    { name: 'format', type: "'hex' | 'rgb' | 'hsb'", default: "'hex'", description: 'Formato de saída do valor.' },
    { name: 'inline', type: 'boolean', default: 'false', description: 'Exibe o picker inline sem popup.' },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Desabilita o componente.' },
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais.' },
  ];
}
