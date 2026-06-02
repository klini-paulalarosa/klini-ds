import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnEmptyStateComponent } from '@klini-saude/ds';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-empty-state-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnEmptyStateComponent, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">EmptyState</h1>
        <span class="badge badge--version">kln-empty-state</span>
      </div>
      <p class="docs-page-description">
        Estado vazio para listas e telas sem conteúdo. Componente próprio do Klini DS.
        Garante consistência visual quando não há dados para exibir.
      </p>

      <div class="docs-section">
        <h2>Sem consultas</h2>
        <app-component-preview [code]="codeConsultas">
          <div preview style="padding:24px">
            <kln-empty-state
              title="Nenhuma consulta agendada"
              description="Você ainda não tem consultas agendadas. Solicite uma autorização para agendar sua consulta."
              icon="pi-calendar"
            />
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Sem documentos</h2>
        <app-component-preview [code]="codeDocs">
          <div preview style="padding:24px">
            <kln-empty-state
              title="Nenhum documento enviado"
              description="Envie laudos, exames e comprovantes para sua solicitação de reembolso."
              icon="pi-file"
            />
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Sem resultados de busca</h2>
        <app-component-preview [code]="codeBusca">
          <div preview style="padding:24px">
            <kln-empty-state
              title="Nenhum prestador encontrado"
              description="Não encontramos prestadores para a especialidade e localização informadas."
              icon="pi-search"
            />
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Props</h2>
        <app-props-table [props]="props" />
      </div>
    </div>
  `,
})
export class EmptyStatePageComponent {
  codeConsultas = `<kln-empty-state
  title="Nenhuma consulta agendada"
  description="Você ainda não tem consultas agendadas."
  icon="pi-calendar"
/>`;

  codeDocs = `<kln-empty-state
  title="Nenhum documento enviado"
  description="Envie laudos e comprovantes para sua solicitação."
  icon="pi-file"
/>`;

  codeBusca = `<kln-empty-state
  title="Nenhum prestador encontrado"
  description="Não encontramos prestadores para esta busca."
  icon="pi-search"
/>`;

  props: PropDef[] = [
    { name: 'title', type: 'string', default: "'Nenhum resultado encontrado'", description: 'Título do estado vazio.' },
    { name: 'description', type: 'string', default: "''", description: 'Descrição/sugestão de ação.' },
    { name: 'icon', type: 'string', default: "'pi-inbox'", description: 'Ícone PrimeIcons (sem prefixo pi-).' },
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais.' },
  ];
}
