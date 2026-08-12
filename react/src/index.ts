/* ─────────────────────────────────────────────────────────────────────────────
   @klini-saude/ds-react  v1.x
   React 18 + Shadcn/UI + Tailwind CSS — Klini Design System

   Two layers:
     1. Shadcn/UI primitives  (accordion → tooltip) — low-level building blocks
     2. Klini components      (KliniBarChart, KliniKpiCard, KliniDataTable…)

   Usage:
     import { Button, Card, KliniBarChart, KliniKpiCard } from '@klini-saude/ds-react'
     import '@klini-saude/ds-react/styles'
   ───────────────────────────────────────────────────────────────────────────── */

/* Utilities */
export { cn } from './lib/utils'

/* ── Klini brand components ───────────────────────────────────────────────── */
export * from './components/klini'

/* ── Klini blocks (layout shells + page templates) ───────────────────────── */
export * from './blocks'

/* Components */
export * from './components/ui/accordion'
export * from './components/ui/alert'
export * from './components/ui/alert-dialog'
export * from './components/ui/aspect-ratio'
export * from './components/ui/avatar'
export * from './components/ui/avatar-group'
export * from './components/ui/badge'
export * from './components/ui/breadcrumb'
export * from './components/ui/button'
export * from './components/ui/calendar'
export * from './components/ui/card'
export * from './components/ui/carousel'
export * from './components/ui/chart'
export * from './components/ui/checkbox'
export * from './components/ui/chip'
export * from './components/ui/collapsible'
export * from './components/ui/command'
export * from './components/ui/context-menu'
export * from './components/ui/dialog'
export * from './components/ui/divider'
export * from './components/ui/drawer'
export * from './components/ui/dropdown-menu'
export * from './components/ui/fieldset'
export * from './components/ui/float-label'
export * from './components/ui/form'
export * from './components/ui/hover-card'
export * from './components/ui/icon-field'
export * from './components/ui/ifta-label'
export * from './components/ui/input'
export * from './components/ui/input-group'
export * from './components/ui/input-number'
export * from './components/ui/input-otp'
export * from './components/ui/label'
export * from './components/ui/menubar'
export * from './components/ui/message'
export * from './components/ui/messages'
export * from './components/ui/navigation-menu'
export * from './components/ui/overlay-badge'
export * from './components/ui/pagination'
export * from './components/ui/panel'
export * from './components/ui/popover'
export * from './components/ui/progress'
export * from './components/ui/radio-group'
export * from './components/ui/rating'
export * from './components/ui/resizable'
export * from './components/ui/scroll-area'
export * from './components/ui/select'
export * from './components/ui/separator'
export * from './components/ui/sheet'
export * from './components/ui/sidebar'
export * from './components/ui/skeleton'
export * from './components/ui/slider'
export { Toaster as Sonner } from './components/ui/sonner'
export * from './components/ui/switch'
export * from './components/ui/table'
export * from './components/ui/tabs'
export * from './components/ui/textarea'
export * from './components/ui/timeline'
export * from './components/ui/toast'
export * from './components/ui/toaster'
export * from './components/ui/toggle'
export * from './components/ui/toggle-group'
export * from './components/ui/tooltip'

/* Hooks */
export { useToast } from './hooks/use-toast'
export { useIsMobile } from './hooks/use-mobile'
