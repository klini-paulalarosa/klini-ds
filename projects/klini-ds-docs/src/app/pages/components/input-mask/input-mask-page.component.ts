import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnInputMaskComponent } from '@klini-saude/ds';
import { FormsModule } from '@angular/forms';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-input-mask-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnInputMaskComponent, FormsModule, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">Input Mask</h1>
        <span class="badge badge--version">kln-input-mask</span>
      </div>
      <p class="docs-page-description">
        Campo de texto com máscara de entrada para dados estruturados: CPF, CNPJ, telefone,
        data de nascimento, carteirinha e outros formatos do domínio de saúde.
        Wrapper sobre <code class="font-mono">p-inputmask</code> do PrimeNG.
      </p>

      <!-- CPF -->
      <div class="docs-section">
        <h2>CPF</h2>
        <p>Máscara <code class="font-mono">999.999.999-99</code> — identificação do beneficiário.</p>
        <app-component-preview [code]="cpfCode">
          <div preview style="width:100%;max-width:280px">
            <label style="display:block;font-size:13px;font-weight:600;margin-bottom:6px;color:var(--docs-text)">CPF do titular</label>
            <kln-input-mask
              [(ngModel)]="cpf"
              mask="999.999.999-99"
              placeholder="000.000.000-00"
              style="width:100%"
            />
            @if (cpf) {
              <p style="margin-top:8px;font-size:12px;color:var(--docs-text-muted)">Valor: {{ cpf }}</p>
            }
          </div>
        </app-component-preview>
      </div>

      <!-- CNPJ -->
      <div class="docs-section">
        <h2>CNPJ</h2>
        <p>Máscara <code class="font-mono">99.999.999/9999-99</code> — empresa contratante do plano.</p>
        <app-component-preview [code]="cnpjCode">
          <div preview style="width:100%;max-width:320px">
            <label style="display:block;font-size:13px;font-weight:600;margin-bottom:6px;color:var(--docs-text)">CNPJ da empresa</label>
            <kln-input-mask
              [(ngModel)]="cnpj"
              mask="99.999.999/9999-99"
              placeholder="00.000.000/0000-00"
              style="width:100%"
            />
          </div>
        </app-component-preview>
      </div>

      <!-- Telefone -->
      <div class="docs-section">
        <h2>Telefone e Celular</h2>
        <p>
          Celular com 9 dígitos: <code class="font-mono">(99) 99999-9999</code>.
          Use <code class="font-mono">slotChar</code> para personalizar o placeholder de slot.
        </p>
        <app-component-preview [code]="telCode">
          <div preview style="display:flex;flex-wrap:wrap;gap:16px">
            <div style="flex:1;min-width:200px">
              <label style="display:block;font-size:13px;font-weight:600;margin-bottom:6px;color:var(--docs-text)">Celular</label>
              <kln-input-mask
                [(ngModel)]="celular"
                mask="(99) 99999-9999"
                placeholder="(11) 99999-9999"
                style="width:100%"
              />
            </div>
            <div style="flex:1;min-width:200px">
              <label style="display:block;font-size:13px;font-weight:600;margin-bottom:6px;color:var(--docs-text)">Telefone fixo</label>
              <kln-input-mask
                [(ngModel)]="telefone"
                mask="(99) 9999-9999"
                placeholder="(11) 3000-0000"
                style="width:100%"
              />
            </div>
          </div>
        </app-component-preview>
      </div>

      <!-- Data de nascimento -->
      <div class="docs-section">
        <h2>Data de nascimento</h2>
        <p>Máscara <code class="font-mono">99/99/9999</code> — campo obrigatório em cadastro de beneficiário.</p>
        <app-component-preview [code]="dataNasc">
          <div preview style="width:100%;max-width:200px">
            <label style="display:block;font-size:13px;font-weight:600;margin-bottom:6px;color:var(--docs-text)">Data de nascimento</label>
            <kln-input-mask
              [(ngModel)]="dataNascimento"
              mask="99/99/9999"
              placeholder="dd/mm/aaaa"
              style="width:100%"
            />
          </div>
        </app-component-preview>
      </div>

      <!-- Carteirinha -->
      <div class="docs-section">
        <h2>Número de carteirinha</h2>
        <p>
          Formato Klini de 15 dígitos: <code class="font-mono">99999999999999-9</code>.
          O caractere separador com <code class="font-mono">slotChar="*"</code> ajuda a guiar o preenchimento.
        </p>
        <app-component-preview [code]="cartCode">
          <div preview style="width:100%;max-width:280px">
            <label style="display:block;font-size:13px;font-weight:600;margin-bottom:6px;color:var(--docs-text)">Número da carteirinha</label>
            <kln-input-mask
              [(ngModel)]="carteirinha"
              mask="999999999999999"
              placeholder="000000000000000"
              style="width:100%"
            />
          </div>
        </app-component-preview>
      </div>

      <!-- Props -->
      <div class="docs-section">
        <h2>Props</h2>
        <app-props-table [props]="props" />
      </div>

      <!-- Referência de máscaras -->
      <div class="docs-section">
        <h2>Caracteres de máscara</h2>
        <div style="border:1px solid var(--docs-border);border-radius:8px;overflow:hidden">
          <table style="width:100%;border-collapse:collapse;font-size:13px">
            <thead>
              <tr style="background:var(--docs-sidebar-bg);border-bottom:2px solid var(--docs-border)">
                <th style="text-align:left;padding:10px 16px;font-weight:600">Char</th>
                <th style="text-align:left;padding:10px 16px;font-weight:600">Aceita</th>
                <th style="text-align:left;padding:10px 16px;font-weight:600">Exemplo</th>
              </tr>
            </thead>
            <tbody>
              @for (row of maskChars; track row.char) {
                <tr style="border-bottom:1px solid var(--docs-border)">
                  <td style="padding:10px 16px;font-family:'Fira Code',monospace;color:var(--docs-accent);font-weight:700">{{ row.char }}</td>
                  <td style="padding:10px 16px;color:var(--docs-text)">{{ row.accepts }}</td>
                  <td style="padding:10px 16px;font-family:'Fira Code',monospace;font-size:12px;color:var(--docs-text-muted)">{{ row.example }}</td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,
})
export class InputMaskPageComponent {
  cpf         = '';
  cnpj        = '';
  celular     = '';
  telefone    = '';
  dataNascimento = '';
  carteirinha = '';

  cpfCode = `import { KlnInputMaskComponent } from '@klini-saude/ds';
import { FormsModule } from '@angular/forms';

// Template
<kln-input-mask
  [(ngModel)]="cpf"
  mask="999.999.999-99"
  placeholder="000.000.000-00"
/>`;

  cnpjCode = `<kln-input-mask
  [(ngModel)]="cnpj"
  mask="99.999.999/9999-99"
  placeholder="00.000.000/0000-00"
/>`;

  telCode = `<!-- Celular (9 dígitos) -->
<kln-input-mask
  [(ngModel)]="celular"
  mask="(99) 99999-9999"
  placeholder="(11) 99999-9999"
/>

<!-- Telefone fixo (8 dígitos) -->
<kln-input-mask
  [(ngModel)]="telefone"
  mask="(99) 9999-9999"
  placeholder="(11) 3000-0000"
/>`;

  dataNasc = `<kln-input-mask
  [(ngModel)]="dataNascimento"
  mask="99/99/9999"
  placeholder="dd/mm/aaaa"
/>`;

  cartCode = `<kln-input-mask
  [(ngModel)]="carteirinha"
  mask="999999999999999"
  placeholder="000000000000000"
/>`;

  props: PropDef[] = [
    { name: 'mask',        type: 'string',  default: '—',      description: "Padrão da máscara. Caracteres especiais: 9 (dígito), a (letra), * (alfanumérico)." },
    { name: 'placeholder', type: 'string',  default: "''",     description: 'Texto de placeholder exibido antes do preenchimento.' },
    { name: 'slotChar',    type: 'string',  default: "'_'",    description: 'Caractere exibido nos slots vazios da máscara.' },
    { name: 'autoClear',   type: 'boolean', default: 'true',   description: 'Limpa o campo se o valor não preencher toda a máscara ao sair do foco.' },
    { name: 'unmask',      type: 'boolean', default: 'false',  description: 'Se true, o ngModel recebe o valor sem os caracteres da máscara.' },
    { name: 'disabled',    type: 'boolean', default: 'false',  description: 'Desabilita o campo.' },
    { name: 'styleClass',  type: 'string',  default: "''",     description: 'Classes CSS adicionais.' },
    { name: 'style',       type: 'object',  default: 'null',   description: 'Estilos inline.' },
  ];

  maskChars = [
    { char: '9', accepts: 'Apenas dígitos (0–9)',         example: 'CPF: 999.999.999-99' },
    { char: 'a', accepts: 'Apenas letras (a–z, A–Z)',     example: 'Sigla: aa' },
    { char: '*', accepts: 'Letras ou dígitos',             example: 'Código: ***-99' },
  ];
}
