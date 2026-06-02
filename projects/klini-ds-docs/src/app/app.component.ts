import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';
import { PrevNextNavComponent } from './shared/prev-next-nav/prev-next-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, SidebarComponent, HeaderComponent, PrevNextNavComponent],
  styles: [`
    .skip-link {
      position: absolute;
      top: -100px;
      left: 16px;
      z-index: 9999;
      background: var(--docs-accent);
      color: #fff;
      padding: 8px 16px;
      border-radius: 0 0 6px 6px;
      font-size: 13px;
      font-weight: 600;
      text-decoration: none;
      transition: top 0.1s;
      &:focus { top: 0; }
    }

    .mobile-toggle {
      display: none;
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 200;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: var(--docs-accent);
      color: #fff;
      border: none;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
      font-size: 18px;
      align-items: center;
      justify-content: center;
      transition: background 0.15s;
      &:hover { background: var(--docs-accent-hover); }
    }

    .sidebar-overlay {
      display: none;
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.4);
      z-index: 99;
    }

    @media (max-width: 768px) {
      .mobile-toggle { display: flex; }
      .sidebar-overlay.visible { display: block; }
    }
  `],
  template: `
    <!-- Skip link para acessibilidade por teclado -->
    <a href="#main-content" class="skip-link">Pular para o conteudo</a>

    <div class="docs-layout">
      <!-- Overlay mobile -->
      <div
        class="sidebar-overlay"
        [class.visible]="sidebarOpen()"
        (click)="sidebarOpen.set(false)"
        aria-hidden="true"
      ></div>

      <app-sidebar [class.open]="sidebarOpen()" (closeRequest)="sidebarOpen.set(false)" />

      <div class="docs-main">
        <app-header />
        <main id="main-content" class="docs-content" tabindex="-1">
          <router-outlet />
          <app-prev-next-nav />
        </main>
      </div>
    </div>

    <!-- Botao toggle sidebar (mobile) -->
    <button
      class="mobile-toggle"
      (click)="sidebarOpen.set(!sidebarOpen())"
      [attr.aria-expanded]="sidebarOpen()"
      aria-label="Abrir menu de navegacao"
    >
      <i [class]="sidebarOpen() ? 'pi pi-times' : 'pi pi-bars'" aria-hidden="true"></i>
    </button>
  `,
})
export class AppComponent {
  sidebarOpen = signal(false);
}
