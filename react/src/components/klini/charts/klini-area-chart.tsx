import * as React from 'react'
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
} from 'recharts'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { makeChartConfig, KLINI_CHART_PALETTE, formatValue } from './klini-chart-config'

export interface KliniAreaChartProps {
  data: Record<string, string | number>[]
  dataKeys: string[]
  xKey: string
  labels?: Record<string, string>
  title?: string
  description?: string
  footer?: React.ReactNode
  /** Stack areas (default false) */
  stacked?: boolean
  /** Gradient fill opacity 0–1 (default 0.15, set 0 to disable) */
  fillOpacity?: number
  format?: 'number' | 'currency' | 'percent' | 'compact'
  height?: number
}

export function KliniAreaChart({
  data,
  dataKeys,
  xKey,
  labels,
  title,
  description,
  footer,
  stacked = false,
  fillOpacity = 0.15,
  format,
  height = 280,
}: KliniAreaChartProps) {
  const chartConfig = makeChartConfig(dataKeys, labels)

  const inner = (
    <ChartContainer config={chartConfig} style={{ height }}>
      <AreaChart data={data} margin={{ top: 8, right: 8, bottom: 4, left: 4 }}>
        <defs>
          {dataKeys.map((key, i) => (
            <linearGradient key={key} id={`grad-${key}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stopColor={KLINI_CHART_PALETTE[i % KLINI_CHART_PALETTE.length]} stopOpacity={fillOpacity * 4} />
              <stop offset="95%" stopColor={KLINI_CHART_PALETTE[i % KLINI_CHART_PALETTE.length]} stopOpacity={0} />
            </linearGradient>
          ))}
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xKey} tickLine={false} axisLine={false} />
        <YAxis
          tickLine={false}
          axisLine={false}
          tickFormatter={(v) => formatValue(v as number, format)}
        />
        <ChartTooltip
          cursor={false}
          content={
            <ChartTooltipContent
              formatter={(value) => formatValue(value as number, format)}
            />
          }
        />
        {dataKeys.length > 1 && (
          <ChartLegend content={<ChartLegendContent />} />
        )}
        {dataKeys.map((key) => (
          <Area
            key={key}
            type="monotone"
            dataKey={key}
            stroke={`var(--color-${key})`}
            strokeWidth={2}
            fill={fillOpacity > 0 ? `url(#grad-${key})` : 'transparent'}
            stackId={stacked ? 'stack' : undefined}
          />
        ))}
      </AreaChart>
    </ChartContainer>
  )

  if (!title && !description && !footer) return inner

  return (
    <Card>
      {(title || description) && (
        <CardHeader>
          {title && <CardTitle>{title}</CardTitle>}
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      <CardContent className="pb-2">{inner}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  )
}
