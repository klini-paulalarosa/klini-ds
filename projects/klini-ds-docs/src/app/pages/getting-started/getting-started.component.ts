import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CodeBlockComponent } from '../../shared/code-block/code-block.component';

@Component({
  selector: 'app-getting-started',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CodeBlockComponent],
  template: `
    <div>
      <h1 class="docs-page-title">Instalação</h1>
      <p class="docs-page-description">
        Guia passo a passo para adicionar o Klini DS a um projeto Angular 18.
        O pacote é hospedado no GitHub Packages e requer autenticação.
      </p>

      <!-- Step 1 -->
      <div class="docs-section">
        <h2>1. Configurar .npmrc</h2>
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
        <h2>2. Instalar o pacote</h2>
        <app-code-block language="bash" [code]="installCode" />
        <p style="margin-top:12px">
          O pacote inclui PrimeNG 18, Chart.js 4 e todas as dependências como
          peer dependencies — certifique-se de tê-los instalados também.
        </p>
        <app-code-block language="bash" [code]="peersCode" />
      </div>

      <!-- Step 3 -->
      <div class="docs-section">
        <h2>3. Importar estilos globais</h2>
        <p>No seu <code class="font-mono">styles.scss</code> global, adicione os imports necessários:</p>
        <app-code-block language="scss" [code]="stylesCode" />
      </div>

      <!-- Step 4 -->
      <div class="docs-section">
        <h2>4. Configurar o tema no app.config.ts</h2>
        <p>
          Use <code class="font-mono">KlnPrime</code> como preset do PrimeNG.
          O tema aplica automaticamente as cores e tokens do Klini DS.
        </p>
        <app-code-block language="typescript" [code]="appConfigCode" />
      </div>

      <!-- Step 5 -->
      <div class="docs-section">
        <h2>5. Usar o primeiro componente</h2>
        <p>Importe o componente desejado e use no template:</p>
        <app-code-block language="typescript" [code]="firstComponentTs" />
        <app-code-block language="html" [code]="firstComponentHtml" />
      </div>

      <!-- Breaking changes v2 -->
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

  migrateCode = `<!-- Antes (v1.x) -->
<klini-button label="Salvar" />
<klini-card [header]="'Paciente'" />

<!-- Depois (v2.0.0+) -->
<kln-button label="Salvar" />
<kln-card [header]="'Paciente'" />`;
}
