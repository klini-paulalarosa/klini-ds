import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { KlnChartComponent, KlnChartData } from '@klini-saude/ds';
import { CodeBlockComponent } from '../../shared/code-block/code-block.component';

type ActiveCodeKey = string | null;

@Component({
  selector: 'app-charts',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnChartComponent, CodeBlockComponent],
  styles: [`
    .chart-code-toggle {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      font-size: 12px;
      color: var(--docs-text-muted);
      background: transparent;
      border: 1px solid var(--docs-border);
      border-radius: 4px;
      padding: 4px 8px;
      cursor: pointer;
      transition: all 0.15s;
      font-family: inherit;
      margin-top: 12px;

      &:hover {
        color: var(--docs-text);
        background: var(--docs-code-bg);
      }
    }
  `],
  template: `
    <div>
      <div style="margin-bottom:32px">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px">
          <h1 class="docs-page-title" style="margin-bottom:0">Charts & Analytics</h1>
          <span class="badge badge--accent">21 presets</span>
        </div>
        <p class="docs-page-description">
          Sistema completo de visualização de dados para o ecossistema Klini Saúde.
          O componente <code class="font-mono">kln-chart</code> recebe <code class="font-mono">type</code>,
          <code class="font-mono">preset</code> e <code class="font-mono">data</code>.
          Use <code class="font-mono">KlnChartData</code> para criar os dados sem precisar conhecer Chart.js.
        </p>
      </div>

      <!-- Quick setup -->
      <div class="docs-section">
        <h2>Setup rápido</h2>
        <app-code-block language="typescript" [code]="setupCode" />
      </div>

      <!-- ── Bar Charts ──────────────────────────────────────────────────── -->
      <h2 class="charts-section-title">Bar Charts</h2>
      <p class="charts-section-desc">
        Gráficos de barras para comparação entre categorias ou períodos.
        Variantes: vertical, horizontal, empilhado, agrupado, 100% e negativo.
      </p>
      <div class="chart-grid">

        <!-- bar -->
        <div class="chart-card">
          <div class="chart-card__header">
            <h3>bar <span class="badge badge--version">preset</span></h3>
            <p>Barras verticais simples — consultas por mês.</p>
          </div>
          <div class="chart-card__body">
            <kln-chart type="bar" preset="bar" [data]="barData" height="280px" />
            <button class="chart-code-toggle" (click)="toggleCode('bar')">
              <i class="pi pi-code"></i> {{ activeCode() === 'bar' ? 'Ocultar código' : 'Ver código' }}
            </button>
            @if (activeCode() === 'bar') {
              <div style="margin-top:8px">
                <app-code-block language="typescript" [code]="barTsCode" />
              </div>
            }
          </div>
        </div>

        <!-- bar-horizontal -->
        <div class="chart-card">
          <div class="chart-card__header">
            <h3>bar-horizontal <span class="badge badge--version">preset</span></h3>
            <p>Barras horizontais — atendimentos por especialidade.</p>
          </div>
          <div class="chart-card__body">
            <kln-chart type="bar" preset="bar-horizontal" [data]="barHorizontalData" height="280px" />
            <button class="chart-code-toggle" (click)="toggleCode('bar-h')">
              <i class="pi pi-code"></i> {{ activeCode() === 'bar-h' ? 'Ocultar' : 'Ver código' }}
            </button>
            @if (activeCode() === 'bar-h') {
              <div style="margin-top:8px">
                <app-code-block language="typescript" [code]="barHorizontalCode" />
              </div>
            }
          </div>
        </div>

        <!-- bar-stacked -->
        <div class="chart-card">
          <div class="chart-card__header">
            <h3>bar-stacked <span class="badge badge--version">preset</span></h3>
            <p>Barras empilhadas — composição: consultas + exames + internações.</p>
          </div>
          <div class="chart-card__body">
            <kln-chart type="bar" preset="bar-stacked" [data]="barStackedData" height="280px" />
            <button class="chart-code-toggle" (click)="toggleCode('bar-s')">
              <i class="pi pi-code"></i> {{ activeCode() === 'bar-s' ? 'Ocultar' : 'Ver código' }}
            </button>
            @if (activeCode() === 'bar-s') {
              <div style="margin-top:8px">
                <app-code-block language="typescript" [code]="barStackedCode" />
              </div>
            }
          </div>
        </div>

        <!-- bar-stacked-horizontal -->
        <div class="chart-card">
          <div class="chart-card__header">
            <h3>bar-stacked-horizontal <span class="badge badge--version">preset</span></h3>
            <p>Barras empilhadas horizontais — composição com labels descritivos.</p>
          </div>
          <div class="chart-card__body">
            <kln-chart type="bar" preset="bar-stacked-horizontal" [data]="barStackedData" height="280px" />
          </div>
        </div>

        <!-- bar-grouped -->
        <div class="chart-card">
          <div class="chart-card__header">
            <h3>bar-grouped <span class="badge badge--version">preset</span></h3>
            <p>Barras agrupadas — titulares vs dependentes por trimestre.</p>
          </div>
          <div class="chart-card__body">
            <kln-chart type="bar" preset="bar-grouped" [data]="barGroupedData" height="280px" />
            <button class="chart-code-toggle" (click)="toggleCode('bar-g')">
              <i class="pi pi-code"></i> {{ activeCode() === 'bar-g' ? 'Ocultar' : 'Ver código' }}
            </button>
            @if (activeCode() === 'bar-g') {
              <div style="margin-top:8px">
                <app-code-block language="typescript" [code]="barGroupedCode" />
              </div>
            }
          </div>
        </div>

        <!-- bar-stacked-100 -->
        <div class="chart-card">
          <div class="chart-card__header">
            <h3>bar-stacked-100 <span class="badge badge--version">preset</span></h3>
            <p>100% empilhado — proporções relativas independente do volume.</p>
          </div>
          <div class="chart-card__body">
            <kln-chart type="bar" preset="bar-stacked-100" [data]="barStackedData" height="280px" />
          </div>
        </div>

        <!-- bar-negative -->
        <div class="chart-card">
          <div class="chart-card__header">
            <h3>bar-negative <span class="badge badge--version">preset</span></h3>
            <p>Barras com valores negativos — variação % vs mês anterior.</p>
          </div>
          <div class="chart-card__body">
            <kln-chart type="bar" preset="bar-negative" [data]="barNegativeData" height="280px" />
            <button class="chart-code-toggle" (click)="toggleCode('bar-neg')">
              <i class="pi pi-code"></i> {{ activeCode() === 'bar-neg' ? 'Ocultar' : 'Ver código' }}
            </button>
            @if (activeCode() === 'bar-neg') {
              <div style="margin-top:8px">
                <app-code-block language="typescript" [code]="barNegativeCode" />
              </div>
            }
          </div>
        </div>

      </div>

      <!-- ── Line & Area ─────────────────────────────────────────────────── -->
      <h2 class="charts-section-title">Line & Area</h2>
      <p class="charts-section-desc">
        Gráficos de linha e área para tendências ao longo do tempo.
      </p>
      <div class="chart-grid">

        <!-- line -->
        <div class="chart-card">
          <div class="chart-card__header">
            <h3>line <span class="badge badge--version">preset</span></h3>
            <p>Linha suave — sinistro médio vs meta mensal.</p>
          </div>
          <div class="chart-card__body">
            <kln-chart type="line" preset="line" [data]="lineData" height="280px" />
            <button class="chart-code-toggle" (click)="toggleCode('line')">
              <i class="pi pi-code"></i> {{ activeCode() === 'line' ? 'Ocultar' : 'Ver código' }}
            </button>
            @if (activeCode() === 'line') {
              <div style="margin-top:8px">
                <app-code-block language="typescript" [code]="lineCode" />
              </div>
            }
          </div>
        </div>

        <!-- line-stepped -->
        <div class="chart-card">
          <div class="chart-card__header">
            <h3>line-stepped <span class="badge badge--version">preset</span></h3>
            <p>Linha degrau — mudanças abruptas como alterações de plano.</p>
          </div>
          <div class="chart-card__body">
            <kln-chart type="line" preset="line-stepped" [data]="lineData" height="280px" />
          </div>
        </div>

        <!-- line-dual-axis -->
        <div class="chart-card">
          <div class="chart-card__header">
            <h3>line-dual-axis <span class="badge badge--version">preset</span></h3>
            <p>Dois eixos Y — correlaciona consultas (und) × custo médio (R$).</p>
          </div>
          <div class="chart-card__body">
            <kln-chart type="line" preset="line-dual-axis" [data]="lineDualAxisData" height="280px" />
            <button class="chart-code-toggle" (click)="toggleCode('line-dual')">
              <i class="pi pi-code"></i> {{ activeCode() === 'line-dual' ? 'Ocultar' : 'Ver código' }}
            </button>
            @if (activeCode() === 'line-dual') {
              <div style="margin-top:8px">
                <app-code-block language="typescript" [code]="lineDualAxisCode" />
              </div>
            }
          </div>
        </div>

        <!-- area -->
        <div class="chart-card">
          <div class="chart-card__header">
            <h3>area <span class="badge badge--version">preset</span></h3>
            <p>Área preenchida — crescimento de beneficiários ativos.</p>
          </div>
          <div class="chart-card__body">
            <kln-chart type="line" preset="area" [data]="areaData" height="280px" />
            <button class="chart-code-toggle" (click)="toggleCode('area')">
              <i class="pi pi-code"></i> {{ activeCode() === 'area' ? 'Ocultar' : 'Ver código' }}
            </button>
            @if (activeCode() === 'area') {
              <div style="margin-top:8px">
                <app-code-block language="typescript" [code]="areaCode" />
              </div>
            }
          </div>
        </div>

        <!-- sparkline -->
        <div class="chart-card">
          <div class="chart-card__header">
            <h3>sparkline <span class="badge badge--version">preset</span></h3>
            <p>Mini-gráfico sem eixos — tendência compacta em KPI cards.</p>
          </div>
          <div class="chart-card__body" style="display:flex;align-items:center;gap:24px">
            <div>
              <div style="font-size:24px;font-weight:700;color:var(--docs-accent)">R$ 487K</div>
              <div style="font-size:12px;color:#22c55e">▲ 12,4% vs mês anterior</div>
            </div>
            <div style="flex:1">
              <kln-chart type="line" preset="sparkline" [data]="sparklineData" height="60px" />
            </div>
          </div>
          <button class="chart-code-toggle" (click)="toggleCode('sparkline')">
            <i class="pi pi-code"></i> {{ activeCode() === 'sparkline' ? 'Ocultar' : 'Ver código' }}
          </button>
          @if (activeCode() === 'sparkline') {
            <div style="margin-top:8px">
              <app-code-block language="typescript" [code]="sparklineCode" />
            </div>
          }
        </div>

      </div>

      <!-- ── Time Series ──────────────────────────────────────────────────── -->
      <h2 class="charts-section-title">Time Series</h2>
      <p class="charts-section-desc">
        Eixo X como escala temporal real (datas ISO). Suporta zoom interativo com brush.
      </p>
      <div class="chart-grid">

        <!-- time-series -->
        <div class="chart-card">
          <div class="chart-card__header">
            <h3>time-series <span class="badge badge--version">preset</span></h3>
            <p>Agendamentos e atendimentos diários ao longo de 3 meses.</p>
          </div>
          <div class="chart-card__body">
            <kln-chart type="line" preset="time-series" [data]="timeSeriesData" height="280px" />
            <button class="chart-code-toggle" (click)="toggleCode('ts')">
              <i class="pi pi-code"></i> {{ activeCode() === 'ts' ? 'Ocultar' : 'Ver código' }}
            </button>
            @if (activeCode() === 'ts') {
              <div style="margin-top:8px">
                <app-code-block language="typescript" [code]="timeSeriesCode" />
              </div>
            }
          </div>
        </div>

        <!-- time-series-brush -->
        <div class="chart-card">
          <div class="chart-card__header">
            <h3>time-series-brush <span class="badge badge--version">preset</span></h3>
            <p>Série temporal com mini-mapa de seleção — histórico longo com zoom.</p>
          </div>
          <div class="chart-card__body">
            <kln-chart type="line" preset="time-series-brush" [data]="timeSeriesData" height="300px" />
          </div>
        </div>

      </div>

      <!-- ── Radial ───────────────────────────────────────────────────────── -->
      <h2 class="charts-section-title">Radial</h2>
      <p class="charts-section-desc">
        Distribuição de partes de um todo e comparação multidimensional.
      </p>
      <div class="chart-grid">

        <!-- pie -->
        <div class="chart-card">
          <div class="chart-card__header">
            <h3>pie <span class="badge badge--version">preset</span></h3>
            <p>Pizza — distribuição de autorizações por status.</p>
          </div>
          <div class="chart-card__body">
            <kln-chart type="pie" preset="pie" [data]="pieData" height="280px" />
            <button class="chart-code-toggle" (click)="toggleCode('pie')">
              <i class="pi pi-code"></i> {{ activeCode() === 'pie' ? 'Ocultar' : 'Ver código' }}
            </button>
            @if (activeCode() === 'pie') {
              <div style="margin-top:8px">
                <app-code-block language="typescript" [code]="pieCode" />
              </div>
            }
          </div>
        </div>

        <!-- doughnut -->
        <div class="chart-card">
          <div class="chart-card__header">
            <h3>doughnut <span class="badge badge--version">preset</span></h3>
            <p>Rosca — composição de sinistros com espaço central para KPI.</p>
          </div>
          <div class="chart-card__body">
            <kln-chart type="doughnut" preset="doughnut" [data]="pieData" height="280px" />
          </div>
        </div>

        <!-- polar-area -->
        <div class="chart-card">
          <div class="chart-card__header">
            <h3>polar-area <span class="badge badge--version">preset</span></h3>
            <p>Área polar — comparação de especialidades com magnitude visual.</p>
          </div>
          <div class="chart-card__body">
            <kln-chart type="polarArea" preset="polar-area" [data]="polarData" height="280px" />
            <button class="chart-code-toggle" (click)="toggleCode('polar')">
              <i class="pi pi-code"></i> {{ activeCode() === 'polar' ? 'Ocultar' : 'Ver código' }}
            </button>
            @if (activeCode() === 'polar') {
              <div style="margin-top:8px">
                <app-code-block language="typescript" [code]="polarCode" />
              </div>
            }
          </div>
        </div>

        <!-- radar -->
        <div class="chart-card">
          <div class="chart-card__header">
            <h3>radar <span class="badge badge--version">preset</span></h3>
            <p>Radar — perfil clínico: titulares vs dependentes.</p>
          </div>
          <div class="chart-card__body">
            <kln-chart type="radar" preset="radar" [data]="radarData" height="280px" />
            <button class="chart-code-toggle" (click)="toggleCode('radar')">
              <i class="pi pi-code"></i> {{ activeCode() === 'radar' ? 'Ocultar' : 'Ver código' }}
            </button>
            @if (activeCode() === 'radar') {
              <div style="margin-top:8px">
                <app-code-block language="typescript" [code]="radarCode" />
              </div>
            }
          </div>
        </div>

      </div>

      <!-- ── Scatter & Bubble ─────────────────────────────────────────────── -->
      <h2 class="charts-section-title">Scatter & Bubble</h2>
      <p class="charts-section-desc">
        Correlação entre variáveis numéricas. Bubble adiciona uma terceira dimensão via raio.
      </p>
      <div class="chart-grid">

        <!-- scatter -->
        <div class="chart-card">
          <div class="chart-card__header">
            <h3>scatter <span class="badge badge--version">preset</span></h3>
            <p>Dispersão — frequência de consultas × custo por beneficiário.</p>
          </div>
          <div class="chart-card__body">
            <kln-chart type="scatter" preset="scatter" [data]="scatterData" height="280px" />
            <button class="chart-code-toggle" (click)="toggleCode('scatter')">
              <i class="pi pi-code"></i> {{ activeCode() === 'scatter' ? 'Ocultar' : 'Ver código' }}
            </button>
            @if (activeCode() === 'scatter') {
              <div style="margin-top:8px">
                <app-code-block language="typescript" [code]="scatterCode" />
              </div>
            }
          </div>
        </div>

        <!-- bubble -->
        <div class="chart-card">
          <div class="chart-card__header">
            <h3>bubble <span class="badge badge--version">preset</span></h3>
            <p>Bolha — frequência × custo × população (raio = volume).</p>
          </div>
          <div class="chart-card__body">
            <kln-chart type="bubble" preset="bubble" [data]="bubbleData" height="280px" />
            <button class="chart-code-toggle" (click)="toggleCode('bubble')">
              <i class="pi pi-code"></i> {{ activeCode() === 'bubble' ? 'Ocultar' : 'Ver código' }}
            </button>
            @if (activeCode() === 'bubble') {
              <div style="margin-top:8px">
                <app-code-block language="typescript" [code]="bubbleCode" />
              </div>
            }
          </div>
        </div>

      </div>

      <!-- ── Mixed ───────────────────────────────────────────────────────── -->
      <h2 class="charts-section-title">Mixed</h2>
      <p class="charts-section-desc">
        Combina barras e linhas no mesmo canvas — volume realizado vs meta.
      </p>
      <div class="chart-grid">
        <div class="chart-card">
          <div class="chart-card__header">
            <h3>mixed <span class="badge badge--version">preset</span></h3>
            <p>Bar + Line — atendimentos realizados (barras) vs meta mensal (linha).</p>
          </div>
          <div class="chart-card__body">
            <kln-chart type="bar" preset="mixed" [data]="mixedData" height="280px" />
            <button class="chart-code-toggle" (click)="toggleCode('mixed')">
              <i class="pi pi-code"></i> {{ activeCode() === 'mixed' ? 'Ocultar' : 'Ver código' }}
            </button>
            @if (activeCode() === 'mixed') {
              <div style="margin-top:8px">
                <app-code-block language="typescript" [code]="mixedCode" />
              </div>
            }
          </div>
        </div>
      </div>

    </div>
  `,
})
export class ChartsComponent {
  activeCode = signal<ActiveCodeKey>(null);

  toggleCode(key: string): void {
    this.activeCode.update(current => current === key ? null : key);
  }

  // ── Bar data ──────────────────────────────────────────────────────────────
  barData = KlnChartData.cartesian(
    ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    [{ label: 'Consultas realizadas', data: [342, 298, 421, 387, 456, 412] }],
  );

  barHorizontalData = KlnChartData.cartesian(
    ['Cardiologia', 'Ortopedia', 'Pediatria', 'Ginecologia', 'Neurologia', 'Dermatologia'],
    [{ label: 'Atendimentos 2025', data: [284, 247, 312, 198, 156, 203] }],
  );

  barStackedData = KlnChartData.cartesian(
    ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    [
      { label: 'Consultas', data: [180, 160, 210, 195, 230, 210] },
      { label: 'Exames', data: [120, 110, 150, 140, 165, 158] },
      { label: 'Internações', data: [42, 28, 61, 52, 61, 44] },
    ],
  );

  barGroupedData = KlnChartData.cartesian(
    ['T1', 'T2', 'T3', 'T4'],
    [
      { label: 'Titulares', data: [1240, 1380, 1190, 1450] },
      { label: 'Dependentes', data: [820, 910, 780, 960] },
    ],
  );

  barNegativeData = KlnChartData.cartesian(
    ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    [{ label: 'Variação vs mês anterior (%)', data: [4.2, -2.1, 8.7, -3.4, 6.1, -1.8] }],
  );

  // ── Line & Area data ───────────────────────────────────────────────────────
  lineData = KlnChartData.cartesian(
    ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago'],
    [
      { label: 'Sinistro médio (R$)', data: [1842, 1790, 1920, 1875, 2010, 1960, 2080, 2150] },
      { label: 'Meta (R$)', data: [1900, 1900, 1900, 1900, 2000, 2000, 2000, 2000] },
    ],
  );

  lineDualAxisData = KlnChartData.cartesian(
    ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    [
      { label: 'Consultas (und)', data: [342, 298, 421, 387, 456, 412] },
      { label: 'Custo médio (R$)', data: [1842, 1790, 1920, 1875, 2010, 1960] },
    ],
  );

  areaData = KlnChartData.cartesian(
    ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago'],
    [{ label: 'Beneficiários ativos', data: [4210, 4380, 4490, 4620, 4780, 4850, 5010, 5140], fill: true }],
  );

  sparklineData = KlnChartData.cartesian(
    ['', '', '', '', '', '', '', '', '', '', '', ''],
    [{ label: 'Receita', data: [380, 420, 395, 460, 430, 480, 450, 490, 470, 510, 487, 487] }],
  );

  // ── Time Series data ────────────────────────────────────────────────────────
  timeSeriesData = KlnChartData.timeSeries([
    {
      label: 'Agendamentos',
      points: [
        { x: '2025-01-01', y: 48 }, { x: '2025-01-08', y: 62 }, { x: '2025-01-15', y: 55 },
        { x: '2025-01-22', y: 71 }, { x: '2025-02-01', y: 58 }, { x: '2025-02-08', y: 68 },
        { x: '2025-02-15', y: 74 }, { x: '2025-02-22', y: 82 }, { x: '2025-03-01', y: 65 },
        { x: '2025-03-08', y: 79 }, { x: '2025-03-15', y: 85 }, { x: '2025-03-22', y: 91 },
      ],
    },
    {
      label: 'Atendimentos',
      points: [
        { x: '2025-01-01', y: 41 }, { x: '2025-01-08', y: 55 }, { x: '2025-01-15', y: 49 },
        { x: '2025-01-22', y: 63 }, { x: '2025-02-01', y: 52 }, { x: '2025-02-08', y: 61 },
        { x: '2025-02-15', y: 67 }, { x: '2025-02-22', y: 74 }, { x: '2025-03-01', y: 59 },
        { x: '2025-03-08', y: 72 }, { x: '2025-03-15', y: 78 }, { x: '2025-03-22', y: 83 },
      ],
    },
  ]);

  // ── Radial data ─────────────────────────────────────────────────────────────
  pieData = KlnChartData.status(
    ['Autorizado', 'Em análise', 'Pendente docs', 'Negado', 'Cancelado'],
    [312, 87, 45, 23, 18],
  );

  polarData = KlnChartData.radial(
    ['Cardiologia', 'Ortopedia', 'Pediatria', 'Ginecologia', 'Neurologia'],
    [284, 247, 312, 198, 156],
  );

  radarData = KlnChartData.radar(
    ['Frequência', 'Custo', 'Satisfação', 'Adesão', 'Prevenção', 'Crônicas'],
    [
      { label: 'Titulares', data: [75, 60, 82, 70, 65, 55] },
      { label: 'Dependentes', data: [60, 45, 88, 78, 72, 40] },
    ],
  );

  // ── Scatter & Bubble data ───────────────────────────────────────────────────
  scatterData = KlnChartData.scatter([
    {
      label: 'Titulares',
      points: [
        { x: 2, y: 1200 }, { x: 4, y: 1850 }, { x: 1, y: 980 }, { x: 6, y: 2400 },
        { x: 3, y: 1560 }, { x: 8, y: 3100 }, { x: 5, y: 2050 }, { x: 2, y: 1100 },
        { x: 7, y: 2800 }, { x: 3, y: 1450 },
      ],
    },
    {
      label: 'Dependentes',
      points: [
        { x: 1, y: 800 }, { x: 3, y: 1300 }, { x: 2, y: 950 }, { x: 5, y: 1900 },
        { x: 4, y: 1600 }, { x: 6, y: 2200 }, { x: 7, y: 2600 }, { x: 3, y: 1250 },
      ],
    },
  ]);

  bubbleData = KlnChartData.bubble([
    {
      label: 'Cardiologia',
      points: [
        { x: 8, y: 2800, r: 18 }, { x: 6, y: 2200, r: 14 }, { x: 9, y: 3100, r: 20 }, { x: 5, y: 1900, r: 12 },
      ],
    },
    {
      label: 'Pediatria',
      points: [
        { x: 4, y: 1100, r: 22 }, { x: 3, y: 900, r: 18 }, { x: 5, y: 1300, r: 24 }, { x: 2, y: 750, r: 15 },
      ],
    },
  ]);

  // ── Mixed data ──────────────────────────────────────────────────────────────
  mixedData = KlnChartData.mixed(
    ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    [
      { label: 'Atendimentos realizados', data: [342, 298, 421, 387, 456, 412], type: 'bar' },
      { label: 'Meta mensal', data: [380, 380, 400, 400, 420, 420], type: 'line' },
    ],
  );

  // ── Code snippets ───────────────────────────────────────────────────────────
  setupCode = `import { KlnChartComponent, KlnChartData } from '@klini-saude/ds';

@Component({
  standalone: true,
  imports: [KlnChartComponent],
  // type = Chart.js type (bar, line, pie, doughnut, radar, scatter, bubble, polarArea)
  // preset = Klini preset name (bar, bar-horizontal, bar-stacked, line, area, ...)
  template: \`<kln-chart type="bar" preset="bar" [data]="data" height="300px" />\`,
})
export class MyComponent {
  data = KlnChartData.cartesian(
    ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    [{ label: 'Consultas', data: [342, 298, 421, 387, 456, 412] }],
  );
}`;

  barTsCode = `// Bar — vertical simples
data = KlnChartData.cartesian(
  ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
  [{ label: 'Consultas realizadas', data: [342, 298, 421, 387, 456, 412] }],
);

// template
<kln-chart type="bar" preset="bar" [data]="data" height="300px" />`;

  barHorizontalCode = `data = KlnChartData.cartesian(
  ['Cardiologia', 'Ortopedia', 'Pediatria', 'Ginecologia', 'Neurologia'],
  [{ label: 'Atendimentos 2025', data: [284, 247, 312, 198, 156] }],
);

<kln-chart type="bar" preset="bar-horizontal" [data]="data" height="280px" />`;

  barStackedCode = `data = KlnChartData.cartesian(
  ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
  [
    { label: 'Consultas',    data: [180, 160, 210, 195, 230, 210] },
    { label: 'Exames',       data: [120, 110, 150, 140, 165, 158] },
    { label: 'Internações',  data: [42,  28,  61,  52,  61,  44 ] },
  ],
);

<kln-chart type="bar" preset="bar-stacked" [data]="data" height="280px" />`;

  barGroupedCode = `data = KlnChartData.cartesian(
  ['T1', 'T2', 'T3', 'T4'],
  [
    { label: 'Titulares',   data: [1240, 1380, 1190, 1450] },
    { label: 'Dependentes', data: [820,  910,  780,  960 ] },
  ],
);

<kln-chart type="bar" preset="bar-grouped" [data]="data" height="280px" />`;

  barNegativeCode = `data = KlnChartData.cartesian(
  ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
  [{ label: 'Variação (%)', data: [4.2, -2.1, 8.7, -3.4, 6.1, -1.8] }],
);

<kln-chart type="bar" preset="bar-negative" [data]="data" height="280px" />`;

  lineCode = `data = KlnChartData.cartesian(
  ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago'],
  [
    { label: 'Sinistro médio (R$)', data: [1842, 1790, 1920, 1875, 2010, 1960, 2080, 2150] },
    { label: 'Meta (R$)',           data: [1900, 1900, 1900, 1900, 2000, 2000, 2000, 2000] },
  ],
);

<kln-chart type="line" preset="line" [data]="data" height="280px" />`;

  lineDualAxisCode = `// Dois eixos Y — o preset configura o segundo eixo automaticamente.
data = KlnChartData.cartesian(
  ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
  [
    { label: 'Consultas (und)', data: [342, 298, 421, 387, 456, 412] },
    { label: 'Custo médio (R$)', data: [1842, 1790, 1920, 1875, 2010, 1960] },
  ],
);

<kln-chart type="line" preset="line-dual-axis" [data]="data" height="280px" />`;

  areaCode = `// fill: true na série cria o preenchimento da área
data = KlnChartData.cartesian(
  ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago'],
  [{ label: 'Beneficiários ativos', data: [4210, 4380, 4490, 4620, 4780, 4850, 5010, 5140], fill: true }],
);

<kln-chart type="line" preset="area" [data]="data" height="280px" />`;

  sparklineCode = `// Sparkline — use dentro de KPI cards, sem eixos nem legendas.
data = KlnChartData.cartesian(
  ['', '', '', '', '', '', '', '', '', '', '', ''],
  [{ label: 'Receita', data: [380, 420, 395, 460, 430, 480, 450, 490, 470, 510, 487, 487] }],
);

<kln-chart type="line" preset="sparkline" [data]="data" height="60px" />`;

  timeSeriesCode = `// KlnChartData.timeSeries — x é string ISO ou Date
data = KlnChartData.timeSeries([
  {
    label: 'Agendamentos',
    points: [
      { x: '2025-01-01', y: 48 },
      { x: '2025-01-08', y: 62 },
      { x: '2025-02-01', y: 58 },
    ],
  },
]);

<kln-chart type="line" preset="time-series" [data]="data" height="280px" />`;

  pieCode = `// KlnChartData.status() aplica as 5 cores semânticas Klini
data = KlnChartData.status(
  ['Autorizado', 'Em análise', 'Pendente docs', 'Negado', 'Cancelado'],
  [312, 87, 45, 23, 18],
);

// Para usar paleta categorical:
// data = KlnChartData.radial(['A', 'B', 'C'], [40, 35, 25]);

<kln-chart type="pie" preset="pie" [data]="data" height="280px" />`;

  polarCode = `data = KlnChartData.radial(
  ['Cardiologia', 'Ortopedia', 'Pediatria', 'Ginecologia', 'Neurologia'],
  [284, 247, 312, 198, 156],
);

<kln-chart type="polarArea" preset="polar-area" [data]="data" height="280px" />`;

  radarCode = `data = KlnChartData.radar(
  ['Frequência', 'Custo', 'Satisfação', 'Adesão', 'Prevenção', 'Crônicas'],
  [
    { label: 'Titulares',   data: [75, 60, 82, 70, 65, 55] },
    { label: 'Dependentes', data: [60, 45, 88, 78, 72, 40] },
  ],
);

<kln-chart type="radar" preset="radar" [data]="data" height="280px" />`;

  scatterCode = `data = KlnChartData.scatter([
  {
    label: 'Titulares',
    points: [
      { x: 2, y: 1200 }, // x=consultas/mês, y=custo anual
      { x: 4, y: 1850 }, { x: 6, y: 2400 },
    ],
  },
]);

<kln-chart type="scatter" preset="scatter" [data]="data" height="280px" />`;

  bubbleCode = `data = KlnChartData.bubble([
  {
    label: 'Cardiologia',
    points: [
      { x: 8, y: 2800, r: 18 }, // x=freq, y=custo, r=população
      { x: 6, y: 2200, r: 14 },
    ],
  },
]);

<kln-chart type="bubble" preset="bubble" [data]="data" height="280px" />`;

  mixedCode = `// mixed: define type por série
data = KlnChartData.mixed(
  ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
  [
    { label: 'Atendimentos', data: [342, 298, 421, 387, 456, 412], type: 'bar' },
    { label: 'Meta',         data: [380, 380, 400, 400, 420, 420], type: 'line' },
  ],
);

// type do kln-chart deve ser 'bar' para mixed
<kln-chart type="bar" preset="mixed" [data]="data" height="280px" />`;
}
