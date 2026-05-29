# Changelog — @klini-saude/ds

Todas as mudanças relevantes do pacote são documentadas aqui.
Formato baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/).

---

## [2.0.0] — 2026-05-29 ⚠️ BREAKING

### ⚠️ Migração obrigatória

Esta versão padroniza o prefixo de todos os identificadores para `kln`.
**Qualquer import com `Klini` precisa ser atualizado.**

#### TypeScript — componentes e serviços

```ts
// ANTES (v1.x)
import { KliniSelectComponent }   from '@klini-saude/ds';
import { KliniDsModule }          from '@klini-saude/ds';
import { KliniPrime }             from '@klini-saude/ds';
import { KliniChartData }         from '@klini-saude/ds';
import { KliniToastService }      from '@klini-saude/ds';

// DEPOIS (v2.0)
import { KlnSelectComponent }     from '@klini-saude/ds';
import { KlnDsModule }            from '@klini-saude/ds';
import { KlnPrime }               from '@klini-saude/ds';
import { KlnChartData }           from '@klini-saude/ds';
import { KlnToastService }        from '@klini-saude/ds';
```

#### CSS / SCSS — custom properties

```scss
// ANTES (v1.x)
color: var(--klini-color-teal-500);
background: var(--klini-surface-raised);
border-radius: var(--klini-radius-lg);

// DEPOIS (v2.0)
color: var(--kln-color-teal-500);
background: var(--kln-surface-raised);
border-radius: var(--kln-radius-lg);
```

#### Regra de migração completa

| Antes | Depois |
|-------|--------|
| `Klini*Component` | `Kln*Component` |
| `KliniDsModule` | `KlnDsModule` |
| `KliniPrime` | `KlnPrime` |
| `KliniChartData` | `KlnChartData` |
| `KliniChartTokens` | `KlnChartTokens` |
| `KliniChartPresets` | `KlnChartPresets` |
| `KliniChartPreset` (type) | `KlnChartPreset` |
| `Klini*Severity` (types) | `Kln*Severity` |
| `--klini-*` | `--kln-*` |

#### Script de migração automática (bash)

```bash
# Roda na raiz do projeto consumidor — substitui todos os imports e tokens
find src/ -name "*.ts"   | xargs sed -i "s/Klini\([A-Z]\)/Kln\1/g"
find src/ -name "*.scss" | xargs sed -i "s/--klini-/--kln-/g"
find src/ -name "*.css"  | xargs sed -i "s/--klini-/--kln-/g"
find src/ -name "*.html" | xargs sed -i "s/--klini-/--kln-/g"
```

> Os seletores HTML (`kln-button`, `kln-select`...) **não mudam**.

### Added
- 19 novos componentes: `KlnToggleButtonComponent`, `KlnIconFieldComponent`, `KlnInputOtpComponent`, `KlnColorPickerComponent`, `KlnEditorComponent`, `KlnIftaLabelComponent`, `KlnContextMenuComponent`, `KlnMegaMenuComponent`, `KlnTieredMenuComponent`, `KlnPanelMenuComponent`, `KlnScrollTopComponent`, `KlnConfirmPopupComponent`, `KlnBlockUiComponent`, `KlnPickListComponent`, `KlnTreeTableComponent`, `KlnInplaceComponent`, `KlnGalleriaComponent`, `KlnImageCompareComponent`, `KlnOverlayBadgeComponent`
- 7 novos chart presets: `bar-grouped`, `bar-stacked-100`, `bar-negative`, `line-stepped`, `line-dual-axis`, `sparkline`, `time-series-brush`

---

## [1.0.0] — 2026-05-19

### Added
- Cobertura completa PrimeNG v18: 88 component sets, 523+ variants
- Versão alinhada com Figma v1.0 (Maio 2026)

---

## [0.5.0] — 2026-05-19

### Added
- Sistema de charts completo: `KliniChartData`, `KliniChartPresets` (14 presets), `KliniChartTokens`
- Diretivas PrimeNG re-exportadas: `KeyFilter`, `AutoFocus`, `Ripple`, `StyleClass`, `AnimateOnScroll`, `DialogService`

---

## [0.4.0] — 2026-05

### Added
- 32 novos componentes: Checkbox, FloatLabel, MultiSelect, AutoComplete, InputMask, Rating, SelectButton, Listbox, TreeSelect, CascadeSelect, InputGroup, ButtonGroup, Toolbar, Panel, Fieldset, Splitter, ScrollPanel, Image, AvatarGroup, Messages, Popover, SpeedDial, ProgressSpinner, Menubar, TabMenu, Steps, SplitButton, Timeline, DataView, Carousel, Tree, OrderList, VirtualScroller

---

## [0.3.0] — 2026-05

### Added
- Chart, Knob, MeterGroup, Slider, Select
- Paleta de gráficos com tokens `--kln-chart-*`

---

## [0.2.0] — 2026-05

### Added
- RadioGroup, Tabs, Menu, Table, Dialog, Toggle, Accordion, Avatar, Skeleton, ProgressBar, Textarea, Password, InputNumber, Paginator, ConfirmDialog, FileUpload, Breadcrumb, EmptyState

---

## [0.1.0] — 2026-05

### Added
- Primeira versão: Button, Tag, Badge, Chip, Card, Toast, Stepper, Drawer, InputText, Calendar, Message, Divider, StatusPill, KpiCard
- Tema `KliniPrime` (preset Aura)
- Tokens de design: cores, espaçamento, tipografia, elevação, status
