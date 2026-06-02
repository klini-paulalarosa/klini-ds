import{a as m}from"./chunk-6RXJHZRI.js";import{a as c}from"./chunk-BCJF3KZG.js";import{Bb as i,Cb as e,Db as n,Xb as t,Ya as o,ec as d,fa as s,rb as l}from"./chunk-WNNFWGPB.js";var h=(()=>{class r{constructor(){this.shellHtml=`<kln-portal-shell
  userName="PAULA ROSA"
  planLabel="plano klini start pj"
  (avatarClick)="openMenu($event)"
>
  <!-- Conte\xFAdo do portal vai aqui via ng-content -->
  <section class="portal-section">
    <h2>Dados do plano</h2>
    <kln-card header="Vig\xEAncia" subheader="01/03/2023 \u2013 28/02/2024">
      <!-- conte\xFAdo -->
    </kln-card>
  </section>
</kln-portal-shell>`,this.shellTs=`import { KlnPortalShellComponent } from '@klini-saude/ds';

@Component({
  standalone: true,
  imports: [KlnPortalShellComponent],
  templateUrl: './portal-beneficiario.component.html',
})
export class PortalBeneficiarioComponent {
  openMenu(event: MouseEvent): void {
    // abre menu de perfil
  }
}`,this.headerHtml=`<!-- Uso isolado quando voc\xEA monta o layout manualmente -->
<kln-portal-header
  userName="PAULA ROSA"
  planLabel="plano klini start pj"
  (avatarClick)="openMenu($event)"
/>`,this.footerHtml=`<!-- Rodap\xE9 padr\xE3o \u2014 ANS e logo -->
<kln-portal-footer />

<!-- Customizar registro ANS -->
<kln-portal-footer ansCode="415392" />`,this.loginHtml=`<!-- Login padr\xE3o \u2014 CPF + senha -->
<kln-portal-login
  (loginSubmit)="onLogin($event)"
  (firstAccessClick)="goToFirstAccess()"
  (forgotPasswordClick)="goToForgot()"
/>

<!-- Portal Corretor \u2014 matr\xEDcula num\xE9rica -->
<kln-portal-login
  loginLabel="Matr\xEDcula"
  loginMask="99999999"
  loginPlaceholder="00000000"
  [showFirstAccess]="false"
  (loginSubmit)="onLogin($event)"
/>`,this.loginTs=`import { KlnPortalLoginComponent, KlnPortalLoginPayload } from '@klini-saude/ds';

@Component({ standalone: true, imports: [KlnPortalLoginComponent] })
export class LoginComponent {
  onLogin(payload: KlnPortalLoginPayload): void {
    // payload.login = CPF ou matr\xEDcula digitado
    // payload.password = senha
    this.authService.login(payload.login, payload.password)
      .subscribe(/* ... */);
  }
}`,this.tileHtml=`<div class="services-grid" style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px">
  <kln-service-tile icon="pi pi-shield"    label="Car\xEAncias"    (tileClick)="go('carencias')" />
  <kln-service-tile icon="pi pi-clock"     label="Atendimentos" (tileClick)="go('atendimentos')" />
  <kln-service-tile icon="pi pi-calendar"  label="Consultas"    (tileClick)="go('consultas')" />
  <kln-service-tile icon="pi pi-key"       label="Token"        (tileClick)="go('token')" />
  <kln-service-tile icon="pi pi-file-text" label="Requisi\xE7\xF5es"  (tileClick)="go('requisicoes')" />
  <kln-service-tile icon="pi pi-search"    label="Busca Rede"   (tileClick)="go('busca-rede')" />
  <kln-service-tile icon="pi pi-dollar"    label="Coparticipa\xE7\xE3o" (tileClick)="go('copart')" />
  <kln-service-tile icon="pi pi-chart-pie" label="Utiliza\xE7\xE3o"   (tileClick)="go('utilizacao')" />
  <kln-service-tile icon="pi pi-credit-card" label="Boletos"   (tileClick)="go('boletos')" />
</div>`,this.fullExample=`<kln-portal-shell
  userName="PAULA ROSA"
  planLabel="plano klini start pj"
  (avatarClick)="openMenu($event)"
>
  <section class="portal-section">
    <h2>Servi\xE7os</h2>
    <div class="services-grid">
      <kln-service-tile icon="pi pi-shield"    label="Car\xEAncias"    (tileClick)="go('carencias')" />
      <kln-service-tile icon="pi pi-clock"     label="Atendimentos" (tileClick)="go('atendimentos')" />
      <kln-service-tile icon="pi pi-calendar"  label="Consultas"    (tileClick)="go('consultas')" />
      <kln-service-tile icon="pi pi-key"       label="Token"        (tileClick)="go('token')" />
      <kln-service-tile icon="pi pi-file-text" label="Requisi\xE7\xF5es"  (tileClick)="go('requisicoes')" />
      <kln-service-tile icon="pi pi-search"    label="Busca Rede"   (tileClick)="go('busca-rede')" />
    </div>
  </section>

  <section class="portal-section">
    <h2>Pr\xF3xima consulta</h2>
    <kln-card header="15 Jun 2026 \u2014 14h30">
      <div style="padding:16px;color:var(--docs-text-muted)">
        <p>Dr. Carlos Mendes \u2014 Cardiologia</p>
        <p>Klini Sa\xFAde S\xE3o Paulo</p>
      </div>
    </kln-card>
  </section>
</kln-portal-shell>`,this.corretorLogin=`<!-- Portal do Corretor: matr\xEDcula 8 d\xEDgitos, sem "Primeiro acesso" -->
<kln-portal-login
  loginLabel="Matr\xEDcula"
  loginMask="99999999"
  loginPlaceholder="00000000"
  [showFirstAccess]="false"
  (loginSubmit)="onCorretorLogin($event)"
  (forgotPasswordClick)="goToForgot()"
/>`,this.shellProps=[{name:"userName",type:"string",default:"''",description:"Nome do usu\xE1rio exibido no header (caixa alta automaticamente).",required:!0},{name:"planLabel",type:"string",default:"''",description:"Label do plano abaixo do nome."},{name:"avatarClick",type:"EventEmitter<MouseEvent>",default:"\u2014",description:"Evento ao clicar no avatar do usu\xE1rio."}],this.headerProps=[{name:"userName",type:"string",default:"''",description:"Nome do usu\xE1rio.",required:!0},{name:"planLabel",type:"string",default:"''",description:"Label do plano."},{name:"avatarClick",type:"EventEmitter<MouseEvent>",default:"\u2014",description:"Clique no avatar."}],this.footerProps=[{name:"ansCode",type:"string",default:"'415392'",description:"N\xFAmero de registro ANS exibido no rodap\xE9."}],this.loginProps=[{name:"loginLabel",type:"string",default:"'CPF'",description:"Label do campo de login."},{name:"loginMask",type:"string",default:"'999.999.999-99'",description:"M\xE1scara do campo de login (InputMask)."},{name:"loginPlaceholder",type:"string",default:"'000.000.000-00'",description:"Placeholder do campo de login."},{name:"showFirstAccess",type:"boolean",default:"true",description:'Exibe link "Primeiro acesso".'},{name:"loginSubmit",type:"EventEmitter<KlnPortalLoginPayload>",default:"\u2014",description:"Evento de submit com { login, password }."},{name:"firstAccessClick",type:"EventEmitter<void>",default:"\u2014",description:'Clique em "Primeiro acesso".'},{name:"forgotPasswordClick",type:"EventEmitter<void>",default:"\u2014",description:'Clique em "Esqueci minha senha".'}],this.tileProps=[{name:"icon",type:"string",default:"''",description:"Classe do \xEDcone PrimeIcons.",required:!0},{name:"label",type:"string",default:"''",description:"Texto abaixo do \xEDcone.",required:!0},{name:"tileClick",type:"EventEmitter<MouseEvent>",default:"\u2014",description:"Evento de clique no tile."},{name:"disabled",type:"boolean",default:"false",description:"Desabilita o tile."}]}static{this.\u0275fac=function(p){return new(p||r)}}static{this.\u0275cmp=s({type:r,selectors:[["app-portal-templates-page"]],standalone:!0,features:[d],decls:78,vars:14,consts:[[2,"display","flex","align-items","center","gap","12px","margin-bottom","8px"],[1,"docs-page-title",2,"margin-bottom","0"],[1,"badge","badge--new"],[1,"docs-page-description"],[1,"font-mono"],[1,"docs-section"],["language","html",3,"code"],["language","typescript",3,"code"],[2,"margin-top","16px"],[3,"props"]],template:function(p,a){p&1&&(i(0,"div")(1,"div",0)(2,"h1",1),t(3,"Portal Templates"),e(),i(4,"span",2),t(5,"v1.1"),e()(),i(6,"p",3),t(7," Templates de layout completos para os Portais Klini: Benefici\xE1rio, M\xE9dico, Corretor e TI Suporte. Cinco componentes de alto n\xEDvel que implementam o padr\xE3o visual definido no Figma "),i(8,"code",4),t(9,"HQ0rZENIkdivRbUxHSlaK9"),e(),t(10," (Portais Klini). "),e(),i(11,"div",5)(12,"h2"),t(13,"kln-portal-shell"),e(),i(14,"p"),t(15," Layout completo de portal: header + ng-content + footer em uma \xFAnica tag. \xC9 a forma mais r\xE1pida de montar uma tela de portal Klini. "),e(),n(16,"app-code-block",6)(17,"app-code-block",7),i(18,"div",8),n(19,"app-props-table",9),e()(),i(20,"div",5)(21,"h2"),t(22,"kln-portal-header"),e(),i(23,"p"),t(24," Header do portal com barra gradiente teal, sauda\xE7\xE3o personalizada e avatar do usu\xE1rio. Baseado em "),i(25,"code",4),t(26,"p-toolbar"),e(),t(27,". "),e(),n(28,"app-code-block",6),i(29,"div",8),n(30,"app-props-table",9),e()(),i(31,"div",5)(32,"h2"),t(33,"kln-portal-footer"),e(),i(34,"p"),t(35," Rodap\xE9 com logo Klini Sa\xFAde e n\xFAmero de registro ANS. Baseado em "),i(36,"code",4),t(37,"p-toolbar"),e(),t(38,". "),e(),n(39,"app-code-block",6),i(40,"div",8),n(41,"app-props-table",9),e()(),i(42,"div",5)(43,"h2"),t(44,"kln-portal-login"),e(),i(45,"p"),t(46," Tela de login completa. Suporta login por CPF (padr\xE3o Benefici\xE1rio/TI), matr\xEDcula (Corretor) ou outro formato via "),i(47,"code",4),t(48,"loginMask"),e(),t(49,". Baseado em "),i(50,"code",4),t(51,"p-card"),e(),t(52,". "),e(),n(53,"app-code-block",6)(54,"app-code-block",7),i(55,"div",8),n(56,"app-props-table",9),e()(),i(57,"div",5)(58,"h2"),t(59,"kln-service-tile"),e(),i(60,"p"),t(61," Tile de servi\xE7o para grids de a\xE7\xF5es do portal do Benefici\xE1rio. \xCDcone + label em formato de card clic\xE1vel. Baseado em "),i(62,"code",4),t(63,"p-button"),e(),t(64,". "),e(),n(65,"app-code-block",6),i(66,"div",8),n(67,"app-props-table",9),e()(),i(68,"div",5)(69,"h2"),t(70,"Exemplo completo \u2014 Portal do Benefici\xE1rio"),e(),n(71,"app-code-block",6),e(),i(72,"div",5)(73,"h2"),t(74,"Variante \u2014 Portal do Corretor (matr\xEDcula)"),e(),i(75,"p"),t(76,'O Portal do Corretor usa matr\xEDcula num\xE9rica em vez de CPF e n\xE3o exibe o link "Primeiro acesso".'),e(),n(77,"app-code-block",6),e()()),p&2&&(o(16),l("code",a.shellHtml),o(),l("code",a.shellTs),o(2),l("props",a.shellProps),o(9),l("code",a.headerHtml),o(2),l("props",a.headerProps),o(9),l("code",a.footerHtml),o(2),l("props",a.footerProps),o(12),l("code",a.loginHtml),o(),l("code",a.loginTs),o(2),l("props",a.loginProps),o(9),l("code",a.tileHtml),o(2),l("props",a.tileProps),o(4),l("code",a.fullExample),o(6),l("code",a.corretorLogin))},dependencies:[c,m],encapsulation:2,changeDetection:0})}}return r})();export{h as PortalTemplatesPageComponent};
