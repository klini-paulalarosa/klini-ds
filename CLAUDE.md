# CLAUDE.md — Klini DS

Guia completo para agentes de IA trabalharem neste repositório.
Leia a seção correspondente ao pacote com que você está trabalhando.

---

## Visão geral do repositório

Este repo contém **duas gerações** do Klini Design System coexistindo:

| Caminho | Pacote npm | Stack | Status |
|---|---|---|---|
| `react/` | `@klini-saude/ds-react` v1.x | React 18 + Shadcn/UI + Tailwind | **Principal** — novos projetos |
| `projects/klini-ds/` | `@klini-saude/ds` v2.x | Angular 18 + PrimeNG 18 | **Legado** — portais existentes |

```
klini-ds/
├── react/                    ← @klini-saude/ds-react (React + Shadcn)
│   ├── src/components/ui/    ← 48 componentes Shadcn/UI
│   ├── src/components/klini/ ← Componentes Klini brand (charts, kpi, datatable)
│   ├── src/lib/utils.ts      ← cn()
│   ├── src/styles/globals.css← tokens CSS Klini
│   └── src/index.ts          ← barrel export único
├── projects/klini-ds/        ← @klini-saude/ds (Angular, LEGADO)
├── projects/klini-ds-docs/   ← docs site Angular (GitHub Pages)
├── ARCHITECTURE.md           ← arquitetura Atomic Design + Fluent
└── CLAUDE.md                 ← este arquivo
```

Git remotes (push sempre nos dois):
```
origin      → github.com/klini-paulalarosa/klini-ds   (pessoal)
klini-saude → github.com/klini-saude/design-system     (org)
```

---

## REACT DS — `react/` (principal)

### Setup rápido

```bash
cd react
npm install
npm run build     # gera dist/klini-ds-react.{es,cjs}.js + index.d.ts
npm run typecheck # tsc --noEmit
```

### Regras para o React DS

1. **Componentes Shadcn** ficam em `src/components/ui/` — não editar diretamente; re-gerar com `npx shadcn@latest add <nome> --overwrite`
2. **Componentes Klini** ficam em `src/components/klini/` — aqui mora a lógica de brand
3. **Sempre exportar** novo componente em `src/index.ts` (ou via `klini/index.ts` → `src/index.ts`)
4. **Build limpo antes de commitar** — `npm run build` sem erros TS
5. **Cores apenas via tokens** — nunca hardcode hex; usar `hsl(var(--primary))` ou `KLINI_COLORS.teal`
6. **Sem `any` solto** — usar `// eslint-disable-next-line @typescript-eslint/no-explicit-any` quando inevitável

### Adicionar novo componente Shadcn

```bash
cd react
npx shadcn@latest add <nome> --overwrite
# depois: adicionar export em src/index.ts
```

### Adicionar componente Klini de alto nível

1. Criar em `src/components/klini/<nome>.tsx`
2. Exportar em `src/components/klini/index.ts`
3. `src/index.ts` já reexporta `./components/klini` — não precisa tocar

---

### Catálogo completo — React DS

#### Shadcn/UI primitives (src/components/ui/)

```
accordion         alert             alert-dialog      aspect-ratio
avatar            badge             breadcrumb        button
calendar          card              carousel          chart
checkbox          collapsible       command           context-menu
dialog            drawer            dropdown-menu     form
hover-card        input             input-otp         label
menubar           navigation-menu   pagination        popover
progress          radio-group       resizable         scroll-area
select            separator         sheet             sidebar
skeleton          slider            sonner            switch
table             tabs              textarea          toast
toaster           toggle            toggle-group      tooltip
```

**Nota sobre nomes conflitantes:**
- `Toaster` (toast/radix) → importado como `Toaster`
- `Toaster` (sonner) → exportado como `Sonner` para evitar conflito

#### Klini brand components (src/components/klini/)

**Charts:**

| Export | Arquivo | Props principais |
|---|---|---|
| `KliniBarChart` | `charts/klini-bar-chart.tsx` | `data, dataKeys, xKey, variant, showLabels, format` |
| `KliniLineChart` | `charts/klini-line-chart.tsx` | `data, dataKeys, xKey, curveType, showDots, referenceLine` |
| `KliniAreaChart` | `charts/klini-area-chart.tsx` | `data, dataKeys, xKey, stacked, fillOpacity` |
| `KliniPieChart` | `charts/klini-pie-chart.tsx` | `data: {name,value}[], donut, centerLabel, showLegend` |
| `KliniRadarChart` | `charts/klini-radar-chart.tsx` | `data, dataKeys, angleKey` |
| `KliniSparkline` | `charts/klini-sparkline.tsx` | `data: number[], variant, color, height` |

**Analytics/Data:**

| Export | Arquivo | Props principais |
|---|---|---|
| `KliniKpiCard` | `klini-kpi-card.tsx` | `title, value, change, trend, sparklineData, icon, format, positiveIsGood` |
| `KliniDataTable` | `klini-data-table.tsx` | `columns, data, filterPlaceholder, filterColumn, pageSizeOptions` |
| `KliniSortableHeader` | `klini-data-table.tsx` | `column, label` — helper para header clicável |

**Utilitários:**

| Export | Origem | Uso |
|---|---|---|
| `cn` | `lib/utils.ts` | `cn('base', condition && 'extra')` — merge seguro |
| `makeChartConfig` | `charts/klini-chart-config.ts` | `makeChartConfig(['receita','custo'], { receita: 'Receita' })` |
| `formatValue` | `charts/klini-chart-config.ts` | `formatValue(12450, 'compact')` → "12,5 mil" |
| `KLINI_CHART_PALETTE` | `charts/klini-chart-config.ts` | Array de 5 cores Klini em HSL |
| `KLINI_COLORS` | `charts/klini-chart-config.ts` | `{ teal, sea, sky, orange, slate, primary, muted }` |

#### Hooks

| Export | Arquivo | Uso |
|---|---|---|
| `useToast` | `hooks/use-toast.ts` | Imperativo: `const { toast } = useToast(); toast({ title: '…' })` |
| `useIsMobile` | `hooks/use-mobile.tsx` | `const isMobile = useIsMobile()` — breakpoint 768px |

---

### Design tokens React DS

Definidos em `react/src/styles/globals.css` como CSS custom properties (HSL sem `hsl()`).

**Cores de UI:**
```
--primary              178 61% 37%   Teal #259591 — ações primárias, foco, botões
--primary-foreground     0  0% 100%  Texto sobre primary
--secondary            178 40% 94%   Ghost/outline actions
--secondary-foreground 178 61% 28%
--destructive            0 84% 60%   Erros, exclusão
--accent               178 40% 94%   Hover states
--muted                210 40% 96%   Backgrounds suaves
--muted-foreground     215 16% 47%   Texto secundário
--border               214 32% 91%
--ring                 178 61% 37%   Focus ring = teal
```

**Sidebar tokens (portais):**
```
--sidebar-background   178 25% 97%   Fundo sidebar — teal muito claro
--sidebar-primary      178 61% 37%   Links ativos = teal
--sidebar-accent       178 40% 92%   Hover items
--sidebar-border       178 20% 90%
```

**Chart palette:**
```
--chart-1  178 61% 37%   Teal    #259591  série 1 / brand
--chart-2  199 89% 40%   Sea     #2193b0  série 2 / info
--chart-3  210 60% 55%   Sky     #3b82f6  série 3
--chart-4   38 92% 50%   Orange  #f59e0b  série 4 / warning
--chart-5  215 16% 47%   Slate   #708090  série 5 / em processo
```

**Dark mode:** ativado com classe `.dark` no `<html>`. Todos os tokens têm versão dark.

---

### Exemplos de uso — React DS

#### Bar chart + KPI card

```tsx
import {
  KliniBarChart,
  KliniKpiCard,
  KliniSparkline,
  KLINI_COLORS,
  formatValue,
} from '@klini-saude/ds-react'

// Dashboard de sinistros
<div className="grid grid-cols-3 gap-4">
  <KliniKpiCard
    title="Vidas ativas"
    value={12450}
    change={3.2}
    changeLabel="vs mês anterior"
    sparklineData={[40, 45, 42, 50, 48, 55, 60]}
    format="compact"
  />
  <KliniKpiCard
    title="Sinistralidade"
    value={68.3}
    change={-1.2}
    format="percent"
    positiveIsGood={false}  // queda é boa
  />
  <KliniKpiCard
    title="Receita bruta"
    value={1_850_000}
    change={5.8}
    format="currency"
  />
</div>

<KliniBarChart
  data={atendimentosPorMes}
  dataKeys={['consultas', 'exames', 'internacoes']}
  xKey="mes"
  title="Atendimentos por tipo"
  description="Jan–Dez 2024"
  variant="stacked"
  format="number"
  height={320}
/>
```

#### Data table com sorting

```tsx
import { type ColumnDef } from '@tanstack/react-table'
import { KliniDataTable, KliniSortableHeader, Badge } from '@klini-saude/ds-react'

type Beneficiario = {
  nome: string; cpf: string; plano: string
  vidas: number; status: 'ativo' | 'suspenso'
}

const columns: ColumnDef<Beneficiario>[] = [
  {
    accessorKey: 'nome',
    header: ({ column }) => <KliniSortableHeader column={column} label="Beneficiário" />,
  },
  { accessorKey: 'cpf', header: 'CPF' },
  { accessorKey: 'plano', header: 'Plano' },
  {
    accessorKey: 'vidas',
    header: ({ column }) => <KliniSortableHeader column={column} label="Vidas" />,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => (
      <Badge variant={row.original.status === 'ativo' ? 'default' : 'outline'}>
        {row.original.status}
      </Badge>
    ),
  },
]

<KliniDataTable
  columns={columns}
  data={beneficiarios}
  filterPlaceholder="Buscar beneficiário…"
  filterColumn="nome"
  pageSizeOptions={[10, 25, 50]}
/>
```

#### Donut chart com label central

```tsx
import { KliniPieChart, formatValue } from '@klini-saude/ds-react'

<KliniPieChart
  data={[
    { name: 'Ambulatorial', value: 58 },
    { name: 'Hospitalar',   value: 27 },
    { name: 'Odontológico', value: 15 },
  ]}
  donut
  centerLabel={
    <div className="text-center">
      <div className="text-2xl font-bold">100%</div>
      <div className="text-xs text-muted-foreground">sinistros</div>
    </div>
  }
  title="Distribuição de sinistros"
/>
```

---

## ANGULAR DS — `projects/klini-ds/` (legado)

Referência de leitura para manter portais existentes. Não criar features novas neste pacote.

### Regras absolutas (Angular)

1. **Zero componentes custom** — base sempre `p-*` do PrimeNG
2. **Sempre rodar build + lint antes de commitar** — `npm run build && npm run lint`
3. **Angular 17+ control flow** — `@if`/`@for`, nunca `*ngIf`/`*ngFor`
4. **Standalone components** — `standalone: true` + `ChangeDetectionStrategy.OnPush`
5. **ESLint `any`** — `// eslint-disable-next-line @typescript-eslint/no-explicit-any` na linha anterior
6. **`no-inferrable-types`** — `@Input() label = ''` não `@Input() label: string = ''`

### Estrutura Angular

```
projects/klini-ds/src/lib/
├── components/          # 94 componentes — um dir por componente
│   └── <nome>/<nome>.component.ts
├── directives/index.ts  # KeyFilter, AutoFocus, Ripple, StyleClass, AnimateOnScroll, DialogService
├── theme/klini-prime.ts # preset PrimeNG (definePreset sobre Aura)
└── tokens/              # SCSS tokens
    ├── _primitive.scss  ├── _semantic.scss  ├── _scale.scss
    ├── _elevation.scss  ├── _status.scss    └── _chart-palette.scss
```

### Padrão de novo componente Angular

```typescript
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

Após criar: exportar em `public-api.ts` + adicionar em `klini-ds.module.ts`.

### Chart system Angular

| Camada | Arquivo | Função |
|---|---|---|
| `KlnChartData` | `chart/chart.data.ts` | Fábricas de datasets |
| `KlnChartPresets` | `chart/chart.presets.ts` | 21 presets com tokens |
| `KlnChartTokens` | `chart/chart.tokens.ts` | Resolve CSS vars para canvas |

### Portal components Angular (v1.1)

| Seletor | Componente | Base PrimeNG |
|---|---|---|
| `kln-portal-shell` | `KlnPortalShellComponent` | layout completo |
| `kln-portal-header` | `KlnPortalHeaderComponent` | `p-toolbar` |
| `kln-portal-footer` | `KlnPortalFooterComponent` | `p-toolbar` |
| `kln-portal-login` | `KlnPortalLoginComponent` | `p-card` |
| `kln-service-tile` | `KlnServiceTileComponent` | `p-button` |

### Histórico de versões Angular

| Versão | O que entrou |
|---|---|
| v0.1–v0.4 | 94 componentes base (Button → VirtualScroller) |
| v0.5 | Directives + KlnChartData/Presets/Tokens |
| v1.0 | +19 componentes + 7 chart presets avançados |
| v1.1 | Portal templates (Header, Footer, Shell, Login, ServiceTile) |
| **v2.0** | Breaking: prefixo `klini-*` → `kln-*`; tema KlnPrime v2 |

---

## Marca Klini — referência rápida

```
Teal   #259591  PANTONE 2461C  primary, brand, sucesso
Sea    #6AA7AE  PANTONE 549C   info, complementar
Orange #CD7925  PANTONE 7565C  warning
Coral  #E05759  PANTONE 7625C  danger, negado
Slate  #708090  —              em processo, neutro
Ink    #374151  —              texto principal
```

**Fontes:**
- **Objective** — primária: headings, labels, botões, corpo (ExtraBold 800, SemiBold 600, Regular 400)
- **Merriweather** — editorial/marketing only (nunca em UI de produto)

**Ícones:** PrimeIcons (`pi pi-*`) no Angular DS · Lucide React (`lucide-react`) no React DS

---

## Git — fluxo padrão

```bash
# verificar antes de commitar
cd react && npm run build   # React DS
npm run build && npm run lint  # (na raiz) Angular DS

# commit
git add <arquivos>
git commit -m "tipo(escopo): descrição em PT-BR"

# push nos dois remotes
git push origin main && git push klini-saude main

# release (Angular DS)
git tag -a vX.Y.Z -m "release vX.Y.Z"
git push origin vX.Y.Z && git push klini-saude vX.Y.Z
```

CI `publish.yml` dispara em `v*.*.*` e publica no GitHub Packages via `secrets.NPM_TOKEN`.

---

## Referências externas

- Figma DS: `figma.com/design/gOsRuHIPm6Xo5zGEWDmnRW/` (10 páginas — Cover e Brand acessíveis via MCP)
- Figma Portais: `figma.com/design/HQ0rZENIkdivRbUxHSlaK9/`
- PrimeNG docs: `primeng.org`
- Shadcn docs: `ui.shadcn.com`
- GitHub Packages: `github.com/orgs/klini-saude/packages`
- Docs site: `klini-paulalarosa.github.io/klini-ds/`
- ARCHITECTURE.md: arquitetura Atomic Design + Fluent completa
- `react/README.md`: docs detalhadas do pacote React DS
