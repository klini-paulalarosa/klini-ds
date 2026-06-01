import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnSkeletonComponent } from '@klini-saude/ds';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-skeleton-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnSkeletonComponent, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">Skeleton</h1>
        <span class="badge badge--version">kln-skeleton</span>
      </div>
      <p class="docs-page-description">
        Placeholder animado para indicar carregamento de conteúdo. Substitui spinners para
        criar uma experiência mais fluida ao carregar dados de beneficiários, consultas e planos.
        Wrapper sobre <code class="font-mono">p-skeleton</code> do PrimeNG.
      </p>

      <div class="docs-section">
        <h2>Linhas de texto</h2>
        <p>Simule parágrafos de texto com larguras variadas para indicar carregamento de descrições.</p>
        <app-component-preview [code]="textCode">
          <div preview style="max-width:400px">
            <kln-skeleton width="60%" height="1.2rem" styleClass="mb-2" />
            <kln-skeleton width="100%" height="0.9rem" styleClass="mb-2" />
            <kln-skeleton width="100%" height="0.9rem" styleClass="mb-2" />
            <kln-skeleton width="75%" height="0.9rem" />
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Card de beneficiário (carregando)</h2>
        <p>Combine avatar circular com linhas de texto para simular o carregamento de dados do beneficiário.</p>
        <app-component-preview [code]="cardCode">
          <div preview style="max-width:320px;border:1px solid #e9ecef;border-radius:8px;padding:16px">
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px">
              <kln-skeleton shape="circle" width="48px" height="48px" />
              <div style="flex:1">
                <kln-skeleton width="70%" height="1rem" styleClass="mb-2" />
                <kln-skeleton width="50%" height="0.8rem" />
              </div>
            </div>
            <kln-skeleton width="100%" height="0.85rem" styleClass="mb-2" />
            <kln-skeleton width="85%" height="0.85rem" styleClass="mb-2" />
            <kln-skeleton width="60%" height="0.85rem" />
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Tabela (carregando)</h2>
        <p>Use linhas de skeleton para indicar carregamento de uma tabela de consultas ou atendimentos.</p>
        <app-component-preview [code]="tableCode">
          <div preview>
            <div style="border:1px solid #e9ecef;border-radius:8px;overflow:hidden">
              <div style="display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:12px;padding:12px 16px;background:#f8f9fa;border-bottom:1px solid #e9ecef">
                <kln-skeleton width="80%" height="0.85rem" />
                <kln-skeleton width="70%" height="0.85rem" />
                <kln-skeleton width="60%" height="0.85rem" />
                <kln-skeleton width="50%" height="0.85rem" />
              </div>
              @for (row of [1,2,3,4,5]; track row) {
                <div style="display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:12px;padding:12px 16px;border-bottom:1px solid #f0f0f0">
                  <kln-skeleton width="90%" height="0.85rem" />
                  <kln-skeleton width="75%" height="0.85rem" />
                  <kln-skeleton width="65%" height="0.85rem" />
                  <kln-skeleton width="55%" height="0.85rem" />
                </div>
              }
            </div>
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Personalizado</h2>
        <p>Ajuste <code class="font-mono">borderRadius</code>, <code class="font-mono">shape</code> e dimensões para qualquer layout.</p>
        <app-component-preview [code]="customCode">
          <div preview style="display:flex;gap:12px;flex-wrap:wrap;align-items:center">
            <kln-skeleton width="80px" height="80px" shape="circle" />
            <kln-skeleton width="120px" height="40px" borderRadius="20px" />
            <kln-skeleton width="200px" height="120px" borderRadius="8px" />
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
export class SkeletonPageComponent {
  textCode = `<!-- Carregando dados do beneficiário... -->
<kln-skeleton width="60%"  height="1.2rem" />
<kln-skeleton width="100%" height="0.9rem" />
<kln-skeleton width="100%" height="0.9rem" />
<kln-skeleton width="75%"  height="0.9rem" />`;

  cardCode = `<div style="display:flex;align-items:center;gap:12px;margin-bottom:12px">
  <kln-skeleton shape="circle" width="48px" height="48px" />
  <div style="flex:1">
    <kln-skeleton width="70%" height="1rem" />
    <kln-skeleton width="50%" height="0.8rem" />
  </div>
</div>
<kln-skeleton width="100%" height="0.85rem" />
<kln-skeleton width="85%"  height="0.85rem" />
<kln-skeleton width="60%"  height="0.85rem" />`;

  tableCode = `@for (row of [1,2,3,4,5]; track row) {
  <div style="display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:12px;padding:12px 16px">
    <kln-skeleton width="90%" height="0.85rem" />
    <kln-skeleton width="75%" height="0.85rem" />
    <kln-skeleton width="65%" height="0.85rem" />
    <kln-skeleton width="55%" height="0.85rem" />
  </div>
}`;

  customCode = `<kln-skeleton width="80px"  height="80px"  shape="circle" />
<kln-skeleton width="120px" height="40px"  borderRadius="20px" />
<kln-skeleton width="200px" height="120px" borderRadius="8px" />`;

  props: PropDef[] = [
    { name: 'width', type: 'string', default: "'100%'", description: 'Largura do skeleton (qualquer unidade CSS: px, %, rem).' },
    { name: 'height', type: 'string', default: "'1rem'", description: 'Altura do skeleton.' },
    { name: 'shape', type: "'rectangle' | 'circle'", default: "'rectangle'", description: "Formato do skeleton. Use 'circle' para avatares." },
    { name: 'borderRadius', type: 'string', default: "''", description: 'Raio de borda personalizado (ex: "8px", "50%").' },
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais.' },
  ];
}