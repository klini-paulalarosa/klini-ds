import{a as d}from"./chunk-BCJF3KZG.js";import{Bb as o,Cb as t,Db as a,Xb as e,Ya as i,ec as l,fa as m,rb as n}from"./chunk-WNNFWGPB.js";var f=(()=>{class p{constructor(){this.npmrcCode=`# .npmrc (raiz do projeto)
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
/>`,this.migrateCode=`<!-- Antes (v1.x) -->
<klini-button label="Salvar" />
<klini-card [header]="'Paciente'" />

<!-- Depois (v2.0.0+) -->
<kln-button label="Salvar" />
<kln-card [header]="'Paciente'" />`}static{this.\u0275fac=function(s){return new(s||p)}}static{this.\u0275cmp=m({type:p,selectors:[["app-getting-started"]],standalone:!0,features:[l],decls:67,vars:8,consts:[[1,"docs-page-title"],[1,"docs-page-description"],[1,"docs-section"],[1,"font-mono"],["language","bash",3,"code"],[2,"margin-top","12px"],["language","scss",3,"code"],["language","typescript",3,"code"],["language","html",3,"code"],[1,"docs-section",2,"background","#fff8f0","border","1px solid #fde8c8","border-radius","8px","padding","20px"],[2,"border-bottom-color","#fde8c8","color","#92400e"],[1,"pi","pi-exclamation-triangle",2,"margin-right","8px","color","#f59e0b"]],template:function(s,r){s&1&&(o(0,"div")(1,"h1",0),e(2,"Instala\xE7\xE3o"),t(),o(3,"p",1),e(4," Guia passo a passo para adicionar o Klini DS a um projeto Angular 18. O pacote \xE9 hospedado no GitHub Packages e requer autentica\xE7\xE3o. "),t(),o(5,"div",2)(6,"h2"),e(7,"1. Configurar .npmrc"),t(),o(8,"p"),e(9," O pacote est\xE1 publicado no GitHub Packages. Crie ou edite o arquivo "),o(10,"code",3),e(11,".npmrc"),t(),e(12," na raiz do seu projeto: "),t(),a(13,"app-code-block",4),o(14,"p",5),e(15," A vari\xE1vel "),o(16,"code",3),e(17,"GITHUB_TOKEN"),t(),e(18," deve ter a permiss\xE3o "),o(19,"strong"),e(20,"read:packages"),t(),e(21,". Para projetos CI/CD, injete via secrets. "),t()(),o(22,"div",2)(23,"h2"),e(24,"2. Instalar o pacote"),t(),a(25,"app-code-block",4),o(26,"p",5),e(27," O pacote inclui PrimeNG 18, Chart.js 4 e todas as depend\xEAncias como peer dependencies \u2014 certifique-se de t\xEA-los instalados tamb\xE9m. "),t(),a(28,"app-code-block",4),t(),o(29,"div",2)(30,"h2"),e(31,"3. Importar estilos globais"),t(),o(32,"p"),e(33,"No seu "),o(34,"code",3),e(35,"styles.scss"),t(),e(36," global, adicione os imports necess\xE1rios:"),t(),a(37,"app-code-block",6),t(),o(38,"div",2)(39,"h2"),e(40,"4. Configurar o tema no app.config.ts"),t(),o(41,"p"),e(42," Use "),o(43,"code",3),e(44,"KlnPrime"),t(),e(45," como preset do PrimeNG. O tema aplica automaticamente as cores e tokens do Klini DS. "),t(),a(46,"app-code-block",7),t(),o(47,"div",2)(48,"h2"),e(49,"5. Usar o primeiro componente"),t(),o(50,"p"),e(51,"Importe o componente desejado e use no template:"),t(),a(52,"app-code-block",7)(53,"app-code-block",8),t(),o(54,"div",9)(55,"h2",10),a(56,"i",11),e(57," Breaking change \u2014 v2.0.0 "),t(),o(58,"p"),e(59," A partir da v2.0.0, todos os seletores foram migrados de "),o(60,"code",3),e(61,"klini-*"),t(),e(62," para "),o(63,"code",3),e(64,"kln-*"),t(),e(65,". Se voc\xEA vem da v1.x, substitua todos os seletores nos seus templates. "),t(),a(66,"app-code-block",8),t()()),s&2&&(i(13),n("code",r.npmrcCode),i(12),n("code",r.installCode),i(3),n("code",r.peersCode),i(9),n("code",r.stylesCode),i(9),n("code",r.appConfigCode),i(6),n("code",r.firstComponentTs),i(),n("code",r.firstComponentHtml),i(13),n("code",r.migrateCode))},dependencies:[d],encapsulation:2,changeDetection:0})}}return p})();export{f as GettingStartedComponent};
