import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { ALL_PAGES, NavEntry } from '../nav-data';
export type { NavEntry };

@Component({
  selector: 'app-prev-next-nav',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  styles: [`
    .pn {
      display: flex;
      justify-content: space-between;
      gap: 16px;
      padding-top: 40px;
      margin-top: 40px;
      border-top: 1px solid var(--docs-border);
    }

    .pn__btn {
      display: flex;
      flex-direction: column;
      gap: 4px;
      padding: 14px 18px;
      border: 1px solid var(--docs-border);
      border-radius: 8px;
      text-decoration: none;
      transition: all 0.15s;
      min-width: 0;
      flex: 1;
      max-width: 220px;

      &:hover {
        border-color: var(--docs-accent);
        background: var(--docs-brand-soft);
        text-decoration: none;
      }
    }

    .pn__btn-next { align-items: flex-end; margin-left: auto; }

    .pn__dir {
      font-size: 11px;
      color: var(--docs-text-muted);
      text-transform: uppercase;
      letter-spacing: 0.06em;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .pn__label {
      font-size: 13px;
      font-weight: 600;
      color: var(--docs-accent);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  `],
  template: `
    @if (prev() || next()) {
      <nav class="pn" aria-label="Paginas anterior e proxima">
        @if (prev(); as p) {
          <a [routerLink]="p.route" class="pn__btn" [attr.aria-label]="'Anterior: ' + p.label">
            <span class="pn__dir">
              <i class="pi pi-arrow-left" style="font-size:10px" aria-hidden="true"></i>
              Anterior
            </span>
            <span class="pn__label">{{ p.label }}</span>
          </a>
        }
        @if (next(); as n) {
          <a [routerLink]="n.route" class="pn__btn pn__btn-next" [attr.aria-label]="'Proximo: ' + n.label">
            <span class="pn__dir">
              Proximo
              <i class="pi pi-arrow-right" style="font-size:10px" aria-hidden="true"></i>
            </span>
            <span class="pn__label">{{ n.label }}</span>
          </a>
        }
      </nav>
    }
  `,
})
export class PrevNextNavComponent {
  private readonly url$ = toSignal(
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map((e) => (e as NavigationEnd).urlAfterRedirects),
    ),
    { initialValue: this.router.url },
  );

  private readonly currentRoute = computed(() => {
    const raw = this.url$() ?? '';
    // withHashLocation coloca o path apos o #
    return raw.startsWith('#') ? raw.slice(1) : raw.split('#')[1] ?? raw;
  });

  prev = computed<NavEntry | null>(() => {
    const idx = ALL_PAGES.findIndex(p => p.route === this.currentRoute());
    return idx > 0 ? ALL_PAGES[idx - 1] : null;
  });

  next = computed<NavEntry | null>(() => {
    const idx = ALL_PAGES.findIndex(p => p.route === this.currentRoute());
    return idx >= 0 && idx < ALL_PAGES.length - 1 ? ALL_PAGES[idx + 1] : null;
  });

  constructor(private readonly router: Router) {}
}
