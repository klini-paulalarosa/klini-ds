import * as React from 'react'
import { TrendingUp, TrendingDown, Minus } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { KliniSparkline } from './charts/klini-sparkline'
import { formatValue, KLINI_COLORS } from './charts/klini-chart-config'
import { cn } from '@/lib/utils'

export interface KliniKpiCardProps {
  title: string
  value: number
  /** Percentage change vs previous period */
  change?: number
  changeLabel?: string
  trend?: 'up' | 'down' | 'neutral'
  /** Tiny sparkline data points */
  sparklineData?: number[]
  icon?: React.ReactNode
  format?: 'number' | 'currency' | 'percent' | 'compact'
  className?: string
  /** Whether an increase is good (default true — teal = up, coral = down) */
  positiveIsGood?: boolean
}

export function KliniKpiCard({
  title,
  value,
  change,
  changeLabel,
  trend,
  sparklineData,
  icon,
  format = 'compact',
  className,
  positiveIsGood = true,
}: KliniKpiCardProps) {
  const derivedTrend = trend ?? (change === undefined ? 'neutral' : change > 0 ? 'up' : change < 0 ? 'down' : 'neutral')
  const isPositive = positiveIsGood ? derivedTrend === 'up' : derivedTrend === 'down'
  const isNegative = positiveIsGood ? derivedTrend === 'down' : derivedTrend === 'up'

  const TrendIcon = derivedTrend === 'up' ? TrendingUp : derivedTrend === 'down' ? TrendingDown : Minus

  return (
    <Card className={cn('relative overflow-hidden', className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        {icon && (
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
            {icon}
          </div>
        )}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{formatValue(value, format)}</div>

        <div className="mt-1 flex items-center gap-2">
          {change !== undefined && (
            <Badge
              variant="outline"
              className={cn(
                'gap-1 text-xs font-medium',
                isPositive && 'border-klini-teal-200 bg-klini-teal-50 text-klini-teal-700',
                isNegative && 'border-destructive/30 bg-destructive/10 text-destructive',
                !isPositive && !isNegative && 'border-muted-foreground/20 text-muted-foreground',
              )}
            >
              <TrendIcon className="h-3 w-3" />
              {Math.abs(change).toFixed(1)}%
            </Badge>
          )}
          {changeLabel && (
            <span className="text-xs text-muted-foreground">{changeLabel}</span>
          )}
        </div>

        {sparklineData && sparklineData.length > 0 && (
          <div className="mt-3">
            <KliniSparkline
              data={sparklineData}
              color={isNegative ? KLINI_COLORS.coral : KLINI_COLORS.teal}
              height={36}
            />
          </div>
        )}
      </CardContent>
    </Card>
  )
}
