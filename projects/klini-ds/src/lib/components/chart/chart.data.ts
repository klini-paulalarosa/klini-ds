/**
 * KliniChartData — Fábricas de dados para kln-chart
 *
 * Elimina a necessidade do dev conhecer a estrutura interna do Chart.js.
 * Aplica automaticamente as cores do DS quando nenhuma cor é informada.
 *
 * Uso:
 *   import { KliniChartData } from '@klini-saude/ds';
 *
 *   // Bar / Line / Area — múltiplas séries
 *   data = KliniChartData.cartesian(['Jan','Fev','Mar'], [
 *     { label: 'Cardio',  data: [40, 55, 48] },
 *     { label: 'Ortoped', data: [30, 42, 38] },
 *   ]);
 *
 *   // Pie / Doughnut / Polar Area — série única
 *   data = KliniChartData.radial(['Autorizado','Negado','Em processo'], [60, 15, 25]);
 *
 *   // Time Series
 *   data = KliniChartData.timeSeries([
 *     { label: 'Adesão', points: [{ x: '2024-01', y: 82 }, { x: '2024-02', y: 78 }] },
 *   ]);
 *
 *   // Mixed bar + line
 *   data = KliniChartData.mixed(['Jan','Fev','Mar'], [
 *     { label: 'Consultas', data: [40, 55, 48], type: 'bar' },
 *     { label: 'Meta',      data: [50, 50, 50], type: 'line' },
 *   ]);
 */
import { KliniChartTokens } from './chart.tokens';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyObj = Record<string, any>;

/** Série para gráficos cartesianos (bar, line, area, mixed) */
export interface KliniCartesianSeries {
  label: string;
  data: number[];
  /** Cor da série. Padrão: paleta categorical do DS, auto-distribuída. */
  color?: string;
  /** Para mixed charts — 'bar' ou 'line'. */
  type?: 'bar' | 'line';
  /** Se line/area, usar fill. */
  fill?: boolean;
}

/** Série para scatter e bubble */
export interface KliniPointSeries {
  label: string;
  points: { x: number; y: number; r?: number }[];
  color?: string;
}

/** Série para time series (eixo x como data/string) */
export interface KliniTimeSeries {
  label: string;
  points: { x: string | Date; y: number }[];
  color?: string;
}

// ─── Utilitários internos ─────────────────────────────────────────────────────

/** Converte hex #RRGGBB em rgba(r,g,b,alpha) */
function hexAlpha(hex: string, alpha: number): string {
  const h = hex.replace('#', '');
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

function colorAt(index: number, override?: string): string {
  const palette = KliniChartTokens.categorical;
  return override ?? palette[index % palette.length];
}

// ─── Fábricas ─────────────────────────────────────────────────────────────────

export class KliniChartData {

  /**
   * Gráficos cartesianos: bar, line, area.
   * Cores DS aplicadas automaticamente por série.
   */
  static cartesian(labels: string[], series: KliniCartesianSeries[]): AnyObj {
    return {
      labels,
      datasets: series.map((s, i) => {
        const color = colorAt(i, s.color);
        const isLine = s.type === 'line' || s.fill;
        return {
          type:            s.type,
          label:           s.label,
          data:            s.data,
          backgroundColor: isLine ? hexAlpha(color, 0.15) : color,
          borderColor:     color,
          borderWidth:     isLine ? 2 : 0,
          fill:            s.fill ?? false,
          tension:         isLine ? 0.4 : 0,
        };
      }),
    };
  }

  /**
   * Gráficos radiais: pie, doughnut, polarArea.
   * Aplica paleta categorical a cada segmento.
   */
  static radial(
    labels: string[],
    values: number[],
    colors?: string[],
  ): AnyObj {
    const palette = KliniChartTokens.categorical;
    const bg = colors ?? labels.map((_, i) => palette[i % palette.length]);
    return {
      labels,
      datasets: [{
        data:            values,
        backgroundColor: bg,
        borderColor:     bg.map(c => hexAlpha(c, 0.8)),
        borderWidth:     1,
        hoverOffset:     6,
      }],
    };
  }

  /**
   * Gráficos de status: pie/doughnut com os 5 estados Klini.
   * Atalho para o caso de uso mais comum de healthcare.
   */
  static status(
    labels: string[],
    values: number[],
  ): AnyObj {
    const s = KliniChartTokens.status;
    const colors = [s.success, s.info, s.warn, s.danger, s.secondary];
    return KliniChartData.radial(labels, values, colors.slice(0, values.length));
  }

  /**
   * Mixed chart: combina bar e line no mesmo gráfico.
   * Define `type` por série — 'bar' ou 'line'.
   */
  static mixed(labels: string[], series: KliniCartesianSeries[]): AnyObj {
    return KliniChartData.cartesian(labels, series);
  }

  /**
   * Time Series: eixo X com datas ou strings ISO.
   * Retorna datasets compatíveis com scale type: 'time' ou 'category'.
   */
  static timeSeries(series: KliniTimeSeries[]): AnyObj {
    return {
      datasets: series.map((s, i) => {
        const color = colorAt(i, s.color);
        return {
          label:           s.label,
          data:            s.points,
          backgroundColor: hexAlpha(color, 0.15),
          borderColor:     color,
          borderWidth:     2,
          fill:            false,
          tension:         0.4,
          pointRadius:     3,
        };
      }),
    };
  }

  /**
   * Scatter plot: pontos {x, y} por série.
   */
  static scatter(series: KliniPointSeries[]): AnyObj {
    return {
      datasets: series.map((s, i) => {
        const color = colorAt(i, s.color);
        return {
          label:           s.label,
          data:            s.points.map(p => ({ x: p.x, y: p.y })),
          backgroundColor: hexAlpha(color, 0.7),
          borderColor:     color,
          pointRadius:     5,
        };
      }),
    };
  }

  /**
   * Bubble chart: pontos {x, y, r} por série (r = raio da bolha).
   */
  static bubble(series: KliniPointSeries[]): AnyObj {
    return {
      datasets: series.map((s, i) => {
        const color = colorAt(i, s.color);
        return {
          label:           s.label,
          data:            s.points.map(p => ({ x: p.x, y: p.y, r: p.r ?? 8 })),
          backgroundColor: hexAlpha(color, 0.6),
          borderColor:     color,
          borderWidth:     1,
        };
      }),
    };
  }

  /**
   * Radar chart: múltiplas séries sobre os mesmos eixos.
   */
  static radar(labels: string[], series: KliniCartesianSeries[]): AnyObj {
    return {
      labels,
      datasets: series.map((s, i) => {
        const color = colorAt(i, s.color);
        return {
          label:           s.label,
          data:            s.data,
          backgroundColor: hexAlpha(color, 0.2),
          borderColor:     color,
          borderWidth:     2,
          pointRadius:     3,
        };
      }),
    };
  }
}
