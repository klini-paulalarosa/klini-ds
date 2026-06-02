import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '@klini-saude/ds';
import { PopoverModule } from 'primeng/popover';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-popover-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonComponent, PopoverModule, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">Popover</h1>
        <span class="badge badge--version">kln-popover</span>
      </div>
      <p class="docs-page-description">
        Sobreposição flutuante com conteúdo rico. Wrapper sobre <code class="font-mono">p-popover</code> do PrimeNG.
        Usado para exibir detalhes do plano ou informações adicionais em contexto.
      </p>

      <div class="docs-section">
        <h2>Detalhes do plano</h2>
        <p>Clique no botão para ver os detalhes do plano em um popover. O método <code class="font-mono">show(event)</code> é
          chamado diretamente na referência do componente PrimeNG interno.
        </p>
        <app-component-preview [code]="code1">
          <div preview style="padding:24px">
            <kln-button label="Detalhes do plano" icon="pi pi-info-circle" (onClick)="op.show($event)" />
            <p-popover #op>
              <div style="padding:8px;min-width:240px">
                <p style="margin:0 0 4px;font-weight:700;color:var(--docs-text)">Klini Start PJ</p>
                <p style="margin:0 0 4px;font-size:13px;color:var(--docs-text-muted)">ANS: 123456789</p>
                <hr style="border:none;border-top:1px solid var(--docs-border);margin:8px 0">
                <div style="display:flex;justify-content:space-between;font-size:13px">
                  <span style="color:var(--docs-text-muted)">Mensalidade</span>
                  <strong style="color:var(--docs-text)">R$ 289,90</strong>
                </div>
                <div style="display:flex;justify-content:space-between;font-size:13px;margin-top:4px">
                  <span style="color:var(--docs-text-muted)">Coparticipação</span>
                  <strong style="color:var(--docs-text)">R$ 45,00/consulta</strong>
                </div>
              </div>
            </p-popover>
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Com kln-popover</h2>
        <p>Use <code class="font-mono">kln-popover</code> para conteúdo simples sem necessidade de chamar <code class="font-mono">show()</code>.
          Para controle programático, use <code class="font-mono">p-popover</code> diretamente com template variable.</p>
        <app-component-preview [code]="code2">
          <div preview style="padding:8px">
            <p style="font-size:13px;color:var(--docs-text-muted);margin:0">Veja o código de exemplo.</p>
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Props (kln-popover)</h2>
        <app-props-table [props]="props" />
      </div>
    </div>
  `,
})
export class PopoverPageComponent {
  code1 = `<!-- Use p-popover diretamente para controle programático -->
<kln-button label="Detalhes do plano" (onClick)="op.show($event)" />
<p-popover #op>
  <div>Conteúdo do popover...</div>
</p-popover>`;

  code2 = `<!-- kln-popover: wrapper sem método show() exposto -->
<kln-popover styleClass="meu-popover">
  <div>Conteúdo estático</div>
</kln-popover>`;

  props: PropDef[] = [
    { name: 'dismissable', type: 'boolean', default: 'true', description: 'Fecha o popover ao clicar fora.' },
    { name: 'appendTo', type: 'string | HTMLElement', default: "'body'", description: 'Elemento ao qual o popover é anexado.' },
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais.' },
  ];
}
