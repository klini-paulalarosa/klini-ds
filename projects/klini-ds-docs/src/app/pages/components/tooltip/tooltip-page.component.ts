import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonComponent } from '@klini-saude/ds';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-tooltip-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TooltipModule, ButtonComponent, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">Tooltip</h1>
        <span class="badge badge--version">pTooltip</span>
      </div>
      <p class="docs-page-description">
        Diretiva de tooltip do PrimeNG. Importada diretamente via <code class="font-mono">TooltipModule</code>.
        Adiciona um tooltip a qualquer elemento HTML ou componente Angular.
      </p>

      <div class="docs-section">
        <h2>Posições</h2>
        <p>Tooltip pode ser posicionado em cima, baixo, esquerda ou direita do elemento.</p>
        <app-component-preview [code]="codePositions">
          <div preview style="display:flex;gap:16px;flex-wrap:wrap;padding:32px;justify-content:center">
            <kln-button label="Top" pTooltip="Beneficiário titular" tooltipPosition="top" />
            <kln-button label="Bottom" pTooltip="CPF: 123.456.789-00" tooltipPosition="bottom" />
            <kln-button label="Left" pTooltip="Plano: Klini Start PJ" tooltipPosition="left" />
            <kln-button label="Right" pTooltip="ANS: 123456789" tooltipPosition="right" />
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Em ícones de ação</h2>
        <p>Tooltips em botões de ação de tabelas de autorizações.</p>
        <app-component-preview [code]="codeIcons">
          <div preview style="display:flex;gap:8px;padding:16px">
            <kln-button icon="pi pi-eye" pTooltip="Ver detalhes da guia" tooltipPosition="top" severity="secondary" />
            <kln-button icon="pi pi-check" pTooltip="Aprovar autorização" tooltipPosition="top" severity="secondary" />
            <kln-button icon="pi pi-times" pTooltip="Negar autorização" tooltipPosition="top" severity="danger" />
            <kln-button icon="pi pi-print" pTooltip="Imprimir guia" tooltipPosition="top" severity="secondary" />
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Como usar</h2>
        <p>Importe <code class="font-mono">TooltipModule</code> de <code class="font-mono">primeng/tooltip</code> e adicione a diretiva <code class="font-mono">pTooltip</code> ao elemento.</p>
        <app-component-preview [code]="codeImport">
          <div preview style="padding:8px">
            <p style="font-size:13px;color:var(--docs-text-muted);margin:0">Veja o código de exemplo.</p>
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Atributos da diretiva</h2>
        <app-props-table [props]="props" />
      </div>
    </div>
  `,
})
export class TooltipPageComponent {
  codePositions = `<!-- Importe TooltipModule de primeng/tooltip -->
<kln-button label="Top" pTooltip="Titular" tooltipPosition="top" />
<kln-button label="Bottom" pTooltip="CPF: 123.456.789-00" tooltipPosition="bottom" />
<kln-button label="Left" pTooltip="Plano Klini" tooltipPosition="left" />
<kln-button label="Right" pTooltip="ANS: 123456789" tooltipPosition="right" />`;

  codeIcons = `<kln-button icon="pi pi-eye" pTooltip="Ver detalhes" tooltipPosition="top" />
<kln-button icon="pi pi-check" pTooltip="Aprovar" tooltipPosition="top" />
<kln-button icon="pi pi-times" pTooltip="Negar" tooltipPosition="top" severity="danger" />`;

  codeImport = `import { TooltipModule } from 'primeng/tooltip';

@Component({
  imports: [TooltipModule],
  template: \`
    <button pTooltip="Texto do tooltip" tooltipPosition="top">
      Passe o mouse
    </button>
  \`,
})
export class MeuComponent {}`;

  props: PropDef[] = [
    { name: 'pTooltip', type: 'string', default: "''", description: 'Texto do tooltip.', required: true },
    { name: 'tooltipPosition', type: "'top' | 'bottom' | 'left' | 'right'", default: "'right'", description: 'Posição do tooltip.' },
    { name: 'tooltipEvent', type: "'hover' | 'focus'", default: "'hover'", description: 'Evento que dispara o tooltip.' },
    { name: 'tooltipStyleClass', type: 'string', default: "''", description: 'Classes CSS adicionais para o tooltip.' },
    { name: 'showDelay', type: 'number', default: '0', description: 'Atraso em ms para exibir.' },
    { name: 'hideDelay', type: 'number', default: '0', description: 'Atraso em ms para ocultar.' },
  ];
}
