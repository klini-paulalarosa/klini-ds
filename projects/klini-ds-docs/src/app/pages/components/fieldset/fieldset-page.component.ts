import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnFieldsetComponent, InputTextComponent } from '@klini-saude/ds';
import { FormsModule } from '@angular/forms';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-fieldset-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnFieldsetComponent, InputTextComponent, FormsModule, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">Fieldset</h1>
        <span class="badge badge--version">kln-fieldset</span>
      </div>
      <p class="docs-page-description">
        Agrupamento visual de campos com borda e legenda. Wrapper sobre <code class="font-mono">p-fieldset</code> do PrimeNG.
        Organiza seções de formulários como dados pessoais, endereço e contato.
      </p>

      <div class="docs-section">
        <h2>Dados pessoais</h2>
        <app-component-preview [code]="codeDados">
          <div preview style="display:flex;flex-direction:column;gap:16px">
            <kln-fieldset legend="Dados Pessoais">
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
                <kln-input-text label="Nome completo" [(ngModel)]="nome" />
                <kln-input-text label="CPF" [(ngModel)]="cpf" />
              </div>
            </kln-fieldset>
            <kln-fieldset legend="Endereço">
              <div style="display:grid;grid-template-columns:2fr 1fr;gap:12px">
                <kln-input-text label="Logradouro" [(ngModel)]="logradouro" />
                <kln-input-text label="Número" [(ngModel)]="numero" />
              </div>
            </kln-fieldset>
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Colapsável</h2>
        <app-component-preview [code]="codeToggle">
          <div preview>
            <kln-fieldset legend="Dependentes" [toggleable]="true" [collapsed]="true">
              <p style="font-size:13px;color:var(--docs-text-muted);margin:0">
                Nenhum dependente cadastrado. Clique em "Adicionar dependente" para incluir.
              </p>
            </kln-fieldset>
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
export class FieldsetPageComponent {
  nome = '';
  cpf = '';
  logradouro = '';
  numero = '';

  codeDados = `<kln-fieldset legend="Dados Pessoais">
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
    <kln-input-text label="Nome completo" [(ngModel)]="nome" />
    <kln-input-text label="CPF" [(ngModel)]="cpf" />
  </div>
</kln-fieldset>`;

  codeToggle = `<kln-fieldset legend="Dependentes" [toggleable]="true" [collapsed]="true">
  <!-- conteúdo colapsável -->
</kln-fieldset>`;

  props: PropDef[] = [
    { name: 'legend', type: 'string', default: "''", description: 'Texto da legenda do fieldset.' },
    { name: 'toggleable', type: 'boolean', default: 'false', description: 'Habilita botão de colapsar/expandir.' },
    { name: 'collapsed', type: 'boolean', default: 'false', description: 'Estado inicial colapsado.' },
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais.' },
  ];
}
