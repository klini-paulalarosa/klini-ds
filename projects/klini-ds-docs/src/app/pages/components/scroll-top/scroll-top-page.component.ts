import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnScrollTopComponent } from '@klini-saude/ds';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-scroll-top-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnScrollTopComponent, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">ScrollTop</h1>
        <span class="badge badge--version">kln-scroll-top</span>
      </div>
      <p class="docs-page-description">
        Botão flutuante para retornar ao topo da página. Wrapper sobre <code class="font-mono">p-scrolltop</code> do PrimeNG.
        Aparece após o usuário rolar além do threshold definido.
      </p>

      <div class="docs-section">
        <h2>Para a janela</h2>
        <p>Botão global que monitora o scroll da janela. Role a página para ver o botão aparecer.</p>
        <app-component-preview [code]="codeWindow">
          <div preview style="padding:16px">
            <kln-scroll-top target="window" [threshold]="200" />
            <p style="font-size:13px;color:var(--docs-text-muted);margin:0">
              O botão aparece após rolar 200px. Adicionado ao portal do beneficiário para facilitar
              navegação em listas longas de prestadores e histórico de consultas.
            </p>
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Para um container</h2>
        <app-component-preview [code]="codeContainer">
          <div preview style="padding:16px">
            <p style="font-size:13px;color:var(--docs-text-muted);margin:0">
              Use <code class="font-mono">target="parent"</code> para scroll dentro de um container específico.
            </p>
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
export class ScrollTopPageComponent {
  codeWindow = `<kln-scroll-top target="window" [threshold]="200" />`;

  codeContainer = `<div style="height:300px;overflow:auto;position:relative">
  <kln-scroll-top target="parent" [threshold]="150" />
  <!-- conteúdo longo -->
</div>`;

  props: PropDef[] = [
    { name: 'target', type: "'window' | 'parent'", default: "'window'", description: 'Elemento monitorado para scroll.' },
    { name: 'threshold', type: 'number', default: '400', description: 'Pixels de scroll para o botão aparecer.' },
    { name: 'icon', type: 'string', default: "'pi pi-arrow-up'", description: 'Ícone do botão.' },
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais.' },
  ];
}
