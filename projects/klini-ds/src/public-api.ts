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

export { KliniChartTokens } from './lib/components/chart/chart.tokens';
export { KliniChartPresets, getChartPreset } from './lib/components/chart/chart.presets';
export type { KliniChartPreset } from './lib/components/chart/chart.presets';

export { KliniKnobComponent } from './lib/components/knob/knob.component';

export { KliniMeterGroupComponent } from './lib/components/meter-group/meter-group.component';

export { KliniSliderComponent } from './lib/components/slider/slider.component';

export { KliniSelectComponent } from './lib/components/select/select.component';
export type { KliniSelectOption } from './lib/components/select/select.component';

// ── Tooltip (diretiva PrimeNG — use pTooltip diretamente) ────────────────────
// import { TooltipModule } from 'primeng/tooltip';
// <button pTooltip="Texto" tooltipPosition="top">...</button>

// ── Components v0.4 ──────────────────────────────────────────────────────────

export { KliniCheckboxComponent } from './lib/components/checkbox/checkbox.component';

export { KliniFloatLabelComponent } from './lib/components/float-label/float-label.component';

export { KliniMultiSelectComponent } from './lib/components/multiselect/multiselect.component';

export { KliniAutoCompleteComponent } from './lib/components/autocomplete/autocomplete.component';

export { KliniInputMaskComponent } from './lib/components/input-mask/input-mask.component';

export { KliniRatingComponent } from './lib/components/rating/rating.component';

export { KliniSelectButtonComponent } from './lib/components/select-button/select-button.component';

export { KliniListboxComponent } from './lib/components/listbox/listbox.component';

export { KliniTreeSelectComponent } from './lib/components/tree-select/tree-select.component';

export { KliniCascadeSelectComponent } from './lib/components/cascade-select/cascade-select.component';

export { KliniInputGroupComponent } from './lib/components/input-group/input-group.component';

export { KliniButtonGroupComponent } from './lib/components/button-group/button-group.component';

export { KliniToolbarComponent } from './lib/components/toolbar/toolbar.component';

export { KliniPanelComponent } from './lib/components/panel/panel.component';

export { KliniFieldsetComponent } from './lib/components/fieldset/fieldset.component';

export { KliniSplitterComponent } from './lib/components/splitter/splitter.component';

export { KliniScrollPanelComponent } from './lib/components/scroll-panel/scroll-panel.component';

export { KliniImageComponent } from './lib/components/image/image.component';

export { KliniAvatarGroupComponent } from './lib/components/avatar-group/avatar-group.component';

export { KliniMessagesComponent } from './lib/components/messages/messages.component';

export { KliniPopoverComponent } from './lib/components/popover/popover.component';

export { KliniSpeedDialComponent } from './lib/components/speed-dial/speed-dial.component';

export { KliniProgressSpinnerComponent } from './lib/components/progress-spinner/progress-spinner.component';

export { KliniMenubarComponent } from './lib/components/menubar/menubar.component';

export { KliniTabMenuComponent } from './lib/components/tab-menu/tab-menu.component';

export { KliniStepsComponent } from './lib/components/steps/steps.component';

export { KliniSplitButtonComponent } from './lib/components/split-button/split-button.component';

export { KliniTimelineComponent } from './lib/components/timeline/timeline.component';
export type { KliniTimelineEvent } from './lib/components/timeline/timeline.component';

export { KliniDataViewComponent } from './lib/components/dataview/dataview.component';

export { KliniCarouselComponent } from './lib/components/carousel/carousel.component';

export { KliniTreeComponent } from './lib/components/tree/tree.component';

export { KliniOrderListComponent } from './lib/components/order-list/order-list.component';

export { KliniVirtualScrollerComponent } from './lib/components/virtual-scroller/virtual-scroller.component';

