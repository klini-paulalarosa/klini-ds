import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Terminal, TerminalService } from 'primeng/terminal';

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
  @Input() welcomeMessage = '';

  @Input() prompt = '$';

  @Input() styleClass = '';
}
