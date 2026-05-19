// =============================================================================
// @klini/ds — Public API
// Tudo que os projetos consumidores podem importar
// =============================================================================

// ── Theme ────────────────────────────────────────────────────────────────────
export { KliniPrime } from './lib/theme/klini-prime';

// ── Module (conveniência para projetos NgModule) ──────────────────────────────
export { KliniDsModule } from './lib/klini-ds.module';

// ── Components v0.1 ──────────────────────────────────────────────────────────

export { ButtonComponent } from './lib/components/button/button.component';
export type { KliniButtonSeverity, KliniButtonSize, KliniButtonVariant }
  from './lib/components/button/button.component';

export { StatusPillComponent } from './lib/components/status-pill/status-pill.component';
export type { StatusPillValue } from './lib/components/status-pill/status-pill.component';

export { TagComponent } from './lib/components/tag/tag.component';
export type { KliniTagSeverity } from './lib/components/tag/tag.component';

export { BadgeComponent } from './lib/components/badge/badge.component';
export type { KliniBadgeSeverity, KliniBadgeSize } from './lib/components/badge/badge.component';

export { ChipComponent } from './lib/components/chip/chip.component';

export { KpiCardComponent } from './lib/components/kpi-card/kpi-card.component';
export type { KpiTrend } from './lib/components/kpi-card/kpi-card.component';

export { ToastComponent, KliniToastService } from './lib/components/toast/toast.component';
export type { KliniToastSeverity, KliniToastMessage, KliniToastPosition }
  from './lib/components/toast/toast.component';

export { StepperComponent } from './lib/components/stepper/stepper.component';
export type { KliniStep } from './lib/components/stepper/stepper.component';

export { DrawerComponent } from './lib/components/drawer/drawer.component';
export type { KliniDrawerPosition } from './lib/components/drawer/drawer.component';

export { InputTextComponent } from './lib/components/input-text/input-text.component';
export type { KliniInputSize } from './lib/components/input-text/input-text.component';

export { CalendarComponent } from './lib/components/calendar/calendar.component';

export { MessageComponent } from './lib/components/message/message.component';
export type { KliniMessageSeverity } from './lib/components/message/message.component';

export { CardComponent } from './lib/components/card/card.component';

export { DividerComponent } from './lib/components/divider/divider.component';
export type { KliniDividerType, KliniDividerLayout, KliniDividerAlign }
  from './lib/components/divider/divider.component';

// ── Components v0.2 ──────────────────────────────────────────────────────────

export { KliniRadioGroupComponent } from './lib/components/radiobutton/radio-group.component';
export type { KliniRadioOption } from './lib/components/radiobutton/radio-group.component';

export { KliniTabsComponent } from './lib/components/tabs/tabs.component';

export { KliniMenuComponent } from './lib/components/menu/menu.component';

export { KliniTableComponent } from './lib/components/table/table.component';
export type { KliniTableColumn } from './lib/components/table/table.component';

export { KliniDialogComponent } from './lib/components/dialog/dialog.component';

export { KliniToggleComponent } from './lib/components/toggle/toggle.component';

export { KliniAccordionComponent } from './lib/components/accordion/accordion.component';
export type { KliniAccordionItem } from './lib/components/accordion/accordion.component';

export { KliniAvatarComponent } from './lib/components/avatar/avatar.component';

export { KliniSkeletonComponent } from './lib/components/skeleton/skeleton.component';

export { KliniProgressBarComponent } from './lib/components/progress-bar/progress-bar.component';

export { KliniTextareaComponent } from './lib/components/textarea/textarea.component';

export { KliniPasswordComponent } from './lib/components/password/password.component';

export { KliniInputNumberComponent } from './lib/components/input-number/input-number.component';

export { KliniPaginatorComponent } from './lib/components/paginator/paginator.component';

export { KliniConfirmDialogComponent, KliniConfirmService }
  from './lib/components/confirm-dialog/confirm-dialog.component';

export { KliniFileUploadComponent } from './lib/components/file-upload/file-upload.component';

export { KliniBreadcrumbComponent } from './lib/components/breadcrumb/breadcrumb.component';

export { KliniEmptyStateComponent } from './lib/components/empty-state/empty-state.component';

// ── Components v0.3 — Data Visualization ─────────────────────────────────────

export { KliniChartComponent } from './lib/components/chart/chart.component';
export type { KliniChartType } from './lib/components/chart/chart.component';

export { KliniKnobComponent } from './lib/components/knob/knob.component';

export { KliniMeterGroupComponent } from './lib/components/meter-group/meter-group.component';

export { KliniSliderComponent } from './lib/components/slider/slider.component';

export { KliniSelectComponent } from './lib/components/select/select.component';
export type { KliniSelectOption } from './lib/components/select/select.component';

// ── Tooltip (diretiva PrimeNG — use pTooltip diretamente) ────────────────────
// import { TooltipModule } from 'primeng/tooltip';
// <button pTooltip="Texto" tooltipPosition="top">...</button>
