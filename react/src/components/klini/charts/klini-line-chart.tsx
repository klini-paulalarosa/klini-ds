import * as React from 'react'
import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
  ReferenceLine,
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
import { makeChartConfig, formatValue } from './klini-chart-config'

export interface KliniLineChartProps {
  data: Record<string, string | number>[]
  dataKeys: string[]
  xKey: string
  labels?: Record<string, string>
  title?: string
  description?: string
  footer?: React.ReactNode
  /** 'linear' (default) | 'monotone' | 'step' */
  curveType?: 'linear' | 'monotone' | 'step'
  /** Show dots on data points */
  showDots?: boolean
  format?: 'number' | 'currency' | 'percent' | 'compact'
  /** Optional horizontal reference line (e.g., target/goal) */
  referenceLine?: { value: number; label?: string }
  height?: number
}

export function KliniLineChart({
  data,
  dataKeys,
  xKey,
  labels,
  title,
  description,
  footer,
  curveType = 'monotone',
  showDots = true,
  format,
  referenceLine,
  height = 280,
}: KliniLineChartProps) {
  const chartConfig = makeChartConfig(dataKeys, labels)

  const inner = (
    <ChartContainer config={chartConfig} style={{ height }}>
      <LineChart data={data} margin={{ top: 8, right: 8, bottom: 4, left: 4 }}>
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
        {referenceLine && (
          <ReferenceLine
            y={referenceLine.value}
            stroke="hsl(var(--muted-foreground))"
            strokeDasharray="4 4"
            label={{ value: referenceLine.label, position: 'right', fontSize: 11 }}
          />
        )}
        {dataKeys.map((key) => (
          <Line
            key={key}
            type={curveType}
            dataKey={key}
            stroke={`var(--color-${key})`}
            strokeWidth={2}
            dot={showDots ? { r: 3, strokeWidth: 2 } : false}
            activeDot={{ r: 5 }}
          />
        ))}
      </LineChart>
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
