# @klini/ds — Klini Design System

Biblioteca de componentes Angular + tokens de design para o Klini Saúde.  
Distribuída via **GitHub Packages** (privado).

**Versão atual:** `0.4.0` · [Changelog](#versões)

---

## Instalação

Configure o registry no `.npmrc` do projeto consumidor:

```
@klini:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=SEU_TOKEN_AQUI
```

Instale a biblioteca:

```bash
npm install @klini/ds
```

---

## Configuração

### 1. Importar tokens CSS

No `styles.scss` global do projeto:

```scss
@use '@klini/ds/styles';
```

### 2. Configurar tema PrimeNG

No `app.config.ts`:

```typescript
import { providePrimeNG } from 'primeng/config';
import { KliniPrime } from '@klini/ds';

export const appConfig: ApplicationConfig = {
  providers: [
    providePrimeNG({
      theme: {
        preset: KliniPrime,
        options: { darkModeSelector: '.dark' },
      },
    }),
  ],
};
```

### 3. Usar componentes

**Standalone (recomendado):**

```typescript
import { KliniButtonComponent, KliniChartComponent } from '@klini/ds';

@Component({
  imports: [KliniButtonComponent, KliniChartComponent],
  template: `
    <kln-button label="Salvar" severity="primary" />
    <kln-chart type="bar" [data]="chartData" />
  `,
})
export class MinhaPage {}
```

**NgModule:**

```typescript
import { KliniDsModule } from '@klini/ds';

@NgModule({ imports: [KliniDsModule] })
export class AppModule {}
```

---

## Componentes

> **Prefixo padrão: `kln-`** · Ex: `<kln-button>`, `<kln-chart>`

### Elementos visuais

| Componente | Selector | Inputs principais |
|---|---|---|
| Button | `kln-button` | `label`, `severity`, `size`, `variant`, `disabled`, `loading` |
| Badge | `kln-badge` | `value`, `severity`, `size` |
| Tag | `kln-tag` | `value`, `severity` |
| Chip | `kln-chip` | `label`, `removable`, `selected` |
| Avatar | `kln-avatar` | `image`, `label`, `icon`, `size`, `shape` |
| Avatar Group | `kln-avatar-group` | slot padrão com `<kln-avatar>` filhos |
| Status Pill | `kln-status-pill` | `status` (autorizada \| negado \| em-processo \| parcialmente \| inativa) |
| Image | `kln-image` | `src`, `alt`, `width`, `height`, `preview` |

### Feedback & Notificações

| Componente | Selector | Inputs principais |
|---|---|---|
| Toast | `kln-toast` | service `KliniToastService` — `show({ severity, summary, detail })` |
| Message | `kln-message` | `text`, `severity`, `closable` |
| Messages | `kln-messages` | `value[]` (ToastMessageOptions), `closable` |
| Confirm Dialog | `kln-confirm-dialog` | service `KliniConfirmService` — `confirm({ message, accept })` |
| Popover | `kln-popover` | `appendTo`, slot padrão para conteúdo |
| Speed Dial | `kln-speed-dial` | `items[]`, `direction`, `transitionDelay`, `type` |
| Progress Spinner | `kln-progress-spinner` | `strokeWidth`, `fill`, `animationDuration` |

### Cards & Layout

| Componente | Selector | Inputs principais |
|---|---|---|
| Card | `kln-card` | slots `[kliniCardHeader]`, `[kliniCardFooter]` |
| KPI Card | `kln-kpi-card` | `label`, `value`, `trend`, `trendLabel`, `icon`, `description` |
| Divider | `kln-divider` | `type` (solid \| dashed \| dotted), `layout`, `align` |
| Empty State | `kln-empty-state` | `title`, `description`, `icon` |
| Skeleton | `kln-skeleton` | `width`, `height`, `shape`, `animation` |
| Panel | `kln-panel` | `header`, `toggleable`, `collapsed` |
| Fieldset | `kln-fieldset` | `legend`, `toggleable`, `collapsed` |
| Splitter | `kln-splitter` | `layout`, `stateKey`, slot `<p-splitter-panel>` |
| Scroll Panel | `kln-scroll-panel` | `style`, `styleClass` |
| Toolbar | `kln-toolbar` | slots `[start]`, `[center]`, `[end]` |

### Layout de Formulário

| Componente | Selector | Inputs principais |
|---|---|---|
| Float Label | `kln-float-label` | `label`, `for` — envolve qualquer campo |
| Input Group | `kln-input-group` | slots `[prefix]`, `[suffix]` — envolve campos com addons |
| Button Group | `kln-button-group` | slot padrão com `<kln-button>` filhos |

### Formulários

| Componente | Selector | Inputs principais | CVA |
|---|---|---|---|
| Input Text | `kln-input-text` | `label`, `placeholder`, `size`, `errorMessage`, `hint` | ✅ |
| Input Number | `kln-input-number` | `label`, `min`, `max`, `step`, `prefix`, `suffix`, `mode` | ✅ |
| Input Mask | `kln-input-mask` | `label`, `mask`, `placeholder`, `slotChar`, `errorMessage` | ✅ |
| Textarea | `kln-textarea` | `label`, `rows`, `autoResize`, `maxLength`, `errorMessage` | ✅ |
| Password | `kln-password` | `label`, `feedback`, `toggleMask`, `errorMessage` | ✅ |
| Select | `kln-select` | `label`, `options`, `placeholder`, `filter`, `errorMessage` | ✅ |
| Multi Select | `kln-multiselect` | `label`, `options`, `placeholder`, `filter`, `display`, `errorMessage` | ✅ |
| Autocomplete | `kln-autocomplete` | `label`, `suggestions[]`, `dropdown`, `multiple`, `errorMessage` | ✅ |
| Cascade Select | `kln-cascade-select` | `label`, `options`, `optionLabel`, `optionGroupLabel`, `optionGroupChildren` | ✅ |
| Listbox | `kln-listbox` | `options`, `multiple`, `filter`, `optionLabel`, `optionValue` | ✅ |
| Select Button | `kln-select-button` | `options`, `multiple`, `optionLabel`, `optionValue` | ✅ |
| Radio Group | `kln-radio-group` | `name`, `options`, `layout` (column \| row) | ✅ |
| Checkbox | `kln-checkbox` | `label`, `binary`, `disabled` | ✅ |
| Toggle | `kln-toggle` | `disabled` | ✅ |
| Rating | `kln-rating` | `stars`, `disabled` | ✅ |
| Slider | `kln-slider` | `min`, `max`, `step`, `range`, `orientation` | ✅ |
| Calendar | `kln-calendar` | `label`, `dateFormat`, `selectionMode`, `showIcon`, `floatLabel` | ✅ |
| Tree Select | `kln-tree-select` | `label`, `options` (TreeNode[]), `selectionMode`, `placeholder`, `display` | ✅ |
| File Upload | `kln-file-upload` | `url`, `multiple`, `accept`, `maxFileSize`, `auto` | — |

### Navegação & Overlay

| Componente | Selector | Inputs principais |
|---|---|---|
| Tabs | `kln-tabs` | `activeTab` + `p-tab-list` / `p-tab-panel` internamente |
| Tab Menu | `kln-tab-menu` | `model[]` (MenuItem), `activeItem` |
| Stepper | `kln-stepper` | `steps[]`, `activeStep`, `linear` |
| Steps | `kln-steps` | `model[]` (MenuItem), `activeIndex`, `readonly` |
| Accordion | `kln-accordion` | `activeValue`, `multiple` |
| Breadcrumb | `kln-breadcrumb` | `items[]`, `home` |
| Menu | `kln-menu` | `items[]`, `popup` |
| Menubar | `kln-menubar` | `model[]` (MenuItem), `autoDisplay` |
| Split Button | `kln-split-button` | `label`, `icon`, `model[]` (MenuItem), `severity` |
| Drawer | `kln-drawer` | `visible`, `header`, `position`, `modal` |
| Dialog | `kln-dialog` | `visible`, `header`, `modal`, slot `[kliniDialogFooter]` |
| Paginator | `kln-paginator` | `totalRecords`, `rows`, `rowsPerPageOptions` |

### Tabela

| Componente | Selector | Inputs principais |
|---|---|---|
| Table | `kln-table` | `value[]`, `columns[]`, `loading`, `paginator`, `pageSize` |

### Data & Listas

| Componente | Selector | Inputs principais |
|---|---|---|
| Timeline | `kln-timeline` | `value[]` (KliniTimelineEvent), `layout`, `align` |
| DataView | `kln-dataview` | `value[]`, `layout` (list \| grid), `paginator`, `rows` |
| Carousel | `kln-carousel` | `value[]`, `numVisible`, `numScroll`, `circular`, `autoplayInterval` |
| Tree | `kln-tree` | `value[]` (TreeNode), `selectionMode`, `loading`, `filter` |
| Order List | `kln-order-list` | `value[]`, `header`, `filterBy`, `dragdrop` |
| Virtual Scroller | `kln-virtual-scroller` | `items[]`, `itemSize`, `scrollHeight` |

### Data Visualization

| Componente | Selector | Inputs principais |
|---|---|---|
| Chart | `kln-chart` | `type`, `data`, `preset`, `options`, `stacked`, `width`, `height` |
| Knob (Progress Ring) | `kln-knob` | `min`, `max`, `size`, `showValue`, `valueColor` |
| Meter Group | `kln-meter-group` | `value[]` (MeterItem), `max`, `orientation`, `indicatorValue`, `indicatorUnit` |
| Progress Bar | `kln-progress-bar` | `value`, `mode`, `showValue`, `unit` |


---

## kln-chart — Presets e paleta completa

O `kln-chart` cobre todos os tipos Chart.js via `[type]` + `[preset]`. O preset aplica
automaticamente as opções de grid, legenda, tooltip e cores de texto do DS — zero configuração manual.

### Todos os presets disponíveis (14 variantes)

```html
<!-- ── Bar ─────────────────────────────────────────── -->
<kln-chart type="bar" preset="bar"                      [data]="data" />
<kln-chart type="bar" preset="bar-horizontal"           [data]="data" />
<kln-chart type="bar" preset="bar-stacked"              [data]="data" />
<kln-chart type="bar" preset="bar-stacked-horizontal"   [data]="data" />

<!-- ── Line / Area ──────────────────────────────────── -->
<kln-chart type="line" preset="line"        [data]="data" />
<kln-chart type="line" preset="area"        [data]="data" />
<kln-chart type="line" preset="time-series" [data]="data" />

<!-- ── Mixed (bar + line no mesmo gráfico) ──────────── -->
<kln-chart type="bar" preset="mixed" [data]="data" />

<!-- ── Radiais ──────────────────────────────────────── -->
<kln-chart type="pie"      preset="pie"        [data]="data" />
<kln-chart type="doughnut" preset="doughnut"   [data]="data" />
<kln-chart type="polarArea" preset="polar-area" [data]="data" />
<kln-chart type="radar"    preset="radar"      [data]="data" />

<!-- ── Dispersão ────────────────────────────────────── -->
<kln-chart type="scatter" preset="scatter" [data]="data" />
<kln-chart type="bubble"  preset="bubble"  [data]="data" />
```

### Cores do DS em datasets — `KliniChartTokens`

Chart.js renderiza em `<canvas>` — CSS variables não chegam automaticamente.
Use `KliniChartTokens` para resolver os tokens do DS em runtime:

```typescript
import { KliniChartTokens } from '@klini/ds';

// Categorical (4 séries da marca)
backgroundColor: KliniChartTokens.categorical
// → ['#259591', '#6aa7ae', '#cd7925', '#e05759']

// Status semânticos
backgroundColor: [
  KliniChartTokens.status.success,   // aprovado
  KliniChartTokens.status.danger,    // negado
  KliniChartTokens.status.secondary, // em processo
]

// Sequential teal (intensidade / heatmap)
backgroundColor: KliniChartTokens.sequential
// → 5 cores: WASH → 33 → 100 → DEEP → INK
```

### `KliniChartData` — construtor de dados sem conhecer Chart.js

```typescript
import { KliniChartData } from '@klini/ds';

// Bar / Line / Area — múltiplas séries (cores aplicadas automaticamente)
data = KliniChartData.cartesian(
  ['Jan', 'Fev', 'Mar', 'Abr'],
  [
    { label: 'Cardio',   data: [40, 55, 48, 62] },
    { label: 'Ortoped',  data: [30, 42, 38, 45] },
    { label: 'Pediatria',data: [25, 30, 28, 35] },
  ],
);

// Pie / Doughnut / Polar — cores de status automáticas
data = KliniChartData.status(
  ['Autorizado', 'Negado', 'Em processo', 'Parcial', 'Inativo'],
  [60, 15, 10, 8, 7],
);

// Pie com paleta categorical
data = KliniChartData.radial(
  ['Região Norte', 'Sul', 'Leste', 'Oeste'],
  [35, 28, 22, 15],
);

// Mixed (bar + line)
data = KliniChartData.mixed(
  ['Jan', 'Fev', 'Mar'],
  [
    { label: 'Consultas', data: [120, 145, 130], type: 'bar' },
    { label: 'Meta',      data: [130, 130, 130], type: 'line' },
  ],
);

// Time Series
data = KliniChartData.timeSeries([
  { label: 'Adesão %', points: [
    { x: '2024-01', y: 82 },
    { x: '2024-02', y: 78 },
    { x: '2024-03', y: 85 },
  ]},
]);

// Scatter
data = KliniChartData.scatter([
  { label: 'Grupo A', points: [{ x: 10, y: 20 }, { x: 15, y: 32 }] },
]);

// Radar
data = KliniChartData.radar(
  ['Adesão', 'Satisfação', 'Retorno', 'NPS', 'Cobertura'],
  [
    { label: 'Klini',     data: [82, 74, 90, 68, 85] },
    { label: 'Mercado',   data: [65, 60, 72, 55, 70] },
  ],
);
```

### `autoColors` — cores DS sem nenhum código extra

```html
<!-- Dados sem nenhuma cor → DS aplica paleta categorical automaticamente -->
<kln-chart type="bar" preset="bar" [data]="rawData" [autoColors]="true" />

<!-- Para pie/doughnut, aplica as 4 cores categoricals nos segmentos -->
<kln-chart type="doughnut" preset="doughnut" [data]="rawData" [autoColors]="true" />
```

### Exemplo completo — Doughnut com tokens de status

```typescript
import { KliniChartTokens } from '@klini/ds';

chartData = {
  labels: ['Autorizado', 'Negado', 'Em processo'],
  datasets: [{
    data: [60, 15, 25],
    backgroundColor: [
      KliniChartTokens.status.success,
      KliniChartTokens.status.danger,
      KliniChartTokens.status.secondary,
    ],
    borderWidth: 0,
  }],
};
```

```html
<kln-chart type="doughnut" preset="doughnut" [data]="chartData" height="280px" />
```

### Override parcial de opções

O `[options]` é mesclado **por cima** do preset — só sobrescreva o que precisar:

```html
<kln-chart
  type="line"
  preset="line"
  [data]="data"
  [options]="{ plugins: { legend: { display: false } } }"
/>
```

### Padrão Adherence Heatmap

```typescript
import { KliniChartTokens } from '@klini/ds';

adherenceData = {
  labels: ['S1','S2','S3','S4','S5','S6','S7','S8','S9','S10','S11','S12'],
  datasets: [{
    label: 'Adesão',
    data: [85, 60, 95, 70, 80, 40, 90, 75, 55, 88, 65, 92],
    backgroundColor: (ctx: { raw: number }) => {
      const seq = KliniChartTokens.sequential;
      if (ctx.raw >= 80) return seq[2]; // seq-100
      if (ctx.raw >= 60) return seq[1]; // seq-33
      return seq[0];                    // seq-wash
    },
    stack: 'adherence',
  }],
};
```

```html
<kln-chart type="bar" preset="bar-stacked" [data]="adherenceData"
           [options]="{ plugins: { legend: { display: false } } }" />
```

> **Upgrade opcional — heatmap visual com células (`type="matrix"`):**  
> Instale `chartjs-chart-matrix` e registre `MatrixController, MatrixElement`.  
> Use `[type]="$any('matrix')"` no template. O DS não garante suporte a plugins externos.

---

## kln-meter-group — Variante WithIndicator (Zone Bar)

```typescript
import { MeterItem } from 'primeng/metergroup';
import { KliniChartTokens } from '@klini/ds';

zones: MeterItem[] = [
  { label: 'Normal',  value: 40, color: KliniChartTokens.status.success },
  { label: 'Atenção', value: 35, color: KliniChartTokens.status.warn    },
  { label: 'Alta',    value: 25, color: KliniChartTokens.status.danger  },
];
```

```html
<!-- Padrão — sem indicador -->
<kln-meter-group [value]="zones" [max]="100" />

<!-- WithIndicator — ponteiro posicionado no valor atual -->
<kln-meter-group [value]="zones" [max]="200" [indicatorValue]="128" indicatorUnit="mmHg" />
```

---

## Tokens CSS

```css
/* Cores primitivas */
--klini-color-teal-500     /* #259591 — cor principal */
--klini-space-4            /* 16px */
--klini-radius-lg          /* 8px */

/* Semânticos */
--klini-action-primary
--klini-text-primary
--klini-surface-page

/* Elevação */
--klini-elevation-sm
--klini-elevation-md
--klini-elevation-lg
--klini-focus-default
--klini-focus-error

/* Paleta para gráficos — Categorical (4 séries da marca) */
--kln-chart-cat-teal       /* #259591 — teal principal */
--kln-chart-cat-sea        /* #6aa7ae — teal claro */
--kln-chart-cat-orange     /* #cd7925 — âmbar */
--kln-chart-cat-coral      /* #e05759 — coral */

/* Sequential — Teal Scale (5 stops nomeados) */
--kln-chart-seq-wash       /* mais claro */
--kln-chart-seq-33
--kln-chart-seq-100        /* teal completo */
--kln-chart-seq-deep
--kln-chart-seq-ink        /* mais escuro */

/* Diverging */
--kln-chart-div-warm       /* #e05759 — polo quente */
--kln-chart-div-neutral    /* #eeeff0 — ponto médio */
--kln-chart-div-cool       /* #6aa7ae — polo frio */

/* Status semânticos (Klini App) */
--kln-chart-status-success    /* aprovado / adesão ok */
--kln-chart-status-info       /* informativo / parcial */
--kln-chart-status-warn       /* atenção / inativo */
--kln-chart-status-danger     /* negado / crítico */
--kln-chart-status-secondary  /* em processo / neutro */

/* Aliases legados (backward compat) */
--kln-chart-status-autorizada
--kln-chart-status-negada
--kln-chart-status-em-processo
--kln-chart-status-parcial
--kln-chart-status-inativa
```

---

## Publicar nova versão

```bash
# 1. Atualize a versão na biblioteca
# em projects/klini-ds/package.json: "version": "0.x.y"

# 2. Commit + tag — o GitHub Action publica automaticamente
git add .
git commit -m "chore(release): bump para 0.x.y"
git tag -a v0.x.y -m "Release v0.x.y"
git push origin main --tags
```

---

## Versões

| Versão | Destaques |
|---|---|
| **0.5.0** | Sistema de charts completo: `KliniChartData` (fábricas cartesian/radial/status/mixed/timeSeries/scatter/bubble/radar) · `KliniChartTokens` (resolve CSS vars para canvas) · `KliniChartPresets` (14 variantes: bar/bar-horizontal/bar-stacked/bar-stacked-horizontal/line/area/mixed/time-series/pie/doughnut/polar-area/radar/scatter/bubble) · `[preset]` e `[autoColors]` no `kln-chart` · paleta semântica (success/info/warn/danger/secondary) · `kln-meter-group` WithIndicator · fix CI publish path |
| **0.4.0** | 32 novos componentes: Checkbox, MultiSelect, Autocomplete, InputMask, Rating, SelectButton, Listbox, TreeSelect, CascadeSelect, FloatLabel, InputGroup, ButtonGroup, Toolbar, Panel, Fieldset, Splitter, ScrollPanel, Image, AvatarGroup, Messages, Popover, SpeedDial, ProgressSpinner, Menubar, TabMenu, Steps, SplitButton, Timeline, DataView, Carousel, Tree, OrderList, VirtualScroller |
| **0.3.0** | Seletores renomeados para `kln-*` · Data Visualization (Chart, Knob, MeterGroup, Slider, Select) · Paleta de cores para gráficos |
| **0.2.1** | Corrige CI de publish + ESLint |
| **0.2.0** | 18 novos componentes · Tokens de elevação/focus |
| **0.1.0** | Versão inicial — 14 componentes base |

> **Breaking change v0.3.0:** todos os seletores mudaram de `klini-*` para `kln-*`.  
> Substitua `<klini-button>` → `<kln-button>` etc. nos seus templates.

---

## Desenvolvimento

```bash
npm install
npm run build        # build da biblioteca
npm run lint         # checar qualidade do código
```

Figma: [Klini DS](https://www.figma.com/design/gOsRuHIPm6Xo5zGEWDmnRW/Klini-Sa%C3%BAde-%E2%80%94-Design-System)
