import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnAvatarComponent, KlnAvatarGroupComponent } from '@klini-saude/ds';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-avatar-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnAvatarComponent, KlnAvatarGroupComponent, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">Avatar</h1>
        <span class="badge badge--version">kln-avatar · kln-avatar-group</span>
      </div>
      <p class="docs-page-description">
        Representação visual de usuários ou entidades. Suporta iniciais, ícones e imagens.
        Use <code class="font-mono">kln-avatar-group</code> para empilhar múltiplos avatares (ex: equipe médica).
      </p>

      <div class="docs-section">
        <h2>Iniciais</h2>
        <p>Use <code class="font-mono">[label]</code> com as iniciais do nome do beneficiário ou médico.</p>
        <app-component-preview [code]="initialsCode">
          <div preview style="display:flex;gap:12px;align-items:center;flex-wrap:wrap">
            <kln-avatar label="PR" />
            <kln-avatar label="MO" />
            <kln-avatar label="JS" />
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Com ícone</h2>
        <p>Use <code class="font-mono">[icon]</code> com classes PrimeIcons quando não há foto ou iniciais disponíveis.</p>
        <app-component-preview [code]="iconCode">
          <div preview style="display:flex;gap:12px;align-items:center;flex-wrap:wrap">
            <kln-avatar icon="pi pi-user" />
            <kln-avatar icon="pi pi-heart" />
            <kln-avatar icon="pi pi-id-card" />
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Tamanhos</h2>
        <p>Três tamanhos: <code class="font-mono">normal</code> (padrão), <code class="font-mono">large</code> e <code class="font-mono">xlarge</code>.</p>
        <app-component-preview [code]="sizesCode">
          <div preview style="display:flex;gap:16px;align-items:flex-end;flex-wrap:wrap">
            <div style="text-align:center">
              <kln-avatar label="PR" size="normal" />
              <p style="margin:4px 0 0;font-size:0.75rem;color:#666">normal</p>
            </div>
            <div style="text-align:center">
              <kln-avatar label="PR" size="large" />
              <p style="margin:4px 0 0;font-size:0.75rem;color:#666">large</p>
            </div>
            <div style="text-align:center">
              <kln-avatar label="PR" size="xlarge" />
              <p style="margin:4px 0 0;font-size:0.75rem;color:#666">xlarge</p>
            </div>
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Formas</h2>
        <p>Circle (padrão) para pessoas; square para entidades como hospitais ou clínicas.</p>
        <app-component-preview [code]="shapesCode">
          <div preview style="display:flex;gap:16px;align-items:flex-end;flex-wrap:wrap">
            <div style="text-align:center">
              <kln-avatar label="PR" shape="circle" size="large" />
              <p style="margin:4px 0 0;font-size:0.75rem;color:#666">circle</p>
            </div>
            <div style="text-align:center">
              <kln-avatar label="HS" shape="square" size="large" />
              <p style="margin:4px 0 0;font-size:0.75rem;color:#666">square</p>
            </div>
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Avatar Group</h2>
        <p>Empilhe avatares sobrepostos para representar uma equipe médica ou grupo de beneficiários.</p>
        <app-component-preview [code]="groupCode">
          <div preview style="display:flex;align-items:center;gap:16px;flex-wrap:wrap">
            <kln-avatar-group>
              <kln-avatar label="PR" size="large" />
              <kln-avatar label="MO" size="large" />
              <kln-avatar label="JS" size="large" />
              <kln-avatar label="AR" size="large" />
              <kln-avatar label="+2" size="large" />
            </kln-avatar-group>
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Props — kln-avatar</h2>
        <app-props-table [props]="avatarProps" />
      </div>

      <div class="docs-section">
        <h2>Props — kln-avatar-group</h2>
        <app-props-table [props]="groupProps" />
      </div>
    </div>
  `,
})
export class AvatarPageComponent {
  initialsCode = `<kln-avatar label="PR" />\n<kln-avatar label="MO" />\n<kln-avatar label="JS" />`;
  iconCode = `<kln-avatar icon="pi pi-user" />\n<kln-avatar icon="pi pi-heart" />\n<kln-avatar icon="pi pi-id-card" />`;
  sizesCode = `<kln-avatar label="PR" size="normal" />\n<kln-avatar label="PR" size="large" />\n<kln-avatar label="PR" size="xlarge" />`;
  shapesCode = `<!-- Círculo — para pessoas -->\n<kln-avatar label="PR" shape="circle" size="large" />\n\n<!-- Quadrado — para entidades -->\n<kln-avatar label="HS" shape="square" size="large" />`;
  groupCode = `<kln-avatar-group>\n  <kln-avatar label="PR" size="large" />\n  <kln-avatar label="MO" size="large" />\n  <kln-avatar label="JS" size="large" />\n  <kln-avatar label="+2" size="large" />\n</kln-avatar-group>`;

  avatarProps: PropDef[] = [
    { name: 'label', type: 'string', default: "''", description: 'Texto exibido (iniciais). Usado quando não há imagem ou ícone.' },
    { name: 'icon', type: 'string', default: "''", description: 'Classe de ícone PrimeIcons (ex: pi pi-user).' },
    { name: 'image', type: 'string', default: "''", description: 'URL da imagem do avatar.' },
    { name: 'size', type: "'normal' | 'large' | 'xlarge'", default: "'normal'", description: 'Tamanho do avatar.' },
    { name: 'shape', type: "'circle' | 'square'", default: "'circle'", description: 'Forma do avatar.' },
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais.' },
  ];

  groupProps: PropDef[] = [
    { name: '(sem inputs)', type: '—', default: '—', description: 'kln-avatar-group é um wrapper de conteúdo puro. Coloque kln-avatar como filhos.' },
  ];
}