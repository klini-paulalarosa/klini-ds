import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';

export interface KliniAccordionItem {
  header: string;
  content?: string;
  value: string;
  disabled?: boolean;
}

@Component({
  selector: 'klini-accordion',
  standalone: true,
  imports: [CommonModule, AccordionModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-accordion
      [multiple]="multiple"
      [value]="activeValue"
      (valueChange)="activeValueChange.emit($event)"
      [styleClass]="'klini-accordion ' + styleClass"
    >
      <ng-content />
    </p-accordion>
  `,
})
export class KliniAccordionComponent {
  @Input() multiple = false;
  @Input() activeValue: string | number | string[] | number[] = '';
  @Input() styleClass = '';

  @Output() activeValueChange = new EventEmitter<string | number | string[] | number[]>();
}
