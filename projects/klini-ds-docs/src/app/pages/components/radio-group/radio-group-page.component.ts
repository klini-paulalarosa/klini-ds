import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnRadioGroupComponent, KlnRadioOption } from '@klini-saude/ds';
import { FormsModule } from '@angular/forms';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-radio-group-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnRadioGroupComponent, FormsModule, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">Radio Group</h1>
        <span class="badge badge--version">kln-radio-group</span>
      </div>
      <p class="docs-page-description">
        Grupo de radio buttons com label e opcoes configuradas via <code class="font-mono">KlnRadioOption[]</code>.
        Implementa Control Value Accessor — compativel com <code class="font-mono">ngModel</code> e <code class="font-mono">formControl</code>.
      </p>

      <!-- Basico (coluna) -->
      <div class="docs-section">
        <h2>Basico — coluna</h2>
        <p>Layout padrao em coluna. Ideal para formularios de selecao de perfil ou tipo de beneficiario.</p>
        <app-component-preview [code]="basicCode">
          <div preview>
            <p style="font-size:13px;font-weight:600;margin-bottom:8px;color:var(--docs-text)">Tipo de beneficiario</p>
            <kln-radio-group
              name="tipo"
              [(ngModel)]="tipoBeneficiario"
              [options]="tipoOptions"
            />
            @if (tipoBeneficiario) {
              <p style="margin-top:12px;font-size:0.85rem;color:#666">
                Selecionado: <code>{{ tipoBeneficiario }}</code>
              </p>
            }
          </div>
        </app-component-preview>
      </div>

      <!-- Linha (row) -->
      <div class="docs-section">
        <h2>Layout linha (row)</h2>
        <p>Use <code class="font-mono">layout="row"</code> para opcoes lado a lado — ideal quando ha poucas opcoes curtas.</p>
        <app-component-preview [code]="rowCode">
          <div preview>
            <p style="font-size:13px;font-weight:600;margin-bottom:8px;color:var(--docs-text)">Sexo</p>
            <kln-radio-group
              name="sexo"
              [(ngModel)]="sexo"
              [options]="sexoOptions"
              layout="row"
            />
          </div>
        </app-component-preview>
      </div>

      <!-- Com opcao desabilitada -->
      <div class="docs-section">
        <h2>Opcoes desabilitadas</h2>
        <p>Defina <code class="font-mono">disabled: true</code> em uma opcao especifica do array para bloqueá-la.</p>
        <app-component-preview [code]="disabledOptCode">
          <div preview>
            <p style="font-size:13px;font-weight:600;margin-bottom:8px;color:var(--docs-text)">Cobertura contratada</p>
            <kln-radio-group
              name="cobertura"
              [(ngModel)]="cobertura"
              [options]="coberturaOptions"
            />
          </div>
        </app-component-preview>
      </div>

      <!-- Com erro -->
      <div class="docs-section">
        <h2>Estado de erro</h2>
        <p>Passe <code class="font-mono">[errorMessage]</code> para exibir feedback de validacao abaixo do grupo.</p>
        <app-component-preview [code]="errorCode">
          <div preview>
            <p style="font-size:13px;font-weight:600;margin-bottom:8px;color:var(--docs-text)">Plano desejado</p>
            <kln-radio-group
              name="plano"
              [(ngModel)]="plano"
              [options]="planoOptions"
              errorMessage="Selecione um plano para continuar com a proposta."
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
export class RadioGroupPageComponent {
  tipoBeneficiario = '';
  sexo = '';
  cobertura = 'ambulatorial';
  plano = '';

  tipoOptions: KlnRadioOption[] = [
    { label: 'Titular',              value: 'titular' },
    { label: 'Dependente',           value: 'dependente' },
    { label: 'Agregado (sem vinculo familiar)', value: 'agregado' },
  ];

  sexoOptions: KlnRadioOption[] = [
    { label: 'Masculino', value: 'M' },
    { label: 'Feminino',  value: 'F' },
    { label: 'Outro',     value: 'O' },
  ];

  coberturaOptions: KlnRadioOption[] = [
    { label: 'Ambulatorial',          value: 'ambulatorial' },
    { label: 'Hospitalar',            value: 'hospitalar' },
    { label: 'Ambulatorial + Hospitalar', value: 'completo' },
    { label: 'Odontologico (nao contratado)', value: 'odonto', disabled: true },
  ];

  planoOptions: KlnRadioOption[] = [
    { label: 'Klini Start — Basico',    value: 'start' },
    { label: 'Klini Plus — Intermediario', value: 'plus' },
    { label: 'Klini Prime — Completo',  value: 'prime' },
  ];

  basicCode = `import { KlnRadioGroupComponent, KlnRadioOption } from '@klini-saude/ds';

tipoOptions: KlnRadioOption[] = [
  { label: 'Titular',    value: 'titular' },
  { label: 'Dependente', value: 'dependente' },
  { label: 'Agregado',   value: 'agregado' },
];

// Template
<kln-radio-group
  name="tipo"
  [(ngModel)]="tipoBeneficiario"
  [options]="tipoOptions"
/>`;

  rowCode = `<kln-radio-group
  name="sexo"
  [(ngModel)]="sexo"
  [options]="sexoOptions"
  layout="row"
/>`;

  disabledOptCode = `tipoOptions: KlnRadioOption[] = [
  { label: 'Ambulatorial',  value: 'ambulatorial' },
  { label: 'Hospitalar',    value: 'hospitalar' },
  { label: 'Odontologico',  value: 'odonto', disabled: true },
];

<kln-radio-group name="cob" [(ngModel)]="cobertura" [options]="coberturaOptions" />`;

  errorCode = `<kln-radio-group
  name="plano"
  [(ngModel)]="plano"
  [options]="planoOptions"
  errorMessage="Selecione um plano para continuar."
/>`;

  props: PropDef[] = [
    { name: 'name',         type: 'string',          default: '—',       description: 'Nome do grupo de radio buttons (obrigatorio para agrupamento HTML).' },
    { name: 'options',      type: 'KlnRadioOption[]', default: '[]',      description: 'Array de opcoes: { label, value, disabled? }.' },
    { name: 'layout',       type: "'column' | 'row'", default: "'column'", description: 'Direcao do layout das opcoes.' },
    { name: 'errorMessage', type: 'string',           default: "''",      description: 'Mensagem de erro exibida abaixo do grupo.' },
    { name: 'disabled',     type: 'boolean',          default: 'false',   description: 'Desabilita todas as opcoes do grupo.' },
    { name: 'valueChange',  type: 'EventEmitter<any>', default: '—',      description: 'Emite o valor selecionado. Suporta ngModel e formControl.' },
  ];
}
