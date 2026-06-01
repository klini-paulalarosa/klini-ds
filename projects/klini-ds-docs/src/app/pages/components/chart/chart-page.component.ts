import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CodeBlockComponent } from '../../../shared/code-block/code-block.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-chart-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CodeBlockComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">kln-chart</h1>
        <span class="badge badge--version">KlnChartComponent</span>
        <span class="badge badge--accent">21 presets</span>
      </div>
      <p class="docs-page-description">
        Componente de gráficos do Klini DS. Recebe um <code class="font-mono">preset</code> e
        <code class="font-mono">data</code> para renderizar qualquer um dos 21 presets pré-configurados.
        Para ver todos os gráficos com exemplos interativos e código, acesse a
        <a routerLink="/charts">página Charts & Analytics</a>.
      </p>

      <!-- Inputs -->
      <div class="docs-section">
        <h2>Inputs do kln-chart</h2>
        <app-props-table [props]="chartProps" />
      </div>

      <!-- Presets disponíveis -->
      <div class="docs-section">
        <h2>Presets disponíveis (KlnChartType)</h2>
        <app-code-block language="typescript" [code]="presetsCode" />
      </div>

      <!-- KlnChartData API -->
      <div class="docs-section">
        <h2>KlnChartData — Fábricas de dados</h2>
        <p>
          Classe utilitária para criar datasets Chart.js-compatíveis sem conhecer a estrutura interna.
          Aplica automaticamente as cores da paleta Klini.
        </p>
        <app-code-block language="typescript" [code]="chartDataApi" />
      </div>

      <!-- KlnChartTokens API -->
      <div class="docs-section">
        <h2>KlnChartTokens — Paleta</h2>
        <p>Resolve os CSS custom properties de cor do DS para valores hex. Útil quando você monta datasets manualmente.</p>
        <app-code-block language="typescript" [code]="tokensApi" />
      </div>

      <!-- KlnChartPresets API -->
      <div class="docs-section">
        <h2>KlnChartPresets / getChartPreset</h2>
        <p>Acesse as opções Chart.js de cada preset para customizar antes de passar para o componente.</p>
        <app-code-block language="typescript" [code]="presetsApi" />
      </div>

      <!-- autoColors -->
      <div class="docs-section">
        <h2>autoColors</h2>
        <p>
          O input <code class="font-mono">[autoColors]</code> (padrão <code class="font-mono">true</code>)
          aplica automaticamente as cores do DS a cada dataset sem cor definida.
          Desative apenas se quiser cores completamente customizadas.
        </p>
        <app-code-block language="html" [code]="autoColorsCode" />
      </div>

      <!-- Exemplo completo -->
      <div class="docs-section">
        <h2>Exemplo completo</h2>
        <app-code-block language="typescript" [code]="fullExample" />
      </div>
    </div>
  `,
})
export class ChartPageComponent {
  chartProps: PropDef[] = [
    { name: 'type', type: 'KlnChartType', default: "'bar'", description: "Tipo Chart.js: 'bar' | 'line' | 'pie' | 'doughnut' | 'radar' | 'scatter' | 'bubble' | 'polarArea'.", required: true },
    { name: 'data', type: 'object', default: '{}', description: 'Dados do gráfico — labels + datasets. Use KlnChartData para criar.', required: true },
    { name: 'preset', type: 'KlnChartPreset | null', default: 'null', description: "Preset Klini com opções pré-configuradas: 'bar' | 'bar-horizontal' | 'bar-stacked' | 'line' | 'area' | 'pie' | ... (21 opções)." },
    { name: 'height', type: 'string', default: "'300px'", description: "Altura do canvas com unidade CSS (ex: '300px', '50vh')." },
    { name: 'width', type: 'string', default: "'100%'", description: "Largura do canvas (ex: '100%', '500px')." },
    { name: 'options', type: 'object', default: '{}', description: 'Opções Chart.js customizadas. Mescladas por cima do preset — o dev tem prioridade.' },
    { name: 'autoColors', type: 'boolean', default: 'false', description: 'Aplica automaticamente a paleta categorical Klini a datasets sem cor definida.' },
    { name: 'stacked', type: 'boolean', default: 'false', description: "Atalho para preset='bar-stacked'. Equivalente a [preset]=\"'bar-stacked'\"." },
    { name: 'responsive', type: 'boolean', default: 'true', description: 'Torna o gráfico responsivo (redimensiona com o container).' },
  ];

  presetsCode = `// type = Chart.js type (sempre necessário)
// preset = nome do preset Klini (define as opções visuais)

// Mapeamento type → presets compatíveis:
// type="bar"      → preset: bar, bar-horizontal, bar-stacked, bar-stacked-horizontal,
//                            bar-grouped, bar-stacked-100, bar-negative, mixed
// type="line"     → preset: line, line-stepped, line-dual-axis, area, sparkline,
//                            time-series, time-series-brush
// type="pie"      → preset: pie
// type="doughnut" → preset: doughnut
// type="polarArea"→ preset: polar-area
// type="radar"    → preset: radar
// type="scatter"  → preset: scatter
// type="bubble"   → preset: bubble

type KlnChartPreset =
  | 'bar' | 'bar-horizontal' | 'bar-stacked' | 'bar-stacked-horizontal'
  | 'bar-grouped' | 'bar-stacked-100' | 'bar-negative'
  | 'line' | 'line-stepped' | 'line-dual-axis' | 'area' | 'sparkline'
  | 'pie' | 'doughnut' | 'polar-area' | 'radar'
  | 'scatter' | 'bubble' | 'mixed'
  | 'time-series' | 'time-series-brush';`;

  chartDataApi = `import { KlnChartData } from '@klini-saude/ds';

// Cartesian: bar, line, area, mixed
const cartesian = KlnChartData.cartesian(
  labels: string[],
  series: KlnCartesianSeries[],  // { label, data, color?, type?, fill? }
);

// Radial: pie, doughnut, polar-area
const radial = KlnChartData.radial(
  labels: string[],
  values: number[],
  colors?: string[],  // opcional — padrão: paleta categorical
);

// Status: pie/doughnut com 5 estados semânticos Klini
const status = KlnChartData.status(
  labels: string[],  // até 5 labels
  values: number[],  // até 5 valores
);

// Radar
const radar = KlnChartData.radar(
  labels: string[],
  series: KlnCartesianSeries[],
);

// Time Series
const timeSeries = KlnChartData.timeSeries(
  series: KlnTimeSeries[],  // { label, points: { x: string | Date, y: number }[] }
);

// Scatter
const scatter = KlnChartData.scatter(
  series: KlnPointSeries[],  // { label, points: { x, y }[] }
);

// Bubble
const bubble = KlnChartData.bubble(
  series: KlnPointSeries[],  // { label, points: { x, y, r? }[] }
);

// Mixed (bar + line)
const mixed = KlnChartData.mixed(
  labels: string[],
  series: KlnCartesianSeries[],  // cada série com type: 'bar' | 'line'
);`;

  tokensApi = `import { KlnChartTokens } from '@klini-saude/ds';

// Paleta categorical (4 cores primárias)
KlnChartTokens.categorical
// => ['#259591', '#6AA7AE', '#CD7925', '#E05759']

// Paleta sequential (5 stops: wash → ink)
KlnChartTokens.sequential
// => ['#e6f7f6', '#99d4d2', '#259591', '#1d7a77', '#0e4443']

// Status (5 estados)
KlnChartTokens.status
// => { success: '#22c55e', info: '#6AA7AE', warn: '#CD7925', danger: '#E05759', secondary: '#a1a1aa' }

// Uso manual em dataset customizado:
const color = KlnChartTokens.categorical[0]; // '#259591'`;

  presetsApi = `import { KlnChartPresets, getChartPreset } from '@klini-saude/ds';

// Acessar opções Chart.js de um preset específico
const barOptions = getChartPreset('bar');
// { type: 'bar', options: { plugins: { legend: ... }, scales: { x: ... } } }

// Customizar um preset (merge parcial)
@Component({
  template: \`<kln-chart preset="bar" [data]="data" [options]="customOptions" />\`,
})
export class MyChart {
  customOptions = {
    plugins: {
      legend: { display: false },    // oculta a legenda
    },
    scales: {
      y: { max: 500 },               // limita o eixo Y
    },
  };
}`;

  autoColorsCode = `<!-- autoColors=false (padrão) — as cores devem ser definidas nos datasets via KlnChartData -->
<!-- KlnChartData.cartesian/radial/scatter/etc. já aplicam as cores automaticamente -->
<kln-chart type="bar" preset="bar" [data]="data" />

<!-- autoColors=true — datasets sem cor recebem a paleta categorical do DS automaticamente -->
<!-- Útil quando você monta datasets manualmente sem usar KlnChartData -->
<kln-chart type="bar" preset="bar" [data]="rawData" [autoColors]="true" />`;

  fullExample = `import { KlnChartComponent, KlnChartData } from '@klini-saude/ds';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [KlnChartComponent],
  template: \`
    <h2>Atendimentos por especialidade</h2>
    <kln-chart
      type="bar"
      preset="bar-grouped"
      [data]="chartData"
      height="360px"
      [options]="chartOptions"
    />
  \`,
})
export class DashboardComponent {
  chartData = KlnChartData.cartesian(
    ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    [
      { label: 'Cardiologia', data: [180, 160, 210, 195, 230, 210] },
      { label: 'Pediatria',   data: [120, 110, 150, 140, 165, 158] },
    ],
  );

  // Opções customizadas são mescladas por cima do preset
  chartOptions = {
    plugins: {
      title: {
        display: true,
        text: 'Consultas realizadas — 2026',
      },
    },
  };
}`;
}
