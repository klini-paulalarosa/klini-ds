import { KlnChartTokens } from './chart.tokens';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyObj = Record<string, any>;

export interface KlnCartesianSeries {
  label: string;
  data: number[];
  color?: string;
  type?: 'bar' | 'line';
  fill?: boolean;
}

export interface KlnPointSeries {
  label: string;
  points: { x: number; y: number; r?: number }[];
  color?: string;
}

export interface KlnTimeSeries {
  label: string;
  points: { x: string | Date; y: number }[];
  color?: string;
}


function hexAlpha(hex: string, alpha: number): string {
  const h = hex.replace('#', '');
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

function colorAt(index: number, override?: string): string {
  const palette = KlnChartTokens.categorical;
  return override ?? palette[index % palette.length];
}


export class KlnChartData {

  static cartesian(labels: string[], series: KlnCartesianSeries[]): AnyObj {
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

  static radial(
    labels: string[],
    values: number[],
    colors?: string[],
  ): AnyObj {
    const palette = KlnChartTokens.categorical;
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

  static status(
    labels: string[],
    values: number[],
  ): AnyObj {
    const s = KlnChartTokens.status;
    const colors = [s.success, s.info, s.warn, s.danger, s.secondary];
    return KlnChartData.radial(labels, values, colors.slice(0, values.length));
  }

  static mixed(labels: string[], series: KlnCartesianSeries[]): AnyObj {
    return KlnChartData.cartesian(labels, series);
  }

  static timeSeries(series: KlnTimeSeries[]): AnyObj {
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

  static scatter(series: KlnPointSeries[]): AnyObj {
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

  static bubble(series: KlnPointSeries[]): AnyObj {
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

  static radar(labels: string[], series: KlnCartesianSeries[]): AnyObj {
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
