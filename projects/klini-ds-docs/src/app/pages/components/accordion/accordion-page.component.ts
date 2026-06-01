import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnAccordionComponent, ButtonComponent } from '@klini-saude/ds';
import { AccordionPanel, AccordionHeader, AccordionContent } from 'primeng/accordion';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-accordion-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnAccordionComponent, AccordionPanel, AccordionHeader, AccordionContent, ButtonComponent, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">Accordion</h1>
        <span class="badge badge--version">kln-accordion</span>
      </div>
      <p class="docs-page-description">
        Painel expansível para organizar informações em seções colapsáveis.
        Ideal para exibir dados de planos, carências e coberturas sem sobrecarregar a tela.
        Wrapper sobre <code class="font-mono">p-accordion</code> do PrimeNG.
      </p>

      <div class="docs-section">
        <h2>Básico</h2>
        <p>Painel simples com um único item expansível.</p>
        <app-component-preview [code]="basicCode">
          <div preview>
            <kln-accordion>
              <p-accordion-panel value="dados">
                <p-accordion-header>Dados do Plano</p-accordion-header>
                <p-accordion-content>
                  <p style="margin:0">Plano: Klini Start PJ · Vigência: Jan/2025 · Titularidade: Paula Rosa</p>
                </p-accordion-content>
              </p-accordion-panel>
            </kln-accordion>
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Múltiplos ativos</h2>
        <p>Com <code class="font-mono">[multiple]="true"</code>, vários painéis podem estar abertos simultaneamente.</p>
        <app-component-preview [code]="multipleCode">
          <div preview>
            <kln-accordion [multiple]="true">
              <p-accordion-panel value="carencias">
                <p-accordion-header>Carências</p-accordion-header>
                <p-accordion-content>
                  <p style="margin:0">Consultas: 90 dias · Internações: 180 dias · Partos: 300 dias</p>
                </p-accordion-content>
              </p-accordion-panel>
              <p-accordion-panel value="coparticipacao">
                <p-accordion-header>Coparticipação</p-accordion-header>
                <p-accordion-content>
                  <p style="margin:0">Consulta médica: R$ 15,00 · Exame simples: R$ 10,00 · Internação: 20%</p>
                </p-accordion-content>
              </p-accordion-panel>
              <p-accordion-panel value="historico">
                <p-accordion-header>Histórico de Atendimentos</p-accordion-header>
                <p-accordion-content>
                  <p style="margin:0">Último atendimento: 15/05/2025 — Consulta Cardiologia · Hospital São Lucas</p>
                </p-accordion-content>
              </p-accordion-panel>
            </kln-accordion>
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Controlado</h2>
        <p>Controle programático do painel ativo via <code class="font-mono">[(activeValue)]</code>.</p>
        <app-component-preview [code]="controlledCode">
          <div preview>
            <div style="display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap">
              <kln-button label="Abrir Plano" size="small" severity="secondary" (clicked)="activePanel = 'plano'" />
              <kln-button label="Abrir Cobertura" size="small" severity="secondary" (clicked)="activePanel = 'cobertura'" />
              <kln-button label="Fechar todos" size="small" variant="outlined" (clicked)="activePanel = ''" />
            </div>
            <kln-accordion [(activeValue)]="activePanel">
              <p-accordion-panel value="plano">
                <p-accordion-header>Informações do Plano</p-accordion-header>
                <p-accordion-content>
                  <p style="margin:0">Klini Start PJ · ANS Nº 123456 · Abrangência: Municipal</p>
                </p-accordion-content>
              </p-accordion-panel>
              <p-accordion-panel value="cobertura">
                <p-accordion-header>Cobertura</p-accordion-header>
                <p-accordion-content>
                  <p style="margin:0">Consultas ilimitadas · Exames cobertos conforme rol ANS · Internação em acomodação coletiva</p>
                </p-accordion-content>
              </p-accordion-panel>
            </kln-accordion>
            <p style="margin-top:8px;font-size:0.85rem;color:#666">Painel ativo: <code>{{ activePanel || '(nenhum)' }}</code></p>
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
export class AccordionPageComponent {
  activePanel = '';

  basicCode = `<kln-accordion>
  <p-accordion-panel value="dados">
    <p-accordion-header>Dados do Plano</p-accordion-header>
    <p-accordion-content>
      <p>Plano: Klini Start PJ · Vigência: Jan/2025</p>
    </p-accordion-content>
  </p-accordion-panel>
</kln-accordion>`;

  multipleCode = `<kln-accordion [multiple]="true">
  <p-accordion-panel value="carencias">
    <p-accordion-header>Carências</p-accordion-header>
    <p-accordion-content><p>Consultas: 90 dias · Internações: 180 dias</p></p-accordion-content>
  </p-accordion-panel>
  <p-accordion-panel value="coparticipacao">
    <p-accordion-header>Coparticipação</p-accordion-header>
    <p-accordion-content><p>Consulta médica: R$ 15,00 · Exame simples: R$ 10,00</p></p-accordion-content>
  </p-accordion-panel>
</kln-accordion>`;

  controlledCode = `<!-- Template -->
<kln-accordion [(activeValue)]="activePanel">
  <p-accordion-panel value="plano">
    <p-accordion-header>Informações do Plano</p-accordion-header>
    <p-accordion-content><p>Klini Start PJ · ANS Nº 123456</p></p-accordion-content>
  </p-accordion-panel>
</kln-accordion>

// Classe
activePanel = '';`;

  props: PropDef[] = [
    { name: 'multiple', type: 'boolean', default: 'false', description: 'Permite múltiplos painéis abertos simultaneamente.' },
    { name: 'activeValue', type: 'string | number | string[] | number[]', default: "''", description: 'Valor do painel ativo. Suporta two-way binding com [(activeValue)].' },
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais no elemento raiz.' },
    { name: '(activeValueChange)', type: 'EventEmitter', default: '—', description: 'Emite o novo valor quando o usuário expande/colapsa um painel.' },
  ];
}