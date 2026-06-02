import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-architecture',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  styles: [`
    /* ── Pyramid ──────────────────────────────────────────────────────────────── */
    .pyramid {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 3px;
      margin: 32px 0 40px;
    }

    .pyramid__level {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 6px;
      padding: 14px 24px;
      cursor: default;
      transition: transform 0.15s, box-shadow 0.15s;
      gap: 16px;

      &:hover {
        transform: scale(1.01);
        box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        z-index: 1;
        position: relative;
      }
    }

    .pyramid__level--pages    { width: 100%;    background: #259591; color: #fff; }
    .pyramid__level--templates{ width: 92%;     background: #2eada8; color: #fff; }
    .pyramid__level--organisms{ width: 78%;     background: #3dc4bf; color: #fff; }
    .pyramid__level--molecules{ width: 62%;     background: #7dd3d0; color: #196766; }
    .pyramid__level--atoms    { width: 46%;     background: #d3eae9; color: #196766; }
    .pyramid__level--tokens   { width: 30%;     background: #e8f4f3; color: #196766; border: 1px solid var(--docs-accent); }

    .pyramid__label {
      font-size: 14px;
      font-weight: 700;
      letter-spacing: 0.01em;
      min-width: 100px;
    }

    .pyramid__desc {
      font-size: 12px;
      opacity: 0.85;
      text-align: center;
      max-width: 360px;
    }

    .pyramid__count {
      font-size: 11px;
      font-weight: 600;
      opacity: 0.75;
      white-space: nowrap;
    }

    /* ── Token chain ──────────────────────────────────────────────────────────── */
    .token-chain {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0;
      margin: 24px 0 32px;
    }

    .token-node {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 16px 20px;
      border: 1px solid var(--docs-border);
      border-radius: 8px;
      background: var(--docs-bg);
      min-width: 110px;
      text-align: center;
      transition: all 0.15s;

      &:hover {
        border-color: var(--docs-accent);
        background: var(--docs-brand-soft);
      }
    }

    .token-node__file {
      font-family: 'Fira Code', monospace;
      font-size: 11px;
      color: var(--docs-accent);
      font-weight: 600;
      margin-bottom: 4px;
    }

    .token-node__label {
      font-size: 12px;
      color: var(--docs-text-muted);
      line-height: 1.3;
    }

    .token-node__example {
      font-family: 'Fira Code', monospace;
      font-size: 10px;
      color: var(--docs-text-subtle);
      margin-top: 4px;
    }

    .token-arrow {
      font-size: 18px;
      color: var(--docs-accent);
      padding: 0 6px;
      flex-shrink: 0;
      align-self: center;
    }

    /* ── Taxonomy ─────────────────────────────────────────────────────────────── */
    .taxonomy-tabs {
      display: flex;
      gap: 4px;
      margin-bottom: 16px;
      border-bottom: 1px solid var(--docs-border);
      padding-bottom: 0;
    }

    .taxonomy-tab {
      padding: 8px 16px;
      border: none;
      background: transparent;
      font-size: 13px;
      font-weight: 500;
      color: var(--docs-text-muted);
      cursor: pointer;
      border-bottom: 2px solid transparent;
      margin-bottom: -1px;
      font-family: inherit;
      transition: all 0.15s;
      display: flex;
      align-items: center;
      gap: 6px;
      border-radius: 4px 4px 0 0;

      &.active {
        color: var(--docs-accent);
        border-bottom-color: var(--docs-accent);
        background: var(--docs-brand-soft);
      }

      &:hover:not(.active) {
        color: var(--docs-text);
        background: var(--docs-code-bg);
      }
    }

    .taxonomy-count {
      font-size: 10px;
      font-weight: 700;
      padding: 1px 5px;
      border-radius: 9999px;
      background: var(--docs-code-bg);
      color: var(--docs-text-subtle);

      .active & {
        background: var(--docs-brand-surface);
        color: var(--docs-accent);
      }
    }

    .taxonomy-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
      gap: 8px;
    }

    .taxonomy-card {
      border: 1px solid var(--docs-border);
      border-radius: 7px;
      padding: 10px 12px;
      text-decoration: none;
      color: inherit;
      display: block;
      transition: all 0.15s;
      background: var(--docs-bg);

      &:hover {
        border-color: var(--docs-accent);
        background: var(--docs-brand-soft);
        text-decoration: none;
        transform: translateY(-1px);
        box-shadow: 0 3px 10px rgba(37,149,145,0.1);
      }
    }

    .taxonomy-card__name {
      font-weight: 600;
      font-size: 13px;
      color: var(--docs-text);
      margin-bottom: 2px;
    }

    .taxonomy-card__selector {
      font-family: 'Fira Code', monospace;
      font-size: 10px;
      color: var(--docs-text-muted);
    }

    .taxonomy-card--atom    .taxonomy-card__selector { color: #6aa7ae; }
    .taxonomy-card--molecule .taxonomy-card__selector { color: #3dc4bf; }
    .taxonomy-card--organism .taxonomy-card__selector { color: var(--docs-accent); }
    .taxonomy-card--template .taxonomy-card__selector { color: #196766; font-weight: 600; }

    /* ── Composition map ──────────────────────────────────────────────────────── */
    .composition-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
    }

    .composition-card {
      border: 1px solid var(--docs-border);
      border-radius: 10px;
      overflow: hidden;
    }

    .composition-card__header {
      padding: 14px 16px;
      background: var(--docs-sidebar-bg);
      border-bottom: 1px solid var(--docs-border);
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .composition-card__level-badge {
      font-size: 10px;
      font-weight: 700;
      padding: 2px 6px;
      border-radius: 4px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .composition-card__level-badge--organism { background: var(--docs-brand-soft); color: var(--docs-accent); }
    .composition-card__level-badge--template { background: #d3eae9; color: #196766; }

    .composition-card__name {
      font-weight: 700;
      font-size: 14px;
      color: var(--docs-text);
    }

    .composition-card__selector {
      font-family: 'Fira Code', monospace;
      font-size: 11px;
      color: var(--docs-text-muted);
    }

    .composition-card__body {
      padding: 16px;
    }

    .composition-tree {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .composition-tree__item {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      padding: 6px 0;
      border-bottom: 1px dashed var(--docs-border);
      font-size: 13px;

      &:last-child { border-bottom: none; }
    }

    .composition-tree__icon {
      font-size: 14px;
      color: var(--docs-accent);
      flex-shrink: 0;
      margin-top: 1px;
    }

    .composition-tree__tag {
      font-family: 'Fira Code', monospace;
      font-size: 12px;
      color: var(--docs-accent);
      font-weight: 600;
    }

    .composition-tree__label {
      font-size: 12px;
      color: var(--docs-text-muted);
    }

    .composition-tree__level {
      font-size: 10px;
      padding: 1px 5px;
      border-radius: 4px;
      font-weight: 600;
      margin-left: auto;
      flex-shrink: 0;
    }
    .composition-tree__level--atom     { background: #e1edef; color: #406e74; }
    .composition-tree__level--molecule { background: #d3eae9; color: #1f7e7b; }
    .composition-tree__level--slot     { background: #f0f0f0; color: #6b7370; }

    /* ── Fluent section ───────────────────────────────────────────────────────── */
    .fluent-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      gap: 16px;
    }

    .fluent-card {
      border: 1px solid var(--docs-border);
      border-radius: 8px;
      padding: 18px;
      background: var(--docs-bg);
    }

    .fluent-card__icon {
      font-size: 24px;
      color: var(--docs-accent);
      margin-bottom: 10px;
    }

    .fluent-card__title {
      font-weight: 700;
      font-size: 14px;
      color: var(--docs-text);
      margin-bottom: 6px;
    }

    .fluent-card__status {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      font-size: 10px;
      font-weight: 700;
      padding: 2px 6px;
      border-radius: 4px;
      margin-bottom: 8px;
    }
    .fluent-card__status--yes     { background: var(--docs-brand-soft); color: var(--docs-accent); }
    .fluent-card__status--partial { background: #f5e4d3; color: #834d17; }
    .fluent-card__status--no      { background: #fee2e2; color: #b91c1c; }

    .fluent-card__desc {
      font-size: 12px;
      color: var(--docs-text-muted);
      line-height: 1.6;
    }

    /* ── Elevation showcase ───────────────────────────────────────────────────── */
    .elevation-row {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      align-items: flex-end;
      padding: 32px 0 16px;
    }

    .elevation-sample {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }

    .elevation-sample__box {
      width: 80px;
      height: 80px;
      border-radius: 10px;
      background: #fff;
      border: 1px solid var(--docs-border);
    }

    .elevation-sample__box--xs  { box-shadow: 0 1px 3px rgba(15,27,26,0.08); }
    .elevation-sample__box--sm  { box-shadow: 0 2px 6px rgba(15,27,26,0.10); }
    .elevation-sample__box--md  { box-shadow: 0 4px 12px rgba(15,27,26,0.12); }
    .elevation-sample__box--lg  { box-shadow: 0 8px 24px rgba(15,27,26,0.14); }
    .elevation-sample__box--xl  { box-shadow: 0 16px 40px rgba(15,27,26,0.16); }

    .elevation-sample__label {
      font-family: 'Fira Code', monospace;
      font-size: 11px;
      color: var(--docs-text-muted);
      text-align: center;
    }
  `],
  template: `
    <div>
      <!-- Header -->
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">Arquitetura</h1>
        <span class="badge badge--accent">Atomic Design</span>
        <span class="badge badge--info">Fluent Influence</span>
      </div>
      <p class="docs-page-description">
        O Klini DS é estruturado em torno do <strong>Atomic Design</strong> (Brad Frost) — do token mais
        primitivo ao template de portal completo. A hierarquia de elevação e semântica de cor
        recebe influência do <strong>Fluent Design 2</strong> (Microsoft).
      </p>

      <!-- ── Pirâmide Atomic Design ──────────────────────────────────────────── -->
      <div class="docs-section">
        <h2>Pirâmide Atomic Design</h2>
        <p>Cada nível é construído sobre o anterior. Tokens são a base invisível — tudo começa por eles.</p>

        <div class="pyramid" role="img" aria-label="Pirâmide do Atomic Design — tokens na base, páginas no topo">
          <div class="pyramid__level pyramid__level--pages">
            <span class="pyramid__label">Páginas</span>
            <span class="pyramid__desc">Instâncias reais dos templates — Portal do Beneficiário, Médico, Corretor</span>
            <span class="pyramid__count">3+ instâncias</span>
          </div>
          <div class="pyramid__level pyramid__level--templates">
            <span class="pyramid__label">Templates</span>
            <span class="pyramid__desc">Estruturas de layout com slots de conteúdo</span>
            <span class="pyramid__count">5 templates</span>
          </div>
          <div class="pyramid__level pyramid__level--organisms">
            <span class="pyramid__label">Organismos</span>
            <span class="pyramid__desc">Componentes complexos — composição de moléculas</span>
            <span class="pyramid__count">~34 componentes</span>
          </div>
          <div class="pyramid__level pyramid__level--molecules">
            <span class="pyramid__label">Moléculas</span>
            <span class="pyramid__desc">Átomos agrupados com propósito semântico</span>
            <span class="pyramid__count">~27 componentes</span>
          </div>
          <div class="pyramid__level pyramid__level--atoms">
            <span class="pyramid__label">Átomos</span>
            <span class="pyramid__desc">Elementos básicos indivisíveis</span>
            <span class="pyramid__count">~28 componentes</span>
          </div>
          <div class="pyramid__level pyramid__level--tokens">
            <span class="pyramid__label">Tokens</span>
            <span class="pyramid__desc">Valores de design — cor, espaço, sombra, escala</span>
            <span class="pyramid__count">7 arquivos SCSS</span>
          </div>
        </div>
      </div>

      <!-- ── Hierarquia de Tokens ────────────────────────────────────────────── -->
      <div class="docs-section">
        <h2>Hierarquia de Tokens</h2>
        <p>
          Tokens fluem de valores brutos (<em>primitivos</em>) para decisões de design contextuais
          (<em>semânticos</em>). Nenhum componente consome tokens primitivos diretamente — sempre
          passa pela camada semântica.
        </p>

        <div class="token-chain" role="list">
          <div class="token-node" role="listitem">
            <span class="token-node__file">_primitive.scss</span>
            <span class="token-node__label">Cores brutas<br>da marca</span>
            <span class="token-node__example">--kln-color-teal-500</span>
          </div>
          <span class="token-arrow" aria-hidden="true">›</span>
          <div class="token-node" role="listitem">
            <span class="token-node__file">_semantic.scss</span>
            <span class="token-node__label">Superfície, texto,<br>borda, ação</span>
            <span class="token-node__example">--kln-color-action-primary</span>
          </div>
          <span class="token-arrow" aria-hidden="true">›</span>
          <div class="token-node" role="listitem">
            <span class="token-node__file">_status.scss</span>
            <span class="token-node__label">Feedback clínico<br>(autorizado, negado…)</span>
            <span class="token-node__example">--kln-status-authorized</span>
          </div>
          <span class="token-arrow" aria-hidden="true">›</span>
          <div class="token-node" role="listitem">
            <span class="token-node__file">_elevation.scss</span>
            <span class="token-node__label">Profundidade<br>e sombras</span>
            <span class="token-node__example">--kln-shadow-md</span>
          </div>
          <span class="token-arrow" aria-hidden="true">›</span>
          <div class="token-node" role="listitem">
            <span class="token-node__file">_scale.scss</span>
            <span class="token-node__label">Tamanhos, z-index,<br>breakpoints, grid</span>
            <span class="token-node__example">--kln-space-4</span>
          </div>
          <span class="token-arrow" aria-hidden="true">›</span>
          <div class="token-node" role="listitem">
            <span class="token-node__file">_chart-palette.scss</span>
            <span class="token-node__label">Paleta de<br>gráficos clínicos</span>
            <span class="token-node__example">--kln-chart-cat-teal</span>
          </div>
        </div>

        <p style="font-size:13px;color:var(--docs-text-muted)">
          <i class="pi pi-info-circle" style="color:var(--docs-accent);margin-right:6px"></i>
          O arquivo <code class="font-mono">klini-prime.ts</code> é o ponto de convergência:
          ele mapeia todos esses tokens para o sistema de preset do PrimeNG (<code class="font-mono">definePreset</code> sobre Aura),
          garantindo que a identidade visual da Klini Saúde se aplique automaticamente a todos os 94 componentes.
        </p>
      </div>

      <!-- ── Taxonomia de Componentes ────────────────────────────────────────── -->
      <div class="docs-section">
        <h2>Taxonomia de Componentes</h2>
        <p>94 componentes classificados por nível atômico. Clique para ir à documentação.</p>

        <!-- Tabs -->
        <div class="taxonomy-tabs" role="tablist">
          <button class="taxonomy-tab" [class.active]="activeTab === 'atoms'" (click)="activeTab = 'atoms'" role="tab">
            <i class="pi pi-circle" style="font-size:11px"></i> Átomos
            <span class="taxonomy-count">28</span>
          </button>
          <button class="taxonomy-tab" [class.active]="activeTab === 'molecules'" (click)="activeTab = 'molecules'" role="tab">
            <i class="pi pi-sitemap" style="font-size:11px"></i> Moléculas
            <span class="taxonomy-count">27</span>
          </button>
          <button class="taxonomy-tab" [class.active]="activeTab === 'organisms'" (click)="activeTab = 'organisms'" role="tab">
            <i class="pi pi-th-large" style="font-size:11px"></i> Organismos
            <span class="taxonomy-count">34</span>
          </button>
          <button class="taxonomy-tab" [class.active]="activeTab === 'templates'" (click)="activeTab = 'templates'" role="tab">
            <i class="pi pi-layout" style="font-size:11px"></i> Templates
            <span class="taxonomy-count">5</span>
          </button>
        </div>

        <!-- Átomos -->
        @if (activeTab === 'atoms') {
          <div class="taxonomy-grid">
            @for (c of atoms; track c.name) {
              <a [routerLink]="c.route ? ['/components/' + c.route] : null" class="taxonomy-card taxonomy-card--atom" [class.no-link]="!c.route">
                <div class="taxonomy-card__name">{{ c.name }}</div>
                <div class="taxonomy-card__selector">{{ c.selector }}</div>
              </a>
            }
          </div>
        }

        <!-- Moléculas -->
        @if (activeTab === 'molecules') {
          <div class="taxonomy-grid">
            @for (c of molecules; track c.name) {
              <a [routerLink]="c.route ? ['/components/' + c.route] : null" class="taxonomy-card taxonomy-card--molecule" [class.no-link]="!c.route">
                <div class="taxonomy-card__name">{{ c.name }}</div>
                <div class="taxonomy-card__selector">{{ c.selector }}</div>
              </a>
            }
          </div>
        }

        <!-- Organismos -->
        @if (activeTab === 'organisms') {
          <div class="taxonomy-grid">
            @for (c of organisms; track c.name) {
              <a [routerLink]="c.route ? ['/components/' + c.route] : null" class="taxonomy-card taxonomy-card--organism" [class.no-link]="!c.route">
                <div class="taxonomy-card__name">{{ c.name }}</div>
                <div class="taxonomy-card__selector">{{ c.selector }}</div>
              </a>
            }
          </div>
        }

        <!-- Templates -->
        @if (activeTab === 'templates') {
          <div class="taxonomy-grid">
            @for (c of templates; track c.name) {
              <a [routerLink]="c.route ? ['/components/' + c.route] : null" class="taxonomy-card taxonomy-card--template" [class.no-link]="!c.route">
                <div class="taxonomy-card__name">{{ c.name }}</div>
                <div class="taxonomy-card__selector">{{ c.selector }}</div>
              </a>
            }
          </div>
        }
      </div>

      <!-- ── Mapa de Composição ───────────────────────────────────────────────── -->
      <div class="docs-section">
        <h2>Mapa de Composição</h2>
        <p>
          Organismos e templates são explicitamente compostos de camadas menores.
          Cada caixa abaixo mostra de quais peças um componente complexo é formado.
        </p>

        <div class="composition-grid">

          <!-- kln-portal-shell -->
          <div class="composition-card">
            <div class="composition-card__header">
              <span class="composition-card__level-badge composition-card__level-badge--template">template</span>
              <div>
                <div class="composition-card__name">Portal Shell</div>
                <div class="composition-card__selector">kln-portal-shell</div>
              </div>
            </div>
            <div class="composition-card__body">
              <ul class="composition-tree">
                <li class="composition-tree__item">
                  <i class="pi pi-minus composition-tree__icon"></i>
                  <span class="composition-tree__tag">kln-portal-header</span>
                  <span class="composition-tree__label">Topo com logo + avatar</span>
                  <span class="composition-tree__level composition-tree__level--molecule">molecule</span>
                </li>
                <li class="composition-tree__item">
                  <i class="pi pi-minus composition-tree__icon" style="color:#9ba3a2"></i>
                  <span class="composition-tree__tag" style="color:var(--docs-text-muted)">&lt;ng-content&gt;</span>
                  <span class="composition-tree__label">Conteúdo do portal</span>
                  <span class="composition-tree__level composition-tree__level--slot">slot</span>
                </li>
                <li class="composition-tree__item">
                  <i class="pi pi-minus composition-tree__icon"></i>
                  <span class="composition-tree__tag">kln-portal-footer</span>
                  <span class="composition-tree__label">Rodapé ANS + logo</span>
                  <span class="composition-tree__level composition-tree__level--molecule">molecule</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- kln-kpi-card -->
          <div class="composition-card">
            <div class="composition-card__header">
              <span class="composition-card__level-badge composition-card__level-badge--organism">organism</span>
              <div>
                <div class="composition-card__name">KPI Card</div>
                <div class="composition-card__selector">kln-kpi-card</div>
              </div>
            </div>
            <div class="composition-card__body">
              <ul class="composition-tree">
                <li class="composition-tree__item">
                  <i class="pi pi-minus composition-tree__icon"></i>
                  <span class="composition-tree__tag">Icon</span>
                  <span class="composition-tree__label">Ícone PrimeIcons</span>
                  <span class="composition-tree__level composition-tree__level--atom">atom</span>
                </li>
                <li class="composition-tree__item">
                  <i class="pi pi-minus composition-tree__icon"></i>
                  <span class="composition-tree__tag">Value + Label</span>
                  <span class="composition-tree__label">Valor numérico + rótulo</span>
                  <span class="composition-tree__level composition-tree__level--atom">atom</span>
                </li>
                <li class="composition-tree__item">
                  <i class="pi pi-minus composition-tree__icon"></i>
                  <span class="composition-tree__tag">kln-badge</span>
                  <span class="composition-tree__label">Variação percentual</span>
                  <span class="composition-tree__level composition-tree__level--atom">atom</span>
                </li>
                <li class="composition-tree__item">
                  <i class="pi pi-minus composition-tree__icon"></i>
                  <span class="composition-tree__tag">Trend indicator</span>
                  <span class="composition-tree__label">Ícone direção (↑↓→)</span>
                  <span class="composition-tree__level composition-tree__level--atom">atom</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- kln-table -->
          <div class="composition-card">
            <div class="composition-card__header">
              <span class="composition-card__level-badge composition-card__level-badge--organism">organism</span>
              <div>
                <div class="composition-card__name">Table</div>
                <div class="composition-card__selector">kln-table</div>
              </div>
            </div>
            <div class="composition-card__body">
              <ul class="composition-tree">
                <li class="composition-tree__item">
                  <i class="pi pi-minus composition-tree__icon"></i>
                  <span class="composition-tree__tag">kln-toolbar</span>
                  <span class="composition-tree__label">Filtros e ações globais</span>
                  <span class="composition-tree__level composition-tree__level--molecule">molecule</span>
                </li>
                <li class="composition-tree__item">
                  <i class="pi pi-minus composition-tree__icon"></i>
                  <span class="composition-tree__tag">Rows + Columns</span>
                  <span class="composition-tree__label">Dados e seleção</span>
                  <span class="composition-tree__level composition-tree__level--atom">atom</span>
                </li>
                <li class="composition-tree__item">
                  <i class="pi pi-minus composition-tree__icon"></i>
                  <span class="composition-tree__tag">kln-paginator</span>
                  <span class="composition-tree__label">Navegação de páginas</span>
                  <span class="composition-tree__level composition-tree__level--molecule">molecule</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- kln-dialog -->
          <div class="composition-card">
            <div class="composition-card__header">
              <span class="composition-card__level-badge composition-card__level-badge--organism">organism</span>
              <div>
                <div class="composition-card__name">Dialog</div>
                <div class="composition-card__selector">kln-dialog</div>
              </div>
            </div>
            <div class="composition-card__body">
              <ul class="composition-tree">
                <li class="composition-tree__item">
                  <i class="pi pi-minus composition-tree__icon"></i>
                  <span class="composition-tree__tag">Overlay</span>
                  <span class="composition-tree__label">Backdrop + posição</span>
                  <span class="composition-tree__level composition-tree__level--atom">atom</span>
                </li>
                <li class="composition-tree__item">
                  <i class="pi pi-minus composition-tree__icon"></i>
                  <span class="composition-tree__tag">Header</span>
                  <span class="composition-tree__label">Título + botão fechar</span>
                  <span class="composition-tree__level composition-tree__level--atom">atom</span>
                </li>
                <li class="composition-tree__item">
                  <i class="pi pi-minus composition-tree__icon" style="color:#9ba3a2"></i>
                  <span class="composition-tree__tag" style="color:var(--docs-text-muted)">&lt;ng-content&gt;</span>
                  <span class="composition-tree__label">Conteúdo customizável</span>
                  <span class="composition-tree__level composition-tree__level--slot">slot</span>
                </li>
                <li class="composition-tree__item">
                  <i class="pi pi-minus composition-tree__icon"></i>
                  <span class="composition-tree__tag">Footer (pTemplate)</span>
                  <span class="composition-tree__label">Ações primária/secundária</span>
                  <span class="composition-tree__level composition-tree__level--molecule">molecule</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- kln-chart -->
          <div class="composition-card">
            <div class="composition-card__header">
              <span class="composition-card__level-badge composition-card__level-badge--organism">organism</span>
              <div>
                <div class="composition-card__name">Chart</div>
                <div class="composition-card__selector">kln-chart</div>
              </div>
            </div>
            <div class="composition-card__body">
              <ul class="composition-tree">
                <li class="composition-tree__item">
                  <i class="pi pi-minus composition-tree__icon"></i>
                  <span class="composition-tree__tag">KlnChartPresets</span>
                  <span class="composition-tree__label">21 preset de configurações</span>
                  <span class="composition-tree__level composition-tree__level--atom">atom</span>
                </li>
                <li class="composition-tree__item">
                  <i class="pi pi-minus composition-tree__icon"></i>
                  <span class="composition-tree__tag">KlnChartTokens</span>
                  <span class="composition-tree__label">Resolve CSS vars → canvas</span>
                  <span class="composition-tree__level composition-tree__level--atom">atom</span>
                </li>
                <li class="composition-tree__item">
                  <i class="pi pi-minus composition-tree__icon"></i>
                  <span class="composition-tree__tag">Chart.js Canvas</span>
                  <span class="composition-tree__label">Renderização WebGL</span>
                  <span class="composition-tree__level composition-tree__level--atom">atom</span>
                </li>
                <li class="composition-tree__item">
                  <i class="pi pi-minus composition-tree__icon"></i>
                  <span class="composition-tree__tag">Legend + Tooltip</span>
                  <span class="composition-tree__label">Interatividade</span>
                  <span class="composition-tree__level composition-tree__level--atom">atom</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- kln-portal-login -->
          <div class="composition-card">
            <div class="composition-card__header">
              <span class="composition-card__level-badge composition-card__level-badge--template">template</span>
              <div>
                <div class="composition-card__name">Portal Login</div>
                <div class="composition-card__selector">kln-portal-login</div>
              </div>
            </div>
            <div class="composition-card__body">
              <ul class="composition-tree">
                <li class="composition-tree__item">
                  <i class="pi pi-minus composition-tree__icon"></i>
                  <span class="composition-tree__tag">kln-card</span>
                  <span class="composition-tree__label">Container visual</span>
                  <span class="composition-tree__level composition-tree__level--molecule">molecule</span>
                </li>
                <li class="composition-tree__item">
                  <i class="pi pi-minus composition-tree__icon"></i>
                  <span class="composition-tree__tag">kln-input-text</span>
                  <span class="composition-tree__label">CPF / Matrícula (com mask)</span>
                  <span class="composition-tree__level composition-tree__level--atom">atom</span>
                </li>
                <li class="composition-tree__item">
                  <i class="pi pi-minus composition-tree__icon"></i>
                  <span class="composition-tree__tag">kln-password</span>
                  <span class="composition-tree__label">Senha com toggle</span>
                  <span class="composition-tree__level composition-tree__level--atom">atom</span>
                </li>
                <li class="composition-tree__item">
                  <i class="pi pi-minus composition-tree__icon"></i>
                  <span class="composition-tree__tag">kln-button</span>
                  <span class="composition-tree__label">Entrar + links de ajuda</span>
                  <span class="composition-tree__level composition-tree__level--atom">atom</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      <!-- ── Influência Fluent Design ────────────────────────────────────────── -->
      <div class="docs-section">
        <h2>Influência do Fluent Design 2</h2>
        <p>
          O Klini DS não implementa o Fluent Design completo, mas adota suas ideias mais maduras
          em dois eixos: <strong>profundidade</strong> e <strong>semântica de cor</strong>.
        </p>

        <div class="fluent-grid">
          <div class="fluent-card">
            <div class="fluent-card__icon"><i class="pi pi-clone"></i></div>
            <div class="fluent-card__title">Elevation (Profundidade)</div>
            <span class="fluent-card__status fluent-card__status--yes"><i class="pi pi-check-circle"></i> Implementado</span>
            <div class="fluent-card__desc">
              Sistema de 5 níveis (xs → xl) + 2 focus rings. Cada nível define shadow-box
              com opacidade progressiva sobre a cor <code>--kln-color-ink-900</code>.
            </div>
          </div>
          <div class="fluent-card">
            <div class="fluent-card__icon"><i class="pi pi-palette"></i></div>
            <div class="fluent-card__title">Semantic Color</div>
            <span class="fluent-card__status fluent-card__status--yes"><i class="pi pi-check-circle"></i> Implementado</span>
            <div class="fluent-card__desc">
              Tokens semânticos (Surface, Text, Border, Action, Feedback) mapeados sobre
              a paleta primitiva — igual à abordagem do Fluent 2 e Material Design 3.
            </div>
          </div>
          <div class="fluent-card">
            <div class="fluent-card__icon"><i class="pi pi-bolt"></i></div>
            <div class="fluent-card__title">Motion / Easing</div>
            <span class="fluent-card__status fluent-card__status--partial"><i class="pi pi-minus-circle"></i> Parcial</span>
            <div class="fluent-card__desc">
              <code>--kln-easing-standard</code> existe como CSS var, mas não há um sistema
              de motion completo com durações por tipo de interação.
            </div>
          </div>
          <div class="fluent-card">
            <div class="fluent-card__icon"><i class="pi pi-moon"></i></div>
            <div class="fluent-card__title">Material / Acrylic</div>
            <span class="fluent-card__status fluent-card__status--no"><i class="pi pi-times-circle"></i> Não adotado</span>
            <div class="fluent-card__desc">
              Efeitos de material (blur, acrylic, mica) não fazem parte do design Klini —
              a interface prioriza clareza clínica sobre efeitos visuais.
            </div>
          </div>
          <div class="fluent-card">
            <div class="fluent-card__icon"><i class="pi pi-desktop"></i></div>
            <div class="fluent-card__title">Adaptive Layout</div>
            <span class="fluent-card__status fluent-card__status--partial"><i class="pi pi-minus-circle"></i> Parcial</span>
            <div class="fluent-card__desc">
              Breakpoints (<code>sm/md/lg/xl/2xl</code>) em <code>_scale.scss</code>.
              Grid de 12 colunas definido. Sem design adaptativo declarativo por componente.
            </div>
          </div>
          <div class="fluent-card">
            <div class="fluent-card__icon"><i class="pi pi-heart"></i></div>
            <div class="fluent-card__title">Accessible by Default</div>
            <span class="fluent-card__status fluent-card__status--yes"><i class="pi pi-check-circle"></i> Implementado</span>
            <div class="fluent-card__desc">
              Focus rings em todos os componentes interativos. WCAG AA garantido pela
              paleta de tokens semânticos. ARIA roles herdados do PrimeNG.
            </div>
          </div>
        </div>

        <!-- Elevation showcase -->
        <h3 style="margin-top:32px;margin-bottom:0">Sistema de Elevação em ação</h3>
        <p>Os 5 níveis aplicados sobre fundo branco. Use via <code class="font-mono">--kln-shadow-[xs|sm|md|lg|xl]</code>.</p>
        <div class="elevation-row" role="img" aria-label="Amostras dos 5 níveis de elevação">
          <div class="elevation-sample">
            <div class="elevation-sample__box elevation-sample__box--xs"></div>
            <div class="elevation-sample__label">xs<br><span style="opacity:.6">card plano</span></div>
          </div>
          <div class="elevation-sample">
            <div class="elevation-sample__box elevation-sample__box--sm"></div>
            <div class="elevation-sample__label">sm<br><span style="opacity:.6">tooltip</span></div>
          </div>
          <div class="elevation-sample">
            <div class="elevation-sample__box elevation-sample__box--md"></div>
            <div class="elevation-sample__label">md<br><span style="opacity:.6">dropdown</span></div>
          </div>
          <div class="elevation-sample">
            <div class="elevation-sample__box elevation-sample__box--lg"></div>
            <div class="elevation-sample__label">lg<br><span style="opacity:.6">dialog</span></div>
          </div>
          <div class="elevation-sample">
            <div class="elevation-sample__box elevation-sample__box--xl"></div>
            <div class="elevation-sample__label">xl<br><span style="opacity:.6">drawer</span></div>
          </div>
        </div>
      </div>

      <!-- ── Como extender ───────────────────────────────────────────────────── -->
      <div class="docs-section">
        <h2>Como extender respeitando a arquitetura</h2>
        <p>Ao criar novos componentes para o DS, siga a hierarquia:</p>

        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px;margin-top:16px">

          <div style="border:1px solid var(--docs-border);border-radius:8px;padding:16px;border-top:3px solid #6aa7ae">
            <strong style="font-size:13px;color:var(--docs-text)">① Novo Átomo</strong>
            <p style="font-size:12px;color:var(--docs-text-muted);margin-top:6px;line-height:1.6">
              Deve ser um wrapper de um único elemento PrimeNG ou HTML nativo.
              Não deve ter dependência de outros componentes DS.
              Expose apenas <code class="font-mono">&#64;Input()</code> e <code class="font-mono">&#64;Output()</code>.
            </p>
          </div>

          <div style="border:1px solid var(--docs-border);border-radius:8px;padding:16px;border-top:3px solid #3dc4bf">
            <strong style="font-size:13px;color:var(--docs-text)">② Nova Molécula</strong>
            <p style="font-size:12px;color:var(--docs-text-muted);margin-top:6px;line-height:1.6">
              Combina 2+ átomos com um propósito semântico claro.
              Deve ter uma razão de existir além de "juntar componentes" —
              ex: validação unificada, estado compartilhado, slot de conteúdo.
            </p>
          </div>

          <div style="border:1px solid var(--docs-border);border-radius:8px;padding:16px;border-top:3px solid var(--docs-accent)">
            <strong style="font-size:13px;color:var(--docs-text)">③ Novo Organismo</strong>
            <p style="font-size:12px;color:var(--docs-text-muted);margin-top:6px;line-height:1.6">
              Contém lógica de negócio ou estado interno significativo.
              Sempre documente a composição com <code class="font-mono">&#64;composedOf</code> no JSDoc.
              Pode ser reutilizado em múltiplos contextos de produto.
            </p>
          </div>

          <div style="border:1px solid var(--docs-border);border-radius:8px;padding:16px;border-top:3px solid #196766">
            <strong style="font-size:13px;color:var(--docs-text)">④ Novo Token</strong>
            <p style="font-size:12px;color:var(--docs-text-muted);margin-top:6px;line-height:1.6">
              Primeiro verifique se já existe. Tokens primitivos apenas para cores da marca.
              Tokens semânticos para decisões de uso.
              Nunca referencie um token semântico dentro de <code class="font-mono">_primitive.scss</code>.
            </p>
          </div>

        </div>
      </div>

    </div>
  `,
})
export class ArchitectureComponent {
  activeTab: 'atoms' | 'molecules' | 'organisms' | 'templates' = 'atoms';

  atoms = [
    { name: 'Button',          selector: 'kln-button',           route: 'button' },
    { name: 'Split Button',    selector: 'kln-split-button',     route: 'split-button' },
    { name: 'Tag',             selector: 'kln-tag',              route: 'badge-tag-chip' },
    { name: 'Badge',           selector: 'kln-badge',            route: 'badge-tag-chip' },
    { name: 'Chip',            selector: 'kln-chip',             route: 'badge-tag-chip' },
    { name: 'Divider',         selector: 'kln-divider',          route: 'divider' },
    { name: 'Skeleton',        selector: 'kln-skeleton',         route: 'skeleton' },
    { name: 'Progress Bar',    selector: 'kln-progress-bar',     route: 'progress-bar' },
    { name: 'Progress Spinner',selector: 'kln-progress-spinner', route: 'progress-spinner' },
    { name: 'Knob',            selector: 'kln-knob',             route: 'knob' },
    { name: 'Slider',          selector: 'kln-slider',           route: 'slider' },
    { name: 'Rating',          selector: 'kln-rating',           route: 'rating' },
    { name: 'Image',           selector: 'kln-image',            route: 'image' },
    { name: 'Avatar',          selector: 'kln-avatar',           route: 'avatar' },
    { name: 'Scroll Top',      selector: 'kln-scroll-top',       route: 'scroll-top' },
    { name: 'Block UI',        selector: 'kln-block-ui',         route: 'block-ui' },
    { name: 'Input Text',      selector: 'kln-input-text',       route: 'input-text' },
    { name: 'Input Number',    selector: 'kln-input-number',     route: 'input-number' },
    { name: 'Input Mask',      selector: 'kln-input-mask',       route: 'input-mask' },
    { name: 'Input OTP',       selector: 'kln-input-otp',        route: 'input-otp' },
    { name: 'Textarea',        selector: 'kln-textarea',         route: 'textarea' },
    { name: 'Password',        selector: 'kln-password',         route: 'password' },
    { name: 'Color Picker',    selector: 'kln-color-picker',     route: 'color-picker' },
    { name: 'Checkbox',        selector: 'kln-checkbox',         route: 'checkbox' },
    { name: 'Toggle',          selector: 'kln-toggle',           route: 'toggle' },
    { name: 'Status Pill',     selector: 'kln-status-pill',      route: 'status-pill' },
    { name: 'Overlay Badge',   selector: 'kln-overlay-badge',    route: 'overlay-badge' },
    { name: 'Inplace',         selector: 'kln-inplace',          route: 'inplace' },
  ];

  molecules = [
    { name: 'Float Label',    selector: 'kln-float-label',   route: 'float-label' },
    { name: 'Ifta Label',     selector: 'kln-ifta-label',    route: 'ifta-label' },
    { name: 'Input Group',    selector: 'kln-input-group',   route: 'input-group' },
    { name: 'Button Group',   selector: 'kln-button-group',  route: 'button-group' },
    { name: 'Select Button',  selector: 'kln-select-button', route: 'select-button' },
    { name: 'Avatar Group',   selector: 'kln-avatar-group',  route: 'avatar' },
    { name: 'Message',        selector: 'kln-message',       route: 'message' },
    { name: 'Messages',       selector: 'kln-messages',      route: 'message' },
    { name: 'Breadcrumb',     selector: 'kln-breadcrumb',    route: 'breadcrumb' },
    { name: 'Steps',          selector: 'kln-steps',         route: 'steps' },
    { name: 'Tab Menu',       selector: 'kln-tab-menu',      route: 'tab-menu' },
    { name: 'Toolbar',        selector: 'kln-toolbar',       route: 'toolbar' },
    { name: 'Speed Dial',     selector: 'kln-speed-dial',    route: 'speed-dial' },
    { name: 'File Upload',    selector: 'kln-file-upload',   route: 'file-upload' },
    { name: 'Paginator',      selector: 'kln-paginator',     route: 'paginator' },
    { name: 'Select',         selector: 'kln-select',        route: 'select' },
    { name: 'MultiSelect',    selector: 'kln-multiselect',   route: 'multiselect' },
    { name: 'Cascade Select', selector: 'kln-cascade-select',route: 'cascade-select' },
    { name: 'Tree Select',    selector: 'kln-tree-select',   route: 'tree-select' },
    { name: 'Listbox',        selector: 'kln-listbox',       route: 'listbox' },
    { name: 'AutoComplete',   selector: 'kln-autocomplete',  route: 'autocomplete' },
    { name: 'Calendar',       selector: 'kln-calendar',      route: 'calendar' },
    { name: 'Radio Group',    selector: 'kln-radio-group',   route: 'radio-group' },
    { name: 'Icon Field',     selector: 'kln-icon-field',    route: 'icon-field' },
    { name: 'Service Tile',   selector: 'kln-service-tile',  route: 'portal-templates' },
    { name: 'Stepper',        selector: 'kln-stepper',       route: 'stepper' },
    { name: 'Tabs',           selector: 'kln-tabs',          route: 'tabs' },
  ];

  organisms = [
    { name: 'Card',            selector: 'kln-card',            route: 'card' },
    { name: 'KPI Card',        selector: 'kln-kpi-card',        route: 'kpi-card' },
    { name: 'Table',           selector: 'kln-table',           route: 'table' },
    { name: 'Data View',       selector: 'kln-data-view',       route: 'data-view' },
    { name: 'Tree',            selector: 'kln-tree',            route: 'tree' },
    { name: 'Tree Table',      selector: 'kln-tree-table',      route: 'tree-table' },
    { name: 'Dialog',          selector: 'kln-dialog',          route: 'dialog' },
    { name: 'Confirm Dialog',  selector: 'kln-confirm-dialog',  route: 'confirm-dialog' },
    { name: 'Confirm Popup',   selector: 'kln-confirm-popup',   route: 'confirm-dialog' },
    { name: 'Drawer',          selector: 'kln-drawer',          route: 'drawer' },
    { name: 'Accordion',       selector: 'kln-accordion',       route: 'accordion' },
    { name: 'Panel',           selector: 'kln-panel',           route: 'panel' },
    { name: 'Fieldset',        selector: 'kln-fieldset',        route: 'fieldset' },
    { name: 'Splitter',        selector: 'kln-splitter',        route: 'splitter' },
    { name: 'Scroll Panel',    selector: 'kln-scroll-panel',    route: 'scroll-panel' },
    { name: 'Menubar',         selector: 'kln-menubar',         route: 'menubar' },
    { name: 'Tiered Menu',     selector: 'kln-tiered-menu',     route: 'tiered-menu' },
    { name: 'Mega Menu',       selector: 'kln-mega-menu',       route: 'mega-menu' },
    { name: 'Context Menu',    selector: 'kln-context-menu',    route: 'context-menu' },
    { name: 'Panel Menu',      selector: 'kln-panel-menu',      route: 'panel-menu' },
    { name: 'Toast',           selector: 'kln-toast',           route: 'toast' },
    { name: 'Popover',         selector: 'kln-popover',         route: 'popover' },
    { name: 'Galleria',        selector: 'kln-galleria',        route: 'galleria' },
    { name: 'Chart',           selector: 'kln-chart',           route: 'chart' },
    { name: 'Carousel',        selector: 'kln-carousel',        route: 'carousel' },
    { name: 'Timeline',        selector: 'kln-timeline',        route: 'timeline' },
    { name: 'Order List',      selector: 'kln-order-list',      route: 'order-list' },
    { name: 'Pick List',       selector: 'kln-pick-list',       route: 'pick-list' },
    { name: 'Virtual Scroller',selector: 'kln-virtual-scroller',route: 'virtual-scroller' },
    { name: 'Image Compare',   selector: 'kln-image-compare',   route: 'image-compare' },
    { name: 'Editor',          selector: 'kln-editor',          route: 'editor' },
    { name: 'MeterGroup',      selector: 'kln-meter-group',     route: 'meter-group' },
    { name: 'Dock',            selector: 'kln-dock',            route: 'dock' },
    { name: 'Org Chart',       selector: 'kln-organization-chart', route: 'organization-chart' },
  ];

  templates = [
    { name: 'Portal Shell',   selector: 'kln-portal-shell',   route: 'portal-templates' },
    { name: 'Portal Header',  selector: 'kln-portal-header',  route: 'portal-templates' },
    { name: 'Portal Footer',  selector: 'kln-portal-footer',  route: 'portal-templates' },
    { name: 'Portal Login',   selector: 'kln-portal-login',   route: 'portal-templates' },
    { name: 'Service Tile',   selector: 'kln-service-tile',   route: 'portal-templates' },
  ];
}
