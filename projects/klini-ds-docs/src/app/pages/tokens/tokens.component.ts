import { ChangeDetectionStrategy, Component } from '@angular/core';

interface ColorToken {
  name: string;
  cssVar: string;
  value: string;
  shade: string;
}

interface ColorGroup {
  family: string;
  description: string;
  tokens: ColorToken[];
}

@Component({
  selector: 'app-tokens',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div>
      <h1 class="docs-page-title">Design Tokens</h1>
      <p class="docs-page-description">
        Tokens de design do Klini DS: paleta de cores, tokens semânticos de gráficos,
        espaçamentos, border-radius e tipografia. Os tokens são expostos como CSS custom properties
        aplicadas automaticamente pelo tema KlnPrime.
      </p>

      <!-- Color Palette -->
      <div class="docs-section">
        <h2>Paleta de Cores</h2>
        <p>As 4 famílias cromáticas do Klini Saúde, com variações de luminosidade.</p>

        @for (group of colorGroups; track group.family) {
          <div style="margin-bottom:32px">
            <h3>{{ group.family }} <span style="font-weight:400;color:var(--docs-text-muted);font-size:13px">— {{ group.description }}</span></h3>
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:8px">
              @for (token of group.tokens; track token.cssVar) {
                <div style="display:flex;align-items:center;gap:10px;padding:10px;border:1px solid var(--docs-border);border-radius:8px">
                  <div [style.background]="token.value" style="width:40px;height:40px;border-radius:6px;border:1px solid rgba(0,0,0,0.08);flex-shrink:0"></div>
                  <div>
                    <div style="font-size:12px;font-weight:600;color:var(--docs-text)">{{ token.shade }}</div>
                    <div style="font-family:'Fira Code',monospace;font-size:11px;color:var(--docs-text-muted)">{{ token.cssVar }}</div>
                    <div style="font-family:'Fira Code',monospace;font-size:11px;color:var(--docs-text-muted)">{{ token.value }}</div>
                  </div>
                </div>
              }
            </div>
          </div>
        }
      </div>

      <!-- Chart Palette -->
      <div class="docs-section">
        <h2>Paleta de Gráficos</h2>

        <h3>Categorical (4 cores)</h3>
        <p>Usada para séries distintas em gráficos de barras, linhas, radar, etc.</p>
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:24px">
          @for (c of chartCategorical; track c.cssVar) {
            <div style="display:flex;flex-direction:column;align-items:center;gap:6px">
              <div [style.background]="c.value" style="width:56px;height:56px;border-radius:8px;border:1px solid rgba(0,0,0,0.08)"></div>
              <span style="font-family:'Fira Code',monospace;font-size:10px;color:var(--docs-text-muted)">{{ c.cssVar }}</span>
              <span style="font-size:11px;color:var(--docs-text-muted)">{{ c.value }}</span>
            </div>
          }
        </div>

        <h3>Sequential (5 stops)</h3>
        <p>Gradiente de wash a ink para mapas de calor, dados de intensidade e choropleth.</p>
        <div style="display:flex;gap:4px;margin-bottom:8px">
          @for (c of chartSequential; track c.value) {
            <div style="flex:1;height:32px;border-radius:4px" [style.background]="c.value"></div>
          }
        </div>
        <div style="display:flex;gap:4px">
          @for (c of chartSequential; track c.cssVar) {
            <div style="flex:1;text-align:center;font-family:'Fira Code',monospace;font-size:10px;color:var(--docs-text-muted)">{{ c.cssVar }}</div>
          }
        </div>

        <div style="margin-top:24px">
          <h3>Status (5 estados)</h3>
          <p>Cores semânticas para estados clínicos e operacionais.</p>
          <div style="display:flex;gap:8px;flex-wrap:wrap">
            @for (c of chartStatus; track c.cssVar) {
              <div style="display:flex;align-items:center;gap:8px;padding:10px;border:1px solid var(--docs-border);border-radius:8px">
                <div [style.background]="c.value" style="width:32px;height:32px;border-radius:4px"></div>
                <div>
                  <div style="font-size:12px;font-weight:600">{{ c.label }}</div>
                  <div style="font-family:'Fira Code',monospace;font-size:10px;color:var(--docs-text-muted)">{{ c.cssVar }}</div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>

      <!-- Spacing -->
      <div class="docs-section">
        <h2>Espaçamento</h2>
        <p>Escala de espaçamento baseada em múltiplos de 4px.</p>
        @for (s of spacing; track s.token) {
          <div style="display:flex;align-items:center;gap:16px;margin-bottom:8px">
            <div style="width:100px;font-family:'Fira Code',monospace;font-size:12px;color:var(--docs-text-muted)">{{ s.token }}</div>
            <div [style.width.px]="s.px" style="height:20px;background:var(--docs-accent);border-radius:2px;opacity:0.7;min-width:4px"></div>
            <span style="font-size:12px;color:var(--docs-text-muted)">{{ s.px }}px</span>
          </div>
        }
      </div>

      <!-- Border Radius -->
      <div class="docs-section">
        <h2>Border Radius</h2>
        <div style="display:flex;gap:16px;flex-wrap:wrap">
          @for (r of radii; track r.token) {
            <div style="display:flex;flex-direction:column;align-items:center;gap:8px">
              <div [style.border-radius]="r.value" style="width:64px;height:64px;background:var(--docs-accent);opacity:0.7"></div>
              <span style="font-size:11px;font-weight:600">{{ r.token }}</span>
              <span style="font-family:'Fira Code',monospace;font-size:10px;color:var(--docs-text-muted)">{{ r.value }}</span>
            </div>
          }
        </div>
      </div>

      <!-- Typography -->
      <div class="docs-section">
        <h2>Tipografia</h2>
        <p>Fonte primária: <strong>Objective</strong> (Klini Brand). Fallback: Inter, system-ui.</p>
        <div style="border:1px solid var(--docs-border);border-radius:8px;overflow:hidden">
          @for (t of typographyScale; track t.label) {
            <div style="display:flex;align-items:baseline;gap:16px;padding:16px 20px;border-bottom:1px solid var(--docs-border)">
              <div style="width:160px;flex-shrink:0">
                <div style="font-size:12px;font-weight:600;color:var(--docs-text)">{{ t.label }}</div>
                <div style="font-family:'Fira Code',monospace;font-size:10px;color:var(--docs-text-muted)">{{ t.size }} / {{ t.weight }}</div>
              </div>
              <div [style.font-size]="t.size" [style.font-weight]="t.weight" style="color:var(--docs-text);line-height:1.2">
                {{ t.sample }}
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  `,
})
export class TokensComponent {
  colorGroups: ColorGroup[] = [
    {
      family: 'Teal',
      description: 'Cor primária e de marca — PANTONE 2461C',
      tokens: [
        { name: 'Teal 100', cssVar: '--kln-color-teal-100', value: '#b2e5e3', shade: '100' },
        { name: 'Teal 200', cssVar: '--kln-color-teal-200', value: '#80d0ce', shade: '200' },
        { name: 'Teal 300', cssVar: '--kln-color-teal-300', value: '#4dbbb8', shade: '300' },
        { name: 'Teal 400', cssVar: '--kln-color-teal-400', value: '#33a8a5', shade: '400' },
        { name: 'Teal 500', cssVar: '--kln-color-teal-500', value: '#259591', shade: '500 (brand)' },
        { name: 'Teal 600', cssVar: '--kln-color-teal-600', value: '#1d7a77', shade: '600' },
        { name: 'Teal 700', cssVar: '--kln-color-teal-700', value: '#155f5d', shade: '700' },
        { name: 'Teal 800', cssVar: '--kln-color-teal-800', value: '#0e4443', shade: '800' },
      ],
    },
    {
      family: 'Sea',
      description: 'Cor complementar — PANTONE 549C',
      tokens: [
        { name: 'Sea 100', cssVar: '--kln-color-sea-100', value: '#d4e9ec', shade: '100' },
        { name: 'Sea 200', cssVar: '--kln-color-sea-200', value: '#b1d4d8', shade: '200' },
        { name: 'Sea 300', cssVar: '--kln-color-sea-300', value: '#8dbfc4', shade: '300' },
        { name: 'Sea 500', cssVar: '--kln-color-sea-500', value: '#6AA7AE', shade: '500' },
        { name: 'Sea 700', cssVar: '--kln-color-sea-700', value: '#446e74', shade: '700' },
      ],
    },
    {
      family: 'Orange',
      description: 'Acento quente — PANTONE 7565C',
      tokens: [
        { name: 'Orange 100', cssVar: '--kln-color-orange-100', value: '#f5e2cc', shade: '100' },
        { name: 'Orange 300', cssVar: '--kln-color-orange-300', value: '#dfa96c', shade: '300' },
        { name: 'Orange 500', cssVar: '--kln-color-orange-500', value: '#CD7925', shade: '500' },
        { name: 'Orange 700', cssVar: '--kln-color-orange-700', value: '#8a501a', shade: '700' },
      ],
    },
    {
      family: 'Coral',
      description: 'Danger / negado — PANTONE 7625C',
      tokens: [
        { name: 'Coral 100', cssVar: '--kln-color-coral-100', value: '#fad4d5', shade: '100' },
        { name: 'Coral 300', cssVar: '--kln-color-coral-300', value: '#ed8e8f', shade: '300' },
        { name: 'Coral 500', cssVar: '--kln-color-coral-500', value: '#E05759', shade: '500' },
        { name: 'Coral 700', cssVar: '--kln-color-coral-700', value: '#9a2b2c', shade: '700' },
      ],
    },
  ];

  chartCategorical = [
    { cssVar: '--kln-chart-cat-teal', value: '#259591' },
    { cssVar: '--kln-chart-cat-sea', value: '#6AA7AE' },
    { cssVar: '--kln-chart-cat-orange', value: '#CD7925' },
    { cssVar: '--kln-chart-cat-coral', value: '#E05759' },
  ];

  chartSequential = [
    { cssVar: 'seq-wash', value: '#e6f7f6' },
    { cssVar: 'seq-light', value: '#99d4d2' },
    { cssVar: 'seq-mid', value: '#259591' },
    { cssVar: 'seq-deep', value: '#1d7a77' },
    { cssVar: 'seq-ink', value: '#0e4443' },
  ];

  chartStatus = [
    { label: 'Success', cssVar: '--kln-chart-status-success', value: '#22c55e' },
    { label: 'Info', cssVar: '--kln-chart-status-info', value: '#6AA7AE' },
    { label: 'Warning', cssVar: '--kln-chart-status-warn', value: '#CD7925' },
    { label: 'Danger', cssVar: '--kln-chart-status-danger', value: '#E05759' },
    { label: 'Secondary', cssVar: '--kln-chart-status-secondary', value: '#a1a1aa' },
  ];

  spacing = [
    { token: 'kln-space-1', px: 4 },
    { token: 'kln-space-2', px: 8 },
    { token: 'kln-space-3', px: 12 },
    { token: 'kln-space-4', px: 16 },
    { token: 'kln-space-6', px: 24 },
    { token: 'kln-space-8', px: 32 },
    { token: 'kln-space-12', px: 48 },
    { token: 'kln-space-16', px: 64 },
  ];

  radii = [
    { token: 'sm', value: '4px' },
    { token: 'md', value: '6px' },
    { token: 'lg', value: '8px' },
    { token: 'xl', value: '12px' },
    { token: '2xl', value: '16px' },
    { token: 'full', value: '9999px' },
  ];

  typographyScale = [
    { label: 'Display', size: '2.5rem', weight: '800', sample: 'Klini Saúde' },
    { label: 'H1', size: '2rem', weight: '700', sample: 'Portal do Beneficiário' },
    { label: 'H2', size: '1.5rem', weight: '600', sample: 'Atendimentos este mês' },
    { label: 'H3', size: '1.25rem', weight: '600', sample: 'Consulta agendada' },
    { label: 'Body', size: '1rem', weight: '400', sample: 'Plano Klini Start PJ — Vigência 2024' },
    { label: 'Small', size: '0.875rem', weight: '400', sample: 'Carência cumprida em 14/03/2024' },
    { label: 'Caption', size: '0.75rem', weight: '500', sample: 'ÚLTIMA ATUALIZAÇÃO: 01/06/2026' },
  ];
}
