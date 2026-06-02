import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CalendarComponent } from '@klini-saude/ds';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-calendar-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CalendarComponent, FormsModule, DatePipe, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">Calendar</h1>
        <span class="badge badge--version">kln-calendar</span>
      </div>
      <p class="docs-page-description">
        Seletor de data e hora para agendamento de consultas, filtros por período e
        informação de data de nascimento. Formato <code class="font-mono">dd/mm/yy</code> configurado por padrão.
        Wrapper sobre <code class="font-mono">p-datepicker</code> (PrimeNG 18).
      </p>

      <!-- Agendamento básico -->
      <div class="docs-section">
        <h2>Agendamento de consulta</h2>
        <p>Data única com <code class="font-mono">[minDate]</code> para bloquear datas passadas.</p>
        <app-component-preview [code]="basicCode">
          <div preview style="width:100%;max-width:300px;display:flex;flex-direction:column;gap:4px">
            <label style="font-size:13px;font-weight:600;color:var(--docs-text)">Data da consulta</label>
            <kln-calendar
              [(ngModel)]="dataConsulta"
              placeholder="Selecione a data"
              [showIcon]="true"
              [minDate]="hoje"
            />
            @if (dataConsulta) {
              <p style="margin-top:4px;font-size:12px;color:var(--docs-text-muted)">
                Agendado para: {{ dataConsulta | date:'dd/MM/yyyy' }}
              </p>
            }
          </div>
        </app-component-preview>
      </div>

      <!-- Intervalo de datas -->
      <div class="docs-section">
        <h2>Intervalo de datas — filtro de período</h2>
        <p>
          Use <code class="font-mono">selectionMode="range"</code> para relatórios de sinistralidade,
          histórico de atendimentos e exportação de boletos.
        </p>
        <app-component-preview [code]="rangeCode">
          <div preview style="width:100%;max-width:320px;display:flex;flex-direction:column;gap:4px">
            <label style="font-size:13px;font-weight:600;color:var(--docs-text)">Período do relatório</label>
            <kln-calendar
              [(ngModel)]="periodoRelatorio"
              selectionMode="range"
              placeholder="Início — Fim"
              [showIcon]="true"
            />
            @if (periodoRelatorio?.[0] && periodoRelatorio?.[1]) {
              <p style="margin-top:4px;font-size:12px;color:var(--docs-text-muted)">
                De {{ periodoRelatorio[0] | date:'dd/MM/yyyy' }}
                até {{ periodoRelatorio[1] | date:'dd/MM/yyyy' }}
              </p>
            }
          </div>
        </app-component-preview>
      </div>

      <!-- Data + hora -->
      <div class="docs-section">
        <h2>Data e hora</h2>
        <p>
          Use <code class="font-mono">[showTime]="true"</code> para registro de internação,
          urgência ou controle de produtividade de médicos.
        </p>
        <app-component-preview [code]="timeCode">
          <div preview style="width:100%;max-width:300px;display:flex;flex-direction:column;gap:4px">
            <label style="font-size:13px;font-weight:600;color:var(--docs-text)">Entrada na internação</label>
            <kln-calendar
              [(ngModel)]="dataInternacao"
              [showTime]="true"
              placeholder="dd/mm/aaaa hh:mm"
              [showIcon]="true"
            />
          </div>
        </app-component-preview>
      </div>

      <!-- Data de nascimento -->
      <div class="docs-section">
        <h2>Data de nascimento</h2>
        <p>
          Use <code class="font-mono">[maxDate]</code> para bloquear datas futuras em campos de nascimento.
          Use <code class="font-mono">selectionMode="multiple"</code> para selecionar múltiplos dependentes.
        </p>
        <app-component-preview [code]="nascCode">
          <div preview style="display:flex;flex-wrap:wrap;gap:20px;width:100%">
            <div style="flex:1;min-width:240px;display:flex;flex-direction:column;gap:4px">
              <label style="font-size:13px;font-weight:600;color:var(--docs-text)">Data de nascimento</label>
              <kln-calendar
                [(ngModel)]="dataNascimento"
                placeholder="dd/mm/aaaa"
                [showIcon]="true"
                [maxDate]="hoje"
              />
            </div>
            <div style="flex:1;min-width:240px;display:flex;flex-direction:column;gap:4px">
              <label style="font-size:13px;font-weight:600;color:var(--docs-text)">Datas de ausência</label>
              <kln-calendar
                [(ngModel)]="datasMultiplas"
                selectionMode="multiple"
                placeholder="Selecione múltiplas datas"
                [showIcon]="true"
              />
            </div>
          </div>
        </app-component-preview>
      </div>

      <!-- Inline -->
      <div class="docs-section">
        <h2>Calendário inline</h2>
        <p>
          Use <code class="font-mono">[inline]="true"</code> para exibir o picker sempre visível,
          sem input — útil em painéis de agendamento.
        </p>
        <app-component-preview [code]="inlineCode">
          <div preview style="display:flex;justify-content:center;width:100%">
            <kln-calendar
              [(ngModel)]="dataInline"
              [inline]="true"
              [showIcon]="false"
              [minDate]="hoje"
            />
          </div>
        </app-component-preview>
      </div>

      <!-- Props -->
      <div class="docs-section">
        <h2>Props</h2>
        <app-props-table [props]="props" />
      </div>
    </div>
  `,
})
export class CalendarPageComponent {
  hoje = new Date();

  dataConsulta:     Date | null = null;
  periodoRelatorio: (Date | null)[] = [];
  dataInternacao:   Date | null = null;
  dataNascimento:   Date | null = null;
  datasMultiplas:   Date[] = [];
  dataInline:       Date | null = null;

  basicCode = `import { CalendarComponent } from '@klini-saude/ds';
import { FormsModule } from '@angular/forms';

hoje = new Date();

<kln-calendar
  [(ngModel)]="dataConsulta"
  placeholder="Selecione a data"
  [showIcon]="true"
  [minDate]="hoje"
/>`;

  rangeCode = `<kln-calendar
  [(ngModel)]="periodo"
  selectionMode="range"
  placeholder="Início — Fim"
  [showIcon]="true"
/>`;

  timeCode = `<kln-calendar
  [(ngModel)]="dataInternacao"
  [showTime]="true"
  placeholder="dd/mm/aaaa hh:mm"
  [showIcon]="true"
/>`;

  nascCode = `<!-- Data de nascimento — bloquear futuro -->
<kln-calendar
  [(ngModel)]="dataNascimento"
  [maxDate]="hoje"
  [showIcon]="true"
/>

<!-- Múltiplas datas (ex: ausências) -->
<kln-calendar
  [(ngModel)]="datasMultiplas"
  selectionMode="multiple"
  [showIcon]="true"
/>`;

  inlineCode = `<!-- Sempre visível — painel de agendamento -->
<kln-calendar
  [(ngModel)]="data"
  [inline]="true"
  [showIcon]="false"
  [minDate]="hoje"
/>`;

  props: PropDef[] = [
    { name: 'selectionMode',  type: "'single' | 'range' | 'multiple'", default: "'single'",    description: 'Modo de seleção: data única, intervalo ou múltiplas datas.' },
    { name: 'dateFormat',     type: 'string',  default: "'dd/mm/yy'", description: "Formato de exibição. Padrão pt-BR já configurado." },
    { name: 'minDate',        type: 'Date',    default: 'undefined',  description: 'Data mínima selecionável. Use new Date() para bloquear passado.' },
    { name: 'maxDate',        type: 'Date',    default: 'undefined',  description: 'Data máxima selecionável. Use new Date() para bloquear futuro.' },
    { name: 'showIcon',       type: 'boolean', default: 'true',       description: 'Exibe ícone de calendário à direita do campo.' },
    { name: 'showTime',       type: 'boolean', default: 'false',      description: 'Habilita seleção de hora além da data.' },
    { name: 'showSeconds',    type: 'boolean', default: 'false',      description: 'Exibe seletor de segundos (requer showTime=true).' },
    { name: 'inline',         type: 'boolean', default: 'false',      description: 'Exibe o calendário sempre expandido, sem input.' },
    { name: 'placeholder',    type: 'string',  default: "''",         description: 'Texto placeholder do campo.' },
    { name: 'label',          type: 'string',  default: "''",         description: 'Label acima do campo. Alternativa ao label externo.' },
    { name: 'floatLabel',     type: 'boolean', default: 'false',      description: 'Usa FloatLabel do PrimeNG (label flutuante).' },
    { name: 'disabled',       type: 'boolean', default: 'false',      description: 'Desabilita o componente.' },
    { name: 'styleClass',     type: 'string',  default: "''",         description: 'Classes CSS adicionais no container.' },
  ];
}
