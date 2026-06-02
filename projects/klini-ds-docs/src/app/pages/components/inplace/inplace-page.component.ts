import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnInplaceComponent, InputTextComponent, ButtonComponent } from '@klini-saude/ds';
import { InplaceModule } from 'primeng/inplace';
import { FormsModule } from '@angular/forms';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-inplace-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnInplaceComponent, InputTextComponent, ButtonComponent, InplaceModule, FormsModule, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">Inplace</h1>
        <span class="badge badge--version">kln-inplace</span>
      </div>
      <p class="docs-page-description">
        Edição inline de dados sem abrir modais. Wrapper sobre <code class="font-mono">p-inplace</code> do PrimeNG.
        Clique no texto para ativar o modo de edição diretamente na tela.
      </p>

      <div class="docs-section">
        <h2>Edição de dados do beneficiário</h2>
        <p>Clique no texto para editar inline.</p>
        <app-component-preview [code]="codeBasic">
          <div preview style="display:flex;flex-direction:column;gap:16px;max-width:400px">
            <div>
              <p style="font-size:12px;color:var(--docs-text-muted);margin:0 0 4px;text-transform:uppercase;font-size:11px">E-mail de contato</p>
              <kln-inplace [closable]="true">
                <ng-template pTemplate="display">
                  <span style="font-size:14px;color:var(--docs-text)">carlos.silva&#64;email.com.br</span>
                </ng-template>
                <ng-template pTemplate="content">
                  <kln-input-text [(ngModel)]="email" />
                </ng-template>
              </kln-inplace>
            </div>
            <div>
              <p style="font-size:12px;color:var(--docs-text-muted);margin:0 0 4px;text-transform:uppercase;font-size:11px">Telefone</p>
              <kln-inplace [closable]="true">
                <ng-template pTemplate="display">
                  <span style="font-size:14px;color:var(--docs-text)">(11) 99999-1234</span>
                </ng-template>
                <ng-template pTemplate="content">
                  <kln-input-text [(ngModel)]="telefone" />
                </ng-template>
              </kln-inplace>
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
export class InplacePageComponent {
  email = 'carlos.silva@email.com.br';
  telefone = '(11) 99999-1234';

  codeBasic = `<!-- Importe InplaceModule de primeng/inplace -->
<kln-inplace [closable]="true">
  <ng-template pTemplate="display">
    <span>carlos.silva&#64;email.com.br</span>
  </ng-template>
  <ng-template pTemplate="content">
    <kln-input-text [(ngModel)]="email" />
  </ng-template>
</kln-inplace>`;

  props: PropDef[] = [
    { name: 'active', type: 'boolean', default: 'false', description: 'Estado ativo (modo edição).' },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Desabilita a interação.' },
    { name: 'closable', type: 'boolean', default: 'false', description: 'Exibe botão para fechar o modo de edição.' },
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais.' },
  ];
}
