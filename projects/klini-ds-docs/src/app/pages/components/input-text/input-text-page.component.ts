import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextComponent } from '@klini-saude/ds';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-input-text-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, InputTextComponent, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">Input Text</h1>
        <span class="badge badge--version">kln-input-text</span>
      </div>
      <p class="docs-page-description">
        Campo de texto simples. Wrapper do <code class="font-mono">p-inputtext</code>
        do PrimeNG com suporte a label flutuante, hint text, estado de erro
        e filtro de teclado integrado.
      </p>

      <!-- Básico -->
      <div class="docs-section">
        <h2>Uso básico</h2>
        <app-component-preview [code]="basicCode">
          <div preview style="display:flex;flex-direction:column;gap:16px;width:100%;max-width:340px">
            <kln-input-text [(ngModel)]="value1" placeholder="Nome completo" />
            <kln-input-text [(ngModel)]="value2" label="E-mail" placeholder="usuario@klini.com.br" />
          </div>
        </app-component-preview>
      </div>

      <!-- Tamanhos -->
      <div class="docs-section">
        <h2>Tamanhos</h2>
        <app-component-preview [code]="sizesCode">
          <div preview style="display:flex;flex-direction:column;gap:12px;width:100%;max-width:340px">
            <kln-input-text placeholder="Small" size="small" />
            <kln-input-text placeholder="Medium (padrão)" />
            <kln-input-text placeholder="Large" size="large" />
          </div>
        </app-component-preview>
      </div>

      <!-- Error -->
      <div class="docs-section">
        <h2>Estado de erro</h2>
        <p>Passe <code class="font-mono">errorMessage</code> para exibir a mensagem de erro abaixo do campo com ícone de alerta.</p>
        <app-component-preview [code]="errorCode">
          <div preview style="display:flex;flex-direction:column;gap:12px;width:100%;max-width:340px">
            <kln-input-text
              value="cpf inválido"
              label="CPF"
              errorMessage="CPF inválido. Verifique o número digitado."
            />
          </div>
        </app-component-preview>
      </div>

      <!-- Hint -->
      <div class="docs-section">
        <h2>Hint text</h2>
        <app-component-preview [code]="hintCode">
          <div preview style="display:flex;flex-direction:column;gap:12px;width:100%;max-width:340px">
            <kln-input-text
              label="Senha"
              placeholder="Mínimo 8 caracteres"
              hint="Use letras maiúsculas, minúsculas, números e símbolos."
            />
          </div>
        </app-component-preview>
      </div>

      <!-- Disabled -->
      <div class="docs-section">
        <h2>Desabilitado</h2>
        <app-component-preview [code]="disabledCode">
          <div preview style="display:flex;flex-direction:column;gap:12px;width:100%;max-width:340px">
            <kln-input-text value="Paula Rosa" label="Nome" [disabled]="true" />
          </div>
        </app-component-preview>
      </div>

      <!-- KeyFilter -->
      <div class="docs-section">
        <h2>Filtro de teclado (pKeyFilter)</h2>
        <p>Use a diretiva nativa <code class="font-mono">pKeyFilter</code> diretamente no <code class="font-mono">kln-input-text</code> ou no input interno para restringir a entrada.</p>
        <app-component-preview [code]="keyFilterCode">
          <div preview style="display:flex;flex-direction:column;gap:12px;width:100%;max-width:340px">
            <kln-input-text placeholder="Apenas números" pKeyFilter="num" label="Matrícula" />
            <kln-input-text placeholder="Apenas letras" pKeyFilter="alpha" label="Nome" />
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
export class InputTextPageComponent {
  value1 = '';
  value2 = '';

  basicCode = `<kln-input-text [(ngModel)]="name" placeholder="Nome completo" />
<kln-input-text [(ngModel)]="email" label="E-mail" placeholder="usuario@klini.com.br" />`;

  sizesCode = `<kln-input-text placeholder="Small"           size="small" />
<kln-input-text placeholder="Medium (padrão)" />
<kln-input-text placeholder="Large"           size="large" />`;

  errorCode = `<kln-input-text
  [(ngModel)]="cpf"
  label="CPF"
  [errorMessage]="cpfInvalid ? 'CPF inválido. Verifique o número digitado.' : ''"
/>`;

  hintCode = `<kln-input-text
  [(ngModel)]="password"
  label="Senha"
  placeholder="Mínimo 8 caracteres"
  hint="Use letras maiúsculas, minúsculas, números e símbolos."
/>`;

  disabledCode = `<kln-input-text [value]="user.name" label="Nome" [disabled]="true" />`;

  keyFilterCode = `<!-- Importar KeyFilter de @klini-saude/ds -->
import { KeyFilter } from '@klini-saude/ds';

<kln-input-text placeholder="Apenas números" pKeyFilter="num"   label="Matrícula" />
<kln-input-text placeholder="Apenas letras"  pKeyFilter="alpha" label="Nome" />
<kln-input-text placeholder="Int positivo"   pKeyFilter="pint"  label="Quantidade" />`;

  props: PropDef[] = [
    { name: 'label', type: 'string', default: "''", description: 'Label exibido acima do campo.' },
    { name: 'placeholder', type: 'string', default: "''", description: 'Texto placeholder do input.' },
    { name: 'hint', type: 'string', default: "''", description: 'Texto auxiliar abaixo do campo quando não há erro.' },
    { name: 'errorMessage', type: 'string', default: "''", description: 'Mensagem de erro — quando preenchida, exibe icon de erro e mensagem abaixo do campo.' },
    { name: 'size', type: 'KlnInputSize', default: 'undefined (medium)', description: "Tamanho do campo: 'small' | 'large' | undefined." },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Desabilita o campo.' },
    { name: 'floatLabel', type: 'boolean', default: 'false', description: 'Quando true, usa label flutuante (dentro do campo que sobe ao focar).' },
    { name: 'maxLength', type: 'number | null', default: 'null', description: 'Limite máximo de caracteres.' },
    { name: 'type', type: 'string', default: "'text'", description: "Tipo do input HTML: 'text' | 'email' | 'search' | etc." },
  ];
}
