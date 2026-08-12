import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

export type RequisicaoStatus = 'A' | 'P' | 'T' | 'D' | 'N' | 'Z' | 'E' | 'C' | 'O' | 'R'

interface StatusConfig {
  label: string
  className: string
}

const STATUS_MAP: Record<RequisicaoStatus, StatusConfig> = {
  A: { label: 'Em auditoria',            className: 'bg-klini-slate-50  text-klini-slate-700  border-klini-slate-200'  },
  P: { label: 'Parcialmente autorizado', className: 'bg-klini-sea-50    text-klini-sea-700    border-klini-sea-200'    },
  T: { label: 'Em análise técnica',      className: 'bg-klini-slate-50  text-klini-slate-700  border-klini-slate-200'  },
  D: { label: 'Aguardando documentação', className: 'bg-klini-slate-50  text-klini-slate-700  border-klini-slate-200'  },
  N: { label: 'Negada',                  className: 'bg-klini-coral-50  text-klini-coral-700  border-klini-coral-200'  },
  Z: { label: 'Autorizada',              className: 'bg-klini-teal-50   text-klini-teal-700   border-klini-teal-200'   },
  E: { label: 'Expirada',               className: 'bg-klini-orange-50 text-klini-orange-700 border-klini-orange-200' },
  C: { label: 'Cancelada',              className: 'bg-klini-orange-50 text-klini-orange-700 border-klini-orange-200' },
  O: { label: 'Em cotação de materiais',className: 'bg-klini-slate-50  text-klini-slate-700  border-klini-slate-200'  },
  R: { label: 'Solicitação recebida',   className: 'bg-klini-slate-50  text-klini-slate-700  border-klini-slate-200'  },
}

export interface KliniStatusPillProps {
  status: RequisicaoStatus
  label?: string
  className?: string
}

export function KliniStatusPill({ status, label, className }: KliniStatusPillProps) {
  const config = STATUS_MAP[status]
  return (
    <Badge
      variant="outline"
      className={cn('font-semibold', config.className, className)}
    >
      {label ?? config.label}
    </Badge>
  )
}
