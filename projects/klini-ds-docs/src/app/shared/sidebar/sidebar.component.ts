import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavItem {
  label: string;
  route?: string;
  external?: string;
  children?: NavItem[];
  highlight?: boolean;
}

interface NavSection {
  label: string;
  highlight?: boolean;
  items: NavItem[];
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive],
  styles: [`
    .sidebar {
      padding: 20px 0 40px;
    }

    .sidebar__brand {
      padding: 0 16px 20px;
      border-bottom: 1px solid var(--docs-border);
      margin-bottom: 16px;
    }

    .sidebar__logo {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
      margin-bottom: 6px;
    }

    .sidebar__logo-mark {
      width: 32px;
      height: 32px;
      background: var(--docs-accent);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 800;
      font-size: 14px;
      flex-shrink: 0;
    }

    .sidebar__logo-text {
      font-weight: 700;
      font-size: 15px;
      color: var(--docs-text);
    }

    .sidebar__version {
      font-size: 11px;
      padding: 2px 6px;
      border-radius: 4px;
      background: var(--docs-code-bg);
      color: var(--docs-text-muted);
      font-family: 'Fira Code', monospace;
      font-weight: 500;
    }

    .sidebar__section {
      margin-bottom: 8px;
    }

    .sidebar__section-label {
      padding: 8px 16px 4px;
      font-size: 11px;
      font-weight: 700;
      color: var(--docs-text-muted);
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }

    .sidebar__section-label--highlight {
      color: var(--docs-accent);
    }

    .sidebar__group-label {
      padding: 6px 16px 2px 28px;
      font-size: 11px;
      font-weight: 600;
      color: var(--docs-text-muted);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      opacity: 0.7;
    }

    .sidebar__link {
      display: flex;
      align-items: center;
      padding: 5px 16px 5px 28px;
      font-size: 13px;
      color: var(--docs-text-muted);
      text-decoration: none;
      border-radius: 4px;
      margin: 0 8px;
      transition: all 0.1s;
      line-height: 1.4;

      &:hover {
        color: var(--docs-text);
        background: var(--docs-border);
        text-decoration: none;
      }

      &.active {
        color: var(--docs-accent);
        background: #f0fdfa;
        font-weight: 600;
      }
    }

    .sidebar__link--top {
      padding-left: 16px;
    }

    .sidebar__link--highlight {
      color: var(--docs-accent);
      font-weight: 600;

      &:hover {
        background: #f0fdfa;
      }
    }

    .sidebar__divider {
      height: 1px;
      background: var(--docs-border);
      margin: 8px 16px;
    }
  `],
  template: `
    <nav class="docs-sidebar sidebar">
      <div class="sidebar__brand">
        <a routerLink="/" class="sidebar__logo">
          <div class="sidebar__logo-mark">K</div>
          <span class="sidebar__logo-text">Klini DS</span>
        </a>
        <span class="sidebar__version">v2.0.0</span>
      </div>

      <!-- Getting Started -->
      <div class="sidebar__section">
        <div class="sidebar__section-label">Início</div>
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }"
           class="sidebar__link sidebar__link--top">Visão Geral</a>
        <a routerLink="/getting-started" routerLinkActive="active"
           class="sidebar__link sidebar__link--top">Instalação</a>
        <a routerLink="/tokens" routerLinkActive="active"
           class="sidebar__link sidebar__link--top">Design Tokens</a>
      </div>

      <div class="sidebar__divider"></div>

      <!-- Charts highlight -->
      <div class="sidebar__section">
        <div class="sidebar__section-label sidebar__section-label--highlight">Charts & Analytics</div>
        <a routerLink="/charts" routerLinkActive="active"
           class="sidebar__link sidebar__link--top sidebar__link--highlight">
          <i class="pi pi-chart-bar" style="margin-right:6px;font-size:12px"></i>
          21 Chart Presets
        </a>
        <a routerLink="/components/chart" routerLinkActive="active"
           class="sidebar__link sidebar__link--top">kln-chart API</a>
      </div>

      <div class="sidebar__divider"></div>

      <!-- Components -->
      <div class="sidebar__section">
        <div class="sidebar__section-label">Components</div>

        <!-- Buttons -->
        <div class="sidebar__group-label">Buttons</div>
        @for (item of buttonItems; track item.label) {
          <a [routerLink]="item.route" routerLinkActive="active"
             class="sidebar__link">{{ item.label }}</a>
        }

        <!-- Forms -->
        <div class="sidebar__group-label">Forms</div>
        @for (item of formItems; track item.label) {
          <a [routerLink]="item.route" routerLinkActive="active"
             class="sidebar__link">{{ item.label }}</a>
        }

        <!-- Data Display -->
        <div class="sidebar__group-label">Data Display</div>
        @for (item of dataItems; track item.label) {
          <a [routerLink]="item.route" routerLinkActive="active"
             class="sidebar__link">{{ item.label }}</a>
        }

        <!-- Charts & Analytics -->
        <div class="sidebar__group-label">Charts & Analytics</div>
        @for (item of chartItems; track item.label) {
          <a [routerLink]="item.route" routerLinkActive="active"
             class="sidebar__link">{{ item.label }}</a>
        }

        <!-- Feedback -->
        <div class="sidebar__group-label">Feedback</div>
        @for (item of feedbackItems; track item.label) {
          <a [routerLink]="item.route" routerLinkActive="active"
             class="sidebar__link">{{ item.label }}</a>
        }

        <!-- Overlay -->
        <div class="sidebar__group-label">Overlay</div>
        @for (item of overlayItems; track item.label) {
          <a [routerLink]="item.route" routerLinkActive="active"
             class="sidebar__link">{{ item.label }}</a>
        }

        <!-- Navigation -->
        <div class="sidebar__group-label">Navigation</div>
        @for (item of navItems; track item.label) {
          <a [routerLink]="item.route" routerLinkActive="active"
             class="sidebar__link">{{ item.label }}</a>
        }

        <!-- Layout -->
        <div class="sidebar__group-label">Layout</div>
        @for (item of layoutItems; track item.label) {
          <a [routerLink]="item.route" routerLinkActive="active"
             class="sidebar__link">{{ item.label }}</a>
        }

        <!-- Misc -->
        <div class="sidebar__group-label">Misc</div>
        @for (item of miscItems; track item.label) {
          <a [routerLink]="item.route" routerLinkActive="active"
             class="sidebar__link">{{ item.label }}</a>
        }

        <!-- Portal Templates -->
        <div class="sidebar__group-label">Portal Templates</div>
        @for (item of portalItems; track item.label) {
          <a [routerLink]="item.route" routerLinkActive="active"
             class="sidebar__link">{{ item.label }}</a>
        }
      </div>
    </nav>
  `,
})
export class SidebarComponent {
  buttonItems = [
    { label: 'Button', route: '/components/button' },
    { label: 'Split Button', route: '/components/split-button' },
    { label: 'Button Group', route: '/components/button-group' },
    { label: 'Speed Dial', route: '/components/speed-dial' },
  ];

  formItems = [
    { label: 'Input Text', route: '/components/input-text' },
    { label: 'Input Number', route: '/components/input-number' },
    { label: 'Input Mask', route: '/components/input-mask' },
    { label: 'Input OTP', route: '/components/input-otp' },
    { label: 'Textarea', route: '/components/textarea' },
    { label: 'Password', route: '/components/password' },
    { label: 'Select', route: '/components/select' },
    { label: 'MultiSelect', route: '/components/multiselect' },
    { label: 'AutoComplete', route: '/components/autocomplete' },
    { label: 'Cascade Select', route: '/components/cascade-select' },
    { label: 'Listbox', route: '/components/listbox' },
    { label: 'Select Button', route: '/components/select-button' },
    { label: 'Toggle Button', route: '/components/toggle-button' },
    { label: 'Radio Group', route: '/components/radio-group' },
    { label: 'Checkbox', route: '/components/checkbox' },
    { label: 'Toggle', route: '/components/toggle' },
    { label: 'Rating', route: '/components/rating' },
    { label: 'Slider', route: '/components/slider' },
    { label: 'Calendar', route: '/components/calendar' },
    { label: 'Tree Select', route: '/components/tree-select' },
    { label: 'Color Picker', route: '/components/color-picker' },
    { label: 'Icon Field', route: '/components/icon-field' },
    { label: 'Ifta Label', route: '/components/ifta-label' },
    { label: 'Float Label', route: '/components/float-label' },
    { label: 'File Upload', route: '/components/file-upload' },
    { label: 'Editor', route: '/components/editor' },
  ];

  dataItems = [
    { label: 'Table', route: '/components/table' },
    { label: 'Tree Table', route: '/components/tree-table' },
    { label: 'DataView', route: '/components/dataview' },
    { label: 'Carousel', route: '/components/carousel' },
    { label: 'Tree', route: '/components/tree' },
    { label: 'Order List', route: '/components/order-list' },
    { label: 'Pick List', route: '/components/pick-list' },
    { label: 'Virtual Scroller', route: '/components/virtual-scroller' },
    { label: 'Timeline', route: '/components/timeline' },
    { label: 'Galleria', route: '/components/galleria' },
    { label: 'Image Compare', route: '/components/image-compare' },
  ];

  chartItems = [
    { label: 'Chart (21 presets)', route: '/charts' },
    { label: 'Knob', route: '/components/knob' },
    { label: 'Meter Group', route: '/components/meter-group' },
    { label: 'Progress Bar', route: '/components/progress-bar' },
    { label: 'Progress Spinner', route: '/components/progress-spinner' },
  ];

  feedbackItems = [
    { label: 'Toast', route: '/components/toast' },
    { label: 'Message', route: '/components/message' },
    { label: 'Messages', route: '/components/messages' },
    { label: 'Confirm Dialog', route: '/components/confirm-dialog' },
    { label: 'Confirm Popup', route: '/components/confirm-popup' },
    { label: 'Block UI', route: '/components/block-ui' },
  ];

  overlayItems = [
    { label: 'Dialog', route: '/components/dialog' },
    { label: 'Drawer', route: '/components/drawer' },
    { label: 'Popover', route: '/components/popover' },
    { label: 'Context Menu', route: '/components/context-menu' },
    { label: 'Overlay Badge', route: '/components/overlay-badge' },
    { label: 'Tooltip', route: '/components/tooltip' },
  ];

  navItems = [
    { label: 'Tabs', route: '/components/tabs' },
    { label: 'Tab Menu', route: '/components/tab-menu' },
    { label: 'Stepper', route: '/components/stepper' },
    { label: 'Steps', route: '/components/steps' },
    { label: 'Breadcrumb', route: '/components/breadcrumb' },
    { label: 'Menu', route: '/components/menu' },
    { label: 'Menubar', route: '/components/menubar' },
    { label: 'Mega Menu', route: '/components/mega-menu' },
    { label: 'Tiered Menu', route: '/components/tiered-menu' },
    { label: 'Panel Menu', route: '/components/panel-menu' },
    { label: 'Accordion', route: '/components/accordion' },
  ];

  layoutItems = [
    { label: 'Card', route: '/components/card' },
    { label: 'KPI Card', route: '/components/kpi-card' },
    { label: 'Avatar', route: '/components/avatar' },
    { label: 'Avatar Group', route: '/components/avatar-group' },
    { label: 'Badge', route: '/components/badge' },
    { label: 'Tag', route: '/components/tag' },
    { label: 'Chip', route: '/components/chip' },
    { label: 'Skeleton', route: '/components/skeleton' },
    { label: 'Divider', route: '/components/divider' },
    { label: 'Status Pill', route: '/components/status-pill' },
    { label: 'Image', route: '/components/image' },
    { label: 'Toolbar', route: '/components/toolbar' },
    { label: 'Splitter', route: '/components/splitter' },
    { label: 'Panel', route: '/components/panel' },
    { label: 'Fieldset', route: '/components/fieldset' },
    { label: 'Scroll Panel', route: '/components/scroll-panel' },
  ];

  miscItems = [
    { label: 'Inplace', route: '/components/inplace' },
    { label: 'Scroll Top', route: '/components/scroll-top' },
    { label: 'Tooltip', route: '/components/tooltip' },
  ];

  portalItems = [
    { label: 'Portal Templates', route: '/components/portal-templates' },
    { label: 'Portal Shell', route: '/components/portal-templates' },
    { label: 'Portal Header', route: '/components/portal-templates' },
    { label: 'Portal Footer', route: '/components/portal-templates' },
    { label: 'Portal Login', route: '/components/portal-templates' },
    { label: 'Service Tile', route: '/components/portal-templates' },
  ];
}
