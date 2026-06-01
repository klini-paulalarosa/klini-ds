import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  styles: [`
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: var(--docs-header-height);
      padding: 0 24px;
      border-bottom: 1px solid var(--docs-border);
      background: var(--docs-bg);
      position: sticky;
      top: 0;
      z-index: 50;
    }

    .header__left {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .header__breadcrumb {
      font-size: 13px;
      color: var(--docs-text-muted);
    }

    .header__right {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .header__link {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 13px;
      color: var(--docs-text-muted);
      text-decoration: none;
      padding: 6px 10px;
      border-radius: 6px;
      transition: all 0.15s;

      &:hover {
        color: var(--docs-text);
        background: var(--docs-code-bg);
        text-decoration: none;
      }
    }

    .header__version-badge {
      padding: 3px 8px;
      background: var(--docs-code-bg);
      border: 1px solid var(--docs-border);
      border-radius: 9999px;
      font-size: 12px;
      font-weight: 600;
      color: var(--docs-accent);
      font-family: 'Fira Code', monospace;
    }
  `],
  template: `
    <header class="header docs-header">
      <div class="header__left">
        <span class="header__breadcrumb">&#64;klini-saude/ds</span>
      </div>
      <div class="header__right">
        <span class="header__version-badge">v2.0.0</span>
        <a
          href="https://github.com/klini-paulalarosa/klini-ds"
          target="_blank"
          rel="noopener"
          class="header__link"
        >
          <i class="pi pi-github"></i>
          GitHub
        </a>
        <a
          href="https://www.npmjs.com/package/@klini-saude/ds"
          target="_blank"
          rel="noopener"
          class="header__link"
        >
          <i class="pi pi-box"></i>
          npm
        </a>
      </div>
    </header>
  `,
})
export class HeaderComponent {}
