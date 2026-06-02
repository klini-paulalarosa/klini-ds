import{a as m}from"./chunk-KR4SXHLK.js";import{a as u}from"./chunk-6RXJHZRI.js";import{cb as c}from"./chunk-ZMPL4K3C.js";import"./chunk-4IL3UCKX.js";import"./chunk-W4FWUOBX.js";import"./chunk-NMGI7OHJ.js";import"./chunk-BTGLL7MP.js";import"./chunk-4LWZMJDI.js";import"./chunk-BCJF3KZG.js";import{Bb as t,Cb as e,Db as s,Xb as i,Ya as o,ec as p,fa as d,rb as n}from"./chunk-WNNFWGPB.js";var E=(()=>{class r{constructor(){this.historico=[{status:"Consulta \u2014 Cardiologia",date:"28/05/2025 \u2014 14h30",icon:"pi pi-heart",color:"#259591",content:"Dr. Marcos Oliveira \xB7 Retorno em 90 dias"},{status:"Exame \u2014 Ecocardiograma",date:"10/04/2025 \u2014 10h00",icon:"pi pi-file",color:"#6AA7AE",content:"Resultado: dentro da normalidade"},{status:"Internacao",date:"12/02/2025 \u2014 08h00",icon:"pi pi-building",color:"#CD7925",content:"Hospital Klini Central \xB7 3 dias \xB7 Alta em 15/02"},{status:"Adesao ao plano",date:"01/01/2024",icon:"pi pi-check-circle",color:"#259591",content:"Klini Start PJ \xB7 Vigencia: 12 meses"}],this.processoAutorizacao=[{status:"Solicitacao enviada",date:"20/05/2025 09:12",icon:"pi pi-send",color:"#259591"},{status:"Em analise medica",date:"20/05/2025 11:30",icon:"pi pi-search",color:"#6AA7AE"},{status:"Documentacao pendente",date:"21/05/2025 08:00",icon:"pi pi-file-edit",color:"#CD7925"},{status:"Documentos enviados",date:"21/05/2025 14:22",icon:"pi pi-file-check",color:"#6AA7AE"},{status:"Autorizado",date:"22/05/2025 10:05",icon:"pi pi-check-circle",color:"#259591"}],this.histCode=`import { KlnTimelineComponent, KlnTimelineEvent } from '@klini-saude/ds';

eventos: KlnTimelineEvent[] = [
  {
    status:  'Consulta \u2014 Cardiologia',
    date:    '28/05/2025 \u2014 14h30',
    icon:    'pi pi-heart',
    color:   '#259591',
    content: 'Dr. Marcos Oliveira',
  },
  {
    status: 'Adesao ao plano',
    date:   '01/01/2024',
    icon:   'pi pi-check-circle',
  },
];

// Template
<kln-timeline [events]="eventos" />`,this.altCode='<kln-timeline [events]="processoAutorizacao" align="alternate" />',this.props=[{name:"events",type:"KlnTimelineEvent[]",default:"[]",description:"Array de eventos a exibir na linha do tempo."},{name:"align",type:"'left' | 'right' | 'alternate'",default:"'left'",description:"Posicao do conteudo em relacao ao marcador central."},{name:"layout",type:"'vertical' | 'horizontal'",default:"'vertical'",description:"Orientacao da timeline."},{name:"styleClass",type:"string",default:"''",description:"Classes CSS adicionais no elemento raiz."}]}static{this.\u0275fac=function(l){return new(l||r)}}static{this.\u0275cmp=d({type:r,selectors:[["app-timeline-page"]],standalone:!0,features:[p],decls:40,vars:5,consts:[[2,"display","flex","align-items","center","gap","12px","margin-bottom","8px"],[1,"docs-page-title",2,"margin-bottom","0"],[1,"badge","badge--version"],[1,"docs-page-description"],[1,"font-mono"],[1,"docs-section"],[3,"code"],["preview","",2,"width","100%","max-width","500px"],[3,"events"],["preview","",2,"width","100%","max-width","600px"],["align","alternate",3,"events"],[3,"props"],[2,"background","#18181b","color","#e4e4e7","padding","16px","border-radius","8px","font-family","monospace","font-size","13px","overflow","auto"]],template:function(l,a){l&1&&(t(0,"div")(1,"div",0)(2,"h1",1),i(3,"Timeline"),e(),t(4,"span",2),i(5,"kln-timeline"),e()(),t(6,"p",3),i(7," Linha do tempo vertical ou horizontal para eventos historicos. Ideal para historico de atendimentos, evolucao de plano, processos de autorizacao e qualquer fluxo com etapas cronologicas. Wrapper sobre "),t(8,"code",4),i(9,"p-timeline"),e(),i(10," do PrimeNG. "),e(),t(11,"div",5)(12,"h2"),i(13,"Historico de atendimentos"),e(),t(14,"p"),i(15,"Layout vertical esquerdo \u2014 padrao para historico de saude do beneficiario."),e(),t(16,"app-component-preview",6)(17,"div",7),s(18,"kln-timeline",8),e()()(),t(19,"div",5)(20,"h2"),i(21,"Layout alternado"),e(),t(22,"p"),i(23,"Use "),t(24,"code",4),i(25,'align="alternate"'),e(),i(26," para exibir eventos em lados opostos \u2014 bom para linhas do tempo de processo."),e(),t(27,"app-component-preview",6)(28,"div",9),s(29,"kln-timeline",10),e()()(),t(30,"div",5)(31,"h2"),i(32,"Props"),e(),s(33,"app-props-table",11),e(),t(34,"div",5)(35,"h2"),i(36,"Interface KlnTimelineEvent"),e(),t(37,"pre",12)(38,"code"),i(39,`import { KlnTimelineEvent } from '@klini-saude/ds';

interface KlnTimelineEvent {
  status?:  string;   // titulo do evento (negrito)
  date?:    string;   // data/hora exibida abaixo do titulo
  icon?:    string;   // classe completa do icone (ex: 'pi pi-check')
  color?:   string;   // cor do marcador circular (padrao: teal Klini)
  content?: string;   // descricao adicional
  [key: string]: unknown; // propriedades extras para templates customizados
}`),e()()()()),l&2&&(o(16),n("code",a.histCode),o(2),n("events",a.historico),o(9),n("code",a.altCode),o(2),n("events",a.processoAutorizacao),o(4),n("props",a.props))},dependencies:[c,m,u],encapsulation:2,changeDetection:0})}}return r})();export{E as TimelinePageComponent};
