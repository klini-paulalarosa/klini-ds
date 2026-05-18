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
  selector: 'klini-tabs',
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
      .klini-tabs { font-family: 'Plus Jakarta Sans', sans-serif; }
    `,
  ],
})
export class KliniTabsComponent {
  @Input() activeTab: string | number = 0;
  @Input() styleClass = '';

  @Output() activeTabChange = new EventEmitter<string | number>();
}
