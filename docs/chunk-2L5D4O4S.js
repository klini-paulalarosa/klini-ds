import{a as k}from"./chunk-GUT5IV3P.js";import{a as L}from"./chunk-QLSI2SDP.js";import{Ia as P,Ja as w,na as _}from"./chunk-LTHARNUE.js";import{d as S,f as M,h as x}from"./chunk-KJZGQ55U.js";import"./chunk-FT6GD3TA.js";import"./chunk-4YRY4IP2.js";import"./chunk-ZD2XKJZA.js";import"./chunk-ZKNKG7AO.js";import"./chunk-I745CSUF.js";import"./chunk-PUHRAYU7.js";import{$b as y,Db as i,Eb as e,Fb as r,Nb as C,Ob as b,Zb as o,_a as a,cc as c,dc as m,ec as u,gc as v,ha as E,qb as h,tb as s,yb as f}from"./chunk-VHGF37WI.js";function T(n,D){if(n&1&&(i(0,"small",7),o(1),e()),n&2){let d=b();a(),y("Selecionado: ",d.selectedEspec,"")}}function A(n,D){if(n&1&&(i(0,"small",7),o(1),e()),n&2){let d=b();a(),y("",d.selectedEspecs.length," selecionada(s)")}}var V=(()=>{class n{constructor(){this.especialidades=[{label:"Cardiologia",value:"cardiologia"},{label:"Ortopedia",value:"ortopedia"},{label:"Pediatria",value:"pediatria"},{label:"Ginecologia",value:"ginecologia"},{label:"Neurologia",value:"neurologia"},{label:"Dermatologia",value:"dermatologia"},{label:"Oftalmologia",value:"oftalmologia"},{label:"Psiquiatria",value:"psiquiatria"}],this.selectedEspec="",this.selectedEspecs=[],this.selectedMedico="",this.medicoSuggestions=[],this.medicos=["Dr. Carlos Mendes \u2014 Cardiologia","Dra. Ana Ferreira \u2014 Pediatria","Dr. Roberto Lima \u2014 Ortopedia","Dra. Juliana Costa \u2014 Ginecologia","Dr. Marcos Oliveira \u2014 Neurologia","Dra. Patricia Souza \u2014 Dermatologia"],this.selectCode=`import { KlnSelectComponent } from '@klini-saude/ds';

especialidades = [
  { label: 'Cardiologia', value: 'cardiologia' },
  { label: 'Ortopedia',   value: 'ortopedia'   },
];

selectedEspec = '';

// template
<kln-select
  [(ngModel)]="selectedEspec"
  [options]="especialidades"
  optionLabel="label"
  optionValue="value"
  placeholder="Escolha a especialidade"
  label="Especialidade"
/>`,this.multiCode=`import { KlnMultiSelectComponent } from '@klini-saude/ds';

selectedEspecs: string[] = [];

// template
<kln-multiselect
  [(ngModel)]="selectedEspecs"
  [options]="especialidades"
  optionLabel="label"
  optionValue="value"
  placeholder="Selecione as especialidades"
  label="Especialidades cobertas"
  display="chip"
/>`,this.autoCode=`import { KlnAutoCompleteComponent } from '@klini-saude/ds';

selectedMedico = '';
suggestions: string[] = [];

// (completeMethod) emite uma string (a query digitada)
search(query: string): void {
  this.suggestions = this.medicos.filter(m =>
    m.toLowerCase().includes(query.toLowerCase())
  );
}

// template
<kln-autocomplete
  [(ngModel)]="selectedMedico"
  [suggestions]="suggestions"
  (completeMethod)="search($event)"
  placeholder="Buscar m\xE9dico"
  label="M\xE9dico respons\xE1vel"
/>`,this.selectProps=[{name:"options",type:"KlnSelectOption[] | any[]",default:"[]",description:"Lista de op\xE7\xF5es."},{name:"optionLabel",type:"string",default:"'label'",description:"Propriedade da op\xE7\xE3o exibida como texto."},{name:"optionValue",type:"string",default:"'value'",description:"Propriedade da op\xE7\xE3o usada como valor."},{name:"placeholder",type:"string",default:"''",description:"Texto placeholder quando nenhum item est\xE1 selecionado."},{name:"label",type:"string",default:"''",description:"Label do campo."},{name:"disabled",type:"boolean",default:"false",description:"Desabilita o select."},{name:"errorMessage",type:"string",default:"''",description:"Mensagem de erro exibida abaixo do select."},{name:"filter",type:"boolean",default:"false",description:"Adiciona campo de busca dentro do dropdown."},{name:"showClear",type:"boolean",default:"false",description:"Exibe bot\xE3o para limpar a sele\xE7\xE3o."}],this.multiProps=[{name:"options",type:"any[]",default:"[]",description:"Lista de op\xE7\xF5es."},{name:"optionLabel",type:"string",default:"'label'",description:"Propriedade exibida como texto."},{name:"optionValue",type:"string",default:"'value'",description:"Propriedade usada como valor."},{name:"display",type:"'comma' | 'chip'",default:"'comma'",description:"Exibi\xE7\xE3o dos itens selecionados: separados por v\xEDrgula ou como chips."},{name:"maxSelectedLabels",type:"number",default:"3",description:'Quantidade m\xE1xima de labels exibidos antes de usar "N selecionados".'},{name:"placeholder",type:"string",default:"''",description:"Texto placeholder."},{name:"showToggleAll",type:"boolean",default:"true",description:'Exibe "Selecionar todos".'},{name:"filter",type:"boolean",default:"true",description:"Campo de busca interno."}],this.autoProps=[{name:"suggestions",type:"any[]",default:"[]",description:"Lista de sugest\xF5es filtradas."},{name:"field",type:"string",default:"''",description:"Campo do objeto exibido quando sugest\xF5es s\xE3o objetos."},{name:"completeMethod",type:"EventEmitter",default:"\u2014",description:"Evento disparado a cada keystroke para buscar sugest\xF5es."},{name:"dropdown",type:"boolean",default:"false",description:"Adiciona bot\xE3o dropdown para listar todos os itens."},{name:"multiple",type:"boolean",default:"false",description:"Permite sele\xE7\xE3o m\xFAltipla (chips)."},{name:"minLength",type:"number",default:"1",description:"M\xEDnimo de caracteres antes de disparar completeMethod."},{name:"delay",type:"number",default:"300",description:"Delay em ms antes de disparar completeMethod."}]}searchMedico(d){let p=d.toLowerCase();this.medicoSuggestions=this.medicos.filter(t=>t.toLowerCase().includes(p))}static{this.\u0275fac=function(p){return new(p||n)}}static{this.\u0275cmp=E({type:n,selectors:[["app-select-page"]],standalone:!0,features:[v],decls:54,vars:14,consts:[[1,"docs-page-title"],[1,"docs-page-description"],[1,"font-mono"],[1,"docs-section"],[3,"code"],["preview","",2,"display","flex","flex-direction","column","gap","16px","width","100%","max-width","340px"],["optionLabel","label","optionValue","value","placeholder","Escolha a especialidade","label","Especialidade",3,"ngModelChange","ngModel","options"],[2,"color","var(--docs-text-muted)"],["preview","",2,"display","flex","flex-direction","column","gap","16px","width","100%","max-width","400px"],["optionLabel","label","optionValue","value","placeholder","Selecione as especialidades","label","Especialidades cobertas","display","chip",3,"ngModelChange","ngModel","options"],["placeholder","Buscar m\xE9dico","label","M\xE9dico respons\xE1vel",3,"ngModelChange","completeMethod","ngModel","suggestions"],[3,"props"]],template:function(p,t){p&1&&(i(0,"div")(1,"h1",0),o(2,"Select / MultiSelect / AutoComplete"),e(),i(3,"p",1),o(4," Componentes de sele\xE7\xE3o do Klini DS. "),i(5,"code",2),o(6,"kln-select"),e(),o(7," para sele\xE7\xE3o \xFAnica, "),i(8,"code",2),o(9,"kln-multiselect"),e(),o(10," para m\xFAltipla escolha com chips, e "),i(11,"code",2),o(12,"kln-autocomplete"),e(),o(13," para busca com sugest\xF5es. Todos suportam "),i(14,"code",2),o(15,"ngModel"),e(),o(16," e Reactive Forms. "),e(),i(17,"div",3)(18,"h2"),o(19,"Select (sele\xE7\xE3o \xFAnica)"),e(),i(20,"app-component-preview",4)(21,"div",5)(22,"kln-select",6),u("ngModelChange",function(l){return m(t.selectedEspec,l)||(t.selectedEspec=l),l}),e(),h(23,T,2,1,"small",7),e()()(),i(24,"div",3)(25,"h2"),o(26,"MultiSelect"),e(),i(27,"app-component-preview",4)(28,"div",8)(29,"kln-multiselect",9),u("ngModelChange",function(l){return m(t.selectedEspecs,l)||(t.selectedEspecs=l),l}),e(),h(30,A,2,1,"small",7),e()()(),i(31,"div",3)(32,"h2"),o(33,"AutoComplete"),e(),i(34,"p"),o(35,"Busca com sugest\xF5es filtradas. O evento "),i(36,"code",2),o(37,"(completeMethod)"),e(),o(38," dispara a pesquisa."),e(),i(39,"app-component-preview",4)(40,"div",5)(41,"kln-autocomplete",10),u("ngModelChange",function(l){return m(t.selectedMedico,l)||(t.selectedMedico=l),l}),C("completeMethod",function(l){return t.searchMedico(l)}),e()()()(),i(42,"div",3)(43,"h2"),o(44,"Props \u2014 kln-select"),e(),r(45,"app-props-table",11),e(),i(46,"div",3)(47,"h2"),o(48,"Props \u2014 kln-multiselect"),e(),r(49,"app-props-table",11),e(),i(50,"div",3)(51,"h2"),o(52,"Props \u2014 kln-autocomplete"),e(),r(53,"app-props-table",11),e()()),p&2&&(a(20),s("code",t.selectCode),a(2),c("ngModel",t.selectedEspec),s("options",t.especialidades),a(),f(t.selectedEspec?23:-1),a(4),s("code",t.multiCode),a(2),c("ngModel",t.selectedEspecs),s("options",t.especialidades),a(),f(t.selectedEspecs.length?30:-1),a(9),s("code",t.autoCode),a(2),c("ngModel",t.selectedMedico),s("suggestions",t.medicoSuggestions),a(4),s("props",t.selectProps),a(4),s("props",t.multiProps),a(4),s("props",t.autoProps))},dependencies:[x,S,M,_,P,w,k,L],encapsulation:2,changeDetection:0})}}return n})();export{V as SelectPageComponent};
