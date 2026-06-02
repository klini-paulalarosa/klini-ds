import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnAvatarGroupComponent, KlnAvatarComponent } from '@klini-saude/ds';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-avatar-group-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnAvatarGroupComponent, KlnAvatarComponent, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">AvatarGroup</h1>
        <span class="badge badge--version">kln-avatar-group</span>
      </div>
      <p class="docs-page-description">
        Grupo de avatares sobrepostos. Wrapper sobre <code class="font-mono">p-avatargroup</code> do PrimeNG.
        Usado para exibir equipe médica, beneficiários de um contrato e responsáveis por uma autorização.
      </p>

      <div class="docs-section">
        <h2>Equipe médica</h2>
        <p>Médicos responsáveis pelo atendimento.</p>
        <app-component-preview [code]="codeEquipe">
          <div preview style="display:flex;flex-direction:column;gap:16px;padding:16px">
            <div style="display:flex;align-items:center;gap:12px">
              <kln-avatar-group>
                <kln-avatar label="CM" size="large" />
                <kln-avatar label="AR" size="large" />
                <kln-avatar label="JP" size="large" />
                <kln-avatar label="MS" size="large" />
              </kln-avatar-group>
              <span style="font-size:13px;color:var(--docs-text-muted)">Equipe de cardiologia</span>
            </div>
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Beneficiários do contrato</h2>
        <app-component-preview [code]="codeBeneficiarios">
          <div preview style="padding:16px">
            <div style="display:flex;align-items:center;gap:12px">
              <kln-avatar-group>
                <kln-avatar label="CS" />
                <kln-avatar label="AS" />
                <kln-avatar label="LS" />
                <kln-avatar label="BS" />
                <kln-avatar label="+3" />
              </kln-avatar-group>
              <span style="font-size:13px;color:var(--docs-text-muted)">7 beneficiários no contrato</span>
            </div>
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
export class AvatarGroupPageComponent {
  codeEquipe = `<kln-avatar-group>
  <kln-avatar label="CM" size="large" />
  <kln-avatar label="AR" size="large" />
  <kln-avatar label="JP" size="large" />
  <kln-avatar label="MS" size="large" />
</kln-avatar-group>`;

  codeBeneficiarios = `<kln-avatar-group>
  <kln-avatar label="CS" />
  <kln-avatar label="AS" />
  <kln-avatar label="+3" />
</kln-avatar-group>`;

  props: PropDef[] = [
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais no grupo.' },
  ];
}
