import{a as m}from"./chunk-6RXJHZRI.js";import{a as c}from"./chunk-BCJF3KZG.js";import{Bb as a,Cb as e,Db as i,Xb as t,Ya as r,ec as d,fa as p,rb as s}from"./chunk-WNNFWGPB.js";var g=(()=>{class o{constructor(){this.chartProps=[{name:"type",type:"KlnChartType",default:"'bar'",description:"Tipo Chart.js: 'bar' | 'line' | 'pie' | 'doughnut' | 'radar' | 'scatter' | 'bubble' | 'polarArea'.",required:!0},{name:"data",type:"object",default:"{}",description:"Dados do gr\xE1fico \u2014 labels + datasets. Use KlnChartData para criar.",required:!0},{name:"preset",type:"KlnChartPreset | null",default:"null",description:"Preset Klini com op\xE7\xF5es pr\xE9-configuradas: 'bar' | 'bar-horizontal' | 'bar-stacked' | 'line' | 'area' | 'pie' | ... (21 op\xE7\xF5es)."},{name:"height",type:"string",default:"'300px'",description:"Altura do canvas com unidade CSS (ex: '300px', '50vh')."},{name:"width",type:"string",default:"'100%'",description:"Largura do canvas (ex: '100%', '500px')."},{name:"options",type:"object",default:"{}",description:"Op\xE7\xF5es Chart.js customizadas. Mescladas por cima do preset \u2014 o dev tem prioridade."},{name:"autoColors",type:"boolean",default:"false",description:"Aplica automaticamente a paleta categorical Klini a datasets sem cor definida."},{name:"stacked",type:"boolean",default:"false",description:`Atalho para preset='bar-stacked'. Equivalente a [preset]="'bar-stacked'".`},{name:"responsive",type:"boolean",default:"true",description:"Torna o gr\xE1fico responsivo (redimensiona com o container)."}],this.presetsCode=`// type = Chart.js type (sempre necess\xE1rio)
// preset = nome do preset Klini (define as op\xE7\xF5es visuais)

// Mapeamento type \u2192 presets compat\xEDveis:
// type="bar"      \u2192 preset: bar, bar-horizontal, bar-stacked, bar-stacked-horizontal,
//                            bar-grouped, bar-stacked-100, bar-negative, mixed
// type="line"     \u2192 preset: line, line-stepped, line-dual-axis, area, sparkline,
//                            time-series, time-series-brush
// type="pie"      \u2192 preset: pie
// type="doughnut" \u2192 preset: doughnut
// type="polarArea"\u2192 preset: polar-area
// type="radar"    \u2192 preset: radar
// type="scatter"  \u2192 preset: scatter
// type="bubble"   \u2192 preset: bubble

type KlnChartPreset =
  | 'bar' | 'bar-horizontal' | 'bar-stacked' | 'bar-stacked-horizontal'
  | 'bar-grouped' | 'bar-stacked-100' | 'bar-negative'
  | 'line' | 'line-stepped' | 'line-dual-axis' | 'area' | 'sparkline'
  | 'pie' | 'doughnut' | 'polar-area' | 'radar'
  | 'scatter' | 'bubble' | 'mixed'
  | 'time-series' | 'time-series-brush';`,this.chartDataApi=`import { KlnChartData } from '@klini-saude/ds';

// Cartesian: bar, line, area, mixed
const cartesian = KlnChartData.cartesian(
  labels: string[],
  series: KlnCartesianSeries[],  // { label, data, color?, type?, fill? }
);

// Radial: pie, doughnut, polar-area
const radial = KlnChartData.radial(
  labels: string[],
  values: number[],
  colors?: string[],  // opcional \u2014 padr\xE3o: paleta categorical
);

// Status: pie/doughnut com 5 estados sem\xE2nticos Klini
const status = KlnChartData.status(
  labels: string[],  // at\xE9 5 labels
  values: number[],  // at\xE9 5 valores
);

// Radar
const radar = KlnChartData.radar(
  labels: string[],
  series: KlnCartesianSeries[],
);

// Time Series
const timeSeries = KlnChartData.timeSeries(
  series: KlnTimeSeries[],  // { label, points: { x: string | Date, y: number }[] }
);

// Scatter
const scatter = KlnChartData.scatter(
  series: KlnPointSeries[],  // { label, points: { x, y }[] }
);

// Bubble
const bubble = KlnChartData.bubble(
  series: KlnPointSeries[],  // { label, points: { x, y, r? }[] }
);

// Mixed (bar + line)
const mixed = KlnChartData.mixed(
  labels: string[],
  series: KlnCartesianSeries[],  // cada s\xE9rie com type: 'bar' | 'line'
);`,this.tokensApi=`import { KlnChartTokens } from '@klini-saude/ds';

// Paleta categorical (4 cores prim\xE1rias)
KlnChartTokens.categorical
// => ['#259591', '#6AA7AE', '#CD7925', '#E05759']

// Paleta sequential (5 stops: wash \u2192 ink)
KlnChartTokens.sequential
// => ['#e6f7f6', '#99d4d2', '#259591', '#1d7a77', '#0e4443']

// Status (5 estados)
KlnChartTokens.status
// => { success: '#22c55e', info: '#6AA7AE', warn: '#CD7925', danger: '#E05759', secondary: '#a1a1aa' }

// Uso manual em dataset customizado:
const color = KlnChartTokens.categorical[0]; // '#259591'`,this.presetsApi=`import { KlnChartPresets, getChartPreset } from '@klini-saude/ds';

// Acessar op\xE7\xF5es Chart.js de um preset espec\xEDfico
const barOptions = getChartPreset('bar');
// { type: 'bar', options: { plugins: { legend: ... }, scales: { x: ... } } }

// Customizar um preset (merge parcial)
@Component({
  template: \`<kln-chart preset="bar" [data]="data" [options]="customOptions" />\`,
})
export class MyChart {
  customOptions = {
    plugins: {
      legend: { display: false },    // oculta a legenda
    },
    scales: {
      y: { max: 500 },               // limita o eixo Y
    },
  };
}`,this.autoColorsCode=`<!-- autoColors=false (padr\xE3o) \u2014 as cores devem ser definidas nos datasets via KlnChartData -->
<!-- KlnChartData.cartesian/radial/scatter/etc. j\xE1 aplicam as cores automaticamente -->
<kln-chart type="bar" preset="bar" [data]="data" />

<!-- autoColors=true \u2014 datasets sem cor recebem a paleta categorical do DS automaticamente -->
<!-- \xDAtil quando voc\xEA monta datasets manualmente sem usar KlnChartData -->
<kln-chart type="bar" preset="bar" [data]="rawData" [autoColors]="true" />`,this.fullExample=`import { KlnChartComponent, KlnChartData } from '@klini-saude/ds';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [KlnChartComponent],
  template: \`
    <h2>Atendimentos por especialidade</h2>
    <kln-chart
      type="bar"
      preset="bar-grouped"
      [data]="chartData"
      height="360px"
      [options]="chartOptions"
    />
  \`,
})
export class DashboardComponent {
  chartData = KlnChartData.cartesian(
    ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    [
      { label: 'Cardiologia', data: [180, 160, 210, 195, 230, 210] },
      { label: 'Pediatria',   data: [120, 110, 150, 140, 165, 158] },
    ],
  );

  // Op\xE7\xF5es customizadas s\xE3o mescladas por cima do preset
  chartOptions = {
    plugins: {
      title: {
        display: true,
        text: 'Consultas realizadas \u2014 2026',
      },
    },
  };
}`}static{this.\u0275fac=function(l){return new(l||o)}}static{this.\u0275cmp=p({type:o,selectors:[["app-chart-page"]],standalone:!0,features:[d],decls:61,vars:7,consts:[[2,"display","flex","align-items","center","gap","12px","margin-bottom","8px"],[1,"docs-page-title",2,"margin-bottom","0"],[1,"badge","badge--version"],[1,"badge","badge--accent"],[1,"docs-page-description"],[1,"font-mono"],["routerLink","/charts"],[1,"docs-section"],[3,"props"],["language","typescript",3,"code"],["language","html",3,"code"]],template:function(l,n){l&1&&(a(0,"div")(1,"div",0)(2,"h1",1),t(3,"kln-chart"),e(),a(4,"span",2),t(5,"KlnChartComponent"),e(),a(6,"span",3),t(7,"21 presets"),e()(),a(8,"p",4),t(9," Componente de gr\xE1ficos do Klini DS. Recebe um "),a(10,"code",5),t(11,"preset"),e(),t(12," e "),a(13,"code",5),t(14,"data"),e(),t(15," para renderizar qualquer um dos 21 presets pr\xE9-configurados. Para ver todos os gr\xE1ficos com exemplos interativos e c\xF3digo, acesse a "),a(16,"a",6),t(17,"p\xE1gina Charts & Analytics"),e(),t(18,". "),e(),a(19,"div",7)(20,"h2"),t(21,"Inputs do kln-chart"),e(),i(22,"app-props-table",8),e(),a(23,"div",7)(24,"h2"),t(25,"Presets dispon\xEDveis (KlnChartType)"),e(),i(26,"app-code-block",9),e(),a(27,"div",7)(28,"h2"),t(29,"KlnChartData \u2014 F\xE1bricas de dados"),e(),a(30,"p"),t(31," Classe utilit\xE1ria para criar datasets Chart.js-compat\xEDveis sem conhecer a estrutura interna. Aplica automaticamente as cores da paleta Klini. "),e(),i(32,"app-code-block",9),e(),a(33,"div",7)(34,"h2"),t(35,"KlnChartTokens \u2014 Paleta"),e(),a(36,"p"),t(37,"Resolve os CSS custom properties de cor do DS para valores hex. \xDAtil quando voc\xEA monta datasets manualmente."),e(),i(38,"app-code-block",9),e(),a(39,"div",7)(40,"h2"),t(41,"KlnChartPresets / getChartPreset"),e(),a(42,"p"),t(43,"Acesse as op\xE7\xF5es Chart.js de cada preset para customizar antes de passar para o componente."),e(),i(44,"app-code-block",9),e(),a(45,"div",7)(46,"h2"),t(47,"autoColors"),e(),a(48,"p"),t(49," O input "),a(50,"code",5),t(51,"[autoColors]"),e(),t(52," (padr\xE3o "),a(53,"code",5),t(54,"true"),e(),t(55,") aplica automaticamente as cores do DS a cada dataset sem cor definida. Desative apenas se quiser cores completamente customizadas. "),e(),i(56,"app-code-block",10),e(),a(57,"div",7)(58,"h2"),t(59,"Exemplo completo"),e(),i(60,"app-code-block",9),e()()),l&2&&(r(22),s("props",n.chartProps),r(4),s("code",n.presetsCode),r(6),s("code",n.chartDataApi),r(6),s("code",n.tokensApi),r(6),s("code",n.presetsApi),r(12),s("code",n.autoColorsCode),r(4),s("code",n.fullExample))},dependencies:[c,m],encapsulation:2,changeDetection:0})}}return o})();export{g as ChartPageComponent};
