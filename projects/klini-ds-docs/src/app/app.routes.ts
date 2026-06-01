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
    path: 'components/:slug',
    loadComponent: () =>
      import('./pages/components/stub/component-stub-page.component').then(m => m.ComponentStubPageComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
