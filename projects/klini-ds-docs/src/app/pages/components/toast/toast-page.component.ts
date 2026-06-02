import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';
import { CodeBlockComponent } from '../../../shared/code-block/code-block.component';
import { ToastComponent, KlnToastService } from '@klini-saude/ds';

@Component({
  selector: 'app-toast-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PropsTableComponent, CodeBlockComponent, ToastComponent],
  providers: [KlnToastService],
  template: `
    <!-- Container do toast para esta página de documentação -->
    <kln-toast position="top-right" key="docs-toast" />

    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">Toast</h1>
        <span class="badge badge--version">kln-toast</span>
        <span class="badge badge--version">KlnToastService</span>
      </div>
      <p class="docs-page-description">
        Notificações temporárias no canto da tela. Use <code class="font-mono">KlnToastService</code>
        para disparar toasts programaticamente a partir de qualquer componente.
        Requer <code class="font-mono">MessageService</code> no providers do app (já incluído via appConfig do DS).
      </p>

      <!-- Preview interativo -->
      <div class="docs-section">
        <h2>Demo interativo</h2>
        <p>Clique nos botões para ver os toasts em ação nesta própria página.</p>
        <div style="display:flex;flex-wrap:wrap;gap:10px;padding:24px;border:1px solid var(--docs-border);border-radius:8px;background:#fff">
          <button class="toast-demo-btn toast-demo-btn--success" (click)="showSuccess()">
            <i class="pi pi-check-circle"></i> Success
          </button>
          <button class="toast-demo-btn toast-demo-btn--info" (click)="showInfo()">
            <i class="pi pi-info-circle"></i> Info
          </button>
          <button class="toast-demo-btn toast-demo-btn--warn" (click)="showWarn()">
            <i class="pi pi-exclamation-triangle"></i> Warning
          </button>
          <button class="toast-demo-btn toast-demo-btn--error" (click)="showError()">
            <i class="pi pi-times-circle"></i> Error
          </button>
          <button class="toast-demo-btn toast-demo-btn--sticky" (click)="showSticky()">
            <i class="pi pi-lock"></i> Sticky
          </button>
        </div>
      </div>

      <!-- Severidades -->
      <div class="docs-section">
        <h2>Severidades</h2>
        <p>Quatro severidades disponíveis: success, info, warn e error. Use <code class="font-mono">KlnToastService</code> para disparar programaticamente.</p>
        <app-code-block language="typescript" [code]="severitiesCode" />
      </div>

      <!-- Posições -->
      <div class="docs-section">
        <h2>Posições</h2>
        <app-code-block language="html" [code]="positionsCode" />
      </div>

      <!-- Sticky -->
      <div class="docs-section">
        <h2>Toast fixo (sticky)</h2>
        <p>Use <code class="font-mono">sticky: true</code> para toasts que não somem automaticamente — o usuário precisa fechar.</p>
        <app-code-block language="typescript" [code]="stickyCode" />
      </div>

      <!-- Multiple -->
      <div class="docs-section">
        <h2>Múltiplos toasts</h2>
        <app-code-block language="typescript" [code]="multipleCode" />
      </div>

      <!-- Service API -->
      <div class="docs-section">
        <h2>API do KlnToastService</h2>
        <app-code-block language="typescript" [code]="serviceCode" />
      </div>

      <!-- Props -->
      <div class="docs-section">
        <h2>Props — kln-toast</h2>
        <app-props-table [props]="props" />
      </div>
    </div>
  `,
  styles: [`
    .toast-demo-btn {
      display: inline-flex; align-items: center; gap: 6px;
      padding: 8px 16px; border-radius: 6px; border: none;
      font-size: 13px; font-weight: 600; font-family: inherit;
      cursor: pointer; transition: all 0.15s; outline: none;
    }
    .toast-demo-btn:focus-visible { box-shadow: 0 0 0 2px var(--docs-accent); }
    .toast-demo-btn--success { background: #dcfce7; color: #15803d; }
    .toast-demo-btn--success:hover { background: #bbf7d0; }
    .toast-demo-btn--info    { background: #dbeafe; color: #1d4ed8; }
    .toast-demo-btn--info:hover { background: #bfdbfe; }
    .toast-demo-btn--warn    { background: #fef9c3; color: #a16207; }
    .toast-demo-btn--warn:hover { background: #fef08a; }
    .toast-demo-btn--error   { background: #fee2e2; color: #b91c1c; }
    .toast-demo-btn--error:hover { background: #fecaca; }
    .toast-demo-btn--sticky  { background: var(--docs-brand-soft); color: var(--docs-accent); }
    .toast-demo-btn--sticky:hover { background: var(--docs-brand-surface); }
  `],
})
export class ToastPageComponent {
  private readonly toast = inject(KlnToastService);

  severitiesCode = `import { KlnToastService } from '@klini-saude/ds';

private readonly toast = inject(KlnToastService);

// Success
this.toast.show({
  severity: 'success',
  summary: 'Consulta confirmada',
  detail: 'Agendamento para 15/06/2026 às 14h30 confirmado.',
});

// Error
this.toast.show({
  severity: 'error',
  summary: 'Erro ao salvar',
  detail: 'Não foi possível salvar os dados.',
});`;

  positionsCode = `<!-- No template principal do app (uma vez por posição) -->
<kln-toast position="top-right" />    <!-- padrão -->
<kln-toast position="top-left" />
<kln-toast position="top-center" />
<kln-toast position="bottom-right" />
<kln-toast position="bottom-left" />
<kln-toast position="bottom-center" />

<!-- Para múltiplas posições, use key para diferenciar -->
<kln-toast position="top-right"    key="success-toast" />
<kln-toast position="bottom-center" key="error-toast" />`;

  stickyCode = `this.toast.show({
  severity: 'warn',
  summary: 'Ação necessária',
  detail: 'Documentos pendentes para regularização do plano.',
  sticky: true,  // não some automaticamente
});`;

  multipleCode = `// Disparar vários em sequência
this.toast.show({ severity: 'success', summary: 'Passo 1', detail: 'Dados salvos.' });
this.toast.show({ severity: 'info',    summary: 'Passo 2', detail: 'Processando...' });
this.toast.show({ severity: 'success', summary: 'Pronto!',  detail: 'Cadastro finalizado.' });`;

  serviceCode = `// KlnToastMessage interface
export interface KlnToastMessage {
  severity: 'success' | 'info' | 'warn' | 'error';
  summary: string;       // Título do toast
  detail?: string;       // Corpo da mensagem
  life?: number;         // Duração em ms (padrão: 3000)
  sticky?: boolean;      // Não some automaticamente
  key?: string;          // Key do <kln-toast> alvo
  closable?: boolean;    // Botão de fechar (padrão: true)
  data?: unknown;        // Dados extras
}

// KlnToastService métodos
class KlnToastService {
  show(msg: KlnToastMessage): void;
  clear(key?: string): void;     // Limpa todos ou por key
}`;

  showSuccess(): void {
    this.toast.show({ severity: 'success', summary: 'Consulta confirmada', detail: 'Agendamento para 15/06/2026 às 14h30 confirmado.', key: 'docs-toast' });
  }
  showInfo(): void {
    this.toast.show({ severity: 'info', summary: 'Processando autorização', detail: 'Seu pedido está sendo analisado pela operadora.', key: 'docs-toast' });
  }
  showWarn(): void {
    this.toast.show({ severity: 'warn', summary: 'Carência ativa', detail: 'Procedimento coberto após 30 dias.', key: 'docs-toast' });
  }
  showError(): void {
    this.toast.show({ severity: 'error', summary: 'Erro ao salvar', detail: 'Não foi possível salvar os dados do beneficiário.', key: 'docs-toast' });
  }
  showSticky(): void {
    this.toast.show({ severity: 'warn', summary: 'Ação necessária', detail: 'Documentos pendentes para regularização do plano.', sticky: true, key: 'docs-toast' });
  }

  props: PropDef[] = [
    { name: 'position', type: 'KlnToastPosition', default: "'top-right'", description: "Posição na tela: 'top-right' | 'top-left' | 'top-center' | 'bottom-right' | 'bottom-left' | 'bottom-center'." },
    { name: 'key', type: 'string', default: "''", description: 'Chave para identificar este container — use quando há múltiplos <kln-toast> no app.' },
    { name: 'life', type: 'number', default: '3000', description: 'Duração padrão em milissegundos.' },
    { name: 'baseZIndex', type: 'number', default: '0', description: 'Z-index base.' },
    { name: 'preventOpenDuplicates', type: 'boolean', default: 'false', description: 'Impede abrir toasts duplicados (mesmo key+summary).' },
  ];
}
