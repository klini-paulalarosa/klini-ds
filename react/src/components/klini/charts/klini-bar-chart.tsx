import * as React from 'react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  LabelList,
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

export interface KliniBarChartProps {
  /** Data array — each object must have the xKey field plus all dataKeys */
  data: Record<string, string | number>[]
  /** Keys to render as bars */
  dataKeys: string[]
  /** Field to use as X axis */
  xKey: string
  /** Human-readable labels for each dataKey */
  labels?: Record<string, string>
  title?: string
  description?: string
  footer?: React.ReactNode
  /** 'grouped' (default) | 'stacked' | 'horizontal' */
  variant?: 'grouped' | 'stacked' | 'horizontal'
  /** Show value labels on top of each bar */
  showLabels?: boolean
  format?: 'number' | 'currency' | 'percent' | 'compact'
  /** Height in px (default 280) */
  height?: number
}

export function KliniBarChart({
  data,
  dataKeys,
  xKey,
  labels,
  title,
  description,
  footer,
  variant = 'grouped',
  showLabels = false,
  format,
  height = 280,
}: KliniBarChartProps) {
  const chartConfig = makeChartConfig(dataKeys, labels)
  const isHorizontal = variant === 'horizontal'
  const isStacked = variant === 'stacked'

  const inner = (
    <ChartContainer config={chartConfig} style={{ height }}>
      <BarChart
        data={data}
        layout={isHorizontal ? 'vertical' : 'horizontal'}
        margin={{ top: showLabels ? 20 : 4, right: 4, bottom: 4, left: 4 }}
      >
        <CartesianGrid
          vertical={isHorizontal}
          horizontal={!isHorizontal}
          strokeDasharray="3 3"
        />
        {isHorizontal ? (
          <>
            <YAxis dataKey={xKey} type="category" tickLine={false} axisLine={false} width={80} />
            <XAxis type="number" tickLine={false} axisLine={false} tickFormatter={(v) => formatValue(v as number, format)} />
          </>
        ) : (
          <>
            <XAxis dataKey={xKey} tickLine={false} axisLine={false} />
            <YAxis tickLine={false} axisLine={false} tickFormatter={(v) => formatValue(v as number, format)} />
          </>
        )}
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
          <Bar
            key={key}
            dataKey={key}
            fill={`var(--color-${key})`}
            stackId={isStacked ? 'stack' : undefined}
            radius={isStacked ? [0, 0, 0, 0] : [4, 4, 0, 0]}
          >
            {showLabels && (
              <LabelList
                position={isHorizontal ? 'right' : 'top'}
                className="fill-foreground"
                fontSize={11}
                formatter={(v: number) => formatValue(v, format)}
              />
            )}
          </Bar>
        ))}
      </BarChart>
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
