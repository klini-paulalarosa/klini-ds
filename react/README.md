# @klini-saude/ds-react

Klini Design System — React 18 + Shadcn/UI + Tailwind CSS.

> **Duas gerações do DS coexistem neste repo:**
> - `@klini-saude/ds` v2.x — Angular 18 + PrimeNG (legado, portais existentes)
> - `@klini-saude/ds-react` v1.x — React 18 + Shadcn/UI (**este pacote, novos projetos**)

---

## Instalação

```bash
npm install @klini-saude/ds-react
```

O pacote é publicado no GitHub Packages. Configure o `.npmrc`:

```
@klini-saude:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

### Peer dependencies

```bash
npm install react@18 react-dom@18
```

---

## Setup

### 1. Importar estilos globais

```tsx
// main.tsx ou globals.css do seu projeto
import '@klini-saude/ds-react/styles'
```

### 2. Tailwind config (projetos que já usam Tailwind)

Adicione o caminho do DS ao `content` do seu `tailwind.config.ts`:

```ts
content: [
  './src/**/*.{ts,tsx}',
  './node_modules/@klini-saude/ds-react/dist/**/*.js',
]
```

---

## Uso rápido

```tsx
import { Button, Card, CardContent, KliniBarChart, KliniKpiCard } from '@klini-saude/ds-react'

// Botão
<Button variant="default">Agendar consulta</Button>

// Card
<Card>
  <CardContent>Conteúdo</CardContent>
</Card>

// Gráfico de barras
<KliniBarChart
  data={[{ mes: 'Jan', consultas: 120, exames: 45 }]}
  dataKeys={['consultas', 'exames']}
  xKey="mes"
  title="Atendimentos por mês"
/>

// KPI card
<KliniKpiCard
  title="Vidas ativas"
  value={12450}
  change={3.2}
  sparklineData={[40, 45, 42, 50, 48, 55, 60]}
/>
```

---

## Catálogo de componentes

### Shadcn/UI primitives (48 componentes)

Todos os componentes do [Shadcn/UI](https://ui.shadcn.com) estão incluídos com tokens da marca Klini.

| Categoria | Componentes |
|---|---|
| **Layout** | `Card`, `Separator`, `ResizablePanelGroup`, `ScrollArea`, `AspectRatio` |
| **Navegação** | `Breadcrumb`, `NavigationMenu`, `Menubar`, `Tabs`, `Pagination`, `Sidebar` |
| **Overlays** | `Dialog`, `AlertDialog`, `Sheet`, `Drawer`, `Popover`, `HoverCard`, `Tooltip` |
| **Formulários** | `Button`, `Input`, `Textarea`, `Select`, `Checkbox`, `RadioGroup`, `Switch`, `Slider`, `Label`, `Form`, `InputOTP`, `Toggle`, `ToggleGroup` |
| **Dados** | `Table`, `Badge`, `Avatar`, `Progress`, `Skeleton`, `Calendar`, `Carousel` |
| **Feedback** | `Alert`, `Toast`, `Toaster`, `Sonner` |
| **Comandos** | `Command`, `DropdownMenu`, `ContextMenu`, `Collapsible`, `Accordion` |
| **Charts** | `ChartContainer`, `ChartTooltip`, `ChartLegend`, `ChartStyle` (primitivos Recharts) |

### Klini brand components

Componentes de alto nível com a marca Klini pré-aplicada.

#### Charts

| Componente | Descrição |
|---|---|
| `KliniBarChart` | Barras verticais, horizontais ou empilhadas — brand colors automáticas |
| `KliniLineChart` | Linhas com suporte a curva monotone/step e linha de referência |
| `KliniAreaChart` | Área com gradient fill, suporta stacked |
| `KliniPieChart` | Pizza ou donut com label central configurável |
| `KliniRadarChart` | Radar/spider para comparação multidimensional |
| `KliniSparkline` | Sparkline inline mínima (line ou area), sem eixos |

#### Analytics

| Componente | Descrição |
|---|---|
| `KliniKpiCard` | Cartão de métrica com valor, variação %, trend badge e sparkline |
| `KliniDataTable` | Tabela full-featured (TanStack Table v8): sort, filter, column toggle, paginação |
| `KliniSortableHeader` | Helper de header com ícone de sort para usar no KliniDataTable |

#### Utilitários

| Export | Descrição |
|---|---|
| `cn` | `clsx` + `tailwind-merge` — merge de classes seguro |
| `makeChartConfig` | Cria ChartConfig a partir de array de keys com paleta Klini |
| `formatValue` | Formata número como moeda BRL, %, compacto ou inteiro |
| `KLINI_CHART_PALETTE` | Array com 5 cores da paleta de charts Klini |
| `KLINI_COLORS` | Objeto com cores nomeadas: teal, sea, sky, orange, slate, primary |

---

## API dos componentes Klini

### KliniBarChart

```tsx
<KliniBarChart
  data={salesData}            // Record<string, string|number>[]
  dataKeys={['receita', 'despesa']}
  xKey="mes"
  labels={{ receita: 'Receita', despesa: 'Despesa' }}
  title="Receita vs Despesa"
  description="Comparativo 2024"
  variant="grouped"           // 'grouped' | 'stacked' | 'horizontal'
  showLabels={false}
  format="currency"           // 'number' | 'currency' | 'percent' | 'compact'
  height={280}
/>
```

### KliniLineChart

```tsx
<KliniLineChart
  data={trendData}
  dataKeys={['sinistros']}
  xKey="mes"
  curveType="monotone"        // 'linear' | 'monotone' | 'step'
  showDots={true}
  referenceLine={{ value: 100, label: 'Meta' }}
  format="number"
  height={280}
/>
```

### KliniAreaChart

```tsx
<KliniAreaChart
  data={utilizationData}
  dataKeys={['consultas', 'exames']}
  xKey="mes"
  stacked={false}
  fillOpacity={0.15}          // 0 = sem fill, apenas linha
  format="number"
/>
```

### KliniPieChart

```tsx
<KliniPieChart
  data={[
    { name: 'Consultas', value: 60 },
    { name: 'Exames',    value: 30 },
    { name: 'Outros',    value: 10 },
  ]}
  donut={true}
  centerLabel={<span className="text-2xl font-bold">100</span>}
  title="Mix de atendimentos"
/>
```

### KliniRadarChart

```tsx
<KliniRadarChart
  data={[
    { indicador: 'Satisfação', portal: 85, benchmark: 70 },
    { indicador: 'Agilidade',  portal: 78, benchmark: 65 },
  ]}
  dataKeys={['portal', 'benchmark']}
  angleKey="indicador"
  labels={{ portal: 'Klini', benchmark: 'Mercado' }}
/>
```

### KliniSparkline

```tsx
<KliniSparkline
  data={[40, 45, 42, 50, 48, 55, 60]}
  variant="area"              // 'area' | 'line'
  color={KLINI_COLORS.teal}
  height={40}
/>
```

### KliniKpiCard

```tsx
<KliniKpiCard
  title="Vidas ativas"
  value={12450}
  change={3.2}                // % vs período anterior (positivo = up)
  changeLabel="vs mês anterior"
  trend="up"                  // 'up' | 'down' | 'neutral' (derivado de change se omitido)
  sparklineData={[40, 45, 42, 50, 48, 55]}
  icon={<UsersIcon className="h-5 w-5" />}
  format="compact"            // 'number' | 'currency' | 'percent' | 'compact'
  positiveIsGood={true}       // false inverte as cores (ex: inadimplência)
/>
```

### KliniDataTable

```tsx
import { type ColumnDef } from '@tanstack/react-table'
import { KliniDataTable, KliniSortableHeader } from '@klini-saude/ds-react'

type Beneficiario = { nome: string; cpf: string; status: string; vidas: number }

const columns: ColumnDef<Beneficiario>[] = [
  {
    accessorKey: 'nome',
    header: ({ column }) => <KliniSortableHeader column={column} label="Nome" />,
  },
  { accessorKey: 'cpf',    header: 'CPF' },
  { accessorKey: 'status', header: 'Status' },
  {
    accessorKey: 'vidas',
    header: ({ column }) => <KliniSortableHeader column={column} label="Vidas" />,
  },
]

<KliniDataTable
  columns={columns}
  data={beneficiarios}
  filterPlaceholder="Buscar beneficiário…"
  filterColumn="nome"         // omitir para filtro global
  pageSizeOptions={[10, 20, 50]}
/>
```

---

## Design tokens Klini

Os tokens são CSS custom properties definidas em `globals.css` e consumidas via Tailwind.

### Cores (HSL)

| Token | Valor | Uso |
|---|---|---|
| `--primary` | `178 61% 37%` | Teal #259591 — ações primárias, foco |
| `--primary-foreground` | `0 0% 100%` | Texto sobre primário |
| `--secondary` | `178 40% 94%` | Ghost/outline actions |
| `--destructive` | `0 84% 60%` | Erros, exclusão |
| `--chart-1` | `178 61% 37%` | Teal — série 1 |
| `--chart-2` | `199 89% 40%` | Sea — série 2 |
| `--chart-3` | `210 60% 55%` | Sky — série 3 |
| `--chart-4` | `38 92% 50%`  | Orange — série 4 / warning |
| `--chart-5` | `215 16% 47%` | Slate — série 5 / em processo |

### Sidebar tokens

Todos os `--sidebar-*` tokens usam o teal Klini como cor primária, garantindo consistência visual nos layouts de portal.

### Dark mode

Ativado com a classe `.dark` no elemento raiz. Todos os tokens têm equivalentes dark.

---

## Paleta de charts Klini

```
Série 1  ████  Teal    #259591  (brand primary)
Série 2  ████  Sea     #2193b0  (info/complementar)
Série 3  ████  Sky     #3b82f6  (dados terciários)
Série 4  ████  Orange  #f59e0b  (warning/destaque)
Série 5  ████  Slate   #708090  (em processo/neutro)
```

Use `makeChartConfig(keys)` para aplicar automaticamente essa sequência.

---

## Estrutura de arquivos

```
react/
├── src/
│   ├── components/
│   │   ├── ui/                  # 48 componentes Shadcn/UI
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── chart.tsx        # ChartContainer, ChartTooltip, ChartLegend
│   │   │   └── ... (45 mais)
│   │   └── klini/               # Componentes Klini de alto nível
│   │       ├── charts/
│   │       │   ├── klini-chart-config.ts  # paleta, makeChartConfig, formatValue
│   │       │   ├── klini-bar-chart.tsx
│   │       │   ├── klini-line-chart.tsx
│   │       │   ├── klini-area-chart.tsx
│   │       │   ├── klini-pie-chart.tsx
│   │       │   ├── klini-radar-chart.tsx
│   │       │   └── klini-sparkline.tsx
│   │       ├── klini-kpi-card.tsx
│   │       └── klini-data-table.tsx
│   ├── hooks/
│   │   ├── use-toast.ts
│   │   └── use-mobile.tsx
│   ├── lib/
│   │   └── utils.ts             # cn()
│   ├── styles/
│   │   └── globals.css          # tokens Klini + @tailwind base/components/utilities
│   └── index.ts                 # barrel export único
├── components.json              # Shadcn CLI config
├── tailwind.config.ts           # tema Tailwind com cores Klini
├── tsconfig.json
├── vite.config.ts               # library mode → dist/
└── package.json
```

---

## Desenvolvimento

```bash
cd react

# instalar dependências
npm install

# build do pacote (gera dist/)
npm run build

# typecheck
npm run typecheck
```

Para publicar no GitHub Packages, configure o CI/CD com `NPM_TOKEN` e adicione o script de publish ao `package.json`.

---

## Dependências principais

| Pacote | Versão | Papel |
|---|---|---|
| `react` / `react-dom` | ≥18 | peer — não empacotado |
| `recharts` | ^2.x | Engine de charts |
| `@tanstack/react-table` | ^8.x | Engine da KliniDataTable |
| `@radix-ui/*` | ^1–2.x | Primitivos acessíveis para todos os componentes |
| `tailwindcss` | ^3.x | Utility CSS |
| `lucide-react` | ^0.4x | Ícones |
| `class-variance-authority` | ^0.7 | Variantes de componentes |
| `tailwind-merge` + `clsx` | latest | Merge de classes (`cn`) |

---

## Relacionado

- **DS Angular (legado):** `projects/klini-ds/` — `@klini-saude/ds` v2.x
- **Docs site:** GitHub Pages em `klini-paulalarosa.github.io/klini-ds/`
- **ARCHITECTURE.md:** Arquitetura completa do DS (Atomic Design, Fluent, tokens)
- **CLAUDE.md:** Guia para agentes de IA trabalharem neste repo
