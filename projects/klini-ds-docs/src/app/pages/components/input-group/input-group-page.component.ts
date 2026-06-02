import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnInputGroupComponent, InputTextComponent } from '@klini-saude/ds';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { FormsModule } from '@angular/forms';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-input-group-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnInputGroupComponent, InputTextComponent, InputGroupAddonModule, FormsModule, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">InputGroup</h1>
        <span class="badge badge--version">kln-input-group</span>
      </div>
      <p class="docs-page-description">
        Grupo de campo com prefixo e/ou sufixo (addon). Wrapper sobre <code class="font-mono">p-inputgroup</code> e
        <code class="font-mono">p-inputgroup-addon</code> do PrimeNG. Usado para campos monetários, percentuais e com ícone.
      </p>

      <div class="docs-section">
        <h2>Valor monetário</h2>
        <p>Campo de mensalidade com prefixo R$.</p>
        <app-component-preview [code]="codeMoeda">
          <div preview style="display:flex;flex-direction:column;gap:16px;max-width:360px">
            <kln-input-group>
              <p-inputgroup-addon>R$</p-inputgroup-addon>
              <kln-input-text placeholder="0,00" [(ngModel)]="mensalidade" />
            </kln-input-group>
            <kln-input-group>
              <kln-input-text placeholder="0" [(ngModel)]="percentual" />
              <p-inputgroup-addon>%</p-inputgroup-addon>
            </kln-input-group>
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Campo com ícone</h2>
        <app-component-preview [code]="codeIcon">
          <div preview style="display:flex;flex-direction:column;gap:16px;max-width:360px">
            <kln-input-group>
              <p-inputgroup-addon><i class="pi pi-user"></i></p-inputgroup-addon>
              <kln-input-text placeholder="CPF do beneficiário" [(ngModel)]="cpf" />
            </kln-input-group>
            <kln-input-group>
              <p-inputgroup-addon><i class="pi pi-phone"></i></p-inputgroup-addon>
              <kln-input-text placeholder="(11) 99999-9999" [(ngModel)]="telefone" />
              <p-inputgroup-addon><i class="pi pi-check" style="color:var(--docs-accent)"></i></p-inputgroup-addon>
            </kln-input-group>
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
export class InputGroupPageComponent {
  mensalidade = '';
  percentual = '';
  cpf = '';
  telefone = '';

  codeMoeda = `<!-- Importe InputGroupAddonModule de primeng/inputgroupaddon -->
<kln-input-group>
  <p-inputgroup-addon>R$</p-inputgroup-addon>
  <kln-input-text placeholder="0,00" [(ngModel)]="mensalidade" />
</kln-input-group>

<kln-input-group>
  <kln-input-text placeholder="0" [(ngModel)]="percentual" />
  <p-inputgroup-addon>%</p-inputgroup-addon>
</kln-input-group>`;

  codeIcon = `<kln-input-group>
  <p-inputgroup-addon><i class="pi pi-user"></i></p-inputgroup-addon>
  <kln-input-text placeholder="CPF do beneficiário" />
</kln-input-group>`;

  props: PropDef[] = [
    { name: '—', type: '—', default: '—', description: 'Sem props. Use kln-input-group como wrapper e p-inputgroup-addon como addon.' },
  ];
}
