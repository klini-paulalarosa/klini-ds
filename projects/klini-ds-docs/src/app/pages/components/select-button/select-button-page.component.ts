import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnSelectButtonComponent } from '@klini-saude/ds';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-select-button-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnSelectButtonComponent, FormsModule, CommonModule, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">SelectButton</h1>
        <span class="badge badge--version">kln-select-button</span>
      </div>
      <p class="docs-page-description">
        Botões de seleção exclusiva ou múltipla. Wrapper sobre <code class="font-mono">p-selectbutton</code> do PrimeNG.
        Ideal para alternar entre Titular/Dependente, Ativo/Inativo, Masculino/Feminino.
      </p>

      <div class="docs-section">
        <h2>Titular ou Dependente</h2>
        <p>Seleção exclusiva de tipo de beneficiário.</p>
        <app-component-preview [code]="codeTitular">
          <div preview style="display:flex;flex-direction:column;gap:16px">
            <kln-select-button
              [options]="tipoBeneficiario"
              optionLabel="label"
              optionValue="value"
              [(ngModel)]="tipo"
            />
            <span style="font-size:13px;color:var(--docs-text-muted)">Selecionado: {{ tipo }}</span>
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Sexo do beneficiário</h2>
        <app-component-preview [code]="codeSexo">
          <div preview style="display:flex;flex-direction:column;gap:16px">
            <kln-select-button
              [options]="sexoOptions"
              optionLabel="label"
              optionValue="value"
              [(ngModel)]="sexo"
            />
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Múltiplas especialidades</h2>
        <p>Seleção múltipla de especialidades médicas disponíveis.</p>
        <app-component-preview [code]="codeMulti">
          <div preview style="display:flex;flex-direction:column;gap:16px">
            <kln-select-button
              [options]="especialidades"
              optionLabel="label"
              optionValue="value"
              [multiple]="true"
              [(ngModel)]="especialidadesSel"
            />
            <span style="font-size:13px;color:var(--docs-text-muted)">Selecionado: {{ especialidadesSel | json }}</span>
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
export class SelectButtonPageComponent {
  tipo = 'titular';
  tipoBeneficiario = [
    { label: 'Titular', value: 'titular' },
    { label: 'Dependente', value: 'dependente' },
  ];

  sexo = 'M';
  sexoOptions = [
    { label: 'Masculino', value: 'M' },
    { label: 'Feminino', value: 'F' },
    { label: 'Outro', value: 'O' },
  ];

  especialidadesSel: string[] = ['cardiologia'];
  especialidades = [
    { label: 'Cardiologia', value: 'cardiologia' },
    { label: 'Ortopedia', value: 'ortopedia' },
    { label: 'Clínica Geral', value: 'clinica' },
  ];

  codeTitular = `<kln-select-button
  [options]="tipoBeneficiario"
  optionLabel="label"
  optionValue="value"
  [(ngModel)]="tipo"
/>`;

  codeSexo = `<kln-select-button
  [options]="sexoOptions"
  optionLabel="label"
  optionValue="value"
  [(ngModel)]="sexo"
/>`;

  codeMulti = `<kln-select-button
  [options]="especialidades"
  optionLabel="label"
  optionValue="value"
  [multiple]="true"
  [(ngModel)]="especialidadesSel"
/>`;

  props: PropDef[] = [
    { name: 'options', type: 'unknown[]', default: '[]', description: 'Array de opções.' },
    { name: 'optionLabel', type: 'string', default: "'label'", description: 'Campo do objeto usado como rótulo.' },
    { name: 'optionValue', type: 'string', default: "'value'", description: 'Campo do objeto usado como valor.' },
    { name: 'multiple', type: 'boolean', default: 'false', description: 'Permite múltipla seleção.' },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Desabilita todos os botões.' },
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais.' },
  ];
}
