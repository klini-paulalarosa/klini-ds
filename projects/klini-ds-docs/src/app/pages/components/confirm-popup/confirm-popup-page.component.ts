import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnConfirmPopupComponent } from '@klini-saude/ds';
import { ButtonComponent } from '@klini-saude/ds';
import { ConfirmationService } from 'primeng/api';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-confirm-popup-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnConfirmPopupComponent, ButtonComponent, ComponentPreviewComponent, PropsTableComponent],
  providers: [ConfirmationService],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">ConfirmPopup</h1>
        <span class="badge badge--version">kln-confirm-popup</span>
      </div>
      <p class="docs-page-description">
        Popup de confirmação inline ancorado a um elemento. Wrapper sobre <code class="font-mono">p-confirmpopup</code> do PrimeNG.
        Usado para cancelar consultas ou revogar autorizações sem abrir um dialog completo.
      </p>

      <div class="docs-section">
        <h2>Cancelar consulta</h2>
        <p>Clique no botão para abrir o popup de confirmação inline.</p>
        <app-component-preview [code]="code1">
          <div preview style="padding:24px">
            <kln-confirm-popup />
            <kln-button
              label="Cancelar consulta"
              severity="danger"
              icon="pi pi-times"
              (onClick)="confirmarCancelamento($event)"
            />
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Como usar</h2>
        <p>O componente requer <code class="font-mono">ConfirmationService</code> no provider e o método <code class="font-mono">confirm()</code> para disparar o popup.</p>
        <app-component-preview [code]="codeService">
          <div preview style="padding:8px">
            <p style="font-size:13px;color:var(--docs-text-muted);margin:0">Veja o código de exemplo ao lado.</p>
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
export class ConfirmPopupPageComponent {
  constructor(private confirmService: ConfirmationService) {}

  confirmarCancelamento(event: Event) {
    this.confirmService.confirm({
      target: event.target as EventTarget,
      message: 'Deseja cancelar a consulta de Cardiologia agendada para 15/07?',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sim, cancelar',
      rejectLabel: 'Não',
      accept: () => console.log('Consulta cancelada'),
      reject: () => console.log('Operação cancelada'),
    });
  }

  code1 = `<kln-confirm-popup />
<kln-button
  label="Cancelar consulta"
  severity="danger"
  (onClick)="confirmarCancelamento($event)"
/>`;

  codeService = `// providers: [ConfirmationService]
constructor(private confirmService: ConfirmationService) {}

confirmarCancelamento(event: Event) {
  this.confirmService.confirm({
    target: event.target as EventTarget,
    message: 'Deseja cancelar a consulta de Cardiologia?',
    icon: 'pi pi-exclamation-triangle',
    acceptLabel: 'Sim, cancelar',
    rejectLabel: 'Não',
    accept: () => console.log('Consulta cancelada'),
  });
}`;

  props: PropDef[] = [
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais para o popup.' },
  ];
}
