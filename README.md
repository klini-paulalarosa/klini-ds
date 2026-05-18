# @klini/ds — Klini Design System

Biblioteca de componentes Angular + tokens de design para o Klini Saúde.  
Distribuída via **GitHub Packages** (privado).

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

Ou apenas os tokens que precisar:

```scss
@use '@klini/ds/styles/tokens';  // CSS custom properties
```

### 2. Configurar tema PrimeNG

No `app.config.ts`:

```typescript
import { providePrimeNG } from 'primeng/config';
import { KliniPrime } from '@klini/ds';

export const appConfig: ApplicationConfig = {
  providers: [
    // ...
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
import { ButtonComponent, StatusPillComponent } from '@klini/ds';

@Component({
  imports: [ButtonComponent, StatusPillComponent],
  template: `
    <klini-button label="Salvar" severity="primary" />
    <klini-status-pill status="autorizada" />
  `,
})
export class MinhaPage {}
```

**NgModule (compatibilidade):**

```typescript
import { KliniDsModule } from '@klini/ds';

@NgModule({ imports: [KliniDsModule] })
export class AppModule {}
```

---

## Componentes

| Componente | Selector | Inputs principais |
|---|---|---|
| Button | `klini-button` | `label`, `severity`, `size`, `variant`, `disabled`, `loading` |
| Status Pill | `klini-status-pill` | `status` (em-processo\|autorizada\|parcialmente\|negado\|inativa) |
| Tag | `klini-tag` | `value`, `severity` |
| Badge | `klini-badge` | `value`, `severity` |
| Chip | `klini-chip` | `label`, `removable`, `selected` |
| KPI Card | `klini-kpi-card` | `label`, `value`, `trend`, `trendLabel` |
| Toast | `klini-toast` | `message`, `title`, `severity`, `closable` |
| Stepper | `klini-stepper` | `steps`, `activeStep`, `orientation` |
| Drawer | `klini-drawer` | `header`, `visible`, `position` |
| InputText | `klini-input-text` | `label`, `placeholder`, `size`, `errorMessage` |
| Calendar | `klini-calendar` | `label` (wrapper para p-datepicker) |

---

## Tokens CSS

Todos os tokens estão disponíveis como CSS custom properties:

```css
/* Primitivos */
--klini-color-teal-500    /* #259591 — cor principal */
--klini-space-4           /* 16px */
--klini-radius-lg         /* 8px */

/* Semânticos */
--klini-action-primary    /* referencia teal-500 */
--klini-text-primary      /* ink-900 */
--klini-surface-page      /* ink-50 */

/* Status */
--klini-status-autorizada-solid
--klini-status-negado-bg
```

---

## Publicar uma nova versão

```bash
# 1. Atualize a versão no package.json
npm version patch   # 0.1.0 → 0.1.1
npm version minor   # 0.1.0 → 0.2.0
npm version major   # 0.1.0 → 1.0.0

# 2. Push da tag — o GitHub Action publica automaticamente
git push origin main --tags
```

---

## Atualizar tokens do Figma

Sempre que o DS for atualizado no Figma, rode o script de sync (Fase 2 — a implementar):

```bash
npm run sync-tokens
```

Isso atualizará os arquivos `src/lib/tokens/*.scss` com os valores mais recentes.

---

## Desenvolvimento

```bash
npm install
npm run build:watch   # build incremental
```

Projeto: [Figma DS](https://www.figma.com/design/gOsRuHIPm6Xo5zGEWDmnRW/Klini-Sa%C3%BAde-%E2%80%94-Design-System)
