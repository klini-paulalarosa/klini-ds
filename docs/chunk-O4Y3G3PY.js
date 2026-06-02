import{a as E}from"./chunk-KR4SXHLK.js";import{a as C}from"./chunk-6RXJHZRI.js";import{D as g,S as v}from"./chunk-ZMPL4K3C.js";import"./chunk-4IL3UCKX.js";import"./chunk-W4FWUOBX.js";import"./chunk-NMGI7OHJ.js";import"./chunk-BTGLL7MP.js";import"./chunk-4LWZMJDI.js";import"./chunk-BCJF3KZG.js";import{Bb as i,Cb as e,Db as p,Lb as u,Mb as b,Xb as n,Ya as a,ec as f,fa as s,ob as d,rb as o,wb as c}from"./chunk-WNNFWGPB.js";function y(l,h){if(l&1&&(i(0,"div",11),p(1,"kln-menu",8),e()),l&2){let r=b();a(),o("items",r.actionItems)}}var k=(()=>{class l{constructor(){this.menuVisible=!1,this.profileItems=[{label:"Meu Perfil",icon:"pi pi-user",command:()=>{}},{label:"Meu Plano",icon:"pi pi-id-card",command:()=>{}},{label:"Dependentes",icon:"pi pi-users",command:()=>{}},{label:"Configura\xE7\xF5es",icon:"pi pi-cog",command:()=>{}}],this.fullMenuItems=[{label:"Perfil",icon:"pi pi-user",command:()=>{}},{label:"Configura\xE7\xF5es",icon:"pi pi-cog",command:()=>{}},{separator:!0},{label:"Suporte",icon:"pi pi-question-circle",command:()=>{}},{separator:!0},{label:"Sair",icon:"pi pi-sign-out",command:()=>{}}],this.actionItems=[{label:"Ver detalhes",icon:"pi pi-eye",command:()=>{this.menuVisible=!1}},{label:"Editar",icon:"pi pi-pencil",command:()=>{this.menuVisible=!1}},{separator:!0},{label:"Cancelar consulta",icon:"pi pi-times",command:()=>{this.menuVisible=!1}}],this.inlineCode=`items: MenuItem[] = [
  { label: 'Meu Perfil',  icon: 'pi pi-user',    command: () => {} },
  { label: 'Meu Plano',   icon: 'pi pi-id-card', command: () => {} },
  { label: 'Dependentes', icon: 'pi pi-users',   command: () => {} },
];

<kln-menu [items]="items" />`,this.separatorCode=`items: MenuItem[] = [
  { label: 'Perfil',        icon: 'pi pi-user',           command: () => {} },
  { label: 'Configura\xE7\xF5es', icon: 'pi pi-cog',            command: () => {} },
  { separator: true },
  { label: 'Suporte',       icon: 'pi pi-question-circle',command: () => {} },
  { separator: true },
  { label: 'Sair',          icon: 'pi pi-sign-out',       command: () => {} },
];`,this.toggleCode=`<kln-button
  label="Menu de A\xE7\xF5es"
  icon="pi pi-ellipsis-v"
  (clicked)="menuVisible = !menuVisible" />

@if (menuVisible) {
  <kln-menu [items]="actionItems" />
}

// Classe
menuVisible = false;
actionItems: MenuItem[] = [
  { label: 'Ver detalhes', icon: 'pi pi-eye',    command: () => {} },
  { label: 'Editar',       icon: 'pi pi-pencil', command: () => {} },
  { separator: true },
  { label: 'Cancelar',     icon: 'pi pi-times',  command: () => {} },
];`,this.props=[{name:"items",type:"MenuItem[]",default:"[]",description:"Array de itens. Importar MenuItem de primeng/api."},{name:"popup",type:"boolean",default:"false",description:"Modo popup flutuante."},{name:"styleClass",type:"string",default:"''",description:"Classes CSS adicionais."}],this.menuItemProps=[{name:"label",type:"string",default:"undefined",description:"Texto do item de menu."},{name:"icon",type:"string",default:"undefined",description:"Classe PrimeIcons (ex: pi pi-user)."},{name:"command",type:"(event) => void",default:"undefined",description:"Callback ao clicar no item."},{name:"routerLink",type:"string | any[]",default:"undefined",description:"Rota Angular para navega\xE7\xE3o."},{name:"separator",type:"boolean",default:"false",description:"Renderiza divis\xF3ria em vez de item clic\xE1vel."},{name:"disabled",type:"boolean",default:"false",description:"Desabilita o item."},{name:"badge",type:"string",default:"undefined",description:"Badge exibido ao lado do item."}]}static{this.\u0275fac=function(m){return new(m||l)}}static{this.\u0275cmp=s({type:l,selectors:[["app-menu-page"]],standalone:!0,features:[f],decls:47,vars:8,consts:[[2,"display","flex","align-items","center","gap","12px","margin-bottom","8px"],[1,"docs-page-title",2,"margin-bottom","0"],[1,"badge","badge--version"],[1,"docs-page-description"],[1,"font-mono"],[1,"docs-section"],[3,"code"],["preview","",2,"max-width","240px"],[3,"items"],["preview",""],["label","Menu de A\xE7\xF5es","icon","pi pi-ellipsis-v","severity","secondary","variant","outlined",3,"clicked"],[2,"margin-top","8px","max-width","220px"],[3,"props"]],template:function(m,t){m&1&&(i(0,"div")(1,"div",0)(2,"h1",1),n(3,"Menu"),e(),i(4,"span",2),n(5,"kln-menu"),e()(),i(6,"p",3),n(7," Lista de navega\xE7\xE3o ou a\xE7\xF5es contextuais. Pode ser exibido inline ou como menu flutuante. Ideal para navega\xE7\xE3o lateral, menus de perfil e a\xE7\xF5es em tabelas. Wrapper sobre "),i(8,"code",4),n(9,"p-menu"),e(),n(10," do PrimeNG. "),e(),i(11,"div",5)(12,"h2"),n(13,"Lista fixa (inline)"),e(),i(14,"p"),n(15,"Menu inline est\xE1tico \u2014 ideal para navega\xE7\xE3o lateral e pain\xE9is de controle do portal."),e(),i(16,"app-component-preview",6)(17,"div",7),p(18,"kln-menu",8),e()()(),i(19,"div",5)(20,"h2"),n(21,"Com separadores"),e(),i(22,"p"),n(23,"Use "),i(24,"code",4),n(25,"separator: true"),e(),n(26," para agrupar itens relacionados."),e(),i(27,"app-component-preview",6)(28,"div",7),p(29,"kln-menu",8),e()()(),i(30,"div",5)(31,"h2"),n(32,"Exibi\xE7\xE3o condicional"),e(),i(33,"p"),n(34,"Toggle program\xE1tico do menu por um bot\xE3o."),e(),i(35,"app-component-preview",6)(36,"div",9)(37,"kln-button",10),u("clicked",function(){return t.menuVisible=!t.menuVisible}),e(),d(38,y,2,1,"div",11),e()()(),i(39,"div",5)(40,"h2"),n(41,"Props"),e(),p(42,"app-props-table",12),e(),i(43,"div",5)(44,"h2"),n(45,"MenuItem \u2014 principais campos"),e(),p(46,"app-props-table",12),e()()),m&2&&(a(16),o("code",t.inlineCode),a(2),o("items",t.profileItems),a(9),o("code",t.separatorCode),a(2),o("items",t.fullMenuItems),a(6),o("code",t.toggleCode),a(3),c(t.menuVisible?38:-1),a(4),o("props",t.props),a(4),o("props",t.menuItemProps))},dependencies:[v,g,E,C],encapsulation:2,changeDetection:0})}}return l})();export{k as MenuPageComponent};
