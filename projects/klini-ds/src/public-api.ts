// =============================================================================
// @klini/ds — Public API
// Tudo que os projetos consumidores podem importar
// =============================================================================

// ── Theme ────────────────────────────────────────────────────────────────────
export { KliniPrime } from './lib/theme/klini-prime';

// ── Module (conveniência para projetos NgModule) ──────────────────────────────
export { KliniDsModule } from './lib/klini-ds.module';

// ── Components ───────────────────────────────────────────────────────────────

// Button — wrapper p-button
export { ButtonComponent } from './lib/components/button/button.component';
export type { KliniButtonSeverity, KliniButtonSize, KliniButtonVariant }
  from './lib/components/button/button.component';

// StatusPill — componente de domínio Klini (usa p-tag)
export { StatusPillComponent } from './lib/components/status-pill/status-pill.component';
export type { StatusPillValue } from './lib/components/status-pill/status-pill.component';

// Tag — wrapper p-tag
export { TagComponent } from './lib/components/tag/tag.component';
export type { KliniTagSeverity } from './lib/components/tag/tag.component';

// Badge — wrapper p-badge
export { BadgeComponent } from './lib/components/badge/badge.component';
export type { KliniBadgeSeverity } from './lib/components/badge/badge.component';

// Chip — wrapper p-chip
export { ChipComponent } from './lib/components/chip/chip.component';

// KPI Card — wrapper p-card com layout Klini
export { KpiCardComponent } from './lib/components/kpi-card/kpi-card.component';
export type { KpiTrend } from './lib/components/kpi-card/kpi-card.component';

// Toast — wrapper p-toast + KliniToastService
export { ToastComponent, KliniToastService } from './lib/components/toast/toast.component';
export type { KliniToastSeverity, KliniToastMessage, KliniToastPosition } from './lib/components/toast/toast.component';

// Stepper — wrapper p-stepper
export { StepperComponent } from './lib/components/stepper/stepper.component';
export type { KliniStep } from './lib/components/stepper/stepper.component';

// Drawer — wrapper p-drawer
export { DrawerComponent } from './lib/components/drawer/drawer.component';
export type { KliniDrawerPosition } from './lib/components/drawer/drawer.component';

// InputText — wrapper pInputText + p-floatlabel com CVA
export { InputTextComponent } from './lib/components/input-text/input-text.component';
export type { KliniInputSize } from './lib/components/input-text/input-text.component';

// Calendar — wrapper p-datepicker com CVA
export { CalendarComponent } from './lib/components/calendar/calendar.component';
