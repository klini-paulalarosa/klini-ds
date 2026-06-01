import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnToggleComponent, ButtonComponent } from '@klini-saude/ds';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';
import { CodeBlockComponent } from '../../../shared/code-block/code-block.component';

@Component({
  selector: 'app-toggle-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    KlnToggleComponent,
    ButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    ComponentPreviewComponent,
    PropsTableComponent,
    CodeBlockComponent,
  ],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">Toggle</h1>
        <span class="badge badge--version">kln-toggle</span>
      </div>
      <p class="docs-page-description">
        Interruptor binário para ativar/desativar configurações ou preferências.
        Implementa Control Value Accessor — compatível com <code class="font-mono">ngModel</code> e
        <code class="font-mono">formControl</code>. Wrapper sobre <code class="font-mono">p-toggleswitch</code> do PrimeNG.
      </p>

      <div class="docs-section">
        <h2>Básico</h2>
        <p>Toggle simples com <code class="font-mono">[(ngModel)]</code>. Exibe o valor atual ao lado.</p>
        <app-component-preview [code]="basicCode">
          <div preview style="display:flex;align-items:center;gap:12px;flex-wrap:wrap">
            <kln-toggle [(ngModel)]="ativo" />
            <span style="font-size:0.9rem">
              Status: <strong>{{ ativo ? 'Ativo' : 'Inativo' }}</strong>
            </span>
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Com labels</h2>
        <p>Use <code class="font-mono">[onLabel]</code> e <code class="font-mono">[offLabel]</code> para textos contextuais.</p>
        <app-component-preview [code]="labelsCode">
          <div preview style="display:flex;flex-direction:column;gap:12px">
            <div style="display:flex;align-items:center;gap:12px">
              <kln-toggle [(ngModel)]="notificacoes" onLabel="Sim" offLabel="Não" />
              <span style="font-size:0.9rem">Receber notificações de consultas</span>
            </div>
            <div style="display:flex;align-items:center;gap:12px">
              <kln-toggle [(ngModel)]="emailMarketing" onLabel="Ativo" offLabel="Paused" />
              <span style="font-size:0.9rem">E-mail de promoções do plano</span>
            </div>
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Desabilitado</h2>
        <p>Use <code class="font-mono">[disabled]="true"</code> para toggles em modo somente leitura.</p>
        <app-component-preview [code]="disabledCode">
          <div preview style="display:flex;flex-direction:column;gap:12px">
            <div style="display:flex;align-items:center;gap:12px">
              <kln-toggle [ngModel]="true" [disabled]="true" />
              <span style="font-size:0.9rem;color:#6c757d">Cobertura ambulatorial (inclusa no plano)</span>
            </div>
            <div style="display:flex;align-items:center;gap:12px">
              <kln-toggle [ngModel]="false" [disabled]="true" />
              <span style="font-size:0.9rem;color:#6c757d">Cobertura odontológica (não contratada)</span>
            </div>
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Formulário reativo</h2>
        <p>Use com <code class="font-mono">formControl</code> em formulários reativos para preferências do beneficiário.</p>
        <app-component-preview [code]="reactiveCode">
          <div preview style="display:flex;flex-direction:column;gap:12px">
            <div style="display:flex;align-items:center;gap:12px">
              <kln-toggle [formControl]="receberLembretesControl" />
              <span style="font-size:0.9rem">Lembretes de consulta por WhatsApp</span>
            </div>
            <div style="display:flex;align-items:center;gap:12px">
              <kln-toggle [formControl]="acessoFamiliarControl" />
              <span style="font-size:0.9rem">Permitir acesso de dependentes ao portal</span>
            </div>
            <div style="font-size:0.8rem;color:#666;background:#f8f9fa;padding:8px 12px;border-radius:4px">
              Lembretes: <code>{{ receberLembretesControl.value }}</code> ·
              Acesso familiar: <code>{{ acessoFamiliarControl.value }}</code>
            </div>
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
export class TogglePageComponent {
  ativo = false;
  notificacoes = true;
  emailMarketing = false;

  receberLembretesControl = new FormControl(true);
  acessoFamiliarControl = new FormControl(false);

  basicCode = `<!-- Template -->
<kln-toggle [(ngModel)]="ativo" />
<span>Status: {{ ativo ? 'Ativo' : 'Inativo' }}</span>

// Classe
ativo = false;`;

  labelsCode = `<kln-toggle
  [(ngModel)]="notificacoes"
  onLabel="Sim"
  offLabel="Não" />

<kln-toggle
  [(ngModel)]="emailMarketing"
  onLabel="Ativo"
  offLabel="Paused" />`;

  disabledCode = `<!-- Toggle somente leitura (valor fixo, não editável) -->
<kln-toggle [ngModel]="true"  [disabled]="true" />
<kln-toggle [ngModel]="false" [disabled]="true" />`;

  reactiveCode = `// Classe
receberLembretesControl = new FormControl(true);
acessoFamiliarControl   = new FormControl(false);

// Template
<kln-toggle [formControl]="receberLembretesControl" />
<kln-toggle [formControl]="acessoFamiliarControl" />`;

  props: PropDef[] = [
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Desabilita o toggle. Útil para configurações gerenciadas pelo plano.' },
    { name: 'onLabel', type: 'string', default: "''", description: 'Texto exibido quando o toggle está ativo.' },
    { name: 'offLabel', type: 'string', default: "''", description: 'Texto exibido quando o toggle está inativo.' },
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais.' },
    { name: '(valueChange)', type: 'EventEmitter<boolean>', default: '—', description: 'Emite o novo valor booleano quando o usuário alterna o estado.' },
    { name: 'ngModel / formControl', type: 'boolean', default: '—', description: 'Implementa CVA — use com ngModel ou formControl para two-way binding.' },
  ];
}