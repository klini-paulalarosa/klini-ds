import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnTimelineComponent, KlnTimelineEvent } from '@klini-saude/ds';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-timeline-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnTimelineComponent, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">Timeline</h1>
        <span class="badge badge--version">kln-timeline</span>
      </div>
      <p class="docs-page-description">
        Linha do tempo vertical ou horizontal para eventos historicos.
        Ideal para historico de atendimentos, evolucao de plano, processos de autorizacao
        e qualquer fluxo com etapas cronologicas. Wrapper sobre <code class="font-mono">p-timeline</code> do PrimeNG.
      </p>

      <!-- Historico de atendimentos -->
      <div class="docs-section">
        <h2>Historico de atendimentos</h2>
        <p>Layout vertical esquerdo — padrao para historico de saude do beneficiario.</p>
        <app-component-preview [code]="histCode">
          <div preview style="width:100%;max-width:500px">
            <kln-timeline [events]="historico" />
          </div>
        </app-component-preview>
      </div>

      <!-- Alternado -->
      <div class="docs-section">
        <h2>Layout alternado</h2>
        <p>Use <code class="font-mono">align="alternate"</code> para exibir eventos em lados opostos — bom para linhas do tempo de processo.</p>
        <app-component-preview [code]="altCode">
          <div preview style="width:100%;max-width:600px">
            <kln-timeline [events]="processoAutorizacao" align="alternate" />
          </div>
        </app-component-preview>
      </div>

      <!-- Props -->
      <div class="docs-section">
        <h2>Props</h2>
        <app-props-table [props]="props" />
      </div>

      <!-- Interface -->
      <div class="docs-section">
        <h2>Interface KlnTimelineEvent</h2>
        <pre style="background:#18181b;color:#e4e4e7;padding:16px;border-radius:8px;font-family:monospace;font-size:13px;overflow:auto"><code>import &#123; KlnTimelineEvent &#125; from '&#64;klini-saude/ds';

interface KlnTimelineEvent &#123;
  status?:  string;   // titulo do evento (negrito)
  date?:    string;   // data/hora exibida abaixo do titulo
  icon?:    string;   // classe completa do icone (ex: 'pi pi-check')
  color?:   string;   // cor do marcador circular (padrao: teal Klini)
  content?: string;   // descricao adicional
  [key: string]: unknown; // propriedades extras para templates customizados
&#125;</code></pre>
      </div>
    </div>
  `,
})
export class TimelinePageComponent {
  historico: KlnTimelineEvent[] = [
    {
      status:  'Consulta — Cardiologia',
      date:    '28/05/2025 — 14h30',
      icon:    'pi pi-heart',
      color:   '#259591',
      content: 'Dr. Marcos Oliveira · Retorno em 90 dias',
    },
    {
      status:  'Exame — Ecocardiograma',
      date:    '10/04/2025 — 10h00',
      icon:    'pi pi-file',
      color:   '#6AA7AE',
      content: 'Resultado: dentro da normalidade',
    },
    {
      status:  'Internacao',
      date:    '12/02/2025 — 08h00',
      icon:    'pi pi-building',
      color:   '#CD7925',
      content: 'Hospital Klini Central · 3 dias · Alta em 15/02',
    },
    {
      status:  'Adesao ao plano',
      date:    '01/01/2024',
      icon:    'pi pi-check-circle',
      color:   '#259591',
      content: 'Klini Start PJ · Vigencia: 12 meses',
    },
  ];

  processoAutorizacao: KlnTimelineEvent[] = [
    { status: 'Solicitacao enviada',   date: '20/05/2025 09:12', icon: 'pi pi-send',         color: '#259591' },
    { status: 'Em analise medica',     date: '20/05/2025 11:30', icon: 'pi pi-search',        color: '#6AA7AE' },
    { status: 'Documentacao pendente', date: '21/05/2025 08:00', icon: 'pi pi-file-edit',     color: '#CD7925' },
    { status: 'Documentos enviados',   date: '21/05/2025 14:22', icon: 'pi pi-file-check',    color: '#6AA7AE' },
    { status: 'Autorizado',            date: '22/05/2025 10:05', icon: 'pi pi-check-circle',  color: '#259591' },
  ];

  histCode = `import { KlnTimelineComponent, KlnTimelineEvent } from '@klini-saude/ds';

eventos: KlnTimelineEvent[] = [
  {
    status:  'Consulta — Cardiologia',
    date:    '28/05/2025 — 14h30',
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
<kln-timeline [events]="eventos" />`;

  altCode = `<kln-timeline [events]="processoAutorizacao" align="alternate" />`;

  props: PropDef[] = [
    { name: 'events',     type: 'KlnTimelineEvent[]',           default: '[]',      description: 'Array de eventos a exibir na linha do tempo.' },
    { name: 'align',      type: "'left' | 'right' | 'alternate'", default: "'left'", description: 'Posicao do conteudo em relacao ao marcador central.' },
    { name: 'layout',     type: "'vertical' | 'horizontal'",    default: "'vertical'", description: 'Orientacao da timeline.' },
    { name: 'styleClass', type: 'string',                       default: "''",      description: 'Classes CSS adicionais no elemento raiz.' },
  ];
}
