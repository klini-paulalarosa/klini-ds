import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnSplitterComponent } from '@klini-saude/ds';
import { SplitterModule } from 'primeng/splitter';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-splitter-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnSplitterComponent, SplitterModule, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">Splitter</h1>
        <span class="badge badge--version">kln-splitter</span>
      </div>
      <p class="docs-page-description">
        Layout dividido com painéis redimensionáveis. Wrapper sobre <code class="font-mono">p-splitter</code> do PrimeNG.
        Usado para layouts lista/detalhe nas telas de autorizações e prestadores.
        Para tamanhos iniciais dos painéis, use <code class="font-mono">p-splitter</code> diretamente com <code class="font-mono">[panelSizes]</code>.
      </p>

      <div class="docs-section">
        <h2>Lista e Detalhe</h2>
        <p>Layout dividido com p-splitter para painéis com tamanhos customizados.</p>
        <app-component-preview [code]="codeListDetail">
          <div preview>
            <p-splitter [panelSizes]="[30, 70]" layout="horizontal">
              <ng-template pTemplate>
                <div style="padding:16px;height:200px;overflow-y:auto">
                  <p style="font-size:12px;font-weight:600;color:var(--docs-text-muted);margin:0 0 8px;text-transform:uppercase">Guias</p>
                  @for (guia of guias; track guia.id) {
                    <div style="padding:8px;border-radius:4px;cursor:pointer;font-size:13px;border-bottom:1px solid var(--docs-border)">
                      {{ guia.id }} — {{ guia.tipo }}
                    </div>
                  }
                </div>
              </ng-template>
              <ng-template pTemplate>
                <div style="padding:16px">
                  <p style="font-size:12px;font-weight:600;color:var(--docs-text-muted);margin:0 0 8px;text-transform:uppercase">Detalhes da guia</p>
                  <p style="font-size:14px;font-weight:600;color:var(--docs-text)">Guia 2024-00123</p>
                  <p style="font-size:13px;color:var(--docs-text-muted)">Beneficiário: Carlos Eduardo Silva</p>
                  <p style="font-size:13px;color:var(--docs-text-muted)">Procedimento: Consulta Cardiologia</p>
                </div>
              </ng-template>
            </p-splitter>
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>kln-splitter (simples)</h2>
        <app-component-preview [code]="codeSimple">
          <div preview>
            <kln-splitter layout="horizontal">
            </kln-splitter>
            <p style="font-size:13px;color:var(--docs-text-muted);margin-top:8px">
              Use kln-splitter para layout simples. Para panelSizes, use p-splitter diretamente.
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
export class SplitterPageComponent {
  guias = [
    { id: '2024-00123', tipo: 'Consulta' },
    { id: '2024-00124', tipo: 'Ressonância' },
    { id: '2024-00125', tipo: 'Exame de sangue' },
  ];

  codeListDetail = `<!-- Para panelSizes, use p-splitter diretamente -->
<p-splitter [panelSizes]="[30, 70]" layout="horizontal">
  <ng-template pTemplate>
    <!-- painel esquerdo: lista -->
  </ng-template>
  <ng-template pTemplate>
    <!-- painel direito: detalhe -->
  </ng-template>
</p-splitter>`;

  codeSimple = `<!-- kln-splitter para layout simples -->
<kln-splitter layout="horizontal" />`;

  props: PropDef[] = [
    { name: 'layout', type: "'horizontal' | 'vertical'", default: "'horizontal'", description: 'Orientação da divisão.' },
    { name: 'gutterSize', type: 'number', default: '4', description: 'Tamanho em px do separador arrastável.' },
    { name: 'stateKey', type: 'string', default: "''", description: 'Chave para persistir estado do splitter.' },
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais.' },
  ];
}
