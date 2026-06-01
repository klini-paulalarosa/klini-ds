import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, SidebarComponent, HeaderComponent],
  template: `
    <div class="docs-layout">
      <app-sidebar />
      <div class="docs-main">
        <app-header />
        <main class="docs-content">
          <router-outlet />
        </main>
      </div>
    </div>
  `,
})
export class AppComponent {}
