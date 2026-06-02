import{a as c}from"./chunk-6RXJHZRI.js";import{a as m}from"./chunk-BCJF3KZG.js";import{Bb as o,Cb as e,Db as s,Xb as t,Ya as i,ec as l,fa as d,rb as a}from"./chunk-WNNFWGPB.js";var g=(()=>{class r{constructor(){this.severitiesCode=`import { KlnToastService } from '@klini-saude/ds';

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
}`,this.props=[{name:"position",type:"KlnToastPosition",default:"'top-right'",description:"Posi\xE7\xE3o na tela: 'top-right' | 'top-left' | 'top-center' | 'bottom-right' | 'bottom-left' | 'bottom-center'."},{name:"key",type:"string",default:"''",description:"Chave para identificar este container \u2014 use quando h\xE1 m\xFAltiplos <kln-toast> no app."},{name:"life",type:"number",default:"3000",description:"Dura\xE7\xE3o padr\xE3o em milissegundos."},{name:"baseZIndex",type:"number",default:"0",description:"Z-index base."},{name:"preventOpenDuplicates",type:"boolean",default:"false",description:"Impede abrir toasts duplicados (mesmo key+summary)."}]}static{this.\u0275fac=function(p){return new(p||r)}}static{this.\u0275cmp=d({type:r,selectors:[["app-toast-page"]],standalone:!0,features:[l],decls:50,vars:6,consts:[[2,"display","flex","align-items","center","gap","12px","margin-bottom","8px"],[1,"docs-page-title",2,"margin-bottom","0"],[1,"badge","badge--version"],[1,"docs-page-description"],[1,"font-mono"],[1,"docs-section"],["language","typescript",3,"code"],["language","html",3,"code"],[3,"props"]],template:function(p,n){p&1&&(o(0,"div")(1,"div",0)(2,"h1",1),t(3,"Toast"),e(),o(4,"span",2),t(5,"kln-toast"),e(),o(6,"span",2),t(7,"KlnToastService"),e()(),o(8,"p",3),t(9," Notifica\xE7\xF5es tempor\xE1rias no canto da tela. Use "),o(10,"code",4),t(11,"KlnToastService"),e(),t(12," para disparar toasts programaticamente a partir de qualquer componente. Requer "),o(13,"code",4),t(14,"MessageService"),e(),t(15," no providers do app (j\xE1 inclu\xEDdo via appConfig do DS). "),e(),o(16,"div",5)(17,"h2"),t(18,"Severidades"),e(),o(19,"p"),t(20,"Quatro severidades dispon\xEDveis: success, info, warn e error. Use "),o(21,"code",4),t(22,"KlnToastService"),e(),t(23," para disparar programaticamente."),e(),s(24,"app-code-block",6),e(),o(25,"div",5)(26,"h2"),t(27,"Posi\xE7\xF5es"),e(),s(28,"app-code-block",7),e(),o(29,"div",5)(30,"h2"),t(31,"Toast fixo (sticky)"),e(),o(32,"p"),t(33,"Use "),o(34,"code",4),t(35,"sticky: true"),e(),t(36," para toasts que n\xE3o somem automaticamente \u2014 o usu\xE1rio precisa fechar."),e(),s(37,"app-code-block",6),e(),o(38,"div",5)(39,"h2"),t(40,"M\xFAltiplos toasts"),e(),s(41,"app-code-block",6),e(),o(42,"div",5)(43,"h2"),t(44,"API do KlnToastService"),e(),s(45,"app-code-block",6),e(),o(46,"div",5)(47,"h2"),t(48,"Props \u2014 kln-toast"),e(),s(49,"app-props-table",8),e()()),p&2&&(i(24),a("code",n.severitiesCode),i(4),a("code",n.positionsCode),i(9),a("code",n.stickyCode),i(4),a("code",n.multipleCode),i(4),a("code",n.serviceCode),i(4),a("props",n.props))},dependencies:[c,m],encapsulation:2,changeDetection:0})}}return r})();export{g as ToastPageComponent};
