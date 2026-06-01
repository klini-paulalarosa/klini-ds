import { NgModule } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { KeyFilterModule }      from 'primeng/keyfilter';
import { AutoFocusModule }      from 'primeng/autofocus';
import { RippleModule }         from 'primeng/ripple';
import { StyleClassModule }     from 'primeng/styleclass';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

// Existing components
import { ButtonComponent }           from './components/button/button.component';
import { StatusPillComponent }       from './components/status-pill/status-pill.component';
import { TagComponent }              from './components/tag/tag.component';
import { BadgeComponent }            from './components/badge/badge.component';
import { ChipComponent }             from './components/chip/chip.component';
import { KpiCardComponent }          from './components/kpi-card/kpi-card.component';
import { ToastComponent }            from './components/toast/toast.component';
import { StepperComponent }          from './components/stepper/stepper.component';
import { DrawerComponent }           from './components/drawer/drawer.component';
import { InputTextComponent }        from './components/input-text/input-text.component';
import { CalendarComponent }         from './components/calendar/calendar.component';
import { MessageComponent }          from './components/message/message.component';
import { CardComponent }             from './components/card/card.component';
import { DividerComponent }          from './components/divider/divider.component';

// New components
import { KlnRadioGroupComponent }  from './components/radiobutton/radio-group.component';
import { KlnTabsComponent }        from './components/tabs/tabs.component';
import { KlnMenuComponent }        from './components/menu/menu.component';
import { KlnTableComponent }       from './components/table/table.component';
import { KlnDialogComponent }      from './components/dialog/dialog.component';
import { KlnToggleComponent }      from './components/toggle/toggle.component';
import { KlnAccordionComponent }   from './components/accordion/accordion.component';
import { KlnAvatarComponent }      from './components/avatar/avatar.component';
import { KlnSkeletonComponent }    from './components/skeleton/skeleton.component';
import { KlnProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { KlnTextareaComponent }    from './components/textarea/textarea.component';
import { KlnPasswordComponent }    from './components/password/password.component';
import { KlnInputNumberComponent } from './components/input-number/input-number.component';
import { KlnPaginatorComponent }   from './components/paginator/paginator.component';
import { KlnConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { KlnFileUploadComponent }  from './components/file-upload/file-upload.component';
import { KlnBreadcrumbComponent }  from './components/breadcrumb/breadcrumb.component';
import { KlnEmptyStateComponent }  from './components/empty-state/empty-state.component';

// v0.3 — Data Visualization
import { KlnChartComponent }      from './components/chart/chart.component';
import { KlnKnobComponent }       from './components/knob/knob.component';
import { KlnMeterGroupComponent } from './components/meter-group/meter-group.component';
import { KlnSliderComponent }     from './components/slider/slider.component';
import { KlnSelectComponent }     from './components/select/select.component';

// v1.0 — Full PrimeNG coverage
import { KlnToggleButtonComponent }  from './components/toggle-button/toggle-button.component';
import { KlnIconFieldComponent }     from './components/icon-field/icon-field.component';
import { KlnInputOtpComponent }      from './components/input-otp/input-otp.component';
import { KlnColorPickerComponent }   from './components/color-picker/color-picker.component';
import { KlnEditorComponent }        from './components/editor/editor.component';
import { KlnIftaLabelComponent }     from './components/ifta-label/ifta-label.component';
import { KlnContextMenuComponent }   from './components/context-menu/context-menu.component';
import { KlnMegaMenuComponent }      from './components/mega-menu/mega-menu.component';
import { KlnTieredMenuComponent }    from './components/tiered-menu/tiered-menu.component';
import { KlnPanelMenuComponent }     from './components/panel-menu/panel-menu.component';
import { KlnScrollTopComponent }     from './components/scroll-top/scroll-top.component';
import { KlnConfirmPopupComponent }  from './components/confirm-popup/confirm-popup.component';
import { KlnBlockUiComponent }       from './components/block-ui/block-ui.component';
import { KlnPickListComponent }      from './components/pick-list/pick-list.component';
import { KlnTreeTableComponent }     from './components/tree-table/tree-table.component';
import { KlnInplaceComponent }       from './components/inplace/inplace.component';
import { KlnGalleriaComponent }      from './components/galleria/galleria.component';
import { KlnImageCompareComponent }  from './components/image-compare/image-compare.component';
import { KlnOverlayBadgeComponent }  from './components/overlay-badge/overlay-badge.component';

// v1.1 — Portal Templates
import { KlnPortalHeaderComponent }  from './components/portal-header/portal-header.component';
import { KlnPortalFooterComponent }  from './components/portal-footer/portal-footer.component';
import { KlnPortalShellComponent }   from './components/portal-shell/portal-shell.component';
import { KlnPortalLoginComponent }   from './components/portal-login/portal-login.component';
import { KlnServiceTileComponent }   from './components/service-tile/service-tile.component';

// v0.4 — Forms, Layout, Feedback & Overlay, Navigation, Data & Content
import { KlnCheckboxComponent }       from './components/checkbox/checkbox.component';
import { KlnFloatLabelComponent }     from './components/float-label/float-label.component';
import { KlnMultiSelectComponent }    from './components/multiselect/multiselect.component';
import { KlnAutoCompleteComponent }   from './components/autocomplete/autocomplete.component';
import { KlnInputMaskComponent }      from './components/input-mask/input-mask.component';
import { KlnRatingComponent }         from './components/rating/rating.component';
import { KlnSelectButtonComponent }   from './components/select-button/select-button.component';
import { KlnListboxComponent }        from './components/listbox/listbox.component';
import { KlnTreeSelectComponent }     from './components/tree-select/tree-select.component';
import { KlnCascadeSelectComponent }  from './components/cascade-select/cascade-select.component';
import { KlnInputGroupComponent }     from './components/input-group/input-group.component';
import { KlnButtonGroupComponent }    from './components/button-group/button-group.component';
import { KlnToolbarComponent }        from './components/toolbar/toolbar.component';
import { KlnPanelComponent }          from './components/panel/panel.component';
import { KlnFieldsetComponent }       from './components/fieldset/fieldset.component';
import { KlnSplitterComponent }       from './components/splitter/splitter.component';
import { KlnScrollPanelComponent }    from './components/scroll-panel/scroll-panel.component';
import { KlnImageComponent }          from './components/image/image.component';
import { KlnAvatarGroupComponent }    from './components/avatar-group/avatar-group.component';
import { KlnMessagesComponent }       from './components/messages/messages.component';
import { KlnPopoverComponent }        from './components/popover/popover.component';
import { KlnSpeedDialComponent }      from './components/speed-dial/speed-dial.component';
import { KlnProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';
import { KlnMenubarComponent }        from './components/menubar/menubar.component';
import { KlnTabMenuComponent }        from './components/tab-menu/tab-menu.component';
import { KlnStepsComponent }          from './components/steps/steps.component';
import { KlnSplitButtonComponent }    from './components/split-button/split-button.component';
import { KlnTimelineComponent }       from './components/timeline/timeline.component';
import { KlnDataViewComponent }       from './components/dataview/dataview.component';
import { KlnCarouselComponent }       from './components/carousel/carousel.component';
import { KlnTreeComponent }           from './components/tree/tree.component';
import { KlnOrderListComponent }      from './components/order-list/order-list.component';
import { KlnVirtualScrollerComponent } from './components/virtual-scroller/virtual-scroller.component';

// v2.1 — PrimeNG complete coverage
import { KlnDockComponent }              from './components/dock/dock.component';
import { KlnOrganizationChartComponent } from './components/organization-chart/organization-chart.component';
import { KlnTerminalComponent }          from './components/terminal/terminal.component';

const COMPONENTS = [
  // Core (v0.1)
  ButtonComponent, StatusPillComponent, TagComponent, BadgeComponent, ChipComponent,
  KpiCardComponent, ToastComponent, StepperComponent, DrawerComponent,
  InputTextComponent, CalendarComponent, MessageComponent, CardComponent, DividerComponent,
  // New (v0.2)
  KlnRadioGroupComponent, KlnTabsComponent, KlnMenuComponent, KlnTableComponent,
  KlnDialogComponent, KlnToggleComponent, KlnAccordionComponent, KlnAvatarComponent,
  KlnSkeletonComponent, KlnProgressBarComponent, KlnTextareaComponent,
  KlnPasswordComponent, KlnInputNumberComponent, KlnPaginatorComponent,
  KlnConfirmDialogComponent, KlnFileUploadComponent, KlnBreadcrumbComponent,
  KlnEmptyStateComponent,
  // Data Visualization (v0.3)
  KlnChartComponent, KlnKnobComponent, KlnMeterGroupComponent,
  KlnSliderComponent, KlnSelectComponent,
  // v0.4 — Forms, Layout, Feedback & Overlay, Navigation, Data & Content
  KlnCheckboxComponent, KlnFloatLabelComponent, KlnMultiSelectComponent,
  KlnAutoCompleteComponent, KlnInputMaskComponent, KlnRatingComponent,
  KlnSelectButtonComponent, KlnListboxComponent, KlnTreeSelectComponent,
  KlnCascadeSelectComponent, KlnInputGroupComponent, KlnButtonGroupComponent,
  KlnToolbarComponent, KlnPanelComponent, KlnFieldsetComponent,
  KlnSplitterComponent, KlnScrollPanelComponent, KlnImageComponent,
  KlnAvatarGroupComponent, KlnMessagesComponent, KlnPopoverComponent,
  KlnSpeedDialComponent, KlnProgressSpinnerComponent, KlnMenubarComponent,
  KlnTabMenuComponent, KlnStepsComponent, KlnSplitButtonComponent,
  KlnTimelineComponent, KlnDataViewComponent, KlnCarouselComponent,
  KlnTreeComponent, KlnOrderListComponent, KlnVirtualScrollerComponent,
  // v1.0 — Full PrimeNG coverage
  KlnToggleButtonComponent, KlnIconFieldComponent, KlnInputOtpComponent,
  KlnColorPickerComponent, KlnEditorComponent, KlnIftaLabelComponent,
  KlnContextMenuComponent, KlnMegaMenuComponent, KlnTieredMenuComponent,
  KlnPanelMenuComponent, KlnScrollTopComponent, KlnConfirmPopupComponent,
  KlnBlockUiComponent, KlnPickListComponent, KlnTreeTableComponent,
  KlnInplaceComponent, KlnGalleriaComponent, KlnImageCompareComponent,
  KlnOverlayBadgeComponent,
  // v1.1 — Portal Templates
  KlnPortalHeaderComponent, KlnPortalFooterComponent, KlnPortalShellComponent,
  KlnPortalLoginComponent, KlnServiceTileComponent,
  // v2.1 — PrimeNG complete coverage
  KlnDockComponent, KlnOrganizationChartComponent, KlnTerminalComponent,
];

const DIRECTIVE_MODULES = [
  KeyFilterModule,
  AutoFocusModule,
  RippleModule,
  StyleClassModule,
  AnimateOnScrollModule,
  // DynamicDialog é standalone no PrimeNG 18 — DialogService vai em providers
];

/**
 * Módulo de conveniência — importa e re-exporta todos os componentes e
 * módulos de diretivas do @klini-saude/ds.
 * Para projetos que ainda usam NgModule em vez de standalone.
 */
@NgModule({
  imports:   [...COMPONENTS, ...DIRECTIVE_MODULES],
  exports:   [...COMPONENTS, ...DIRECTIVE_MODULES],
  providers: [MessageService, ConfirmationService, DialogService],
})
export class KlnDsModule {}
