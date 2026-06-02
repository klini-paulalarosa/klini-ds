import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { DS_VERSION } from '../sidebar/sidebar.component';

/** Mapeia segmentos de URL para labels legíveis */
const ROUTE_LABELS: Record<string, string> = {
  '':                    'Visao Geral',
  'getting-started':     'Instalacao',
  'tokens':              'Design Tokens',
  'icons':               'PrimeIcons',
  'charts':              'Charts & Analytics',
  'components':          'Components',
  'button':              'Button',
  'split-button':        'Split Button',
  'button-group':        'Button Group',
  'speed-dial':          'Speed Dial',
  'input-text':          'Input Text',
  'input-number':        'Input Number',
  'input-mask':          'Input Mask',
  'input-otp':           'Input OTP',
  'textarea':            'Textarea',
  'password':            'Password',
  'select':              'Select',
  'multiselect':         'MultiSelect',
  'autocomplete':        'AutoComplete',
  'cascade-select':      'Cascade Select',
  'listbox':             'Listbox',
  'select-button':       'Select Button',
  'toggle-button':       'Toggle Button',
  'radio-group':         'Radio Group',
  'checkbox':            'Checkbox',
  'toggle':              'Toggle',
  'rating':              'Rating',
  'slider':              'Slider',
  'calendar':            'Calendar',
  'tree-select':         'Tree Select',
  'color-picker':        'Color Picker',
  'icon-field':          'Icon Field',
  'ifta-label':          'Ifta Label',
  'float-label':         'Float Label',
  'file-upload':         'File Upload',
  'editor':              'Editor',
  'table':               'Table',
  'tree-table':          'Tree Table',
  'dataview':            'DataView',
  'carousel':            'Carousel',
  'tree':                'Tree',
  'order-list':          'Order List',
  'pick-list':           'Pick List',
  'virtual-scroller':    'Virtual Scroller',
  'timeline':            'Timeline',
  'galleria':            'Galleria',
  'image-compare':       'Image Compare',
  'chart':               'Chart',
  'knob':                'Knob',
  'meter-group':         'Meter Group',
  'progress-bar':        'Progress Bar',
  'progress-spinner':    'Progress Spinner',
  'toast':               'Toast',
  'message':             'Message',
  'messages':            'Messages',
  'confirm-dialog':      'Confirm Dialog',
  'confirm-popup':       'Confirm Popup',
  'block-ui':            'Block UI',
  'dialog':              'Dialog',
  'drawer':              'Drawer',
  'popover':             'Popover',
  'context-menu':        'Context Menu',
  'overlay-badge':       'Overlay Badge',
  'tooltip':             'Tooltip',
  'tabs':                'Tabs',
  'tab-menu':            'Tab Menu',
  'stepper':             'Stepper',
  'steps':               'Steps',
  'breadcrumb':          'Breadcrumb',
  'menu':                'Menu',
  'menubar':             'Menubar',
  'mega-menu':           'Mega Menu',
  'tiered-menu':         'Tiered Menu',
  'panel-menu':          'Panel Menu',
  'accordion':           'Accordion',
  'card':                'Card',
  'kpi-card':            'KPI Card',
  'avatar':              'Avatar',
  'avatar-group':        'Avatar Group',
  'badge':               'Badge',
  'tag':                 'Tag',
  'chip':                'Chip',
  'skeleton':            'Skeleton',
  'divider':             'Divider',
  'status-pill':         'Status Pill',
  'image':               'Image',
  'toolbar':             'Toolbar',
  'splitter':            'Splitter',
  'panel':               'Panel',
  'fieldset':            'Fieldset',
  'scroll-panel':        'Scroll Panel',
  'inplace':             'Inplace',
  'scroll-top':          'Scroll Top',
  'portal-templates':    'Portal Templates',
};

@Component({
  selector: 'app-header',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  styles: [`
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: var(--docs-header-height);
      padding: 0 24px;
      border-bottom: 1px solid var(--docs-border);
      background: rgba(255,255,255,0.92);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      position: sticky;
      top: 0;
      z-index: 50;

      /* Linha de marca teal no topo */
      &::before {
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0;
        height: 2px;
        background: linear-gradient(90deg, var(--docs-accent) 0%, #6AA7AE 60%, transparent 100%);
      }
    }

    .header__left {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 13px;
      color: var(--docs-text-muted);
      overflow: hidden;
    }

    .header__crumb {
      color: var(--docs-text-muted);
      text-decoration: none;
      white-space: nowrap;
      &:hover { color: var(--docs-text); text-decoration: none; }
    }

    .header__crumb--active {
      color: var(--docs-text);
      font-weight: 500;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .header__sep {
      color: var(--docs-border);
      flex-shrink: 0;
    }

    .header__right {
      display: flex;
      align-items: center;
      gap: 12px;
      flex-shrink: 0;
    }

    .header__link {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 13px;
      color: var(--docs-text-muted);
      text-decoration: none;
      padding: 6px 10px;
      border-radius: 6px;
      transition: all 0.15s;

      &:hover {
        color: var(--docs-text);
        background: var(--docs-code-bg);
        text-decoration: none;
      }
    }

    .header__version-badge {
      padding: 3px 8px;
      background: var(--docs-code-bg);
      border: 1px solid var(--docs-border);
      border-radius: 9999px;
      font-size: 12px;
      font-weight: 600;
      color: var(--docs-accent);
      font-family: 'Fira Code', monospace;
    }
  `],
  template: `
    <header class="header docs-header" role="banner">
      <!-- Breadcrumb dinamico -->
      <nav class="header__left" aria-label="Breadcrumb">
        <a routerLink="/" class="header__crumb" aria-label="Klini DS — inicio">Klini DS</a>
        @for (crumb of breadcrumbs(); track crumb.label; let last = $last) {
          <span class="header__sep" aria-hidden="true">/</span>
          @if (last) {
            <span class="header__crumb--active" [attr.aria-current]="'page'">{{ crumb.label }}</span>
          } @else {
            <a [routerLink]="crumb.path" class="header__crumb">{{ crumb.label }}</a>
          }
        }
      </nav>

      <div class="header__right">
        <span class="header__version-badge">{{ version }}</span>
        <a
          href="https://github.com/klini-paulalarosa/klini-ds"
          target="_blank"
          rel="noopener noreferrer"
          class="header__link"
          aria-label="Ver codigo no GitHub"
        >
          <i class="pi pi-github" aria-hidden="true"></i>
          GitHub
        </a>
        <a
          href="https://github.com/orgs/klini-saude/packages"
          target="_blank"
          rel="noopener noreferrer"
          class="header__link"
          aria-label="Ver pacote no GitHub Packages"
        >
          <i class="pi pi-box" aria-hidden="true"></i>
          Packages
        </a>
      </div>
    </header>
  `,
})
export class HeaderComponent {
  readonly version = DS_VERSION;

  private readonly url$ = toSignal(
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map((e) => (e as NavigationEnd).urlAfterRedirects),
    ),
    { initialValue: this.router.url },
  );

  /** Gera trilha de navegacao a partir da URL atual */
  breadcrumbs = computed(() => {
    const raw = this.url$() ?? '';
    // Remove o hash (#) — withHashLocation coloca o path depois do #
    const path = raw.startsWith('#') ? raw.slice(1) : raw;
    const segments = path.split('/').filter(Boolean);

    if (segments.length === 0) return [];

    return segments.map((seg, i) => ({
      label: ROUTE_LABELS[seg] ?? seg,
      path: '/' + segments.slice(0, i + 1).join('/'),
    }));
  });

  constructor(private readonly router: Router) {}
}
