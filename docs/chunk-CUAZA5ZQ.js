import{a as l}from"./chunk-ZKNKG7AO.js";import"./chunk-I745CSUF.js";import"./chunk-PUHRAYU7.js";import{Db as i,Eb as t,Fb as o,Zb as e,_a as n,gc as m,ha as d,tb as r}from"./chunk-VHGF37WI.js";var v=(()=>{class p{constructor(){this.npmrcCode=`# .npmrc (raiz do projeto)
@klini-saude:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=\${GITHUB_TOKEN}`,this.installCode="npm install @klini-saude/ds",this.peersCode="npm install @angular/core@18 @angular/common@18 primeng@18 chart.js@4 zone.js",this.stylesCode=`// styles.scss
@import 'primeng/resources/primeng.css';
@import 'primeicons/primeicons.css';

// Tokens SCSS do Klini DS (opcional \u2014 para usar as vars CSS diretamente)
// @import '@klini-saude/ds/tokens';`,this.appConfigCode=`// app.config.ts
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
};`,this.firstComponentTs=`// meu.component.ts
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
}`,this.firstComponentHtml=`<!-- meu.component.html -->
<kln-button
  label="Agendar consulta"
  severity="primary"
  icon="pi pi-calendar"
  (clicked)="handleClick()"
/>`,this.providersCode=`// app.config.ts \u2014 providers de servi\xE7o globais
import { MessageService, ConfirmationService } from 'primeng/api';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideAnimationsAsync(),
    providePrimeNG({ theme: { preset: KlnPrime } }),

    // \u26A0\uFE0F Necess\xE1rio para kln-toast e KlnToastService
    MessageService,

    // \u26A0\uFE0F Necess\xE1rio para kln-confirm-dialog e ConfirmPopup
    ConfirmationService,
  ],
};

// No template do app.component (uma vez por app):
// <kln-toast position="top-right" />
// <kln-confirm-dialog />`,this.migrateCode=`<!-- Antes (v1.x) -->
<klini-button label="Salvar" />
<klini-card [header]="'Paciente'" />

<!-- Depois (v2.0.0+) -->
<kln-button label="Salvar" />
<kln-card [header]="'Paciente'" />`}static{this.\u0275fac=function(s){return new(s||p)}}static{this.\u0275cmp=d({type:p,selectors:[["app-getting-started"]],standalone:!0,features:[m],decls:86,vars:9,consts:[[1,"docs-page-title"],[1,"docs-page-description"],[1,"docs-section"],[1,"font-mono"],["language","bash",3,"code"],[2,"margin-top","12px"],["language","scss",3,"code"],["language","typescript",3,"code"],[2,"margin-top","16px","padding","14px 16px","background","var(--docs-brand-soft)","border","1px solid var(--docs-accent)","border-radius","8px","font-size","13px","color","var(--docs-text-muted)"],[2,"color","var(--docs-accent)"],[1,"pi","pi-info-circle",2,"margin-right","6px"],[2,"margin","8px 0 0"],["language","html",3,"code"],[1,"docs-section",2,"background","#fff8f0","border","1px solid #fde8c8","border-radius","8px","padding","20px"],[2,"border-bottom-color","#fde8c8","color","#92400e"],[1,"pi","pi-exclamation-triangle",2,"margin-right","8px","color","#f59e0b"]],template:function(s,a){s&1&&(i(0,"div")(1,"h1",0),e(2,"Instala\xE7\xE3o"),t(),i(3,"p",1),e(4," Guia passo a passo para adicionar o Klini DS a um projeto Angular 18. O pacote \xE9 hospedado no GitHub Packages e requer autentica\xE7\xE3o. "),t(),i(5,"div",2)(6,"h2"),e(7,"1. Configurar .npmrc"),t(),i(8,"p"),e(9," O pacote est\xE1 publicado no GitHub Packages. Crie ou edite o arquivo "),i(10,"code",3),e(11,".npmrc"),t(),e(12," na raiz do seu projeto: "),t(),o(13,"app-code-block",4),i(14,"p",5),e(15," A vari\xE1vel "),i(16,"code",3),e(17,"GITHUB_TOKEN"),t(),e(18," deve ter a permiss\xE3o "),i(19,"strong"),e(20,"read:packages"),t(),e(21,". Para projetos CI/CD, injete via secrets. "),t()(),i(22,"div",2)(23,"h2"),e(24,"2. Instalar o pacote"),t(),o(25,"app-code-block",4),i(26,"p",5),e(27," O pacote inclui PrimeNG 18, Chart.js 4 e todas as depend\xEAncias como peer dependencies \u2014 certifique-se de t\xEA-los instalados tamb\xE9m. "),t(),o(28,"app-code-block",4),t(),i(29,"div",2)(30,"h2"),e(31,"3. Importar estilos globais"),t(),i(32,"p"),e(33,"No seu "),i(34,"code",3),e(35,"styles.scss"),t(),e(36," global, adicione os imports necess\xE1rios:"),t(),o(37,"app-code-block",6),t(),i(38,"div",2)(39,"h2"),e(40,"4. Configurar o tema no app.config.ts"),t(),i(41,"p"),e(42," Use "),i(43,"code",3),e(44,"KlnPrime"),t(),e(45," como preset do PrimeNG. O tema aplica automaticamente as cores e tokens do Klini DS. "),t(),o(46,"app-code-block",7),i(47,"div",8)(48,"strong",9),o(49,"i",10),e(50,"Providers de servi\xE7o "),t(),i(51,"p",11),e(52," Componentes que dependem de servi\xE7os globais precisam de providers adicionais: "),i(53,"code",3),e(54,"Toast"),t(),e(55," e "),i(56,"code",3),e(57,"ConfirmDialog"),t(),e(58," usam "),i(59,"code",3),e(60,"MessageService"),t(),e(61," e "),i(62,"code",3),e(63,"ConfirmationService"),t(),e(64," respectivamente. "),t()(),o(65,"app-code-block",7),t(),i(66,"div",2)(67,"h2"),e(68,"5. Usar o primeiro componente"),t(),i(69,"p"),e(70,"Importe o componente desejado e use no template:"),t(),o(71,"app-code-block",7)(72,"app-code-block",12),t(),i(73,"div",13)(74,"h2",14),o(75,"i",15),e(76," Breaking change \u2014 v2.0.0 "),t(),i(77,"p"),e(78," A partir da v2.0.0, todos os seletores foram migrados de "),i(79,"code",3),e(80,"klini-*"),t(),e(81," para "),i(82,"code",3),e(83,"kln-*"),t(),e(84,". Se voc\xEA vem da v1.x, substitua todos os seletores nos seus templates. "),t(),o(85,"app-code-block",12),t()()),s&2&&(n(13),r("code",a.npmrcCode),n(12),r("code",a.installCode),n(3),r("code",a.peersCode),n(9),r("code",a.stylesCode),n(9),r("code",a.appConfigCode),n(19),r("code",a.providersCode),n(6),r("code",a.firstComponentTs),n(),r("code",a.firstComponentHtml),n(13),r("code",a.migrateCode))},dependencies:[l],encapsulation:2,changeDetection:0})}}return p})();export{v as GettingStartedComponent};
