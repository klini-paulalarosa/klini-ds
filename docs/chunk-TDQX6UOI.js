import{a as k}from"./chunk-QLSI2SDP.js";import{J as g,K as m}from"./chunk-LTHARNUE.js";import"./chunk-KJZGQ55U.js";import"./chunk-FT6GD3TA.js";import"./chunk-4YRY4IP2.js";import"./chunk-ZD2XKJZA.js";import{a as v}from"./chunk-ZKNKG7AO.js";import"./chunk-I745CSUF.js";import"./chunk-PUHRAYU7.js";import{Db as o,Eb as e,Fb as n,Nb as r,Zb as t,_a as a,da as p,fc as b,gc as f,ha as u,tb as s}from"./chunk-VHGF37WI.js";var P=(()=>{class d{constructor(){this.toast=p(m),this.severitiesCode=`import { KlnToastService } from '@klini-saude/ds';

private readonly toast = inject(KlnToastService);

// Success
this.toast.show({
  severity: 'success',
  summary: 'Consulta confirmada',
  detail: 'Agendamento para 15/06/2026 \xE0s 14h30 confirmado.',
});

// Error
this.toast.show({
  severity: 'error',
  summary: 'Erro ao salvar',
  detail: 'N\xE3o foi poss\xEDvel salvar os dados.',
});`,this.positionsCode=`<!-- No template principal do app (uma vez por posi\xE7\xE3o) -->
<kln-toast position="top-right" />    <!-- padr\xE3o -->
<kln-toast position="top-left" />
<kln-toast position="top-center" />
<kln-toast position="bottom-right" />
<kln-toast position="bottom-left" />
<kln-toast position="bottom-center" />

<!-- Para m\xFAltiplas posi\xE7\xF5es, use key para diferenciar -->
<kln-toast position="top-right"    key="success-toast" />
<kln-toast position="bottom-center" key="error-toast" />`,this.stickyCode=`this.toast.show({
  severity: 'warn',
  summary: 'A\xE7\xE3o necess\xE1ria',
  detail: 'Documentos pendentes para regulariza\xE7\xE3o do plano.',
  sticky: true,  // n\xE3o some automaticamente
});`,this.multipleCode=`// Disparar v\xE1rios em sequ\xEAncia
this.toast.show({ severity: 'success', summary: 'Passo 1', detail: 'Dados salvos.' });
this.toast.show({ severity: 'info',    summary: 'Passo 2', detail: 'Processando...' });
this.toast.show({ severity: 'success', summary: 'Pronto!',  detail: 'Cadastro finalizado.' });`,this.serviceCode=`// KlnToastMessage interface
export interface KlnToastMessage {
  severity: 'success' | 'info' | 'warn' | 'error';
  summary: string;       // T\xEDtulo do toast
  detail?: string;       // Corpo da mensagem
  life?: number;         // Dura\xE7\xE3o em ms (padr\xE3o: 3000)
  sticky?: boolean;      // N\xE3o some automaticamente
  key?: string;          // Key do <kln-toast> alvo
  closable?: boolean;    // Bot\xE3o de fechar (padr\xE3o: true)
  data?: unknown;        // Dados extras
}

// KlnToastService m\xE9todos
class KlnToastService {
  show(msg: KlnToastMessage): void;
  clear(key?: string): void;     // Limpa todos ou por key
}`,this.props=[{name:"position",type:"KlnToastPosition",default:"'top-right'",description:"Posi\xE7\xE3o na tela: 'top-right' | 'top-left' | 'top-center' | 'bottom-right' | 'bottom-left' | 'bottom-center'."},{name:"key",type:"string",default:"''",description:"Chave para identificar este container \u2014 use quando h\xE1 m\xFAltiplos <kln-toast> no app."},{name:"life",type:"number",default:"3000",description:"Dura\xE7\xE3o padr\xE3o em milissegundos."},{name:"baseZIndex",type:"number",default:"0",description:"Z-index base."},{name:"preventOpenDuplicates",type:"boolean",default:"false",description:"Impede abrir toasts duplicados (mesmo key+summary)."}]}showSuccess(){this.toast.show({severity:"success",summary:"Consulta confirmada",detail:"Agendamento para 15/06/2026 \xE0s 14h30 confirmado.",key:"docs-toast"})}showInfo(){this.toast.show({severity:"info",summary:"Processando autoriza\xE7\xE3o",detail:"Seu pedido est\xE1 sendo analisado pela operadora.",key:"docs-toast"})}showWarn(){this.toast.show({severity:"warn",summary:"Car\xEAncia ativa",detail:"Procedimento coberto ap\xF3s 30 dias.",key:"docs-toast"})}showError(){this.toast.show({severity:"error",summary:"Erro ao salvar",detail:"N\xE3o foi poss\xEDvel salvar os dados do benefici\xE1rio.",key:"docs-toast"})}showSticky(){this.toast.show({severity:"warn",summary:"A\xE7\xE3o necess\xE1ria",detail:"Documentos pendentes para regulariza\xE7\xE3o do plano.",sticky:!0,key:"docs-toast"})}static{this.\u0275fac=function(c){return new(c||d)}}static{this.\u0275cmp=u({type:d,selectors:[["app-toast-page"]],standalone:!0,features:[b([m]),f],decls:72,vars:6,consts:[["position","top-right","key","docs-toast"],[2,"display","flex","align-items","center","gap","12px","margin-bottom","8px"],[1,"docs-page-title",2,"margin-bottom","0"],[1,"badge","badge--version"],[1,"docs-page-description"],[1,"font-mono"],[1,"docs-section"],[2,"display","flex","flex-wrap","wrap","gap","10px","padding","24px","border","1px solid var(--docs-border)","border-radius","8px","background","#fff"],[1,"toast-demo-btn","toast-demo-btn--success",3,"click"],[1,"pi","pi-check-circle"],[1,"toast-demo-btn","toast-demo-btn--info",3,"click"],[1,"pi","pi-info-circle"],[1,"toast-demo-btn","toast-demo-btn--warn",3,"click"],[1,"pi","pi-exclamation-triangle"],[1,"toast-demo-btn","toast-demo-btn--error",3,"click"],[1,"pi","pi-times-circle"],[1,"toast-demo-btn","toast-demo-btn--sticky",3,"click"],[1,"pi","pi-lock"],["language","typescript",3,"code"],["language","html",3,"code"],[3,"props"]],template:function(c,i){c&1&&(n(0,"kln-toast",0),o(1,"div")(2,"div",1)(3,"h1",2),t(4,"Toast"),e(),o(5,"span",3),t(6,"kln-toast"),e(),o(7,"span",3),t(8,"KlnToastService"),e()(),o(9,"p",4),t(10," Notifica\xE7\xF5es tempor\xE1rias no canto da tela. Use "),o(11,"code",5),t(12,"KlnToastService"),e(),t(13," para disparar toasts programaticamente a partir de qualquer componente. Requer "),o(14,"code",5),t(15,"MessageService"),e(),t(16," no providers do app (j\xE1 inclu\xEDdo via appConfig do DS). "),e(),o(17,"div",6)(18,"h2"),t(19,"Demo interativo"),e(),o(20,"p"),t(21,"Clique nos bot\xF5es para ver os toasts em a\xE7\xE3o nesta pr\xF3pria p\xE1gina."),e(),o(22,"div",7)(23,"button",8),r("click",function(){return i.showSuccess()}),n(24,"i",9),t(25," Success "),e(),o(26,"button",10),r("click",function(){return i.showInfo()}),n(27,"i",11),t(28," Info "),e(),o(29,"button",12),r("click",function(){return i.showWarn()}),n(30,"i",13),t(31," Warning "),e(),o(32,"button",14),r("click",function(){return i.showError()}),n(33,"i",15),t(34," Error "),e(),o(35,"button",16),r("click",function(){return i.showSticky()}),n(36,"i",17),t(37," Sticky "),e()()(),o(38,"div",6)(39,"h2"),t(40,"Severidades"),e(),o(41,"p"),t(42,"Quatro severidades dispon\xEDveis: success, info, warn e error. Use "),o(43,"code",5),t(44,"KlnToastService"),e(),t(45," para disparar programaticamente."),e(),n(46,"app-code-block",18),e(),o(47,"div",6)(48,"h2"),t(49,"Posi\xE7\xF5es"),e(),n(50,"app-code-block",19),e(),o(51,"div",6)(52,"h2"),t(53,"Toast fixo (sticky)"),e(),o(54,"p"),t(55,"Use "),o(56,"code",5),t(57,"sticky: true"),e(),t(58," para toasts que n\xE3o somem automaticamente \u2014 o usu\xE1rio precisa fechar."),e(),n(59,"app-code-block",18),e(),o(60,"div",6)(61,"h2"),t(62,"M\xFAltiplos toasts"),e(),n(63,"app-code-block",18),e(),o(64,"div",6)(65,"h2"),t(66,"API do KlnToastService"),e(),n(67,"app-code-block",18),e(),o(68,"div",6)(69,"h2"),t(70,"Props \u2014 kln-toast"),e(),n(71,"app-props-table",20),e()()),c&2&&(a(46),s("code",i.severitiesCode),a(4),s("code",i.positionsCode),a(9),s("code",i.stickyCode),a(4),s("code",i.multipleCode),a(4),s("code",i.serviceCode),a(4),s("props",i.props))},dependencies:[k,v,g],styles:[".toast-demo-btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:6px;padding:8px 16px;border-radius:6px;border:none;font-size:13px;font-weight:600;font-family:inherit;cursor:pointer;transition:all .15s;outline:none}.toast-demo-btn[_ngcontent-%COMP%]:focus-visible{box-shadow:0 0 0 2px var(--docs-accent)}.toast-demo-btn--success[_ngcontent-%COMP%]{background:#dcfce7;color:#15803d}.toast-demo-btn--success[_ngcontent-%COMP%]:hover{background:#bbf7d0}.toast-demo-btn--info[_ngcontent-%COMP%]{background:#dbeafe;color:#1d4ed8}.toast-demo-btn--info[_ngcontent-%COMP%]:hover{background:#bfdbfe}.toast-demo-btn--warn[_ngcontent-%COMP%]{background:#fef9c3;color:#a16207}.toast-demo-btn--warn[_ngcontent-%COMP%]:hover{background:#fef08a}.toast-demo-btn--error[_ngcontent-%COMP%]{background:#fee2e2;color:#b91c1c}.toast-demo-btn--error[_ngcontent-%COMP%]:hover{background:#fecaca}.toast-demo-btn--sticky[_ngcontent-%COMP%]{background:var(--docs-brand-soft);color:var(--docs-accent)}.toast-demo-btn--sticky[_ngcontent-%COMP%]:hover{background:var(--docs-brand-surface)}"],changeDetection:0})}}return d})();export{P as ToastPageComponent};
