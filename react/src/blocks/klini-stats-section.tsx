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
