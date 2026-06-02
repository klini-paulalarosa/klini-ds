import{a as k}from"./chunk-GUT5IV3P.js";import{a as y}from"./chunk-QLSI2SDP.js";import{D as S,ea as x,fa as b}from"./chunk-LTHARNUE.js";import"./chunk-KJZGQ55U.js";import"./chunk-FT6GD3TA.js";import"./chunk-4YRY4IP2.js";import"./chunk-ZD2XKJZA.js";import"./chunk-ZKNKG7AO.js";import"./chunk-I745CSUF.js";import"./chunk-PUHRAYU7.js";import{$b as g,Db as i,Eb as e,Fb as s,Nb as m,Ob as f,Zb as t,_a as n,da as C,gc as E,ha as h,qb as d,tb as c,ub as p,yb as u}from"./chunk-VHGF37WI.js";function D(a,_){if(a&1&&(i(0,"span",15),t(1),e()),a&2){let r=f();p("color",r.resultMessage.includes("cancelada")?"#dc3545":"#198754"),n(),g(" ",r.resultMessage," ")}}function M(a,_){if(a&1&&(i(0,"span",15),t(1),e()),a&2){let r=f();p("color",r.authMessage.includes("enviada")?"#198754":"#6c757d"),n(),g(" ",r.authMessage," ")}}var B=(()=>{class a{constructor(){this.confirmService=C(x),this.resultMessage="",this.authMessage="",this.basicCode=`<!-- Template: kln-confirm-dialog deve estar presente -->
<kln-confirm-dialog />

<kln-button
  label="Cancelar Consulta"
  severity="danger"
  variant="outlined"
  (clicked)="confirmarCancelamento()" />

// Classe
private confirmService = inject(KlnConfirmService);

confirmarCancelamento(): void {
  this.confirmService.confirm({
    message: 'Deseja cancelar a consulta agendada para 20/06/2025?',
    header: 'Cancelar Consulta',
    accept: () => console.log('Consulta cancelada'),
    reject: () => console.log('A\xE7\xE3o cancelada'),
  });
}`,this.acceptRejectCode=`this.confirmService.confirm({
  message: 'Confirmar solicita\xE7\xE3o de autoriza\xE7\xE3o para resson\xE2ncia magn\xE9tica?',
  header: 'Solicitar Autoriza\xE7\xE3o',
  accept: () => {
    this.message = 'Solicita\xE7\xE3o enviada para an\xE1lise.';
  },
  reject: () => {
    this.message = 'Solicita\xE7\xE3o cancelada.';
  },
});`,this.customCode=`this.confirmService.confirm({
  message: 'Esta a\xE7\xE3o remover\xE1 o benefici\xE1rio Jo\xE3o Rosa do plano permanentemente.',
  header: 'Remover Benefici\xE1rio',
  accept: () => this.beneficiarioService.remover(id),
  reject: () => {},
});`,this.props=[{name:"key",type:"string",default:"''",description:"Chave para identificar o di\xE1logo quando h\xE1 m\xFAltiplos na p\xE1gina. Deve corresponder ao key usado no servi\xE7o."},{name:"styleClass",type:"string",default:"''",description:"Classes CSS adicionais no di\xE1logo."}],this.serviceProps=[{name:"message",type:"string",default:"\u2014",description:"Texto da mensagem de confirma\xE7\xE3o exibida ao usu\xE1rio."},{name:"header",type:"string",default:"\u2014",description:"T\xEDtulo do di\xE1logo."},{name:"accept",type:"() => void",default:"undefined",description:"Callback executado quando o usu\xE1rio confirma a a\xE7\xE3o."},{name:"reject",type:"() => void",default:"undefined",description:"Callback executado quando o usu\xE1rio rejeita a a\xE7\xE3o."}]}confirmarCancelamento(){this.confirmService.confirm({message:"Deseja cancelar a consulta agendada para 20/06/2025 com Dr. Marcos Oliveira?",header:"Cancelar Consulta",accept:()=>{this.resultMessage="Consulta cancelada com sucesso."},reject:()=>{this.resultMessage="A\xE7\xE3o mantida \u2014 consulta n\xE3o cancelada."}})}confirmarAutorizacao(){this.confirmService.confirm({message:"Confirmar solicita\xE7\xE3o de autoriza\xE7\xE3o para resson\xE2ncia magn\xE9tica?",header:"Solicitar Autoriza\xE7\xE3o",accept:()=>{this.authMessage="Solicita\xE7\xE3o enviada para an\xE1lise."},reject:()=>{this.authMessage="Solicita\xE7\xE3o cancelada."}})}confirmarRemocao(){this.confirmService.confirm({message:"Esta a\xE7\xE3o remover\xE1 o benefici\xE1rio Jo\xE3o Rosa do plano permanentemente. Deseja continuar?",header:"Remover Benefici\xE1rio",accept:()=>{this.resultMessage="Benefici\xE1rio removido."},reject:()=>{this.resultMessage="Remo\xE7\xE3o cancelada."}})}static{this.\u0275fac=function(l){return new(l||a)}}static{this.\u0275cmp=h({type:a,selectors:[["app-confirm-dialog-page"]],standalone:!0,features:[E],decls:53,vars:7,consts:[[2,"display","flex","align-items","center","gap","12px","margin-bottom","8px"],[1,"docs-page-title",2,"margin-bottom","0"],[1,"badge","badge--version"],[1,"docs-page-description"],[1,"font-mono"],["key","custom"],[1,"docs-section"],[3,"code"],["preview","",2,"display","flex","gap","12px","align-items","center","flex-wrap","wrap"],["label","Cancelar Consulta","severity","danger","variant","outlined",3,"clicked"],[2,"font-size","0.9rem",3,"color"],["label","Solicitar Autoriza\xE7\xE3o","severity","primary",3,"clicked"],["preview",""],["label","Remover Benefici\xE1rio","severity","danger",3,"clicked"],[3,"props"],[2,"font-size","0.9rem"]],template:function(l,o){l&1&&(i(0,"div")(1,"div",0)(2,"h1",1),t(3,"Confirm Dialog"),e(),i(4,"span",2),t(5,"kln-confirm-dialog"),e()(),i(6,"p",3),t(7," Di\xE1logo de confirma\xE7\xE3o imperativo para a\xE7\xF5es destrutivas ou irrevers\xEDveis. O componente "),i(8,"code",4),t(9,"kln-confirm-dialog"),e(),t(10," deve estar no template e o servi\xE7o "),i(11,"code",4),t(12,"KlnConfirmService"),e(),t(13," aciona o di\xE1logo programaticamente. Wrapper sobre "),i(14,"code",4),t(15,"p-confirmDialog"),e(),t(16," do PrimeNG. "),e(),s(17,"kln-confirm-dialog")(18,"kln-confirm-dialog",5),i(19,"div",6)(20,"h2"),t(21,"B\xE1sico"),e(),i(22,"p"),t(23,"Confirma\xE7\xE3o de cancelamento de consulta. O servi\xE7o \xE9 chamado no componente e o di\xE1logo aparece na tela."),e(),i(24,"app-component-preview",7)(25,"div",8)(26,"kln-button",9),m("clicked",function(){return o.confirmarCancelamento()}),e(),d(27,D,2,3,"span",10),e()()(),i(28,"div",6)(29,"h2"),t(30,"Com accept/reject"),e(),i(31,"p"),t(32,"Exiba uma mensagem de resultado de acordo com a escolha do usu\xE1rio."),e(),i(33,"app-component-preview",7)(34,"div",8)(35,"kln-button",11),m("clicked",function(){return o.confirmarAutorizacao()}),e(),d(36,M,2,3,"span",10),e()()(),i(37,"div",6)(38,"h2"),t(39,"Customizado"),e(),i(40,"p"),t(41,"Customize \xEDcone, labels dos bot\xF5es e mensagem para o contexto espec\xEDfico da a\xE7\xE3o."),e(),i(42,"app-component-preview",7)(43,"div",12)(44,"kln-button",13),m("clicked",function(){return o.confirmarRemocao()}),e()()()(),i(45,"div",6)(46,"h2"),t(47,"Props \u2014 kln-confirm-dialog"),e(),s(48,"app-props-table",14),e(),i(49,"div",6)(50,"h2"),t(51,"KlnConfirmService.confirm()"),e(),s(52,"app-props-table",14),e()()),l&2&&(n(24),c("code",o.basicCode),n(3),u(o.resultMessage?27:-1),n(6),c("code",o.acceptRejectCode),n(3),u(o.authMessage?36:-1),n(6),c("code",o.customCode),n(6),c("props",o.props),n(4),c("props",o.serviceProps))},dependencies:[b,S,k,y],encapsulation:2,changeDetection:0})}}return a})();export{B as ConfirmDialogPageComponent};
