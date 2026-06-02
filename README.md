# @klini-saude/ds — Klini Design System

Biblioteca de componentes Angular + tokens de design para o Klini Saúde.  
Distribuída via **GitHub Packages** (privado).

**Versão atual:** `2.0.0` · [Changelog](./CHANGELOG.md) · [Figma](https://www.figma.com/design/gOsRuHIPm6Xo5zGEWDmnRW/Klini-Sa%C3%BAde-%E2%80%94-Design-System)

> ⚠️ **v2.0.0 — Breaking change:** todos os identificadores `Klini*` foram renomeados para `Kln*` e os tokens CSS `--klini-*` para `--kln-*`. Veja o [guia de migração](#-migração-v1x--v20) antes de atualizar.

---

## Instalação

Configure o registry no `.npmrc` do projeto consumidor:

```
@klini-saude:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=SEU_TOKEN_AQUI
```

Instale a biblioteca:

```bash
npm install @klini-saude/ds@2.0.0
```

---

## ⚠️ Migração v1.x → v2.0

### O que mudou

| Antes (v1.x) | Depois (v2.0) |
|---|---|
| `KliniDsModule` | `KlnDsModule` |
| `KliniPrime` | `KlnPrime` |
| `KliniSelectComponent` | `KlnSelectComponent` |
| `KliniChartData` | `KlnChartData` |
| `KliniToastService` | `KlnToastService` |
| `KliniChartPreset` (type) | `KlnChartPreset` |
| `--klini-color-teal-500` | `--kln-color-teal-500` |
| Todos `--klini-*` | `--kln-*` |

> Os seletores HTML (`kln-button`, `kln-select`…) **não mudam**.

### Script de migração automática (bash)

```bash
# Roda na raiz do projeto consumidor — 1 vez
find src/ -name "*.ts"   | xargs sed -i "s/Klini\([A-Z]\)/Kln\1/g"
find src/ -name "*.scss" | xargs sed -i "s/--klini-/--kln-/g"
find src/ -name "*.css"  | xargs sed -i "s/--klini-/--kln-/g"
find src/ -name "*.html" | xargs sed -i "s/--klini-/--kln-/g"
ng build   # confirma que passou
```

---

## Configuração

### 1. Importar tokens CSS

No `styles.scss` global do projeto:

```scss
@use '@klini-saude/ds/styles';
```

### 2. Configurar tema PrimeNG

No `app.config.ts`:

```typescript
import { providePrimeNG } from 'primeng/config';
import { KlnPrime } from '@klini-saude/ds';

export const appConfig: ApplicationConfig = {
  providers: [
    providePrimeNG({
      theme: {
        preset: KlnPrime,
        options: { darkModeSelector: '.dark' },
      },
    }),
  ],
};
```

### 3. Usar componentes

**Standalone (recomendado):**

```typescript
import { KlnButtonComponent, KlnChartComponent } from '@klini-saude/ds';

@Component({
  imports: [KlnButtonComponent, KlnChartComponent],
  template: `
    <kln-button label="Salvar" severity="primary" />
    <kln-chart type="bar" [data]="chartData" />
  `,
})
export class MinhaPage {}
```

**NgModule:**

```typescript
import { KlnDsModule } from '@klini-saude/ds';

@NgModule({ imports: [KlnDsModule] })
export class AppModule {}
```

---

## Arquitetura

O Klini DS segue a metodologia **Atomic Design**: os 94 componentes são organizados em quatro níveis — Átomos (building blocks básicos como botões, badges e inputs), Moléculas (composições coesas como toolbars e input groups), Organismos (seções autônomas como tabelas, dialogs e charts) e Templates (layouts completos de portal). O sistema de tokens segue uma hierarquia de cinco camadas — Primitive → Semantic → Status → Elevation → Scale — inspirada no Fluent Design System para o sistema de elevação e sombras.

Para a documentação completa da arquitetura, incluindo classificação de todos os componentes e guia de extensão, consulte [ARCHITECTURE.md](./ARCHITECTURE.md).

```
Hierarquia de Tokens:
┌─────────────────┐
│  _primitive     │  Valores brutos: #259591, 16px
├─────────────────┤
│  _semantic      │  Papéis: --kln-text-primary, --kln-surface-page
├─────────────────┤
│  _status        │  Domínio Klini: autorizada, negado, em-processo
├─────────────────┤
│  _elevation     │  Profundidade: sm → xl (Fluent-inspired)
├─────────────────┤
│  _scale         │  Espaçamento, tipografia, z-index, breakpoints
└─────────────────┘
```

---

## Componentes

> **Prefixo padrão: `kln-`** · Ex: `<kln-button>`, `<kln-chart>`

### Elementos visuais

| Componente | Seletor | Inputs principais |
|---|---|---|
| Button | `kln-button` | `label`, `severity`, `size`, `variant`, `disabled`, `loading` |
| Badge | `kln-badge` | `value`, `severity`, `size` |
| Tag | `kln-tag` | `value`, `severity` |
| Chip | `kln-chip` | `label`, `removable`, `selected` |
| Avatar | `kln-avatar` | `image`, `label`, `icon`, `size`, `shape` |
| Avatar Group | `kln-avatar-group` | slot com `<kln-avatar>` filhos |
| Status Pill | `kln-status-pill` | `status` (autorizada \| negado \| em-processo \| parcialmente \| inativa) |
| Image | `kln-image` | `src`, `alt`, `width`, `height`, `preview` |
| Image Compare | `kln-image-compare` | slot: `<img before />` + `<img after />` |
| Overlay Badge | `kln-overlay-badge` | `value`, `severity`, slot padrão |
| Galleria | `kln-galleria` | `value[]`, `numVisible`, `circular`, `showThumbnails` |

### Feedback & Notificações

| Componente | Seletor | Inputs principais |
|---|---|---|
| Toast | `kln-toast` | service `KlnToastService.show({ severity, summary, detail })` |
| Message | `kln-message` | `text`, `severity`, `closable` |
| Messages | `kln-messages` | `value[]`, `closable` |
| Confirm Dialog | `kln-confirm-dialog` | service `KlnConfirmService.confirm({ message, accept })` |
| Confirm Popup | `kln-confirm-popup` | `target`, `message` (inline/popup) |
| Popover | `kln-popover` | `appendTo`, slot padrão para conteúdo |
| Speed Dial | `kln-speed-dial` | `items[]`, `direction`, `type` |
| Progress Spinner | `kln-progress-spinner` | `strokeWidth`, `fill`, `animationDuration` |
| Block UI | `kln-block-ui` | `blocked`, `target` |

### Cards & Layout

| Componente | Seletor | Inputs principais |
|---|---|---|
| Card | `kln-card` | slots `[klnCardHeader]`, `[klnCardFooter]` |
| KPI Card | `kln-kpi-card` | `label`, `value`, `trend`, `trendLabel`, `icon`, `description` |
| Divider | `kln-divider` | `type` (solid \| dashed \| dotted), `layout`, `align` |
| Empty State | `kln-empty-state` | `title`, `description`, `icon` |
| Skeleton | `kln-skeleton` | `width`, `height`, `shape`, `animation` |
| Panel | `kln-panel` | `header`, `toggleable`, `collapsed` |
| Fieldset | `kln-fieldset` | `legend`, `toggleable`, `collapsed` |
| Splitter | `kln-splitter` | `layout`, `stateKey`, slot `<p-splitter-panel>` |
| Scroll Panel | `kln-scroll-panel` | `style`, `styleClass` |
| Toolbar | `kln-toolbar` | slots `[start]`, `[center]`, `[end]` |

### Portal Templates *(v1.1)*

Componentes de layout prontos para os Portais Klini.

| Componente | Seletor | Descrição |
|---|---|---|
| Portal Shell | `kln-portal-shell` | Layout completo: header + `ng-content` + footer |
| Portal Header | `kln-portal-header` | Barra gradiente + saudação + avatar do usuário |
| Portal Footer | `kln-portal-footer` | Rodapé com logo Klini Saúde + número ANS |
| Portal Login | `kln-portal-login` | Tela de login (CPF/matrícula + senha + primeiro acesso) |
| Service Tile | `kln-service-tile` | Tile ícone + label para grid de serviços |

```html
<!-- Exemplo — Portal do Beneficiário -->
<kln-portal-shell userName="PAULA ROSA" planLabel="Plano Klini Start PJ">
  <div class="services-grid">
    <kln-service-tile icon="pi-shield"    label="Carências"    (tileClick)="goTo('carencias')" />
    <kln-service-tile icon="pi-clock"     label="Atendimentos" (tileClick)="goTo('atendimentos')" />
    <kln-service-tile icon="pi-calendar"  label="Consultas"    (tileClick)="goTo('consultas')" />
    <kln-service-tile icon="pi-key"       label="Token"        (tileClick)="goTo('token')" />
  </div>
</kln-portal-shell>

<!-- Tela de login -->
<kln-portal-login (loginSubmit)="onLogin($event)" />
```

### Layout de Formulário

| Componente | Seletor | Inputs principais |
|---|---|---|
| Float Label | `kln-float-label` | `label`, `for` — envolve qualquer campo |
| Ifta Label | `kln-ifta-label` | Variante "in-field top aligned" do Float Label (PrimeNG 18+) |
| Input Group | `kln-input-group` | slots `[prefix]`, `[suffix]` |
| Button Group | `kln-button-group` | slot com `<kln-button>` filhos |

### Formulários

| Componente | Seletor | Inputs principais | CVA |
|---|---|---|---|
| Input Text | `kln-input-text` | `label`, `placeholder`, `size`, `errorMessage`, `hint` | ✅ |
| Input Number | `kln-input-number` | `label`, `min`, `max`, `step`, `prefix`, `suffix`, `mode` | ✅ |
| Input Mask | `kln-input-mask` | `label`, `mask`, `placeholder`, `slotChar`, `errorMessage` | ✅ |
| Input OTP | `kln-input-otp` | `length`, `integerOnly`, `mask` | ✅ |
| Textarea | `kln-textarea` | `label`, `rows`, `autoResize`, `maxLength`, `errorMessage` | ✅ |
| Password | `kln-password` | `label`, `feedback`, `toggleMask`, `errorMessage` | ✅ |
| Select | `kln-select` | `label`, `options`, `placeholder`, `filter`, `errorMessage` | ✅ |
| Multi Select | `kln-multiselect` | `label`, `options`, `placeholder`, `filter`, `display` | ✅ |
| Autocomplete | `kln-autocomplete` | `label`, `suggestions[]`, `dropdown`, `multiple` | ✅ |
| Cascade Select | `kln-cascade-select` | `label`, `options`, `optionGroupLabel`, `optionGroupChildren` | ✅ |
| Listbox | `kln-listbox` | `options`, `multiple`, `filter`, `optionLabel`, `optionValue` | ✅ |
| Select Button | `kln-select-button` | `options`, `multiple`, `optionLabel`, `optionValue` | ✅ |
| Toggle Button | `kln-toggle-button` | `onLabel`, `offLabel`, `onIcon`, `offIcon` | ✅ |
| Radio Group | `kln-radio-group` | `name`, `options`, `layout` (column \| row) | ✅ |
| Checkbox | `kln-checkbox` | `label`, `binary`, `disabled` | ✅ |
| Toggle | `kln-toggle` | `disabled` | ✅ |
| Rating | `kln-rating` | `stars`, `disabled` | ✅ |
| Slider | `kln-slider` | `min`, `max`, `step`, `range`, `orientation` | ✅ |
| Calendar | `kln-calendar` | `label`, `dateFormat`, `selectionMode`, `showIcon` | ✅ |
| Tree Select | `kln-tree-select` | `label`, `options` (TreeNode[]), `selectionMode` | ✅ |
| Color Picker | `kln-color-picker` | `format` (hex \| rgb \| hsb), `inline` | ✅ |
| File Upload | `kln-file-upload` | `url`, `multiple`, `accept`, `maxFileSize`, `auto` | — |
| Icon Field | `kln-icon-field` | slot com `<kln-input-text>` + `<i>` para ícone |  |
| Editor | `kln-editor` | `headerTemplate`, `formats[]` (Quill wrapper) | ✅ |
| Inplace | `kln-inplace` | `active`, `closable`, `disabled` | — |

### Navegação & Overlay

| Componente | Seletor | Inputs principais |
|---|---|---|
| Tabs | `kln-tabs` | `activeTab` + `p-tab-list` / `p-tab-panel` |
| Tab Menu | `kln-tab-menu` | `model[]` (MenuItem), `activeItem` |
| Stepper | `kln-stepper` | `steps[]`, `activeStep`, `linear` |
| Steps | `kln-steps` | `model[]` (MenuItem), `activeIndex`, `readonly` |
| Accordion | `kln-accordion` | `activeValue`, `multiple` |
| Breadcrumb | `kln-breadcrumb` | `items[]`, `home` |
| Menu | `kln-menu` | `items[]`, `popup` |
| Context Menu | `kln-context-menu` | `model[]` (MenuItem), `global`, `target` |
| Menubar | `kln-menubar` | `model[]` (MenuItem), `autoDisplay` |
| Mega Menu | `kln-mega-menu` | `model[]` (MegaMenuItem), `orientation` |
| Tiered Menu | `kln-tiered-menu` | `model[]` (MenuItem), `popup` |
| Panel Menu | `kln-panel-menu` | `model[]` (MenuItem), `multiple` |
| Split Button | `kln-split-button` | `label`, `icon`, `model[]`, `severity` |
| Drawer | `kln-drawer` | `visible`, `header`, `position`, `modal` |
| Dialog | `kln-dialog` | `visible`, `header`, `modal` |
| Paginator | `kln-paginator` | `totalRecords`, `rows`, `rowsPerPageOptions` |
| Scroll Top | `kln-scroll-top` | `target`, `threshold`, `behavior` |

### Tabela & Dados

| Componente | Seletor | Inputs principais |
|---|---|---|
| Table | `kln-table` | `value[]`, `columns[]`, `loading`, `paginator`, `pageSize` |
| Tree Table | `kln-tree-table` | `value[]` (TreeNode[]), `columns[]`, `loading`, `paginator` |
| Timeline | `kln-timeline` | `value[]` (KlnTimelineEvent), `layout`, `align` |
| DataView | `kln-dataview` | `value[]`, `layout` (list \| grid), `paginator`, `rows` |
| Carousel | `kln-carousel` | `value[]`, `numVisible`, `numScroll`, `circular` |
| Tree | `kln-tree` | `value[]` (TreeNode), `selectionMode`, `loading`, `filter` |
| Order List | `kln-order-list` | `value[]`, `header`, `filterBy`, `dragdrop` |
| Pick List | `kln-pick-list` | `source[]`, `target[]`, `sourceHeader`, `targetHeader` |
| Virtual Scroller | `kln-virtual-scroller` | `items[]`, `itemSize`, `scrollHeight` |

### Data Visualization

| Componente | Seletor | Inputs principais |
|---|---|---|
| Chart | `kln-chart` | `type`, `data`, `preset`, `options`, `stacked`, `width`, `height` |
| Knob | `kln-knob` | `min`, `max`, `size`, `showValue`, `valueColor` |
| Meter Group | `kln-meter-group` | `value[]`, `max`, `orientation`, `indicatorValue`, `indicatorUnit` |
| Progress Bar | `kln-progress-bar` | `value`, `mode`, `showValue`, `unit` |

---

## kln-chart — Presets e paleta

O `kln-chart` cobre todos os tipos Chart.js. O preset aplica automaticamente grid, legenda, tooltip e cores do DS — zero configuração manual.

### Todos os presets disponíveis (21 variantes)

```html
<!-- ── Bar ─────────────────────────────────────────── -->
<kln-chart type="bar" preset="bar"                      [data]="data" />
<kln-chart type="bar" preset="bar-horizontal"           [data]="data" />
<kln-chart type="bar" preset="bar-stacked"              [data]="data" />
<kln-chart type="bar" preset="bar-stacked-horizontal"   [data]="data" />
<kln-chart type="bar" preset="bar-grouped"              [data]="data" />
<kln-chart type="bar" preset="bar-stacked-100"          [data]="data" />
<kln-chart type="bar" preset="bar-negative"             [data]="data" />

<!-- ── Line / Area ──────────────────────────────────── -->
<kln-chart type="line" preset="line"            [data]="data" />
<kln-chart type="line" preset="line-stepped"    [data]="data" />
<kln-chart type="line" preset="line-dual-axis"  [data]="data" />
<kln-chart type="line" preset="area"            [data]="data" />
<kln-chart type="line" preset="sparkline"       [data]="data" />

<!-- ── Time Series ───────────────────────────────────── -->
<kln-chart type="line" preset="time-series"       [data]="data" />
<kln-chart type="line" preset="time-series-brush" [data]="data" />

<!-- ── Mixed (bar + line) ────────────────────────────── -->
<kln-chart type="bar" preset="mixed" [data]="data" />

<!-- ── Radiais ──────────────────────────────────────── -->
<kln-chart type="pie"       preset="pie"        [data]="data" />
<kln-chart type="doughnut"  preset="doughnut"   [data]="data" />
<kln-chart type="polarArea" preset="polar-area" [data]="data" />
<kln-chart type="radar"     preset="radar"      [data]="data" />

<!-- ── Dispersão ────────────────────────────────────── -->
<kln-chart type="scatter" preset="scatter" [data]="data" />
<kln-chart type="bubble"  preset="bubble"  [data]="data" />
```

### Cores do DS em datasets — `KlnChartTokens`

Chart.js renderiza em `<canvas>` — CSS vars não chegam automaticamente.
Use `KlnChartTokens` para resolver os tokens do DS em runtime:

```typescript
import { KlnChartTokens } from '@klini-saude/ds';

// Categorical (4 séries da marca)
backgroundColor: KlnChartTokens.categorical
// → ['#259591', '#6aa7ae', '#cd7925', '#e05759']

// Status semânticos
backgroundColor: [
  KlnChartTokens.status.success,   // aprovado / verde
  KlnChartTokens.status.danger,    // negado / coral
  KlnChartTokens.status.secondary, // em processo / neutro
]

// Sequential teal (heatmap de intensidade)
backgroundColor: KlnChartTokens.sequential
// → 5 stops: WASH → 33 → 100 → DEEP → INK
```

### `KlnChartData` — construtor de datasets sem conhecer Chart.js

```typescript
import { KlnChartData } from '@klini-saude/ds';

// Bar / Line — múltiplas séries (cores automáticas)
data = KlnChartData.cartesian(
  ['Jan', 'Fev', 'Mar', 'Abr'],
  [
    { label: 'Cardio',    data: [40, 55, 48, 62] },
    { label: 'Ortoped',   data: [30, 42, 38, 45] },
    { label: 'Pediatria', data: [25, 30, 28, 35] },
  ],
);

// Pie / Doughnut / Polar — status semânticos automáticos
data = KlnChartData.status(
  ['Autorizado', 'Negado', 'Em processo', 'Parcial', 'Inativo'],
  [60, 15, 10, 8, 7],
);

// Mixed (bar + line)
data = KlnChartData.mixed(
  ['Jan', 'Fev', 'Mar'],
  [
    { label: 'Consultas', data: [120, 145, 130], type: 'bar' },
    { label: 'Meta',      data: [130, 130, 130], type: 'line' },
  ],
);

// Time Series
data = KlnChartData.timeSeries([
  { label: 'Adesão %', points: [
    { x: '2024-01', y: 82 },
    { x: '2024-02', y: 78 },
    { x: '2024-03', y: 85 },
  ]},
]);

// Radar
data = KlnChartData.radar(
  ['Adesão', 'Satisfação', 'Retorno', 'NPS', 'Cobertura'],
  [
    { label: 'Klini',   data: [82, 74, 90, 68, 85] },
    { label: 'Mercado', data: [65, 60, 72, 55, 70] },
  ],
);
```

### `autoColors` — paleta DS sem nenhum código

```html
<kln-chart type="bar"      preset="bar"      [data]="rawData" [autoColors]="true" />
<kln-chart type="doughnut" preset="doughnut" [data]="rawData" [autoColors]="true" />
```

### Override parcial de opções

```html
<kln-chart
  type="line"
  preset="line"
  [data]="data"
  [options]="{ plugins: { legend: { display: false } } }"
/>
```

---

## kln-meter-group — Variante WithIndicator

```typescript
import { MeterItem } from 'primeng/metergroup';
import { KlnChartTokens } from '@klini-saude/ds';

zones: MeterItem[] = [
  { label: 'Normal',  value: 40, color: KlnChartTokens.status.success },
  { label: 'Atenção', value: 35, color: KlnChartTokens.status.warn    },
  { label: 'Alta',    value: 25, color: KlnChartTokens.status.danger  },
];
```

```html
<kln-meter-group [value]="zones" [max]="200" [indicatorValue]="128" indicatorUnit="mmHg" />
```

---

## Diretivas & Utilitários

Importadas diretamente de `@klini-saude/ds` (re-exports PrimeNG).

| Diretiva | Atributo | O que faz |
|---|---|---|
| KeyFilter | `pKeyFilter` | Filtra teclas (`num`, `alpha`, `alphanum`, `email`, `money`…) |
| AutoFocus | `pAutoFocus` | Foco automático ao montar |
| Ripple | `pRipple` | Efeito ripple no click |
| StyleClass | `pStyleClass` | Toggle de CSS class com animação |
| AnimateOnScroll | `pAnimateOnScroll` | Anima ao entrar no viewport |
| DialogService | service | Abre dialogs dinamicamente |

```html
<kln-input-text pKeyFilter="num" label="Telefone" />
<kln-input-text pAutoFocus [autofocus]="true" label="Busca" />
<kln-button label="Salvar" pRipple />
<kln-card pAnimateOnScroll enterClass="fadeinup">...</kln-card>
```

---

## Tokens CSS

```css
/* Cores primitivas */
--kln-color-teal-500     /* #259591 — cor principal */
--kln-space-4            /* 16px */
--kln-radius-lg          /* 8px */

/* Semânticos */
--kln-action-primary
--kln-text-primary
--kln-surface-page

/* Elevação */
--kln-elevation-sm
--kln-elevation-md
--kln-elevation-lg
--kln-focus-default
--kln-focus-error

/* Gráficos — Categorical (4 séries da marca) */
--kln-chart-cat-teal       /* #259591 */
--kln-chart-cat-sea        /* #6aa7ae */
--kln-chart-cat-orange     /* #cd7925 */
--kln-chart-cat-coral      /* #e05759 */

/* Sequential — Teal Scale (5 stops) */
--kln-chart-seq-wash → --kln-chart-seq-ink

/* Status semânticos */
--kln-chart-status-success
--kln-chart-status-info
--kln-chart-status-warn
--kln-chart-status-danger
--kln-chart-status-secondary
```

---

## Publicar nova versão

```bash
# 1. Bump de versão em projects/klini-ds/package.json
# 2. Build + lint — obrigatório
npm run build && npm run lint

# 3. Commit + tag → CI publica automaticamente
git add -A && git commit -m "chore(release): vX.Y.Z"
git tag -a vX.Y.Z -m "Release vX.Y.Z"
git push origin main --tags
git push klini-saude main --tags
```

O CI (`publish.yml`) dispara em `v*.*.*` e publica no GitHub Packages com `secrets.NPM_TOKEN`.
Se a versão já foi publicada, o CI passa sem erro.

---

## Versões

| Versão | Destaques |
|---|---|
| **2.0.0** ⚠️ BREAKING | Prefixo padronizado: `Klini*` → `Kln*` · tokens CSS `--klini-*` → `--kln-*` · 19 novos componentes (ToggleButton, IconField, InputOtp, ColorPicker, Editor, IftaLabel, ContextMenu, MegaMenu, TieredMenu, PanelMenu, ScrollTop, ConfirmPopup, BlockUI, PickList, TreeTable, Inplace, Galleria, ImageCompare, OverlayBadge) · 7 novos chart presets |
| **1.1.0** | Portal Templates: PortalHeader, PortalFooter, PortalShell, PortalLogin, ServiceTile |
| **1.0.0** | Cobertura completa PrimeNG v18 — alinhado com Figma v1.0 |
| **0.5.0** | `KlnChartData` · `KlnChartTokens` · `KlnChartPresets` (14 presets) · `[autoColors]` · `kln-meter-group` WithIndicator |
| **0.4.0** | 32 novos componentes: Checkbox, MultiSelect, AutoComplete, InputMask, Rating, SelectButton, Listbox, TreeSelect, CascadeSelect, FloatLabel, InputGroup, ButtonGroup, Toolbar, Panel, Fieldset, Splitter, ScrollPanel, Image, AvatarGroup, Messages, Popover, SpeedDial, ProgressSpinner, Menubar, TabMenu, Steps, SplitButton, Timeline, DataView, Carousel, Tree, OrderList, VirtualScroller |
| **0.3.0** | Seletores `kln-*` · Chart, Knob, MeterGroup, Slider, Select · paleta de gráficos |
| **0.2.0** | RadioGroup, Tabs, Menu, Table, Dialog, Toggle, Accordion, Avatar, Skeleton, ProgressBar, Textarea, Password, InputNumber, Paginator, ConfirmDialog, FileUpload, Breadcrumb, EmptyState |
| **0.1.0** | Versão inicial — Button, Tag, Badge, Chip, Card, Toast, Stepper, Drawer, InputText, Calendar, Message, Divider, StatusPill, KpiCard · Tema `KlnPrime` · Tokens de design |

---

## Desenvolvimento

```bash
npm install
npm run build        # build da biblioteca
npm run lint         # checar qualidade do código
```

- **Figma:** [Klini Saúde — Design System](https://www.figma.com/design/gOsRuHIPm6Xo5zGEWDmnRW)
- **GitHub Packages:** [klini-saude/packages](https://github.com/orgs/klini-saude/packages)
- **PrimeNG docs:** [primeng.org](https://primeng.org)
