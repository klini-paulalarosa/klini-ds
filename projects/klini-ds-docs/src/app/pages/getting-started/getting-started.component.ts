import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CodeBlockComponent } from '../../shared/code-block/code-block.component';

@Component({
  selector: 'app-getting-started',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CodeBlockComponent],
  styles: [`
    /* ── Step indicators ──────────────────────────────────────────────────────── */
    .steps-container {
      counter-reset: step-counter;
    }

    /* Cada .docs-section dentro do steps-container vira um passo numerado */
    .steps-container .docs-section {
      counter-increment: step-counter;
      position: relative;
      padding-left: 52px;
    }

    /* Círculo numerado — posicionado à esquerda do .docs-section */
    .steps-container .docs-section::before {
      content: counter(step-counter);
      position: absolute;
      left: 0;
      top: 3px;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background: var(--docs-accent);
      color: #fff;
      font-size: 12px;
      font-weight: 700;
      text-align: center;
      line-height: 28px;
    }

    /* Remove o acento teal do h2 global pois o círculo já dá a âncora visual */
    .steps-container .docs-section h2::before {
      display: none;
    }

    /* Remove padding-left do h2 (o espaço já está no .docs-section) */
    .steps-container .docs-section h2 {
      padding-left: 0;
    }
  `],
  template: `
    <div>
      <h1 class="docs-page-title">Instalação</h1>
      <p class="docs-page-description">
        Guia passo a passo para adicionar o Klini DS a um projeto Angular 18.
        O pacote é hospedado no GitHub Packages e requer autenticação.
      </p>

      <!-- Steps 1–5 com indicadores numerados -->
      <div class="steps-container">

        <!-- Step 1 -->
        <div class="docs-section">
          <h2>Configurar .npmrc</h2>
          <p>
            O pacote está publicado no GitHub Packages. Crie ou edite o arquivo
            <code class="font-mono">.npmrc</code> na raiz do seu projeto:
          </p>
          <app-code-block language="bash" [code]="npmrcCode" />
          <p style="margin-top:12px">
            A variável <code class="font-mono">GITHUB_TOKEN</code> deve ter a permissão
            <strong>read:packages</strong>. Para projetos CI/CD, injete via secrets.
          </p>
        </div>

        <!-- Step 2 -->
        <div class="docs-section">
          <h2>Instalar o pacote</h2>
          <app-code-block language="bash" [code]="installCode" />
          <p style="margin-top:12px">
            O pacote inclui PrimeNG 18, Chart.js 4 e todas as dependências como
            peer dependencies — certifique-se de tê-los instalados também.
          </p>
          <app-code-block language="bash" [code]="peersCode" />
        </div>

        <!-- Step 3 -->
        <div class="docs-section">
          <h2>Importar estilos globais</h2>
          <p>No seu <code class="font-mono">styles.scss</code> global, adicione os imports necessários:</p>
          <app-code-block language="scss" [code]="stylesCode" />
        </div>

        <!-- Step 4 -->
        <div class="docs-section">
          <h2>Configurar o tema no app.config.ts</h2>
          <p>
            Use <code class="font-mono">KlnPrime</code> como preset do PrimeNG.
            O tema aplica automaticamente as cores e tokens do Klini DS.
          </p>
          <app-code-block language="typescript" [code]="appConfigCode" />
          <div style="margin-top:16px;padding:14px 16px;background:var(--docs-brand-soft);border:1px solid var(--docs-accent);border-radius:8px;font-size:13px;color:var(--docs-text-muted)">
            <strong style="color:var(--docs-accent)">
              <i class="pi pi-info-circle" style="margin-right:6px"></i>Providers de serviço
            </strong>
            <p style="margin:8px 0 0">
              Componentes que dependem de serviços globais precisam de providers adicionais:
              <code class="font-mono">Toast</code> e <code class="font-mono">ConfirmDialog</code> usam
              <code class="font-mono">MessageService</code> e <code class="font-mono">ConfirmationService</code>
              respectivamente.
            </p>
          </div>
          <app-code-block language="typescript" [code]="providersCode" />
        </div>

        <!-- Step 5 -->
        <div class="docs-section">
          <h2>Usar o primeiro componente</h2>
          <p>Importe o componente desejado e use no template:</p>
          <app-code-block language="typescript" [code]="firstComponentTs" />
          <app-code-block language="html" [code]="firstComponentHtml" />
        </div>

      </div><!-- /steps-container -->

      <!-- Breaking changes v2 — fora do counter para não receber número -->
      <div class="docs-section" style="background:#fff8f0;border:1px solid #fde8c8;border-radius:8px;padding:20px">
        <h2 style="border-bottom-color:#fde8c8;color:#92400e">
          <i class="pi pi-exclamation-triangle" style="margin-right:8px;color:#f59e0b"></i>
          Breaking change — v2.0.0
        </h2>
        <p>
          A partir da v2.0.0, todos os seletores foram migrados de <code class="font-mono">klini-*</code>
          para <code class="font-mono">kln-*</code>. Se você vem da v1.x, substitua todos os seletores
          nos seus templates.
        </p>
        <app-code-block language="html" [code]="migrateCode" />
      </div>
    </div>
  `,
})
export class GettingStartedComponent {
  npmrcCode = `# .npmrc (raiz do projeto)
@klini-saude:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=\${GITHUB_TOKEN}`;

  installCode = `npm install @klini-saude/ds`;

  peersCode = `npm install @angular/core@18 @angular/common@18 primeng@18 chart.js@4 zone.js`;

  stylesCode = `// styles.scss
@import 'primeng/resources/primeng.css';
@import 'primeicons/primeicons.css';

// Tokens SCSS do Klini DS (opcional — para usar as vars CSS diretamente)
// @import '@klini-saude/ds/tokens';`;

  appConfigCode = `// app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { KlnPrime } from '@klini-saude/ds';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: KlnPrime,
        options: { darkModeSelector: '.dark' },
      },
    }),
  ],
};`;

  firstComponentTs = `// meu.component.ts
import { Component } from '@angular/core';
import { ButtonComponent } from '@klini-saude/ds';

@Component({
  selector: 'app-meu',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './meu.component.html',
})
export class MeuComponent {
  handleClick(): void {
    console.log('Clicou!');
  }
}`;

  firstComponentHtml = `<!-- meu.component.html -->
<kln-button
  label="Agendar consulta"
  severity="primary"
  icon="pi pi-calendar"
  (clicked)="handleClick()"
/>`;

  providersCode = `// app.config.ts — providers de serviço globais
import { MessageService, ConfirmationService } from 'primeng/api';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideAnimationsAsync(),
    providePrimeNG({ theme: { preset: KlnPrime } }),

    // ⚠️ Necessário para kln-toast e KlnToastService
    MessageService,

    // ⚠️ Necessário para kln-confirm-dialog e ConfirmPopup
    ConfirmationService,
  ],
};

// No template do app.component (uma vez por app):
// <kln-toast position="top-right" />
// <kln-confirm-dialog />`;

  migrateCode = `<!-- Antes (v1.x) -->
<klini-button label="Salvar" />
<klini-card [header]="'Paciente'" />

<!-- Depois (v2.0.0+) -->
<kln-button label="Salvar" />
<kln-card [header]="'Paciente'" />`;
}
