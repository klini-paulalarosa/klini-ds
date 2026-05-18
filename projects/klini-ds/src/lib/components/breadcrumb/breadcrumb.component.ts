import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'klini-breadcrumb',
  standalone: true,
  imports: [BreadcrumbModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-breadcrumb [model]="items" [home]="home" [styleClass]="styleClass" />
  `,
  styles: [
    `
      :host {
        display: block;
      }
      :host ::ng-deep .p-breadcrumb {
        background: transparent;
        border: none;
        font-family: 'Plus Jakarta Sans', sans-serif;
        font-size: var(--klini-font-size-body-sm);
      }
    `,
  ],
})
export class KliniBreadcrumbComponent {
  @Input() items: MenuItem[] = [];
  @Input() home: MenuItem = { icon: 'pi pi-home', routerLink: '/' };
  @Input() styleClass = '';
}
