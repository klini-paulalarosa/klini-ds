import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'kln-image',
  standalone: true,
  imports: [ImageModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-image
      [src]="src"
      [alt]="alt"
      [width]="width"
      [height]="height"
      [preview]="preview"
      [styleClass]="'kln-image ' + styleClass"
    />
  `,
  styles: [`:host { display: inline-block; }`],
})
export class KliniImageComponent {
  @Input() src = '';
  @Input() alt = '';
  @Input() width = '';
  @Input() height = '';
  @Input() preview = false;
  @Input() styleClass = '';
}
