import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardComponent, KpiCardComponent } from '@klini-saude/ds';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-card-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CardComponent, KpiCardComponent, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">Card & KPI Card</h1>
        <span class="badge badge--version">kln-card</span>
        <span class="badge badge--version">kln-kpi-card</span>
      </div>
      <p class="docs-page-description">
        <code class="font-mono">kln-card</code> é um container de conteúdo com header, body e footer via ng-content.
        <code class="font-mono">kln-kpi-card</code> é uma variante especializada para métricas de negócio,
        com suporte a valor, label, trend (variação) e ícone.
      </p>

      <!-- Card básico -->
      <div class="docs-section">
        <h2>Card</h2>
        <app-component-preview [code]="cardCode">
          <div preview style="display:flex;gap:16px;flex-wrap:wrap;width:100%">
            <kln-card
              header="Plano do beneficiário"
              subheader="Klini Start PJ"
              style="width:280px"
            >
              <div style="padding:16px;color:var(--docs-text-muted)">
                <p>Vigência: 01/03/2023 — 28/02/2024</p>
                <p>Cobertura: Nacional</p>
                <p>Carência: Cumprida</p>
              </div>
            </kln-card>

            <kln-card
              header="Próxima consulta"
              style="width:280px"
            >
              <div style="padding:16px">
                <p style="font-size:18px;font-weight:700;color:var(--docs-accent)">15 Jun 2026</p>
                <p style="color:var(--docs-text-muted)">14h30 — Dr. Carlos Mendes</p>
                <p style="color:var(--docs-text-muted)">Cardiologia • Klini Saúde SP</p>
              </div>
            </kln-card>
          </div>
        </app-component-preview>
      </div>

      <!-- KPI Card -->
      <div class="docs-section">
        <h2>KPI Card</h2>
        <p>Componente para exibir indicadores de negócio com valor, label e variação (trend).</p>
        <app-component-preview [code]="kpiCode">
          <div preview style="display:flex;gap:16px;flex-wrap:wrap">
            <kln-kpi-card
              label="Sinistralidade"
              value="72,4%"
              trend="up"
              trendLabel="3,2%"
              icon="pi pi-chart-line"
              style="width:200px"
            />
            <kln-kpi-card
              label="Consultas/mês"
              value="456"
              trend="up"
              trendLabel="12,1%"
              icon="pi pi-calendar"
              style="width:200px"
            />
            <kln-kpi-card
              label="Custo médio"
              value="R$ 1.960"
              trend="down"
              trendLabel="4,5%"
              icon="pi pi-dollar"
              style="width:200px"
            />
            <kln-kpi-card
              label="Beneficiários"
              value="5.140"
              trend="neutral"
              trendLabel="0%"
              icon="pi pi-users"
              style="width:200px"
            />
          </div>
        </app-component-preview>
      </div>

      <!-- KPI Card trend variants -->
      <div class="docs-section">
        <h2>KPI Card — trends</h2>
        <p>O prop <code class="font-mono">trend</code> aceita <code class="font-mono">'up'</code>, <code class="font-mono">'down'</code> e <code class="font-mono">'neutral'</code>. A cor muda conforme o trend.</p>
        <app-component-preview [code]="kpiTrendCode">
          <div preview style="display:flex;gap:16px;flex-wrap:wrap">
            <kln-kpi-card label="Subiu" value="87%" trend="up" trendLabel="5,3%" style="width:180px" />
            <kln-kpi-card label="Caiu" value="61%" trend="down" trendLabel="2,1%" style="width:180px" />
            <kln-kpi-card label="Estável" value="74%" trend="neutral" trendLabel="0%" style="width:180px" />
          </div>
        </app-component-preview>
      </div>

      <!-- Props Card -->
      <div class="docs-section">
        <h2>Props — kln-card</h2>
        <app-props-table [props]="cardProps" />
      </div>

      <!-- Props KPI -->
      <div class="docs-section">
        <h2>Props — kln-kpi-card</h2>
        <app-props-table [props]="kpiProps" />
      </div>
    </div>
  `,
})
export class CardPageComponent {
  cardCode = `import { CardComponent } from '@klini-saude/ds';

<kln-card header="Plano do beneficiário" subheader="Klini Start PJ">
  <div style="padding:16px">
    <p>Vigência: 01/03/2023</p>
    <p>Cobertura: Nacional</p>
  </div>
</kln-card>`;

  kpiCode = `import { KpiCardComponent } from '@klini-saude/ds';

<kln-kpi-card
  label="Sinistralidade"
  value="72,4%"
  trend="up"
  trendLabel="3,2%"
  icon="pi pi-chart-line"
/>`;

  kpiTrendCode = `<!-- trend 'up'     → ícone seta acima, cor verde -->
<!-- trend 'down'   → ícone seta abaixo, cor vermelha -->
<!-- trend 'neutral'→ ícone neutro, cor cinza -->

<kln-kpi-card label="Subiu"   value="87%" trend="up"      trendLabel="5,3%" />
<kln-kpi-card label="Caiu"    value="61%" trend="down"    trendLabel="2,1%" />
<kln-kpi-card label="Estável" value="74%" trend="neutral" trendLabel="0%"   />`;

  cardProps: PropDef[] = [
    { name: 'header', type: 'string', default: "''", description: 'Título do card.' },
    { name: 'subheader', type: 'string', default: "''", description: 'Subtítulo abaixo do header.' },
    { name: 'footer', type: 'string', default: "''", description: 'Texto do footer (alternativa ao slot ng-template[pTemplate="footer"]).' },
  ];

  kpiProps: PropDef[] = [
    { name: 'label', type: 'string', default: "''", description: 'Nome do indicador.', required: true },
    { name: 'value', type: 'string', default: "''", description: 'Valor principal exibido em destaque.', required: true },
    { name: 'trend', type: 'KpiTrend | undefined', default: 'undefined', description: "Direção da variação: 'up' | 'down' | 'neutral'. Omitir oculta o indicador de trend." },
    { name: 'trendLabel', type: 'string', default: "''", description: 'Label da variação exibido ao lado do ícone (ex: "3,2%", "+48 und").' },
    { name: 'icon', type: 'string', default: "''", description: 'Classe do ícone PrimeIcons decorativo.' },
    { name: 'description', type: 'string', default: "''", description: 'Texto auxiliar abaixo do valor (ex: "vs. mês anterior").' },
  ];
}
