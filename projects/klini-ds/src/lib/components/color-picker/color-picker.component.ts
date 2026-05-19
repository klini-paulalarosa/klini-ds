import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ColorPicker } from 'primeng/colorpicker';

@Component({
  selector: 'kln-color-picker',
  standalone: true,
  imports: [FormsModule, ColorPicker],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-colorpicker
      [(ngModel)]="value"
      (onChange)="onColorChange($event)"
      [format]="format"
      [inline]="inline"
      [disabled]="disabled"
      [styleClass]="styleClass"
    />
  `,
})
export class KliniColorPickerComponent {
  @Input() value: string | null = null;
  @Input() format: 'hex' | 'rgb' | 'hsb' = 'hex';
  @Input() inline = false;
  @Input() disabled = false;
  @Input() styleClass = '';

  @Output() valueChange = new EventEmitter<string | null>();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onColorChange(event: any): void {
    this.valueChange.emit(typeof event.value === 'string' ? event.value : null);
  }
}
