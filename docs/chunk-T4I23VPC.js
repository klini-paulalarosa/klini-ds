import{a as h}from"./chunk-GUT5IV3P.js";import{a as C}from"./chunk-QLSI2SDP.js";import{D as p,ha as b}from"./chunk-LTHARNUE.js";import"./chunk-KJZGQ55U.js";import"./chunk-FT6GD3TA.js";import"./chunk-4YRY4IP2.js";import"./chunk-ZD2XKJZA.js";import"./chunk-ZKNKG7AO.js";import"./chunk-I745CSUF.js";import"./chunk-PUHRAYU7.js";import{Db as e,Eb as t,Fb as l,Nb as m,Zb as n,_a as a,gc as c,ha as u,tb as o}from"./chunk-VHGF37WI.js";var f=(()=>{class r{constructor(){this.home={icon:"pi pi-home",routerLink:"/"},this.basicItems=[{label:"Portal",routerLink:"/"},{label:"Consultas",routerLink:"/consultas"},{label:"Consulta #4821"}],this.consultaItems=[{label:"Benefici\xE1rio",routerLink:"/beneficiario"},{label:"Minhas Consultas",routerLink:"/beneficiario/consultas"},{label:"Cardiologia \u2014 20/06/2025"}],this.dynamicItems=[],this.basicCode=`// Classe
items: MenuItem[] = [
  { label: 'Portal',    routerLink: '/' },
  { label: 'Consultas', routerLink: '/consultas' },
  { label: 'Consulta #4821' },
];
home: MenuItem = { icon: 'pi pi-home', routerLink: '/' };

// Template
<kln-breadcrumb [items]="items" [home]="home" />`,this.detailCode=`items: MenuItem[] = [
  { label: 'Benefici\xE1rio',     routerLink: '/beneficiario' },
  { label: 'Minhas Consultas', routerLink: '/beneficiario/consultas' },
  { label: 'Cardiologia \u2014 20/06/2025' },
];`,this.dynamicCode=`// Classe
dynamicItems: MenuItem[] = [];

addConsultas(): void {
  this.dynamicItems = [
    { label: 'Consultas', routerLink: '/consultas' }
  ];
}

addDetalhe(): void {
  this.dynamicItems = [
    { label: 'Consultas',     routerLink: '/consultas' },
    { label: 'Consulta #4821' },
  ];
}

// Template
<kln-breadcrumb [items]="dynamicItems" [home]="home" />`,this.props=[{name:"items",type:"MenuItem[]",default:"[]",description:"Array de itens da trilha de navega\xE7\xE3o. O \xFAltimo item geralmente \xE9 a p\xE1gina atual (sem routerLink)."},{name:"home",type:"MenuItem",default:"{ icon: 'pi pi-home', routerLink: '/' }",description:"Item do in\xEDcio da trilha (\xEDcone home). Configur\xE1vel com \xEDcone e rota."},{name:"styleClass",type:"string",default:"''",description:"Classes CSS adicionais."}]}addConsultas(){this.dynamicItems=[{label:"Consultas",routerLink:"/consultas"}]}addDetalhe(){this.dynamicItems=[{label:"Consultas",routerLink:"/consultas"},{label:"Consulta #4821"}]}resetBreadcrumb(){this.dynamicItems=[]}static{this.\u0275fac=function(s){return new(s||r)}}static{this.\u0275cmp=u({type:r,selectors:[["app-breadcrumb-page"]],standalone:!0,features:[c],decls:43,vars:13,consts:[[2,"display","flex","align-items","center","gap","12px","margin-bottom","8px"],[1,"docs-page-title",2,"margin-bottom","0"],[1,"badge","badge--version"],[1,"docs-page-description"],[1,"font-mono"],[1,"docs-section"],[3,"code"],["preview",""],[3,"items","home"],[2,"display","flex","gap","8px","margin-top","12px","flex-wrap","wrap"],["label","+ Consultas","size","small","severity","secondary",3,"clicked","disabled"],["label","+ Detalhe","size","small","severity","secondary",3,"clicked","disabled"],["label","Voltar tudo","size","small","variant","outlined",3,"clicked","disabled"],[3,"props"]],template:function(s,i){s&1&&(e(0,"div")(1,"div",0)(2,"h1",1),n(3,"Breadcrumb"),t(),e(4,"span",2),n(5,"kln-breadcrumb"),t()(),e(6,"p",3),n(7," Trilha de navega\xE7\xE3o hier\xE1rquica para orientar o usu\xE1rio sobre sua localiza\xE7\xE3o no sistema. Essencial em portais com m\xFAltiplos n\xEDveis como Benefici\xE1rio \u2192 Consultas \u2192 Detalhe. Wrapper sobre "),e(8,"code",4),n(9,"p-breadcrumb"),t(),n(10," do PrimeNG. "),t(),e(11,"div",5)(12,"h2"),n(13,"B\xE1sico"),t(),e(14,"p"),n(15,"Trilha de 3 n\xEDveis com \xEDcone home como ponto de partida."),t(),e(16,"app-component-preview",6)(17,"div",7),l(18,"kln-breadcrumb",8),t()()(),e(19,"div",5)(20,"h2"),n(21,"Detalhe de consulta"),t(),e(22,"p"),n(23,"Navega\xE7\xE3o at\xE9 o detalhe de uma consulta espec\xEDfica \u2014 padr\xE3o Portal do Benefici\xE1rio."),t(),e(24,"app-component-preview",6)(25,"div",7),l(26,"kln-breadcrumb",8),t()()(),e(27,"div",5)(28,"h2"),n(29,"Din\xE2mico"),t(),e(30,"p"),n(31,"Breadcrumb que cresce conforme o usu\xE1rio navega. Simula progress\xE3o de p\xE1ginas com bot\xF5es."),t(),e(32,"app-component-preview",6)(33,"div",7),l(34,"kln-breadcrumb",8),e(35,"div",9)(36,"kln-button",10),m("clicked",function(){return i.addConsultas()}),t(),e(37,"kln-button",11),m("clicked",function(){return i.addDetalhe()}),t(),e(38,"kln-button",12),m("clicked",function(){return i.resetBreadcrumb()}),t()()()()(),e(39,"div",5)(40,"h2"),n(41,"Props"),t(),l(42,"app-props-table",13),t()()),s&2&&(a(16),o("code",i.basicCode),a(2),o("items",i.basicItems)("home",i.home),a(6),o("code",i.detailCode),a(2),o("items",i.consultaItems)("home",i.home),a(6),o("code",i.dynamicCode),a(2),o("items",i.dynamicItems)("home",i.home),a(2),o("disabled",i.dynamicItems.length>=1),a(),o("disabled",i.dynamicItems.length<1||i.dynamicItems.length>=2),a(),o("disabled",i.dynamicItems.length===0),a(4),o("props",i.props))},dependencies:[b,p,h,C],encapsulation:2,changeDetection:0})}}return r})();export{f as BreadcrumbPageComponent};
