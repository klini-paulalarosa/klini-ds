import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'kln-galleria',
  standalone: true,
  imports: [GalleriaModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-galleria
      [value]="value"
      [numVisible]="numVisible"
      [circular]="circular"
      [showThumbnails]="showThumbnails"
      [showIndicators]="showIndicators"
      [fullScreen]="fullScreen"
      [(visible)]="visible"
      [class]="styleClass"
    >
      <ng-content />
    </p-galleria>
  `,
})
export class KliniGalleriaComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() value: any[] = [];
  @Input() numVisible = 5;
  @Input() circular = false;
  @Input() showThumbnails = true;
  @Input() showIndicators = false;
  @Input() fullScreen = false;
  @Input() visible = false;
  @Input() styleClass = '';

  @Output() visibleChange = new EventEmitter<boolean>();
}
