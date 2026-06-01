import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CodeBlockComponent } from '../../shared/code-block/code-block.component';

interface ComponentEntry {
  name: string;
  selector: string;
  route: string;
}

interface CategoryGroup {
  category: string;
  items: ComponentEntry[];
}

@Component({
  selector: 'app-home',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, CodeBlockComponent],
  template: `
    <div>
      <!-- Hero -->
      <div style="margin-bottom:48px">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px">
          <h1 class="docs-page-title" style="margin-bottom:0">Klini Design System</h1>
          <span class="badge badge--version">v2.0.0</span>
          <span class="badge badge--new">Angular 18</span>
        </div>
        <p class="docs-page-description">
          Biblioteca de componentes Angular 18 + PrimeNG 18 para o ecossistema Klini Saúde.
          94 componentes prontos para produção, 21 presets de gráficos, tokens de design
          e tema PrimeNG customizado (KlnPrime).
        </p>
      </div>

      <!-- Stats -->
      <div class="stats-row">
        <div class="stat-card">
          <div class="stat-card__value">94</div>
          <div class="stat-card__label">Componentes</div>
        </div>
        <div class="stat-card">
          <div class="stat-card__value">21</div>
          <div class="stat-card__label">Chart Presets</div>
        </div>
        <div class="stat-card">
          <div class="stat-card__value">18</div>
          <div class="stat-card__label">Angular</div>
        </div>
        <div class="stat-card">
          <div class="stat-card__value">18</div>
          <div class="stat-card__label">PrimeNG</div>
        </div>
      </div>

      <!-- Charts highlight -->
      <div style="border:2px solid var(--docs-accent);border-radius:12px;padding:24px;margin-bottom:48px;background:linear-gradient(135deg,#f0fdfa 0%,#fff 100%)">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">
          <i class="pi pi-chart-bar" style="font-size:20px;color:var(--docs-accent)"></i>
          <h2 style="font-size:1.1rem;margin:0">Charts & Analytics — 21 presets</h2>
          <span class="badge badge--accent">Destaque</span>
        </div>
        <p style="color:var(--docs-text-muted);margin-bottom:16px;font-size:14px">
          Sistema completo de visualização de dados com KlnChartData, KlnChartPresets e KlnChartTokens.
          Barras, linhas, áreas, pizza, radar, scatter, bolhas, séries temporais e muito mais —
          todos aplicando automaticamente a paleta Klini.
        </p>
        <a routerLink="/charts" style="display:inline-flex;align-items:center;gap:6px;padding:8px 16px;background:var(--docs-accent);color:#fff;border-radius:6px;font-size:13px;font-weight:600;text-decoration:none">
          Ver todos os gráficos
          <i class="pi pi-arrow-right" style="font-size:11px"></i>
        </a>
      </div>

      <!-- Component Grid -->
      <h2 style="font-size:1.1rem;margin-bottom:24px;color:var(--docs-text)">Todos os Componentes</h2>

      @for (group of componentGroups; track group.category) {
        <div class="category-section">
          <h3>{{ group.category }}</h3>
          <div class="component-grid">
            @for (item of group.items; track item.name) {
              <a [routerLink]="item.route" class="component-card">
                <div class="component-card__name">{{ item.name }}</div>
                <div class="component-card__selector">{{ item.selector }}</div>
              </a>
            }
          </div>
        </div>
      }

      <!-- Quick Install -->
      <div class="quick-install">
        <h2>Instalação rápida</h2>
        <p>Configure o .npmrc, instale o pacote e importe o tema KlnPrime.</p>
        <app-code-block language="bash" [code]="installCode" />
        <div style="margin-top:12px">
          <a routerLink="/getting-started" style="color:var(--docs-accent);font-size:13px;font-weight:600">
            Ver guia completo →
          </a>
        </div>
      </div>
    </div>
  `,
})
export class HomeComponent {
  installCode = `# .npmrc
@klini-saude:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=\${GITHUB_TOKEN}

# instalar
npm install @klini-saude/ds`;

  componentGroups: CategoryGroup[] = [
    {
      category: 'Buttons',
      items: [
        { name: 'Button', selector: 'kln-button', route: '/components/button' },
        { name: 'Split Button', selector: 'kln-split-button', route: '/components/split-button' },
        { name: 'Button Group', selector: 'kln-button-group', route: '/components/button-group' },
        { name: 'Speed Dial', selector: 'kln-speed-dial', route: '/components/speed-dial' },
      ],
    },
    {
      category: 'Forms',
      items: [
        { name: 'Input Text', selector: 'kln-input-text', route: '/components/input-text' },
        { name: 'Input Number', selector: 'kln-input-number', route: '/components/input-number' },
        { name: 'Input Mask', selector: 'kln-input-mask', route: '/components/input-mask' },
        { name: 'Input OTP', selector: 'kln-input-otp', route: '/components/input-otp' },
        { name: 'Textarea', selector: 'kln-textarea', route: '/components/textarea' },
        { name: 'Password', selector: 'kln-password', route: '/components/password' },
        { name: 'Select', selector: 'kln-select', route: '/components/select' },
        { name: 'MultiSelect', selector: 'kln-multiselect', route: '/components/multiselect' },
        { name: 'AutoComplete', selector: 'kln-autocomplete', route: '/components/autocomplete' },
        { name: 'Cascade Select', selector: 'kln-cascade-select', route: '/components/cascade-select' },
        { name: 'Listbox', selector: 'kln-listbox', route: '/components/listbox' },
        { name: 'Select Button', selector: 'kln-select-button', route: '/components/select-button' },
        { name: 'Toggle Button', selector: 'kln-toggle-button', route: '/components/toggle-button' },
        { name: 'Radio Group', selector: 'kln-radio-group', route: '/components/radio-group' },
        { name: 'Checkbox', selector: 'kln-checkbox', route: '/components/checkbox' },
        { name: 'Toggle', selector: 'kln-toggle', route: '/components/toggle' },
        { name: 'Rating', selector: 'kln-rating', route: '/components/rating' },
        { name: 'Slider', selector: 'kln-slider', route: '/components/slider' },
        { name: 'Calendar', selector: 'kln-calendar', route: '/components/calendar' },
        { name: 'Tree Select', selector: 'kln-tree-select', route: '/components/tree-select' },
        { name: 'Color Picker', selector: 'kln-color-picker', route: '/components/color-picker' },
        { name: 'Icon Field', selector: 'kln-icon-field', route: '/components/icon-field' },
        { name: 'Ifta Label', selector: 'kln-ifta-label', route: '/components/ifta-label' },
        { name: 'Float Label', selector: 'kln-float-label', route: '/components/float-label' },
        { name: 'File Upload', selector: 'kln-file-upload', route: '/components/file-upload' },
        { name: 'Editor', selector: 'kln-editor', route: '/components/editor' },
      ],
    },
    {
      category: 'Data Display',
      items: [
        { name: 'Table', selector: 'kln-table', route: '/components/table' },
        { name: 'Tree Table', selector: 'kln-tree-table', route: '/components/tree-table' },
        { name: 'DataView', selector: 'kln-dataview', route: '/components/dataview' },
        { name: 'Carousel', selector: 'kln-carousel', route: '/components/carousel' },
        { name: 'Tree', selector: 'kln-tree', route: '/components/tree' },
        { name: 'Order List', selector: 'kln-order-list', route: '/components/order-list' },
        { name: 'Pick List', selector: 'kln-pick-list', route: '/components/pick-list' },
        { name: 'Virtual Scroller', selector: 'kln-virtual-scroller', route: '/components/virtual-scroller' },
        { name: 'Timeline', selector: 'kln-timeline', route: '/components/timeline' },
        { name: 'Galleria', selector: 'kln-galleria', route: '/components/galleria' },
        { name: 'Image Compare', selector: 'kln-image-compare', route: '/components/image-compare' },
      ],
    },
    {
      category: 'Charts & Analytics',
      items: [
        { name: 'Chart (21 presets)', selector: 'kln-chart', route: '/charts' },
        { name: 'Knob', selector: 'kln-knob', route: '/components/knob' },
        { name: 'Meter Group', selector: 'kln-meter-group', route: '/components/meter-group' },
        { name: 'Progress Bar', selector: 'kln-progress-bar', route: '/components/progress-bar' },
        { name: 'Progress Spinner', selector: 'kln-progress-spinner', route: '/components/progress-spinner' },
      ],
    },
    {
      category: 'Feedback',
      items: [
        { name: 'Toast', selector: 'kln-toast', route: '/components/toast' },
        { name: 'Message', selector: 'kln-message', route: '/components/message' },
        { name: 'Messages', selector: 'kln-messages', route: '/components/messages' },
        { name: 'Confirm Dialog', selector: 'kln-confirm-dialog', route: '/components/confirm-dialog' },
        { name: 'Confirm Popup', selector: 'kln-confirm-popup', route: '/components/confirm-popup' },
        { name: 'Block UI', selector: 'kln-block-ui', route: '/components/block-ui' },
      ],
    },
    {
      category: 'Overlay',
      items: [
        { name: 'Dialog', selector: 'kln-dialog', route: '/components/dialog' },
        { name: 'Drawer', selector: 'kln-drawer', route: '/components/drawer' },
        { name: 'Popover', selector: 'kln-popover', route: '/components/popover' },
        { name: 'Context Menu', selector: 'kln-context-menu', route: '/components/context-menu' },
        { name: 'Overlay Badge', selector: 'kln-overlay-badge', route: '/components/overlay-badge' },
        { name: 'Tooltip', selector: 'pTooltip (diretiva)', route: '/components/tooltip' },
      ],
    },
    {
      category: 'Navigation',
      items: [
        { name: 'Tabs', selector: 'kln-tabs', route: '/components/tabs' },
        { name: 'Tab Menu', selector: 'kln-tab-menu', route: '/components/tab-menu' },
        { name: 'Stepper', selector: 'kln-stepper', route: '/components/stepper' },
        { name: 'Steps', selector: 'kln-steps', route: '/components/steps' },
        { name: 'Breadcrumb', selector: 'kln-breadcrumb', route: '/components/breadcrumb' },
        { name: 'Menu', selector: 'kln-menu', route: '/components/menu' },
        { name: 'Menubar', selector: 'kln-menubar', route: '/components/menubar' },
        { name: 'Mega Menu', selector: 'kln-mega-menu', route: '/components/mega-menu' },
        { name: 'Tiered Menu', selector: 'kln-tiered-menu', route: '/components/tiered-menu' },
        { name: 'Panel Menu', selector: 'kln-panel-menu', route: '/components/panel-menu' },
        { name: 'Accordion', selector: 'kln-accordion', route: '/components/accordion' },
      ],
    },
    {
      category: 'Layout',
      items: [
        { name: 'Card', selector: 'kln-card', route: '/components/card' },
        { name: 'KPI Card', selector: 'kln-kpi-card', route: '/components/kpi-card' },
        { name: 'Avatar', selector: 'kln-avatar', route: '/components/avatar' },
        { name: 'Avatar Group', selector: 'kln-avatar-group', route: '/components/avatar-group' },
        { name: 'Badge', selector: 'kln-badge', route: '/components/badge' },
        { name: 'Tag', selector: 'kln-tag', route: '/components/tag' },
        { name: 'Chip', selector: 'kln-chip', route: '/components/chip' },
        { name: 'Skeleton', selector: 'kln-skeleton', route: '/components/skeleton' },
        { name: 'Divider', selector: 'kln-divider', route: '/components/divider' },
        { name: 'Status Pill', selector: 'kln-status-pill', route: '/components/status-pill' },
        { name: 'Image', selector: 'kln-image', route: '/components/image' },
        { name: 'Toolbar', selector: 'kln-toolbar', route: '/components/toolbar' },
        { name: 'Splitter', selector: 'kln-splitter', route: '/components/splitter' },
        { name: 'Panel', selector: 'kln-panel', route: '/components/panel' },
        { name: 'Fieldset', selector: 'kln-fieldset', route: '/components/fieldset' },
        { name: 'Scroll Panel', selector: 'kln-scroll-panel', route: '/components/scroll-panel' },
      ],
    },
    {
      category: 'Misc',
      items: [
        { name: 'Inplace', selector: 'kln-inplace', route: '/components/inplace' },
        { name: 'Scroll Top', selector: 'kln-scroll-top', route: '/components/scroll-top' },
      ],
    },
    {
      category: 'Portal Templates',
      items: [
        { name: 'Portal Shell', selector: 'kln-portal-shell', route: '/components/portal-templates' },
        { name: 'Portal Header', selector: 'kln-portal-header', route: '/components/portal-templates' },
        { name: 'Portal Footer', selector: 'kln-portal-footer', route: '/components/portal-templates' },
        { name: 'Portal Login', selector: 'kln-portal-login', route: '/components/portal-templates' },
        { name: 'Service Tile', selector: 'kln-service-tile', route: '/components/portal-templates' },
      ],
    },
  ];
}
