import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Editor } from 'primeng/editor';

@Component({
  selector: 'kln-editor',
  standalone: true,
  imports: [FormsModule, Editor],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-editor
      [(ngModel)]="value"
      (onTextChange)="valueChange.emit(value)"
      [placeholder]="placeholder"
      [readonly]="readonly"
      [styleClass]="styleClass"
    />
  `,
})
export class KliniEditorComponent {
  @Input() value = '';
  @Input() placeholder = '';
  @Input() readonly = false;
  @Input() styleClass = '';

  @Output() valueChange = new EventEmitter<string>();
}
