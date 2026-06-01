import { ChangeDetectionStrategy, Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface IconGroup {
  label: string;
  icons: string[];
}

@Component({
  selector: 'app-icons-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`.icon-btn {
    display: flex; flex-direction: column; align-items: center; gap: 8px;
    padding: 16px 8px; border: 1px solid var(--docs-border); border-radius: 8px;
    background: var(--docs-bg); cursor: pointer; transition: all 0.15s;
    font-family: inherit; width: 100%;
  }
  .icon-btn:hover { border-color: var(--docs-accent); background: #f0fafa; }`],
  imports: [FormsModule],
  template: `
    <div>
      <h1 class="docs-page-title">PrimeIcons</h1>
      <p class="docs-page-description">
        314 ícones disponíveis via PrimeIcons. Use <code class="font-mono">class="pi pi-xxx"</code> em qualquer elemento,
        ou como valor do input <code class="font-mono">[icon]</code> nos componentes do DS.
        Clique em qualquer ícone para copiar a classe.
      </p>

      <!-- Search -->
      <div class="docs-section" style="padding-bottom:0">
        <div style="position:relative;max-width:360px">
          <i class="pi pi-search" style="position:absolute;left:12px;top:50%;transform:translateY(-50%);color:var(--docs-text-muted);pointer-events:none"></i>
          <input
            type="text"
            placeholder="Buscar ícone... (ex: arrow, user, chart)"
            [(ngModel)]="searchQuery"
            style="width:100%;padding:10px 12px 10px 36px;border:1px solid var(--docs-border);border-radius:8px;font-size:14px;outline:none;font-family:inherit"
          />
        </div>
        @if (searchQuery) {
          <p style="margin-top:8px;font-size:0.85rem;color:var(--docs-text-muted)">
            {{ filteredCount() }} ícone{{ filteredCount() === 1 ? '' : 's' }} encontrado{{ filteredCount() === 1 ? '' : 's' }}
          </p>
        }
      </div>

      <!-- Copy feedback -->
      @if (copiedIcon()) {
        <div style="position:fixed;bottom:24px;right:24px;background:#18181b;color:#fff;padding:10px 16px;border-radius:8px;font-size:13px;font-family:monospace;z-index:9999;box-shadow:0 4px 12px rgba(0,0,0,0.3)">
          ✓ Copiado: {{ copiedIcon() }}
        </div>
      }

      <!-- Icon groups -->
      @for (group of filteredGroups(); track group.label) {
        @if (group.icons.length > 0) {
          <div class="docs-section">
            <h2 style="margin-bottom:16px">{{ group.label }}</h2>
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:8px">
              @for (icon of group.icons; track icon) {
                <button
                  (click)="copy('pi ' + icon)"
                  title="Copiar: pi {{ icon }}"
                  class="icon-btn"
                >
                  <i [class]="'pi ' + icon" style="font-size:20px;color:var(--docs-text)"></i>
                  <span style="font-size:10px;color:var(--docs-text-muted);word-break:break-all;text-align:center;line-height:1.3">{{ icon }}</span>
                </button>
              }
            </div>
          </div>
        }
      }

      <!-- Usage section -->
      <div class="docs-section">
        <h2>Como usar</h2>
        <pre style="background:#18181b;color:#e4e4e7;padding:16px;border-radius:8px;font-family:monospace;font-size:13px;overflow:auto"><code><!-- HTML direto -->&lt;i class="pi pi-check-circle" style="font-size:24px"&gt;&lt;/i&gt;

&lt;!-- No input [icon] dos componentes Kln --&gt;
&lt;kln-button label="Salvar" icon="pi pi-save" /&gt;
&lt;kln-avatar icon="pi pi-user" /&gt;
&lt;kln-tag value="Aprovado" icon="pi pi-check" /&gt;

&lt;!-- Spin para loading --&gt;
&lt;i class="pi pi-spinner pi-spin" style="font-size:24px"&gt;&lt;/i&gt;

&lt;!-- FW (fixed width) --&gt;
&lt;i class="pi pi-fw pi-home"&gt;&lt;/i&gt;</code></pre>
      </div>
    </div>
  `,
})
export class IconsPageComponent {
  searchQuery = '';
  copiedIcon = signal('');

  private timer: ReturnType<typeof setTimeout> | null = null;

  copy(cls: string) {
    navigator.clipboard.writeText(cls).then(() => {
      this.copiedIcon.set(cls);
      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(() => this.copiedIcon.set(''), 2000);
    });
  }

  readonly groups: IconGroup[] = [
    { label: 'Arrows & Navigation', icons: ['pi-angle-down','pi-angle-left','pi-angle-right','pi-angle-up','pi-angle-double-down','pi-angle-double-left','pi-angle-double-right','pi-angle-double-up','pi-arrow-down','pi-arrow-left','pi-arrow-right','pi-arrow-up','pi-arrow-down-left','pi-arrow-down-right','pi-arrow-up-left','pi-arrow-up-right','pi-arrows-alt','pi-arrows-h','pi-arrows-v','pi-caret-down','pi-caret-left','pi-caret-right','pi-caret-up','pi-chevron-down','pi-chevron-left','pi-chevron-right','pi-chevron-up','pi-chevron-circle-down','pi-chevron-circle-left','pi-chevron-circle-right','pi-chevron-circle-up','pi-arrow-circle-down','pi-arrow-circle-left','pi-arrow-circle-right','pi-arrow-circle-up','pi-expand','pi-forward','pi-backward','pi-home','pi-sitemap','pi-directions','pi-directions-alt'] },
    { label: 'Actions', icons: ['pi-check','pi-check-circle','pi-check-square','pi-times','pi-times-circle','pi-plus','pi-plus-circle','pi-minus','pi-minus-circle','pi-pencil','pi-pen-to-square','pi-eraser','pi-trash','pi-save','pi-undo','pi-refresh','pi-sync','pi-replay','pi-copy','pi-clone','pi-send','pi-share-alt','pi-reply','pi-download','pi-upload','pi-print','pi-search','pi-search-plus','pi-search-minus','pi-external-link','pi-link','pi-lock','pi-lock-open','pi-unlock','pi-eye','pi-eye-slash','pi-power-off','pi-ban'] },
    { label: 'Files & Media', icons: ['pi-file','pi-file-o','pi-file-pdf','pi-file-word','pi-file-excel','pi-file-plus','pi-file-edit','pi-file-check','pi-file-arrow-up','pi-file-import','pi-file-export','pi-folder','pi-folder-open','pi-folder-plus','pi-clipboard','pi-image','pi-images','pi-video','pi-camera','pi-play','pi-play-circle','pi-pause','pi-pause-circle','pi-stop','pi-stop-circle','pi-volume-up','pi-volume-down','pi-volume-off','pi-microphone','pi-headphones'] },
    { label: 'Users & People', icons: ['pi-user','pi-user-edit','pi-user-plus','pi-user-minus','pi-users','pi-id-card','pi-address-book','pi-sign-in','pi-sign-out','pi-shield','pi-verified','pi-face-smile','pi-mars','pi-venus'] },
    { label: 'Communication', icons: ['pi-envelope','pi-bell','pi-bell-slash','pi-comment','pi-comments','pi-megaphone','pi-paperclip','pi-at','pi-hashtag','pi-phone','pi-whatsapp','pi-telegram','pi-discord','pi-slack'] },
    { label: 'Charts & Data', icons: ['pi-chart-bar','pi-chart-line','pi-chart-pie','pi-chart-scatter','pi-table','pi-list','pi-list-check','pi-th-large','pi-objects-column','pi-database','pi-server','pi-qrcode','pi-barcode'] },
    { label: 'Status & Feedback', icons: ['pi-info','pi-info-circle','pi-exclamation-circle','pi-exclamation-triangle','pi-question','pi-question-circle','pi-star','pi-star-fill','pi-star-half','pi-heart','pi-heart-fill','pi-thumbs-up','pi-thumbs-up-fill','pi-thumbs-down','pi-thumbs-down-fill','pi-trophy','pi-crown','pi-flag','pi-flag-fill','pi-bolt','pi-lightbulb','pi-sparkles','pi-bullseye','pi-gauge','pi-wave-pulse'] },
    { label: 'Tools & Settings', icons: ['pi-cog','pi-wrench','pi-hammer','pi-delete-left','pi-sliders-h','pi-sliders-v','pi-calculator','pi-palette','pi-filter','pi-filter-fill','pi-filter-slash','pi-sort','pi-sort-alt','pi-sort-amount-down','pi-sort-amount-up','pi-sort-alpha-down','pi-sort-alpha-up','pi-sort-numeric-down','pi-sort-numeric-up','pi-bars','pi-ellipsis-h','pi-ellipsis-v'] },
    { label: 'Time & Calendar', icons: ['pi-calendar','pi-calendar-clock','pi-calendar-plus','pi-calendar-minus','pi-calendar-times','pi-clock','pi-hourglass','pi-stopwatch','pi-spinner','pi-spinner-dotted','pi-history'] },
    { label: 'Commerce & Finance', icons: ['pi-shopping-cart','pi-shopping-bag','pi-cart-plus','pi-shop','pi-dollar','pi-euro','pi-credit-card','pi-money-bill','pi-wallet','pi-percentage','pi-receipt','pi-ticket','pi-gift','pi-truck'] },
    { label: 'Misc', icons: ['pi-globe','pi-map','pi-map-marker','pi-compass','pi-wifi','pi-cloud','pi-cloud-download','pi-cloud-upload','pi-desktop','pi-mobile','pi-tablet','pi-microchip','pi-code','pi-language','pi-book','pi-graduation-cap','pi-briefcase','pi-building','pi-box','pi-tag','pi-tags','pi-bookmark','pi-bookmark-fill','pi-inbox','pi-key','pi-sun','pi-moon','pi-window-maximize','pi-window-minimize','pi-prime'] },
  ];

  filteredGroups = computed(() => {
    const q = this.searchQuery.toLowerCase().trim();
    if (!q) return this.groups;
    return this.groups.map(g => ({
      ...g,
      icons: g.icons.filter(i => i.includes(q)),
    }));
  });

  filteredCount = computed(() =>
    this.filteredGroups().reduce((acc, g) => acc + g.icons.length, 0)
  );
}
