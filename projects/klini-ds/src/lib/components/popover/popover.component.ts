import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PopoverModule } from 'primeng/popover';

@Component({
  selector: 'kln-popover',
  standalone: true,
  imports: [PopoverModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-popover [styleClass]="styleClass" [appendTo]="appendTo" [dismissable]="dismissable">
      <ng-content />
    </p-popover>
  `,
  styles: [`:host { display: contents; }`],
})
export class KliniPopoverComponent {
  @Input() styleClass = '';
  @Input() appendTo: string | HTMLElement = 'body';
  @Input() dismissable = true;
}
