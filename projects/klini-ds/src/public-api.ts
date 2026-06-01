// =============================================================================
// @klini-saude/ds — Public API
// Tudo que os projetos consumidores podem importar
// =============================================================================

// ── Theme ────────────────────────────────────────────────────────────────────
export { KlnPrime } from './lib/theme/klini-prime';

// ── Directives & Utilities (re-exports PrimeNG) ───────────────────────────────
// Diretivas de comportamento — sem visual próprio, modificam componentes existentes.
// Ver JSDoc em src/lib/directives/index.ts para exemplos completos.
export {
  KeyFilter, KeyFilterModule,
  AutoFocus, AutoFocusModule,
  Ripple, RippleModule,
  StyleClass, StyleClassModule,
  AnimateOnScroll, AnimateOnScrollModule,
  DialogService, DynamicDialogRef, DynamicDialogConfig,
} from './lib/directives/index';

// ── Module (conveniência para projetos NgModule) ──────────────────────────────
export { KlnDsModule } from './lib/klini-ds.module';

// ── Components v0.1 ──────────────────────────────────────────────────────────

export { ButtonComponent } from './lib/components/button/button.component';
export type { KlnButtonSeverity, KlnButtonSize, KlnButtonVariant }
  from './lib/components/button/button.component';

export { StatusPillComponent } from './lib/components/status-pill/status-pill.component';
export type { StatusPillValue } from './lib/components/status-pill/status-pill.component';

export { TagComponent } from './lib/components/tag/tag.component';
export type { KlnTagSeverity } from './lib/components/tag/tag.component';

export { BadgeComponent } from './lib/components/badge/badge.component';
export type { KlnBadgeSeverity, KlnBadgeSize } from './lib/components/badge/badge.component';

export { ChipComponent } from './lib/components/chip/chip.component';

export { KpiCardComponent } from './lib/components/kpi-card/kpi-card.component';
export type { KpiTrend } from './lib/components/kpi-card/kpi-card.component';

export { ToastComponent, KlnToastService } from './lib/components/toast/toast.component';
export type { KlnToastSeverity, KlnToastMessage, KlnToastPosition }
  from './lib/components/toast/toast.component';

export { StepperComponent } from './lib/components/stepper/stepper.component';
export type { KlnStep } from './lib/components/stepper/stepper.component';

export { DrawerComponent } from './lib/components/drawer/drawer.component';
export type { KlnDrawerPosition } from './lib/components/drawer/drawer.component';

export { InputTextComponent } from './lib/components/input-text/input-text.component';
export type { KlnInputSize } from './lib/components/input-text/input-text.component';

export { CalendarComponent } from './lib/components/calendar/calendar.component';

export { MessageComponent } from './lib/components/message/message.component';
export type { KlnMessageSeverity } from './lib/components/message/message.component';

export { CardComponent } from './lib/components/card/card.component';

export { DividerComponent } from './lib/components/divider/divider.component';
export type { KlnDividerType, KlnDividerLayout, KlnDividerAlign }
  from './lib/components/divider/divider.component';

// ── Components v0.2 ──────────────────────────────────────────────────────────

export { KlnRadioGroupComponent } from './lib/components/radiobutton/radio-group.component';
export type { KlnRadioOption } from './lib/components/radiobutton/radio-group.component';

export { KlnTabsComponent } from './lib/components/tabs/tabs.component';

export { KlnMenuComponent } from './lib/components/menu/menu.component';

export { KlnTableComponent } from './lib/components/table/table.component';
export type { KlnTableColumn } from './lib/components/table/table.component';

export { KlnDialogComponent } from './lib/components/dialog/dialog.component';

export { KlnToggleComponent } from './lib/components/toggle/toggle.component';

export { KlnAccordionComponent } from './lib/components/accordion/accordion.component';
export type { KlnAccordionItem } from './lib/components/accordion/accordion.component';

export { KlnAvatarComponent } from './lib/components/avatar/avatar.component';

export { KlnSkeletonComponent } from './lib/components/skeleton/skeleton.component';

export { KlnProgressBarComponent } from './lib/components/progress-bar/progress-bar.component';

export { KlnTextareaComponent } from './lib/components/textarea/textarea.component';

export { KlnPasswordComponent } from './lib/components/password/password.component';

export { KlnInputNumberComponent } from './lib/components/input-number/input-number.component';

export { KlnPaginatorComponent } from './lib/components/paginator/paginator.component';

export { KlnConfirmDialogComponent, KlnConfirmService }
  from './lib/components/confirm-dialog/confirm-dialog.component';

export { KlnFileUploadComponent } from './lib/components/file-upload/file-upload.component';

export { KlnBreadcrumbComponent } from './lib/components/breadcrumb/breadcrumb.component';

export { KlnEmptyStateComponent } from './lib/components/empty-state/empty-state.component';

// ── Components v0.3 — Data Visualization ─────────────────────────────────────

export { KlnChartComponent } from './lib/components/chart/chart.component';
export type { KlnChartType } from './lib/components/chart/chart.component';

export { KlnChartTokens } from './lib/components/chart/chart.tokens';
export { KlnChartPresets, getChartPreset } from './lib/components/chart/chart.presets';
export type { KlnChartPreset } from './lib/components/chart/chart.presets';
export { KlnChartData } from './lib/components/chart/chart.data';
export type { KlnCartesianSeries, KlnPointSeries, KlnTimeSeries }
  from './lib/components/chart/chart.data';

export { KlnKnobComponent } from './lib/components/knob/knob.component';

export { KlnMeterGroupComponent } from './lib/components/meter-group/meter-group.component';

export { KlnSliderComponent } from './lib/components/slider/slider.component';

export { KlnSelectComponent } from './lib/components/select/select.component';
export type { KlnSelectOption } from './lib/components/select/select.component';

// ── Tooltip (diretiva PrimeNG — use pTooltip diretamente) ────────────────────
// import { TooltipModule } from 'primeng/tooltip';
// <button pTooltip="Texto" tooltipPosition="top">...</button>

// ── Components v0.4 ──────────────────────────────────────────────────────────

export { KlnCheckboxComponent } from './lib/components/checkbox/checkbox.component';

export { KlnFloatLabelComponent } from './lib/components/float-label/float-label.component';

export { KlnMultiSelectComponent } from './lib/components/multiselect/multiselect.component';

export { KlnAutoCompleteComponent } from './lib/components/autocomplete/autocomplete.component';

export { KlnInputMaskComponent } from './lib/components/input-mask/input-mask.component';

export { KlnRatingComponent } from './lib/components/rating/rating.component';

export { KlnSelectButtonComponent } from './lib/components/select-button/select-button.component';

export { KlnListboxComponent } from './lib/components/listbox/listbox.component';

export { KlnTreeSelectComponent } from './lib/components/tree-select/tree-select.component';

export { KlnCascadeSelectComponent } from './lib/components/cascade-select/cascade-select.component';

export { KlnInputGroupComponent } from './lib/components/input-group/input-group.component';

export { KlnButtonGroupComponent } from './lib/components/button-group/button-group.component';

export { KlnToolbarComponent } from './lib/components/toolbar/toolbar.component';

export { KlnPanelComponent } from './lib/components/panel/panel.component';

export { KlnFieldsetComponent } from './lib/components/fieldset/fieldset.component';

export { KlnSplitterComponent } from './lib/components/splitter/splitter.component';

export { KlnScrollPanelComponent } from './lib/components/scroll-panel/scroll-panel.component';

export { KlnImageComponent } from './lib/components/image/image.component';

export { KlnAvatarGroupComponent } from './lib/components/avatar-group/avatar-group.component';

export { KlnMessagesComponent } from './lib/components/messages/messages.component';

export { KlnPopoverComponent } from './lib/components/popover/popover.component';

export { KlnSpeedDialComponent } from './lib/components/speed-dial/speed-dial.component';

export { KlnProgressSpinnerComponent } from './lib/components/progress-spinner/progress-spinner.component';

export { KlnMenubarComponent } from './lib/components/menubar/menubar.component';

export { KlnTabMenuComponent } from './lib/components/tab-menu/tab-menu.component';

export { KlnStepsComponent } from './lib/components/steps/steps.component';

export { KlnSplitButtonComponent } from './lib/components/split-button/split-button.component';

export { KlnTimelineComponent } from './lib/components/timeline/timeline.component';
export type { KlnTimelineEvent } from './lib/components/timeline/timeline.component';

export { KlnDataViewComponent } from './lib/components/dataview/dataview.component';

export { KlnCarouselComponent } from './lib/components/carousel/carousel.component';

export { KlnTreeComponent } from './lib/components/tree/tree.component';

export { KlnOrderListComponent } from './lib/components/order-list/order-list.component';

export { KlnVirtualScrollerComponent } from './lib/components/virtual-scroller/virtual-scroller.component';

// ── Components v1.0 — Full PrimeNG coverage ──────────────────────────────────

export { KlnToggleButtonComponent } from './lib/components/toggle-button/toggle-button.component';

export { KlnIconFieldComponent } from './lib/components/icon-field/icon-field.component';

export { KlnInputOtpComponent } from './lib/components/input-otp/input-otp.component';

export { KlnColorPickerComponent } from './lib/components/color-picker/color-picker.component';

export { KlnEditorComponent } from './lib/components/editor/editor.component';

export { KlnIftaLabelComponent } from './lib/components/ifta-label/ifta-label.component';

export { KlnContextMenuComponent } from './lib/components/context-menu/context-menu.component';

export { KlnMegaMenuComponent } from './lib/components/mega-menu/mega-menu.component';

export { KlnTieredMenuComponent } from './lib/components/tiered-menu/tiered-menu.component';

export { KlnPanelMenuComponent } from './lib/components/panel-menu/panel-menu.component';

export { KlnScrollTopComponent } from './lib/components/scroll-top/scroll-top.component';

export { KlnConfirmPopupComponent } from './lib/components/confirm-popup/confirm-popup.component';

export { KlnBlockUiComponent } from './lib/components/block-ui/block-ui.component';

export { KlnPickListComponent } from './lib/components/pick-list/pick-list.component';

export { KlnTreeTableComponent } from './lib/components/tree-table/tree-table.component';

export { KlnInplaceComponent } from './lib/components/inplace/inplace.component';

export { KlnGalleriaComponent } from './lib/components/galleria/galleria.component';

export { KlnImageCompareComponent } from './lib/components/image-compare/image-compare.component';

export { KlnOverlayBadgeComponent } from './lib/components/overlay-badge/overlay-badge.component';

// ── Components v1.1 — Portal Templates ───────────────────────────────────────
// Componentes de layout e templates para os Portais Klini
// (Beneficiário · Médico · Corretor · TI)

export { KlnPortalHeaderComponent }
  from './lib/components/portal-header/portal-header.component';

export { KlnPortalFooterComponent }
  from './lib/components/portal-footer/portal-footer.component';

export { KlnPortalShellComponent }
  from './lib/components/portal-shell/portal-shell.component';

export { KlnPortalLoginComponent }
  from './lib/components/portal-login/portal-login.component';
export type { KlnPortalLoginPayload }
  from './lib/components/portal-login/portal-login.component';

export { KlnServiceTileComponent }
  from './lib/components/service-tile/service-tile.component';

// ── Components v2.1 — PrimeNG complete coverage ───────────────────────────────

export { KlnDockComponent } from './lib/components/dock/dock.component';

export { KlnOrganizationChartComponent } from './lib/components/organization-chart/organization-chart.component';

export { KlnTerminalComponent } from './lib/components/terminal/terminal.component';
