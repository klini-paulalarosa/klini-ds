/**
 * KlnChartPresets
 *
 * Opções Chart.js pré-configuradas por variante, aplicando automaticamente
 * os tokens visuais do DS (cores de texto, grid, legenda).
 *
 * Uso via input [preset]:
 *   <kln-chart type="line" preset="line" [data]="data" />
 *
 * Uso direto para customização:
 *   import { KlnChartPresets } from '@klini-saude/ds';
 *   options = { ...KlnChartPresets.line(), plugins: { legend: { display: false } } };
 */
import { KlnChartTokens as T } from './chart.tokens';

export type KlnChartPreset =
  | 'bar'
  | 'bar-horizontal'
  | 'bar-stacked'
  | 'bar-stacked-horizontal'
  | 'bar-grouped'
  | 'bar-stacked-100'
  | 'bar-negative'
  | 'line'
  | 'line-stepped'
  | 'line-dual-axis'
  | 'area'
  | 'sparkline'
  | 'pie'
  | 'doughnut'
  | 'polar-area'
  | 'radar'
  | 'scatter'
  | 'bubble'
  | 'mixed'
  | 'time-series'
  | 'time-series-brush';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyObj = Record<string, any>;

// ─── Blocos reutilizáveis ──────────────────────────────────────────────────────

function legendBlock(): AnyObj {
  return {
    labels: {
      color:    T.textSecondary,
      font:     { size: 12, family: 'inherit' },
      boxWidth: 12,
      padding:  16,
    },
  };
}

function tooltipBlock(): AnyObj {
  return {
    backgroundColor: T.textPrimary,
    titleColor:      '#ffffff',
    bodyColor:       'rgba(255,255,255,0.8)',
    padding:         10,
    cornerRadius:    6,
  };
}

function basePlugins(): AnyObj {
  return { legend: legendBlock(), tooltip: tooltipBlock() };
}

function xAxis(showGrid = false): AnyObj {
  return {
    grid:   { display: showGrid, color: T.surfaceBorder },
    ticks:  { color: T.textSecondary, font: { size: 11 } },
    border: { color: T.surfaceBorder },
  };
}

function yAxis(): AnyObj {
  return {
    grid:   { color: T.surfaceBorder },
    ticks:  { color: T.textSecondary, font: { size: 11 } },
    border: { color: T.surfaceBorder },
  };
}

function radialAxis(): AnyObj {
  return {
    grid:        { color: T.surfaceBorder },
    ticks:       { color: T.textSecondary, backdropColor: 'transparent', font: { size: 10 } },
    pointLabels: { color: T.textSecondary, font: { size: 11 } },
    angleLines:  { color: T.surfaceBorder },
  };
}

// ─── Presets por variante ──────────────────────────────────────────────────────

export const KlnChartPresets: Record<KlnChartPreset, () => AnyObj> = {

  /** Bar chart vertical */
  'bar': () => ({
    responsive: true, maintainAspectRatio: false, animation: { duration: 300 },
    plugins: basePlugins(),
    scales:  { x: xAxis(false), y: yAxis() },
  }),

  /** Bar chart horizontal (indexAxis: 'y') */
  'bar-horizontal': () => ({
    responsive: true, maintainAspectRatio: false, animation: { duration: 300 },
    indexAxis: 'y',
    plugins:   basePlugins(),
    scales:    { x: xAxis(true), y: { ...yAxis(), grid: { display: false } } },
  }),

  /** Bar chart empilhado vertical — padrão Adherence Heatmap */
  'bar-stacked': () => ({
    responsive: true, maintainAspectRatio: false, animation: { duration: 300 },
    plugins: basePlugins(),
    scales:  {
      x: { ...xAxis(false), stacked: true },
      y: { ...yAxis(),      stacked: true },
    },
  }),

  /** Bar chart empilhado horizontal */
  'bar-stacked-horizontal': () => ({
    responsive: true, maintainAspectRatio: false, animation: { duration: 300 },
    indexAxis: 'y',
    plugins:   basePlugins(),
    scales:    {
      x: { ...xAxis(true),  stacked: true },
      y: { ...yAxis(), grid: { display: false }, stacked: true },
    },
  }),

  /** Line chart padrão */
  'line': () => ({
    responsive: true, maintainAspectRatio: false, animation: { duration: 300 },
    elements: { line: { tension: 0.4, borderWidth: 2 }, point: { radius: 3, hoverRadius: 5 } },
    plugins:  basePlugins(),
    scales:   { x: xAxis(false), y: yAxis() },
  }),

  /** Area chart (line com fill: true nos datasets) */
  'area': () => ({
    responsive: true, maintainAspectRatio: false, animation: { duration: 300 },
    elements: {
      line:  { tension: 0.4, borderWidth: 2, fill: true },
      point: { radius: 3, hoverRadius: 5 },
    },
    plugins: basePlugins(),
    scales:  { x: xAxis(false), y: yAxis() },
  }),

  /** Pie chart */
  'pie': () => ({
    responsive: true, maintainAspectRatio: false, animation: { duration: 300 },
    plugins: { ...basePlugins(), legend: { ...legendBlock(), position: 'right' } },
  }),

  /** Doughnut — Progress Ring (adesão, cobertura) */
  'doughnut': () => ({
    responsive: true, maintainAspectRatio: false, animation: { duration: 300 },
    cutout:  '70%',
    plugins: { ...basePlugins(), legend: { ...legendBlock(), position: 'right' } },
  }),

  /** Polar Area */
  'polar-area': () => ({
    responsive: true, maintainAspectRatio: false, animation: { duration: 300 },
    plugins: basePlugins(),
    scales:  { r: { grid: { color: T.surfaceBorder }, ticks: { color: T.textSecondary, backdropColor: 'transparent' } } },
  }),

  /** Radar */
  'radar': () => ({
    responsive: true, maintainAspectRatio: false, animation: { duration: 300 },
    elements: { line: { borderWidth: 2 }, point: { radius: 3, hoverRadius: 5 } },
    plugins:  basePlugins(),
    scales:   { r: radialAxis() },
  }),

  /** Scatter plot */
  'scatter': () => ({
    responsive: true, maintainAspectRatio: false, animation: { duration: 300 },
    elements: { point: { radius: 5, hoverRadius: 7 } },
    plugins:  basePlugins(),
    scales:   { x: xAxis(true), y: yAxis() },
  }),

  /** Bubble chart */
  'bubble': () => ({
    responsive: true, maintainAspectRatio: false, animation: { duration: 300 },
    elements: { point: { hoverRadius: 4 } },
    plugins:  basePlugins(),
    scales:   { x: xAxis(true), y: yAxis() },
  }),

  /** Mixed chart — combina bar e line no mesmo gráfico (defina type por dataset via KlnChartData.mixed) */
  'mixed': () => ({
    responsive: true, maintainAspectRatio: false, animation: { duration: 300 },
    elements: { line: { tension: 0.4, borderWidth: 2 }, point: { radius: 3, hoverRadius: 5 } },
    plugins:  basePlugins(),
    scales:   { x: xAxis(false), y: yAxis() },
  }),

  /** Time Series — eixo X com datas/strings, use KlnChartData.timeSeries para o dataset */
  'time-series': () => ({
    responsive: true, maintainAspectRatio: false, animation: { duration: 300 },
    elements: { line: { tension: 0.4, borderWidth: 2 }, point: { radius: 3, hoverRadius: 5 } },
    plugins:  basePlugins(),
    scales:   {
      x: {
        type:   'category',
        grid:   { display: false },
        ticks:  { color: T.textSecondary, font: { size: 11 }, maxRotation: 0 },
        border: { color: T.surfaceBorder },
      },
      y: yAxis(),
    },
  }),

  /** Bar grouped — múltiplas séries lado a lado por categoria (padrão do bar, explícito para clareza) */
  'bar-grouped': () => ({
    responsive: true, maintainAspectRatio: false, animation: { duration: 300 },
    plugins: basePlugins(),
    scales:  { x: xAxis(false), y: yAxis() },
  }),

  /** Bar 100% stacked — composição proporcional (%) entre categorias */
  'bar-stacked-100': () => ({
    responsive: true, maintainAspectRatio: false, animation: { duration: 300 },
    plugins: {
      ...basePlugins(),
      tooltip: {
        ...tooltipBlock(),
        callbacks: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          label: (ctx: any) => ` ${ctx.dataset.label}: ${ctx.parsed.y.toFixed(1)}%`,
        },
      },
    },
    scales: {
      x: { ...xAxis(false), stacked: true },
      y: { ...yAxis(), stacked: true, max: 100, ticks: { color: T.textSecondary, font: { size: 11 }, callback: (v: number) => `${v}%` } },
    },
  }),

  /** Bar com valores negativos — crescimento/variação com baseline em zero */
  'bar-negative': () => ({
    responsive: true, maintainAspectRatio: false, animation: { duration: 300 },
    plugins: basePlugins(),
    scales:  {
      x: xAxis(false),
      y: { ...yAxis(), suggestedMin: undefined, beginAtZero: false },
    },
  }),

  /** Line stepped — valores que mudam em degraus discretos */
  'line-stepped': () => ({
    responsive: true, maintainAspectRatio: false, animation: { duration: 300 },
    elements: { line: { tension: 0, stepped: true, borderWidth: 2 }, point: { radius: 3, hoverRadius: 5 } },
    plugins:  basePlugins(),
    scales:   { x: xAxis(false), y: yAxis() },
  }),

  /** Line dual Y-axis — duas métricas com escalas diferentes (y e y1) */
  'line-dual-axis': () => ({
    responsive: true, maintainAspectRatio: false, animation: { duration: 300 },
    elements: { line: { tension: 0.4, borderWidth: 2 }, point: { radius: 3, hoverRadius: 5 } },
    plugins:  basePlugins(),
    scales:   {
      x:  xAxis(false),
      y:  { ...yAxis(), position: 'left' },
      y1: { ...yAxis(), position: 'right', grid: { drawOnChartArea: false } },
    },
  }),

  /** Sparkline — mini-line para KPI cards, sem eixos nem legenda */
  'sparkline': () => ({
    responsive: true, maintainAspectRatio: false, animation: { duration: 200 },
    elements: { line: { tension: 0.4, borderWidth: 2 }, point: { radius: 0, hoverRadius: 3 } },
    plugins:  {
      legend:  { display: false },
      tooltip: { ...tooltipBlock(), enabled: false },
    },
    scales: {
      x: { display: false },
      y: { display: false },
    },
  }),

  /** Time Series + Brush — dataset longo com seleção de período visual */
  'time-series-brush': () => ({
    responsive: true, maintainAspectRatio: false, animation: { duration: 300 },
    elements: { line: { tension: 0.4, borderWidth: 2 }, point: { radius: 0, hoverRadius: 4 } },
    plugins:  { ...basePlugins(), zoom: { zoom: { wheel: { enabled: true }, pinch: { enabled: true }, mode: 'x' }, pan: { enabled: true, mode: 'x' } } },
    scales:   {
      x: {
        type:   'category',
        grid:   { display: false },
        ticks:  { color: T.textSecondary, font: { size: 11 }, maxRotation: 0 },
        border: { color: T.surfaceBorder },
      },
      y: yAxis(),
    },
  }),
};

/** Retorna as options do preset. Retorna {} se o preset não existir. */
export function getChartPreset(preset: KlnChartPreset): AnyObj {
  return KlnChartPresets[preset]?.() ?? {};
}
