import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'kln-split-button',
  standalone: true,
  imports: [SplitButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-splitbutton
      [label]="label"
      [model]="items"
      [severity]="severity"
      [disabled]="disabled"
      [styleClass]="styleClass"
      (onClick)="clicked.emit($event)"
    />
  `,
  styles: [`:host { display: inline-block; }`],
})
export class KliniSplitButtonComponent {
  @Input({ required: true }) label = '';
  @Input({ required: true }) items: MenuItem[] = [];
  @Input() severity: 'primary' | 'secondary' | 'success' | 'info' | 'warn' | 'danger' | 'contrast' = 'primary';
  @Input() disabled = false;
  @Input() styleClass = '';
  @Output() clicked = new EventEmitter<MouseEvent>();
}
