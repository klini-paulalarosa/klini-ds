import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { CalendarIcon } from 'lucide-react'
import type { DateRange } from 'react-day-picker'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'

export interface KliniDatePickerProps {
  value?: Date
  onChange?: (date: Date | undefined) => void
  placeholder?: string
  disabled?: boolean
  className?: string
  /** Data mínima selecionável */
  minDate?: Date
  /** Data máxima selecionável */
  maxDate?: Date
  /** Formato de exibição (date-fns) — default "dd/MM/yyyy" */
  displayFormat?: string
}

export function KliniDatePicker({
  value,
  onChange,
  placeholder = 'Selecione uma data',
  disabled,
  className,
  minDate,
  maxDate,
  displayFormat = 'dd/MM/yyyy',
}: KliniDatePickerProps) {
  const isDateDisabled = (date: Date) => {
    if (minDate && date < minDate) return true
    if (maxDate && date > maxDate) return true
    return false
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          disabled={disabled}
          className={cn(
            'w-full justify-start text-left font-normal',
            !value && 'text-muted-foreground',
            className,
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {value ? format(value, displayFormat, { locale: ptBR }) : placeholder}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={value}
          onSelect={onChange}
          autoFocus
          disabled={isDateDisabled}
          locale={ptBR}
        />
      </PopoverContent>
    </Popover>
  )
}

export type { DateRange as KliniDateRange }

export interface KliniDateRangePickerProps {
  value?: DateRange
  onChange?: (range: DateRange | undefined) => void
  placeholder?: string
  disabled?: boolean
  className?: string
  minDate?: Date
  maxDate?: Date
  displayFormat?: string
  numberOfMonths?: 1 | 2
}

export function KliniDateRangePicker({
  value,
  onChange,
  placeholder = 'Selecione o período',
  disabled,
  className,
  minDate,
  maxDate,
  displayFormat = 'dd/MM/yyyy',
  numberOfMonths = 2,
}: KliniDateRangePickerProps) {
  const isDateDisabled = (date: Date) => {
    if (minDate && date < minDate) return true
    if (maxDate && date > maxDate) return true
    return false
  }

  const label = value?.from
    ? value.to
      ? `${format(value.from, displayFormat, { locale: ptBR })} – ${format(value.to, displayFormat, { locale: ptBR })}`
      : format(value.from, displayFormat, { locale: ptBR })
    : placeholder

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          disabled={disabled}
          className={cn(
            'w-full justify-start text-left font-normal',
            !value?.from && 'text-muted-foreground',
            className,
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {label}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="range"
          selected={value}
          onSelect={onChange}
          autoFocus
          disabled={isDateDisabled}
          locale={ptBR}
          numberOfMonths={numberOfMonths}
        />
      </PopoverContent>
    </Popover>
  )
}
