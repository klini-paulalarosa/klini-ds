import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

export interface NavEntry {
  label: string;
  route: string;
}

/** Lista ordenada de todas as paginas — mesma ordem da sidebar */
export const ALL_PAGES: NavEntry[] = [
  { label: 'Visao Geral',     route: '/' },
  { label: 'Instalacao',      route: '/getting-started' },
  { label: 'Design Tokens',   route: '/tokens' },
  { label: 'PrimeIcons',      route: '/icons' },
  { label: '21 Chart Presets',route: '/charts' },
  { label: 'kln-chart API',   route: '/components/chart' },
  // Buttons
  { label: 'Button',          route: '/components/button' },
  { label: 'Split Button',    route: '/components/split-button' },
  { label: 'Button Group',    route: '/components/button-group' },
  { label: 'Speed Dial',      route: '/components/speed-dial' },
  // Forms
  { label: 'Input Text',      route: '/components/input-text' },
  { label: 'Input Number',    route: '/components/input-number' },
  { label: 'Input Mask',      route: '/components/input-mask' },
  { label: 'Input OTP',       route: '/components/input-otp' },
  { label: 'Textarea',        route: '/components/textarea' },
  { label: 'Password',        route: '/components/password' },
  { label: 'Select',          route: '/components/select' },
  { label: 'MultiSelect',     route: '/components/multiselect' },
  { label: 'AutoComplete',    route: '/components/autocomplete' },
  { label: 'Cascade Select',  route: '/components/cascade-select' },
  { label: 'Listbox',         route: '/components/listbox' },
  { label: 'Select Button',   route: '/components/select-button' },
  { label: 'Toggle Button',   route: '/components/toggle-button' },
  { label: 'Radio Group',     route: '/components/radio-group' },
  { label: 'Checkbox',        route: '/components/checkbox' },
  { label: 'Toggle',          route: '/components/toggle' },
  { label: 'Rating',          route: '/components/rating' },
  { label: 'Slider',          route: '/components/slider' },
  { label: 'Calendar',        route: '/components/calendar' },
  { label: 'Tree Select',     route: '/components/tree-select' },
  { label: 'Color Picker',    route: '/components/color-picker' },
  { label: 'Icon Field',      route: '/components/icon-field' },
  { label: 'Ifta Label',      route: '/components/ifta-label' },
  { label: 'Float Label',     route: '/components/float-label' },
  { label: 'File Upload',     route: '/components/file-upload' },
  { label: 'Editor',          route: '/components/editor' },
  // Data Display
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
  // Charts
  { label: 'Knob',            route: '/components/knob' },
  { label: 'Meter Group',     route: '/components/meter-group' },
  { label: 'Progress Bar',    route: '/components/progress-bar' },
  { label: 'Progress Spinner',route: '/components/progress-spinner' },
  // Feedback
  { label: 'Toast',           route: '/components/toast' },
  { label: 'Message',         route: '/components/message' },
  { label: 'Messages',        route: '/components/messages' },
  { label: 'Confirm Dialog',  route: '/components/confirm-dialog' },
  { label: 'Confirm Popup',   route: '/components/confirm-popup' },
  { label: 'Block UI',        route: '/components/block-ui' },
  // Overlay
  { label: 'Dialog',          route: '/components/dialog' },
  { label: 'Drawer',          route: '/components/drawer' },
  { label: 'Popover',         route: '/components/popover' },
  { label: 'Context Menu',    route: '/components/context-menu' },
  { label: 'Overlay Badge',   route: '/components/overlay-badge' },
  { label: 'Tooltip',         route: '/components/tooltip' },
  // Navigation
  { label: 'Tabs',            route: '/components/tabs' },
  { label: 'Tab Menu',        route: '/components/tab-menu' },
  { label: 'Stepper',         route: '/components/stepper' },
  { label: 'Steps',           route: '/components/steps' },
  { label: 'Breadcrumb',      route: '/components/breadcrumb' },
  { label: 'Menu',            route: '/components/menu' },
  { label: 'Menubar',         route: '/components/menubar' },
  { label: 'Mega Menu',       route: '/components/mega-menu' },
  { label: 'Tiered Menu',     route: '/components/tiered-menu' },
  { label: 'Panel Menu',      route: '/components/panel-menu' },
  { label: 'Accordion',       route: '/components/accordion' },
  // Layout
  { label: 'Card',            route: '/components/card' },
  { label: 'KPI Card',        route: '/components/kpi-card' },
  { label: 'Avatar',          route: '/components/avatar' },
  { label: 'Avatar Group',    route: '/components/avatar-group' },
  { label: 'Badge',           route: '/components/badge' },
  { label: 'Tag',             route: '/components/tag' },
  { label: 'Chip',            route: '/components/chip' },
  { label: 'Skeleton',        route: '/components/skeleton' },
  { label: 'Divider',         route: '/components/divider' },
  { label: 'Status Pill',     route: '/components/status-pill' },
  { label: 'Image',           route: '/components/image' },
  { label: 'Toolbar',         route: '/components/toolbar' },
  { label: 'Splitter',        route: '/components/splitter' },
  { label: 'Panel',           route: '/components/panel' },
  { label: 'Fieldset',        route: '/components/fieldset' },
  { label: 'Scroll Panel',    route: '/components/scroll-panel' },
  // Misc
  { label: 'Inplace',         route: '/components/inplace' },
  { label: 'Scroll Top',      route: '/components/scroll-top' },
  // Portal
  { label: 'Portal Templates',route: '/components/portal-templates' },
];

@Component({
  selector: 'app-prev-next-nav',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  styles: [`
    .pn {
      display: flex;
      justify-content: space-between;
      gap: 16px;
      padding-top: 40px;
      margin-top: 40px;
      border-top: 1px solid var(--docs-border);
    }

    .pn__btn {
      display: flex;
      flex-direction: column;
      gap: 4px;
      padding: 14px 18px;
      border: 1px solid var(--docs-border);
      border-radius: 8px;
      text-decoration: none;
      transition: all 0.15s;
      min-width: 0;
      flex: 1;
      max-width: 220px;

      &:hover {
        border-color: var(--docs-accent);
        background: #f0fdfa;
        text-decoration: none;
      }
    }

    .pn__btn-next { align-items: flex-end; margin-left: auto; }

    .pn__dir {
      font-size: 11px;
      color: var(--docs-text-muted);
      text-transform: uppercase;
      letter-spacing: 0.06em;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .pn__label {
      font-size: 13px;
      font-weight: 600;
      color: var(--docs-accent);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  `],
  template: `
    @if (prev() || next()) {
      <nav class="pn" aria-label="Paginas anterior e proxima">
        @if (prev(); as p) {
          <a [routerLink]="p.route" class="pn__btn" [attr.aria-label]="'Anterior: ' + p.label">
            <span class="pn__dir">
              <i class="pi pi-arrow-left" style="font-size:10px" aria-hidden="true"></i>
              Anterior
            </span>
            <span class="pn__label">{{ p.label }}</span>
          </a>
        }
        @if (next(); as n) {
          <a [routerLink]="n.route" class="pn__btn pn__btn-next" [attr.aria-label]="'Proximo: ' + n.label">
            <span class="pn__dir">
              Proximo
              <i class="pi pi-arrow-right" style="font-size:10px" aria-hidden="true"></i>
            </span>
            <span class="pn__label">{{ n.label }}</span>
          </a>
        }
      </nav>
    }
  `,
})
export class PrevNextNavComponent {
  private readonly url$ = toSignal(
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map((e) => (e as NavigationEnd).urlAfterRedirects),
    ),
    { initialValue: this.router.url },
  );

  private readonly currentRoute = computed(() => {
    const raw = this.url$() ?? '';
    // withHashLocation coloca o path apos o #
    return raw.startsWith('#') ? raw.slice(1) : raw.split('#')[1] ?? raw;
  });

  prev = computed<NavEntry | null>(() => {
    const idx = ALL_PAGES.findIndex(p => p.route === this.currentRoute());
    return idx > 0 ? ALL_PAGES[idx - 1] : null;
  });

  next = computed<NavEntry | null>(() => {
    const idx = ALL_PAGES.findIndex(p => p.route === this.currentRoute());
    return idx >= 0 && idx < ALL_PAGES.length - 1 ? ALL_PAGES[idx + 1] : null;
  });

  constructor(private readonly router: Router) {}
}
