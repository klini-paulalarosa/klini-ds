import * as React from 'react'
import {
  RadialBarChart,
  RadialBar,
  PolarGrid,
  PolarAngleAxis,
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
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { makeChartConfig, formatValue, KLINI_CHART_PALETTE } from './klini-chart-config'

export interface KliniRadialChartItem {
  name: string
  value: number
  fill?: string
}

export interface KliniRadialGauge {
  /** Valor atual */
  value: number
  /** Máximo do gauge (default 100) */
  max?: number
  /** Label centralizado abaixo do valor */
  label?: string
  /** Thresholds para colorização automática */
  thresholds?: {
    /** Abaixo = teal (ok); acima = orange; acima de danger = coral */
    warning: number
    danger: number
    /** Inverte: acima de warning = orange (ex: sinistralidade) */
    higherIsBad?: boolean
  }
}

export interface KliniRadialChartProps {
  /** Dados para gráfico radial multi-bar */
  data?: KliniRadialChartItem[]
  title?: string
  description?: string
  footer?: React.ReactNode
  format?: 'number' | 'currency' | 'percent' | 'compact'
  height?: number
  /** Modo gauge: barra única com valor centralizado */
  gauge?: KliniRadialGauge
}

function gaugeColor(gauge: KliniRadialGauge): string {
  if (!gauge.thresholds) return KLINI_CHART_PALETTE[0]
  const { value, thresholds } = gauge
  const { warning, danger, higherIsBad = true } = thresholds
  if (higherIsBad) {
    if (value >= danger) return KLINI_CHART_PALETTE[3]   // Coral
    if (value >= warning) return KLINI_CHART_PALETTE[2]  // Orange
    return KLINI_CHART_PALETTE[0]                        // Teal
  }
  if (value <= danger) return KLINI_CHART_PALETTE[3]
  if (value <= warning) return KLINI_CHART_PALETTE[2]
  return KLINI_CHART_PALETTE[0]
}

export function KliniRadialChart({
  data,
  title,
  description,
  footer,
  format,
  height = 240,
  gauge,
}: KliniRadialChartProps) {
  const isGaugeMode = !!gauge
  const max = gauge?.max ?? 100

  const chartData: KliniRadialChartItem[] = isGaugeMode
    ? [{ name: gauge.label ?? 'value', value: gauge.value, fill: gaugeColor(gauge) }]
    : (data ?? []).map((d, i) => ({ ...d, fill: d.fill ?? KLINI_CHART_PALETTE[i % KLINI_CHART_PALETTE.length] }))

  const config = makeChartConfig(chartData.map(d => d.name))

  const displayValue = isGaugeMode
    ? format === 'percent'
      ? `${gauge.value}%`
      : formatValue(gauge.value, format)
    : null

  return (
    <Card>
      {(title || description) && (
        <CardHeader className="pb-0">
          {title && <CardTitle>{title}</CardTitle>}
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      <CardContent className="flex flex-1 items-center pb-0">
        <div className="relative w-full" style={{ height }}>
          <ChartContainer config={config} className="h-full w-full">
            <RadialBarChart
              data={chartData}
              startAngle={isGaugeMode ? 180 : 0}
              endAngle={isGaugeMode ? Math.round(180 - (gauge!.value / max) * 180) : 360}
              innerRadius="60%"
              outerRadius="90%"
            >
              <PolarGrid
                gridType="circle"
                radialLines={false}
                stroke="none"
                className="first:fill-muted last:fill-background"
              />
              <PolarAngleAxis
                type="number"
                domain={[0, max]}
                angleAxisId={0}
                tick={false}
              />
              <RadialBar
                dataKey="value"
                background={{ fill: 'var(--muted)' }}
                cornerRadius={4}
              />
              {!isGaugeMode && (
                <ChartTooltip
                  cursor={false}
                  content={
                    <ChartTooltipContent
                      hideLabel
                      formatter={(v) => formatValue(v as number, format)}
                    />
                  }
                />
              )}
            </RadialBarChart>
          </ChartContainer>

          {isGaugeMode && displayValue && (
            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-0.5">
              <span className="text-4xl font-bold tabular-nums leading-none text-foreground">
                {displayValue}
              </span>
              {gauge.label && (
                <span className="text-sm text-muted-foreground">{gauge.label}</span>
              )}
            </div>
          )}
        </div>
      </CardContent>
      {footer && <CardFooter className="flex-col gap-1 text-sm">{footer}</CardFooter>}
    </Card>
  )
}
