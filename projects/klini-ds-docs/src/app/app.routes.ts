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
      import('./pages/components/card/card-page.component').then(m => m.CardPageComponent),
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
