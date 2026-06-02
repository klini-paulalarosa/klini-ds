import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CodeBlockComponent } from '../../shared/code-block/code-block.component';

interface ComponentCard {
  name: string;
  selector: string;
  route: string;
  icon: string;
}

interface CategoryGroup {
  category: string;
  icon: string;
  color: string;
  items: ComponentCard[];
}

@Component({
  selector: 'app-home',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, CodeBlockComponent],
  styles: [`
    /* ── Hero ─────────────────────────────────────────── */
    .hero {
      padding: 56px 0 48px;
      border-bottom: 1px solid var(--docs-border);
      margin-bottom: 48px;
    }

    .hero__eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 4px 10px;
      border-radius: 9999px;
      background: var(--docs-brand-soft);
      border: 1px solid var(--docs-accent);
      font-size: 12px;
      font-weight: 600;
      color: var(--docs-accent);
      letter-spacing: 0.04em;
      margin-bottom: 20px;
    }

    .hero__title {
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 800;
      color: var(--docs-text);
      line-height: 1.15;
      letter-spacing: -0.03em;
      margin-bottom: 16px;
    }

    .hero__title-accent {
      color: var(--docs-accent);
    }

    .hero__desc {
      font-size: 1rem;
      color: var(--docs-text-muted);
      line-height: 1.7;
      max-width: 560px;
      margin-bottom: 32px;
    }

    .hero__actions {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-bottom: 40px;
    }

    .btn-primary {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 20px;
      background: var(--docs-accent);
      color: #fff;
      border-radius: 7px;
      font-size: 14px;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.15s;
      border: 1.5px solid var(--docs-accent);

      &:hover {
        background: var(--docs-accent-hover);
        border-color: var(--docs-accent-hover);
        text-decoration: none;
        color: #fff;
      }
    }

    .btn-outline {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 20px;
      background: transparent;
      color: var(--docs-text);
      border-radius: 7px;
      font-size: 14px;
      font-weight: 600;
      text-decoration: none;
      border: 1.5px solid var(--docs-border);
      transition: all 0.15s;

      &:hover {
        border-color: var(--docs-accent);
        color: var(--docs-accent);
        text-decoration: none;
      }
    }

    /* ── Install strip ────────────────────────────────── */
    .install-strip {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 16px;
      background: var(--docs-sidebar-bg);
      border: 1px solid var(--docs-border);
      border-radius: 8px;
      max-width: 480px;
      font-family: 'Fira Code', monospace;
      font-size: 13px;
      color: var(--docs-text);

      .install-strip__dollar {
        color: var(--docs-accent);
        font-weight: 700;
        flex-shrink: 0;
      }

      .install-strip__cmd {
        flex: 1;
        color: var(--docs-text);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .install-strip__copy {
        display: flex;
        align-items: center;
        gap: 4px;
        padding: 4px 8px;
        background: transparent;
        border: 1px solid var(--docs-border);
        border-radius: 4px;
        font-size: 11px;
        font-weight: 600;
        color: var(--docs-text-muted);
        cursor: pointer;
        font-family: inherit;
        flex-shrink: 0;
        transition: all 0.15s;

        &:hover {
          border-color: var(--docs-accent);
          color: var(--docs-accent);
        }
      }
    }

    /* ── Stats ────────────────────────────────────────── */
    .stats {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1px;
      background: var(--docs-border);
      border: 1px solid var(--docs-border);
      border-radius: 12px;
      overflow: hidden;
      margin-bottom: 56px;

      @media (max-width: 640px) {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    .stat {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 28px 16px;
      background: var(--docs-bg);
      text-align: center;
      gap: 4px;
      transition: background 0.18s, box-shadow 0.18s;
      cursor: default;

      &:hover {
        background: var(--docs-brand-soft);
        .stat__icon-wrap { background: var(--docs-accent); color: #fff; }
      }
    }

    .stat__icon-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 44px;
      height: 44px;
      border-radius: 10px;
      background: var(--docs-brand-surface);
      color: var(--docs-accent);
      margin-bottom: 10px;
      transition: background 0.18s, color 0.18s;
      font-size: 20px;
    }

    .stat__value {
      font-size: 2rem;
      font-weight: 800;
      color: var(--docs-text);
      letter-spacing: -0.03em;
      line-height: 1;
    }

    .stat__label {
      font-size: 12px;
      color: var(--docs-text-muted);
      font-weight: 500;
    }

    /* ── Highlight cards ──────────────────────────────── */
    .highlight-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 16px;
      margin-bottom: 56px;
    }

    .highlight-card {
      border: 1px solid var(--docs-border);
      border-radius: 10px;
      padding: 22px;
      text-decoration: none;
      display: flex;
      flex-direction: column;
      gap: 10px;
      transition: all 0.15s;
      background: var(--docs-bg);

      &:hover {
        border-color: var(--docs-accent);
        background: var(--docs-brand-soft);
        text-decoration: none;
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(37, 149, 145, 0.12);
      }
    }

    .highlight-card__icon {
      width: 40px;
      height: 40px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
    }

    .highlight-card__title {
      font-size: 14px;
      font-weight: 700;
      color: var(--docs-text);
    }

    .highlight-card__desc {
      font-size: 13px;
      color: var(--docs-text-muted);
      line-height: 1.5;
    }

    .highlight-card__badge {
      align-self: flex-start;
      font-size: 11px;
      font-weight: 600;
      color: var(--docs-accent);
      font-family: 'Fira Code', monospace;
    }

    /* ── Section ──────────────────────────────────────── */
    .section-header {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 20px;
      padding-bottom: 12px;
      border-bottom: 1px solid var(--docs-border);
    }

    .section-header__icon {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      flex-shrink: 0;
    }

    .section-header__title {
      font-size: 13px;
      font-weight: 700;
      color: var(--docs-text);
      text-transform: uppercase;
      letter-spacing: 0.07em;
    }

    .section-header__count {
      font-size: 12px;
      color: var(--docs-text-muted);
      background: var(--docs-code-bg);
      padding: 2px 7px;
      border-radius: 9999px;
      font-weight: 600;
    }

    /* ── Component grid ───────────────────────────────── */
    .comp-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
      gap: 8px;
      margin-bottom: 40px;
    }

    .comp-card {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 11px 14px;
      border: 1px solid var(--docs-border);
      border-radius: 8px;
      text-decoration: none;
      transition: all 0.12s;
      background: var(--docs-bg);
      min-width: 0;

      &:hover {
        border-color: var(--docs-accent);
        background: var(--docs-brand-soft);
        text-decoration: none;
      }
    }

    .comp-card__icon {
      font-size: 14px;
      color: var(--docs-accent);
      flex-shrink: 0;
      opacity: 0.8;
    }

    .comp-card__info {
      min-width: 0;
    }

    .comp-card__name {
      font-size: 13px;
      font-weight: 600;
      color: var(--docs-text);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .comp-card__selector {
      font-family: 'Fira Code', monospace;
      font-size: 10px;
      color: var(--docs-text-muted);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    /* ── Category section ─────────────────────────────── */
    .cat-section { margin-bottom: 44px; }
  `],
  template: `
    <div>

      <!-- ── Hero ───────────────────────────────────────── -->
      <div class="hero">
        <div class="hero__eyebrow">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zm0 1a5.5 5.5 0 110 11A5.5 5.5 0 018 2.5z" fill="currentColor"/>
            <path d="M8 5a1 1 0 011 1v3.5a1 1 0 01-2 0V6a1 1 0 011-1zm0-1.5a1 1 0 100-2 1 1 0 000 2z" fill="currentColor"/>
          </svg>
          Klini Saúde · Design System
        </div>

        <h1 class="hero__title">
          Componentes prontos<br>para o ecossistema
          <span class="hero__title-accent"> Klini Saúde</span>
        </h1>

        <p class="hero__desc">
          94 componentes Angular 18 + PrimeNG 18, 21 presets de gráficos,
          tokens de design extraídos do Figma e tema KlnPrime para portais
          de beneficiários, médicos e corretores.
        </p>

        <div class="hero__actions">
          <a routerLink="/getting-started" class="btn-primary">
            <i class="pi pi-play" style="font-size:12px" aria-hidden="true"></i>
            Começar agora
          </a>
          <a routerLink="/components/button" class="btn-outline">
            <i class="pi pi-box" style="font-size:12px" aria-hidden="true"></i>
            Ver componentes
          </a>
          <a href="https://github.com/klini-paulalarosa/klini-ds"
             target="_blank" rel="noopener noreferrer" class="btn-outline">
            <i class="pi pi-github" style="font-size:12px" aria-hidden="true"></i>
            GitHub
          </a>
        </div>

        <!-- Install strip -->
        <div class="install-strip" role="group" aria-label="Comando de instalacao">
          <span class="install-strip__dollar" aria-hidden="true">$</span>
          <span class="install-strip__cmd">npm install &#64;klini-saude/ds</span>
          <button
            class="install-strip__copy"
            (click)="copyInstall()"
            [attr.aria-label]="copied() ? 'Copiado!' : 'Copiar comando'"
          >
            <i [class]="copied() ? 'pi pi-check' : 'pi pi-copy'" style="font-size:10px" aria-hidden="true"></i>
            {{ copied() ? 'Copiado!' : 'Copiar' }}
          </button>
        </div>
      </div>

      <!-- ── Stats ──────────────────────────────────────── -->
      <div class="stats" aria-label="Estatísticas do design system">
        <div class="stat">
          <div class="stat__icon-wrap"><i class="pi pi-box" aria-hidden="true"></i></div>
          <div class="stat__value">94</div>
          <div class="stat__label">Componentes</div>
        </div>
        <div class="stat">
          <div class="stat__icon-wrap"><i class="pi pi-chart-bar" aria-hidden="true"></i></div>
          <div class="stat__value">21</div>
          <div class="stat__label">Chart Presets</div>
        </div>
        <div class="stat">
          <div class="stat__icon-wrap"><i class="pi pi-palette" aria-hidden="true"></i></div>
          <div class="stat__value">7</div>
          <div class="stat__label">Token Files</div>
        </div>
        <div class="stat">
          <div class="stat__icon-wrap"><i class="pi pi-code" aria-hidden="true"></i></div>
          <div class="stat__value">Angular 18</div>
          <div class="stat__label">+ PrimeNG 18</div>
        </div>
      </div>

      <!-- ── Destaques ───────────────────────────────────── -->
      <div class="docs-section" style="margin-bottom:0">
        <h2 style="font-size:1rem;margin-bottom:20px">Destaques do DS</h2>
      </div>
      <div class="highlight-grid" style="margin-bottom:56px">
        @for (h of highlights; track h.title) {
          <a [routerLink]="h.route" class="highlight-card">
            <div class="highlight-card__icon" [style.background]="h.iconBg" [style.color]="h.iconColor">
              <i [class]="'pi ' + h.icon" aria-hidden="true"></i>
            </div>
            <div class="highlight-card__title">{{ h.title }}</div>
            <div class="highlight-card__desc">{{ h.desc }}</div>
            <span class="highlight-card__badge">{{ h.badge }}</span>
          </a>
        }
      </div>

      <!-- ── Todos os componentes ────────────────────────── -->
      <h2 style="font-size:1rem;font-weight:700;color:var(--docs-text);margin-bottom:28px">
        Todos os Componentes
        <span style="font-size:12px;color:var(--docs-text-muted);font-weight:500;margin-left:8px">94 no total</span>
      </h2>

      @for (group of componentGroups; track group.category) {
        <div class="cat-section">
          <div class="section-header">
            <div class="section-header__icon" [style.background]="group.color + '18'" [style.color]="group.color">
              <i [class]="'pi ' + group.icon" aria-hidden="true"></i>
            </div>
            <span class="section-header__title">{{ group.category }}</span>
            <span class="section-header__count">{{ group.items.length }}</span>
          </div>
          <div class="comp-grid">
            @for (item of group.items; track item.name) {
              <a [routerLink]="item.route" class="comp-card">
                <i [class]="'pi ' + item.icon + ' comp-card__icon'" aria-hidden="true"></i>
                <div class="comp-card__info">
                  <div class="comp-card__name">{{ item.name }}</div>
                  <div class="comp-card__selector">{{ item.selector }}</div>
                </div>
              </a>
            }
          </div>
        </div>
      }

      <!-- ── Instalação ─────────────────────────────────── -->
      <div style="border:1px solid var(--docs-border);border-radius:12px;padding:32px;background:var(--docs-sidebar-bg);margin-top:8px">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px">
          <i class="pi pi-download" style="font-size:18px;color:var(--docs-accent)" aria-hidden="true"></i>
          <h2 style="font-size:1.1rem;margin:0;font-weight:700">Instalação rápida</h2>
        </div>
        <p style="color:var(--docs-text-muted);margin-bottom:20px;font-size:14px;max-width:480px">
          Configure o .npmrc para o GitHub Packages, instale o pacote e importe o tema KlnPrime na sua aplicação.
        </p>
        <app-code-block language="bash" [code]="installCode" />
        <div style="margin-top:16px;display:flex;gap:12px">
          <a routerLink="/getting-started" class="btn-primary" style="font-size:13px">
            Guia de instalação completo
            <i class="pi pi-arrow-right" style="font-size:11px" aria-hidden="true"></i>
          </a>
          <a routerLink="/tokens" class="btn-outline" style="font-size:13px">Ver tokens de design</a>
        </div>
      </div>

    </div>
  `,
})
export class HomeComponent {
  // signal para OnPush — plain boolean nao re-renderiza apos setTimeout
  copied = signal(false);

  copyInstall(): void {
    navigator.clipboard?.writeText('npm install @klini-saude/ds').then(() => {
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    });
  }

  installCode = `# 1. Configure o GitHub Packages (.npmrc na raiz do projeto)
@klini-saude:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=\${GITHUB_TOKEN}

# 2. Instale o pacote
npm install @klini-saude/ds

# 3. Importe o tema no angular.json
"styles": ["node_modules/@klini-saude/ds/styles/klini-prime.css"]`;

  highlights = [
    {
      title: 'Portal Templates',
      desc: 'Shell, Header, Footer, Login e Service Tile — layouts completos para portais de beneficiários, médicos e corretores.',
      icon: 'pi-building',
      iconBg: '#E8F4F3',
      iconColor: '#259591',
      badge: 'kln-portal-shell',
      route: '/components/portal-templates',
    },
    {
      title: '21 Chart Presets',
      desc: 'Barras, linhas, áreas, pizza, radar, scatter e série temporal — todos com paleta Klini automática via KlnChartPresets.',
      icon: 'pi-chart-bar',
      iconBg: '#E1EDEF',
      iconColor: '#6AA7AE',
      badge: 'KlnChartPresets',
      route: '/charts',
    },
    {
      title: 'Status Clínico',
      desc: 'Tokens de status para autorizada, negado, em-processo, parcialmente e inativa — semântica de saúde pronta.',
      icon: 'pi-heart',
      iconBg: '#E8F4F3',
      iconColor: '#259591',
      badge: 'kln-status-pill',
      route: '/components/status-pill',
    },
    {
      title: 'Design Tokens',
      desc: '7 arquivos SCSS de tokens: primitivos, semânticos, status, escala, elevação, tipografia e paleta de gráficos.',
      icon: 'pi-palette',
      iconBg: '#F5E4D3',
      iconColor: '#CD7925',
      badge: '--kln-color-teal-500',
      route: '/tokens',
    },
  ];

  componentGroups: { category: string; icon: string; color: string; items: ComponentCard[] }[] = [
    {
      category: 'Buttons',
      icon: 'pi-cursor',
      color: '#259591',
      items: [
        { name: 'Button',       selector: 'kln-button',       route: '/components/button',       icon: 'pi-stop'         },
        { name: 'Split Button', selector: 'kln-split-button', route: '/components/split-button', icon: 'pi-ellipsis-h'   },
        { name: 'Button Group', selector: 'kln-button-group', route: '/components/button-group', icon: 'pi-th-large'     },
        { name: 'Speed Dial',   selector: 'kln-speed-dial',   route: '/components/speed-dial',   icon: 'pi-plus-circle'  },
      ],
    },
    {
      category: 'Forms',
      icon: 'pi-pen-to-square',
      color: '#6AA7AE',
      items: [
        { name: 'Input Text',    selector: 'kln-input-text',    route: '/components/input-text',    icon: 'pi-minus'        },
        { name: 'Input Number',  selector: 'kln-input-number',  route: '/components/input-number',  icon: 'pi-hashtag'      },
        { name: 'Input Mask',    selector: 'kln-input-mask',    route: '/components/input-mask',    icon: 'pi-id-card'      },
        { name: 'Input OTP',     selector: 'kln-input-otp',     route: '/components/input-otp',     icon: 'pi-key'          },
        { name: 'Textarea',      selector: 'kln-textarea',      route: '/components/textarea',      icon: 'pi-align-left'   },
        { name: 'Password',      selector: 'kln-password',      route: '/components/password',      icon: 'pi-lock'         },
        { name: 'Select',        selector: 'kln-select',        route: '/components/select',        icon: 'pi-chevron-down' },
        { name: 'MultiSelect',   selector: 'kln-multiselect',   route: '/components/multiselect',   icon: 'pi-list-check'   },
        { name: 'AutoComplete',  selector: 'kln-autocomplete',  route: '/components/autocomplete',  icon: 'pi-search'       },
        { name: 'Cascade Select',selector: 'kln-cascade-select',route: '/components/cascade-select',icon: 'pi-sitemap'      },
        { name: 'Listbox',       selector: 'kln-listbox',       route: '/components/listbox',       icon: 'pi-list'         },
        { name: 'Select Button', selector: 'kln-select-button', route: '/components/select-button', icon: 'pi-table'        },
        { name: 'Toggle Button', selector: 'kln-toggle-button', route: '/components/toggle-button', icon: 'pi-sliders-h'    },
        { name: 'Radio Group',   selector: 'kln-radio-group',   route: '/components/radio-group',   icon: 'pi-circle'       },
        { name: 'Checkbox',      selector: 'kln-checkbox',      route: '/components/checkbox',      icon: 'pi-check-square' },
        { name: 'Toggle',        selector: 'kln-toggle',        route: '/components/toggle',        icon: 'pi-power-off'    },
        { name: 'Rating',        selector: 'kln-rating',        route: '/components/rating',        icon: 'pi-star'         },
        { name: 'Slider',        selector: 'kln-slider',        route: '/components/slider',        icon: 'pi-sliders-h'    },
        { name: 'Calendar',      selector: 'kln-calendar',      route: '/components/calendar',      icon: 'pi-calendar'     },
        { name: 'Tree Select',   selector: 'kln-tree-select',   route: '/components/tree-select',   icon: 'pi-share-alt'    },
        { name: 'Color Picker',  selector: 'kln-color-picker',  route: '/components/color-picker',  icon: 'pi-palette'      },
        { name: 'Icon Field',    selector: 'kln-icon-field',    route: '/components/icon-field',    icon: 'pi-search'       },
        { name: 'Ifta Label',    selector: 'kln-ifta-label',    route: '/components/ifta-label',    icon: 'pi-tag'          },
        { name: 'Float Label',   selector: 'kln-float-label',   route: '/components/float-label',   icon: 'pi-tag'          },
        { name: 'File Upload',   selector: 'kln-file-upload',   route: '/components/file-upload',   icon: 'pi-upload'       },
        { name: 'Editor',        selector: 'kln-editor',        route: '/components/editor',        icon: 'pi-file-edit'    },
      ],
    },
    {
      category: 'Data Display',
      icon: 'pi-table',
      color: '#CD7925',
      items: [
        { name: 'Table',           selector: 'kln-table',           route: '/components/table',           icon: 'pi-table'        },
        { name: 'Tree Table',      selector: 'kln-tree-table',      route: '/components/tree-table',      icon: 'pi-sitemap'      },
        { name: 'DataView',        selector: 'kln-dataview',        route: '/components/dataview',        icon: 'pi-th-large'     },
        { name: 'Carousel',        selector: 'kln-carousel',        route: '/components/carousel',        icon: 'pi-images'       },
        { name: 'Tree',            selector: 'kln-tree',            route: '/components/tree',            icon: 'pi-share-alt'    },
        { name: 'Order List',      selector: 'kln-order-list',      route: '/components/order-list',      icon: 'pi-sort-alt'     },
        { name: 'Pick List',       selector: 'kln-pick-list',       route: '/components/pick-list',       icon: 'pi-arrow-right-arrow-left' },
        { name: 'Virtual Scroller',selector: 'kln-virtual-scroller',route: '/components/virtual-scroller',icon: 'pi-list'        },
        { name: 'Timeline',        selector: 'kln-timeline',        route: '/components/timeline',        icon: 'pi-history'      },
        { name: 'Galleria',        selector: 'kln-galleria',        route: '/components/galleria',        icon: 'pi-image'        },
        { name: 'Image Compare',   selector: 'kln-image-compare',   route: '/components/image-compare',   icon: 'pi-clone'        },
      ],
    },
    {
      category: 'Charts & Analytics',
      icon: 'pi-chart-bar',
      color: '#6AA7AE',
      items: [
        { name: 'Chart (21 presets)', selector: 'kln-chart',          route: '/charts',                     icon: 'pi-chart-bar'    },
        { name: 'Knob',               selector: 'kln-knob',           route: '/components/knob',            icon: 'pi-circle'       },
        { name: 'Meter Group',        selector: 'kln-meter-group',    route: '/components/meter-group',     icon: 'pi-sliders-h'    },
        { name: 'Progress Bar',       selector: 'kln-progress-bar',   route: '/components/progress-bar',   icon: 'pi-bars-progress' },
        { name: 'Progress Spinner',   selector: 'kln-progress-spinner',route: '/components/progress-spinner',icon: 'pi-spin pi-spinner' },
      ],
    },
    {
      category: 'Feedback',
      icon: 'pi-bell',
      color: '#E05759',
      items: [
        { name: 'Toast',        selector: 'kln-toast',        route: '/components/toast',        icon: 'pi-send'         },
        { name: 'Message',      selector: 'kln-message',      route: '/components/message',      icon: 'pi-info-circle'  },
        { name: 'Messages',     selector: 'kln-messages',     route: '/components/messages',     icon: 'pi-list'         },
        { name: 'Confirm Dialog',selector: 'kln-confirm-dialog',route: '/components/confirm-dialog',icon: 'pi-question-circle' },
        { name: 'Confirm Popup',selector: 'kln-confirm-popup',route: '/components/confirm-popup',icon: 'pi-question'     },
        { name: 'Block UI',     selector: 'kln-block-ui',     route: '/components/block-ui',     icon: 'pi-lock'         },
      ],
    },
    {
      category: 'Overlay',
      icon: 'pi-window-maximize',
      color: '#259591',
      items: [
        { name: 'Dialog',       selector: 'kln-dialog',       route: '/components/dialog',       icon: 'pi-window-maximize' },
        { name: 'Drawer',       selector: 'kln-drawer',       route: '/components/drawer',       icon: 'pi-align-right'  },
        { name: 'Popover',      selector: 'kln-popover',      route: '/components/popover',      icon: 'pi-comment'      },
        { name: 'Context Menu', selector: 'kln-context-menu', route: '/components/context-menu', icon: 'pi-bars'         },
        { name: 'Overlay Badge',selector: 'kln-overlay-badge',route: '/components/overlay-badge',icon: 'pi-tag'          },
        { name: 'Tooltip',      selector: 'pTooltip',         route: '/components/tooltip',      icon: 'pi-info-circle'  },
      ],
    },
    {
      category: 'Navigation',
      icon: 'pi-compass',
      color: '#6AA7AE',
      items: [
        { name: 'Tabs',       selector: 'kln-tabs',       route: '/components/tabs',       icon: 'pi-folder'       },
        { name: 'Tab Menu',   selector: 'kln-tab-menu',   route: '/components/tab-menu',   icon: 'pi-bars'         },
        { name: 'Stepper',    selector: 'kln-stepper',    route: '/components/stepper',    icon: 'pi-list-check'   },
        { name: 'Steps',      selector: 'kln-steps',      route: '/components/steps',      icon: 'pi-arrow-right'  },
        { name: 'Breadcrumb', selector: 'kln-breadcrumb', route: '/components/breadcrumb', icon: 'pi-chevron-right' },
        { name: 'Menu',       selector: 'kln-menu',       route: '/components/menu',       icon: 'pi-bars'         },
        { name: 'Menubar',    selector: 'kln-menubar',    route: '/components/menubar',    icon: 'pi-align-justify' },
        { name: 'Mega Menu',  selector: 'kln-mega-menu',  route: '/components/mega-menu',  icon: 'pi-th-large'     },
        { name: 'Tiered Menu',selector: 'kln-tiered-menu',route: '/components/tiered-menu',icon: 'pi-angle-double-right' },
        { name: 'Panel Menu', selector: 'kln-panel-menu', route: '/components/panel-menu', icon: 'pi-list'         },
        { name: 'Accordion',  selector: 'kln-accordion',  route: '/components/accordion',  icon: 'pi-chevron-down' },
      ],
    },
    {
      category: 'Layout',
      icon: 'pi-objects-column',
      color: '#CD7925',
      items: [
        { name: 'Card',         selector: 'kln-card',         route: '/components/card',         icon: 'pi-id-card'     },
        { name: 'KPI Card',     selector: 'kln-kpi-card',     route: '/components/kpi-card',     icon: 'pi-chart-line'  },
        { name: 'Avatar',       selector: 'kln-avatar',       route: '/components/avatar',       icon: 'pi-user'        },
        { name: 'Avatar Group', selector: 'kln-avatar-group', route: '/components/avatar-group', icon: 'pi-users'       },
        { name: 'Badge',        selector: 'kln-badge',        route: '/components/badge',        icon: 'pi-tag'         },
        { name: 'Tag',          selector: 'kln-tag',          route: '/components/tag',          icon: 'pi-tag'         },
        { name: 'Chip',         selector: 'kln-chip',         route: '/components/chip',         icon: 'pi-times-circle'},
        { name: 'Skeleton',     selector: 'kln-skeleton',     route: '/components/skeleton',     icon: 'pi-stop'        },
        { name: 'Divider',      selector: 'kln-divider',      route: '/components/divider',      icon: 'pi-minus'       },
        { name: 'Status Pill',  selector: 'kln-status-pill',  route: '/components/status-pill',  icon: 'pi-heart'       },
        { name: 'Image',        selector: 'kln-image',        route: '/components/image',        icon: 'pi-image'       },
        { name: 'Toolbar',      selector: 'kln-toolbar',      route: '/components/toolbar',      icon: 'pi-align-justify' },
        { name: 'Splitter',     selector: 'kln-splitter',     route: '/components/splitter',     icon: 'pi-table'       },
        { name: 'Panel',        selector: 'kln-panel',        route: '/components/panel',        icon: 'pi-window-maximize' },
        { name: 'Fieldset',     selector: 'kln-fieldset',     route: '/components/fieldset',     icon: 'pi-border-top'  },
        { name: 'Scroll Panel', selector: 'kln-scroll-panel', route: '/components/scroll-panel', icon: 'pi-arrows-v'    },
        { name: 'Empty State',  selector: 'kln-empty-state',  route: '/components/empty-state',  icon: 'pi-inbox'       },
        { name: 'Paginator',    selector: 'kln-paginator',    route: '/components/paginator',    icon: 'pi-ellipsis-h'  },
      ],
    },
    {
      category: 'Misc',
      icon: 'pi-box',
      color: '#6B7370',
      items: [
        { name: 'Inplace',    selector: 'kln-inplace',    route: '/components/inplace',    icon: 'pi-pencil'      },
        { name: 'Scroll Top', selector: 'kln-scroll-top', route: '/components/scroll-top', icon: 'pi-arrow-up'    },
      ],
    },
    {
      category: 'Portal Templates',
      icon: 'pi-building',
      color: '#259591',
      items: [
        { name: 'Portal Shell',  selector: 'kln-portal-shell',  route: '/components/portal-templates', icon: 'pi-th-large'    },
        { name: 'Portal Header', selector: 'kln-portal-header', route: '/components/portal-templates', icon: 'pi-align-center'},
        { name: 'Portal Footer', selector: 'kln-portal-footer', route: '/components/portal-templates', icon: 'pi-align-center'},
        { name: 'Portal Login',  selector: 'kln-portal-login',  route: '/components/portal-templates', icon: 'pi-sign-in'     },
        { name: 'Service Tile',  selector: 'kln-service-tile',  route: '/components/portal-templates', icon: 'pi-th-large'    },
      ],
    },
  ];
}
