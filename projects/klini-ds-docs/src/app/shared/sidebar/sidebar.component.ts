import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

/** Versao do pacote — fonte unica para sidebar e header */
export const DS_VERSION = 'v2.0.0';

interface NavItem { label: string; route: string; }

@Component({
  selector: 'app-sidebar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive],
  styles: [`
    .sidebar { padding: 20px 0 40px; }

    .sidebar__brand {
      padding: 0 16px 16px;
      border-bottom: 1px solid var(--docs-border);
      margin-bottom: 12px;
    }

    .sidebar__logo {
      display: flex; align-items: center; gap: 10px;
      text-decoration: none; margin-bottom: 6px;
    }

    .sidebar__logo-mark {
      width: 34px; height: 34px; flex-shrink: 0;
    }

    .sidebar__logo-text {
      display: flex; flex-direction: column; line-height: 1;
    }
    .sidebar__logo-name { font-weight: 800; font-size: 15px; color: var(--docs-text); }
    .sidebar__logo-sub  { font-size: 10px; font-weight: 500; color: var(--docs-text-muted); letter-spacing: 0.04em; }

    .sidebar__version {
      font-size: 11px; padding: 2px 6px; border-radius: 4px;
      background: var(--docs-code-bg); color: var(--docs-text-muted);
      font-family: 'Fira Code', monospace; font-weight: 500;
    }

    /* Search */
    .sidebar__search {
      padding: 0 12px 12px;
      border-bottom: 1px solid var(--docs-border);
      margin-bottom: 8px;
    }

    .sidebar__search-wrap {
      position: relative;
    }

    .sidebar__search-icon {
      position: absolute; left: 10px; top: 50%; transform: translateY(-50%);
      color: var(--docs-text-muted); font-size: 12px; pointer-events: none;
    }

    .sidebar__search-input {
      width: 100%; padding: 7px 10px 7px 30px;
      border: 1px solid var(--docs-border); border-radius: 6px;
      font-size: 12px; font-family: inherit; color: var(--docs-text);
      background: var(--docs-bg); outline: none; transition: border-color 0.15s;
      &:focus { border-color: var(--docs-accent); }
      &::placeholder { color: var(--docs-text-muted); }
    }

    .sidebar__search-count {
      font-size: 11px; color: var(--docs-text-muted); margin-top: 6px; padding: 0 2px;
    }

    /* Search results flat list */
    .sidebar__results { padding: 4px 0; }
    .sidebar__results-empty {
      padding: 12px 16px; font-size: 12px; color: var(--docs-text-muted); text-align: center;
    }

    .sidebar__section { margin-bottom: 8px; }

    .sidebar__section-label {
      padding: 8px 16px 4px; font-size: 11px; font-weight: 700;
      color: var(--docs-text-muted); text-transform: uppercase; letter-spacing: 0.08em;
    }

    .sidebar__section-label--highlight { color: var(--docs-accent); }

    .sidebar__group-label {
      padding: 6px 16px 2px 28px; font-size: 11px; font-weight: 600;
      color: var(--docs-text-muted); text-transform: uppercase;
      letter-spacing: 0.05em; opacity: 0.7;
    }

    .sidebar__link {
      display: flex; align-items: center;
      padding: 5px 16px 5px 28px; font-size: 13px; color: var(--docs-text-muted);
      text-decoration: none; border-radius: 5px; margin: 0 8px;
      transition: all 0.1s; line-height: 1.4; position: relative;
      &:hover { color: var(--docs-text); background: var(--docs-code-bg); text-decoration: none; }
      &.active {
        color: var(--docs-accent);
        background: var(--docs-brand-soft);
        font-weight: 600;
        &::before {
          content: '';
          position: absolute;
          left: 0; top: 20%; bottom: 20%;
          width: 2.5px;
          border-radius: 9999px;
          background: var(--docs-accent);
        }
      }
    }

    .sidebar__link--top { padding-left: 16px; }

    .sidebar__link--highlight {
      color: var(--docs-accent); font-weight: 600;
      &:hover { background: var(--docs-brand-soft); }
    }

    .sidebar__divider { height: 1px; background: var(--docs-border); margin: 8px 16px; }
  `],
  template: `
    <nav class="docs-sidebar sidebar" aria-label="Navegacao principal">

      <!-- Brand -->
      <div class="sidebar__brand">
        <a routerLink="/" class="sidebar__logo" aria-label="Klini DS — inicio">
          <!-- Klini logomark SVG -->
          <svg class="sidebar__logo-mark" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="34" height="34" rx="9" fill="#259591"/>
            <!-- K mark: vertical bar + two diagonals -->
            <line x1="10" y1="8"  x2="10" y2="26" stroke="white" stroke-width="2.8" stroke-linecap="round"/>
            <line x1="10" y1="17" x2="21" y2="8"  stroke="white" stroke-width="2.4" stroke-linecap="round"/>
            <line x1="10" y1="17" x2="21" y2="26" stroke="white" stroke-width="2.4" stroke-linecap="round"/>
            <!-- Dot (saúde / health cross accent) -->
            <circle cx="24" cy="10" r="2" fill="#D3EAE9"/>
          </svg>
          <span class="sidebar__logo-text">
            <span class="sidebar__logo-name">Klini DS</span>
            <span class="sidebar__logo-sub">Design System</span>
          </span>
        </a>
        <span class="sidebar__version">{{ version }}</span>
      </div>

      <!-- Search -->
      <div class="sidebar__search">
        <div class="sidebar__search-wrap">
          <i class="pi pi-search sidebar__search-icon" aria-hidden="true"></i>
          <input
            type="search"
            class="sidebar__search-input"
            placeholder="Buscar componente..."
            [value]="searchQuery()"
            (input)="onSearch($event)"
            aria-label="Buscar componente"
          />
        </div>
        @if (searchQuery()) {
          <p class="sidebar__search-count">
            {{ searchResults().length }} resultado{{ searchResults().length !== 1 ? 's' : '' }}
          </p>
        }
      </div>

      <!-- Search results -->
      @if (searchQuery()) {
        <div class="sidebar__results" role="listbox" aria-label="Resultados da busca">
          @if (searchResults().length === 0) {
            <p class="sidebar__results-empty">Nenhum componente encontrado</p>
          } @else {
            @for (item of searchResults(); track item.route) {
              <a [routerLink]="item.route" routerLinkActive="active"
                 class="sidebar__link sidebar__link--top"
                 (click)="searchQuery.set('')">
                {{ item.label }}
              </a>
            }
          }
        </div>

      } @else {
        <!-- Full grouped nav (modo normal) -->

        <!-- Getting Started -->
        <div class="sidebar__section">
          <div class="sidebar__section-label">Inicio</div>
          <a routerLink="/" routerLinkActive="active"
             [routerLinkActiveOptions]="{ exact: true }"
             class="sidebar__link sidebar__link--top">Visao Geral</a>
          <a routerLink="/getting-started" routerLinkActive="active"
             class="sidebar__link sidebar__link--top">Instalacao</a>
          <a routerLink="/tokens" routerLinkActive="active"
             class="sidebar__link sidebar__link--top">Design Tokens</a>
          <a routerLink="/icons" routerLinkActive="active"
             class="sidebar__link sidebar__link--top">
            <i class="pi pi-star" style="margin-right:6px;font-size:11px" aria-hidden="true"></i>
            PrimeIcons
          </a>
        </div>

        <div class="sidebar__divider"></div>

        <!-- Charts highlight -->
        <div class="sidebar__section">
          <div class="sidebar__section-label sidebar__section-label--highlight">Charts & Analytics</div>
          <a routerLink="/charts" routerLinkActive="active"
             class="sidebar__link sidebar__link--top sidebar__link--highlight">
            <i class="pi pi-chart-bar" style="margin-right:6px;font-size:12px" aria-hidden="true"></i>
            21 Chart Presets
          </a>
          <a routerLink="/components/chart" routerLinkActive="active"
             class="sidebar__link sidebar__link--top">kln-chart API</a>
        </div>

        <div class="sidebar__divider"></div>

        <!-- Components -->
        <div class="sidebar__section">
          <div class="sidebar__section-label">Components</div>

          <div class="sidebar__group-label">Buttons</div>
          @for (item of buttonItems; track item.route) {
            <a [routerLink]="item.route" routerLinkActive="active" class="sidebar__link">{{ item.label }}</a>
          }

          <div class="sidebar__group-label">Forms</div>
          @for (item of formItems; track item.route) {
            <a [routerLink]="item.route" routerLinkActive="active" class="sidebar__link">{{ item.label }}</a>
          }

          <div class="sidebar__group-label">Data Display</div>
          @for (item of dataItems; track item.route) {
            <a [routerLink]="item.route" routerLinkActive="active" class="sidebar__link">{{ item.label }}</a>
          }

          <div class="sidebar__group-label">Charts & Analytics</div>
          @for (item of chartItems; track item.route) {
            <a [routerLink]="item.route" routerLinkActive="active" class="sidebar__link">{{ item.label }}</a>
          }

          <div class="sidebar__group-label">Feedback</div>
          @for (item of feedbackItems; track item.route) {
            <a [routerLink]="item.route" routerLinkActive="active" class="sidebar__link">{{ item.label }}</a>
          }

          <div class="sidebar__group-label">Overlay</div>
          @for (item of overlayItems; track item.route) {
            <a [routerLink]="item.route" routerLinkActive="active" class="sidebar__link">{{ item.label }}</a>
          }

          <div class="sidebar__group-label">Navigation</div>
          @for (item of navItems; track item.route) {
            <a [routerLink]="item.route" routerLinkActive="active" class="sidebar__link">{{ item.label }}</a>
          }

          <div class="sidebar__group-label">Layout</div>
          @for (item of layoutItems; track item.route) {
            <a [routerLink]="item.route" routerLinkActive="active" class="sidebar__link">{{ item.label }}</a>
          }

          <div class="sidebar__group-label">Misc</div>
          @for (item of miscItems; track item.route) {
            <a [routerLink]="item.route" routerLinkActive="active" class="sidebar__link">{{ item.label }}</a>
          }

          <div class="sidebar__group-label">Portal Templates</div>
          <a routerLink="/components/portal-templates" routerLinkActive="active" class="sidebar__link">
            Portal Templates
          </a>
        </div>
      }

    </nav>
  `,
})
export class SidebarComponent {
  readonly version = DS_VERSION;

  searchQuery = signal('');

  onSearch(event: Event): void {
    this.searchQuery.set((event.target as HTMLInputElement).value);
  }

  private readonly allItems: NavItem[] = [
    { label: 'Visao Geral',      route: '/' },
    { label: 'Instalacao',       route: '/getting-started' },
    { label: 'Design Tokens',    route: '/tokens' },
    { label: 'PrimeIcons',       route: '/icons' },
    { label: 'Chart Presets',    route: '/charts' },
    { label: 'kln-chart API',    route: '/components/chart' },
    { label: 'Button',           route: '/components/button' },
    { label: 'Split Button',     route: '/components/split-button' },
    { label: 'Button Group',     route: '/components/button-group' },
    { label: 'Speed Dial',       route: '/components/speed-dial' },
    { label: 'Input Text',       route: '/components/input-text' },
    { label: 'Input Number',     route: '/components/input-number' },
    { label: 'Input Mask',       route: '/components/input-mask' },
    { label: 'Input OTP',        route: '/components/input-otp' },
    { label: 'Textarea',         route: '/components/textarea' },
    { label: 'Password',         route: '/components/password' },
    { label: 'Select',           route: '/components/select' },
    { label: 'MultiSelect',      route: '/components/multiselect' },
    { label: 'AutoComplete',     route: '/components/autocomplete' },
    { label: 'Cascade Select',   route: '/components/cascade-select' },
    { label: 'Listbox',          route: '/components/listbox' },
    { label: 'Select Button',    route: '/components/select-button' },
    { label: 'Toggle Button',    route: '/components/toggle-button' },
    { label: 'Radio Group',      route: '/components/radio-group' },
    { label: 'Checkbox',         route: '/components/checkbox' },
    { label: 'Toggle',           route: '/components/toggle' },
    { label: 'Rating',           route: '/components/rating' },
    { label: 'Slider',           route: '/components/slider' },
    { label: 'Calendar',         route: '/components/calendar' },
    { label: 'Tree Select',      route: '/components/tree-select' },
    { label: 'Color Picker',     route: '/components/color-picker' },
    { label: 'Icon Field',       route: '/components/icon-field' },
    { label: 'Ifta Label',       route: '/components/ifta-label' },
    { label: 'Float Label',      route: '/components/float-label' },
    { label: 'File Upload',      route: '/components/file-upload' },
    { label: 'Editor',           route: '/components/editor' },
    { label: 'Table',            route: '/components/table' },
    { label: 'Tree Table',       route: '/components/tree-table' },
    { label: 'DataView',         route: '/components/dataview' },
    { label: 'Carousel',         route: '/components/carousel' },
    { label: 'Tree',             route: '/components/tree' },
    { label: 'Order List',       route: '/components/order-list' },
    { label: 'Pick List',        route: '/components/pick-list' },
    { label: 'Virtual Scroller', route: '/components/virtual-scroller' },
    { label: 'Timeline',         route: '/components/timeline' },
    { label: 'Galleria',         route: '/components/galleria' },
    { label: 'Image Compare',    route: '/components/image-compare' },
    { label: 'Knob',             route: '/components/knob' },
    { label: 'Meter Group',      route: '/components/meter-group' },
    { label: 'Progress Bar',     route: '/components/progress-bar' },
    { label: 'Progress Spinner', route: '/components/progress-spinner' },
    { label: 'Toast',            route: '/components/toast' },
    { label: 'Message',          route: '/components/message' },
    { label: 'Messages',         route: '/components/messages' },
    { label: 'Confirm Dialog',   route: '/components/confirm-dialog' },
    { label: 'Confirm Popup',    route: '/components/confirm-popup' },
    { label: 'Block UI',         route: '/components/block-ui' },
    { label: 'Dialog',           route: '/components/dialog' },
    { label: 'Drawer',           route: '/components/drawer' },
    { label: 'Popover',          route: '/components/popover' },
    { label: 'Context Menu',     route: '/components/context-menu' },
    { label: 'Overlay Badge',    route: '/components/overlay-badge' },
    { label: 'Tooltip',          route: '/components/tooltip' },
    { label: 'Tabs',             route: '/components/tabs' },
    { label: 'Tab Menu',         route: '/components/tab-menu' },
    { label: 'Stepper',          route: '/components/stepper' },
    { label: 'Steps',            route: '/components/steps' },
    { label: 'Breadcrumb',       route: '/components/breadcrumb' },
    { label: 'Menu',             route: '/components/menu' },
    { label: 'Menubar',          route: '/components/menubar' },
    { label: 'Mega Menu',        route: '/components/mega-menu' },
    { label: 'Tiered Menu',      route: '/components/tiered-menu' },
    { label: 'Panel Menu',       route: '/components/panel-menu' },
    { label: 'Accordion',        route: '/components/accordion' },
    { label: 'Card',             route: '/components/card' },
    { label: 'KPI Card',         route: '/components/kpi-card' },
    { label: 'Avatar',           route: '/components/avatar' },
    { label: 'Avatar Group',     route: '/components/avatar-group' },
    { label: 'Badge',            route: '/components/badge' },
    { label: 'Tag',              route: '/components/tag' },
    { label: 'Chip',             route: '/components/chip' },
    { label: 'Skeleton',         route: '/components/skeleton' },
    { label: 'Divider',          route: '/components/divider' },
    { label: 'Status Pill',      route: '/components/status-pill' },
    { label: 'Image',            route: '/components/image' },
    { label: 'Toolbar',          route: '/components/toolbar' },
    { label: 'Splitter',         route: '/components/splitter' },
    { label: 'Panel',            route: '/components/panel' },
    { label: 'Fieldset',         route: '/components/fieldset' },
    { label: 'Scroll Panel',     route: '/components/scroll-panel' },
    { label: 'Inplace',          route: '/components/inplace' },
    { label: 'Scroll Top',       route: '/components/scroll-top' },
    { label: 'Portal Templates', route: '/components/portal-templates' },
  ];

  searchResults = computed<NavItem[]>(() => {
    const q = this.searchQuery().toLowerCase().trim();
    if (!q) return [];
    return this.allItems.filter(i => i.label.toLowerCase().includes(q));
  });

  buttonItems:   NavItem[] = [
    { label: 'Button',       route: '/components/button' },
    { label: 'Split Button', route: '/components/split-button' },
    { label: 'Button Group', route: '/components/button-group' },
    { label: 'Speed Dial',   route: '/components/speed-dial' },
  ];
  formItems:     NavItem[] = [
    { label: 'Input Text',    route: '/components/input-text' },
    { label: 'Input Number',  route: '/components/input-number' },
    { label: 'Input Mask',    route: '/components/input-mask' },
    { label: 'Input OTP',     route: '/components/input-otp' },
    { label: 'Textarea',      route: '/components/textarea' },
    { label: 'Password',      route: '/components/password' },
    { label: 'Select',        route: '/components/select' },
    { label: 'MultiSelect',   route: '/components/multiselect' },
    { label: 'AutoComplete',  route: '/components/autocomplete' },
    { label: 'Cascade Select',route: '/components/cascade-select' },
    { label: 'Listbox',       route: '/components/listbox' },
    { label: 'Select Button', route: '/components/select-button' },
    { label: 'Toggle Button', route: '/components/toggle-button' },
    { label: 'Radio Group',   route: '/components/radio-group' },
    { label: 'Checkbox',      route: '/components/checkbox' },
    { label: 'Toggle',        route: '/components/toggle' },
    { label: 'Rating',        route: '/components/rating' },
    { label: 'Slider',        route: '/components/slider' },
    { label: 'Calendar',      route: '/components/calendar' },
    { label: 'Tree Select',   route: '/components/tree-select' },
    { label: 'Color Picker',  route: '/components/color-picker' },
    { label: 'Icon Field',    route: '/components/icon-field' },
    { label: 'Ifta Label',    route: '/components/ifta-label' },
    { label: 'Float Label',   route: '/components/float-label' },
    { label: 'File Upload',   route: '/components/file-upload' },
    { label: 'Editor',        route: '/components/editor' },
  ];
  dataItems:     NavItem[] = [
    { label: 'Table',           route: '/components/table' },
    { label: 'Tree Table',      route: '/components/tree-table' },
    { label: 'DataView',        route: '/components/dataview' },
    { label: 'Carousel',        route: '/components/carousel' },
    { label: 'Tree',            route: '/components/tree' },
    { label: 'Order List',      route: '/components/order-list' },
    { label: 'Pick List',       route: '/components/pick-list' },
    { label: 'Virtual Scroller',route: '/components/virtual-scroller' },
    { label: 'Timeline',        route: '/components/timeline' },
    { label: 'Galleria',        route: '/components/galleria' },
    { label: 'Image Compare',   route: '/components/image-compare' },
  ];
  chartItems:    NavItem[] = [
    { label: 'Chart (21 presets)',  route: '/charts' },
    { label: 'Knob',               route: '/components/knob' },
    { label: 'Meter Group',        route: '/components/meter-group' },
    { label: 'Progress Bar',       route: '/components/progress-bar' },
    { label: 'Progress Spinner',   route: '/components/progress-spinner' },
  ];
  feedbackItems: NavItem[] = [
    { label: 'Toast',          route: '/components/toast' },
    { label: 'Message',        route: '/components/message' },
    { label: 'Messages',       route: '/components/messages' },
    { label: 'Confirm Dialog', route: '/components/confirm-dialog' },
    { label: 'Confirm Popup',  route: '/components/confirm-popup' },
    { label: 'Block UI',       route: '/components/block-ui' },
  ];
  overlayItems:  NavItem[] = [
    { label: 'Dialog',        route: '/components/dialog' },
    { label: 'Drawer',        route: '/components/drawer' },
    { label: 'Popover',       route: '/components/popover' },
    { label: 'Context Menu',  route: '/components/context-menu' },
    { label: 'Overlay Badge', route: '/components/overlay-badge' },
    { label: 'Tooltip',       route: '/components/tooltip' },
  ];
  navItems:      NavItem[] = [
    { label: 'Tabs',        route: '/components/tabs' },
    { label: 'Tab Menu',    route: '/components/tab-menu' },
    { label: 'Stepper',     route: '/components/stepper' },
    { label: 'Steps',       route: '/components/steps' },
    { label: 'Breadcrumb',  route: '/components/breadcrumb' },
    { label: 'Menu',        route: '/components/menu' },
    { label: 'Menubar',     route: '/components/menubar' },
    { label: 'Mega Menu',   route: '/components/mega-menu' },
    { label: 'Tiered Menu', route: '/components/tiered-menu' },
    { label: 'Panel Menu',  route: '/components/panel-menu' },
    { label: 'Accordion',   route: '/components/accordion' },
  ];
  layoutItems:   NavItem[] = [
    { label: 'Card',         route: '/components/card' },
    { label: 'KPI Card',     route: '/components/kpi-card' },
    { label: 'Avatar',       route: '/components/avatar' },
    { label: 'Avatar Group', route: '/components/avatar-group' },
    { label: 'Badge',        route: '/components/badge' },
    { label: 'Tag',          route: '/components/tag' },
    { label: 'Chip',         route: '/components/chip' },
    { label: 'Skeleton',     route: '/components/skeleton' },
    { label: 'Divider',      route: '/components/divider' },
    { label: 'Status Pill',  route: '/components/status-pill' },
    { label: 'Image',        route: '/components/image' },
    { label: 'Toolbar',      route: '/components/toolbar' },
    { label: 'Splitter',     route: '/components/splitter' },
    { label: 'Panel',        route: '/components/panel' },
    { label: 'Fieldset',     route: '/components/fieldset' },
    { label: 'Scroll Panel', route: '/components/scroll-panel' },
  ];
  miscItems:     NavItem[] = [
    { label: 'Inplace',    route: '/components/inplace' },
    { label: 'Scroll Top', route: '/components/scroll-top' },
  ];
}
