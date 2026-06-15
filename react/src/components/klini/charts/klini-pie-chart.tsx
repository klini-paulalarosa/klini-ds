import * as React from 'react'
import { Cell, Pie, PieChart, Sector } from 'recharts'
import type { PieSectorDataItem } from 'recharts/types/polar/Pie'
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

export interface KliniPieSlice {
  name: string
  value: number
  color?: string
}

export interface KliniPieChartProps {
  data: KliniPieSlice[]
  title?: string
  description?: string
  footer?: React.ReactNode
  /** Donut mode with center label */
  donut?: boolean
  /** Center label when donut=true */
  centerLabel?: React.ReactNode
  format?: 'number' | 'currency' | 'percent' | 'compact'
  showLegend?: boolean
  height?: number
}

export function KliniPieChart({
  data,
  title,
  description,
  footer,
  donut = false,
  centerLabel,
  format,
  showLegend = true,
  height = 280,
}: KliniPieChartProps) {
  const [activeIndex, setActiveIndex] = React.useState<number | undefined>()

  const chartConfig = makeChartConfig(
    data.map((d) => d.name),
    Object.fromEntries(data.map((d) => [d.name, d.name])),
  )

  const inner = (
    <ChartContainer config={chartConfig} style={{ height }}>
      <PieChart>
        <ChartTooltip
          content={
            <ChartTooltipContent
              nameKey="name"
              formatter={(value) => formatValue(value as number, format)}
            />
          }
        />
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={donut ? '80%' : '75%'}
          innerRadius={donut ? '55%' : 0}
          strokeWidth={2}
          activeIndex={activeIndex}
          onMouseEnter={(_, index) => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(undefined)}
          activeShape={({ outerRadius = 0, ...props }: PieSectorDataItem) => (
            <Sector {...props} outerRadius={outerRadius + 6} />
          )}
        >
          {data.map((entry, index) => (
            <Cell
              key={entry.name}
              fill={entry.color ?? KLINI_CHART_PALETTE[index % KLINI_CHART_PALETTE.length]}
            />
          ))}
        </Pie>
        {showLegend && <ChartLegend content={<ChartLegendContent nameKey="name" />} />}
      </PieChart>
    </ChartContainer>
  )

  if (!title && !description && !footer) return inner

  return (
    <Card>
      {(title || description) && (
        <CardHeader className="items-center pb-0">
          {title && <CardTitle>{title}</CardTitle>}
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      <CardContent className="relative pb-2">
        {inner}
        {donut && centerLabel && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            {centerLabel}
          </div>
        )}
      </CardContent>
      {footer && <CardFooter className="flex-col gap-2 text-sm">{footer}</CardFooter>}
    </Card>
  )
}
