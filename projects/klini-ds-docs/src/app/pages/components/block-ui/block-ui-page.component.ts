import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnBlockUiComponent } from '@klini-saude/ds';
import { ButtonComponent } from '@klini-saude/ds';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-block-ui-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnBlockUiComponent, ButtonComponent, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">BlockUI</h1>
        <span class="badge badge--version">kln-block-ui</span>
      </div>
      <p class="docs-page-description">
        Bloqueia a interação com uma área durante processamento. Wrapper sobre <code class="font-mono">p-blockui</code> do PrimeNG.
        Usado para bloquear o formulário enquanto a autorização é processada.
      </p>

      <div class="docs-section">
        <h2>Bloqueio de formulário</h2>
        <p>Ative o bloqueio para simular o processamento de uma autorização.</p>
        <app-component-preview [code]="codeBlock">
          <div preview style="display:flex;flex-direction:column;gap:16px">
            <div style="position:relative">
              <kln-block-ui [blocked]="blocked">
                <div style="padding:24px;background:var(--docs-sidebar-bg);border:1px solid var(--docs-border);border-radius:8px">
                  <p style="margin:0 0 8px;font-weight:600;color:var(--docs-text)">Formulário de Autorização</p>
                  <p style="margin:0;font-size:13px;color:var(--docs-text-muted)">Procedimento: Ressonância Magnética (CBHPM 4.03.03.29-9)</p>
                  <p style="margin:4px 0 0;font-size:13px;color:var(--docs-text-muted)">Beneficiário: Carlos Eduardo Silva — 00123456</p>
                </div>
              </kln-block-ui>
            </div>
            <div style="display:flex;gap:8px">
              <kln-button label="Processar autorização" [disabled]="blocked" (onClick)="simularProcessamento()" />
              <kln-button label="Desbloquear" severity="secondary" (onClick)="desbloquear()" />
            </div>
            <span style="font-size:13px;color:var(--docs-text-muted)">Estado: {{ blocked ? 'Bloqueado' : 'Desbloqueado' }}</span>
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
export class BlockUiPageComponent {
  blocked = false;

  simularProcessamento() {
    this.blocked = true;
    setTimeout(() => { this.blocked = false; }, 3000);
  }

  desbloquear() {
    this.blocked = false;
  }

  codeBlock = `<kln-block-ui [blocked]="blocked">
  <div>Formulário de Autorização</div>
</kln-block-ui>`;

  props: PropDef[] = [
    { name: 'blocked', type: 'boolean', default: 'false', description: 'Ativa o bloqueio da área.' },
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais.' },
  ];
}
