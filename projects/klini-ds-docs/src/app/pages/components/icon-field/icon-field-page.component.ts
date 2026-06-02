import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnIconFieldComponent, InputTextComponent } from '@klini-saude/ds';
import { InputIconModule } from 'primeng/inputicon';
import { FormsModule } from '@angular/forms';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-icon-field-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnIconFieldComponent, InputTextComponent, InputIconModule, FormsModule, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">IconField</h1>
        <span class="badge badge--version">kln-icon-field</span>
      </div>
      <p class="docs-page-description">
        Campo de formulário com ícone embutido. Wrapper sobre <code class="font-mono">p-iconfield</code> do PrimeNG.
        Usa <code class="font-mono">p-inputicon</code> para posicionar o ícone dentro do campo.
      </p>

      <div class="docs-section">
        <h2>Ícone à esquerda</h2>
        <p>Campo de busca de prestador com ícone de lupa.</p>
        <app-component-preview [code]="codeLeft">
          <div preview style="display:flex;flex-direction:column;gap:16px;max-width:380px">
            <kln-icon-field iconPosition="left">
              <p-inputicon class="pi pi-search" />
              <kln-input-text placeholder="Buscar prestador..." [(ngModel)]="busca" />
            </kln-icon-field>
            <kln-icon-field iconPosition="left">
              <p-inputicon class="pi pi-id-card" />
              <kln-input-text placeholder="CPF: 000.000.000-00" [(ngModel)]="cpf" />
            </kln-icon-field>
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Ícone à direita</h2>
        <app-component-preview [code]="codeRight">
          <div preview style="max-width:380px">
            <kln-icon-field iconPosition="right">
              <p-inputicon class="pi pi-calendar" />
              <kln-input-text placeholder="Data de nascimento" [(ngModel)]="dataNasc" />
            </kln-icon-field>
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
export class IconFieldPageComponent {
  busca = '';
  cpf = '';
  dataNasc = '';

  codeLeft = `<!-- Importe InputIconModule de primeng/inputicon -->
<kln-icon-field iconPosition="left">
  <p-inputicon class="pi pi-search" />
  <kln-input-text placeholder="Buscar prestador..." [(ngModel)]="busca" />
</kln-icon-field>`;

  codeRight = `<kln-icon-field iconPosition="right">
  <p-inputicon class="pi pi-calendar" />
  <kln-input-text placeholder="Data de nascimento" [(ngModel)]="dataNasc" />
</kln-icon-field>`;

  props: PropDef[] = [
    { name: 'iconPosition', type: "'left' | 'right'", default: "'left'", description: 'Posição do ícone dentro do campo.' },
  ];
}
