# CLAUDE.md — Klini DS

Índice do projeto para o agente. Carregue seções específicas via Read quando precisar de detalhes.

## O que é este projeto

Biblioteca Angular de componentes para o **Klini App** (saúde).
Wrappers 100% PrimeNG v18 sobre o tema `KlnPrime` (preset Aura).
Pacote npm: `@klini-saude/ds` · Versão atual: **2.0.0**

---

## Regras absolutas

1. **Zero componentes custom** — todo componente deve ter um `p-*` do PrimeNG como base. Sem Angular puro sem PrimeNG.
2. **Sempre rodar build + lint antes de commitar** — `npm run build && npm run lint`
3. **Sempre push nos dois remotes** — `git push origin main && git push klini-saude main`
4. **Tags trigam CI/publish** — só criar tag depois que build/lint passam localmente
5. **Angular 17+ control flow** — usar `@if`/`@for`, nunca `*ngIf`/`*ngFor`
6. **ESLint `any`** — sempre `// eslint-disable-next-line @typescript-eslint/no-explicit-any` na linha anterior
7. **`no-inferrable-types`** — não colocar tipo explícito em literais: `@Input() label = ''` não `@Input() label: string = ''`
8. **Standalone components** — todos com `standalone: true` + `ChangeDetectionStrategy.OnPush`

---

## Git

```
origin      → github.com/klini-paulalarosa/klini-ds      (pessoal — FALLBACK principal)
klini-saude → github.com/klini-saude/design-system        (org oficial)
```

> **Fallback**: se `klini-saude/design-system` estiver inacessível, usar `klini-paulalarosa/klini-ds` — os dois são espelhos exatos. Todo push vai para os dois remotes.

Fluxo padrão:
```bash
npm run build && npm run lint          # obrigatório antes de commitar
git add -A && git commit -m "..."
git push origin main && git push klini-saude main
# para release:
git tag -a vX.Y.Z -m "..." && git push origin vX.Y.Z && git push klini-saude vX.Y.Z
```

CI (`publish.yml`) dispara em `v*.*.*` e publica no GitHub Packages com `secrets.NPM_TOKEN`.
Se a versão já foi publicada, o CI passa sem erro (tratado no workflow).

---

## Estrutura de arquivos

```
projects/klini-ds/src/
├── lib/
│   ├── components/          # 89 componentes — um dir por componente
│   │   └── <nome>/<nome>.component.ts
│   ├── directives/index.ts  # re-exports: KeyFilter, AutoFocus, Ripple, StyleClass, AnimateOnScroll, DialogService
│   ├── theme/klini-prime.ts # preset PrimeNG (definePreset sobre Aura)
│   └── tokens/              # SCSS tokens
│       ├── _primitive.scss  # cores raw
│       ├── _semantic.scss   # tokens semânticos (text, surface, field, action…)
│       ├── _scale.scss      # tamanhos, z-index, breakpoints
│       ├── _elevation.scss  # sombras
│       ├── _status.scss     # status pills
│       └── _chart-palette.scss  # paleta de gráficos
├── public-api.ts            # tudo que é exportado pelo pacote
└── klini-ds.module.ts       # NgModule de conveniência (projetos não-standalone)
```

---

## Padrão de novo componente

```typescript
// projects/klini-ds/src/lib/components/<nome>/<nome>.component.ts
import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import { PrimeNgModule } from 'primeng/<modulo>';

@Component({
  selector:        'kln-<nome>',
  standalone:      true,
  imports:         [PrimeNgModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<p-<nome> [input]="input" (output)="outputChange.emit($event)" />`,
})
export class Kln<Nome>Component {
  @Input() input = '';
  @Output() outputChange = new EventEmitter<string>();
}
```

Depois de criar o arquivo:
1. Exportar em `src/public-api.ts`
2. Adicionar em `COMPONENTS[]` em `klini-ds.module.ts`

---

## Chart system

Três camadas — carregue os arquivos quando precisar de detalhes:

| Camada | Arquivo | Para que serve |
|--------|---------|----------------|
| `KlnChartData` | `components/chart/chart.data.ts` | Fábricas de datasets (sem conhecer Chart.js) |
| `KlnChartPresets` | `components/chart/chart.presets.ts` | 21 presets com tokens DS |
| `KlnChartTokens` | `components/chart/chart.tokens.ts` | Resolve CSS vars para canvas |

Presets disponíveis: `bar`, `bar-horizontal`, `bar-stacked`, `bar-stacked-horizontal`, `bar-grouped`, `bar-stacked-100`, `bar-negative`, `line`, `line-stepped`, `line-dual-axis`, `area`, `sparkline`, `pie`, `doughnut`, `polar-area`, `radar`, `scatter`, `bubble`, `mixed`, `time-series`, `time-series-brush`

---

## Tipografia

| Fonte | Papel | Pesos | Uso |
|-------|-------|-------|-----|
| **Objective** | Primária | ExtraBold 800 · SemiBold 600 · Regular 400 | TODA a interface: headings, labels, botões, overlines, display |
| **Merriweather** | Secundária | Regular 400 | Apenas editorial/marketing — NÃO em UI de produto |

Fonte: Guia de Marca Klini (PDF) + Figma `gOsRuHIPm6Xo5zGEWDmnRW`.
Nota: o Figma Cover mostra o label "Plus Jakarta Sans" na specimen section, mas o guia de marca e a Paula confirmam que as fontes são Objective + Merriweather apenas.

---

## Paleta de cores principal

```
Teal    #259591  --kln-color-teal-500    (primary, brand)     PANTONE 2461C
Sea     #6AA7AE  --kln-color-sea-500     (complementar)       PANTONE 549C
Orange  #CD7925  --kln-color-orange-500  (acento quente)      PANTONE 7565C
Coral   #E05759  --kln-color-coral-500   (danger/negado)      PANTONE 7625C
```

Tokens chart: `--kln-chart-cat-teal/sea/orange/coral` · Escala sequential: `--kln-chart-seq-wash` → `--kln-chart-seq-ink`

---

## Versões e histórico rápido

| Versão | O que entrou |
|--------|-------------|
| v0.1 | Button, Tag, Badge, Chip, Card, Toast, Stepper, Drawer, InputText, Calendar, Message, Divider, StatusPill, KpiCard |
| v0.2 | RadioGroup, Tabs, Menu, Table, Dialog, Toggle, Accordion, Avatar, Skeleton, ProgressBar, Textarea, Password, InputNumber, Paginator, ConfirmDialog, FileUpload, Breadcrumb, EmptyState |
| v0.3 | Chart, Knob, MeterGroup, Slider, Select + sistema de paleta |
| v0.4 | Checkbox, FloatLabel, MultiSelect, AutoComplete, InputMask, Rating, SelectButton, Listbox, TreeSelect, CascadeSelect, InputGroup, ButtonGroup, Toolbar, Panel, Fieldset, Splitter, ScrollPanel, Image, AvatarGroup, Messages, Popover, SpeedDial, ProgressSpinner, Menubar, TabMenu, Steps, SplitButton, Timeline, DataView, Carousel, Tree, OrderList, VirtualScroller |
| v0.5 | Directives re-exports (KeyFilter, AutoFocus, Ripple, StyleClass, AnimateOnScroll, DialogService) + KlnChartData/Presets/Tokens |
| v1.0 | ToggleButton, IconField, InputOtp, ColorPicker, Editor, IftaLabel, ContextMenu, MegaMenu, TieredMenu, PanelMenu, ScrollTop, ConfirmPopup, BlockUI, PickList, TreeTable, Inplace, Galleria, ImageCompare, OverlayBadge + 7 chart presets avançados |
| **v1.1** | Portal Templates: PortalHeader, PortalFooter, PortalShell, PortalLogin, ServiceTile · Fix fonte Objective em 21 componentes |

---

## Portais Klini — templates de layout

Fonte Figma: `HQ0rZENIkdivRbUxHSlaK9` (Portais Klini) — 5 páginas

| Portal | Telas Figma | Perfis |
|--------|-------------|--------|
| Beneficiário | 18 screens (Home, Carências, Atendimentos, Consultas, Token, Requisições, Busca Rede, Coparticipação, Utilização, Boletos, Nova Consulta…) | Titular + dependentes |
| Médico — Gestor | 6 screens (Fechamentos, Relatório horas, Horas ajustes, Atendimentos) | CMK por unidade |
| Médico — Não-gestor | 5 screens (Login, Alterar senha, Home produtividade, Modal nota fiscal) | Médico PJ |
| Corretor | 10 screens (Login, Propostas, Relatórios comissão, Modal nota) | Gestor comercial |
| TI Suporte | a definir | Suporte interno |

### Componentes de portal (v1.1)

| Componente | Seletor | Base PrimeNG | Uso |
|---|---|---|---|
| `KlnPortalHeaderComponent` | `kln-portal-header` | `p-toolbar` | Header c/ barra gradiente + saudação + avatar |
| `KlnPortalFooterComponent` | `kln-portal-footer` | `p-toolbar` | Rodapé: logo klini saúde + ANS |
| `KlnPortalShellComponent`  | `kln-portal-shell`  | —           | Layout completo (header + ng-content + footer) |
| `KlnPortalLoginComponent`  | `kln-portal-login`  | `p-card`    | Tela de login (CPF + senha + primeiro acesso) |
| `KlnServiceTileComponent`  | `kln-service-tile`  | `p-button`  | Tile ícone+label para grid de serviços |

### Exemplo — Portal do Beneficiário

```html
<kln-portal-shell
  userName="PAULA ROSA"
  planLabel="plano klini start pj"
  (avatarClick)="openMenu($event)"
>
  <section class="portal-section">
    <h2>Dados do plano</h2>
    <!-- kln-card com info do plano -->
  </section>

  <section class="portal-section">
    <h2>Serviços</h2>
    <div class="services-grid">
      <kln-service-tile icon="pi-shield"    label="Carências"    (tileClick)="goTo('carencias')" />
      <kln-service-tile icon="pi-clock"     label="Atendimentos" (tileClick)="goTo('atendimentos')" />
      <kln-service-tile icon="pi-calendar"  label="Consultas"    (tileClick)="goTo('consultas')" />
      <kln-service-tile icon="pi-key"       label="Token"        (tileClick)="goTo('token')" />
      <kln-service-tile icon="pi-file-text" label="Requisições"  (tileClick)="goTo('requisicoes')" />
      <kln-service-tile icon="pi-search"    label="Busca Rede"   (tileClick)="goTo('busca-rede')" />
    </div>
  </section>
</kln-portal-shell>
```

### Exemplo — Tela de login

```html
<kln-portal-login
  (loginSubmit)="onLogin($event)"
  (firstAccessClick)="goToFirstAccess()"
  (forgotPasswordClick)="goToForgot()"
/>

<!-- Portal Corretor (matrícula em vez de CPF) -->
<kln-portal-login
  loginLabel="Matrícula"
  loginMask="99999999"
  loginPlaceholder="00000000"
  [showFirstAccess]="false"
  (loginSubmit)="onLogin($event)"
/>
```

---

## Referências rápidas

- Figma: `https://figma.com/design/gOsRuHIPm6Xo5zGEWDmnRW/` — 10 páginas (Cover, Brand, Foundations, Data Visualization, Components, Documentation, Showcase, Templates, Templates·Mobile, Directives & Utilities)
  - ⚠️ **MCP access**: o token do Figma MCP só expõe **Cover** e **Brand** — as outras 8 páginas existem mas não são acessíveis via `get_metadata`/`get_design_context`. Limitação de permissão do token, não bug.
- Instagram: `@klinisaude` · Site: `klinisaude.com.br`
- Logo mínimo: **60px** digital / 2,1cm impresso · Proteção: **2× altura do ícone**
- PrimeNG docs: `https://primeng.org`
- GitHub Packages: `https://github.com/orgs/klini-saude/packages`
- README completo: `./README.md` (instalação, uso, exemplos)
