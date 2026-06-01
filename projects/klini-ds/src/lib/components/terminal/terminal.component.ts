import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Terminal } from 'primeng/terminal';

@Component({
  selector: 'kln-terminal',
  standalone: true,
  imports: [Terminal],
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
