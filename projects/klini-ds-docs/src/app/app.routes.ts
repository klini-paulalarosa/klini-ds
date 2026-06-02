import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'getting-started',
    loadComponent: () =>
      import('./pages/getting-started/getting-started.component').then(m => m.GettingStartedComponent),
  },
  {
    path: 'tokens',
    loadComponent: () =>
      import('./pages/tokens/tokens.component').then(m => m.TokensComponent),
  },
  {
    path: 'charts',
    loadComponent: () =>
      import('./pages/charts/charts.component').then(m => m.ChartsComponent),
  },
  {
    path: 'components/button',
    loadComponent: () =>
      import('./pages/components/button/button-page.component').then(m => m.ButtonPageComponent),
  },
  {
    path: 'components/input-text',
    loadComponent: () =>
      import('./pages/components/input-text/input-text-page.component').then(m => m.InputTextPageComponent),
  },
  {
    path: 'components/select',
    loadComponent: () =>
      import('./pages/components/select/select-page.component').then(m => m.SelectPageComponent),
  },
  {
    path: 'components/table',
    loadComponent: () =>
      import('./pages/components/table/table-page.component').then(m => m.TablePageComponent),
  },
  {
    path: 'components/dialog',
    loadComponent: () =>
      import('./pages/components/dialog/dialog-page.component').then(m => m.DialogPageComponent),
  },
  {
    path: 'components/card',
    loadComponent: () =>
      import('./pages/components/card/card-page.component').then(m => m.CardPageComponent),
  },
  {
    path: 'components/chart',
    loadComponent: () =>
      import('./pages/components/chart/chart-page.component').then(m => m.ChartPageComponent),
  },
  {
    path: 'components/toast',
    loadComponent: () =>
      import('./pages/components/toast/toast-page.component').then(m => m.ToastPageComponent),
  },
  {
    path: 'components/kpi-card',
    loadComponent: () =>
      import('./pages/components/kpi-card/kpi-card-page.component').then(m => m.KpiCardPageComponent),
  },
  {
    path: 'components/textarea',
    loadComponent: () =>
      import('./pages/components/textarea/textarea-page.component').then(m => m.TextareaPageComponent),
  },
  {
    path: 'components/radio-group',
    loadComponent: () =>
      import('./pages/components/radio-group/radio-group-page.component').then(m => m.RadioGroupPageComponent),
  },
  {
    path: 'components/timeline',
    loadComponent: () =>
      import('./pages/components/timeline/timeline-page.component').then(m => m.TimelinePageComponent),
  },
  {
    path: 'components/input-mask',
    loadComponent: () =>
      import('./pages/components/input-mask/input-mask-page.component').then(m => m.InputMaskPageComponent),
  },
  {
    path: 'components/password',
    loadComponent: () =>
      import('./pages/components/password/password-page.component').then(m => m.PasswordPageComponent),
  },
  {
    path: 'components/checkbox',
    loadComponent: () =>
      import('./pages/components/checkbox/checkbox-page.component').then(m => m.CheckboxPageComponent),
  },
  {
    path: 'components/calendar',
    loadComponent: () =>
      import('./pages/components/calendar/calendar-page.component').then(m => m.CalendarPageComponent),
  },
  {
    path: 'components/portal-templates',
    loadComponent: () =>
      import('./pages/components/portal-templates/portal-templates-page.component').then(m => m.PortalTemplatesPageComponent),
  },
  {
    path: 'components/accordion',
    loadComponent: () =>
      import('./pages/components/accordion/accordion-page.component').then(m => m.AccordionPageComponent),
  },
  {
    path: 'components/drawer',
    loadComponent: () =>
      import('./pages/components/drawer/drawer-page.component').then(m => m.DrawerPageComponent),
  },
  {
    path: 'components/tabs',
    loadComponent: () =>
      import('./pages/components/tabs/tabs-page.component').then(m => m.TabsPageComponent),
  },
  {
    path: 'components/avatar',
    loadComponent: () =>
      import('./pages/components/avatar/avatar-page.component').then(m => m.AvatarPageComponent),
  },
  {
    path: 'components/badge',
    loadComponent: () =>
      import('./pages/components/badge-tag-chip/badge-tag-chip-page.component').then(m => m.BadgeTagChipPageComponent),
  },
  {
    path: 'components/tag',
    loadComponent: () =>
      import('./pages/components/badge-tag-chip/badge-tag-chip-page.component').then(m => m.BadgeTagChipPageComponent),
  },
  {
    path: 'components/chip',
    loadComponent: () =>
      import('./pages/components/badge-tag-chip/badge-tag-chip-page.component').then(m => m.BadgeTagChipPageComponent),
  },
  {
    path: 'components/stepper',
    loadComponent: () =>
      import('./pages/components/stepper/stepper-page.component').then(m => m.StepperPageComponent),
  },
  {
    path: 'components/confirm-dialog',
    loadComponent: () =>
      import('./pages/components/confirm-dialog/confirm-dialog-page.component').then(m => m.ConfirmDialogPageComponent),
  },
  {
    path: 'components/skeleton',
    loadComponent: () =>
      import('./pages/components/skeleton/skeleton-page.component').then(m => m.SkeletonPageComponent),
  },
  {
    path: 'components/status-pill',
    loadComponent: () =>
      import('./pages/components/status-pill/status-pill-page.component').then(m => m.StatusPillPageComponent),
  },
  {
    path: 'components/toggle',
    loadComponent: () =>
      import('./pages/components/toggle/toggle-page.component').then(m => m.TogglePageComponent),
  },
  {
    path: 'components/menu',
    loadComponent: () =>
      import('./pages/components/menu/menu-page.component').then(m => m.MenuPageComponent),
  },
  {
    path: 'components/breadcrumb',
    loadComponent: () =>
      import('./pages/components/breadcrumb/breadcrumb-page.component').then(m => m.BreadcrumbPageComponent),
  },
  // ── Grupo 1 — Formulários críticos ──────────────────────────────────────────
  {
    path: 'components/input-number',
    loadComponent: () =>
      import('./pages/components/input-number/input-number-page.component').then(m => m.InputNumberPageComponent),
  },
  {
    path: 'components/input-otp',
    loadComponent: () =>
      import('./pages/components/input-otp/input-otp-page.component').then(m => m.InputOtpPageComponent),
  },
  {
    path: 'components/select-button',
    loadComponent: () =>
      import('./pages/components/select-button/select-button-page.component').then(m => m.SelectButtonPageComponent),
  },
  {
    path: 'components/toggle-button',
    loadComponent: () =>
      import('./pages/components/toggle-button/toggle-button-page.component').then(m => m.ToggleButtonPageComponent),
  },
  {
    path: 'components/rating',
    loadComponent: () =>
      import('./pages/components/rating/rating-page.component').then(m => m.RatingPageComponent),
  },
  {
    path: 'components/slider',
    loadComponent: () =>
      import('./pages/components/slider/slider-page.component').then(m => m.SliderPageComponent),
  },
  // ── Grupo 2 — Feedback e status ─────────────────────────────────────────────
  {
    path: 'components/message',
    loadComponent: () =>
      import('./pages/components/message/message-page.component').then(m => m.MessagePageComponent),
  },
  {
    path: 'components/messages',
    loadComponent: () =>
      import('./pages/components/messages/messages-page.component').then(m => m.MessagesPageComponent),
  },
  {
    path: 'components/progress-bar',
    loadComponent: () =>
      import('./pages/components/progress-bar/progress-bar-page.component').then(m => m.ProgressBarPageComponent),
  },
  {
    path: 'components/progress-spinner',
    loadComponent: () =>
      import('./pages/components/progress-spinner/progress-spinner-page.component').then(m => m.ProgressSpinnerPageComponent),
  },
  {
    path: 'components/confirm-popup',
    loadComponent: () =>
      import('./pages/components/confirm-popup/confirm-popup-page.component').then(m => m.ConfirmPopupPageComponent),
  },
  {
    path: 'components/block-ui',
    loadComponent: () =>
      import('./pages/components/block-ui/block-ui-page.component').then(m => m.BlockUiPageComponent),
  },
  {
    path: 'components/overlay-badge',
    loadComponent: () =>
      import('./pages/components/overlay-badge/overlay-badge-page.component').then(m => m.OverlayBadgePageComponent),
  },
  // ── Grupo 3 — Overlays ──────────────────────────────────────────────────────
  {
    path: 'components/popover',
    loadComponent: () =>
      import('./pages/components/popover/popover-page.component').then(m => m.PopoverPageComponent),
  },
  {
    path: 'components/tooltip',
    loadComponent: () =>
      import('./pages/components/tooltip/tooltip-page.component').then(m => m.TooltipPageComponent),
  },
  {
    path: 'components/context-menu',
    loadComponent: () =>
      import('./pages/components/context-menu/context-menu-page.component').then(m => m.ContextMenuPageComponent),
  },
  // ── Grupo 4 — Navegação ─────────────────────────────────────────────────────
  {
    path: 'components/steps',
    loadComponent: () =>
      import('./pages/components/steps/steps-page.component').then(m => m.StepsPageComponent),
  },
  {
    path: 'components/tab-menu',
    loadComponent: () =>
      import('./pages/components/tab-menu/tab-menu-page.component').then(m => m.TabMenuPageComponent),
  },
  {
    path: 'components/menubar',
    loadComponent: () =>
      import('./pages/components/menubar/menubar-page.component').then(m => m.MenubarPageComponent),
  },
  {
    path: 'components/mega-menu',
    loadComponent: () =>
      import('./pages/components/mega-menu/mega-menu-page.component').then(m => m.MegaMenuPageComponent),
  },
  {
    path: 'components/tiered-menu',
    loadComponent: () =>
      import('./pages/components/tiered-menu/tiered-menu-page.component').then(m => m.TieredMenuPageComponent),
  },
  {
    path: 'components/panel-menu',
    loadComponent: () =>
      import('./pages/components/panel-menu/panel-menu-page.component').then(m => m.PanelMenuPageComponent),
  },
  {
    path: 'components/speed-dial',
    loadComponent: () =>
      import('./pages/components/speed-dial/speed-dial-page.component').then(m => m.SpeedDialPageComponent),
  },
  // ── Grupo 5 — Forms avançados ───────────────────────────────────────────────
  {
    path: 'components/multiselect',
    loadComponent: () =>
      import('./pages/components/multiselect/multiselect-page.component').then(m => m.MultiselectPageComponent),
  },
  {
    path: 'components/autocomplete',
    loadComponent: () =>
      import('./pages/components/autocomplete/autocomplete-page.component').then(m => m.AutocompletePageComponent),
  },
  {
    path: 'components/listbox',
    loadComponent: () =>
      import('./pages/components/listbox/listbox-page.component').then(m => m.ListboxPageComponent),
  },
  {
    path: 'components/cascade-select',
    loadComponent: () =>
      import('./pages/components/cascade-select/cascade-select-page.component').then(m => m.CascadeSelectPageComponent),
  },
  {
    path: 'components/tree-select',
    loadComponent: () =>
      import('./pages/components/tree-select/tree-select-page.component').then(m => m.TreeSelectPageComponent),
  },
  {
    path: 'components/color-picker',
    loadComponent: () =>
      import('./pages/components/color-picker/color-picker-page.component').then(m => m.ColorPickerPageComponent),
  },
  {
    path: 'components/file-upload',
    loadComponent: () =>
      import('./pages/components/file-upload/file-upload-page.component').then(m => m.FileUploadPageComponent),
  },
  {
    path: 'components/editor',
    loadComponent: () =>
      import('./pages/components/editor/editor-page.component').then(m => m.EditorPageComponent),
  },
  // ── Grupo 6 — Layout e containers ───────────────────────────────────────────
  {
    path: 'components/float-label',
    loadComponent: () =>
      import('./pages/components/float-label/float-label-page.component').then(m => m.FloatLabelPageComponent),
  },
  {
    path: 'components/icon-field',
    loadComponent: () =>
      import('./pages/components/icon-field/icon-field-page.component').then(m => m.IconFieldPageComponent),
  },
  {
    path: 'components/ifta-label',
    loadComponent: () =>
      import('./pages/components/ifta-label/ifta-label-page.component').then(m => m.IftaLabelPageComponent),
  },
  {
    path: 'components/input-group',
    loadComponent: () =>
      import('./pages/components/input-group/input-group-page.component').then(m => m.InputGroupPageComponent),
  },
  {
    path: 'components/toolbar',
    loadComponent: () =>
      import('./pages/components/toolbar/toolbar-page.component').then(m => m.ToolbarPageComponent),
  },
  {
    path: 'components/panel',
    loadComponent: () =>
      import('./pages/components/panel/panel-page.component').then(m => m.PanelPageComponent),
  },
  {
    path: 'components/fieldset',
    loadComponent: () =>
      import('./pages/components/fieldset/fieldset-page.component').then(m => m.FieldsetPageComponent),
  },
  {
    path: 'components/scroll-panel',
    loadComponent: () =>
      import('./pages/components/scroll-panel/scroll-panel-page.component').then(m => m.ScrollPanelPageComponent),
  },
  {
    path: 'components/splitter',
    loadComponent: () =>
      import('./pages/components/splitter/splitter-page.component').then(m => m.SplitterPageComponent),
  },
  {
    path: 'components/divider',
    loadComponent: () =>
      import('./pages/components/divider/divider-page.component').then(m => m.DividerPageComponent),
  },
  {
    path: 'components/image',
    loadComponent: () =>
      import('./pages/components/image/image-page.component').then(m => m.ImagePageComponent),
  },
  {
    path: 'components/inplace',
    loadComponent: () =>
      import('./pages/components/inplace/inplace-page.component').then(m => m.InplacePageComponent),
  },
  {
    path: 'components/scroll-top',
    loadComponent: () =>
      import('./pages/components/scroll-top/scroll-top-page.component').then(m => m.ScrollTopPageComponent),
  },
  {
    path: 'components/empty-state',
    loadComponent: () =>
      import('./pages/components/empty-state/empty-state-page.component').then(m => m.EmptyStatePageComponent),
  },
  {
    path: 'components/paginator',
    loadComponent: () =>
      import('./pages/components/paginator/paginator-page.component').then(m => m.PaginatorPageComponent),
  },
  // ── Grupo 7 — Data Display avançado ─────────────────────────────────────────
  {
    path: 'components/avatar-group',
    loadComponent: () =>
      import('./pages/components/avatar-group/avatar-group-page.component').then(m => m.AvatarGroupPageComponent),
  },
  {
    path: 'components/dataview',
    loadComponent: () =>
      import('./pages/components/dataview/dataview-page.component').then(m => m.DataviewPageComponent),
  },
  {
    path: 'components/carousel',
    loadComponent: () =>
      import('./pages/components/carousel/carousel-page.component').then(m => m.CarouselPageComponent),
  },
  {
    path: 'components/tree',
    loadComponent: () =>
      import('./pages/components/tree/tree-page.component').then(m => m.TreePageComponent),
  },
  {
    path: 'components/tree-table',
    loadComponent: () =>
      import('./pages/components/tree-table/tree-table-page.component').then(m => m.TreeTablePageComponent),
  },
  {
    path: 'components/order-list',
    loadComponent: () =>
      import('./pages/components/order-list/order-list-page.component').then(m => m.OrderListPageComponent),
  },
  {
    path: 'components/pick-list',
    loadComponent: () =>
      import('./pages/components/pick-list/pick-list-page.component').then(m => m.PickListPageComponent),
  },
  {
    path: 'components/virtual-scroller',
    loadComponent: () =>
      import('./pages/components/virtual-scroller/virtual-scroller-page.component').then(m => m.VirtualScrollerPageComponent),
  },
  {
    path: 'components/galleria',
    loadComponent: () =>
      import('./pages/components/galleria/galleria-page.component').then(m => m.GalleriaPageComponent),
  },
  {
    path: 'components/image-compare',
    loadComponent: () =>
      import('./pages/components/image-compare/image-compare-page.component').then(m => m.ImageComparePageComponent),
  },
  {
    path: 'components/knob',
    loadComponent: () =>
      import('./pages/components/knob/knob-page.component').then(m => m.KnobPageComponent),
  },
  {
    path: 'components/meter-group',
    loadComponent: () =>
      import('./pages/components/meter-group/meter-group-page.component').then(m => m.MeterGroupPageComponent),
  },
  // ── Grupo 8 — Overlays avançados e Misc ─────────────────────────────────────
  {
    path: 'components/split-button',
    loadComponent: () =>
      import('./pages/components/split-button/split-button-page.component').then(m => m.SplitButtonPageComponent),
  },
  {
    path: 'components/button-group',
    loadComponent: () =>
      import('./pages/components/button-group/button-group-page.component').then(m => m.ButtonGroupPageComponent),
  },
  {
    path: 'components/dock',
    loadComponent: () =>
      import('./pages/components/dock/dock-page.component').then(m => m.DockPageComponent),
  },
  {
    path: 'components/organization-chart',
    loadComponent: () =>
      import('./pages/components/organization-chart/organization-chart-page.component').then(m => m.OrganizationChartPageComponent),
  },
  // ── Catch-all ────────────────────────────────────────────────────────────────
  {
    path: 'components/:slug',
    loadComponent: () =>
      import('./pages/components/stub/component-stub-page.component').then(m => m.ComponentStubPageComponent),
  },
  {
    path: 'icons',
    loadComponent: () =>
      import('./pages/icons/icons-page.component').then(m => m.IconsPageComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
