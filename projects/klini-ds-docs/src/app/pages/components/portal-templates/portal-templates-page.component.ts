import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CodeBlockComponent } from '../../../shared/code-block/code-block.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-portal-templates-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CodeBlockComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">Portal Templates</h1>
        <span class="badge badge--new">v1.1</span>
      </div>
      <p class="docs-page-description">
        Templates de layout completos para os Portais Klini: Beneficiário, Médico, Corretor e TI Suporte.
        Cinco componentes de alto nível que implementam o padrão visual definido no Figma
        <code class="font-mono">HQ0rZENIkdivRbUxHSlaK9</code> (Portais Klini).
      </p>

      <!-- PortalShell -->
      <div class="docs-section">
        <h2>kln-portal-shell</h2>
        <p>
          Layout completo de portal: header + ng-content + footer em uma única tag.
          É a forma mais rápida de montar uma tela de portal Klini.
        </p>
        <app-code-block language="html" [code]="shellHtml" />
        <app-code-block language="typescript" [code]="shellTs" />
        <div style="margin-top:16px">
          <app-props-table [props]="shellProps" />
        </div>
      </div>

      <!-- PortalHeader -->
      <div class="docs-section">
        <h2>kln-portal-header</h2>
        <p>
          Header do portal com barra gradiente teal, saudação personalizada e avatar do usuário.
          Baseado em <code class="font-mono">p-toolbar</code>.
        </p>
        <app-code-block language="html" [code]="headerHtml" />
        <div style="margin-top:16px">
          <app-props-table [props]="headerProps" />
        </div>
      </div>

      <!-- PortalFooter -->
      <div class="docs-section">
        <h2>kln-portal-footer</h2>
        <p>
          Rodapé com logo Klini Saúde e número de registro ANS. Baseado em
          <code class="font-mono">p-toolbar</code>.
        </p>
        <app-code-block language="html" [code]="footerHtml" />
        <div style="margin-top:16px">
          <app-props-table [props]="footerProps" />
        </div>
      </div>

      <!-- PortalLogin -->
      <div class="docs-section">
        <h2>kln-portal-login</h2>
        <p>
          Tela de login completa. Suporta login por CPF (padrão Beneficiário/TI),
          matrícula (Corretor) ou outro formato via <code class="font-mono">loginMask</code>.
          Baseado em <code class="font-mono">p-card</code>.
        </p>
        <app-code-block language="html" [code]="loginHtml" />
        <app-code-block language="typescript" [code]="loginTs" />
        <div style="margin-top:16px">
          <app-props-table [props]="loginProps" />
        </div>
      </div>

      <!-- ServiceTile -->
      <div class="docs-section">
        <h2>kln-service-tile</h2>
        <p>
          Tile de serviço para grids de ações do portal do Beneficiário.
          Ícone + label em formato de card clicável. Baseado em
          <code class="font-mono">p-button</code>.
        </p>
        <app-code-block language="html" [code]="tileHtml" />
        <div style="margin-top:16px">
          <app-props-table [props]="tileProps" />
        </div>
      </div>

      <!-- Exemplo completo -->
      <div class="docs-section">
        <h2>Exemplo completo — Portal do Beneficiário</h2>
        <app-code-block language="html" [code]="fullExample" />
      </div>

      <!-- Portal Corretor -->
      <div class="docs-section">
        <h2>Variante — Portal do Corretor (matrícula)</h2>
        <p>O Portal do Corretor usa matrícula numérica em vez de CPF e não exibe o link "Primeiro acesso".</p>
        <app-code-block language="html" [code]="corretorLogin" />
      </div>
    </div>
  `,
})
export class PortalTemplatesPageComponent {
  shellHtml = `<kln-portal-shell
  userName="PAULA ROSA"
  planLabel="plano klini start pj"
  (avatarClick)="openMenu($event)"
>
  <!-- Conteúdo do portal vai aqui via ng-content -->
  <section class="portal-section">
    <h2>Dados do plano</h2>
    <kln-card header="Vigência" subheader="01/03/2023 – 28/02/2024">
      <!-- conteúdo -->
    </kln-card>
  </section>
</kln-portal-shell>`;

  shellTs = `import { KlnPortalShellComponent } from '@klini-saude/ds';

@Component({
  standalone: true,
  imports: [KlnPortalShellComponent],
  templateUrl: './portal-beneficiario.component.html',
})
export class PortalBeneficiarioComponent {
  openMenu(event: MouseEvent): void {
    // abre menu de perfil
  }
}`;

  headerHtml = `<!-- Uso isolado quando você monta o layout manualmente -->
<kln-portal-header
  userName="PAULA ROSA"
  planLabel="plano klini start pj"
  (avatarClick)="openMenu($event)"
/>`;

  footerHtml = `<!-- Rodapé padrão — ANS e logo -->
<kln-portal-footer />

<!-- Customizar registro ANS -->
<kln-portal-footer ansCode="415392" />`;

  loginHtml = `<!-- Login padrão — CPF + senha -->
<kln-portal-login
  (loginSubmit)="onLogin($event)"
  (firstAccessClick)="goToFirstAccess()"
  (forgotPasswordClick)="goToForgot()"
/>

<!-- Portal Corretor — matrícula numérica -->
<kln-portal-login
  loginLabel="Matrícula"
  loginMask="99999999"
  loginPlaceholder="00000000"
  [showFirstAccess]="false"
  (loginSubmit)="onLogin($event)"
/>`;

  loginTs = `import { KlnPortalLoginComponent, KlnPortalLoginPayload } from '@klini-saude/ds';

@Component({ standalone: true, imports: [KlnPortalLoginComponent] })
export class LoginComponent {
  onLogin(payload: KlnPortalLoginPayload): void {
    // payload.login = CPF ou matrícula digitado
    // payload.password = senha
    this.authService.login(payload.login, payload.password)
      .subscribe(/* ... */);
  }
}`;

  tileHtml = `<div class="services-grid" style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px">
  <kln-service-tile icon="pi pi-shield"    label="Carências"    (tileClick)="go('carencias')" />
  <kln-service-tile icon="pi pi-clock"     label="Atendimentos" (tileClick)="go('atendimentos')" />
  <kln-service-tile icon="pi pi-calendar"  label="Consultas"    (tileClick)="go('consultas')" />
  <kln-service-tile icon="pi pi-key"       label="Token"        (tileClick)="go('token')" />
  <kln-service-tile icon="pi pi-file-text" label="Requisições"  (tileClick)="go('requisicoes')" />
  <kln-service-tile icon="pi pi-search"    label="Busca Rede"   (tileClick)="go('busca-rede')" />
  <kln-service-tile icon="pi pi-dollar"    label="Coparticipação" (tileClick)="go('copart')" />
  <kln-service-tile icon="pi pi-chart-pie" label="Utilização"   (tileClick)="go('utilizacao')" />
  <kln-service-tile icon="pi pi-credit-card" label="Boletos"   (tileClick)="go('boletos')" />
</div>`;

  fullExample = `<kln-portal-shell
  userName="PAULA ROSA"
  planLabel="plano klini start pj"
  (avatarClick)="openMenu($event)"
>
  <section class="portal-section">
    <h2>Serviços</h2>
    <div class="services-grid">
      <kln-service-tile icon="pi pi-shield"    label="Carências"    (tileClick)="go('carencias')" />
      <kln-service-tile icon="pi pi-clock"     label="Atendimentos" (tileClick)="go('atendimentos')" />
      <kln-service-tile icon="pi pi-calendar"  label="Consultas"    (tileClick)="go('consultas')" />
      <kln-service-tile icon="pi pi-key"       label="Token"        (tileClick)="go('token')" />
      <kln-service-tile icon="pi pi-file-text" label="Requisições"  (tileClick)="go('requisicoes')" />
      <kln-service-tile icon="pi pi-search"    label="Busca Rede"   (tileClick)="go('busca-rede')" />
    </div>
  </section>

  <section class="portal-section">
    <h2>Próxima consulta</h2>
    <kln-card header="15 Jun 2026 — 14h30">
      <div style="padding:16px;color:var(--docs-text-muted)">
        <p>Dr. Carlos Mendes — Cardiologia</p>
        <p>Klini Saúde São Paulo</p>
      </div>
    </kln-card>
  </section>
</kln-portal-shell>`;

  corretorLogin = `<!-- Portal do Corretor: matrícula 8 dígitos, sem "Primeiro acesso" -->
<kln-portal-login
  loginLabel="Matrícula"
  loginMask="99999999"
  loginPlaceholder="00000000"
  [showFirstAccess]="false"
  (loginSubmit)="onCorretorLogin($event)"
  (forgotPasswordClick)="goToForgot()"
/>`;

  shellProps: PropDef[] = [
    { name: 'userName', type: 'string', default: "''", description: 'Nome do usuário exibido no header (caixa alta automaticamente).', required: true },
    { name: 'planLabel', type: 'string', default: "''", description: 'Label do plano abaixo do nome.' },
    { name: 'avatarClick', type: 'EventEmitter<MouseEvent>', default: '—', description: 'Evento ao clicar no avatar do usuário.' },
  ];

  headerProps: PropDef[] = [
    { name: 'userName', type: 'string', default: "''", description: 'Nome do usuário.', required: true },
    { name: 'planLabel', type: 'string', default: "''", description: 'Label do plano.' },
    { name: 'avatarClick', type: 'EventEmitter<MouseEvent>', default: '—', description: 'Clique no avatar.' },
  ];

  footerProps: PropDef[] = [
    { name: 'ansCode', type: 'string', default: "'415392'", description: 'Número de registro ANS exibido no rodapé.' },
  ];

  loginProps: PropDef[] = [
    { name: 'loginLabel', type: 'string', default: "'CPF'", description: 'Label do campo de login.' },
    { name: 'loginMask', type: 'string', default: "'999.999.999-99'", description: 'Máscara do campo de login (InputMask).' },
    { name: 'loginPlaceholder', type: 'string', default: "'000.000.000-00'", description: 'Placeholder do campo de login.' },
    { name: 'showFirstAccess', type: 'boolean', default: 'true', description: 'Exibe link "Primeiro acesso".' },
    { name: 'loginSubmit', type: 'EventEmitter<KlnPortalLoginPayload>', default: '—', description: 'Evento de submit com { login, password }.' },
    { name: 'firstAccessClick', type: 'EventEmitter<void>', default: '—', description: 'Clique em "Primeiro acesso".' },
    { name: 'forgotPasswordClick', type: 'EventEmitter<void>', default: '—', description: 'Clique em "Esqueci minha senha".' },
  ];

  tileProps: PropDef[] = [
    { name: 'icon', type: 'string', default: "''", description: 'Classe do ícone PrimeIcons.', required: true },
    { name: 'label', type: 'string', default: "''", description: 'Texto abaixo do ícone.', required: true },
    { name: 'tileClick', type: 'EventEmitter<MouseEvent>', default: '—', description: 'Evento de clique no tile.' },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Desabilita o tile.' },
  ];
}
