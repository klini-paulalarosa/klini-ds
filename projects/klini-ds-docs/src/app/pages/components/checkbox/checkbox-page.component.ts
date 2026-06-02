import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { KlnCheckboxComponent } from '@klini-saude/ds';
import { FormsModule } from '@angular/forms';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-checkbox-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnCheckboxComponent, FormsModule, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">Checkbox</h1>
        <span class="badge badge--version">kln-checkbox</span>
      </div>
      <p class="docs-page-description">
        Caixa de seleção para opções booleanas ou múltipla escolha.
        Fundamental em termos de adesão, consentimento LGPD, coberturas e filtros de rede credenciada.
        Wrapper sobre <code class="font-mono">p-checkbox</code> do PrimeNG.
      </p>

      <!-- Consentimentos e termos -->
      <div class="docs-section">
        <h2>Consentimentos — termos de adesão</h2>
        <p>Padrão para aceite de termos, LGPD e comunicações em fluxo de onboarding do beneficiário.</p>
        <app-component-preview [code]="basicCode">
          <div preview style="display:flex;flex-direction:column;gap:12px">
            <div style="display:flex;align-items:flex-start;gap:10px">
              <kln-checkbox [(ngModel)]="termoAdesao" inputId="termo-adesao" />
              <label for="termo-adesao" style="font-size:14px;cursor:pointer;color:var(--docs-text);line-height:1.5">
                Li e aceito os <strong>Termos de Adesão ao Plano Klini</strong> e o Contrato de Prestação de Serviços
              </label>
            </div>
            <div style="display:flex;align-items:flex-start;gap:10px">
              <kln-checkbox [(ngModel)]="lgpd" inputId="lgpd" />
              <label for="lgpd" style="font-size:14px;cursor:pointer;color:var(--docs-text);line-height:1.5">
                Autorizo o tratamento dos meus dados pessoais e de saúde conforme a <strong>LGPD (Lei 13.709/2018)</strong>
              </label>
            </div>
            <div style="display:flex;align-items:center;gap:10px">
              <kln-checkbox [(ngModel)]="newsletter" inputId="newsletter" />
              <label for="newsletter" style="font-size:14px;cursor:pointer;color:var(--docs-text)">
                Desejo receber comunicações sobre meu plano por e-mail
              </label>
            </div>
            @if (termoAdesao || lgpd || newsletter) {
              <p style="font-size:12px;color:var(--docs-accent);margin-top:4px">
                <i class="pi pi-check-circle" style="font-size:11px"></i>
                Selecionados: {{ consentimentosSelecionados() }}
              </p>
            }
          </div>
        </app-component-preview>
      </div>

      <!-- Coberturas — múltipla escolha manual -->
      <div class="docs-section">
        <h2>Coberturas do plano</h2>
        <p>Cada cobertura é um checkbox independente. Combine <code class="font-mono">[binary]="true"</code> com um objeto de controle para múltipla escolha.</p>
        <app-component-preview [code]="multiCode">
          <div preview style="display:flex;flex-direction:column;gap:10px">
            @for (cobertura of coberturas; track cobertura.id) {
              <div style="display:flex;align-items:center;gap:10px">
                <kln-checkbox
                  [(ngModel)]="cobertura.ativa"
                  [inputId]="cobertura.id"
                  [disabled]="cobertura.disabled"
                />
                <label [for]="cobertura.id" [style.cursor]="cobertura.disabled ? 'default' : 'pointer'"
                       style="font-size:14px;color:var(--docs-text)">
                  {{ cobertura.label }}
                  @if (cobertura.disabled) {
                    <span class="badge badge--version" style="margin-left:8px;vertical-align:middle;font-size:10px">não contratado</span>
                  }
                  @if (!cobertura.disabled && cobertura.ativa) {
                    <span class="badge badge--new" style="margin-left:8px;vertical-align:middle;font-size:10px">ativo</span>
                  }
                </label>
              </div>
            }
            @if (coberturasAtivas().length > 0) {
              <p style="margin-top:8px;font-size:12px;color:var(--docs-text-muted)">
                Coberturas ativas: <strong>{{ coberturasAtivas().join(', ') }}</strong>
              </p>
            }
          </div>
        </app-component-preview>
      </div>

      <!-- Filtros de especialidade -->
      <div class="docs-section">
        <h2>Filtro de especialidades — busca de rede</h2>
        <p>Padrão de uso em busca de rede credenciada: o usuário marca as especialidades desejadas para filtrar os prestadores.</p>
        <app-component-preview [code]="filterCode">
          <div preview style="display:flex;flex-wrap:wrap;gap:20px;width:100%">
            <div style="min-width:180px">
              <p style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--docs-text-muted);margin-bottom:10px">Especialidades</p>
              @for (esp of especialidades; track esp.id) {
                <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
                  <kln-checkbox [(ngModel)]="esp.ativa" [inputId]="esp.id" />
                  <label [for]="esp.id" style="font-size:13px;cursor:pointer;color:var(--docs-text)">{{ esp.label }}</label>
                </div>
              }
            </div>
            <div style="flex:1;min-width:200px;padding:14px;background:var(--docs-sidebar-bg);border-radius:8px;border:1px solid var(--docs-border)">
              <p style="font-size:12px;font-weight:600;color:var(--docs-text);margin-bottom:8px">Filtros ativos</p>
              @if (especialidadesAtivas().length === 0) {
                <p style="font-size:12px;color:var(--docs-text-muted)">Nenhum filtro — exibindo todos os prestadores.</p>
              } @else {
                <div style="display:flex;flex-wrap:wrap;gap:4px">
                  @for (e of especialidadesAtivas(); track e) {
                    <span class="badge badge--accent">{{ e }}</span>
                  }
                </div>
                <p style="font-size:11px;color:var(--docs-text-muted);margin-top:8px">{{ especialidadesAtivas().length }} filtro(s) aplicado(s)</p>
              }
            </div>
          </div>
        </app-component-preview>
      </div>

      <!-- Estado desabilitado -->
      <div class="docs-section">
        <h2>Estado desabilitado</h2>
        <p>Use <code class="font-mono">[disabled]="true"</code> para coberturas não contratadas ou campos somente leitura.</p>
        <app-component-preview [code]="disabledCode">
          <div preview style="display:flex;flex-direction:column;gap:12px">
            <kln-checkbox
              [(ngModel)]="coberturaBase"
              inputId="cb-base"
              label="Consultas ambulatoriais (sempre incluído — não editável)"
              [disabled]="true"
            />
            <kln-checkbox
              [(ngModel)]="coberturaOdonto"
              inputId="cb-odonto"
              label="Odontologia (não disponível neste plano)"
              [disabled]="true"
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
export class CheckboxPageComponent {
  termoAdesao = false;
  lgpd        = false;
  newsletter  = false;
  coberturaBase  = true;
  coberturaOdonto = false;

  coberturas = [
    { id: 'cob-amb',  label: 'Ambulatorial',              ativa: true,  disabled: false },
    { id: 'cob-hosp', label: 'Hospitalar com obstetrícia', ativa: true,  disabled: false },
    { id: 'cob-psico',label: 'Saúde Mental / Psicoterapia',ativa: false, disabled: false },
    { id: 'cob-fisio',label: 'Fisioterapia',              ativa: false, disabled: false },
    { id: 'cob-odont',label: 'Odontológico',              ativa: false, disabled: true  },
  ];

  especialidades = [
    { id: 'esp-cardio',  label: 'Cardiologia',  ativa: false },
    { id: 'esp-derma',   label: 'Dermatologia', ativa: false },
    { id: 'esp-ortop',   label: 'Ortopedia',    ativa: false },
    { id: 'esp-ped',     label: 'Pediatria',    ativa: false },
    { id: 'esp-psiq',    label: 'Psiquiatria',  ativa: false },
  ];

  consentimentosSelecionados = computed(() => {
    const itens = [];
    if (this.termoAdesao) itens.push('Termo');
    if (this.lgpd)        itens.push('LGPD');
    if (this.newsletter)  itens.push('Newsletter');
    return itens.join(', ');
  });

  coberturasAtivas = computed(() =>
    this.coberturas.filter(c => c.ativa && !c.disabled).map(c => c.label)
  );

  especialidadesAtivas = computed(() =>
    this.especialidades.filter(e => e.ativa).map(e => e.label)
  );

  basicCode = `import { KlnCheckboxComponent } from '@klini-saude/ds';
import { FormsModule } from '@angular/forms';

// Checkbox binário simples
termoAdesao = false;

<kln-checkbox [(ngModel)]="termoAdesao" inputId="termo" />
<label for="termo">Li e aceito os Termos de Adesão</label>`;

  multiCode = `// Múltipla escolha via objetos com ngModel individual
coberturas = [
  { id: 'amb',  label: 'Ambulatorial', ativa: true,  disabled: false },
  { id: 'hosp', label: 'Hospitalar',   ativa: false, disabled: false },
  { id: 'odnt', label: 'Odontológico', ativa: false, disabled: true  },
];

@for (c of coberturas; track c.id) {
  <kln-checkbox
    [(ngModel)]="c.ativa"
    [inputId]="c.id"
    [disabled]="c.disabled"
  />
  <label [for]="c.id">{{ c.label }}</label>
}`;

  filterCode = `// Filtro — especialidades de rede credenciada
especialidades = [
  { id: 'cardio', label: 'Cardiologia', ativa: false },
  { id: 'derma',  label: 'Dermatologia', ativa: false },
  ...
];

@for (e of especialidades; track e.id) {
  <kln-checkbox [(ngModel)]="e.ativa" [inputId]="e.id" />
  <label [for]="e.id">{{ e.label }}</label>
}`;

  disabledCode = `<!-- Selecionado e bloqueado (cobertura obrigatória) -->
<kln-checkbox
  [(ngModel)]="coberturaBase"
  label="Consultas ambulatoriais"
  [disabled]="true"
/>

<!-- Não disponível neste plano -->
<kln-checkbox
  [(ngModel)]="coberturaOdonto"
  label="Odontologia (não disponível)"
  [disabled]="true"
/>`;

  props: PropDef[] = [
    { name: 'binary',      type: 'boolean', default: 'true',  description: 'ngModel recebe true/false. Use sempre true para seleção binária.' },
    { name: 'inputId',     type: 'string',  default: 'auto',  description: 'ID do input — necessário para o elemento label externo funcionar.' },
    { name: 'label',       type: 'string',  default: "''",    description: 'Label renderizada dentro do componente (alternativa ao label externo).' },
    { name: 'disabled',    type: 'boolean', default: 'false', description: 'Desabilita o checkbox visualmente e funcionalmente.' },
    { name: 'styleClass',  type: 'string',  default: "''",    description: 'Classes CSS adicionais no container.' },
    { name: 'valueChange', type: 'EventEmitter<boolean>', default: '—', description: 'Emite o novo valor ao mudar. Compatível com ngModel e formControl.' },
  ];
}
