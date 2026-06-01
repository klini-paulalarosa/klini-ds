import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { KlnConfirmDialogComponent, ButtonComponent, KlnConfirmService } from '@klini-saude/ds';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-confirm-dialog-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnConfirmDialogComponent, ButtonComponent, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">Confirm Dialog</h1>
        <span class="badge badge--version">kln-confirm-dialog</span>
      </div>
      <p class="docs-page-description">
        Diálogo de confirmação imperativo para ações destrutivas ou irreversíveis.
        O componente <code class="font-mono">kln-confirm-dialog</code> deve estar no template e
        o serviço <code class="font-mono">KlnConfirmService</code> aciona o diálogo programaticamente.
        Wrapper sobre <code class="font-mono">p-confirmDialog</code> do PrimeNG.
      </p>

      <kln-confirm-dialog />
      <kln-confirm-dialog key="custom" />

      <div class="docs-section">
        <h2>Básico</h2>
        <p>Confirmação de cancelamento de consulta. O serviço é chamado no componente e o diálogo aparece na tela.</p>
        <app-component-preview [code]="basicCode">
          <div preview style="display:flex;gap:12px;align-items:center;flex-wrap:wrap">
            <kln-button
              label="Cancelar Consulta"
              severity="danger"
              variant="outlined"
              (clicked)="confirmarCancelamento()" />
            @if (resultMessage) {
              <span [style.color]="resultMessage.includes('cancelada') ? '#dc3545' : '#198754'"
                    style="font-size:0.9rem">
                {{ resultMessage }}
              </span>
            }
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Com accept/reject</h2>
        <p>Exiba uma mensagem de resultado de acordo com a escolha do usuário.</p>
        <app-component-preview [code]="acceptRejectCode">
          <div preview style="display:flex;gap:12px;align-items:center;flex-wrap:wrap">
            <kln-button
              label="Solicitar Autorização"
              severity="primary"
              (clicked)="confirmarAutorizacao()" />
            @if (authMessage) {
              <span [style.color]="authMessage.includes('enviada') ? '#198754' : '#6c757d'"
                    style="font-size:0.9rem">
                {{ authMessage }}
              </span>
            }
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Customizado</h2>
        <p>Customize ícone, labels dos botões e mensagem para o contexto específico da ação.</p>
        <app-component-preview [code]="customCode">
          <div preview>
            <kln-button
              label="Remover Beneficiário"
              severity="danger"
              (clicked)="confirmarRemocao()" />
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Props — kln-confirm-dialog</h2>
        <app-props-table [props]="props" />
      </div>

      <div class="docs-section">
        <h2>KlnConfirmService.confirm()</h2>
        <app-props-table [props]="serviceProps" />
      </div>
    </div>
  `,
})
export class ConfirmDialogPageComponent {
  private confirmService = inject(KlnConfirmService);

  resultMessage = '';
  authMessage = '';

  confirmarCancelamento(): void {
    this.confirmService.confirm({
      message: 'Deseja cancelar a consulta agendada para 20/06/2025 com Dr. Marcos Oliveira?',
      header: 'Cancelar Consulta',
      accept: () => {
        this.resultMessage = 'Consulta cancelada com sucesso.';
      },
      reject: () => {
        this.resultMessage = 'Ação mantida — consulta não cancelada.';
      },
    });
  }

  confirmarAutorizacao(): void {
    this.confirmService.confirm({
      message: 'Confirmar solicitação de autorização para ressonância magnética?',
      header: 'Solicitar Autorização',
      accept: () => {
        this.authMessage = 'Solicitação enviada para análise.';
      },
      reject: () => {
        this.authMessage = 'Solicitação cancelada.';
      },
    });
  }

  confirmarRemocao(): void {
    this.confirmService.confirm({
      message: 'Esta ação removerá o beneficiário João Rosa do plano permanentemente. Deseja continuar?',
      header: 'Remover Beneficiário',
      accept: () => {
        this.resultMessage = 'Beneficiário removido.';
      },
      reject: () => {
        this.resultMessage = 'Remoção cancelada.';
      },
    });
  }

  basicCode = `<!-- Template: kln-confirm-dialog deve estar presente -->
<kln-confirm-dialog />

<kln-button
  label="Cancelar Consulta"
  severity="danger"
  variant="outlined"
  (clicked)="confirmarCancelamento()" />

// Classe
private confirmService = inject(KlnConfirmService);

confirmarCancelamento(): void {
  this.confirmService.confirm({
    message: 'Deseja cancelar a consulta agendada para 20/06/2025?',
    header: 'Cancelar Consulta',
    accept: () => console.log('Consulta cancelada'),
    reject: () => console.log('Ação cancelada'),
  });
}`;

  acceptRejectCode = `this.confirmService.confirm({
  message: 'Confirmar solicitação de autorização para ressonância magnética?',
  header: 'Solicitar Autorização',
  accept: () => {
    this.message = 'Solicitação enviada para análise.';
  },
  reject: () => {
    this.message = 'Solicitação cancelada.';
  },
});`;

  customCode = `this.confirmService.confirm({
  message: 'Esta ação removerá o beneficiário João Rosa do plano permanentemente.',
  header: 'Remover Beneficiário',
  accept: () => this.beneficiarioService.remover(id),
  reject: () => {},
});`;

  props: PropDef[] = [
    { name: 'key', type: 'string', default: "''", description: 'Chave para identificar o diálogo quando há múltiplos na página. Deve corresponder ao key usado no serviço.' },
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais no diálogo.' },
  ];

  serviceProps: PropDef[] = [
    { name: 'message', type: 'string', default: '—', description: 'Texto da mensagem de confirmação exibida ao usuário.' },
    { name: 'header', type: 'string', default: '—', description: 'Título do diálogo.' },
    { name: 'accept', type: '() => void', default: 'undefined', description: 'Callback executado quando o usuário confirma a ação.' },
    { name: 'reject', type: '() => void', default: 'undefined', description: 'Callback executado quando o usuário rejeita a ação.' },
  ];
}