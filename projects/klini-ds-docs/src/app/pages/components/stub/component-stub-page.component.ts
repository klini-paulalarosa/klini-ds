import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { CodeBlockComponent } from '../../../shared/code-block/code-block.component';

interface ComponentInfo {
  name: string;
  selector: string;
  exportedAs: string;
  category: string;
  description: string;
  since: string;
  usageExample: string;
}

const COMPONENT_REGISTRY: Record<string, ComponentInfo> = {
  'split-button': {
    name: 'Split Button', selector: 'kln-split-button', exportedAs: 'KlnSplitButtonComponent',
    category: 'Buttons', since: 'v0.4',
    description: 'Botão com dropdown de ações secundárias. Combina uma ação principal (click) com um menu de opções (ícone de seta). Ideal para ações com variações como "Salvar" e "Salvar e fechar".',
    usageExample: `import { KlnSplitButtonComponent } from '@klini-saude/ds';
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
/>`,
  },
  'button-group': {
    name: 'Button Group', selector: 'kln-button-group', exportedAs: 'KlnButtonGroupComponent',
    category: 'Buttons', since: 'v0.4',
    description: 'Agrupa botões visualmente sem espaço entre eles. Útil para barras de ferramentas, filtros e seleção de vista (lista/grid).',
    usageExample: `<kln-button-group>
  <kln-button label="Lista"  icon="pi pi-list" />
  <kln-button label="Grid"   icon="pi pi-th-large" />
  <kln-button label="Tabela" icon="pi pi-table" />
</kln-button-group>`,
  },
  'speed-dial': {
    name: 'Speed Dial', selector: 'kln-speed-dial', exportedAs: 'KlnSpeedDialComponent',
    category: 'Buttons', since: 'v0.4',
    description: 'FAB (Floating Action Button) com menu de ações expandível. Posicionado fixo ou relativo, expande ao hover/click para revelar ações contextuais.',
    usageExample: `import { KlnSpeedDialComponent } from '@klini-saude/ds';

items = [
  { icon: 'pi pi-pencil', command: () => this.edit() },
  { icon: 'pi pi-trash',  command: () => this.delete(), severity: 'danger' },
  { icon: 'pi pi-share',  command: () => this.share() },
];

<kln-speed-dial [model]="items" direction="up" />`,
  },
  'input-number': {
    name: 'Input Number', selector: 'kln-input-number', exportedAs: 'KlnInputNumberComponent',
    category: 'Forms', since: 'v0.2',
    description: 'Campo numérico com formatação automática de moeda, porcentagem ou número inteiro/decimal. Suporta incremento/decremento via botões.',
    usageExample: `<kln-input-number [(ngModel)]="sinistro" mode="currency" currency="BRL" locale="pt-BR" label="Valor do sinistro" />
<kln-input-number [(ngModel)]="percentual" suffix="%" [min]="0" [max]="100" label="Sinistralidade" />
<kln-input-number [(ngModel)]="quantidade" [showButtons]="true" [step]="1" label="Quantidade" />`,
  },
  'input-mask': {
    name: 'Input Mask', selector: 'kln-input-mask', exportedAs: 'KlnInputMaskComponent',
    category: 'Forms', since: 'v0.4',
    description: 'Campo de texto com máscara de entrada. Ideal para CPF, CNPJ, telefone, CEP e outros formatos fixos.',
    usageExample: `<kln-input-mask [(ngModel)]="cpf"  mask="999.999.999-99" placeholder="000.000.000-00" label="CPF" />
<kln-input-mask [(ngModel)]="tel"  mask="(99) 99999-9999"  label="Telefone" />
<kln-input-mask [(ngModel)]="cep"  mask="99999-999"         label="CEP" />`,
  },
  'input-otp': {
    name: 'Input OTP', selector: 'kln-input-otp', exportedAs: 'KlnInputOtpComponent',
    category: 'Forms', since: 'v1.0',
    description: 'Campo de código OTP (One-Time Password) com dígitos separados. Usado para autenticação de dois fatores e verificação de token.',
    usageExample: `<kln-input-otp [(ngModel)]="otpCode" [length]="6" [integerOnly]="true" (onChange)="onOtpChange($event)" />`,
  },
  'textarea': {
    name: 'Textarea', selector: 'kln-textarea', exportedAs: 'KlnTextareaComponent',
    category: 'Forms', since: 'v0.2',
    description: 'Área de texto multilinha com redimensionamento automático (autoResize) e contador de caracteres opcional.',
    usageExample: `<kln-textarea [(ngModel)]="observacoes" label="Observações clínicas" [rows]="4" [autoResize]="true" placeholder="Descreva o quadro clínico..." />`,
  },
  'password': {
    name: 'Password', selector: 'kln-password', exportedAs: 'KlnPasswordComponent',
    category: 'Forms', since: 'v0.2',
    description: 'Campo de senha com toggle de visibilidade, medidor de força da senha e sugestões de melhoria ao lado.',
    usageExample: `<kln-password [(ngModel)]="senha" label="Nova senha" [feedback]="true" [toggleMask]="true" placeholder="Mínimo 8 caracteres" />`,
  },
  'multiselect': {
    name: 'MultiSelect', selector: 'kln-multiselect', exportedAs: 'KlnMultiSelectComponent',
    category: 'Forms', since: 'v0.4',
    description: 'Seleção múltipla com busca interna e exibição por chips ou vírgula. Ideal para filtros e seleção de múltiplas especialidades/planos.',
    usageExample: `<kln-multiselect
  [(ngModel)]="selectedEspecs"
  [options]="especialidades"
  optionLabel="label"
  optionValue="value"
  placeholder="Selecione as especialidades"
  display="chip"
/>`,
  },
  'autocomplete': {
    name: 'AutoComplete', selector: 'kln-autocomplete', exportedAs: 'KlnAutoCompleteComponent',
    category: 'Forms', since: 'v0.4',
    description: 'Campo com sugestões filtradas ao digitar. Disparando (completeMethod) para busca assíncrona ou local.',
    usageExample: `<kln-autocomplete
  [(ngModel)]="selectedMedico"
  [suggestions]="suggestions"
  (completeMethod)="search($event)"
  placeholder="Buscar médico por nome ou CRM"
/>`,
  },
  'cascade-select': {
    name: 'Cascade Select', selector: 'kln-cascade-select', exportedAs: 'KlnCascadeSelectComponent',
    category: 'Forms', since: 'v0.4',
    description: 'Select hierárquico com múltiplos níveis de opções. Ideal para região > estado > cidade ou especialidade > procedimento > código TUSS.',
    usageExample: `<kln-cascade-select
  [(ngModel)]="selected"
  [options]="hierarquia"
  optionLabel="name"
  optionGroupLabel="name"
  [optionGroupChildren]="['states', 'cities']"
  placeholder="Selecione"
/>`,
  },
  'listbox': {
    name: 'Listbox', selector: 'kln-listbox', exportedAs: 'KlnListboxComponent',
    category: 'Forms', since: 'v0.4',
    description: 'Lista de seleção inline (sem dropdown). Ideal para formulários com poucas opções sempre visíveis ou filtros laterais.',
    usageExample: `<kln-listbox
  [(ngModel)]="selectedStatus"
  [options]="statusOptions"
  optionLabel="label"
  optionValue="value"
  [checkbox]="true"
  [multiple]="true"
/>`,
  },
  'select-button': {
    name: 'Select Button', selector: 'kln-select-button', exportedAs: 'KlnSelectButtonComponent',
    category: 'Forms', since: 'v0.4',
    description: 'Grupo de botões toggle para seleção de valor. Visualmente mais intuitivo que um select para poucas opções fixas.',
    usageExample: `<kln-select-button
  [(ngModel)]="periodo"
  [options]="['Semana', 'Mês', 'Trimestre', 'Ano']"
/>`,
  },
  'toggle-button': {
    name: 'Toggle Button', selector: 'kln-toggle-button', exportedAs: 'KlnToggleButtonComponent',
    category: 'Forms', since: 'v1.0',
    description: 'Botão com dois estados (on/off) e label/ícone diferente para cada estado.',
    usageExample: `<kln-toggle-button
  [(ngModel)]="ativo"
  onLabel="Ativo"
  offLabel="Inativo"
  onIcon="pi pi-check"
  offIcon="pi pi-times"
/>`,
  },
  'radio-group': {
    name: 'Radio Group', selector: 'kln-radio-group', exportedAs: 'KlnRadioGroupComponent',
    category: 'Forms', since: 'v0.2',
    description: 'Grupo de radio buttons com label e opções configuráveis via KlnRadioOption[].',
    usageExample: `import { KlnRadioGroupComponent, KlnRadioOption } from '@klini-saude/ds';

tipoPlano: KlnRadioOption[] = [
  { label: 'Titular',    value: 'titular'    },
  { label: 'Dependente', value: 'dependente' },
];

<kln-radio-group [(ngModel)]="tipo" [options]="tipoPlano" label="Tipo de beneficiário" />`,
  },
  'checkbox': {
    name: 'Checkbox', selector: 'kln-checkbox', exportedAs: 'KlnCheckboxComponent',
    category: 'Forms', since: 'v0.4',
    description: 'Checkbox standalone com label. Suporta estado indeterminado para seleção parcial em árvores.',
    usageExample: `<kln-checkbox [(ngModel)]="aceiteTermos" label="Aceito os termos de uso" />
<kln-checkbox [(ngModel)]="notificacoes" label="Receber notificações por e-mail" />`,
  },
  'toggle': {
    name: 'Toggle', selector: 'kln-toggle', exportedAs: 'KlnToggleComponent',
    category: 'Forms', since: 'v0.2',
    description: 'Switch de ativação/desativação. Equivalente visual ao toggle de configurações em mobile.',
    usageExample: `<kln-toggle [(ngModel)]="notifEmail" label="E-mail" />
<kln-toggle [(ngModel)]="notifSms"   label="SMS" />`,
  },
  'rating': {
    name: 'Rating', selector: 'kln-rating', exportedAs: 'KlnRatingComponent',
    category: 'Forms', since: 'v0.4',
    description: 'Campo de avaliação por estrelas. Útil em pesquisas de satisfação pós-consulta.',
    usageExample: `<kln-rating [(ngModel)]="satisfacao" label="Avalie sua consulta" [stars]="5" [cancel]="false" />`,
  },
  'slider': {
    name: 'Slider', selector: 'kln-slider', exportedAs: 'KlnSliderComponent',
    category: 'Forms', since: 'v0.3',
    description: 'Slider de seleção de valor numérico. Suporta modo range (dois handles) para filtros de faixa.',
    usageExample: `<kln-slider [(ngModel)]="faixaEtaria" [range]="true" [min]="0" [max]="100" label="Faixa etária" />
<kln-slider [(ngModel)]="sinistroMax" [min]="0" [max]="50000" [step]="500" label="Sinistro máximo" />`,
  },
  'calendar': {
    name: 'Calendar', selector: 'kln-calendar', exportedAs: 'CalendarComponent',
    category: 'Forms', since: 'v0.1',
    description: 'Seletor de data e hora com suporte a range, múltiplas datas, localização pt-BR e inline mode.',
    usageExample: `<kln-calendar [(ngModel)]="dataConsulta" label="Data da consulta" dateFormat="dd/mm/yy" />
<kln-calendar [(ngModel)]="periodo" label="Período" selectionMode="range" />`,
  },
  'tree-select': {
    name: 'Tree Select', selector: 'kln-tree-select', exportedAs: 'KlnTreeSelectComponent',
    category: 'Forms', since: 'v0.4',
    description: 'Select com estrutura de árvore hierárquica. Ideal para categorias aninhadas como CID-10 ou tabela TUSS.',
    usageExample: `<kln-tree-select
  [(ngModel)]="selectedCid"
  [options]="cid10Tree"
  placeholder="Selecione o CID-10"
  label="Diagnóstico principal"
/>`,
  },
  'color-picker': {
    name: 'Color Picker', selector: 'kln-color-picker', exportedAs: 'KlnColorPickerComponent',
    category: 'Forms', since: 'v1.0',
    description: 'Seletor de cor com paleta visual. Útil para personalização de perfil ou categorização de eventos em calendários.',
    usageExample: `<kln-color-picker [(ngModel)]="corCategoria" format="hex" inline="false" />`,
  },
  'icon-field': {
    name: 'Icon Field', selector: 'kln-icon-field', exportedAs: 'KlnIconFieldComponent',
    category: 'Forms', since: 'v1.0',
    description: 'Wrapper para adicionar ícone prefixado ou sufixado a qualquer campo de input PrimeNG.',
    usageExample: `<kln-icon-field iconPosition="left">
  <i class="pi pi-search"></i>
  <input pInputText placeholder="Buscar beneficiário" />
</kln-icon-field>`,
  },
  'ifta-label': {
    name: 'Ifta Label', selector: 'kln-ifta-label', exportedAs: 'KlnIftaLabelComponent',
    category: 'Forms', since: 'v1.0',
    description: 'Label IFTA (In-Field Top Aligned) que sobe quando o campo está em foco ou preenchido. Alternativa ao FloatLabel para campos que sempre mostram o label.',
    usageExample: `<kln-ifta-label>
  <input pInputText id="nome" placeholder="Nome completo" />
  <label for="nome">Nome completo</label>
</kln-ifta-label>`,
  },
  'float-label': {
    name: 'Float Label', selector: 'kln-float-label', exportedAs: 'KlnFloatLabelComponent',
    category: 'Forms', since: 'v0.4',
    description: 'Label flutuante que anima de dentro do campo para cima ao focar. Padrão Material Design.',
    usageExample: `<kln-float-label>
  <input pInputText id="email" [(ngModel)]="email" />
  <label for="email">E-mail</label>
</kln-float-label>`,
  },
  'file-upload': {
    name: 'File Upload', selector: 'kln-file-upload', exportedAs: 'KlnFileUploadComponent',
    category: 'Forms', since: 'v0.2',
    description: 'Upload de arquivos com drag and drop, preview, validação de tipo/tamanho e modo básico ou avançado.',
    usageExample: `<kln-file-upload
  [multiple]="true"
  accept="image/*,.pdf"
  [maxFileSize]="5000000"
  label="Enviar documentos"
  (uploadHandler)="onUpload($event)"
/>`,
  },
  'editor': {
    name: 'Editor', selector: 'kln-editor', exportedAs: 'KlnEditorComponent',
    category: 'Forms', since: 'v1.0',
    description: 'Editor WYSIWYG baseado em Quill. Para laudos médicos, observações clínicas e comunicados.',
    usageExample: `<kln-editor [(ngModel)]="laudo" [style]="{ height: '200px' }" />`,
  },
  'tree-table': {
    name: 'Tree Table', selector: 'kln-tree-table', exportedAs: 'KlnTreeTableComponent',
    category: 'Data Display', since: 'v1.0',
    description: 'Tabela com estrutura hierárquica expansível. Ideal para estruturas de planos, categorias ou organogramas.',
    usageExample: `<kln-tree-table [value]="planHierarchy" [columns]="cols">
  <ng-template pTemplate="header">
    <tr><th>Plano</th><th>Cobertura</th></tr>
  </ng-template>
</kln-tree-table>`,
  },
  'dataview': {
    name: 'DataView', selector: 'kln-dataview', exportedAs: 'KlnDataViewComponent',
    category: 'Data Display', since: 'v0.4',
    description: 'Exibição de dados em modo lista ou grid com paginação e layout customizável via ng-template.',
    usageExample: `<kln-dataview [value]="beneficiarios" layout="grid" [paginator]="true" [rows]="9">
  <ng-template pTemplate="grid" let-item>
    <kln-card [header]="item.nome">...</kln-card>
  </ng-template>
</kln-dataview>`,
  },
  'carousel': {
    name: 'Carousel', selector: 'kln-carousel', exportedAs: 'KlnCarouselComponent',
    category: 'Data Display', since: 'v0.4',
    description: 'Carrossel de itens com navegação por setas e indicadores. Suporta responsividade com numVisible e numScroll por breakpoint.',
    usageExample: `<kln-carousel [value]="planos" [numVisible]="3" [numScroll]="1" [circular]="true">
  <ng-template pTemplate="item" let-plano>
    <kln-card [header]="plano.nome">{{ plano.descricao }}</kln-card>
  </ng-template>
</kln-carousel>`,
  },
  'tree': {
    name: 'Tree', selector: 'kln-tree', exportedAs: 'KlnTreeComponent',
    category: 'Data Display', since: 'v0.4',
    description: 'Árvore navegável com expansão/colapso de nós. Suporta seleção de nós e drag-and-drop.',
    usageExample: `<kln-tree [value]="orgTree" selectionMode="single" [(selection)]="selectedNode" />`,
  },
  'order-list': {
    name: 'Order List', selector: 'kln-order-list', exportedAs: 'KlnOrderListComponent',
    category: 'Data Display', since: 'v0.4',
    description: 'Lista reordenável com botões para mover itens para cima/baixo ou com drag-and-drop.',
    usageExample: `<kln-order-list [value]="procedimentos" header="Procedimentos" [listStyle]="{ height: '200px' }">
  <ng-template pTemplate="item" let-item>{{ item.nome }}</ng-template>
</kln-order-list>`,
  },
  'pick-list': {
    name: 'Pick List', selector: 'kln-pick-list', exportedAs: 'KlnPickListComponent',
    category: 'Data Display', since: 'v1.0',
    description: 'Dual list para transferir itens entre duas listas. Ideal para configurar cobertura de planos.',
    usageExample: `<kln-pick-list [source]="disponíveis" [target]="selecionados" sourceHeader="Disponíveis" targetHeader="Incluídos">
  <ng-template pTemplate="item" let-item>{{ item.nome }}</ng-template>
</kln-pick-list>`,
  },
  'virtual-scroller': {
    name: 'Virtual Scroller', selector: 'kln-virtual-scroller', exportedAs: 'KlnVirtualScrollerComponent',
    category: 'Data Display', since: 'v0.4',
    description: 'Lista com renderização virtual para performance com grandes volumes de dados (10k+ itens).',
    usageExample: `<kln-virtual-scroller [items]="bigList" [itemSize]="50" style="height:400px">
  <ng-template pTemplate="item" let-item>
    <div class="list-item">{{ item.nome }}</div>
  </ng-template>
</kln-virtual-scroller>`,
  },
  'timeline': {
    name: 'Timeline', selector: 'kln-timeline', exportedAs: 'KlnTimelineComponent',
    category: 'Data Display', since: 'v0.4',
    description: 'Linha do tempo vertical ou horizontal para eventos históricos. Ideal para histórico de atendimentos.',
    usageExample: `import { KlnTimelineEvent } from '@klini-saude/ds';

eventos: KlnTimelineEvent[] = [
  { date: '01/01/2024', title: 'Adesão ao plano', icon: 'pi pi-check', color: '#259591' },
  { date: '15/03/2024', title: 'Primeira consulta — Cardiologia', icon: 'pi pi-heart' },
];

<kln-timeline [events]="eventos" />`,
  },
  'galleria': {
    name: 'Galleria', selector: 'kln-galleria', exportedAs: 'KlnGalleriaComponent',
    category: 'Data Display', since: 'v1.0',
    description: 'Galeria de imagens com thumbnails, navegação e modo fullscreen. Para exames de imagem e laudos.',
    usageExample: `<kln-galleria [value]="exames" [numVisible]="5" [circular]="true" [showThumbnails]="true">
  <ng-template pTemplate="item" let-item><img [src]="item.url" /></ng-template>
  <ng-template pTemplate="thumbnail" let-item><img [src]="item.thumb" /></ng-template>
</kln-galleria>`,
  },
  'image-compare': {
    name: 'Image Compare', selector: 'kln-image-compare', exportedAs: 'KlnImageCompareComponent',
    category: 'Data Display', since: 'v1.0',
    description: 'Comparação de duas imagens com slider divisório. Para antes/depois em dermatologia e radiologia.',
    usageExample: `<kln-image-compare
  leftImageSrc="/assets/before.jpg"
  rightImageSrc="/assets/after.jpg"
/>`,
  },
  'knob': {
    name: 'Knob', selector: 'kln-knob', exportedAs: 'KlnKnobComponent',
    category: 'Charts & Analytics', since: 'v0.3',
    description: 'Gauge circular para exibir um percentual ou valor em range. Ideal para KPIs circulares.',
    usageExample: `<kln-knob [(ngModel)]="sinistralidade" [min]="0" [max]="100" valueTemplate="{value}%" />`,
  },
  'meter-group': {
    name: 'Meter Group', selector: 'kln-meter-group', exportedAs: 'KlnMeterGroupComponent',
    category: 'Charts & Analytics', since: 'v0.3',
    description: 'Barra de progresso segmentada com múltiplos valores. Para composição de sinistros por tipo.',
    usageExample: `<kln-meter-group
  [value]="[
    { label: 'Consultas',   value: 35, color: '#259591' },
    { label: 'Exames',      value: 28, color: '#6AA7AE' },
    { label: 'Internações', value: 22, color: '#CD7925' },
    { label: 'Outros',      value: 15, color: '#E05759' },
  ]"
/>`,
  },
  'progress-bar': {
    name: 'Progress Bar', selector: 'kln-progress-bar', exportedAs: 'KlnProgressBarComponent',
    category: 'Charts & Analytics', since: 'v0.2',
    description: 'Barra de progresso linear determinada ou indeterminada. Para carências, utilização de cobertura e uploads.',
    usageExample: `<!-- Determinada -->
<kln-progress-bar [value]="carencia" label="{{ carencia }}% cumprida" />

<!-- Indeterminada (carregando) -->
<kln-progress-bar mode="indeterminate" />`,
  },
  'progress-spinner': {
    name: 'Progress Spinner', selector: 'kln-progress-spinner', exportedAs: 'KlnProgressSpinnerComponent',
    category: 'Charts & Analytics', since: 'v0.4',
    description: 'Spinner circular de carregamento. Substitua o [loading] state de tabelas e modais pesados.',
    usageExample: `<kln-progress-spinner strokeWidth="4" animationDuration=".5s" />`,
  },
  'message': {
    name: 'Message', selector: 'kln-message', exportedAs: 'MessageComponent',
    category: 'Feedback', since: 'v0.1',
    description: 'Mensagem inline de feedback com severidade. Usada dentro de formulários para feedback contextual.',
    usageExample: `<kln-message severity="error" text="CPF inválido. Verifique o número digitado." />
<kln-message severity="warn"  text="Carência ativa para este procedimento até 01/09/2026." />
<kln-message severity="info"  text="Documentação em análise. Prazo: até 5 dias úteis." />`,
  },
  'messages': {
    name: 'Messages', selector: 'kln-messages', exportedAs: 'KlnMessagesComponent',
    category: 'Feedback', since: 'v0.4',
    description: 'Lista de mensagens inline. Ideal para exibir todos os erros de validação de uma vez.',
    usageExample: `<kln-messages [value]="msgs" />

// No componente:
msgs = [
  { severity: 'error', summary: 'CPF inválido' },
  { severity: 'error', summary: 'Data de nascimento obrigatória' },
];`,
  },
  'confirm-dialog': {
    name: 'Confirm Dialog', selector: 'kln-confirm-dialog', exportedAs: 'KlnConfirmDialogComponent',
    category: 'Feedback', since: 'v0.2',
    description: 'Dialog de confirmação centralizado via KlnConfirmService. Para ações destrutivas como excluir e cancelar plano.',
    usageExample: `import { KlnConfirmService } from '@klini-saude/ds';

private confirm = inject(KlnConfirmService);

cancelarPlano(): void {
  this.confirm.show({
    header: 'Cancelar plano',
    message: 'Tem certeza que deseja cancelar o plano? Esta ação não pode ser desfeita.',
    acceptLabel: 'Cancelar plano',
    rejectLabel: 'Manter plano',
    acceptSeverity: 'danger',
    accept: () => this.doCancel(),
  });
}

// No template (uma vez, no componente raiz ou shell):
<kln-confirm-dialog />`,
  },
  'confirm-popup': {
    name: 'Confirm Popup', selector: 'kln-confirm-popup', exportedAs: 'KlnConfirmPopupComponent',
    category: 'Feedback', since: 'v1.0',
    description: 'Popover de confirmação ancorado ao elemento que disparou. Alternativa inline ao ConfirmDialog para ações menos críticas.',
    usageExample: `<kln-button label="Remover" severity="danger" (clicked)="confirmar($event)" />
<kln-confirm-popup />

// No componente:
confirmar(event: MouseEvent): void {
  this.confirmationService.confirm({
    target: event.target as EventTarget,
    message: 'Remover este item?',
    accept: () => this.remove(),
  });
}`,
  },
  'block-ui': {
    name: 'Block UI', selector: 'kln-block-ui', exportedAs: 'KlnBlockUiComponent',
    category: 'Feedback', since: 'v1.0',
    description: 'Bloqueia uma seção da interface durante operações. Exibe overlay com spinner sobre o conteúdo filho.',
    usageExample: `<kln-block-ui [blocked]="isProcessing">
  <kln-card header="Formulário">
    <!-- conteúdo do card -->
  </kln-card>
</kln-block-ui>`,
  },
  'drawer': {
    name: 'Drawer', selector: 'kln-drawer', exportedAs: 'DrawerComponent',
    category: 'Overlay', since: 'v0.1',
    description: 'Painel lateral que desliza da borda da tela. Usado para filtros avançados, edição rápida e menus mobile.',
    usageExample: `<kln-button label="Filtros avançados" (clicked)="drawerVisible.set(true)" />

<kln-drawer [(visible)]="drawerVisible" header="Filtros" position="right">
  <!-- conteúdo dos filtros -->
  <ng-template pTemplate="footer">
    <kln-button label="Aplicar filtros" (clicked)="applyFilters()" />
  </ng-template>
</kln-drawer>`,
  },
  'popover': {
    name: 'Popover', selector: 'kln-popover', exportedAs: 'KlnPopoverComponent',
    category: 'Overlay', since: 'v0.4',
    description: 'Popover flutuante ancorado a um elemento. Para informações extras ou mini-formulários contextuais.',
    usageExample: `<kln-button label="Detalhes" (clicked)="op.toggle($event)" />

<kln-popover #op>
  <div style="padding:16px">
    <p>Detalhes do beneficiário...</p>
  </div>
</kln-popover>`,
  },
  'context-menu': {
    name: 'Context Menu', selector: 'kln-context-menu', exportedAs: 'KlnContextMenuComponent',
    category: 'Overlay', since: 'v1.0',
    description: 'Menu de contexto exibido no clique direito de um elemento. Para ações rápidas em linhas de tabela.',
    usageExample: `<kln-context-menu [model]="ctxItems" #cm />
<kln-table [contextMenu]="cm" [contextMenuSelection]="selectedRow" />

ctxItems: MenuItem[] = [
  { label: 'Ver detalhes', icon: 'pi pi-eye' },
  { label: 'Editar',       icon: 'pi pi-pencil' },
  { label: 'Excluir',      icon: 'pi pi-trash', severity: 'danger' },
];`,
  },
  'overlay-badge': {
    name: 'Overlay Badge', selector: 'kln-overlay-badge', exportedAs: 'KlnOverlayBadgeComponent',
    category: 'Overlay', since: 'v1.0',
    description: 'Badge sobreposto a qualquer elemento filho. Para notificações, contadores e indicadores de status.',
    usageExample: `<kln-overlay-badge value="3" severity="danger">
  <kln-button icon="pi pi-bell" variant="text" />
</kln-overlay-badge>`,
  },
  'tooltip': {
    name: 'Tooltip', selector: 'pTooltip (diretiva)', exportedAs: 'TooltipModule',
    category: 'Overlay', since: 'v0.1',
    description: 'Tooltip ao hover. Use a diretiva nativa pTooltip do PrimeNG diretamente — não há wrapper kln-* para tooltip.',
    usageExample: `import { TooltipModule } from 'primeng/tooltip';

// template
<kln-button
  icon="pi pi-info-circle"
  variant="text"
  pTooltip="Esta cobertura está em carência até 01/09/2026"
  tooltipPosition="top"
/>`,
  },
  'tabs': {
    name: 'Tabs', selector: 'kln-tabs', exportedAs: 'KlnTabsComponent',
    category: 'Navigation', since: 'v0.2',
    description: 'Painel com abas para organizar conteúdo em seções. Suporta lazy loading de cada aba.',
    usageExample: `<kln-tabs>
  <p-tabPanel header="Dados pessoais">
    <!-- conteúdo -->
  </p-tabPanel>
  <p-tabPanel header="Plano">
    <!-- conteúdo -->
  </p-tabPanel>
  <p-tabPanel header="Histórico">
    <!-- conteúdo -->
  </p-tabPanel>
</kln-tabs>`,
  },
  'tab-menu': {
    name: 'Tab Menu', selector: 'kln-tab-menu', exportedAs: 'KlnTabMenuComponent',
    category: 'Navigation', since: 'v0.4',
    description: 'Navegação por abas como menu horizontal. Para trocar vistas sem mudar a rota (ou com routerLink).',
    usageExample: `<kln-tab-menu [model]="abas" [activeItem]="abaAtiva" />

abas: MenuItem[] = [
  { label: 'Resumo',    icon: 'pi pi-home' },
  { label: 'Consultas', icon: 'pi pi-calendar' },
  { label: 'Exames',    icon: 'pi pi-file' },
];`,
  },
  'stepper': {
    name: 'Stepper', selector: 'kln-stepper', exportedAs: 'StepperComponent',
    category: 'Navigation', since: 'v0.1',
    description: 'Indicador de etapas para fluxos multi-step como cadastro, contratação e onboarding.',
    usageExample: `import { KlnStep } from '@klini-saude/ds';

steps: KlnStep[] = [
  { label: 'Dados pessoais' },
  { label: 'Documentos' },
  { label: 'Revisão' },
  { label: 'Conclusão' },
];

<kln-stepper [steps]="steps" [activeIndex]="currentStep" />`,
  },
  'steps': {
    name: 'Steps', selector: 'kln-steps', exportedAs: 'KlnStepsComponent',
    category: 'Navigation', since: 'v0.4',
    description: 'Componente de passos com suporte a routerLink por etapa. Alternativa ao Stepper quando cada passo é uma rota.',
    usageExample: `<kln-steps [model]="stepsItems" [activeIndex]="activeStep" [readonly]="false" />`,
  },
  'breadcrumb': {
    name: 'Breadcrumb', selector: 'kln-breadcrumb', exportedAs: 'KlnBreadcrumbComponent',
    category: 'Navigation', since: 'v0.2',
    description: 'Trilha de navegação hierárquica. Gerada automaticamente ou configurada manualmente.',
    usageExample: `<kln-breadcrumb [model]="[
  { label: 'Portal', routerLink: '/' },
  { label: 'Consultas', routerLink: '/consultas' },
  { label: 'Nova consulta' },
]" />`,
  },
  'menu': {
    name: 'Menu', selector: 'kln-menu', exportedAs: 'KlnMenuComponent',
    category: 'Navigation', since: 'v0.2',
    description: 'Menu dropdown simples com items e separadores. Pode ser popup (ancorado) ou inline.',
    usageExample: `<kln-button label="Ações" icon="pi pi-chevron-down" iconPos="right" (clicked)="menu.toggle($event)" />

<kln-menu #menu [model]="menuItems" [popup]="true" />`,
  },
  'menubar': {
    name: 'Menubar', selector: 'kln-menubar', exportedAs: 'KlnMenubarComponent',
    category: 'Navigation', since: 'v0.4',
    description: 'Barra de menu horizontal com suporte a submenus aninhados. Para navegação principal de portais.',
    usageExample: `<kln-menubar [model]="navItems" />`,
  },
  'mega-menu': {
    name: 'Mega Menu', selector: 'kln-mega-menu', exportedAs: 'KlnMegaMenuComponent',
    category: 'Navigation', since: 'v1.0',
    description: 'Mega menu com colunas de categorias. Para navegação principal com muitas opções.',
    usageExample: `<kln-mega-menu [model]="megaMenuItems" orientation="horizontal" />`,
  },
  'tiered-menu': {
    name: 'Tiered Menu', selector: 'kln-tiered-menu', exportedAs: 'KlnTieredMenuComponent',
    category: 'Navigation', since: 'v1.0',
    description: 'Menu com submenus em cascata. Para hierarquias profundas como categorias de procedimentos.',
    usageExample: `<kln-tiered-menu [model]="tieredItems" [popup]="true" />`,
  },
  'panel-menu': {
    name: 'Panel Menu', selector: 'kln-panel-menu', exportedAs: 'KlnPanelMenuComponent',
    category: 'Navigation', since: 'v1.0',
    description: 'Menu accordion com submenus expansíveis. Para sidebars com categorias colapsáveis.',
    usageExample: `<kln-panel-menu [model]="panelMenuItems" [multiple]="false" />`,
  },
  'accordion': {
    name: 'Accordion', selector: 'kln-accordion', exportedAs: 'KlnAccordionComponent',
    category: 'Navigation', since: 'v0.2',
    description: 'Painéis expansíveis para organizar conteúdo em seções colapsáveis. Para FAQs e detalhes de cobertura.',
    usageExample: `import { KlnAccordionItem } from '@klini-saude/ds';

itens: KlnAccordionItem[] = [
  { header: 'Cardiologia', content: 'Cobertura de consultas, exames e cirurgias cardíacas.' },
  { header: 'Ortopedia',   content: 'Cobertura de fraturas, artroscopia e cirurgias ortopédicas.' },
];

<kln-accordion [items]="itens" [multiple]="false" />`,
  },
  'avatar': {
    name: 'Avatar', selector: 'kln-avatar', exportedAs: 'KlnAvatarComponent',
    category: 'Layout', since: 'v0.2',
    description: 'Avatar circular com imagem, iniciais ou ícone. Para representação de usuários e médicos.',
    usageExample: `<kln-avatar image="/assets/foto-paula.jpg" size="large" shape="circle" />
<kln-avatar label="PR" size="large" shape="circle" />
<kln-avatar icon="pi pi-user" size="xlarge" shape="circle" />`,
  },
  'avatar-group': {
    name: 'Avatar Group', selector: 'kln-avatar-group', exportedAs: 'KlnAvatarGroupComponent',
    category: 'Layout', since: 'v0.4',
    description: 'Grupo de avatares sobrepostos com indicador de quantidade extra.',
    usageExample: `<kln-avatar-group>
  <kln-avatar image="/foto1.jpg" shape="circle" />
  <kln-avatar image="/foto2.jpg" shape="circle" />
  <kln-avatar label="+3"        shape="circle" />
</kln-avatar-group>`,
  },
  'badge': {
    name: 'Badge', selector: 'kln-badge', exportedAs: 'BadgeComponent',
    category: 'Layout', since: 'v0.1',
    description: 'Indicador numérico ou de status. Para contadores de notificações e indicadores de estado.',
    usageExample: `<kln-badge value="5" severity="danger" />
<kln-badge value="novo" severity="success" size="large" />`,
  },
  'tag': {
    name: 'Tag', selector: 'kln-tag', exportedAs: 'TagComponent',
    category: 'Layout', since: 'v0.1',
    description: 'Label de categorização com cor de fundo. Para tags de status, categorias e labels.',
    usageExample: `<kln-tag value="Autorizado" severity="success" />
<kln-tag value="Pendente"   severity="warn" />
<kln-tag value="Negado"     severity="danger" />`,
  },
  'chip': {
    name: 'Chip', selector: 'kln-chip', exportedAs: 'ChipComponent',
    category: 'Layout', since: 'v0.1',
    description: 'Chip removível com label e ícone. Para filtros ativos, tags e seleções.',
    usageExample: `<kln-chip label="Cardiologia" icon="pi pi-heart" [removable]="true" (onRemove)="removeFilter()" />`,
  },
  'skeleton': {
    name: 'Skeleton', selector: 'kln-skeleton', exportedAs: 'KlnSkeletonComponent',
    category: 'Layout', since: 'v0.2',
    description: 'Placeholder animado de carregamento. Substitua o loading spinner para melhor UX.',
    usageExample: `<kln-skeleton width="100%" height="20px" />
<kln-skeleton shape="circle" size="50px" />`,
  },
  'divider': {
    name: 'Divider', selector: 'kln-divider', exportedAs: 'DividerComponent',
    category: 'Layout', since: 'v0.1',
    description: 'Separador visual horizontal ou vertical. Suporta texto central e alinhamento.',
    usageExample: `<kln-divider />
<kln-divider align="center" type="dashed"><span>ou</span></kln-divider>
<kln-divider layout="vertical" />`,
  },
  'status-pill': {
    name: 'Status Pill', selector: 'kln-status-pill', exportedAs: 'StatusPillComponent',
    category: 'Layout', since: 'v0.1',
    description: 'Pílula de status com ponto indicador e cor. Para status de plano, autorização e atendimento.',
    usageExample: `<kln-status-pill value="ativo" />
<kln-status-pill value="suspenso" />
<kln-status-pill value="carencia" />`,
  },
  'image': {
    name: 'Image', selector: 'kln-image', exportedAs: 'KlnImageComponent',
    category: 'Layout', since: 'v0.4',
    description: 'Componente de imagem com preview fullscreen ao clicar.',
    usageExample: `<kln-image src="/assets/exame.jpg" alt="Raio-X torax" [preview]="true" width="200" />`,
  },
  'toolbar': {
    name: 'Toolbar', selector: 'kln-toolbar', exportedAs: 'KlnToolbarComponent',
    category: 'Layout', since: 'v0.4',
    description: 'Barra de ferramentas com seções left, center e right. Para barras de ação de formulários e tabelas.',
    usageExample: `<kln-toolbar>
  <ng-template pTemplate="start">
    <kln-button label="Novo beneficiário" icon="pi pi-plus" />
  </ng-template>
  <ng-template pTemplate="end">
    <kln-button icon="pi pi-download" variant="text" pTooltip="Exportar" />
    <kln-button icon="pi pi-filter"   variant="text" pTooltip="Filtrar" />
  </ng-template>
</kln-toolbar>`,
  },
  'splitter': {
    name: 'Splitter', selector: 'kln-splitter', exportedAs: 'KlnSplitterComponent',
    category: 'Layout', since: 'v0.4',
    description: 'Painel divisível com alça de redimensionamento. Para layouts master-detail.',
    usageExample: `<kln-splitter>
  <p-splitterPanel [size]="30">
    <!-- Lista de pacientes -->
  </p-splitterPanel>
  <p-splitterPanel [size]="70">
    <!-- Detalhes do paciente -->
  </p-splitterPanel>
</kln-splitter>`,
  },
  'panel': {
    name: 'Panel', selector: 'kln-panel', exportedAs: 'KlnPanelComponent',
    category: 'Layout', since: 'v0.4',
    description: 'Container com header colapsável. Para seções de formulário e blocos de informação.',
    usageExample: `<kln-panel header="Dados do beneficiário" [toggleable]="true">
  <!-- conteúdo -->
</kln-panel>`,
  },
  'fieldset': {
    name: 'Fieldset', selector: 'kln-fieldset', exportedAs: 'KlnFieldsetComponent',
    category: 'Layout', since: 'v0.4',
    description: 'Fieldset HTML com legenda e borda. Para agrupar campos de formulário semanticamente.',
    usageExample: `<kln-fieldset legend="Endereço" [toggleable]="true">
  <kln-input-text label="CEP" />
  <kln-input-text label="Logradouro" />
</kln-fieldset>`,
  },
  'scroll-panel': {
    name: 'Scroll Panel', selector: 'kln-scroll-panel', exportedAs: 'KlnScrollPanelComponent',
    category: 'Layout', since: 'v0.4',
    description: 'Container com scrollbar estilizado (custom scrollbar Klini). Para caixas de texto longo.',
    usageExample: `<kln-scroll-panel style="width:100%;height:200px">
  <p>Conteúdo longo com scroll estilizado...</p>
</kln-scroll-panel>`,
  },
  'inplace': {
    name: 'Inplace', selector: 'kln-inplace', exportedAs: 'KlnInplaceComponent',
    category: 'Misc', since: 'v1.0',
    description: 'Edição inline — exibe valor e alterna para campo de edição ao clicar. Para edições rápidas sem modal.',
    usageExample: `<kln-inplace>
  <ng-template pTemplate="display">{{ nome || 'Clique para editar' }}</ng-template>
  <ng-template pTemplate="content">
    <kln-input-text [(ngModel)]="nome" />
  </ng-template>
</kln-inplace>`,
  },
  'scroll-top': {
    name: 'Scroll Top', selector: 'kln-scroll-top', exportedAs: 'KlnScrollTopComponent',
    category: 'Misc', since: 'v1.0',
    description: 'Botão flutuante para voltar ao topo da página. Aparece após o usuário rolar.',
    usageExample: `<!-- No componente raiz ou no layout principal -->
<kln-scroll-top [threshold]="300" behavior="smooth" />`,
  },
};

@Component({
  selector: 'app-component-stub-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CodeBlockComponent],
  template: `
    <div>
      @if (info()) {
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
          <h1 class="docs-page-title" style="margin-bottom:0">{{ info()!.name }}</h1>
          <span class="badge badge--version">{{ info()!.selector }}</span>
          <span class="badge badge--accent">{{ info()!.since }}</span>
        </div>
        <p class="docs-page-description">{{ info()!.description }}</p>

        <div class="docs-section">
          <h2>Categoria</h2>
          <p>{{ info()!.category }}</p>
        </div>

        <div class="docs-section">
          <h2>Instalação</h2>
          <app-code-block language="typescript" [code]="installCode()" />
        </div>

        <div class="docs-section">
          <h2>Uso</h2>
          <app-code-block language="typescript" [code]="info()!.usageExample" />
        </div>

        <div style="border:1px solid var(--docs-border);border-radius:8px;padding:20px;background:#fafafa;margin-top:32px">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
            <i class="pi pi-info-circle" style="color:var(--docs-accent)"></i>
            <strong>Documentação detalhada em breve</strong>
          </div>
          <p style="color:var(--docs-text-muted);margin:0">
            Esta página mostra o exemplo básico de uso do componente.
            Exemplos interativos, todas as props e eventos serão adicionados em breve.
            Consulte a <a href="https://primeng.org" target="_blank">documentação do PrimeNG</a>
            para referência completa enquanto isso.
          </p>
        </div>
      } @else {
        <h1 class="docs-page-title">Componente não encontrado</h1>
        <p class="docs-page-description">
          O slug <code class="font-mono">{{ slug() }}</code> não corresponde a nenhum
          componente registrado. Verifique a URL ou navegue pelo sidebar.
        </p>
      }
    </div>
  `,
})
export class ComponentStubPageComponent {
  private readonly route = inject(ActivatedRoute);

  private readonly params = toSignal(this.route.params.pipe(map(p => p)));

  slug = computed(() => this.params()?.['slug'] ?? '');
  info = computed<ComponentInfo | null>(() => COMPONENT_REGISTRY[this.slug()] ?? null);

  installCode = computed(() => {
    const i = this.info();
    if (!i) return '';
    return `import { ${i.exportedAs} } from '@klini-saude/ds';

@Component({
  standalone: true,
  imports: [${i.exportedAs}],
})
export class MyComponent {}`;
  });
}
