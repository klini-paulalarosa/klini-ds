# Klini DS — Arquitetura de Design

> **Versões do DS**
> | Pacote | Stack | Status |
> |---|---|---|
> | `@klini-saude/ds` v2.x | Angular 18 + PrimeNG 18 | Legado — portais existentes |
> | `@klini-saude/ds-react` v1.x | React 18 + Shadcn/UI + Tailwind | Atual — novos projetos |

Este documento descreve a arquitetura do Klini Design System, cobrindo a filosofia de design, hierarquia de tokens, classificação Atomic Design dos componentes e guias de extensão.

---

## Filosofia de Design

### Atomic Design

O Klini DS organiza seus componentes seguindo a metodologia **Atomic Design** de Brad Frost, adaptada para o contexto de saúde corporativa. Os componentes são classificados em quatro níveis:

| Nível | Descrição |
|---|---|
| **Átomos** | Building blocks indivisíveis — botões, badges, inputs, ícones |
| **Moléculas** | Composições simples de átomos com uma função coesa — input groups, toolbars, float labels |
| **Organismos** | Seções complexas e autônomas da UI — tabelas, dialogs, cards de KPI, gráficos |
| **Templates** | Layouts de página completos — portal shell, tela de login, estruturas de portal |

Cada nível depende apenas dos níveis anteriores. Átomos não importam moléculas. Organismos podem compor átomos e moléculas. Templates orquestram organismos para montar telas completas.

### Fluent Design System — Influência na Elevação

O sistema de **elevação** do Klini DS é inspirado no [Fluent Design System](https://fluent2.microsoft.design/) da Microsoft. A elevação não é apenas sombra — é uma linguagem semântica que comunica hierarquia e interatividade:

- Superfícies em repouso usam `--kln-elevation-sm` (sombra sutil)
- Componentes interativos ao hover elevam para `--kln-elevation-md`
- Overlays (dialog, drawer, popover) usam `--kln-elevation-lg` ou `--kln-elevation-xl`
- O token `--kln-focus-default` substitui o outline padrão do browser com um anel de foco visível e acessível
- A transição de elevação usa `--kln-easing-inout` (easing suave) para comunicar fisicalidade

```scss
// Exemplo da aplicação de elevação no kln-card
.klini-card {
  box-shadow: var(--kln-elevation-sm);
  transition: box-shadow 150ms var(--kln-easing-inout),
              transform   150ms var(--kln-easing-inout);
}
.klini-card:hover {
  box-shadow: var(--kln-elevation-md);
  transform: var(--kln-interaction-hover-transform);
}
```

---

## Hierarquia de Tokens

Os tokens seguem uma hierarquia de cinco camadas. Cada camada referencia a anterior — nunca valores hardcoded saltam camadas.

```
┌─────────────────────────────────────────────────────────────────┐
│                        _primitive.scss                          │
│           Valores brutos: #259591, 16px, 400ms                 │
├─────────────────────────────────────────────────────────────────┤
│                         _semantic.scss                          │
│           Papéis de design: --kln-text-primary,                │
│           --kln-surface-page, --kln-action-primary             │
├─────────────────────────────────────────────────────────────────┤
│                          _status.scss                           │
│           Status de domínio Klini: autorizada, negado,         │
│           em-processo, parcialmente, inativa                   │
├─────────────────────────────────────────────────────────────────┤
│                        _elevation.scss                          │
│           Camadas de profundidade: sm, md, lg, xl              │
│           Fluent-inspired — sombras + foco + easing            │
├─────────────────────────────────────────────────────────────────┤
│                          _scale.scss                            │
│           Espaçamento, tipografia, z-index, breakpoints        │
└─────────────────────────────────────────────────────────────────┘
         +
┌─────────────────────────────────────────────────────────────────┐
│                      _chart-palette.scss                        │
│    Paleta específica para Chart.js (categorical + sequential   │
│    + status semânticos) — tokens de cor para canvas            │
└─────────────────────────────────────────────────────────────────┘
```

### Descrição de cada arquivo SCSS

#### `_primitive.scss`
Contém todos os valores brutos extraídos do Figma (coleção "01 · Primitive"). Nunca deve ser referenciado diretamente por componentes — apenas por `_semantic.scss`.

- Paleta Teal: `--kln-color-teal-50` … `--kln-color-teal-900` (cor primária da marca, #259591 = PANTONE 2461C)
- Paleta Sea: `--kln-color-sea-*` (complementar, #6AA7AE = PANTONE 549C)
- Paleta Orange: `--kln-color-orange-*` (acento quente, #CD7925 = PANTONE 7565C)
- Paleta Coral: `--kln-color-coral-*` (danger/negado, #E05759 = PANTONE 7625C)
- Paleta Ink: escala de cinzas neutros para texto, bordas e superfícies
- Branco puro: `--kln-color-white`

#### `_semantic.scss`
Mapeia os primitivos para papéis de design (coleção "02 · Semantic", modo "Light"). Estes são os tokens que componentes devem consumir.

- **Surface**: `--kln-surface-page`, `--kln-surface-raised`, `--kln-surface-sunken`, `--kln-surface-inverse`
- **Text**: `--kln-text-primary`, `--kln-text-secondary`, `--kln-text-muted`, `--kln-text-disabled`, `--kln-text-brand`
- **Border**: `--kln-border-default`, `--kln-border-strong`, `--kln-border-brand`
- **Action**: `--kln-action-primary`, `--kln-action-primary-hover`, `--kln-action-primary-active`
- **Feedback**: `--kln-feedback-success-*`, `--kln-feedback-danger-*`, `--kln-feedback-warn-*`, `--kln-feedback-info-*`
- **Field**: tokens específicos para campos de formulário (background, border, placeholder)

#### `_status.scss`
Tokens de domínio exclusivos do Klini Saúde — mapeiam os status de guias e autorizações médicas. Usados pelo `kln-status-pill`.

| Token | Status | Semântica |
|---|---|---|
| `--kln-status-autorizada-bg/fg` | Autorizada | Verde — aprovado |
| `--kln-status-negado-bg/fg` | Negado | Coral — recusado |
| `--kln-status-em-processo-bg/fg` | Em Auditoria | Neutro — em andamento |
| `--kln-status-parcialmente-bg/fg` | Parcial | Azul info — parcialmente aprovado |
| `--kln-status-inativa-bg/fg` | Inativa | Laranja warn — desativado |

#### `_elevation.scss`
Sistema de elevação inspirado no Fluent Design, com quatro níveis de sombra + tokens de foco e easing.

- `--kln-elevation-sm`: cards e superfícies em repouso
- `--kln-elevation-md`: estado de hover em elementos interativos
- `--kln-elevation-lg`: overlays leves (popover, tooltip)
- `--kln-elevation-xl`: modais e dialogs
- `--kln-focus-default`: anel de foco acessível (substituição do outline nativo)
- `--kln-focus-error`: anel de foco em estado de erro
- `--kln-easing-inout`: curva de animação para transições de elevação
- `--kln-interaction-hover-transform`: micro-animação de lift ao hover

#### `_scale.scss`
Escala de tamanhos, espaçamento, tipografia, z-index e breakpoints responsivos.

- Espaçamento: `--kln-space-1` (4px) … `--kln-space-12` (48px)
- Radius: `--kln-radius-sm`, `--kln-radius-md`, `--kln-radius-lg`, `--kln-radius-xl`
- Tipografia: `--kln-font-size-body-sm/md/lg`, `--kln-font-size-h1` … `--kln-font-size-h6`
- Ícones: `--kln-size-icon-sm/md/lg`
- Z-index: `--kln-z-dropdown`, `--kln-z-overlay`, `--kln-z-modal`, `--kln-z-toast`
- Breakpoints: `--kln-bp-sm` (576px), `--kln-bp-md` (768px), `--kln-bp-lg` (992px), `--kln-bp-xl` (1200px)

#### `_chart-palette.scss`
Tokens dedicados ao sistema de gráficos (Chart.js renderiza em `<canvas>` — CSS vars não chegam automaticamente; `KlnChartTokens` resolve esses valores em runtime).

- Categorical (4 séries da marca): `--kln-chart-cat-teal`, `--kln-chart-cat-sea`, `--kln-chart-cat-orange`, `--kln-chart-cat-coral`
- Sequential Teal (5 stops para heatmaps): `--kln-chart-seq-wash` → `--kln-chart-seq-ink`
- Status semânticos: `--kln-chart-status-success/info/warn/danger/secondary`

---

## Classificação Atomic Design — Todos os 94 Componentes

### Átomos

Building blocks básicos e indivisíveis. Não compõem outros componentes do DS internamente.

| Componente | Seletor | Base PrimeNG |
|---|---|---|
| Button | `kln-button` | `p-button` |
| SplitButton | `kln-split-button` | `p-splitbutton` |
| Tag | `kln-tag` | `p-tag` |
| Badge | `kln-badge` | `p-badge` |
| Chip | `kln-chip` | `p-chip` |
| Divider | `kln-divider` | `p-divider` |
| Skeleton | `kln-skeleton` | `p-skeleton` |
| ProgressBar | `kln-progress-bar` | `p-progressbar` |
| ProgressSpinner | `kln-progress-spinner` | `p-progressspinner` |
| Knob | `kln-knob` | `p-knob` |
| Slider | `kln-slider` | `p-slider` |
| Rating | `kln-rating` | `p-rating` |
| Image | `kln-image` | `p-image` |
| Avatar | `kln-avatar` | `p-avatar` |
| ScrollTop | `kln-scroll-top` | `p-scrolltop` |
| BlockUI | `kln-block-ui` | `p-blockui` |
| InputText | `kln-input-text` | `p-inputtext` |
| InputNumber | `kln-input-number` | `p-inputnumber` |
| InputMask | `kln-input-mask` | `p-inputmask` |
| InputOTP | `kln-input-otp` | `p-inputotp` |
| Textarea | `kln-textarea` | `p-textarea` |
| Password | `kln-password` | `p-password` |
| ColorPicker | `kln-color-picker` | `p-colorpicker` |
| Checkbox | `kln-checkbox` | `p-checkbox` |
| Toggle | `kln-toggle` | `p-toggleswitch` |
| StatusPill | `kln-status-pill` | `p-tag` |
| OverlayBadge | `kln-overlay-badge` | `p-overlaybadge` |

### Moléculas

Composições de átomos com uma função coesa e bem definida.

| Componente | Seletor | Base PrimeNG | Composição |
|---|---|---|---|
| FloatLabel | `kln-float-label` | `p-floatlabel` | Envolve qualquer átomo de input |
| IftaLabel | `kln-ifta-label` | `p-iftlabel` | Variante "in-field top aligned" |
| InputGroup | `kln-input-group` | `p-inputgroup` | Input + prefixo/sufixo |
| ButtonGroup | `kln-button-group` | `p-buttongroup` | Grupo de kln-button |
| SelectButton | `kln-select-button` | `p-selectbutton` | Botões toggle exclusivos |
| AvatarGroup | `kln-avatar-group` | `p-avatargroup` | Grupo de kln-avatar |
| Message | `kln-message` | `p-message` | Ícone + texto de feedback |
| Messages | `kln-messages` | `p-messages` | Lista de kln-message |
| Breadcrumb | `kln-breadcrumb` | `p-breadcrumb` | Cadeia de links de navegação |
| Steps | `kln-steps` | `p-steps` | Indicador de progresso linear |
| TabMenu | `kln-tab-menu` | `p-tabmenu` | Menu em abas horizontais |
| Toolbar | `kln-toolbar` | `p-toolbar` | Barra com slots start/center/end |
| SpeedDial | `kln-speed-dial` | `p-speeddial` | FAB com ações radiais |
| FileUpload | `kln-file-upload` | `p-fileupload` | Dropzone + lista de arquivos |
| Paginator | `kln-paginator` | `p-paginator` | Controles de paginação |
| Select | `kln-select` | `p-select` | Dropdown com CVA |
| MultiSelect | `kln-multiselect` | `p-multiselect` | Multi-seleção com CVA |
| CascadeSelect | `kln-cascade-select` | `p-cascadeselect` | Seleção em cascata |
| TreeSelect | `kln-tree-select` | `p-treeselect` | Seleção em árvore |
| Listbox | `kln-listbox` | `p-listbox` | Lista clicável com CVA |
| AutoComplete | `kln-autocomplete` | `p-autocomplete` | Input com sugestões |
| Calendar | `kln-calendar` | `p-datepicker` | Seletor de data/hora |
| RadioGroup | `kln-radio-group` | `p-radiobutton` | Grupo de radio buttons |
| IconField | `kln-icon-field` | `p-iconfield` | Input com ícone integrado |
| ToggleButton | `kln-toggle-button` | `p-togglebutton` | Botão on/off com labels |

### Organismos

Componentes complexos e autônomos que compõem átomos e moléculas para formar seções completas da UI.

| Componente | Seletor | Base PrimeNG | Composição principal |
|---|---|---|---|
| Card | `kln-card` | `p-card` | Slots de header, conteúdo, footer |
| KpiCard | `kln-kpi-card` | `p-card` | Ícone, Valor, Tendência, Badge |
| Table | `kln-table` | `p-table` | Toolbar, Header, Rows, Paginator |
| DataView | `kln-dataview` | `p-dataview` | Header, Items (list/grid), Paginator |
| Tree | `kln-tree` | `p-tree` | Nós recursivos com slots |
| TreeTable | `kln-tree-table` | `p-treetable` | Tabela com hierarquia de nós |
| Dialog | `kln-dialog` | `p-dialog` | Overlay, Header, Content, Footer |
| ConfirmDialog | `kln-confirm-dialog` | `p-confirmdialog` | Dialog + ConfirmService |
| ConfirmPopup | `kln-confirm-popup` | `p-confirmpopup` | Popup inline de confirmação |
| Drawer | `kln-drawer` | `p-drawer` | Painel lateral deslizante |
| Accordion | `kln-accordion` | `p-accordion` | Painéis colapsáveis |
| Tabs | `kln-tabs` | `p-tabs` | Abas com painéis de conteúdo |
| Panel | `kln-panel` | `p-panel` | Painel com header colapsável |
| Fieldset | `kln-fieldset` | `p-fieldset` | Agrupamento de formulário |
| Splitter | `kln-splitter` | `p-splitter` | Painéis redimensionáveis |
| ScrollPanel | `kln-scroll-panel` | `p-scrollpanel` | Área com scroll customizado |
| Menubar | `kln-menubar` | `p-menubar` | Barra de menu horizontal |
| TieredMenu | `kln-tiered-menu` | `p-tieredmenu` | Menu com submenus em cascata |
| MegaMenu | `kln-mega-menu` | `p-megamenu` | Menu com colunas de itens |
| ContextMenu | `kln-context-menu` | `p-contextmenu` | Menu de contexto via clique direito |
| PanelMenu | `kln-panel-menu` | `p-panelmenu` | Menu accordion vertical |
| Toast | `kln-toast` | `p-toast` | Notificações flutuantes via KlnToastService |
| Popover | `kln-popover` | `p-popover` | Overlay posicionado com conteúdo livre |
| Galleria | `kln-galleria` | `p-galleria` | Carrossel de imagens com thumbnails |
| Chart | `kln-chart` | `p-chart` | Canvas, Legend, KlnChartTokens, KlnChartPresets |
| Carousel | `kln-carousel` | `p-carousel` | Itens deslizantes com navegação |
| Timeline | `kln-timeline` | `p-timeline` | Linha do tempo de eventos |
| OrderList | `kln-order-list` | `p-orderlist` | Lista ordenável com drag & drop |
| PickList | `kln-pick-list` | `p-picklist` | Transferência entre listas |
| VirtualScroller | `kln-virtual-scroller` | `p-virtualscroller` | Lista virtualizada para grandes volumes |
| ImageCompare | `kln-image-compare` | `p-imagecompare` | Comparação de imagens com slider |
| Editor | `kln-editor` | `p-editor` | Editor rich text (Quill) |
| Inplace | `kln-inplace` | `p-inplace` | Edição inline em contexto |
| Stepper | `kln-stepper` | `p-stepper` | Wizard de passos com estados |
| MeterGroup | `kln-meter-group` | `p-metergroup` | Barras de progresso múltiplas |
| EmptyState | `kln-empty-state` | — | Ícone + título + descrição |

### Templates

Layouts de página completos para os Portais Klini. Orquestram organismos e moléculas para montar telas inteiras.

| Componente | Seletor | Composição |
|---|---|---|
| PortalShell | `kln-portal-shell` | KlnPortalHeader + `<ng-content>` + KlnPortalFooter |
| PortalHeader | `kln-portal-header` | `p-toolbar` + avatar + saudação + barra gradiente |
| PortalFooter | `kln-portal-footer` | `p-toolbar` + logo Klini Saúde + número ANS |
| PortalLogin | `kln-portal-login` | `p-card` + InputMask + Password + Buttons |
| ServiceTile | `kln-service-tile` | `p-button` + ícone + label |

---

## Composição de Componentes-Chave

### `kln-portal-shell`

O template principal dos portais Klini. Encapsula a estrutura full-page com um layout flexbox vertical.

```
┌─────────────────────────────────────────────────────────────────┐
│                    kln-portal-header                            │
│  [barra gradiente teal] ─── "Olá, NOME" ─────── [avatar]       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                        <ng-content />                           │
│              (conteúdo da página via projeção)                  │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                    kln-portal-footer                            │
│  klini saúde ─────────────────────── ANS - nº 42.202-9         │
└─────────────────────────────────────────────────────────────────┘
```

Inputs: `userName` (required), `planLabel`, `ansNumber`
Outputs: `avatarClick`

### `kln-kpi-card`

Card de indicador de performance composto internamente por quatro partes visuais:

```
┌─────────────────────────────────────────┐
│ [label]                     [icon]      │  ← Header: label + ícone PrimeIcons
├─────────────────────────────────────────┤
│ [value]    [trend↑ trendLabel]          │  ← Body: valor + tendência
├─────────────────────────────────────────┤
│ [description]                           │  ← Footer: texto auxiliar ou ng-content
└─────────────────────────────────────────┘
```

Inputs: `label` (required), `value` (required), `icon`, `trend` (up/down/neutral), `trendLabel`, `description`

A tendência usa tokens semânticos de feedback:
- `up` → `--kln-feedback-success-fg` (verde)
- `down` → `--kln-feedback-danger-fg` (coral)
- `neutral` → `--kln-text-muted`

### `kln-table`

Organismo de tabela com suporte a colunas tipadas, ordenação, paginação e estado vazio.

```
┌─────────────────────────────────────────┐
│ [th col.header] [th ↕] [th col.header]  │  ← Header (gerado por @for)
├─────────────────────────────────────────┤
│ [td] [td] [td]                          │  ← Rows (gerado por @for)
│ [td] [td] [td]                          │
├─────────────────────────────────────────┤
│ "Nenhum resultado encontrado."          │  ← Empty message (colspan total)
├─────────────────────────────────────────┤
│ < 1 2 3 > [10 ▼]                        │  ← Paginator (se paginator=true)
└─────────────────────────────────────────┘
```

Inputs: `value[]`, `columns[]` (KlnTableColumn), `loading`, `paginator`, `pageSize`, `rowsPerPageOptions`, `emptyMessage`

### `kln-chart`

Sistema de três camadas que torna Chart.js 100% integrado ao DS sem necessidade de conhecer a API do Chart.js:

```
┌────────────────────────────────────────────────────────┐
│                   kln-chart                            │
│                                                        │
│  ┌──────────────────────────────────────────────────┐  │
│  │             KlnChartPresets                      │  │
│  │   (21 presets: grid, eixos, legenda, tooltip)    │  │
│  └──────────────────────────────────────────────────┘  │
│                                                        │
│  ┌──────────────────────────────────────────────────┐  │
│  │             KlnChartTokens                       │  │
│  │   (resolve CSS vars para canvas em runtime)      │  │
│  └──────────────────────────────────────────────────┘  │
│                                                        │
│  ┌──────────────────────────────────────────────────┐  │
│  │              p-chart (Chart.js)                  │  │
│  │                 <canvas>                         │  │
│  └──────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────┘
```

---

## Guia de Extensão

### Regras absolutas

1. **Zero componentes custom sem PrimeNG**: todo componente deve ter um `p-*` do PrimeNG como base. Componentes Angular puros sem PrimeNG não são permitidos.
2. **Nunca referenciar primitivos diretamente**: componentes consomem apenas tokens semânticos (`--kln-text-*`, `--kln-surface-*`, `--kln-action-*`). Nunca `--kln-color-teal-500` diretamente em um componente — isso viola o contrato de theming.
3. **Standalone + OnPush obrigatórios**: todos os componentes com `standalone: true` e `ChangeDetectionStrategy.OnPush`.
4. **Angular 17+ control flow**: usar `@if`/`@for`/`@switch`, nunca `*ngIf`/`*ngFor`.

### Adicionando um novo átomo

```typescript
// 1. Criar o arquivo em projects/klini-ds/src/lib/components/<nome>/<nome>.component.ts
/**
 * Descrição do componente em PT-BR.
 *
 * @atomicLevel atom
 * @selector kln-<nome>
 * @primeng p-<nome>
 * @example
 * <kln-<nome> [prop]="valor" />
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { <PrimengModule> } from 'primeng/<modulo>';

@Component({
  selector: 'kln-<nome>',
  standalone: true,
  imports: [<PrimengModule>],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<p-<nome> [input]="input" />`,
})
export class Kln<Nome>Component {
  @Input() input = '';
}

// 2. Exportar em src/public-api.ts
// 3. Adicionar em COMPONENTS[] em klini-ds.module.ts
```

### Adicionando uma nova molécula

Moléculas podem importar e usar componentes-átomo do DS:

```typescript
/**
 * Descrição do componente em PT-BR.
 *
 * @atomicLevel molecule
 * @selector kln-<nome>
 * @primeng p-<base>
 * @composedOf KlnButtonComponent, KlnIconComponent
 * @example
 * <kln-<nome>>
 *   <kln-button label="Ação" />
 * </kln-<nome>>
 */
import { KlnButtonComponent } from '../button/button.component';
```

### Adicionando tokens de status

Se houver novos status de domínio (além dos 5 existentes), adicionar em `_status.scss` seguindo o padrão:

```scss
// Em _status.scss
--kln-status-<novo-status>-bg: var(--kln-color-<primitivo>-wash);
--kln-status-<novo-status>-fg: var(--kln-color-<primitivo>-700);
```

E mapear em `status-pill.component.ts` no `STATUS_MAP`.

### Adicionando presets de gráfico

Presets ficam em `components/chart/chart.presets.ts`. Cada preset é um objeto de opções Chart.js que usa `KlnChartTokens` para cores. Ver presets existentes como referência.

---

## Sistema de Elevação — Referência Completa

| Token | Uso semântico | Componentes que usam |
|---|---|---|
| `--kln-elevation-sm` | Superfícies em repouso | `kln-card`, `kln-kpi-card` |
| `--kln-elevation-md` | Estado hover de elementos interativos | `kln-card:hover` |
| `--kln-elevation-lg` | Overlays leves | `kln-popover`, `kln-portal-login` |
| `--kln-elevation-xl` | Modais e dialogs | `kln-dialog`, `kln-drawer` |
| `--kln-focus-default` | Anel de foco acessível | todos os inputs, buttons |
| `--kln-focus-error` | Anel de foco em erro | inputs com `errorMessage` |
| `--kln-easing-inout` | Curva de transição | transições de elevation |
| `--kln-interaction-hover-transform` | Micro-lift ao hover | `kln-card[kliniInteractive]` |

A elevação é a linguagem que comunica ao usuário qual camada ele está interagindo — fundamental para acessibilidade cognitiva em interfaces de saúde complexas.
