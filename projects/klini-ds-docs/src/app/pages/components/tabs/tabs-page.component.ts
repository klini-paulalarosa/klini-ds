import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnTabsComponent, ButtonComponent } from '@klini-saude/ds';
import { Tab, TabList, TabPanels, TabPanel } from 'primeng/tabs';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-tabs-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnTabsComponent, Tab, TabList, TabPanels, TabPanel, ButtonComponent, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">Tabs</h1>
        <span class="badge badge--version">kln-tabs</span>
      </div>
      <p class="docs-page-description">
        Navegação por abas para organizar conteúdo relacionado em seções separadas.
        Ideal para dashboards de beneficiários, histórico de consultas e dados de plano.
        Wrapper sobre <code class="font-mono">p-tabs</code> do PrimeNG 18.
      </p>

      <div class="docs-section">
        <h2>Básico</h2>
        <p>Três abas com conteúdo de saúde. Use os elementos PrimeNG como filhos diretos.</p>
        <app-component-preview [code]="basicCode">
          <div preview>
            <kln-tabs>
              <p-tablist>
                <p-tab value="0">Consultas</p-tab>
                <p-tab value="1">Atendimentos</p-tab>
                <p-tab value="2">Carências</p-tab>
              </p-tablist>
              <p-tabpanels>
                <p-tabpanel value="0">
                  <p style="margin:0">3 consultas agendadas · Próxima: 20/06/2025 — Cardiologia com Dr. Marcos Oliveira</p>
                </p-tabpanel>
                <p-tabpanel value="1">
                  <p style="margin:0">12 atendimentos no último trimestre · Último: 05/05/2025 — Clínico Geral</p>
                </p-tabpanel>
                <p-tabpanel value="2">
                  <p style="margin:0">Consultas: 0 dias restantes · Internação: 145 dias · Parto: 260 dias</p>
                </p-tabpanel>
              </p-tabpanels>
            </kln-tabs>
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Aba ativa controlada</h2>
        <p>Use <code class="font-mono">[(activeTab)]</code> para controlar qual aba está ativa programaticamente.</p>
        <app-component-preview [code]="controlledCode">
          <div preview>
            <div style="display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap">
              <kln-button label="Ir para Plano" size="small" severity="secondary" (clicked)="activeTab = '0'" />
              <kln-button label="Ir para Beneficiários" size="small" severity="secondary" (clicked)="activeTab = '1'" />
              <kln-button label="Ir para Documentos" size="small" severity="secondary" (clicked)="activeTab = '2'" />
            </div>
            <kln-tabs [(activeTab)]="activeTab">
              <p-tablist>
                <p-tab value="0">Plano</p-tab>
                <p-tab value="1">Beneficiários</p-tab>
                <p-tab value="2">Documentos</p-tab>
              </p-tablist>
              <p-tabpanels>
                <p-tabpanel value="0">
                  <p style="margin:0">Klini Start PJ · ANS Nº 123456 · Vigência: Jan/2025 a Dez/2025</p>
                </p-tabpanel>
                <p-tabpanel value="1">
                  <p style="margin:0">Titular: Paula Rosa · 2 dependentes: João Rosa, Maria Rosa</p>
                </p-tabpanel>
                <p-tabpanel value="2">
                  <p style="margin:0">Carteirinha digital, Apólice, Rol de procedimentos ANS 2025</p>
                </p-tabpanel>
              </p-tabpanels>
            </kln-tabs>
            <p style="margin-top:8px;font-size:0.85rem;color:#666">Aba ativa: <code>{{ activeTab }}</code></p>
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
export class TabsPageComponent {
  activeTab = '0';

  basicCode = `<kln-tabs>
  <p-tablist>
    <p-tab value="0">Consultas</p-tab>
    <p-tab value="1">Atendimentos</p-tab>
    <p-tab value="2">Carências</p-tab>
  </p-tablist>
  <p-tabpanels>
    <p-tabpanel value="0">Conteúdo das consultas</p-tabpanel>
    <p-tabpanel value="1">Conteúdo dos atendimentos</p-tabpanel>
    <p-tabpanel value="2">Conteúdo das carências</p-tabpanel>
  </p-tabpanels>
</kln-tabs>`;

  controlledCode = `<!-- Template -->
<kln-tabs [(activeTab)]="activeTab">
  <p-tablist>
    <p-tab value="0">Plano</p-tab>
    <p-tab value="1">Beneficiários</p-tab>
    <p-tab value="2">Documentos</p-tab>
  </p-tablist>
  <p-tabpanels>
    <p-tabpanel value="0">Dados do plano</p-tabpanel>
    <p-tabpanel value="1">Lista de beneficiários</p-tabpanel>
    <p-tabpanel value="2">Documentos do plano</p-tabpanel>
  </p-tabpanels>
</kln-tabs>

// Classe
activeTab = '0';`;

  props: PropDef[] = [
    { name: 'activeTab', type: 'string | number', default: '0', description: 'Valor da aba ativa. Suporta two-way binding com [(activeTab)].' },
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais no elemento raiz.' },
    { name: '(activeTabChange)', type: 'EventEmitter<string | number>', default: '—', description: 'Emite o valor da nova aba quando o usuário navega.' },
  ];
}
