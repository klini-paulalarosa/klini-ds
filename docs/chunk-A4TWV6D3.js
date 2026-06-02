import{a as S}from"./chunk-KR4SXHLK.js";import{a as x}from"./chunk-6RXJHZRI.js";import{D as g,wa as C}from"./chunk-ZMPL4K3C.js";import"./chunk-4IL3UCKX.js";import{ha as m}from"./chunk-W4FWUOBX.js";import"./chunk-NMGI7OHJ.js";import"./chunk-BTGLL7MP.js";import"./chunk-4LWZMJDI.js";import"./chunk-BCJF3KZG.js";import{Bb as t,Cb as n,Db as l,Lb as u,Xb as e,Ya as p,Za as s,dc as f,ec as v,fa as d,rb as c}from"./chunk-WNNFWGPB.js";var _=(()=>{class i{constructor(o){this.confirmService=o,this.code1=`<kln-confirm-popup />
<kln-button
  label="Cancelar consulta"
  severity="danger"
  (onClick)="confirmarCancelamento($event)"
/>`,this.codeService=`// providers: [ConfirmationService]
constructor(private confirmService: ConfirmationService) {}

confirmarCancelamento(event: Event) {
  this.confirmService.confirm({
    target: event.target as EventTarget,
    message: 'Deseja cancelar a consulta de Cardiologia?',
    icon: 'pi pi-exclamation-triangle',
    acceptLabel: 'Sim, cancelar',
    rejectLabel: 'N\xE3o',
    accept: () => console.log('Consulta cancelada'),
  });
}`,this.props=[{name:"styleClass",type:"string",default:"''",description:"Classes CSS adicionais para o popup."}]}confirmarCancelamento(o){this.confirmService.confirm({target:o.target,message:"Deseja cancelar a consulta de Cardiologia agendada para 15/07?",icon:"pi pi-exclamation-triangle",acceptLabel:"Sim, cancelar",rejectLabel:"N\xE3o",accept:()=>console.log("Consulta cancelada"),reject:()=>console.log("Opera\xE7\xE3o cancelada")})}static{this.\u0275fac=function(a){return new(a||i)(s(m))}}static{this.\u0275cmp=d({type:i,selectors:[["app-confirm-popup-page"]],standalone:!0,features:[f([m]),v],decls:39,vars:3,consts:[[2,"display","flex","align-items","center","gap","12px","margin-bottom","8px"],[1,"docs-page-title",2,"margin-bottom","0"],[1,"badge","badge--version"],[1,"docs-page-description"],[1,"font-mono"],[1,"docs-section"],[3,"code"],["preview","",2,"padding","24px"],["label","Cancelar consulta","severity","danger","icon","pi pi-times",3,"onClick"],["preview","",2,"padding","8px"],[2,"font-size","13px","color","var(--docs-text-muted)","margin","0"],[3,"props"]],template:function(a,r){a&1&&(t(0,"div")(1,"div",0)(2,"h1",1),e(3,"ConfirmPopup"),n(),t(4,"span",2),e(5,"kln-confirm-popup"),n()(),t(6,"p",3),e(7," Popup de confirma\xE7\xE3o inline ancorado a um elemento. Wrapper sobre "),t(8,"code",4),e(9,"p-confirmpopup"),n(),e(10," do PrimeNG. Usado para cancelar consultas ou revogar autoriza\xE7\xF5es sem abrir um dialog completo. "),n(),t(11,"div",5)(12,"h2"),e(13,"Cancelar consulta"),n(),t(14,"p"),e(15,"Clique no bot\xE3o para abrir o popup de confirma\xE7\xE3o inline."),n(),t(16,"app-component-preview",6)(17,"div",7),l(18,"kln-confirm-popup"),t(19,"kln-button",8),u("onClick",function(E){return r.confirmarCancelamento(E)}),n()()()(),t(20,"div",5)(21,"h2"),e(22,"Como usar"),n(),t(23,"p"),e(24,"O componente requer "),t(25,"code",4),e(26,"ConfirmationService"),n(),e(27," no provider e o m\xE9todo "),t(28,"code",4),e(29,"confirm()"),n(),e(30," para disparar o popup."),n(),t(31,"app-component-preview",6)(32,"div",9)(33,"p",10),e(34,"Veja o c\xF3digo de exemplo ao lado."),n()()()(),t(35,"div",5)(36,"h2"),e(37,"Props"),n(),l(38,"app-props-table",11),n()()),a&2&&(p(16),c("code",r.code1),p(15),c("code",r.codeService),p(7),c("props",r.props))},dependencies:[C,g,S,x],encapsulation:2,changeDetection:0})}}return i})();export{_ as ConfirmPopupPageComponent};
