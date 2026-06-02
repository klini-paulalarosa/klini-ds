import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';

/**
 * Avatar de usuário com suporte a imagem, label inicial e ícone.
 * Disponível em três tamanhos e dois formatos (circle/square).
 *
 * @atomicLevel atom
 * @selector kln-avatar
 * @primeng p-avatar
 * @example
 * <kln-avatar image="/assets/user.jpg" size="large" shape="circle" />
 * <kln-avatar label="PL" size="normal" />
 */
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
export class KlnAvatarComponent {
  @Input() label = '';
  @Input() icon = '';
  @Input() image = '';
  @Input() size: 'normal' | 'large' | 'xlarge' = 'normal';
  @Input() shape: 'square' | 'circle' = 'circle';
  @Input() styleClass = '';
}
