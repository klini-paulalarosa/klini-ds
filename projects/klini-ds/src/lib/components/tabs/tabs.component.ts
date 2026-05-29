import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'primeng/tabs';

@Component({
  selector: 'kln-tabs',
  standalone: true,
  imports: [CommonModule, TabsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="klini-tabs" [ngClass]="styleClass">
      <p-tabs
        [value]="activeTab"
        (valueChange)="activeTabChange.emit($event)"
      >
        <ng-content />
      </p-tabs>
    </div>
  `,
  styles: [
    `
      :host { display: block; }
      .klini-tabs { font-family: 'Objective', system-ui, -apple-system, sans-serif; }
    `,
  ],
})
export class KlnTabsComponent {
  @Input() activeTab: string | number = 0;
  @Input() styleClass = '';

  @Output() activeTabChange = new EventEmitter<string | number>();
}
