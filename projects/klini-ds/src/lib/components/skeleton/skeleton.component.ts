import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'kln-skeleton',
  standalone: true,
  imports: [SkeletonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-skeleton
      [width]="width"
      [height]="height"
      [shape]="shape"
      [borderRadius]="borderRadius || undefined"
      [styleClass]="styleClass"
    />
  `,
})
export class KlnSkeletonComponent {
  @Input() width = '100%';
  @Input() height = '1rem';
  @Input() shape: 'rectangle' | 'circle' = 'rectangle';
  @Input() borderRadius = '';
  @Input() styleClass = '';
}
