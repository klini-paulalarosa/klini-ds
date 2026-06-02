import{a as y}from"./chunk-GUT5IV3P.js";import{a as f}from"./chunk-QLSI2SDP.js";import{aa as C}from"./chunk-LTHARNUE.js";import{d as h,f as x,h as b}from"./chunk-KJZGQ55U.js";import"./chunk-FT6GD3TA.js";import"./chunk-4YRY4IP2.js";import"./chunk-ZD2XKJZA.js";import"./chunk-ZKNKG7AO.js";import"./chunk-I745CSUF.js";import"./chunk-PUHRAYU7.js";import{Db as t,Eb as e,Fb as c,Zb as o,_a as n,cc as s,dc as m,ec as p,gc as v,ha as u,tb as r}from"./chunk-VHGF37WI.js";var k=(()=>{class l{constructor(){this.observacao="",this.laudo="",this.motivo="",this.basicCode=`<kln-textarea
  [(ngModel)]="observacao"
  label="Observacoes clinicas"
  placeholder="Descreva o quadro clinico..."
  [rows]="4"
/>`,this.autoResizeCode=`<kln-textarea
  [(ngModel)]="laudo"
  label="Laudo medico"
  [autoResize]="true"
  [rows]="3"
  hint="O campo cresce conforme necessario"
/>`,this.maxLengthCode=`<kln-textarea
  [(ngModel)]="motivo"
  label="Motivo da solicitacao"
  [rows]="3"
  [maxLength]="300"
  [hint]="motivo.length + ' / 300 caracteres'"
/>`,this.statesCode=`<!-- Com erro -->
<kln-textarea
  label="Campo com erro"
  errorMessage="O campo de observacoes e obrigatorio."
/>

<!-- Desabilitado -->
<kln-textarea
  [ngModel]="'Acesso bloqueado.'"
  label="Campo desabilitado"
  [disabled]="true"
/>`,this.props=[{name:"label",type:"string",default:"''",description:"Label exibido acima do campo."},{name:"placeholder",type:"string",default:"''",description:"Texto placeholder quando vazio."},{name:"rows",type:"number",default:"4",description:"Numero de linhas visiveis inicialmente."},{name:"autoResize",type:"boolean",default:"false",description:"Expande o campo automaticamente ao digitar."},{name:"maxLength",type:"number",default:"null",description:"Limite maximo de caracteres (nativo HTML)."},{name:"hint",type:"string",default:"''",description:"Texto auxiliar abaixo do campo (substituido pelo errorMessage se houver erro)."},{name:"errorMessage",type:"string",default:"''",description:"Mensagem de erro \u2014 coloca o campo em estado invalido."},{name:"disabled",type:"boolean",default:"false",description:"Desabilita o campo."},{name:"styleClass",type:"string",default:"''",description:"Classes CSS adicionais no textarea."},{name:"valueChange",type:"EventEmitter<string>",default:"\u2014",description:"Emite o valor ao digitar. Suporta ngModel."}]}static{this.\u0275fac=function(d){return new(d||l)}}static{this.\u0275cmp=u({type:l,selectors:[["app-textarea-page"]],standalone:!0,features:[v],decls:55,vars:19,consts:[[2,"display","flex","align-items","center","gap","12px","margin-bottom","8px"],[1,"docs-page-title",2,"margin-bottom","0"],[1,"badge","badge--version"],[1,"docs-page-description"],[1,"font-mono"],[1,"docs-section"],[3,"code"],["preview","",2,"width","100%","max-width","480px"],["label","Observacoes clinicas","placeholder","Descreva o quadro clinico do paciente...",3,"ngModelChange","ngModel","rows"],["label","Laudo medico","placeholder","Digite o laudo \u2014 o campo se expande automaticamente...","hint","O campo cresce conforme necessario",3,"ngModelChange","ngModel","autoResize","rows"],["label","Motivo da solicitacao","placeholder","Descreva o motivo da solicitacao de autorizacao...",3,"ngModelChange","ngModel","rows","maxLength","hint"],["preview","",2,"display","flex","flex-direction","column","gap","16px","width","100%","max-width","480px"],["label","Campo com erro","placeholder","Campo obrigatorio...","errorMessage","O campo de observacoes e obrigatorio para autorizacao.",3,"ngModel","rows"],["label","Campo desabilitado",3,"ngModel","rows","disabled"],[3,"props"]],template:function(d,a){d&1&&(t(0,"div")(1,"div",0)(2,"h1",1),o(3,"Textarea"),e(),t(4,"span",2),o(5,"kln-textarea"),e()(),t(6,"p",3),o(7," Area de texto multilinha com label, hint, validacao e redimensionamento automatico. Implementa Control Value Accessor \u2014 compativel com "),t(8,"code",4),o(9,"ngModel"),e(),o(10,". Wrapper sobre "),t(11,"code",4),o(12,"pTextarea"),e(),o(13," do PrimeNG. "),e(),t(14,"div",5)(15,"h2"),o(16,"Basico"),e(),t(17,"p"),o(18,"Campo simples com label e placeholder."),e(),t(19,"app-component-preview",6)(20,"div",7)(21,"kln-textarea",8),p("ngModelChange",function(i){return m(a.observacao,i)||(a.observacao=i),i}),e()()()(),t(22,"div",5)(23,"h2"),o(24,"AutoResize"),e(),t(25,"p"),o(26,"Com "),t(27,"code",4),o(28,'[autoResize]="true"'),e(),o(29," o campo cresce conforme o conteudo digitado."),e(),t(30,"app-component-preview",6)(31,"div",7)(32,"kln-textarea",9),p("ngModelChange",function(i){return m(a.laudo,i)||(a.laudo=i),i}),e()()()(),t(33,"div",5)(34,"h2"),o(35,"Limite de caracteres"),e(),t(36,"p"),o(37,"Use "),t(38,"code",4),o(39,"[maxLength]"),e(),o(40," para limitar a entrada e mostrar contador."),e(),t(41,"app-component-preview",6)(42,"div",7)(43,"kln-textarea",10),p("ngModelChange",function(i){return m(a.motivo,i)||(a.motivo=i),i}),e()()()(),t(44,"div",5)(45,"h2"),o(46,"Estados: erro e desabilitado"),e(),t(47,"app-component-preview",6)(48,"div",11),c(49,"kln-textarea",12)(50,"kln-textarea",13),e()()(),t(51,"div",5)(52,"h2"),o(53,"Props"),e(),c(54,"app-props-table",14),e()()),d&2&&(n(19),r("code",a.basicCode),n(2),s("ngModel",a.observacao),r("rows",4),n(9),r("code",a.autoResizeCode),n(2),s("ngModel",a.laudo),r("autoResize",!0)("rows",3),n(9),r("code",a.maxLengthCode),n(2),s("ngModel",a.motivo),r("rows",3)("maxLength",300)("hint",a.motivo.length+" / 300 caracteres"),n(4),r("code",a.statesCode),n(2),r("ngModel","")("rows",2),n(),r("ngModel","Acesso bloqueado pelo administrador do plano.")("rows",2)("disabled",!0),n(4),r("props",a.props))},dependencies:[C,b,h,x,y,f],encapsulation:2,changeDetection:0})}}return l})();export{k as TextareaPageComponent};
