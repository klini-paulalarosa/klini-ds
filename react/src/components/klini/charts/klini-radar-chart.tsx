import * as React from 'react'
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
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

export interface KliniRadarChartProps {
  /** Each object must have the angleKey field plus all dataKeys */
  data: Record<string, string | number>[]
  /** Keys to render as radar areas */
  dataKeys: string[]
  /** Field for the polar axis labels */
  angleKey: string
  labels?: Record<string, string>
  title?: string
  description?: string
  footer?: React.ReactNode
  format?: 'number' | 'currency' | 'percent' | 'compact'
  height?: number
}

export function KliniRadarChart({
  data,
  dataKeys,
  angleKey,
  labels,
  title,
  description,
  footer,
  format,
  height = 300,
}: KliniRadarChartProps) {
  const chartConfig = makeChartConfig(dataKeys, labels)

  const inner = (
    <ChartContainer config={chartConfig} style={{ height }}>
      <RadarChart data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey={angleKey} />
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
        {dataKeys.map((key, i) => (
          <Radar
            key={key}
            dataKey={key}
            stroke={`var(--color-${key})`}
            fill={`var(--color-${key})`}
            fillOpacity={i === 0 ? 0.25 : 0.1}
          />
        ))}
      </RadarChart>
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
      <CardContent className="pb-2">{inner}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  )
}
