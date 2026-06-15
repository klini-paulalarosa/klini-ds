import type { LucideIcon } from 'lucide-react'
import { KliniKpiCard } from '@/components/klini/klini-kpi-card'
import { cn } from '@/lib/utils'

export interface KliniStatItem {
  title: string
  value: number
  change?: number
  changeLabel?: string
  trend?: 'up' | 'down' | 'neutral'
  sparklineData?: number[]
  icon?: LucideIcon
  format?: 'number' | 'currency' | 'percent' | 'compact'
  positiveIsGood?: boolean
}

export interface KliniStatsSectionProps {
  stats: KliniStatItem[]
  columns?: 2 | 3 | 4
  className?: string
}

/**
 * KliniStatsSection — grid de KPI cards para cabeçalho de dashboard.
 *
 * Responsivo: 1 col (mobile) → 2 (sm) → configurável (lg).
 * Aceita de 2 a 8 métricas.
 *
 * @example
 * <KliniStatsSection
 *   columns={4}
 *   stats={[
 *     { title: 'Vidas ativas', value: 12450, change: 3.2, format: 'compact', sparklineData: [...] },
 *     { title: 'Sinistralidade', value: 68.3, change: 2.1, format: 'percent', positiveIsGood: false },
 *     { title: 'Receita', value: 1850000, change: -1.8, format: 'currency' },
 *     { title: 'NPS', value: 72, change: 5, format: 'number' },
 *   ]}
 * />
 */
export function KliniStatsSection({ stats, columns = 4, className }: KliniStatsSectionProps) {
  const gridClass = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  }[columns]

  return (
    <div className={cn('grid gap-4', gridClass, className)}>
      {stats.map((stat, i) => (
        <KliniKpiCard
          key={i}
          title={stat.title}
          value={stat.value}
          change={stat.change}
          changeLabel={stat.changeLabel}
          trend={stat.trend}
          sparklineData={stat.sparklineData}
          icon={stat.icon ? <stat.icon className="h-5 w-5" /> : undefined}
          format={stat.format}
          positiveIsGood={stat.positiveIsGood}
        />
      ))}
    </div>
  )
}
