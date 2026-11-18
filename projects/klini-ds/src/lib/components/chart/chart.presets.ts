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


export const KlnChartPresets: Record<KlnChartPreset, () => AnyObj> = {

  'bar': () => ({
    responsive: true, maintainAspectRatio: false, animation: { duration: 300 },
    plugins: basePlugins(),
    scales:  { x: xAxis(false), y: yAxis() },
  }),

  'bar-horizontal': () => ({
    responsive: true, maintainAspectRatio: false, animation: { duration: 300 },
    indexAxis: 'y',
    plugins:   basePlugins(),
    scales:    { x: xAxis(true), y: { ...yAxis(), grid: { display: false } } },
  }),

  'bar-stacked': () => ({
    responsive: true, maintainAspectRatio: false, animation: { duration: 300 },
    plugins: basePlugins(),
    scales:  {
      x: { ...xAxis(false), stacked: true },
      y: { ...yAxis(),      stacked: true },
    },
  }),

  'bar-stacked-horizontal': () => ({
    responsive: true, maintainAspectRatio: false, animation: { duration: 300 },
    indexAxis: 'y',
    plugins:   basePlugins(),
    scales:    {
      x: { ...xAxis(true),  stacked: true },
      y: { ...yAxis(), grid: { display: false }, stacked: true },
    },
  }),

  'line': () => ({
    responsive: true, maintainAspectRatio: false, animation: { duration: 300 },
    elements: { line: { tension: 0.4, borderWidth: 2 }, point: { radius: 3, hoverRadius: 5 } },
    plugins:  basePlugins(),
    scales:   { x: xAxis(false), y: yAxis() },
  }),

  'area': () => ({
    responsive: true, maintainAspectRatio: false, animation: { duration: 300 },
    elements: {
      line:  { tension: 0.4, borderWidth: 2, fill: true },
      point: { radius: 3, hoverRadius: 5 },
    },
    plugins: basePlugins(),
    scales:  { x: xAxis(false), y: yAxis() },
  }),

  'pie': () => ({
    responsive: true, maintainAspectRatio: false, animation: { duration: 300 },
    plugins: { ...basePlugins(), legend: { ...legendBlock(), position: 'right' } },
  }),

  'doughnut': () => ({
    responsive: true, maintainAspectRatio: false, animation: { duration: 300 },
    cutout:  '70%',
    plugins: { ...basePlugins(), legend: { ...legendBlock(), position: 'right' } },
  }),

  'polar-area': () => ({
    responsive: true, maintainAspectRatio: true, animation: { duration: 300 },
    plugins: { ...basePlugins(), legend: { ...legendBlock(), position: 'right' } },
    scales:  {
      r: {
        beginAtZero:  true,
        grid:         { color: T.surfaceBorder },
        ticks:        { color: T.textSecondary, backdropColor: 'transparent', font: { size: 10 } },
        pointLabels:  { display: true, color: T.textSecondary, font: { size: 11 } },
        angleLines:   { color: T.surfaceBorder },
      },
    },
  }),

  'radar': () => ({
    responsive: true, maintainAspectRatio: false, animation: { duration: 300 },
    elements: { line: { borderWidth: 2 }, point: { radius: 3, hoverRadius: 5 } },
    plugins:  basePlugins(),
    scales:   { r: radialAxis() },
  }),

  'scatter': () => ({
    responsive: true, maintainAspectRatio: false, animation: { duration: 300 },
    elements: { point: { radius: 5, hoverRadius: 7 } },
    plugins:  basePlugins(),
    scales:   { x: xAxis(true), y: yAxis() },
  }),

  'bubble': () => ({
    responsive: true, maintainAspectRatio: false, animation: { duration: 300 },
    elements: { point: { hoverRadius: 4 } },
    plugins:  basePlugins(),
    scales:   { x: xAxis(true), y: yAxis() },
  }),

  'mixed': () => ({
    responsive: true, maintainAspectRatio: false, animation: { duration: 300 },
    elements: { line: { tension: 0.4, borderWidth: 2 }, point: { radius: 3, hoverRadius: 5 } },
    plugins:  basePlugins(),
    scales:   { x: xAxis(false), y: yAxis() },
  }),

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

  'bar-grouped': () => ({
    responsive: true, maintainAspectRatio: false, animation: { duration: 300 },
    plugins: basePlugins(),
    scales:  { x: xAxis(false), y: yAxis() },
  }),

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

  'bar-negative': () => ({
    responsive: true, maintainAspectRatio: false, animation: { duration: 300 },
    plugins: basePlugins(),
    scales:  {
      x: xAxis(false),
      y: { ...yAxis(), suggestedMin: undefined, beginAtZero: false },
    },
  }),

  'line-stepped': () => ({
    responsive: true, maintainAspectRatio: false, animation: { duration: 300 },
    elements: { line: { tension: 0, stepped: true, borderWidth: 2 }, point: { radius: 3, hoverRadius: 5 } },
    plugins:  basePlugins(),
    scales:   { x: xAxis(false), y: yAxis() },
  }),

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

export function getChartPreset(preset: KlnChartPreset): AnyObj {
  return KlnChartPresets[preset]?.() ?? {};
}
