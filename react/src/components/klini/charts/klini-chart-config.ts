import type { ChartConfig } from '@/components/ui/chart'

export const KLINI_CHART_PALETTE = [
  'var(--chart-1)', // Teal   #259591
  'var(--chart-2)', // Sea    #6AA7AE
  'var(--chart-3)', // Orange #CD7925
  'var(--chart-4)', // Coral  #E05759
  'var(--chart-5)', // Slate  #708090
] as const

export const KLINI_COLORS = {
  teal:    'var(--chart-1)', // #259591 — primary / brand / sucesso
  sea:     'var(--chart-2)', // #6AA7AE — info / complementar
  orange:  'var(--chart-3)', // #CD7925 — warning / acento quente
  coral:   'var(--chart-4)', // #E05759 — danger / negado
  slate:   'var(--chart-5)', // #708090 — em processo / neutro
  primary: 'var(--primary)',
  muted:   'var(--muted-foreground)',
} as const

export function makeChartConfig(
  keys: string[],
  labels?: Record<string, string>,
): ChartConfig {
  return keys.reduce<ChartConfig>((acc, key, i) => {
    acc[key] = {
      label: labels?.[key] ?? key,
      color: KLINI_CHART_PALETTE[i % KLINI_CHART_PALETTE.length],
    }
    return acc
  }, {})
}

export function formatValue(
  value: number,
  format?: 'number' | 'currency' | 'percent' | 'compact',
): string {
  switch (format) {
    case 'currency':
      return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        maximumFractionDigits: 0,
      }).format(value)
    case 'percent':
      return `${value.toFixed(1)}%`
    case 'compact':
      return new Intl.NumberFormat('pt-BR', { notation: 'compact' }).format(value)
    default:
      return new Intl.NumberFormat('pt-BR').format(value)
  }
}
