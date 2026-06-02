import{a as _}from"./chunk-KR4SXHLK.js";import{a as k}from"./chunk-6RXJHZRI.js";import{D as x,R as y,a as T,b as C,c as S,d as f}from"./chunk-ZMPL4K3C.js";import"./chunk-4IL3UCKX.js";import"./chunk-W4FWUOBX.js";import"./chunk-NMGI7OHJ.js";import"./chunk-BTGLL7MP.js";import"./chunk-4LWZMJDI.js";import"./chunk-BCJF3KZG.js";import{Bb as e,Cb as t,Db as b,Lb as s,Xb as a,Ya as i,Yb as c,ac as u,bc as v,cc as E,ec as g,fa as m,rb as p}from"./chunk-WNNFWGPB.js";var F=(()=>{class o{constructor(){this.activeTab="0",this.basicCode=`<kln-tabs>
  <p-tablist>
    <p-tab value="0">Consultas</p-tab>
    <p-tab value="1">Atendimentos</p-tab>
    <p-tab value="2">Car\xEAncias</p-tab>
  </p-tablist>
  <p-tabpanels>
    <p-tabpanel value="0">Conte\xFAdo das consultas</p-tabpanel>
    <p-tabpanel value="1">Conte\xFAdo dos atendimentos</p-tabpanel>
    <p-tabpanel value="2">Conte\xFAdo das car\xEAncias</p-tabpanel>
  </p-tabpanels>
</kln-tabs>`,this.controlledCode=`<!-- Template -->
<kln-tabs [(activeTab)]="activeTab">
  <p-tablist>
    <p-tab value="0">Plano</p-tab>
    <p-tab value="1">Benefici\xE1rios</p-tab>
    <p-tab value="2">Documentos</p-tab>
  </p-tablist>
  <p-tabpanels>
    <p-tabpanel value="0">Dados do plano</p-tabpanel>
    <p-tabpanel value="1">Lista de benefici\xE1rios</p-tabpanel>
    <p-tabpanel value="2">Documentos do plano</p-tabpanel>
  </p-tabpanels>
</kln-tabs>

// Classe
activeTab = '0';`,this.props=[{name:"activeTab",type:"string | number",default:"0",description:"Valor da aba ativa. Suporta two-way binding com [(activeTab)]."},{name:"styleClass",type:"string",default:"''",description:"Classes CSS adicionais no elemento raiz."},{name:"(activeTabChange)",type:"EventEmitter<string | number>",default:"\u2014",description:"Emite o valor da nova aba quando o usu\xE1rio navega."}]}static{this.\u0275fac=function(l){return new(l||o)}}static{this.\u0275cmp=m({type:o,selectors:[["app-tabs-page"]],standalone:!0,features:[g],decls:76,vars:5,consts:[[2,"display","flex","align-items","center","gap","12px","margin-bottom","8px"],[1,"docs-page-title",2,"margin-bottom","0"],[1,"badge","badge--version"],[1,"docs-page-description"],[1,"font-mono"],[1,"docs-section"],[3,"code"],["preview",""],["value","0"],["value","1"],["value","2"],[2,"margin","0"],[2,"display","flex","gap","8px","margin-bottom","12px","flex-wrap","wrap"],["label","Ir para Plano","size","small","severity","secondary",3,"clicked"],["label","Ir para Benefici\xE1rios","size","small","severity","secondary",3,"clicked"],["label","Ir para Documentos","size","small","severity","secondary",3,"clicked"],[3,"activeTabChange","activeTab"],[2,"margin-top","8px","font-size","0.85rem","color","#666"],[3,"props"]],template:function(l,n){l&1&&(e(0,"div")(1,"div",0)(2,"h1",1),a(3,"Tabs"),t(),e(4,"span",2),a(5,"kln-tabs"),t()(),e(6,"p",3),a(7," Navega\xE7\xE3o por abas para organizar conte\xFAdo relacionado em se\xE7\xF5es separadas. Ideal para dashboards de benefici\xE1rios, hist\xF3rico de consultas e dados de plano. Wrapper sobre "),e(8,"code",4),a(9,"p-tabs"),t(),a(10," do PrimeNG 18. "),t(),e(11,"div",5)(12,"h2"),a(13,"B\xE1sico"),t(),e(14,"p"),a(15,"Tr\xEAs abas com conte\xFAdo de sa\xFAde. Use os elementos PrimeNG como filhos diretos."),t(),e(16,"app-component-preview",6)(17,"div",7)(18,"kln-tabs")(19,"p-tablist")(20,"p-tab",8),a(21,"Consultas"),t(),e(22,"p-tab",9),a(23,"Atendimentos"),t(),e(24,"p-tab",10),a(25,"Car\xEAncias"),t()(),e(26,"p-tabpanels")(27,"p-tabpanel",8)(28,"p",11),a(29,"3 consultas agendadas \xB7 Pr\xF3xima: 20/06/2025 \u2014 Cardiologia com Dr. Marcos Oliveira"),t()(),e(30,"p-tabpanel",9)(31,"p",11),a(32,"12 atendimentos no \xFAltimo trimestre \xB7 \xDAltimo: 05/05/2025 \u2014 Cl\xEDnico Geral"),t()(),e(33,"p-tabpanel",10)(34,"p",11),a(35,"Consultas: 0 dias restantes \xB7 Interna\xE7\xE3o: 145 dias \xB7 Parto: 260 dias"),t()()()()()()(),e(36,"div",5)(37,"h2"),a(38,"Aba ativa controlada"),t(),e(39,"p"),a(40,"Use "),e(41,"code",4),a(42,"[(activeTab)]"),t(),a(43," para controlar qual aba est\xE1 ativa programaticamente."),t(),e(44,"app-component-preview",6)(45,"div",7)(46,"div",12)(47,"kln-button",13),s("clicked",function(){return n.activeTab="0"}),t(),e(48,"kln-button",14),s("clicked",function(){return n.activeTab="1"}),t(),e(49,"kln-button",15),s("clicked",function(){return n.activeTab="2"}),t()(),e(50,"kln-tabs",16),E("activeTabChange",function(d){return v(n.activeTab,d)||(n.activeTab=d),d}),e(51,"p-tablist")(52,"p-tab",8),a(53,"Plano"),t(),e(54,"p-tab",9),a(55,"Benefici\xE1rios"),t(),e(56,"p-tab",10),a(57,"Documentos"),t()(),e(58,"p-tabpanels")(59,"p-tabpanel",8)(60,"p",11),a(61,"Klini Start PJ \xB7 ANS N\xBA 123456 \xB7 Vig\xEAncia: Jan/2025 a Dez/2025"),t()(),e(62,"p-tabpanel",9)(63,"p",11),a(64,"Titular: Paula Rosa \xB7 2 dependentes: Jo\xE3o Rosa, Maria Rosa"),t()(),e(65,"p-tabpanel",10)(66,"p",11),a(67,"Carteirinha digital, Ap\xF3lice, Rol de procedimentos ANS 2025"),t()()()(),e(68,"p",17),a(69,"Aba ativa: "),e(70,"code"),a(71),t()()()()(),e(72,"div",5)(73,"h2"),a(74,"Props"),t(),b(75,"app-props-table",18),t()()),l&2&&(i(16),p("code",n.basicCode),i(28),p("code",n.controlledCode),i(6),u("activeTab",n.activeTab),i(21),c(n.activeTab),i(4),p("props",n.props))},dependencies:[y,C,T,f,S,x,_,k],encapsulation:2,changeDetection:0})}}return o})();export{F as TabsPageComponent};
