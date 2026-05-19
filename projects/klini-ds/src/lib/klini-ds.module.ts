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
import { KliniRadioGroupComponent }  from './components/radiobutton/radio-group.component';
import { KliniTabsComponent }        from './components/tabs/tabs.component';
import { KliniMenuComponent }        from './components/menu/menu.component';
import { KliniTableComponent }       from './components/table/table.component';
import { KliniDialogComponent }      from './components/dialog/dialog.component';
import { KliniToggleComponent }      from './components/toggle/toggle.component';
import { KliniAccordionComponent }   from './components/accordion/accordion.component';
import { KliniAvatarComponent }      from './components/avatar/avatar.component';
import { KliniSkeletonComponent }    from './components/skeleton/skeleton.component';
import { KliniProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { KliniTextareaComponent }    from './components/textarea/textarea.component';
import { KliniPasswordComponent }    from './components/password/password.component';
import { KliniInputNumberComponent } from './components/input-number/input-number.component';
import { KliniPaginatorComponent }   from './components/paginator/paginator.component';
import { KliniConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { KliniFileUploadComponent }  from './components/file-upload/file-upload.component';
import { KliniBreadcrumbComponent }  from './components/breadcrumb/breadcrumb.component';
import { KliniEmptyStateComponent }  from './components/empty-state/empty-state.component';

// v0.3 — Data Visualization
import { KliniChartComponent }      from './components/chart/chart.component';
import { KliniKnobComponent }       from './components/knob/knob.component';
import { KliniMeterGroupComponent } from './components/meter-group/meter-group.component';
import { KliniSliderComponent }     from './components/slider/slider.component';
import { KliniSelectComponent }     from './components/select/select.component';

// v1.0 — Full PrimeNG coverage
import { KliniToggleButtonComponent }  from './components/toggle-button/toggle-button.component';
import { KliniIconFieldComponent }     from './components/icon-field/icon-field.component';
import { KliniInputOtpComponent }      from './components/input-otp/input-otp.component';
import { KliniColorPickerComponent }   from './components/color-picker/color-picker.component';
import { KliniEditorComponent }        from './components/editor/editor.component';
import { KliniIftaLabelComponent }     from './components/ifta-label/ifta-label.component';
import { KliniContextMenuComponent }   from './components/context-menu/context-menu.component';
import { KliniMegaMenuComponent }      from './components/mega-menu/mega-menu.component';
import { KliniTieredMenuComponent }    from './components/tiered-menu/tiered-menu.component';
import { KliniPanelMenuComponent }     from './components/panel-menu/panel-menu.component';
import { KliniScrollTopComponent }     from './components/scroll-top/scroll-top.component';
import { KliniConfirmPopupComponent }  from './components/confirm-popup/confirm-popup.component';
import { KliniBlockUiComponent }       from './components/block-ui/block-ui.component';
import { KliniPickListComponent }      from './components/pick-list/pick-list.component';
import { KliniTreeTableComponent }     from './components/tree-table/tree-table.component';
import { KliniInplaceComponent }       from './components/inplace/inplace.component';
import { KliniGalleriaComponent }      from './components/galleria/galleria.component';
import { KliniImageCompareComponent }  from './components/image-compare/image-compare.component';
import { KliniOverlayBadgeComponent }  from './components/overlay-badge/overlay-badge.component';

// v0.4 — Forms, Layout, Feedback & Overlay, Navigation, Data & Content
import { KliniCheckboxComponent }       from './components/checkbox/checkbox.component';
import { KliniFloatLabelComponent }     from './components/float-label/float-label.component';
import { KliniMultiSelectComponent }    from './components/multiselect/multiselect.component';
import { KliniAutoCompleteComponent }   from './components/autocomplete/autocomplete.component';
import { KliniInputMaskComponent }      from './components/input-mask/input-mask.component';
import { KliniRatingComponent }         from './components/rating/rating.component';
import { KliniSelectButtonComponent }   from './components/select-button/select-button.component';
import { KliniListboxComponent }        from './components/listbox/listbox.component';
import { KliniTreeSelectComponent }     from './components/tree-select/tree-select.component';
import { KliniCascadeSelectComponent }  from './components/cascade-select/cascade-select.component';
import { KliniInputGroupComponent }     from './components/input-group/input-group.component';
import { KliniButtonGroupComponent }    from './components/button-group/button-group.component';
import { KliniToolbarComponent }        from './components/toolbar/toolbar.component';
import { KliniPanelComponent }          from './components/panel/panel.component';
import { KliniFieldsetComponent }       from './components/fieldset/fieldset.component';
import { KliniSplitterComponent }       from './components/splitter/splitter.component';
import { KliniScrollPanelComponent }    from './components/scroll-panel/scroll-panel.component';
import { KliniImageComponent }          from './components/image/image.component';
import { KliniAvatarGroupComponent }    from './components/avatar-group/avatar-group.component';
import { KliniMessagesComponent }       from './components/messages/messages.component';
import { KliniPopoverComponent }        from './components/popover/popover.component';
import { KliniSpeedDialComponent }      from './components/speed-dial/speed-dial.component';
import { KliniProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';
import { KliniMenubarComponent }        from './components/menubar/menubar.component';
import { KliniTabMenuComponent }        from './components/tab-menu/tab-menu.component';
import { KliniStepsComponent }          from './components/steps/steps.component';
import { KliniSplitButtonComponent }    from './components/split-button/split-button.component';
import { KliniTimelineComponent }       from './components/timeline/timeline.component';
import { KliniDataViewComponent }       from './components/dataview/dataview.component';
import { KliniCarouselComponent }       from './components/carousel/carousel.component';
import { KliniTreeComponent }           from './components/tree/tree.component';
import { KliniOrderListComponent }      from './components/order-list/order-list.component';
import { KliniVirtualScrollerComponent } from './components/virtual-scroller/virtual-scroller.component';

const COMPONENTS = [
  // Core (v0.1)
  ButtonComponent, StatusPillComponent, TagComponent, BadgeComponent, ChipComponent,
  KpiCardComponent, ToastComponent, StepperComponent, DrawerComponent,
  InputTextComponent, CalendarComponent, MessageComponent, CardComponent, DividerComponent,
  // New (v0.2)
  KliniRadioGroupComponent, KliniTabsComponent, KliniMenuComponent, KliniTableComponent,
  KliniDialogComponent, KliniToggleComponent, KliniAccordionComponent, KliniAvatarComponent,
  KliniSkeletonComponent, KliniProgressBarComponent, KliniTextareaComponent,
  KliniPasswordComponent, KliniInputNumberComponent, KliniPaginatorComponent,
  KliniConfirmDialogComponent, KliniFileUploadComponent, KliniBreadcrumbComponent,
  KliniEmptyStateComponent,
  // Data Visualization (v0.3)
  KliniChartComponent, KliniKnobComponent, KliniMeterGroupComponent,
  KliniSliderComponent, KliniSelectComponent,
  // v0.4 — Forms, Layout, Feedback & Overlay, Navigation, Data & Content
  KliniCheckboxComponent, KliniFloatLabelComponent, KliniMultiSelectComponent,
  KliniAutoCompleteComponent, KliniInputMaskComponent, KliniRatingComponent,
  KliniSelectButtonComponent, KliniListboxComponent, KliniTreeSelectComponent,
  KliniCascadeSelectComponent, KliniInputGroupComponent, KliniButtonGroupComponent,
  KliniToolbarComponent, KliniPanelComponent, KliniFieldsetComponent,
  KliniSplitterComponent, KliniScrollPanelComponent, KliniImageComponent,
  KliniAvatarGroupComponent, KliniMessagesComponent, KliniPopoverComponent,
  KliniSpeedDialComponent, KliniProgressSpinnerComponent, KliniMenubarComponent,
  KliniTabMenuComponent, KliniStepsComponent, KliniSplitButtonComponent,
  KliniTimelineComponent, KliniDataViewComponent, KliniCarouselComponent,
  KliniTreeComponent, KliniOrderListComponent, KliniVirtualScrollerComponent,
  // v1.0 — Full PrimeNG coverage
  KliniToggleButtonComponent, KliniIconFieldComponent, KliniInputOtpComponent,
  KliniColorPickerComponent, KliniEditorComponent, KliniIftaLabelComponent,
  KliniContextMenuComponent, KliniMegaMenuComponent, KliniTieredMenuComponent,
  KliniPanelMenuComponent, KliniScrollTopComponent, KliniConfirmPopupComponent,
  KliniBlockUiComponent, KliniPickListComponent, KliniTreeTableComponent,
  KliniInplaceComponent, KliniGalleriaComponent, KliniImageCompareComponent,
  KliniOverlayBadgeComponent,
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
export class KliniDsModule {}
