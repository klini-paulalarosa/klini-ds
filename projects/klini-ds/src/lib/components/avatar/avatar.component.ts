import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';

@Component({
  selector: 'kln-avatar',
  standalone: true,
  imports: [AvatarModule, AvatarGroupModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-avatar
      [label]="label || undefined"
      [icon]="icon || undefined"
      [image]="image || undefined"
      [size]="size"
      [shape]="shape"
      [styleClass]="styleClass"
    />
  `,
})
export class KliniAvatarComponent {
  @Input() label = '';
  @Input() icon = '';
  @Input() image = '';
  @Input() size: 'normal' | 'large' | 'xlarge' = 'normal';
  @Input() shape: 'square' | 'circle' = 'circle';
  @Input() styleClass = '';
}
