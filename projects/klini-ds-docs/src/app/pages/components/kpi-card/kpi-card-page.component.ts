import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KpiCardComponent } from '@klini-saude/ds';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-kpi-card-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KpiCardComponent, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">KPI Card</h1>
        <span class="badge badge--version">kln-kpi-card</span>
      </div>
      <p class="docs-page-description">
        Card de indicador-chave de desempenho com valor principal, tendencia e descricao.
        Usa <code class="font-mono">p-card</code> como base com estilo KlnPrime. Ideal para
        dashboards de sinistralidade, adesao, NPS e outros KPIs de saude.
      </p>

      <!-- Basico -->
      <div class="docs-section">
        <h2>Basico</h2>
        <p>Apenas label e valor — minimo necessario para exibir um KPI.</p>
        <app-component-preview [code]="basicCode">
          <div preview style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:16px;width:100%">
            <kln-kpi-card label="Beneficiarios ativos" value="1.284" />
            <kln-kpi-card label="Consultas no mes"     value="342" />
            <kln-kpi-card label="Taxa de sinistro"     value="68,4%" />
          </div>
        </app-component-preview>
      </div>

      <!-- Com tendencia -->
      <div class="docs-section">
        <h2>Com tendencia</h2>
        <p>Use <code class="font-mono">trend</code> e <code class="font-mono">trendLabel</code> para indicar variacao em relacao ao periodo anterior.</p>
        <app-component-preview [code]="trendCode">
          <div preview style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:16px;width:100%">
            <kln-kpi-card
              label="NPS Beneficiarios"
              value="78"
              trend="up"
              trendLabel="+5 pts vs mes anterior"
              description="Meta: 80 pontos"
            />
            <kln-kpi-card
              label="Sinistralidade"
              value="72,3%"
              trend="down"
              trendLabel="-3,1% vs mes anterior"
              description="Limite contratual: 85%"
            />
            <kln-kpi-card
              label="Cobertura de rede"
              value="94,2%"
              trend="neutral"
              trendLabel="Estavel"
              description="Credenciados ativos"
            />
          </div>
        </app-component-preview>
      </div>

      <!-- Com icone -->
      <div class="docs-section">
        <h2>Com icone</h2>
        <p>Use <code class="font-mono">icon</code> com qualquer classe <code class="font-mono">pi-*</code> para identificar visualmente o KPI.</p>
        <app-component-preview [code]="iconCode">
          <div preview style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:16px;width:100%">
            <kln-kpi-card label="Consultas agendadas" value="127"    icon="pi-calendar"   trend="up"   trendLabel="+12 esta semana" />
            <kln-kpi-card label="Internacoes"         value="8"      icon="pi-heart"       trend="down" trendLabel="-3 vs semana anterior" />
            <kln-kpi-card label="Autorizacoes"        value="1.034"  icon="pi-check-circle" trend="up"  trendLabel="98,4% aprovadas" />
            <kln-kpi-card label="Faturas em aberto"   value="R$ 42k" icon="pi-dollar"      trend="neutral" trendLabel="Prazo: 15 dias" />
          </div>
        </app-component-preview>
      </div>

      <!-- Props -->
      <div class="docs-section">
        <h2>Props</h2>
        <app-props-table [props]="props" />
      </div>
    </div>
  `,
})
export class KpiCardPageComponent {
  basicCode = `<kln-kpi-card label="Beneficiarios ativos" value="1.284" />
<kln-kpi-card label="Consultas no mes"     value="342" />
<kln-kpi-card label="Taxa de sinistro"     value="68,4%" />`;

  trendCode = `<kln-kpi-card
  label="NPS Beneficiarios"
  value="78"
  trend="up"
  trendLabel="+5 pts vs mes anterior"
  description="Meta: 80 pontos"
/>

<kln-kpi-card
  label="Sinistralidade"
  value="72,3%"
  trend="down"
  trendLabel="-3,1% vs mes anterior"
  description="Limite contratual: 85%"
/>`;

  iconCode = `<kln-kpi-card
  label="Consultas agendadas"
  value="127"
  icon="pi-calendar"
  trend="up"
  trendLabel="+12 esta semana"
/>`;

  props: PropDef[] = [
    { name: 'label',       type: 'string',                     default: '—',         description: 'Label do KPI (obrigatorio). Ex: "Sinistralidade".' },
    { name: 'value',       type: 'string | number',            default: '—',         description: 'Valor principal exibido em destaque (obrigatorio).' },
    { name: 'description', type: 'string',                     default: "''",        description: 'Texto secundario no rodape do card.' },
    { name: 'icon',        type: 'string',                     default: "''",        description: 'Classe do icone PrimeIcons sem o prefixo "pi " (ex: "pi-calendar").' },
    { name: 'trend',       type: "'up' | 'down' | 'neutral'",  default: 'undefined', description: 'Direcao da tendencia — define a cor (verde/vermelho/cinza) do indicador.' },
    { name: 'trendLabel',  type: 'string',                     default: "''",        description: 'Texto da tendencia ao lado do icone de seta.' },
  ];
}
