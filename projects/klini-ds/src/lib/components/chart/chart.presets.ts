/**
 * KliniChartPresets
 *
 * Opções Chart.js pré-configuradas por variante, aplicando automaticamente
 * os tokens visuais do DS (cores de texto, grid, legenda).
 *
 * Uso via input [preset]:
 *   <kln-chart type="line" preset="line" [data]="data" />
 *
 * Uso direto para customização:
 *   import { KliniChartPresets } from '@klini-saude/ds';
 *   options = { ...KliniChartPresets.line(), plugins: { legend: { display: false } } };
 */
import { KliniChartTokens as T } from './chart.tokens';

export type KliniChartPreset =
  | 'bar'
  | 'bar-horizontal'
  | 'bar-stacked'
  | 'bar-stacked-horizontal'
  | 'line'
  | 'area'
  | 'pie'
  | 'doughnut'
  | 'polar-area'
  | 'radar'
  | 'scatter'
  | 'bubble'
  | 'mixed'
  | 'time-series';

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

export const KliniChartPresets: Record<KliniChartPreset, () => AnyObj> = {

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

  /** Mixed chart — combina bar e line no mesmo gráfico (defina type por dataset via KliniChartData.mixed) */
  'mixed': () => ({
    responsive: true, maintainAspectRatio: false, animation: { duration: 300 },
    elements: { line: { tension: 0.4, borderWidth: 2 }, point: { radius: 3, hoverRadius: 5 } },
    plugins:  basePlugins(),
    scales:   { x: xAxis(false), y: yAxis() },
  }),

  /** Time Series — eixo X com datas/strings, use KliniChartData.timeSeries para o dataset */
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
};

/** Retorna as options do preset. Retorna {} se o preset não existir. */
export function getChartPreset(preset: KliniChartPreset): AnyObj {
  return KliniChartPresets[preset]?.() ?? {};
}
