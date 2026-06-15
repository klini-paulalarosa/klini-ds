import * as React from 'react'
import { KliniStatsSection, type KliniStatItem } from './klini-stats-section'
import { KliniBarChart } from '@/components/klini/charts/klini-bar-chart'
import { KliniAreaChart } from '@/components/klini/charts/klini-area-chart'
import { KliniPieChart } from '@/components/klini/charts/klini-pie-chart'
import { KliniDataTable } from '@/components/klini/klini-data-table'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { type ColumnDef } from '@tanstack/react-table'
import { cn } from '@/lib/utils'

export interface KliniDashboardSection {
  id: string
  type: 'stats' | 'bar' | 'area' | 'pie' | 'table' | 'custom'
  title?: string
  description?: string
  colSpan?: 1 | 2 | 3
}

export interface KliniStatsDashboardSection extends KliniDashboardSection {
  type: 'stats'
  stats: KliniStatItem[]
  columns?: 2 | 3 | 4
}

export interface KliniBarDashboardSection extends KliniDashboardSection {
  type: 'bar'
  data: Record<string, string | number>[]
  dataKeys: string[]
  xKey: string
  labels?: Record<string, string>
  variant?: 'grouped' | 'stacked' | 'horizontal'
  format?: 'number' | 'currency' | 'percent' | 'compact'
  height?: number
}

export interface KliniAreaDashboardSection extends KliniDashboardSection {
  type: 'area'
  data: Record<string, string | number>[]
  dataKeys: string[]
  xKey: string
  labels?: Record<string, string>
  stacked?: boolean
  format?: 'number' | 'currency' | 'percent' | 'compact'
  height?: number
}

export interface KliniPieDashboardSection extends KliniDashboardSection {
  type: 'pie'
  data: Array<{ name: string; value: number; color?: string }>
  donut?: boolean
  centerLabel?: React.ReactNode
  showLegend?: boolean
}

export interface KliniTableDashboardSection<T = Record<string, unknown>> extends KliniDashboardSection {
  type: 'table'
  columns: ColumnDef<T>[]
  data: T[]
  filterColumn?: string
  filterPlaceholder?: string
}

export interface KliniCustomDashboardSection extends KliniDashboardSection {
  type: 'custom'
  content: React.ReactNode
}

export type KliniDashboardSectionConfig =
  | KliniStatsDashboardSection
  | KliniBarDashboardSection
  | KliniAreaDashboardSection
  | KliniPieDashboardSection
  | KliniTableDashboardSection
  | KliniCustomDashboardSection

export interface KliniDashboardPageProps {
  sections: KliniDashboardSectionConfig[]
  className?: string
}

/**
 * KliniDashboardPage — composição declarativa de seções de dashboard.
 *
 * Cada seção é configurada via um objeto typed. O layout usa um grid de 3
 * colunas com suporte a colSpan. Ideal para portais de operadoras, brokers
 * e beneficiários.
 *
 * @example
 * <KliniDashboardPage
 *   sections={[
 *     { id: 'stats', type: 'stats', stats: kpiData, columns: 4 },
 *     { id: 'trend', type: 'area', title: 'Evolução Mensal', data: trendData,
 *       dataKeys: ['receita', 'sinistros'], xKey: 'mes', colSpan: 2 },
 *     { id: 'mix', type: 'pie', title: 'Mix de Procedimentos', data: mixData, donut: true },
 *   ]}
 * />
 */
export function KliniDashboardPage({ sections, className }: KliniDashboardPageProps) {
  return (
    <div className={cn('flex flex-col gap-6', className)}>
      {sections.map((section) => (
        <KliniDashboardSectionRenderer key={section.id} section={section} />
      ))}
    </div>
  )
}

function KliniDashboardSectionRenderer({ section }: { section: KliniDashboardSectionConfig }) {
  if (section.type === 'stats') {
    return (
      <KliniStatsSection
        stats={section.stats}
        columns={section.columns}
      />
    )
  }

  if (section.type === 'custom') {
    return <>{section.content}</>
  }

  const colClass = {
    1: '',
    2: 'lg:col-span-2',
    3: 'lg:col-span-3',
  }[section.colSpan ?? 1]

  const inner = (
    <>
      {section.type === 'bar' && (
        <KliniBarChart
          data={section.data}
          dataKeys={section.dataKeys}
          xKey={section.xKey}
          labels={section.labels}
          variant={section.variant}
          format={section.format}
          title={section.title}
          description={section.description}
          height={section.height}
        />
      )}
      {section.type === 'area' && (
        <KliniAreaChart
          data={section.data}
          dataKeys={section.dataKeys}
          xKey={section.xKey}
          labels={section.labels}
          stacked={section.stacked}
          format={section.format}
          title={section.title}
          description={section.description}
          height={section.height}
        />
      )}
      {section.type === 'pie' && (
        <KliniPieChart
          data={section.data}
          donut={section.donut}
          centerLabel={section.centerLabel}
          showLegend={section.showLegend}
          title={section.title}
          description={section.description}
        />
      )}
      {section.type === 'table' && (
        <Card>
          {(section.title || section.description) && (
            <CardHeader>
              {section.title && <CardTitle>{section.title}</CardTitle>}
              {section.description && <CardDescription>{section.description}</CardDescription>}
            </CardHeader>
          )}
          <CardContent>
            <KliniDataTable
              columns={section.columns as ColumnDef<Record<string, unknown>>[]}
              data={section.data as Record<string, unknown>[]}
              filterColumn={section.filterColumn}
              filterPlaceholder={section.filterPlaceholder}
            />
          </CardContent>
        </Card>
      )}
    </>
  )

  return <div className={cn(colClass)}>{inner}</div>
}
