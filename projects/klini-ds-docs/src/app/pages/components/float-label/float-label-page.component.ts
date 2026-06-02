import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnFloatLabelComponent, InputTextComponent } from '@klini-saude/ds';
import { FormsModule } from '@angular/forms';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-float-label-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnFloatLabelComponent, InputTextComponent, FormsModule, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">FloatLabel</h1>
        <span class="badge badge--version">kln-float-label</span>
      </div>
      <p class="docs-page-description">
        Wrapper para label flutuante sobre campos de formulário. Wrapper sobre <code class="font-mono">p-floatlabel</code> do PrimeNG.
        O label flutua para cima quando o campo recebe foco ou tem valor.
      </p>

      <div class="docs-section">
        <h2>Variante Over (padrão)</h2>
        <p>Label sobreposto ao campo, flutua ao focar.</p>
        <app-component-preview [code]="codeOver">
          <div preview style="display:flex;flex-direction:column;gap:24px;max-width:320px;padding-top:16px">
            <kln-float-label variant="over">
              <kln-input-text id="cpf" [(ngModel)]="cpf" />
              <label for="cpf">CPF do beneficiário</label>
            </kln-float-label>
            <kln-float-label variant="over">
              <kln-input-text id="carteirinha" [(ngModel)]="carteirinha" />
              <label for="carteirinha">Número da carteirinha</label>
            </kln-float-label>
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Variante In</h2>
        <p>Label dentro do campo, migra para cima ao focar.</p>
        <app-component-preview [code]="codeIn">
          <div preview style="max-width:320px;padding-top:16px">
            <kln-float-label variant="in">
              <kln-input-text id="nome" [(ngModel)]="nome" />
              <label for="nome">Nome do beneficiário</label>
            </kln-float-label>
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
export class FloatLabelPageComponent {
  cpf = '';
  carteirinha = '';
  nome = '';

  codeOver = `<kln-float-label variant="over">
  <kln-input-text id="cpf" [(ngModel)]="cpf" />
  <label for="cpf">CPF do beneficiário</label>
</kln-float-label>`;

  codeIn = `<kln-float-label variant="in">
  <kln-input-text id="nome" [(ngModel)]="nome" />
  <label for="nome">Nome do beneficiário</label>
</kln-float-label>`;

  props: PropDef[] = [
    { name: 'variant', type: "'over' | 'in' | 'on'", default: "'over'", description: 'Variante de posicionamento do label.' },
  ];
}
