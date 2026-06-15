import * as React from 'react'
import { Area, AreaChart, Line, LineChart, ResponsiveContainer } from 'recharts'
import { KLINI_COLORS } from './klini-chart-config'

export interface KliniSparklineProps {
  data: number[]
  /** 'area' (default) | 'line' */
  variant?: 'area' | 'line'
  color?: string
  width?: number | string
  height?: number
  className?: string
}

export function KliniSparkline({
  data,
  variant = 'area',
  color = KLINI_COLORS.teal,
  width = '100%',
  height = 40,
  className,
}: KliniSparklineProps) {
  const chartData = data.map((v, i) => ({ i, v }))

  if (variant === 'line') {
    return (
      <ResponsiveContainer width={width} height={height} className={className}>
        <LineChart data={chartData} margin={{ top: 2, right: 2, bottom: 2, left: 2 }}>
          <Line
            type="monotone"
            dataKey="v"
            stroke={color}
            strokeWidth={1.5}
            dot={false}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    )
  }

  return (
    <ResponsiveContainer width={width} height={height} className={className}>
      <AreaChart data={chartData} margin={{ top: 2, right: 2, bottom: 2, left: 2 }}>
        <defs>
          <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%"  stopColor={color} stopOpacity={0.3} />
            <stop offset="95%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="v"
          stroke={color}
          strokeWidth={1.5}
          fill="url(#sparkGrad)"
          dot={false}
          isAnimationActive={false}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}
