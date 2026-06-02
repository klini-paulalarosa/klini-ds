import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnVirtualScrollerComponent } from '@klini-saude/ds';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-virtual-scroller-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnVirtualScrollerComponent, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">VirtualScroller</h1>
        <span class="badge badge--version">kln-virtual-scroller</span>
      </div>
      <p class="docs-page-description">
        Scroll virtual para renderização eficiente de listas longas. Wrapper sobre <code class="font-mono">p-virtualscroller</code> do PrimeNG.
        Renderiza apenas os itens visíveis, ideal para listas de 1.000+ prestadores.
      </p>

      <div class="docs-section">
        <h2>Lista de 500 prestadores</h2>
        <p>Renderiza apenas os itens visíveis para máxima performance.</p>
        <app-component-preview [code]="codePrestadores">
          <div preview>
            <kln-virtual-scroller [items]="prestadores" [itemSize]="60" scrollHeight="300px">
              <ng-template pTemplate="item" let-item>
                <div style="padding:12px;border-bottom:1px solid var(--docs-border);display:flex;justify-content:space-between;align-items:center">
                  <div>
                    <div style="font-size:13px;font-weight:600;color:var(--docs-text)">{{ item.nome }}</div>
                    <div style="font-size:11px;color:var(--docs-text-muted)">{{ item.especialidade }} — {{ item.cidade }}</div>
                  </div>
                  <span style="font-size:11px;color:var(--docs-text-muted)">#{{ item.id }}</span>
                </div>
              </ng-template>
            </kln-virtual-scroller>
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
export class VirtualScrollerPageComponent {
  prestadores = Array.from({ length: 500 }, (_, i) => ({
    id: i + 1,
    nome: `Clínica Klini ${i + 1}`,
    especialidade: ['Cardiologia', 'Ortopedia', 'Clínica Geral', 'Neurologia', 'Pediatria'][i % 5],
    cidade: ['São Paulo/SP', 'Santo André/SP', 'São Bernardo/SP', 'Guarulhos/SP'][i % 4],
  }));

  codePrestadores = `<kln-virtual-scroller [items]="prestadores" [itemSize]="60" scrollHeight="300px">
  <ng-template pTemplate="item" let-item>
    <div style="padding:12px;border-bottom:1px solid var(--docs-border)">
      <div>{{ item.nome }}</div>
      <div>{{ item.especialidade }} — {{ item.cidade }}</div>
    </div>
  </ng-template>
</kln-virtual-scroller>`;

  props: PropDef[] = [
    { name: 'items', type: 'unknown[]', default: '[]', description: 'Array completo de itens.', required: true },
    { name: 'itemSize', type: 'number', default: '50', description: 'Altura em pixels de cada item.' },
    { name: 'scrollHeight', type: 'string', default: "'400px'", description: 'Altura da área de scroll.' },
    { name: 'lazy', type: 'boolean', default: 'false', description: 'Carregamento lazy com evento onLazyLoad.' },
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais.' },
  ];
}
