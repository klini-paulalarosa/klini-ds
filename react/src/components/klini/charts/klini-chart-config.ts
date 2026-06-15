import type { ChartConfig } from '@/components/ui/chart'

/** Klini brand palette mapped to CSS chart vars (defined in globals.css) */
export const KLINI_CHART_PALETTE = [
  'hsl(var(--chart-1))', // teal    #259591
  'hsl(var(--chart-2))', // sea     #2193b0
  'hsl(var(--chart-3))', // sky     #3b82f6
  'hsl(var(--chart-4))', // orange  #f59e0b
  'hsl(var(--chart-5))', // slate   #708090
] as const

/** Named brand colors for explicit use */
export const KLINI_COLORS = {
  teal:   'hsl(var(--chart-1))',
  sea:    'hsl(var(--chart-2))',
  sky:    'hsl(var(--chart-3))',
  orange: 'hsl(var(--chart-4))',
  slate:  'hsl(var(--chart-5))',
  primary: 'hsl(var(--primary))',
  muted:   'hsl(var(--muted-foreground))',
} as const

/**
 * Build a ChartConfig from an array of data keys.
 * Automatically assigns Klini brand colors in sequence.
 */
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

/** Format helpers */
export function formatValue(value: number, format?: 'number' | 'currency' | 'percent' | 'compact'): string {
  switch (format) {
    case 'currency':
      return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(value)
    case 'percent':
      return `${value.toFixed(1)}%`
    case 'compact':
      return new Intl.NumberFormat('pt-BR', { notation: 'compact' }).format(value)
    default:
      return new Intl.NumberFormat('pt-BR').format(value)
  }
}
