import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnOverlayBadgeComponent, KlnAvatarComponent } from '@klini-saude/ds';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-overlay-badge-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnOverlayBadgeComponent, KlnAvatarComponent, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">OverlayBadge</h1>
        <span class="badge badge--version">kln-overlay-badge</span>
      </div>
      <p class="docs-page-description">
        Badge sobreposto sobre outro elemento. Wrapper sobre <code class="font-mono">p-overlaybadge</code> do PrimeNG.
        Usado para indicar notificações pendentes em ícones e avatares.
      </p>

      <div class="docs-section">
        <h2>Notificações sobre avatar</h2>
        <p>Indicador de mensagens ou autorizações pendentes sobre o avatar do beneficiário.</p>
        <app-component-preview [code]="codeAvatar">
          <div preview style="display:flex;gap:32px;align-items:center;padding:16px">
            <div style="display:flex;flex-direction:column;align-items:center;gap:8px">
              <kln-overlay-badge value="3">
                <kln-avatar label="CS" size="large" />
              </kln-overlay-badge>
              <span style="font-size:12px;color:var(--docs-text-muted)">3 pendentes</span>
            </div>
            <div style="display:flex;flex-direction:column;align-items:center;gap:8px">
              <kln-overlay-badge value="12" severity="danger">
                <kln-avatar label="PM" size="large" />
              </kln-overlay-badge>
              <span style="font-size:12px;color:var(--docs-text-muted)">12 urgentes</span>
            </div>
            <div style="display:flex;flex-direction:column;align-items:center;gap:8px">
              <kln-overlay-badge severity="success">
                <kln-avatar label="JR" size="large" />
              </kln-overlay-badge>
              <span style="font-size:12px;color:var(--docs-text-muted)">Online</span>
            </div>
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Sobre ícone</h2>
        <app-component-preview [code]="codeIcon">
          <div preview style="display:flex;gap:32px;align-items:center;padding:16px">
            <kln-overlay-badge value="5" severity="warn">
              <i class="pi pi-bell" style="font-size:2rem;color:var(--docs-text)"></i>
            </kln-overlay-badge>
            <kln-overlay-badge value="2">
              <i class="pi pi-envelope" style="font-size:2rem;color:var(--docs-text)"></i>
            </kln-overlay-badge>
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Props</h2>
        <app-props-table [props]="props" />
      </div>
    </div>
  `,
})
export class OverlayBadgePageComponent {
  codeAvatar = `<kln-overlay-badge value="3">
  <kln-avatar label="CS" size="large" />
</kln-overlay-badge>

<kln-overlay-badge value="12" severity="danger">
  <kln-avatar label="PM" size="large" />
</kln-overlay-badge>`;

  codeIcon = `<kln-overlay-badge value="5" severity="warn">
  <i class="pi pi-bell" style="font-size:2rem"></i>
</kln-overlay-badge>`;

  props: PropDef[] = [
    { name: 'value', type: 'string', default: "''", description: 'Valor exibido no badge.' },
    { name: 'severity', type: "'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast' | null", default: 'null', description: 'Variante de cor do badge.' },
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais.' },
  ];
}
