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
| Chart | `kln-chart` | `type`, `data`, `options`, `width`, `height` |
| Knob (Progress Ring) | `kln-knob` | `min`, `max`, `size`, `showValue`, `valueColor` |
| Meter Group | `kln-meter-group` | `value[]` (MeterItem), `max`, `orientation` |
| Progress Bar | `kln-progress-bar` | `value`, `mode`, `showValue`, `unit` |

---

## kln-chart — Tipos de gráfico

O `kln-chart` suporta todos os tipos Chart.js via input `[type]`:

```html
<kln-chart type="bar"       [data]="data" />
<kln-chart type="line"      [data]="data" />
<kln-chart type="pie"       [data]="data" />
<kln-chart type="doughnut"  [data]="data" />
<kln-chart type="radar"     [data]="data" />
<kln-chart type="scatter"   [data]="data" />
<kln-chart type="polarArea" [data]="data" />
<kln-chart type="bubble"    [data]="data" />
```

Exemplo com paleta de cores do DS:

```typescript
chartData = {
  labels: ['Autorizado', 'Negado', 'Em processo'],
  datasets: [{
    data: [60, 15, 25],
    backgroundColor: [
      'var(--kln-chart-status-autorizada)',
      'var(--kln-chart-status-negada)',
      'var(--kln-chart-status-em-processo)',
    ],
  }],
};
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

/* Paleta para gráficos */
--kln-chart-cat-1          /* teal principal */
--kln-chart-cat-2          /* amber */
--kln-chart-cat-3          /* coral */
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
