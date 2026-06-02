import{b as C}from"./chunk-XK6RMR3J.js";import{b as x}from"./chunk-ZD2XKJZA.js";import{a as f}from"./chunk-ZKNKG7AO.js";import"./chunk-I745CSUF.js";import"./chunk-PUHRAYU7.js";import{Db as o,Eb as e,Fb as s,Kc as p,Ob as d,Zb as t,_a as l,_b as i,da as u,gc as k,ha as g,qb as v,tb as c,v as m,yb as b}from"./chunk-VHGF37WI.js";function E(n,h){if(n&1&&(o(0,"div",0)(1,"h1",1),t(2),e(),o(3,"span",2),t(4),e(),o(5,"span",3),t(6),e()(),o(7,"p",4),t(8),e(),o(9,"div",5)(10,"h2"),t(11,"Categoria"),e(),o(12,"p"),t(13),e()(),o(14,"div",5)(15,"h2"),t(16,"Instala\xE7\xE3o"),e(),s(17,"app-code-block",6),e(),o(18,"div",5)(19,"h2"),t(20,"Uso"),e(),s(21,"app-code-block",6),e(),o(22,"div",7)(23,"div",8),s(24,"i",9),o(25,"strong"),t(26,"Documenta\xE7\xE3o detalhada em breve"),e()(),o(27,"p",10),t(28," Esta p\xE1gina mostra o exemplo b\xE1sico de uso do componente. Exemplos interativos, todas as props e eventos ser\xE3o adicionados em breve. Consulte a "),o(29,"a",11),t(30,"documenta\xE7\xE3o do PrimeNG"),e(),t(31," para refer\xEAncia completa enquanto isso. "),e()()),n&2){let a=d();l(2),i(a.info().name),l(2),i(a.info().selector),l(2),i(a.info().since),l(2),i(a.info().description),l(5),i(a.info().category),l(4),c("code",a.installCode()),l(4),c("code",a.info().usageExample)}}function A(n,h){if(n&1&&(o(0,"h1",12),t(1,"Componente n\xE3o encontrado"),e(),o(2,"p",4),t(3," O slug "),o(4,"code",13),t(5),e(),t(6," n\xE3o corresponde a nenhum componente registrado. Verifique a URL ou navegue pelo sidebar. "),e()),n&2){let a=d();l(5),i(a.slug())}}var S={"split-button":{name:"Split Button",selector:"kln-split-button",exportedAs:"KlnSplitButtonComponent",category:"Buttons",since:"v0.4",description:'Bot\xE3o com dropdown de a\xE7\xF5es secund\xE1rias. Combina uma a\xE7\xE3o principal (click) com um menu de op\xE7\xF5es (\xEDcone de seta). Ideal para a\xE7\xF5es com varia\xE7\xF5es como "Salvar" e "Salvar e fechar".',usageExample:`import { KlnSplitButtonComponent } from '@klini-saude/ds';
import { MenuItem } from 'primeng/api';

items: MenuItem[] = [
  { label: 'Salvar e fechar', command: () => this.saveAndClose() },
  { label: 'Salvar como rascunho', command: () => this.saveDraft() },
];

// template
<kln-split-button
  label="Salvar"
  [model]="items"
  (onClick)="save()"
/>`},"button-group":{name:"Button Group",selector:"kln-button-group",exportedAs:"KlnButtonGroupComponent",category:"Buttons",since:"v0.4",description:"Agrupa bot\xF5es visualmente sem espa\xE7o entre eles. \xDAtil para barras de ferramentas, filtros e sele\xE7\xE3o de vista (lista/grid).",usageExample:`<kln-button-group>
  <kln-button label="Lista"  icon="pi pi-list" />
  <kln-button label="Grid"   icon="pi pi-th-large" />
  <kln-button label="Tabela" icon="pi pi-table" />
</kln-button-group>`},"speed-dial":{name:"Speed Dial",selector:"kln-speed-dial",exportedAs:"KlnSpeedDialComponent",category:"Buttons",since:"v0.4",description:"FAB (Floating Action Button) com menu de a\xE7\xF5es expand\xEDvel. Posicionado fixo ou relativo, expande ao hover/click para revelar a\xE7\xF5es contextuais.",usageExample:`import { KlnSpeedDialComponent } from '@klini-saude/ds';

items = [
  { icon: 'pi pi-pencil', command: () => this.edit() },
  { icon: 'pi pi-trash',  command: () => this.delete(), severity: 'danger' },
  { icon: 'pi pi-share',  command: () => this.share() },
];

<kln-speed-dial [model]="items" direction="up" />`},"input-number":{name:"Input Number",selector:"kln-input-number",exportedAs:"KlnInputNumberComponent",category:"Forms",since:"v0.2",description:"Campo num\xE9rico com formata\xE7\xE3o autom\xE1tica de moeda, porcentagem ou n\xFAmero inteiro/decimal. Suporta incremento/decremento via bot\xF5es.",usageExample:`<kln-input-number [(ngModel)]="sinistro" mode="currency" currency="BRL" locale="pt-BR" label="Valor do sinistro" />
<kln-input-number [(ngModel)]="percentual" suffix="%" [min]="0" [max]="100" label="Sinistralidade" />
<kln-input-number [(ngModel)]="quantidade" [showButtons]="true" [step]="1" label="Quantidade" />`},"input-mask":{name:"Input Mask",selector:"kln-input-mask",exportedAs:"KlnInputMaskComponent",category:"Forms",since:"v0.4",description:"Campo de texto com m\xE1scara de entrada. Ideal para CPF, CNPJ, telefone, CEP e outros formatos fixos.",usageExample:`<kln-input-mask [(ngModel)]="cpf"  mask="999.999.999-99" placeholder="000.000.000-00" label="CPF" />
<kln-input-mask [(ngModel)]="tel"  mask="(99) 99999-9999"  label="Telefone" />
<kln-input-mask [(ngModel)]="cep"  mask="99999-999"         label="CEP" />`},"input-otp":{name:"Input OTP",selector:"kln-input-otp",exportedAs:"KlnInputOtpComponent",category:"Forms",since:"v1.0",description:"Campo de c\xF3digo OTP (One-Time Password) com d\xEDgitos separados. Usado para autentica\xE7\xE3o de dois fatores e verifica\xE7\xE3o de token.",usageExample:'<kln-input-otp [(ngModel)]="otpCode" [length]="6" [integerOnly]="true" (onChange)="onOtpChange($event)" />'},textarea:{name:"Textarea",selector:"kln-textarea",exportedAs:"KlnTextareaComponent",category:"Forms",since:"v0.2",description:"\xC1rea de texto multilinha com redimensionamento autom\xE1tico (autoResize) e contador de caracteres opcional.",usageExample:'<kln-textarea [(ngModel)]="observacoes" label="Observa\xE7\xF5es cl\xEDnicas" [rows]="4" [autoResize]="true" placeholder="Descreva o quadro cl\xEDnico..." />'},password:{name:"Password",selector:"kln-password",exportedAs:"KlnPasswordComponent",category:"Forms",since:"v0.2",description:"Campo de senha com toggle de visibilidade, medidor de for\xE7a da senha e sugest\xF5es de melhoria ao lado.",usageExample:'<kln-password [(ngModel)]="senha" label="Nova senha" [feedback]="true" [toggleMask]="true" placeholder="M\xEDnimo 8 caracteres" />'},multiselect:{name:"MultiSelect",selector:"kln-multiselect",exportedAs:"KlnMultiSelectComponent",category:"Forms",since:"v0.4",description:"Sele\xE7\xE3o m\xFAltipla com busca interna e exibi\xE7\xE3o por chips ou v\xEDrgula. Ideal para filtros e sele\xE7\xE3o de m\xFAltiplas especialidades/planos.",usageExample:`<kln-multiselect
  [(ngModel)]="selectedEspecs"
  [options]="especialidades"
  optionLabel="label"
  optionValue="value"
  placeholder="Selecione as especialidades"
  display="chip"
/>`},autocomplete:{name:"AutoComplete",selector:"kln-autocomplete",exportedAs:"KlnAutoCompleteComponent",category:"Forms",since:"v0.4",description:"Campo com sugest\xF5es filtradas ao digitar. Disparando (completeMethod) para busca ass\xEDncrona ou local.",usageExample:`<kln-autocomplete
  [(ngModel)]="selectedMedico"
  [suggestions]="suggestions"
  (completeMethod)="search($event)"
  placeholder="Buscar m\xE9dico por nome ou CRM"
/>`},"cascade-select":{name:"Cascade Select",selector:"kln-cascade-select",exportedAs:"KlnCascadeSelectComponent",category:"Forms",since:"v0.4",description:"Select hier\xE1rquico com m\xFAltiplos n\xEDveis de op\xE7\xF5es. Ideal para regi\xE3o > estado > cidade ou especialidade > procedimento > c\xF3digo TUSS.",usageExample:`<kln-cascade-select
  [(ngModel)]="selected"
  [options]="hierarquia"
  optionLabel="name"
  optionGroupLabel="name"
  [optionGroupChildren]="['states', 'cities']"
  placeholder="Selecione"
/>`},listbox:{name:"Listbox",selector:"kln-listbox",exportedAs:"KlnListboxComponent",category:"Forms",since:"v0.4",description:"Lista de sele\xE7\xE3o inline (sem dropdown). Ideal para formul\xE1rios com poucas op\xE7\xF5es sempre vis\xEDveis ou filtros laterais.",usageExample:`<kln-listbox
  [(ngModel)]="selectedStatus"
  [options]="statusOptions"
  optionLabel="label"
  optionValue="value"
  [checkbox]="true"
  [multiple]="true"
/>`},"select-button":{name:"Select Button",selector:"kln-select-button",exportedAs:"KlnSelectButtonComponent",category:"Forms",since:"v0.4",description:"Grupo de bot\xF5es toggle para sele\xE7\xE3o de valor. Visualmente mais intuitivo que um select para poucas op\xE7\xF5es fixas.",usageExample:`<kln-select-button
  [(ngModel)]="periodo"
  [options]="['Semana', 'M\xEAs', 'Trimestre', 'Ano']"
/>`},"toggle-button":{name:"Toggle Button",selector:"kln-toggle-button",exportedAs:"KlnToggleButtonComponent",category:"Forms",since:"v1.0",description:"Bot\xE3o com dois estados (on/off) e label/\xEDcone diferente para cada estado.",usageExample:`<kln-toggle-button
  [(ngModel)]="ativo"
  onLabel="Ativo"
  offLabel="Inativo"
  onIcon="pi pi-check"
  offIcon="pi pi-times"
/>`},"radio-group":{name:"Radio Group",selector:"kln-radio-group",exportedAs:"KlnRadioGroupComponent",category:"Forms",since:"v0.2",description:"Grupo de radio buttons com label e op\xE7\xF5es configur\xE1veis via KlnRadioOption[].",usageExample:`import { KlnRadioGroupComponent, KlnRadioOption } from '@klini-saude/ds';

tipoPlano: KlnRadioOption[] = [
  { label: 'Titular',    value: 'titular'    },
  { label: 'Dependente', value: 'dependente' },
];

<kln-radio-group [(ngModel)]="tipo" [options]="tipoPlano" label="Tipo de benefici\xE1rio" />`},checkbox:{name:"Checkbox",selector:"kln-checkbox",exportedAs:"KlnCheckboxComponent",category:"Forms",since:"v0.4",description:"Checkbox standalone com label. Suporta estado indeterminado para sele\xE7\xE3o parcial em \xE1rvores.",usageExample:`<kln-checkbox [(ngModel)]="aceiteTermos" label="Aceito os termos de uso" />
<kln-checkbox [(ngModel)]="notificacoes" label="Receber notifica\xE7\xF5es por e-mail" />`},toggle:{name:"Toggle",selector:"kln-toggle",exportedAs:"KlnToggleComponent",category:"Forms",since:"v0.2",description:"Switch de ativa\xE7\xE3o/desativa\xE7\xE3o. Equivalente visual ao toggle de configura\xE7\xF5es em mobile.",usageExample:`<kln-toggle [(ngModel)]="notifEmail" label="E-mail" />
<kln-toggle [(ngModel)]="notifSms"   label="SMS" />`},rating:{name:"Rating",selector:"kln-rating",exportedAs:"KlnRatingComponent",category:"Forms",since:"v0.4",description:"Campo de avalia\xE7\xE3o por estrelas. \xDAtil em pesquisas de satisfa\xE7\xE3o p\xF3s-consulta.",usageExample:'<kln-rating [(ngModel)]="satisfacao" label="Avalie sua consulta" [stars]="5" [cancel]="false" />'},slider:{name:"Slider",selector:"kln-slider",exportedAs:"KlnSliderComponent",category:"Forms",since:"v0.3",description:"Slider de sele\xE7\xE3o de valor num\xE9rico. Suporta modo range (dois handles) para filtros de faixa.",usageExample:`<kln-slider [(ngModel)]="faixaEtaria" [range]="true" [min]="0" [max]="100" label="Faixa et\xE1ria" />
<kln-slider [(ngModel)]="sinistroMax" [min]="0" [max]="50000" [step]="500" label="Sinistro m\xE1ximo" />`},calendar:{name:"Calendar",selector:"kln-calendar",exportedAs:"CalendarComponent",category:"Forms",since:"v0.1",description:"Seletor de data e hora com suporte a range, m\xFAltiplas datas, localiza\xE7\xE3o pt-BR e inline mode.",usageExample:`<kln-calendar [(ngModel)]="dataConsulta" label="Data da consulta" dateFormat="dd/mm/yy" />
<kln-calendar [(ngModel)]="periodo" label="Per\xEDodo" selectionMode="range" />`},"tree-select":{name:"Tree Select",selector:"kln-tree-select",exportedAs:"KlnTreeSelectComponent",category:"Forms",since:"v0.4",description:"Select com estrutura de \xE1rvore hier\xE1rquica. Ideal para categorias aninhadas como CID-10 ou tabela TUSS.",usageExample:`<kln-tree-select
  [(ngModel)]="selectedCid"
  [options]="cid10Tree"
  placeholder="Selecione o CID-10"
  label="Diagn\xF3stico principal"
/>`},"color-picker":{name:"Color Picker",selector:"kln-color-picker",exportedAs:"KlnColorPickerComponent",category:"Forms",since:"v1.0",description:"Seletor de cor com paleta visual. \xDAtil para personaliza\xE7\xE3o de perfil ou categoriza\xE7\xE3o de eventos em calend\xE1rios.",usageExample:'<kln-color-picker [(ngModel)]="corCategoria" format="hex" inline="false" />'},"icon-field":{name:"Icon Field",selector:"kln-icon-field",exportedAs:"KlnIconFieldComponent",category:"Forms",since:"v1.0",description:"Wrapper para adicionar \xEDcone prefixado ou sufixado a qualquer campo de input PrimeNG.",usageExample:`<kln-icon-field iconPosition="left">
  <i class="pi pi-search"></i>
  <input pInputText placeholder="Buscar benefici\xE1rio" />
</kln-icon-field>`},"ifta-label":{name:"Ifta Label",selector:"kln-ifta-label",exportedAs:"KlnIftaLabelComponent",category:"Forms",since:"v1.0",description:"Label IFTA (In-Field Top Aligned) que sobe quando o campo est\xE1 em foco ou preenchido. Alternativa ao FloatLabel para campos que sempre mostram o label.",usageExample:`<kln-ifta-label>
  <input pInputText id="nome" placeholder="Nome completo" />
  <label for="nome">Nome completo</label>
</kln-ifta-label>`},"float-label":{name:"Float Label",selector:"kln-float-label",exportedAs:"KlnFloatLabelComponent",category:"Forms",since:"v0.4",description:"Label flutuante que anima de dentro do campo para cima ao focar. Padr\xE3o Material Design.",usageExample:`<kln-float-label>
  <input pInputText id="email" [(ngModel)]="email" />
  <label for="email">E-mail</label>
</kln-float-label>`},"file-upload":{name:"File Upload",selector:"kln-file-upload",exportedAs:"KlnFileUploadComponent",category:"Forms",since:"v0.2",description:"Upload de arquivos com drag and drop, preview, valida\xE7\xE3o de tipo/tamanho e modo b\xE1sico ou avan\xE7ado.",usageExample:`<kln-file-upload
  [multiple]="true"
  accept="image/*,.pdf"
  [maxFileSize]="5000000"
  label="Enviar documentos"
  (uploadHandler)="onUpload($event)"
/>`},editor:{name:"Editor",selector:"kln-editor",exportedAs:"KlnEditorComponent",category:"Forms",since:"v1.0",description:"Editor WYSIWYG baseado em Quill. Para laudos m\xE9dicos, observa\xE7\xF5es cl\xEDnicas e comunicados.",usageExample:`<kln-editor [(ngModel)]="laudo" [style]="{ height: '200px' }" />`},"tree-table":{name:"Tree Table",selector:"kln-tree-table",exportedAs:"KlnTreeTableComponent",category:"Data Display",since:"v1.0",description:"Tabela com estrutura hier\xE1rquica expans\xEDvel. Ideal para estruturas de planos, categorias ou organogramas.",usageExample:`<kln-tree-table [value]="planHierarchy" [columns]="cols">
  <ng-template pTemplate="header">
    <tr><th>Plano</th><th>Cobertura</th></tr>
  </ng-template>
</kln-tree-table>`},dataview:{name:"DataView",selector:"kln-dataview",exportedAs:"KlnDataViewComponent",category:"Data Display",since:"v0.4",description:"Exibi\xE7\xE3o de dados em modo lista ou grid com pagina\xE7\xE3o e layout customiz\xE1vel via ng-template.",usageExample:`<kln-dataview [value]="beneficiarios" layout="grid" [paginator]="true" [rows]="9">
  <ng-template pTemplate="grid" let-item>
    <kln-card [header]="item.nome">...</kln-card>
  </ng-template>
</kln-dataview>`},carousel:{name:"Carousel",selector:"kln-carousel",exportedAs:"KlnCarouselComponent",category:"Data Display",since:"v0.4",description:"Carrossel de itens com navega\xE7\xE3o por setas e indicadores. Suporta responsividade com numVisible e numScroll por breakpoint.",usageExample:`<kln-carousel [value]="planos" [numVisible]="3" [numScroll]="1" [circular]="true">
  <ng-template pTemplate="item" let-plano>
    <kln-card [header]="plano.nome">{{ plano.descricao }}</kln-card>
  </ng-template>
</kln-carousel>`},tree:{name:"Tree",selector:"kln-tree",exportedAs:"KlnTreeComponent",category:"Data Display",since:"v0.4",description:"\xC1rvore naveg\xE1vel com expans\xE3o/colapso de n\xF3s. Suporta sele\xE7\xE3o de n\xF3s e drag-and-drop.",usageExample:'<kln-tree [value]="orgTree" selectionMode="single" [(selection)]="selectedNode" />'},"order-list":{name:"Order List",selector:"kln-order-list",exportedAs:"KlnOrderListComponent",category:"Data Display",since:"v0.4",description:"Lista reorden\xE1vel com bot\xF5es para mover itens para cima/baixo ou com drag-and-drop.",usageExample:`<kln-order-list [value]="procedimentos" header="Procedimentos" [listStyle]="{ height: '200px' }">
  <ng-template pTemplate="item" let-item>{{ item.nome }}</ng-template>
</kln-order-list>`},"pick-list":{name:"Pick List",selector:"kln-pick-list",exportedAs:"KlnPickListComponent",category:"Data Display",since:"v1.0",description:"Dual list para transferir itens entre duas listas. Ideal para configurar cobertura de planos.",usageExample:`<kln-pick-list [source]="dispon\xEDveis" [target]="selecionados" sourceHeader="Dispon\xEDveis" targetHeader="Inclu\xEDdos">
  <ng-template pTemplate="item" let-item>{{ item.nome }}</ng-template>
</kln-pick-list>`},"virtual-scroller":{name:"Virtual Scroller",selector:"kln-virtual-scroller",exportedAs:"KlnVirtualScrollerComponent",category:"Data Display",since:"v0.4",description:"Lista com renderiza\xE7\xE3o virtual para performance com grandes volumes de dados (10k+ itens).",usageExample:`<kln-virtual-scroller [items]="bigList" [itemSize]="50" style="height:400px">
  <ng-template pTemplate="item" let-item>
    <div class="list-item">{{ item.nome }}</div>
  </ng-template>
</kln-virtual-scroller>`},timeline:{name:"Timeline",selector:"kln-timeline",exportedAs:"KlnTimelineComponent",category:"Data Display",since:"v0.4",description:"Linha do tempo vertical ou horizontal para eventos hist\xF3ricos. Ideal para hist\xF3rico de atendimentos.",usageExample:`import { KlnTimelineEvent } from '@klini-saude/ds';

eventos: KlnTimelineEvent[] = [
  { date: '01/01/2024', title: 'Ades\xE3o ao plano', icon: 'pi pi-check', color: '#259591' },
  { date: '15/03/2024', title: 'Primeira consulta \u2014 Cardiologia', icon: 'pi pi-heart' },
];

<kln-timeline [events]="eventos" />`},galleria:{name:"Galleria",selector:"kln-galleria",exportedAs:"KlnGalleriaComponent",category:"Data Display",since:"v1.0",description:"Galeria de imagens com thumbnails, navega\xE7\xE3o e modo fullscreen. Para exames de imagem e laudos.",usageExample:`<kln-galleria [value]="exames" [numVisible]="5" [circular]="true" [showThumbnails]="true">
  <ng-template pTemplate="item" let-item><img [src]="item.url" /></ng-template>
  <ng-template pTemplate="thumbnail" let-item><img [src]="item.thumb" /></ng-template>
</kln-galleria>`},"image-compare":{name:"Image Compare",selector:"kln-image-compare",exportedAs:"KlnImageCompareComponent",category:"Data Display",since:"v1.0",description:"Compara\xE7\xE3o de duas imagens com slider divis\xF3rio. Para antes/depois em dermatologia e radiologia.",usageExample:`<kln-image-compare
  leftImageSrc="/assets/before.jpg"
  rightImageSrc="/assets/after.jpg"
/>`},knob:{name:"Knob",selector:"kln-knob",exportedAs:"KlnKnobComponent",category:"Charts & Analytics",since:"v0.3",description:"Gauge circular para exibir um percentual ou valor em range. Ideal para KPIs circulares.",usageExample:'<kln-knob [(ngModel)]="sinistralidade" [min]="0" [max]="100" valueTemplate="{value}%" />'},"meter-group":{name:"Meter Group",selector:"kln-meter-group",exportedAs:"KlnMeterGroupComponent",category:"Charts & Analytics",since:"v0.3",description:"Barra de progresso segmentada com m\xFAltiplos valores. Para composi\xE7\xE3o de sinistros por tipo.",usageExample:`<kln-meter-group
  [value]="[
    { label: 'Consultas',   value: 35, color: '#259591' },
    { label: 'Exames',      value: 28, color: '#6AA7AE' },
    { label: 'Interna\xE7\xF5es', value: 22, color: '#CD7925' },
    { label: 'Outros',      value: 15, color: '#E05759' },
  ]"
/>`},"progress-bar":{name:"Progress Bar",selector:"kln-progress-bar",exportedAs:"KlnProgressBarComponent",category:"Charts & Analytics",since:"v0.2",description:"Barra de progresso linear determinada ou indeterminada. Para car\xEAncias, utiliza\xE7\xE3o de cobertura e uploads.",usageExample:`<!-- Determinada -->
<kln-progress-bar [value]="carencia" label="{{ carencia }}% cumprida" />

<!-- Indeterminada (carregando) -->
<kln-progress-bar mode="indeterminate" />`},"progress-spinner":{name:"Progress Spinner",selector:"kln-progress-spinner",exportedAs:"KlnProgressSpinnerComponent",category:"Charts & Analytics",since:"v0.4",description:"Spinner circular de carregamento. Substitua o [loading] state de tabelas e modais pesados.",usageExample:'<kln-progress-spinner strokeWidth="4" animationDuration=".5s" />'},message:{name:"Message",selector:"kln-message",exportedAs:"MessageComponent",category:"Feedback",since:"v0.1",description:"Mensagem inline de feedback com severidade. Usada dentro de formul\xE1rios para feedback contextual.",usageExample:`<kln-message severity="error" text="CPF inv\xE1lido. Verifique o n\xFAmero digitado." />
<kln-message severity="warn"  text="Car\xEAncia ativa para este procedimento at\xE9 01/09/2026." />
<kln-message severity="info"  text="Documenta\xE7\xE3o em an\xE1lise. Prazo: at\xE9 5 dias \xFAteis." />`},messages:{name:"Messages",selector:"kln-messages",exportedAs:"KlnMessagesComponent",category:"Feedback",since:"v0.4",description:"Lista de mensagens inline. Ideal para exibir todos os erros de valida\xE7\xE3o de uma vez.",usageExample:`<kln-messages [value]="msgs" />

// No componente:
msgs = [
  { severity: 'error', summary: 'CPF inv\xE1lido' },
  { severity: 'error', summary: 'Data de nascimento obrigat\xF3ria' },
];`},"confirm-dialog":{name:"Confirm Dialog",selector:"kln-confirm-dialog",exportedAs:"KlnConfirmDialogComponent",category:"Feedback",since:"v0.2",description:"Dialog de confirma\xE7\xE3o centralizado via KlnConfirmService. Para a\xE7\xF5es destrutivas como excluir e cancelar plano.",usageExample:`import { KlnConfirmService } from '@klini-saude/ds';

private confirm = inject(KlnConfirmService);

cancelarPlano(): void {
  this.confirm.show({
    header: 'Cancelar plano',
    message: 'Tem certeza que deseja cancelar o plano? Esta a\xE7\xE3o n\xE3o pode ser desfeita.',
    acceptLabel: 'Cancelar plano',
    rejectLabel: 'Manter plano',
    acceptSeverity: 'danger',
    accept: () => this.doCancel(),
  });
}

// No template (uma vez, no componente raiz ou shell):
<kln-confirm-dialog />`},"confirm-popup":{name:"Confirm Popup",selector:"kln-confirm-popup",exportedAs:"KlnConfirmPopupComponent",category:"Feedback",since:"v1.0",description:"Popover de confirma\xE7\xE3o ancorado ao elemento que disparou. Alternativa inline ao ConfirmDialog para a\xE7\xF5es menos cr\xEDticas.",usageExample:`<kln-button label="Remover" severity="danger" (clicked)="confirmar($event)" />
<kln-confirm-popup />

// No componente:
confirmar(event: MouseEvent): void {
  this.confirmationService.confirm({
    target: event.target as EventTarget,
    message: 'Remover este item?',
    accept: () => this.remove(),
  });
}`},"block-ui":{name:"Block UI",selector:"kln-block-ui",exportedAs:"KlnBlockUiComponent",category:"Feedback",since:"v1.0",description:"Bloqueia uma se\xE7\xE3o da interface durante opera\xE7\xF5es. Exibe overlay com spinner sobre o conte\xFAdo filho.",usageExample:`<kln-block-ui [blocked]="isProcessing">
  <kln-card header="Formul\xE1rio">
    <!-- conte\xFAdo do card -->
  </kln-card>
</kln-block-ui>`},drawer:{name:"Drawer",selector:"kln-drawer",exportedAs:"DrawerComponent",category:"Overlay",since:"v0.1",description:"Painel lateral que desliza da borda da tela. Usado para filtros avan\xE7ados, edi\xE7\xE3o r\xE1pida e menus mobile.",usageExample:`<kln-button label="Filtros avan\xE7ados" (clicked)="drawerVisible.set(true)" />

<kln-drawer [(visible)]="drawerVisible" header="Filtros" position="right">
  <!-- conte\xFAdo dos filtros -->
  <ng-template pTemplate="footer">
    <kln-button label="Aplicar filtros" (clicked)="applyFilters()" />
  </ng-template>
</kln-drawer>`},popover:{name:"Popover",selector:"kln-popover",exportedAs:"KlnPopoverComponent",category:"Overlay",since:"v0.4",description:"Popover flutuante ancorado a um elemento. Para informa\xE7\xF5es extras ou mini-formul\xE1rios contextuais.",usageExample:`<kln-button label="Detalhes" (clicked)="op.toggle($event)" />

<kln-popover #op>
  <div style="padding:16px">
    <p>Detalhes do benefici\xE1rio...</p>
  </div>
</kln-popover>`},"context-menu":{name:"Context Menu",selector:"kln-context-menu",exportedAs:"KlnContextMenuComponent",category:"Overlay",since:"v1.0",description:"Menu de contexto exibido no clique direito de um elemento. Para a\xE7\xF5es r\xE1pidas em linhas de tabela.",usageExample:`<kln-context-menu [model]="ctxItems" #cm />
<kln-table [contextMenu]="cm" [contextMenuSelection]="selectedRow" />

ctxItems: MenuItem[] = [
  { label: 'Ver detalhes', icon: 'pi pi-eye' },
  { label: 'Editar',       icon: 'pi pi-pencil' },
  { label: 'Excluir',      icon: 'pi pi-trash', severity: 'danger' },
];`},"overlay-badge":{name:"Overlay Badge",selector:"kln-overlay-badge",exportedAs:"KlnOverlayBadgeComponent",category:"Overlay",since:"v1.0",description:"Badge sobreposto a qualquer elemento filho. Para notifica\xE7\xF5es, contadores e indicadores de status.",usageExample:`<kln-overlay-badge value="3" severity="danger">
  <kln-button icon="pi pi-bell" variant="text" />
</kln-overlay-badge>`},tooltip:{name:"Tooltip",selector:"pTooltip (diretiva)",exportedAs:"TooltipModule",category:"Overlay",since:"v0.1",description:"Tooltip ao hover. Use a diretiva nativa pTooltip do PrimeNG diretamente \u2014 n\xE3o h\xE1 wrapper kln-* para tooltip.",usageExample:`import { TooltipModule } from 'primeng/tooltip';

// template
<kln-button
  icon="pi pi-info-circle"
  variant="text"
  pTooltip="Esta cobertura est\xE1 em car\xEAncia at\xE9 01/09/2026"
  tooltipPosition="top"
/>`},tabs:{name:"Tabs",selector:"kln-tabs",exportedAs:"KlnTabsComponent",category:"Navigation",since:"v0.2",description:"Painel com abas para organizar conte\xFAdo em se\xE7\xF5es. Suporta lazy loading de cada aba.",usageExample:`<kln-tabs>
  <p-tabPanel header="Dados pessoais">
    <!-- conte\xFAdo -->
  </p-tabPanel>
  <p-tabPanel header="Plano">
    <!-- conte\xFAdo -->
  </p-tabPanel>
  <p-tabPanel header="Hist\xF3rico">
    <!-- conte\xFAdo -->
  </p-tabPanel>
</kln-tabs>`},"tab-menu":{name:"Tab Menu",selector:"kln-tab-menu",exportedAs:"KlnTabMenuComponent",category:"Navigation",since:"v0.4",description:"Navega\xE7\xE3o por abas como menu horizontal. Para trocar vistas sem mudar a rota (ou com routerLink).",usageExample:`<kln-tab-menu [model]="abas" [activeItem]="abaAtiva" />

abas: MenuItem[] = [
  { label: 'Resumo',    icon: 'pi pi-home' },
  { label: 'Consultas', icon: 'pi pi-calendar' },
  { label: 'Exames',    icon: 'pi pi-file' },
];`},stepper:{name:"Stepper",selector:"kln-stepper",exportedAs:"StepperComponent",category:"Navigation",since:"v0.1",description:"Indicador de etapas para fluxos multi-step como cadastro, contrata\xE7\xE3o e onboarding.",usageExample:`import { KlnStep } from '@klini-saude/ds';

steps: KlnStep[] = [
  { label: 'Dados pessoais' },
  { label: 'Documentos' },
  { label: 'Revis\xE3o' },
  { label: 'Conclus\xE3o' },
];

<kln-stepper [steps]="steps" [activeIndex]="currentStep" />`},steps:{name:"Steps",selector:"kln-steps",exportedAs:"KlnStepsComponent",category:"Navigation",since:"v0.4",description:"Componente de passos com suporte a routerLink por etapa. Alternativa ao Stepper quando cada passo \xE9 uma rota.",usageExample:'<kln-steps [model]="stepsItems" [activeIndex]="activeStep" [readonly]="false" />'},breadcrumb:{name:"Breadcrumb",selector:"kln-breadcrumb",exportedAs:"KlnBreadcrumbComponent",category:"Navigation",since:"v0.2",description:"Trilha de navega\xE7\xE3o hier\xE1rquica. Gerada automaticamente ou configurada manualmente.",usageExample:`<kln-breadcrumb [model]="[
  { label: 'Portal', routerLink: '/' },
  { label: 'Consultas', routerLink: '/consultas' },
  { label: 'Nova consulta' },
]" />`},menu:{name:"Menu",selector:"kln-menu",exportedAs:"KlnMenuComponent",category:"Navigation",since:"v0.2",description:"Menu dropdown simples com items e separadores. Pode ser popup (ancorado) ou inline.",usageExample:`<kln-button label="A\xE7\xF5es" icon="pi pi-chevron-down" iconPos="right" (clicked)="menu.toggle($event)" />

<kln-menu #menu [model]="menuItems" [popup]="true" />`},menubar:{name:"Menubar",selector:"kln-menubar",exportedAs:"KlnMenubarComponent",category:"Navigation",since:"v0.4",description:"Barra de menu horizontal com suporte a submenus aninhados. Para navega\xE7\xE3o principal de portais.",usageExample:'<kln-menubar [model]="navItems" />'},"mega-menu":{name:"Mega Menu",selector:"kln-mega-menu",exportedAs:"KlnMegaMenuComponent",category:"Navigation",since:"v1.0",description:"Mega menu com colunas de categorias. Para navega\xE7\xE3o principal com muitas op\xE7\xF5es.",usageExample:'<kln-mega-menu [model]="megaMenuItems" orientation="horizontal" />'},"tiered-menu":{name:"Tiered Menu",selector:"kln-tiered-menu",exportedAs:"KlnTieredMenuComponent",category:"Navigation",since:"v1.0",description:"Menu com submenus em cascata. Para hierarquias profundas como categorias de procedimentos.",usageExample:'<kln-tiered-menu [model]="tieredItems" [popup]="true" />'},"panel-menu":{name:"Panel Menu",selector:"kln-panel-menu",exportedAs:"KlnPanelMenuComponent",category:"Navigation",since:"v1.0",description:"Menu accordion com submenus expans\xEDveis. Para sidebars com categorias colaps\xE1veis.",usageExample:'<kln-panel-menu [model]="panelMenuItems" [multiple]="false" />'},accordion:{name:"Accordion",selector:"kln-accordion",exportedAs:"KlnAccordionComponent",category:"Navigation",since:"v0.2",description:"Pain\xE9is expans\xEDveis para organizar conte\xFAdo em se\xE7\xF5es colaps\xE1veis. Para FAQs e detalhes de cobertura.",usageExample:`import { KlnAccordionItem } from '@klini-saude/ds';

itens: KlnAccordionItem[] = [
  { header: 'Cardiologia', content: 'Cobertura de consultas, exames e cirurgias card\xEDacas.' },
  { header: 'Ortopedia',   content: 'Cobertura de fraturas, artroscopia e cirurgias ortop\xE9dicas.' },
];

<kln-accordion [items]="itens" [multiple]="false" />`},avatar:{name:"Avatar",selector:"kln-avatar",exportedAs:"KlnAvatarComponent",category:"Layout",since:"v0.2",description:"Avatar circular com imagem, iniciais ou \xEDcone. Para representa\xE7\xE3o de usu\xE1rios e m\xE9dicos.",usageExample:`<kln-avatar image="/assets/foto-paula.jpg" size="large" shape="circle" />
<kln-avatar label="PR" size="large" shape="circle" />
<kln-avatar icon="pi pi-user" size="xlarge" shape="circle" />`},"avatar-group":{name:"Avatar Group",selector:"kln-avatar-group",exportedAs:"KlnAvatarGroupComponent",category:"Layout",since:"v0.4",description:"Grupo de avatares sobrepostos com indicador de quantidade extra.",usageExample:`<kln-avatar-group>
  <kln-avatar image="/foto1.jpg" shape="circle" />
  <kln-avatar image="/foto2.jpg" shape="circle" />
  <kln-avatar label="+3"        shape="circle" />
</kln-avatar-group>`},badge:{name:"Badge",selector:"kln-badge",exportedAs:"BadgeComponent",category:"Layout",since:"v0.1",description:"Indicador num\xE9rico ou de status. Para contadores de notifica\xE7\xF5es e indicadores de estado.",usageExample:`<kln-badge value="5" severity="danger" />
<kln-badge value="novo" severity="success" size="large" />`},tag:{name:"Tag",selector:"kln-tag",exportedAs:"TagComponent",category:"Layout",since:"v0.1",description:"Label de categoriza\xE7\xE3o com cor de fundo. Para tags de status, categorias e labels.",usageExample:`<kln-tag value="Autorizado" severity="success" />
<kln-tag value="Pendente"   severity="warn" />
<kln-tag value="Negado"     severity="danger" />`},chip:{name:"Chip",selector:"kln-chip",exportedAs:"ChipComponent",category:"Layout",since:"v0.1",description:"Chip remov\xEDvel com label e \xEDcone. Para filtros ativos, tags e sele\xE7\xF5es.",usageExample:'<kln-chip label="Cardiologia" icon="pi pi-heart" [removable]="true" (onRemove)="removeFilter()" />'},skeleton:{name:"Skeleton",selector:"kln-skeleton",exportedAs:"KlnSkeletonComponent",category:"Layout",since:"v0.2",description:"Placeholder animado de carregamento. Substitua o loading spinner para melhor UX.",usageExample:`<kln-skeleton width="100%" height="20px" />
<kln-skeleton shape="circle" size="50px" />`},divider:{name:"Divider",selector:"kln-divider",exportedAs:"DividerComponent",category:"Layout",since:"v0.1",description:"Separador visual horizontal ou vertical. Suporta texto central e alinhamento.",usageExample:`<kln-divider />
<kln-divider align="center" type="dashed"><span>ou</span></kln-divider>
<kln-divider layout="vertical" />`},"status-pill":{name:"Status Pill",selector:"kln-status-pill",exportedAs:"StatusPillComponent",category:"Layout",since:"v0.1",description:"P\xEDlula de status com ponto indicador e cor. Para status de plano, autoriza\xE7\xE3o e atendimento.",usageExample:`<kln-status-pill value="ativo" />
<kln-status-pill value="suspenso" />
<kln-status-pill value="carencia" />`},image:{name:"Image",selector:"kln-image",exportedAs:"KlnImageComponent",category:"Layout",since:"v0.4",description:"Componente de imagem com preview fullscreen ao clicar.",usageExample:'<kln-image src="/assets/exame.jpg" alt="Raio-X torax" [preview]="true" width="200" />'},toolbar:{name:"Toolbar",selector:"kln-toolbar",exportedAs:"KlnToolbarComponent",category:"Layout",since:"v0.4",description:"Barra de ferramentas com se\xE7\xF5es left, center e right. Para barras de a\xE7\xE3o de formul\xE1rios e tabelas.",usageExample:`<kln-toolbar>
  <ng-template pTemplate="start">
    <kln-button label="Novo benefici\xE1rio" icon="pi pi-plus" />
  </ng-template>
  <ng-template pTemplate="end">
    <kln-button icon="pi pi-download" variant="text" pTooltip="Exportar" />
    <kln-button icon="pi pi-filter"   variant="text" pTooltip="Filtrar" />
  </ng-template>
</kln-toolbar>`},splitter:{name:"Splitter",selector:"kln-splitter",exportedAs:"KlnSplitterComponent",category:"Layout",since:"v0.4",description:"Painel divis\xEDvel com al\xE7a de redimensionamento. Para layouts master-detail.",usageExample:`<kln-splitter>
  <p-splitterPanel [size]="30">
    <!-- Lista de pacientes -->
  </p-splitterPanel>
  <p-splitterPanel [size]="70">
    <!-- Detalhes do paciente -->
  </p-splitterPanel>
</kln-splitter>`},panel:{name:"Panel",selector:"kln-panel",exportedAs:"KlnPanelComponent",category:"Layout",since:"v0.4",description:"Container com header colaps\xE1vel. Para se\xE7\xF5es de formul\xE1rio e blocos de informa\xE7\xE3o.",usageExample:`<kln-panel header="Dados do benefici\xE1rio" [toggleable]="true">
  <!-- conte\xFAdo -->
</kln-panel>`},fieldset:{name:"Fieldset",selector:"kln-fieldset",exportedAs:"KlnFieldsetComponent",category:"Layout",since:"v0.4",description:"Fieldset HTML com legenda e borda. Para agrupar campos de formul\xE1rio semanticamente.",usageExample:`<kln-fieldset legend="Endere\xE7o" [toggleable]="true">
  <kln-input-text label="CEP" />
  <kln-input-text label="Logradouro" />
</kln-fieldset>`},"scroll-panel":{name:"Scroll Panel",selector:"kln-scroll-panel",exportedAs:"KlnScrollPanelComponent",category:"Layout",since:"v0.4",description:"Container com scrollbar estilizado (custom scrollbar Klini). Para caixas de texto longo.",usageExample:`<kln-scroll-panel style="width:100%;height:200px">
  <p>Conte\xFAdo longo com scroll estilizado...</p>
</kln-scroll-panel>`},inplace:{name:"Inplace",selector:"kln-inplace",exportedAs:"KlnInplaceComponent",category:"Misc",since:"v1.0",description:"Edi\xE7\xE3o inline \u2014 exibe valor e alterna para campo de edi\xE7\xE3o ao clicar. Para edi\xE7\xF5es r\xE1pidas sem modal.",usageExample:`<kln-inplace>
  <ng-template pTemplate="display">{{ nome || 'Clique para editar' }}</ng-template>
  <ng-template pTemplate="content">
    <kln-input-text [(ngModel)]="nome" />
  </ng-template>
</kln-inplace>`},"scroll-top":{name:"Scroll Top",selector:"kln-scroll-top",exportedAs:"KlnScrollTopComponent",category:"Misc",since:"v1.0",description:"Bot\xE3o flutuante para voltar ao topo da p\xE1gina. Aparece ap\xF3s o usu\xE1rio rolar.",usageExample:`<!-- No componente raiz ou no layout principal -->
<kln-scroll-top [threshold]="300" behavior="smooth" />`}},w=(()=>{class n{constructor(){this.route=u(x),this.params=C(this.route.params.pipe(m(a=>a))),this.slug=p(()=>this.params()?.slug??""),this.info=p(()=>S[this.slug()]??null),this.installCode=p(()=>{let a=this.info();return a?`import { ${a.exportedAs} } from '@klini-saude/ds';

@Component({
  standalone: true,
  imports: [${a.exportedAs}],
})
export class MyComponent {}`:""})}static{this.\u0275fac=function(r){return new(r||n)}}static{this.\u0275cmp=g({type:n,selectors:[["app-component-stub-page"]],standalone:!0,features:[k],decls:3,vars:1,consts:[[2,"display","flex","align-items","center","gap","12px","margin-bottom","8px"],[1,"docs-page-title",2,"margin-bottom","0"],[1,"badge","badge--version"],[1,"badge","badge--accent"],[1,"docs-page-description"],[1,"docs-section"],["language","typescript",3,"code"],[2,"border","1px solid var(--docs-border)","border-radius","8px","padding","20px","background","#fafafa","margin-top","32px"],[2,"display","flex","align-items","center","gap","8px","margin-bottom","8px"],[1,"pi","pi-info-circle",2,"color","var(--docs-accent)"],[2,"color","var(--docs-text-muted)","margin","0"],["href","https://primeng.org","target","_blank"],[1,"docs-page-title"],[1,"font-mono"]],template:function(r,y){r&1&&(o(0,"div"),v(1,E,32,7)(2,A,7,1),e()),r&2&&(l(),b(y.info()?1:2))},dependencies:[f],encapsulation:2,changeDetection:0})}}return n})();export{w as ComponentStubPageComponent};
