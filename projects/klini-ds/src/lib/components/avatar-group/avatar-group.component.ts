import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AvatarGroupModule } from 'primeng/avatargroup';

@Component({
  selector: 'kln-avatar-group',
  standalone: true,
  imports: [AvatarGroupModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<p-avatargroup><ng-content /></p-avatargroup>`,
  styles: [`:host { display: inline-flex; }`],
})
export class KliniAvatarGroupComponent {}
