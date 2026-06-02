import{a as b}from"./chunk-KR4SXHLK.js";import{a as f}from"./chunk-6RXJHZRI.js";import{T as u}from"./chunk-ZMPL4K3C.js";import"./chunk-4IL3UCKX.js";import"./chunk-W4FWUOBX.js";import"./chunk-NMGI7OHJ.js";import"./chunk-BTGLL7MP.js";import"./chunk-4LWZMJDI.js";import{a as c}from"./chunk-BCJF3KZG.js";import{Bb as a,Cb as e,Db as l,Xb as i,Ya as n,ec as m,fa as p,fc as d,rb as o}from"./chunk-WNNFWGPB.js";var v=()=>[3,5,10],h=()=>[],T=(()=>{class s{constructor(){this.columns=[{field:"nome",header:"Benefici\xE1rio"},{field:"plano",header:"Plano"},{field:"status",header:"Status"},{field:"sinistro",header:"Sinistro (R$)"},{field:"adesao",header:"Ades\xE3o"}],this.sortableColumns=[{field:"nome",header:"Benefici\xE1rio",sortable:!0},{field:"plano",header:"Plano",sortable:!0},{field:"status",header:"Status"},{field:"sinistro",header:"Sinistro (R$)",sortable:!0},{field:"adesao",header:"Ades\xE3o",sortable:!0}],this.beneficiarios=[{nome:"Paula Rosa",plano:"Klini Start PJ",status:"Ativo",sinistro:1842,adesao:"01/03/2023"},{nome:"Carlos Mendes",plano:"Klini Plus",status:"Ativo",sinistro:3210,adesao:"15/06/2022"},{nome:"Ana Ferreira",plano:"Klini Start PJ",status:"Car\xEAncia",sinistro:0,adesao:"01/05/2026"},{nome:"Roberto Lima",plano:"Klini Plus",status:"Ativo",sinistro:5680,adesao:"10/01/2021"},{nome:"Juliana Costa",plano:"Klini Start",status:"Suspenso",sinistro:920,adesao:"20/09/2022"},{nome:"Marcos Oliveira",plano:"Klini Plus",status:"Ativo",sinistro:2140,adesao:"03/07/2023"}],this.basicCode=`import { KlnTableComponent, KlnTableColumn } from '@klini-saude/ds';

columns: KlnTableColumn[] = [
  { field: 'nome',     header: 'Benefici\xE1rio' },
  { field: 'plano',    header: 'Plano' },
  { field: 'status',   header: 'Status' },
  { field: 'sinistro', header: 'Sinistro (R$)' },
  { field: 'adesao',   header: 'Ades\xE3o' },
];

// template
<kln-table [columns]="columns" [value]="beneficiarios" />`,this.sortableCode=`columns: KlnTableColumn[] = [
  { field: 'nome',     header: 'Benefici\xE1rio', sortable: true },
  { field: 'sinistro', header: 'Sinistro (R$)', sortable: true },
];

<kln-table [columns]="columns" [value]="data" />`,this.pagedCode=`<kln-table
  [columns]="columns"
  [value]="beneficiarios"
  [paginator]="true"
  [pageSize]="10"
  [rowsPerPageOptions]="[10, 25, 50]"
/>`,this.loadingCode=`<kln-table
  [columns]="columns"
  [value]="[]"
  [loading]="isLoading"
/>

// No componente:
isLoading = true;
ngOnInit() {
  this.service.getBeneficiarios().subscribe(list => {
    this.beneficiarios = list;
    this.isLoading = false;
  });
}`,this.columnConfigCode=`export interface KlnTableColumn {
  field: string;       // Chave do objeto de dados
  header: string;      // Texto do cabe\xE7alho
  sortable?: boolean;  // Habilita ordena\xE7\xE3o por clique no header
  width?: string;      // Largura da coluna (ex: '200px', '20%')
}`,this.props=[{name:"columns",type:"KlnTableColumn[]",default:"[]",description:"Defini\xE7\xE3o das colunas da tabela.",required:!0},{name:"value",type:"Record<string, unknown>[]",default:"[]",description:"Array de objetos com os dados a exibir."},{name:"loading",type:"boolean",default:"false",description:"Exibe skeleton de carregamento."},{name:"paginator",type:"boolean",default:"false",description:"Habilita pagina\xE7\xE3o."},{name:"pageSize",type:"number",default:"10",description:"Linhas por p\xE1gina."},{name:"rowsPerPageOptions",type:"number[]",default:"[10, 25, 50]",description:"Op\xE7\xF5es de linhas por p\xE1gina."},{name:"emptyMessage",type:"string",default:"'Nenhum resultado encontrado.'",description:"Mensagem exibida quando n\xE3o h\xE1 dados."},{name:"styleClass",type:"string",default:"''",description:"Classes CSS adicionais para o container da tabela."}]}static{this.\u0275fac=function(r){return new(r||s)}}static{this.\u0275cmp=p({type:s,selectors:[["app-table-page"]],standalone:!0,features:[m],decls:51,vars:20,consts:[[2,"display","flex","align-items","center","gap","12px","margin-bottom","8px"],[1,"docs-page-title",2,"margin-bottom","0"],[1,"badge","badge--version"],[1,"docs-page-description"],[1,"font-mono"],[1,"docs-section"],[3,"code"],["preview","",2,"width","100%"],[3,"columns","value"],[3,"columns","value","paginator","pageSize","rowsPerPageOptions"],[3,"columns","value","loading"],["language","typescript",3,"code"],[3,"props"]],template:function(r,t){r&1&&(a(0,"div")(1,"div",0)(2,"h1",1),i(3,"Table"),e(),a(4,"span",2),i(5,"kln-table"),e()(),a(6,"p",3),i(7," Tabela de dados baseada no "),a(8,"code",4),i(9,"p-table"),e(),i(10," do PrimeNG. Suporte a colunas configur\xE1veis via "),a(11,"code",4),i(12,"KlnTableColumn[]"),e(),i(13,", ordena\xE7\xE3o, pagina\xE7\xE3o, estado de carregamento e sele\xE7\xE3o de linhas. "),e(),a(14,"div",5)(15,"h2"),i(16,"Tabela b\xE1sica"),e(),a(17,"app-component-preview",6)(18,"div",7),l(19,"kln-table",8),e()()(),a(20,"div",5)(21,"h2"),i(22,"Com ordena\xE7\xE3o"),e(),a(23,"p"),i(24,"Passe "),a(25,"code",4),i(26,"sortable: true"),e(),i(27," nas colunas para habilitar ordena\xE7\xE3o por clique no header."),e(),a(28,"app-component-preview",6)(29,"div",7),l(30,"kln-table",8),e()()(),a(31,"div",5)(32,"h2"),i(33,"Com pagina\xE7\xE3o"),e(),a(34,"app-component-preview",6)(35,"div",7),l(36,"kln-table",9),e()()(),a(37,"div",5)(38,"h2"),i(39,"Estado de carregamento"),e(),a(40,"app-component-preview",6)(41,"div",7),l(42,"kln-table",10),e()()(),a(43,"div",5)(44,"h2"),i(45,"Configura\xE7\xE3o de colunas (KlnTableColumn)"),e(),l(46,"app-code-block",11),e(),a(47,"div",5)(48,"h2"),i(49,"Props"),e(),l(50,"app-props-table",12),e()()),r&2&&(n(17),o("code",t.basicCode),n(2),o("columns",t.columns)("value",t.beneficiarios),n(9),o("code",t.sortableCode),n(2),o("columns",t.sortableColumns)("value",t.beneficiarios),n(4),o("code",t.pagedCode),n(2),o("columns",t.columns)("value",t.beneficiarios)("paginator",!0)("pageSize",3)("rowsPerPageOptions",d(18,v)),n(4),o("code",t.loadingCode),n(2),o("columns",t.columns)("value",d(19,h))("loading",!0),n(4),o("code",t.columnConfigCode),n(4),o("props",t.props))},dependencies:[u,b,f,c],encapsulation:2,changeDetection:0})}}return s})();export{T as TablePageComponent};
