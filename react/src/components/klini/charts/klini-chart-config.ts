import type { ChartConfig } from '@/components/ui/chart'

/**
 * Paleta de charts — cores EXATAS da marca Klini.
 * Ordem: Teal → Sea → Orange → Coral → Slate
 * (mesma sequência do Angular DS: --kln-chart-cat-teal/sea/orange/coral)
 *
 * Referência hex:
 *   #259591 Teal   PANTONE 2461C
 *   #6AA7AE Sea    PANTONE 549C
 *   #CD7925 Orange PANTONE 7565C
 *   #E05759 Coral  PANTONE 7625C
 *   #708090 Slate  —
 */
export const KLINI_CHART_PALETTE = [
  'var(--chart-1)', // Teal   #259591
  'var(--chart-2)', // Sea    #6AA7AE
  'var(--chart-3)', // Orange #CD7925
  'var(--chart-4)', // Coral  #E05759
  'var(--chart-5)', // Slate  #708090
] as const

/** Cores nomeadas da marca Klini — acesso direto por semântica */
export const KLINI_COLORS = {
  teal:    'var(--chart-1)', // #259591 — primary / brand / sucesso
  sea:     'var(--chart-2)', // #6AA7AE — info / complementar
  orange:  'var(--chart-3)', // #CD7925 — warning / acento quente
  coral:   'var(--chart-4)', // #E05759 — danger / negado
  slate:   'var(--chart-5)', // #708090 — em processo / neutro
  primary: 'var(--primary)',
  muted:   'var(--muted-foreground)',
} as const

/**
 * Constrói um ChartConfig do Shadcn a partir de um array de chaves,
 * atribuindo automaticamente as cores da paleta Klini em sequência.
 *
 * @example
 * const cfg = makeChartConfig(['receita', 'custo'], { receita: 'Receita', custo: 'Custo' })
 * // cfg.receita.color = 'var(--chart-1)' (Teal)
 * // cfg.custo.color   = 'var(--chart-2)' (Sea)
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

/**
 * Formata um número de acordo com o locale pt-BR.
 *
 * @example
 * formatValue(1850000, 'currency') // "R$ 1.850.000"
 * formatValue(68.3,    'percent')  // "68,3%"
 * formatValue(12450,   'compact')  // "12,5 mil"
 * formatValue(12450,   'number')   // "12.450"
 */
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
