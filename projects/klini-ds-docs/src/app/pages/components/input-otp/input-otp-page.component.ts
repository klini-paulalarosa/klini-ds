import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnInputOtpComponent } from '@klini-saude/ds';
import { FormsModule } from '@angular/forms';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-input-otp-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnInputOtpComponent, FormsModule, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">InputOtp</h1>
        <span class="badge badge--version">kln-input-otp</span>
      </div>
      <p class="docs-page-description">
        Campo de entrada de código OTP (One-Time Password). Wrapper sobre <code class="font-mono">p-inputotp</code> do PrimeNG.
        Usado para verificação de 2FA no portal do beneficiário.
      </p>

      <div class="docs-section">
        <h2>Token de acesso — 6 dígitos</h2>
        <p>Padrão para validação de acesso ao portal ou autorização de procedimentos.</p>
        <app-component-preview [code]="code1">
          <div preview style="display:flex;flex-direction:column;gap:16px;align-items:flex-start">
            <p style="font-size:13px;color:var(--docs-text-muted);margin:0">
              Digite o token enviado para o celular cadastrado:
            </p>
            <kln-input-otp [(ngModel)]="token" [length]="6" />
            <span style="font-size:13px;color:var(--docs-text-muted)">Token: {{ token || '—' }}</span>
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Mascarado — senha oculta</h2>
        <p>Modo mascarado para PINs e senhas numéricas.</p>
        <app-component-preview [code]="code2">
          <div preview style="display:flex;flex-direction:column;gap:16px;align-items:flex-start">
            <p style="font-size:13px;color:var(--docs-text-muted);margin:0">PIN de acesso (4 dígitos):</p>
            <kln-input-otp [(ngModel)]="pin" [length]="4" [mask]="true" [integerOnly]="true" />
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
export class InputOtpPageComponent {
  token = '';
  pin = '';

  code1 = `<kln-input-otp [(ngModel)]="token" [length]="6" />`;

  code2 = `<kln-input-otp
  [(ngModel)]="pin"
  [length]="4"
  [mask]="true"
  [integerOnly]="true"
/>`;

  props: PropDef[] = [
    { name: 'value', type: 'string | null', default: 'null', description: 'Valor atual do OTP (ngModel).' },
    { name: 'length', type: 'number', default: '6', description: 'Número de campos/dígitos.' },
    { name: 'mask', type: 'boolean', default: 'false', description: 'Oculta os caracteres digitados.' },
    { name: 'integerOnly', type: 'boolean', default: 'false', description: 'Aceita apenas dígitos inteiros.' },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Desabilita todos os campos.' },
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais.' },
  ];
}
