import{a as v}from"./chunk-KR4SXHLK.js";import{a as b}from"./chunk-6RXJHZRI.js";import{D as u,J as S}from"./chunk-ZMPL4K3C.js";import"./chunk-4IL3UCKX.js";import"./chunk-W4FWUOBX.js";import"./chunk-NMGI7OHJ.js";import"./chunk-BTGLL7MP.js";import"./chunk-4LWZMJDI.js";import"./chunk-BCJF3KZG.js";import{Bb as t,Cb as e,Db as o,Lb as l,Xb as n,Ya as a,_b as c,ec as m,fa as d,rb as p}from"./chunk-WNNFWGPB.js";var x=(()=>{class r{constructor(){this.currentStep=0,this.basicSteps=[{label:"Dados Pessoais",description:"Nome, CPF, data de nascimento"},{label:"Escolha do Plano",description:"Selecione o plano desejado"},{label:"Confirma\xE7\xE3o",description:"Revise e confirme os dados"}],this.extendedSteps=[{label:"Identifica\xE7\xE3o",description:"Dados do titular"},{label:"Dependentes",description:"Adicionar dependentes"},{label:"Plano",description:"Escolha da cobertura"},{label:"Pagamento",description:"Dados de faturamento"},{label:"Confirma\xE7\xE3o",description:"Revis\xE3o final"}],this.basicCode=`// Classe
steps: KlnStep[] = [
  { label: 'Dados Pessoais', description: 'Nome, CPF, data de nascimento' },
  { label: 'Escolha do Plano', description: 'Selecione o plano desejado' },
  { label: 'Confirma\xE7\xE3o', description: 'Revise e confirme os dados' },
];

// Template
<kln-stepper [steps]="steps" [activeStep]="0" />`,this.linearCode='<kln-stepper [steps]="steps" [activeStep]="1" [linear]="true" />',this.controlledCode=`// Template
<kln-stepper [steps]="steps" [activeStep]="currentStep" />

<kln-button
  label="Anterior"
  severity="secondary"
  variant="outlined"
  [disabled]="currentStep === 0"
  (clicked)="prevStep()" />

<kln-button
  [label]="currentStep === steps.length - 1 ? 'Concluir' : 'Pr\xF3ximo'"
  (clicked)="nextStep()" />

// Classe
currentStep = 0;

nextStep(): void {
  if (this.currentStep < this.steps.length - 1) this.currentStep++;
}

prevStep(): void {
  if (this.currentStep > 0) this.currentStep--;
}`,this.props=[{name:"steps",type:"KlnStep[]",default:"\u2014",description:"OBRIGAT\xD3RIO. Array de etapas do fluxo."},{name:"activeStep",type:"number",default:"0",description:"\xCDndice da etapa ativa (base 0)."},{name:"linear",type:"boolean",default:"false",description:"Quando true, o usu\xE1rio deve concluir as etapas em ordem."}],this.stepInterface=[{name:"label",type:"string",default:"\u2014",description:"Texto principal da etapa."},{name:"description",type:"string",default:"undefined",description:"Subtexto descritivo abaixo do label."}]}nextStep(){this.currentStep<this.extendedSteps.length-1&&this.currentStep++}prevStep(){this.currentStep>0&&this.currentStep--}static{this.\u0275fac=function(s){return new(s||r)}}static{this.\u0275cmp=d({type:r,selectors:[["app-stepper-page"]],standalone:!0,features:[m],decls:54,vars:17,consts:[[2,"display","flex","align-items","center","gap","12px","margin-bottom","8px"],[1,"docs-page-title",2,"margin-bottom","0"],[1,"badge","badge--version"],[1,"docs-page-description"],[1,"font-mono"],[1,"docs-section"],[3,"code"],["preview",""],[3,"steps","activeStep"],[3,"steps","activeStep","linear"],[2,"display","flex","justify-content","space-between","margin-top","16px","gap","8px"],["label","Anterior","severity","secondary","variant","outlined",3,"clicked","disabled"],[2,"align-self","center","font-size","0.85rem","color","#666"],[3,"clicked","label","severity"],[3,"props"]],template:function(s,i){s&1&&(t(0,"div")(1,"div",0)(2,"h1",1),n(3,"Stepper"),e(),t(4,"span",2),n(5,"kln-stepper"),e()(),t(6,"p",3),n(7," Indicador de progresso para fluxos multi-etapas. Use em processos como contrata\xE7\xE3o de plano, cadastro de benefici\xE1rio, solicita\xE7\xE3o de autoriza\xE7\xE3o e agendamento de consulta. Wrapper sobre "),t(8,"code",4),n(9,"p-steps"),e(),n(10," do PrimeNG. "),e(),t(11,"div",5)(12,"h2"),n(13,"B\xE1sico"),e(),t(14,"p"),n(15,"Tr\xEAs etapas para fluxo de ades\xE3o ao plano. O step ativo \xE9 controlado por "),t(16,"code",4),n(17,"[activeStep]"),e(),n(18,"."),e(),t(19,"app-component-preview",6)(20,"div",7),o(21,"kln-stepper",8),e()()(),t(22,"div",5)(23,"h2"),n(24,"Linear"),e(),t(25,"p"),n(26,"Com "),t(27,"code",4),n(28,'[linear]="true"'),e(),n(29,", o usu\xE1rio deve concluir as etapas na ordem."),e(),t(30,"app-component-preview",6)(31,"div",7),o(32,"kln-stepper",9),e()()(),t(33,"div",5)(34,"h2"),n(35,"Controlado"),e(),t(36,"p"),n(37,"Use bot\xF5es Anterior/Pr\xF3ximo para navegar entre etapas programaticamente."),e(),t(38,"app-component-preview",6)(39,"div",7),o(40,"kln-stepper",8),t(41,"div",10)(42,"kln-button",11),l("clicked",function(){return i.prevStep()}),e(),t(43,"span",12),n(44),e(),t(45,"kln-button",13),l("clicked",function(){return i.nextStep()}),e()()()()(),t(46,"div",5)(47,"h2"),n(48,"Props"),e(),o(49,"app-props-table",14),e(),t(50,"div",5)(51,"h2"),n(52,"Interface KlnStep"),e(),o(53,"app-props-table",14),e()()),s&2&&(a(19),p("code",i.basicCode),a(2),p("steps",i.basicSteps)("activeStep",0),a(9),p("code",i.linearCode),a(2),p("steps",i.basicSteps)("activeStep",1)("linear",!0),a(6),p("code",i.controlledCode),a(2),p("steps",i.extendedSteps)("activeStep",i.currentStep),a(2),p("disabled",i.currentStep===0),a(2),c(" Etapa ",i.currentStep+1," de ",i.extendedSteps.length," "),a(),p("label",i.currentStep===i.extendedSteps.length-1?"Concluir":"Pr\xF3ximo")("severity",i.currentStep===i.extendedSteps.length-1?"success":"primary"),a(4),p("props",i.props),a(4),p("props",i.stepInterface))},dependencies:[S,u,v,b],encapsulation:2,changeDetection:0})}}return r})();export{x as StepperPageComponent};
