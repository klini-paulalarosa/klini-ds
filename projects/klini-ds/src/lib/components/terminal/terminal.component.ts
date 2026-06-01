import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Terminal, TerminalService } from 'primeng/terminal';

/** Re-exportado para que o consumidor possa injetar TerminalService e processar comandos */
export { TerminalService };

@Component({
  selector: 'kln-terminal',
  standalone: true,
  imports: [Terminal],
  providers: [TerminalService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-terminal
      [welcomeMessage]="welcomeMessage"
      [prompt]="prompt"
      [styleClass]="styleClass"
    />
  `,
})
export class KlnTerminalComponent {
  /** Mensagem exibida ao abrir o terminal */
  @Input() welcomeMessage = '';

  /** Caracteres do prompt exibidos antes de cada linha de entrada */
  @Input() prompt = '$';

  /** Classes CSS adicionais no elemento raiz */
  @Input() styleClass = '';
}
