import { ChangeDetectionStrategy, Component } from '@angular/core';

// Valores extraídos diretamente de _primitive.scss, _status.scss,
// _semantic.scss, _elevation.scss e _scale.scss
// NÃO alterar sem sync com o Figma

interface ColorToken {
  name: string;
  cssVar: string;
  value: string;
  shade: string;
}

interface ColorGroup {
  family: string;
  description: string;
  pantone?: string;
  tokens: ColorToken[];
}

interface SemanticToken {
  name: string;
  cssVar: string;
  resolvedValue: string;
  primitiveRef: string;
  usage: string;
}

interface SemanticGroup {
  group: string;
  tokens: SemanticToken[];
}

interface ElevationToken {
  name: string;
  cssVar: string;
  value: string;
  usage: string;
}

interface ScaleToken {
  name: string;
  cssVar: string;
  value: string;
}

interface StatusToken {
  status: string;
  label: string;
  solid: string;
  bg: string;
  fg: string;
  onSolid: string;
  solidVar: string;
  bgVar: string;
  fgVar: string;
}

@Component({
  selector: 'app-tokens',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div>
      <h1 class="docs-page-title">Design Tokens</h1>
      <p class="docs-page-description">
        Tokens de design do Klini DS — paleta cromática, tokens de status clínico,
        espaçamentos, border-radius e tipografia. Expostos como CSS custom properties
        (<code class="font-mono">--kln-*</code>) carregadas automaticamente pelo tema KlnPrime.
      </p>

      <!-- ── Paleta Principal ─────────────────────────────── -->
      <div class="docs-section">
        <h2>Paleta de Cores</h2>
        <p>
          As 4 famílias cromáticas do Klini Saúde, extraídas diretamente do Figma (coleção <em>01 · Primitive</em>).
          Cada família tem escala numérica 50–900 onde <strong>500 = tom de marca</strong> e aliasing legado
          (<code class="font-mono">-100</code> = mesmo que <code class="font-mono">-500</code>).
        </p>

        @for (group of colorGroups; track group.family) {
          <div style="margin-bottom:36px">
            <div style="display:flex;align-items:baseline;gap:12px;margin-bottom:12px">
              <h3 style="margin:0">{{ group.family }}</h3>
              <span style="font-size:13px;color:var(--docs-text-muted)">{{ group.description }}</span>
              @if (group.pantone) {
                <span class="badge badge--version">{{ group.pantone }}</span>
              }
            </div>
            <!-- Color strip -->
            <div style="display:flex;height:48px;border-radius:10px;overflow:hidden;margin-bottom:10px;border:1px solid var(--docs-border)">
              @for (token of group.tokens; track token.cssVar) {
                <div
                  [style.background]="token.value"
                  [title]="token.cssVar + ' — ' + token.value"
                  style="flex:1"
                ></div>
              }
            </div>
            <!-- Token grid -->
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:6px">
              @for (token of group.tokens; track token.cssVar) {
                <div style="display:flex;align-items:center;gap:10px;padding:8px 10px;border:1px solid var(--docs-border);border-radius:6px;background:var(--docs-bg)">
                  <div
                    [style.background]="token.value"
                    style="width:36px;height:36px;border-radius:5px;border:1px solid rgba(0,0,0,0.08);flex-shrink:0"
                  ></div>
                  <div style="min-width:0">
                    <div style="font-size:11px;font-weight:700;color:var(--docs-text);margin-bottom:1px">{{ token.shade }}</div>
                    <div style="font-family:'Fira Code',monospace;font-size:10px;color:var(--docs-text-muted);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">{{ token.cssVar }}</div>
                    <div style="font-family:'Fira Code',monospace;font-size:10px;color:var(--docs-text-subtle)">{{ token.value }}</div>
                  </div>
                </div>
              }
            </div>
          </div>
        }
      </div>

      <!-- ── Status Tokens ────────────────────────────────── -->
      <div class="docs-section">
        <h2>Tokens de Status Clínico</h2>
        <p>
          Os 5 estados do domínio de saúde Klini (coleção <em>04 · Klini Status</em>).
          Cada status expõe 4 variantes: <strong>solid</strong> (bg sólido),
          <strong>bg</strong> (fundo suave), <strong>fg</strong> (texto sobre bg) e
          <strong>on-solid</strong> (texto sobre solid).
          Usados diretamente em <code class="font-mono">kln-status-pill</code> e componentes de tabela.
        </p>

        <div style="display:flex;flex-direction:column;gap:16px">
          @for (s of statusTokens; track s.status) {
            <div style="border:1px solid var(--docs-border);border-radius:10px;overflow:hidden">
              <!-- Header com pill demo -->
              <div [style.background]="s.bg" style="padding:14px 18px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--docs-border)">
                <div style="display:flex;align-items:center;gap:12px">
                  <div [style.background]="s.solid" style="padding:3px 12px;border-radius:9999px;font-size:12px;font-weight:600" [style.color]="s.onSolid">
                    {{ s.label }}
                  </div>
                  <code class="font-mono" style="font-size:12px;color:var(--docs-text-muted)">status="{{ s.status }}"</code>
                </div>
              </div>
              <!-- Token grid -->
              <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:0">
                <!-- solid -->
                <div style="display:flex;align-items:center;gap:10px;padding:10px 16px;border-right:1px solid var(--docs-border)">
                  <div [style.background]="s.solid" style="width:32px;height:32px;border-radius:5px;flex-shrink:0"></div>
                  <div>
                    <div style="font-size:11px;font-weight:600;color:var(--docs-text)">solid</div>
                    <div style="font-family:'Fira Code',monospace;font-size:10px;color:var(--docs-text-muted)">{{ s.solidVar }}</div>
                    <div style="font-family:'Fira Code',monospace;font-size:10px;color:var(--docs-text-subtle)">{{ s.solid }}</div>
                  </div>
                </div>
                <!-- bg -->
                <div style="display:flex;align-items:center;gap:10px;padding:10px 16px;border-right:1px solid var(--docs-border)">
                  <div [style.background]="s.bg" style="width:32px;height:32px;border-radius:5px;flex-shrink:0;border:1px solid rgba(0,0,0,0.08)"></div>
                  <div>
                    <div style="font-size:11px;font-weight:600;color:var(--docs-text)">bg</div>
                    <div style="font-family:'Fira Code',monospace;font-size:10px;color:var(--docs-text-muted)">{{ s.bgVar }}</div>
                    <div style="font-family:'Fira Code',monospace;font-size:10px;color:var(--docs-text-subtle)">{{ s.bg }}</div>
                  </div>
                </div>
                <!-- fg (text) -->
                <div style="display:flex;align-items:center;gap:10px;padding:10px 16px">
                  <div [style.background]="s.bg" style="width:32px;height:32px;border-radius:5px;flex-shrink:0;display:flex;align-items:center;justify-content:center;border:1px solid rgba(0,0,0,0.08)">
                    <span style="font-size:13px;font-weight:700" [style.color]="s.fg">Aa</span>
                  </div>
                  <div>
                    <div style="font-size:11px;font-weight:600;color:var(--docs-text)">fg (texto)</div>
                    <div style="font-family:'Fira Code',monospace;font-size:10px;color:var(--docs-text-muted)">{{ s.fgVar }}</div>
                    <div style="font-family:'Fira Code',monospace;font-size:10px;color:var(--docs-text-subtle)">{{ s.fg }}</div>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>

        <div style="margin-top:20px;padding:14px 18px;background:var(--docs-brand-soft);border-radius:8px;border-left:3px solid var(--docs-accent)">
          <p style="margin:0;font-size:13px;color:var(--docs-text)">
            <strong>Uso no código:</strong>
            Os tokens são aplicados automaticamente por <code class="font-mono">kln-status-pill</code>.
            Para estilização manual, referencie <code class="font-mono">--kln-status-autorizada-bg</code> etc.
          </p>
        </div>
      </div>

      <!-- ── Paleta de Gráficos ────────────────────────────── -->
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
            <div style="flex:1;height:40px;border-radius:4px" [style.background]="c.value"></div>
          }
        </div>
        <div style="display:flex;gap:4px;margin-bottom:24px">
          @for (c of chartSequential; track c.cssVar) {
            <div style="flex:1;text-align:center;font-family:'Fira Code',monospace;font-size:10px;color:var(--docs-text-muted)">{{ c.cssVar }}</div>
          }
        </div>

        <h3>Status semântico (para gráficos)</h3>
        <p>Cores para indicadores de performance em dashboards analíticos.</p>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          @for (c of chartStatus; track c.cssVar) {
            <div style="display:flex;align-items:center;gap:8px;padding:10px;border:1px solid var(--docs-border);border-radius:8px">
              <div [style.background]="c.value" style="width:32px;height:32px;border-radius:4px"></div>
              <div>
                <div style="font-size:12px;font-weight:600;color:var(--docs-text)">{{ c.label }}</div>
                <div style="font-family:'Fira Code',monospace;font-size:10px;color:var(--docs-text-muted)">{{ c.cssVar }}</div>
                <div style="font-family:'Fira Code',monospace;font-size:10px;color:var(--docs-text-subtle)">{{ c.value }}</div>
              </div>
            </div>
          }
        </div>
      </div>

      <!-- ── Espaçamento ───────────────────────────────────── -->
      <div class="docs-section">
        <h2>Espaçamento</h2>
        <p>Escala de espaçamento baseada em múltiplos de 4px — <code class="font-mono">--kln-space-N</code>.</p>
        @for (s of spacing; track s.token) {
          <div style="display:flex;align-items:center;gap:16px;margin-bottom:8px">
            <div style="width:120px;font-family:'Fira Code',monospace;font-size:11px;color:var(--docs-text-muted)">{{ s.token }}</div>
            <div [style.width.px]="s.px" style="height:20px;background:var(--docs-accent);border-radius:2px;opacity:0.7;min-width:4px"></div>
            <span style="font-size:12px;color:var(--docs-text-muted)">{{ s.px }}px</span>
          </div>
        }
      </div>

      <!-- ── Border Radius ─────────────────────────────────── -->
      <div class="docs-section">
        <h2>Border Radius</h2>
        <p>Escala de arredondamento — <code class="font-mono">--kln-radius-[size]</code>.</p>
        <div style="display:flex;gap:16px;flex-wrap:wrap">
          @for (r of radii; track r.token) {
            <div style="display:flex;flex-direction:column;align-items:center;gap:8px">
              <div [style.border-radius]="r.value" style="width:64px;height:64px;background:var(--docs-accent);opacity:0.7"></div>
              <span style="font-size:11px;font-weight:600;color:var(--docs-text)">{{ r.token }}</span>
              <span style="font-family:'Fira Code',monospace;font-size:10px;color:var(--docs-text-muted)">{{ r.value }}</span>
            </div>
          }
        </div>
      </div>

      <!-- ── Tipografia ─────────────────────────────────────── -->
      <div class="docs-section">
        <h2>Tipografia</h2>
        <p>
          Fonte primária: <strong>Objective</strong> (Klini Brand — ExtraBold 800, SemiBold 600, Regular 400).
          Fonte editorial: <strong>Merriweather</strong> (apenas marketing, não em UI de produto).
        </p>
        <div style="border:1px solid var(--docs-border);border-radius:8px;overflow:hidden">
          @for (t of typographyScale; track t.label) {
            <div style="display:flex;align-items:baseline;gap:16px;padding:16px 20px;border-bottom:1px solid var(--docs-border)">
              <div style="width:160px;flex-shrink:0">
                <div style="font-size:12px;font-weight:600;color:var(--docs-text)">{{ t.label }}</div>
                <div style="font-family:'Fira Code',monospace;font-size:10px;color:var(--docs-text-muted)">{{ t.size }} / w{{ t.weight }}</div>
              </div>
              <div [style.font-size]="t.size" [style.font-weight]="t.weight" style="color:var(--docs-text);line-height:1.2;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
                {{ t.sample }}
              </div>
            </div>
          }
        </div>
      </div>

      <!-- ── Tokens Semânticos ─────────────────────────────── -->
      <div class="docs-section">
        <h2>Tokens Semânticos</h2>
        <p>
          Camada semântica do Klini DS — extraída do Figma (coleção <em>02 · Semantic</em>, modo <em>Light</em>).
          Estes tokens referenciam os primitivos e <strong>nunca</strong> contêm valores hardcoded.
          Use sempre os semânticos em componentes, nunca os primitivos diretamente.
        </p>

        @for (group of semanticGroups; track group.group) {
          <div style="margin-bottom:28px">
            <h3 style="font-size:14px;font-weight:700;color:var(--docs-text);margin-bottom:10px;padding-bottom:6px;border-bottom:1px solid var(--docs-border)">
              {{ group.group }}
            </h3>
            <div style="border:1px solid var(--docs-border);border-radius:8px;overflow:hidden">
              <table style="width:100%;border-collapse:collapse;font-size:12px">
                <thead>
                  <tr style="background:var(--docs-brand-soft)">
                    <th style="text-align:left;padding:10px 14px;font-weight:600;color:var(--docs-text);border-bottom:1px solid var(--docs-border);width:40%">Token</th>
                    <th style="text-align:left;padding:10px 14px;font-weight:600;color:var(--docs-text);border-bottom:1px solid var(--docs-border);width:30%">Valor</th>
                    <th style="text-align:left;padding:10px 14px;font-weight:600;color:var(--docs-text);border-bottom:1px solid var(--docs-border)">Uso</th>
                  </tr>
                </thead>
                <tbody>
                  @for (token of group.tokens; track token.cssVar) {
                    <tr style="border-bottom:1px solid var(--docs-border)">
                      <td style="padding:10px 14px">
                        <div style="display:flex;align-items:center;gap:8px">
                          <div [style.background]="token.resolvedValue" style="width:20px;height:20px;border-radius:4px;border:1px solid rgba(0,0,0,0.1);flex-shrink:0"></div>
                          <code style="font-family:'Fira Code',monospace;font-size:11px;color:var(--docs-text)">{{ token.cssVar }}</code>
                        </div>
                      </td>
                      <td style="padding:10px 14px">
                        <div style="font-family:'Fira Code',monospace;font-size:10px;color:var(--docs-text-muted)">{{ token.primitiveRef }}</div>
                        <div style="font-family:'Fira Code',monospace;font-size:10px;color:var(--docs-text-subtle)">{{ token.resolvedValue }}</div>
                      </td>
                      <td style="padding:10px 14px;font-size:12px;color:var(--docs-text-muted)">{{ token.usage }}</td>
                    </tr>
                  }
                </tbody>
              </table>
            </div>
          </div>
        }
      </div>

      <!-- ── Elevação (Sombras) ─────────────────────────────── -->
      <div class="docs-section">
        <h2>Elevação (Sombras)</h2>
        <p>
          5 níveis de sombra baseados na cor <code class="font-mono">ink #0F1B1A</code>, extraídos dos
          <em>Effect Styles</em> do Figma (Motion &amp; Elevation). Também inclui <em>focus rings</em> WCAG 2.4.7 AA.
        </p>

        <h3 style="font-size:13px;font-weight:700;margin-bottom:12px">Níveis de elevação</h3>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:20px;margin-bottom:32px">
          @for (e of elevationTokens; track e.cssVar) {
            <div style="display:flex;flex-direction:column;gap:10px">
              <div
                [style.box-shadow]="e.value"
                style="height:80px;border-radius:10px;background:var(--docs-surface, #ffffff);border:1px solid var(--docs-border);display:flex;align-items:center;justify-content:center"
              >
                <span style="font-size:13px;font-weight:600;color:var(--docs-text)">{{ e.name }}</span>
              </div>
              <div>
                <code style="font-family:'Fira Code',monospace;font-size:10px;color:var(--docs-text-muted);display:block">{{ e.cssVar }}</code>
                <span style="font-family:'Fira Code',monospace;font-size:9px;color:var(--docs-text-subtle)">{{ e.value }}</span>
              </div>
              <p style="font-size:11px;color:var(--docs-text-muted);margin:0">{{ e.usage }}</p>
            </div>
          }
        </div>

        <h3 style="font-size:13px;font-weight:700;margin-bottom:12px">Focus Rings (WCAG 2.4.7 AA)</h3>
        <div style="display:flex;gap:20px;flex-wrap:wrap">
          @for (f of focusRingTokens; track f.cssVar) {
            <div style="display:flex;flex-direction:column;gap:10px;align-items:flex-start">
              <div
                [style.box-shadow]="f.value"
                style="width:120px;height:40px;border-radius:6px;background:var(--docs-surface, #ffffff);border:1.5px solid var(--docs-border)"
              ></div>
              <div>
                <code style="font-family:'Fira Code',monospace;font-size:10px;color:var(--docs-text-muted);display:block">{{ f.cssVar }}</code>
                <span style="font-size:11px;color:var(--docs-text-muted)">{{ f.usage }}</span>
              </div>
            </div>
          }
        </div>
      </div>

      <!-- ── Escala ─────────────────────────────────────────── -->
      <div class="docs-section">
        <h2>Escala</h2>
        <p>
          Tokens de escala do Klini DS — extraídos do Figma (coleção <em>05 · Scale</em>).
          Tamanhos de componentes, z-index, opacidade, larguras de borda, breakpoints e grid.
        </p>

        <!-- Tamanhos de componentes -->
        <h3 style="font-size:13px;font-weight:700;margin-bottom:10px">Tamanhos de Componentes</h3>
        <div style="border:1px solid var(--docs-border);border-radius:8px;overflow:hidden;margin-bottom:28px">
          <table style="width:100%;border-collapse:collapse;font-size:12px">
            <thead>
              <tr style="background:var(--docs-brand-soft)">
                <th style="text-align:left;padding:10px 14px;font-weight:600;color:var(--docs-text);border-bottom:1px solid var(--docs-border)">Token</th>
                <th style="text-align:left;padding:10px 14px;font-weight:600;color:var(--docs-text);border-bottom:1px solid var(--docs-border)">Valor</th>
                <th style="text-align:left;padding:10px 14px;font-weight:600;color:var(--docs-text);border-bottom:1px solid var(--docs-border)">Visual</th>
              </tr>
            </thead>
            <tbody>
              @for (t of componentSizeTokens; track t.cssVar) {
                <tr style="border-bottom:1px solid var(--docs-border)">
                  <td style="padding:10px 14px">
                    <code style="font-family:'Fira Code',monospace;font-size:11px;color:var(--docs-text)">{{ t.cssVar }}</code>
                  </td>
                  <td style="padding:10px 14px;font-family:'Fira Code',monospace;font-size:11px;color:var(--docs-text-muted)">{{ t.value }}</td>
                  <td style="padding:10px 14px">
                    <div [style.height]="t.value" style="width:100%;max-width:200px;background:var(--docs-accent);border-radius:4px;opacity:0.6"></div>
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>

        <!-- Z-index -->
        <h3 style="font-size:13px;font-weight:700;margin-bottom:10px">Z-index</h3>
        <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:28px">
          @for (z of zIndexTokens; track z.cssVar) {
            <div style="display:flex;align-items:center;gap:16px;padding:8px 14px;border:1px solid var(--docs-border);border-radius:6px;background:var(--docs-bg)">
              <code style="font-family:'Fira Code',monospace;font-size:11px;color:var(--docs-text);width:200px;flex-shrink:0">{{ z.cssVar }}</code>
              <span style="font-family:'Fira Code',monospace;font-size:11px;color:var(--docs-accent);font-weight:700;width:48px">{{ z.value }}</span>
              <span style="font-size:11px;color:var(--docs-text-muted)">{{ z.name }}</span>
            </div>
          }
        </div>

        <!-- Breakpoints -->
        <h3 style="font-size:13px;font-weight:700;margin-bottom:10px">Breakpoints</h3>
        <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:28px">
          @for (bp of breakpointTokens; track bp.cssVar) {
            <div style="display:flex;align-items:center;gap:16px">
              <code style="font-family:'Fira Code',monospace;font-size:11px;color:var(--docs-text);width:200px;flex-shrink:0">{{ bp.cssVar }}</code>
              <div style="flex:1;max-width:400px;height:10px;background:var(--docs-border);border-radius:99px;position:relative">
                <div [style.width]="bp.percent" style="height:100%;background:var(--docs-accent);border-radius:99px;opacity:0.7"></div>
              </div>
              <span style="font-family:'Fira Code',monospace;font-size:11px;color:var(--docs-text-muted);width:52px">{{ bp.value }}</span>
            </div>
          }
        </div>

        <!-- Opacidade -->
        <h3 style="font-size:13px;font-weight:700;margin-bottom:10px">Opacidade</h3>
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:28px">
          @for (o of opacityTokens; track o.cssVar) {
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;width:56px">
              <div [style.opacity]="o.value" style="width:48px;height:48px;border-radius:6px;background:var(--docs-accent);border:1px solid var(--docs-border)"></div>
              <span style="font-family:'Fira Code',monospace;font-size:9px;color:var(--docs-text-muted);text-align:center">{{ o.value }}</span>
            </div>
          }
        </div>

        <!-- Border Width -->
        <h3 style="font-size:13px;font-weight:700;margin-bottom:10px">Espessura de Borda</h3>
        <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:28px">
          @for (b of borderWidthTokens; track b.cssVar) {
            <div style="display:flex;align-items:center;gap:16px">
              <code style="font-family:'Fira Code',monospace;font-size:11px;color:var(--docs-text);width:280px;flex-shrink:0">{{ b.cssVar }}</code>
              <div [style.border-top-width]="b.value" style="flex:1;max-width:200px;border-top-style:solid;border-color:var(--docs-accent)"></div>
              <span style="font-family:'Fira Code',monospace;font-size:11px;color:var(--docs-text-muted)">{{ b.value }}</span>
            </div>
          }
        </div>

        <!-- Grid -->
        <h3 style="font-size:13px;font-weight:700;margin-bottom:10px">Grid</h3>
        <div style="border:1px solid var(--docs-border);border-radius:8px;overflow:hidden">
          <table style="width:100%;border-collapse:collapse;font-size:12px">
            <thead>
              <tr style="background:var(--docs-brand-soft)">
                <th style="text-align:left;padding:10px 14px;font-weight:600;color:var(--docs-text);border-bottom:1px solid var(--docs-border)">Token</th>
                <th style="text-align:left;padding:10px 14px;font-weight:600;color:var(--docs-text);border-bottom:1px solid var(--docs-border)">Valor</th>
              </tr>
            </thead>
            <tbody>
              @for (g of gridTokens; track g.cssVar) {
                <tr style="border-bottom:1px solid var(--docs-border)">
                  <td style="padding:10px 14px">
                    <code style="font-family:'Fira Code',monospace;font-size:11px;color:var(--docs-text)">{{ g.cssVar }}</code>
                  </td>
                  <td style="padding:10px 14px;font-family:'Fira Code',monospace;font-size:11px;color:var(--docs-text-muted)">{{ g.value }}</td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,
})
export class TokensComponent {
  // ── Paleta principal ────────────────────────────────────────────────────
  // Valores extraídos de _primitive.scss (git klini-paulalarosa/klini-ds)
  // Escala numérica: 50 = mais claro, 900 = mais escuro, 500 = tom de marca
  colorGroups: ColorGroup[] = [
    {
      family: 'Teal',
      description: 'Cor primária de marca',
      pantone: 'PANTONE 2461C',
      tokens: [
        { name: 'Teal 50',  cssVar: '--kln-color-teal-50',  value: '#E8F4F3', shade: '50' },
        { name: 'Teal 200', cssVar: '--kln-color-teal-200', value: '#A8D5D3', shade: '200' },
        { name: 'Teal 300', cssVar: '--kln-color-teal-300', value: '#7CBFBD', shade: '300' },
        { name: 'Teal 400', cssVar: '--kln-color-teal-400', value: '#51AAA7', shade: '400' },
        { name: 'Teal 500', cssVar: '--kln-color-teal-500', value: '#259591', shade: '500 · brand' },
        { name: 'Teal 600', cssVar: '--kln-color-teal-600', value: '#1F7E7B', shade: '600' },
        { name: 'Teal 700', cssVar: '--kln-color-teal-700', value: '#196766', shade: '700' },
        { name: 'Teal 800', cssVar: '--kln-color-teal-800', value: '#134F4E', shade: '800' },
        { name: 'Teal 900', cssVar: '--kln-color-teal-900', value: '#0E3837', shade: '900' },
      ],
    },
    {
      family: 'Sea',
      description: 'Cor complementar',
      pantone: 'PANTONE 549C',
      tokens: [
        { name: 'Sea 200', cssVar: '--kln-color-sea-200', value: '#A6CACE', shade: '200' },
        { name: 'Sea 300', cssVar: '--kln-color-sea-300', value: '#88B9BE', shade: '300' },
        { name: 'Sea 400', cssVar: '--kln-color-sea-400', value: '#7AB0B6', shade: '400' },
        { name: 'Sea 500', cssVar: '--kln-color-sea-500', value: '#6AA7AE', shade: '500 · brand' },
        { name: 'Sea 600', cssVar: '--kln-color-sea-600', value: '#558A91', shade: '600' },
        { name: 'Sea 700', cssVar: '--kln-color-sea-700', value: '#406E74', shade: '700' },
      ],
    },
    {
      family: 'Orange',
      description: 'Acento quente',
      pantone: 'PANTONE 7565C',
      tokens: [
        { name: 'Orange 200', cssVar: '--kln-color-orange-200', value: '#EBC9A8', shade: '200' },
        { name: 'Orange 300', cssVar: '--kln-color-orange-300', value: '#E1AF7C', shade: '300' },
        { name: 'Orange 400', cssVar: '--kln-color-orange-400', value: '#D79451', shade: '400' },
        { name: 'Orange 500', cssVar: '--kln-color-orange-500', value: '#CD7925', shade: '500 · brand' },
        { name: 'Orange 600', cssVar: '--kln-color-orange-600', value: '#A8631E', shade: '600' },
        { name: 'Orange 700', cssVar: '--kln-color-orange-700', value: '#834D17', shade: '700' },
      ],
    },
    {
      family: 'Coral',
      description: 'Danger / negado',
      pantone: 'PANTONE 7625C',
      tokens: [
        { name: 'Coral 200', cssVar: '--kln-color-coral-200', value: '#F3BCBD', shade: '200' },
        { name: 'Coral 300', cssVar: '--kln-color-coral-300', value: '#EC9A9B', shade: '300' },
        { name: 'Coral 400', cssVar: '--kln-color-coral-400', value: '#E6797A', shade: '400' },
        { name: 'Coral 500', cssVar: '--kln-color-coral-500', value: '#E05759', shade: '500 · brand' },
        { name: 'Coral 600', cssVar: '--kln-color-coral-600', value: '#C24648', shade: '600' },
        { name: 'Coral 700', cssVar: '--kln-color-coral-700', value: '#A33638', shade: '700' },
      ],
    },
    {
      family: 'Ink',
      description: 'Neutros quentes — textos, fundos, bordas',
      tokens: [
        { name: 'Ink 50',  cssVar: '--kln-color-ink-50',  value: '#F7F8F8', shade: '50' },
        { name: 'Ink 100', cssVar: '--kln-color-ink-100', value: '#EEEFF0', shade: '100' },
        { name: 'Ink 200', cssVar: '--kln-color-ink-200', value: '#E2E4E4', shade: '200' },
        { name: 'Ink 300', cssVar: '--kln-color-ink-300', value: '#C4C8C7', shade: '300' },
        { name: 'Ink 400', cssVar: '--kln-color-ink-400', value: '#9BA3A2', shade: '400' },
        { name: 'Ink 500', cssVar: '--kln-color-ink-500', value: '#6B7370', shade: '500' },
        { name: 'Ink 600', cssVar: '--kln-color-ink-600', value: '#4A5655', shade: '600' },
        { name: 'Ink 700', cssVar: '--kln-color-ink-700', value: '#344140', shade: '700' },
        { name: 'Ink 800', cssVar: '--kln-color-ink-800', value: '#1F2D2C', shade: '800' },
        { name: 'Ink 900', cssVar: '--kln-color-ink-900', value: '#0F1B1A', shade: '900' },
      ],
    },
  ];

  // ── Status Tokens — domínio de saúde ───────────────────────────────────
  // Extraídos de _status.scss — 5 estados clínicos Klini
  statusTokens: StatusToken[] = [
    {
      status: 'autorizada',
      label: 'Autorizada',
      solid:   '#259591',  // --kln-color-teal-100 (legado) = teal-500
      bg:      '#D3EAE9',  // --kln-color-teal-wash
      fg:      '#196766',  // --kln-color-teal-700
      onSolid: '#FFFFFF',
      solidVar: '--kln-status-autorizada-solid',
      bgVar:    '--kln-status-autorizada-bg',
      fgVar:    '--kln-status-autorizada-fg',
    },
    {
      status: 'negado',
      label: 'Negado',
      solid:   '#E05759',  // --kln-color-coral-100 (legado) = coral-500
      bg:      '#F9DDDE',  // --kln-color-coral-wash
      fg:      '#A33638',  // --kln-color-coral-700
      onSolid: '#FFFFFF',
      solidVar: '--kln-status-negado-solid',
      bgVar:    '--kln-status-negado-bg',
      fgVar:    '--kln-status-negado-fg',
    },
    {
      status: 'em-processo',
      label: 'Em processo',
      solid:   '#90A4AE',  // --kln-color-slate-500
      bg:      '#ECEFF1',  // --kln-color-slate-100
      fg:      '#546E7A',  // --kln-color-slate-700
      onSolid: '#FFFFFF',
      solidVar: '--kln-status-em-processo-solid',
      bgVar:    '--kln-status-em-processo-bg',
      fgVar:    '--kln-status-em-processo-fg',
    },
    {
      status: 'parcialmente',
      label: 'Parcialmente',
      solid:   '#6AA7AE',  // --kln-color-sea-100 (legado) = sea-500
      bg:      '#E1EDEF',  // --kln-color-sea-wash
      fg:      '#406E74',  // --kln-color-sea-700
      onSolid: '#FFFFFF',
      solidVar: '--kln-status-parcialmente-solid',
      bgVar:    '--kln-status-parcialmente-bg',
      fgVar:    '--kln-status-parcialmente-fg',
    },
    {
      status: 'inativa',
      label: 'Inativa',
      solid:   '#CD7925',  // --kln-color-orange-100 (legado) = orange-500
      bg:      '#F5E4D3',  // --kln-color-orange-wash
      fg:      '#834D17',  // --kln-color-orange-700
      onSolid: '#FFFFFF',
      solidVar: '--kln-status-inativa-solid',
      bgVar:    '--kln-status-inativa-bg',
      fgVar:    '--kln-status-inativa-fg',
    },
  ];

  // ── Chart tokens ────────────────────────────────────────────────────────
  chartCategorical = [
    { cssVar: '--kln-chart-cat-teal',   value: '#259591', label: 'Teal' },
    { cssVar: '--kln-chart-cat-sea',    value: '#6AA7AE', label: 'Sea' },
    { cssVar: '--kln-chart-cat-orange', value: '#CD7925', label: 'Orange' },
    { cssVar: '--kln-chart-cat-coral',  value: '#E05759', label: 'Coral' },
  ];

  chartSequential = [
    { cssVar: 'seq-wash',  value: '#E8F4F3' },
    { cssVar: 'seq-light', value: '#A8D5D3' },
    { cssVar: 'seq-mid',   value: '#259591' },
    { cssVar: 'seq-deep',  value: '#1F7E7B' },
    { cssVar: 'seq-ink',   value: '#0E3837' },
  ];

  chartStatus = [
    { label: 'Success', cssVar: '--kln-chart-status-success',   value: '#259591', note: 'teal-500' },
    { label: 'Info',    cssVar: '--kln-chart-status-info',       value: '#6AA7AE', note: 'sea-500' },
    { label: 'Warning', cssVar: '--kln-chart-status-warn',       value: '#CD7925', note: 'orange-500' },
    { label: 'Danger',  cssVar: '--kln-chart-status-danger',     value: '#E05759', note: 'coral-500' },
    { label: 'Neutral', cssVar: '--kln-chart-status-secondary',  value: '#9BA3A2', note: 'ink-400' },
  ];

  // ── Espaçamento ─────────────────────────────────────────────────────────
  spacing = [
    { token: '--kln-space-1',  px: 4  },
    { token: '--kln-space-2',  px: 8  },
    { token: '--kln-space-3',  px: 12 },
    { token: '--kln-space-4',  px: 16 },
    { token: '--kln-space-5',  px: 20 },
    { token: '--kln-space-6',  px: 24 },
    { token: '--kln-space-8',  px: 32 },
    { token: '--kln-space-10', px: 40 },
    { token: '--kln-space-12', px: 48 },
    { token: '--kln-space-16', px: 64 },
    { token: '--kln-space-20', px: 80 },
  ];

  // ── Border Radius ───────────────────────────────────────────────────────
  radii = [
    { token: 'xs',   value: '2px'    },
    { token: 'sm',   value: '4px'    },
    { token: 'md',   value: '6px'    },
    { token: 'lg',   value: '8px'    },
    { token: 'xl',   value: '12px'   },
    { token: '2xl',  value: '16px'   },
    { token: '3xl',  value: '20px'   },
    { token: 'pill', value: '9999px' },
  ];

  // ── Tipografia ──────────────────────────────────────────────────────────
  typographyScale = [
    { label: 'Display',  size: '2.5rem',   weight: '800', sample: 'Klini Saúde' },
    { label: 'H1',       size: '2rem',     weight: '700', sample: 'Portal do Beneficiário' },
    { label: 'H2',       size: '1.5rem',   weight: '600', sample: 'Atendimentos este mês' },
    { label: 'H3',       size: '1.25rem',  weight: '600', sample: 'Consulta agendada' },
    { label: 'Body Lg',  size: '1rem',     weight: '400', sample: 'Plano Klini Start PJ — Vigência 2024' },
    { label: 'Body',     size: '0.875rem', weight: '400', sample: 'Carência cumprida em 14/03/2024' },
    { label: 'Small',    size: '0.8125rem',weight: '400', sample: 'Dr. Marcos Oliveira · CRM 12345' },
    { label: 'Caption',  size: '0.6875rem',weight: '600', sample: 'ÚLTIMA ATUALIZAÇÃO: 01/06/2026' },
  ];

  // ── Tokens Semânticos ────────────────────────────────────────────────────
  // Extraídos de _semantic.scss — referências aos primitivos, modo Light
  semanticGroups: SemanticGroup[] = [
    {
      group: 'Surface — Fundos de página, cards e camadas',
      tokens: [
        { name: 'surface-page',         cssVar: '--kln-surface-page',         resolvedValue: '#F7F8F8', primitiveRef: 'var(--kln-color-ink-50)',       usage: 'Fundo padrão de páginas' },
        { name: 'surface-raised',       cssVar: '--kln-surface-raised',       resolvedValue: '#FFFFFF', primitiveRef: 'var(--kln-color-white)',        usage: 'Cards, painéis flutuantes' },
        { name: 'surface-sunken',       cssVar: '--kln-surface-sunken',       resolvedValue: '#EEEFF0', primitiveRef: 'var(--kln-color-ink-100)',      usage: 'Seções recuadas, zebra rows' },
        { name: 'surface-inverse',      cssVar: '--kln-surface-inverse',      resolvedValue: '#0F1B1A', primitiveRef: 'var(--kln-color-ink-900)',      usage: 'Fundos escuros, dark mode' },
        { name: 'surface-brand-soft',   cssVar: '--kln-surface-brand-soft',   resolvedValue: '#D3EAE9', primitiveRef: 'var(--kln-color-teal-wash)',    usage: 'Destaques suaves de marca' },
        { name: 'surface-danger-soft',  cssVar: '--kln-surface-danger-soft',  resolvedValue: '#F9DDDE', primitiveRef: 'var(--kln-color-coral-wash)',   usage: 'Alertas, estados de erro' },
        { name: 'surface-warning-soft', cssVar: '--kln-surface-warning-soft', resolvedValue: '#F5E4D3', primitiveRef: 'var(--kln-color-orange-wash)',  usage: 'Avisos, atenção' },
        { name: 'surface-info-soft',    cssVar: '--kln-surface-info-soft',    resolvedValue: '#E1EDEF', primitiveRef: 'var(--kln-color-sea-wash)',     usage: 'Informativo, dicas' },
      ],
    },
    {
      group: 'Text — Hierarquia tipográfica',
      tokens: [
        { name: 'text-primary',    cssVar: '--kln-text-primary',    resolvedValue: '#0F1B1A', primitiveRef: 'var(--kln-color-ink-900)', usage: 'Texto principal, headings' },
        { name: 'text-secondary',  cssVar: '--kln-text-secondary',  resolvedValue: '#344140', primitiveRef: 'var(--kln-color-ink-700)', usage: 'Texto secundário, labels' },
        { name: 'text-muted',      cssVar: '--kln-text-muted',      resolvedValue: '#6B7370', primitiveRef: 'var(--kln-color-ink-500)', usage: 'Texto auxiliar, metadados' },
        { name: 'text-disabled',   cssVar: '--kln-text-disabled',   resolvedValue: '#9BA3A2', primitiveRef: 'var(--kln-color-ink-400)', usage: 'Texto desabilitado' },
        { name: 'text-on-brand',   cssVar: '--kln-text-on-brand',   resolvedValue: '#FFFFFF', primitiveRef: 'var(--kln-color-white)',   usage: 'Texto sobre fundo de marca' },
        { name: 'text-on-inverse', cssVar: '--kln-text-on-inverse', resolvedValue: '#F7F8F8', primitiveRef: 'var(--kln-color-ink-50)',  usage: 'Texto sobre fundo escuro' },
        { name: 'text-brand',      cssVar: '--kln-text-brand',      resolvedValue: '#259591', primitiveRef: 'var(--kln-color-teal-100)',  usage: 'Links, CTAs, destaque Teal' },
        { name: 'text-accent',     cssVar: '--kln-text-accent',     resolvedValue: '#CD7925', primitiveRef: 'var(--kln-color-orange-100)', usage: 'Destaque quente, acento' },
        { name: 'text-danger',     cssVar: '--kln-text-danger',     resolvedValue: '#E05759', primitiveRef: 'var(--kln-color-coral-100)',  usage: 'Erros, mensagens críticas' },
      ],
    },
    {
      group: 'Border — Bordas e divisores',
      tokens: [
        { name: 'border-default', cssVar: '--kln-border-default', resolvedValue: '#E2E4E4', primitiveRef: 'var(--kln-color-ink-200)', usage: 'Bordas padrão de cards e inputs' },
        { name: 'border-strong',  cssVar: '--kln-border-strong',  resolvedValue: '#C4C8C7', primitiveRef: 'var(--kln-color-ink-300)', usage: 'Bordas com maior contraste' },
        { name: 'border-brand',   cssVar: '--kln-border-brand',   resolvedValue: '#259591', primitiveRef: 'var(--kln-color-teal-100)',  usage: 'Borda de seleção, focus brand' },
        { name: 'border-accent',  cssVar: '--kln-border-accent',  resolvedValue: '#CD7925', primitiveRef: 'var(--kln-color-orange-100)', usage: 'Borda de acento/warning' },
        { name: 'border-danger',  cssVar: '--kln-border-danger',  resolvedValue: '#E05759', primitiveRef: 'var(--kln-color-coral-100)',  usage: 'Borda de erro/perigo' },
        { name: 'border-inverse', cssVar: '--kln-border-inverse', resolvedValue: '#0F1B1A', primitiveRef: 'var(--kln-color-ink-900)', usage: 'Borda em fundo escuro' },
      ],
    },
    {
      group: 'Action — Estados interativos',
      tokens: [
        { name: 'action-primary',        cssVar: '--kln-action-primary',        resolvedValue: '#259591', primitiveRef: 'var(--kln-color-teal-100)',   usage: 'Botão primário, estado padrão' },
        { name: 'action-primary-hover',  cssVar: '--kln-action-primary-hover',  resolvedValue: '#1F7E7B', primitiveRef: 'var(--kln-color-teal-600)',   usage: 'Botão primário, hover' },
        { name: 'action-primary-active', cssVar: '--kln-action-primary-active', resolvedValue: '#196766', primitiveRef: 'var(--kln-color-teal-700)',   usage: 'Botão primário, pressed' },
        { name: 'action-accent',         cssVar: '--kln-action-accent',         resolvedValue: '#CD7925', primitiveRef: 'var(--kln-color-orange-100)', usage: 'Ação de acento, estado padrão' },
        { name: 'action-accent-hover',   cssVar: '--kln-action-accent-hover',   resolvedValue: '#A8631E', primitiveRef: 'var(--kln-color-orange-600)', usage: 'Ação de acento, hover' },
        { name: 'action-danger',         cssVar: '--kln-action-danger',         resolvedValue: '#E05759', primitiveRef: 'var(--kln-color-coral-100)',  usage: 'Ação destrutiva, estado padrão' },
        { name: 'action-danger-hover',   cssVar: '--kln-action-danger-hover',   resolvedValue: '#C24648', primitiveRef: 'var(--kln-color-coral-600)',  usage: 'Ação destrutiva, hover' },
        { name: 'action-disabled',       cssVar: '--kln-action-disabled',       resolvedValue: '#C4C8C7', primitiveRef: 'var(--kln-color-ink-300)',    usage: 'Estado desabilitado' },
      ],
    },
    {
      group: 'Feedback — Success / Warning / Danger / Info',
      tokens: [
        { name: 'feedback-success-fg',     cssVar: '--kln-feedback-success-fg',     resolvedValue: '#196766', primitiveRef: 'var(--kln-color-teal-700)',    usage: 'Texto de sucesso' },
        { name: 'feedback-success-bg',     cssVar: '--kln-feedback-success-bg',     resolvedValue: '#E8F4F3', primitiveRef: 'var(--kln-color-teal-50)',     usage: 'Fundo de sucesso' },
        { name: 'feedback-success-border', cssVar: '--kln-feedback-success-border', resolvedValue: '#259591', primitiveRef: 'var(--kln-color-teal-100)',    usage: 'Borda de sucesso' },
        { name: 'feedback-warning-fg',     cssVar: '--kln-feedback-warning-fg',     resolvedValue: '#A8631E', primitiveRef: 'var(--kln-color-orange-700)',  usage: 'Texto de aviso' },
        { name: 'feedback-warning-bg',     cssVar: '--kln-feedback-warning-bg',     resolvedValue: '#F5E4D3', primitiveRef: 'var(--kln-color-orange-wash)', usage: 'Fundo de aviso' },
        { name: 'feedback-warning-border', cssVar: '--kln-feedback-warning-border', resolvedValue: '#CD7925', primitiveRef: 'var(--kln-color-orange-100)', usage: 'Borda de aviso' },
        { name: 'feedback-danger-fg',      cssVar: '--kln-feedback-danger-fg',      resolvedValue: '#A33638', primitiveRef: 'var(--kln-color-coral-700)',   usage: 'Texto de erro' },
        { name: 'feedback-danger-bg',      cssVar: '--kln-feedback-danger-bg',      resolvedValue: '#F9DDDE', primitiveRef: 'var(--kln-color-coral-wash)',  usage: 'Fundo de erro' },
        { name: 'feedback-danger-border',  cssVar: '--kln-feedback-danger-border',  resolvedValue: '#E05759', primitiveRef: 'var(--kln-color-coral-100)',   usage: 'Borda de erro' },
        { name: 'feedback-info-fg',        cssVar: '--kln-feedback-info-fg',        resolvedValue: '#406E74', primitiveRef: 'var(--kln-color-sea-700)',     usage: 'Texto informativo' },
        { name: 'feedback-info-bg',        cssVar: '--kln-feedback-info-bg',        resolvedValue: '#E1EDEF', primitiveRef: 'var(--kln-color-sea-wash)',    usage: 'Fundo informativo' },
        { name: 'feedback-info-border',    cssVar: '--kln-feedback-info-border',    resolvedValue: '#6AA7AE', primitiveRef: 'var(--kln-color-sea-100)',     usage: 'Borda informativa' },
      ],
    },
    {
      group: 'Field — Inputs e formulários',
      tokens: [
        { name: 'field-bg',              cssVar: '--kln-field-bg',              resolvedValue: '#FFFFFF', primitiveRef: 'var(--kln-color-white)',   usage: 'Fundo padrão de input' },
        { name: 'field-bg-disabled',     cssVar: '--kln-field-bg-disabled',     resolvedValue: '#F7F8F8', primitiveRef: 'var(--kln-color-ink-50)',  usage: 'Fundo de input desabilitado' },
        { name: 'field-bg-filled',       cssVar: '--kln-field-bg-filled',       resolvedValue: '#F7F8F8', primitiveRef: 'var(--kln-color-ink-50)',  usage: 'Fundo de input preenchido' },
        { name: 'field-border',          cssVar: '--kln-field-border',          resolvedValue: '#E2E4E4', primitiveRef: 'var(--kln-color-ink-200)', usage: 'Borda padrão de input' },
        { name: 'field-border-hover',    cssVar: '--kln-field-border-hover',    resolvedValue: '#C4C8C7', primitiveRef: 'var(--kln-color-ink-300)', usage: 'Borda de input no hover' },
        { name: 'field-border-focus',    cssVar: '--kln-field-border-focus',    resolvedValue: '#259591', primitiveRef: 'var(--kln-color-teal-100)', usage: 'Borda de input em foco' },
        { name: 'field-border-error',    cssVar: '--kln-field-border-error',    resolvedValue: '#E05759', primitiveRef: 'var(--kln-color-coral-100)', usage: 'Borda de input com erro' },
        { name: 'field-border-disabled', cssVar: '--kln-field-border-disabled', resolvedValue: '#E2E4E4', primitiveRef: 'var(--kln-color-ink-200)', usage: 'Borda de input desabilitado' },
        { name: 'field-label',           cssVar: '--kln-field-label',           resolvedValue: '#344140', primitiveRef: 'var(--kln-color-ink-700)', usage: 'Cor do label do campo' },
        { name: 'field-placeholder',     cssVar: '--kln-field-placeholder',     resolvedValue: '#9BA3A2', primitiveRef: 'var(--kln-color-ink-400)', usage: 'Placeholder text' },
        { name: 'field-value',           cssVar: '--kln-field-value',           resolvedValue: '#0F1B1A', primitiveRef: 'var(--kln-color-ink-900)', usage: 'Valor digitado no campo' },
      ],
    },
    {
      group: 'Overlay — Modais, popovers, tooltips',
      tokens: [
        { name: 'overlay-modal',   cssVar: '--kln-overlay-modal',   resolvedValue: '#FFFFFF', primitiveRef: 'var(--kln-color-white)',   usage: 'Fundo de modais e dialogs' },
        { name: 'overlay-popover', cssVar: '--kln-overlay-popover', resolvedValue: '#FFFFFF', primitiveRef: 'var(--kln-color-white)',   usage: 'Fundo de popovers' },
        { name: 'overlay-tooltip', cssVar: '--kln-overlay-tooltip', resolvedValue: '#0F1B1A', primitiveRef: 'var(--kln-color-ink-900)', usage: 'Fundo de tooltips (escuro)' },
        { name: 'overlay-scrim',   cssVar: '--kln-overlay-scrim',   resolvedValue: '#0F1B1A', primitiveRef: 'var(--kln-color-ink-900)', usage: 'Sobreposição de fundo (backdrop)' },
      ],
    },
  ];

  // ── Elevação (Sombras) ───────────────────────────────────────────────────
  // Extraídos de _elevation.scss — 5 níveis + focus rings
  elevationTokens: ElevationToken[] = [
    {
      name: 'xs',
      cssVar: '--kln-elevation-xs',
      value: '0 1px 2px rgba(15, 27, 26, 0.06)',
      usage: 'Tooltips, dropdown menus, popovers pequenos',
    },
    {
      name: 'sm',
      cssVar: '--kln-elevation-sm',
      value: '0 2px 4px rgba(15, 27, 26, 0.08)',
      usage: 'Cards, inputs com focus, raised states',
    },
    {
      name: 'md',
      cssVar: '--kln-elevation-md',
      value: '0 4px 8px rgba(15, 27, 26, 0.10)',
      usage: 'Dropdowns abertos, selects, popovers',
    },
    {
      name: 'lg',
      cssVar: '--kln-elevation-lg',
      value: '0 8px 16px rgba(15, 27, 26, 0.12)',
      usage: 'Menus principais, drawers, sidebars flutuantes',
    },
    {
      name: 'xl',
      cssVar: '--kln-elevation-xl',
      value: '0 16px 32px rgba(15, 27, 26, 0.16)',
      usage: 'Modais, dialogs, overlays bloqueantes',
    },
  ];

  focusRingTokens = [
    {
      cssVar: '--kln-focus-default',
      value: '0 0 0 3px rgba(37, 149, 145, 0.25)',
      usage: 'Teal · todos os elementos interativos (WCAG 2.4.7 AA)',
    },
    {
      cssVar: '--kln-focus-error',
      value: '0 0 0 3px rgba(224, 87, 89, 0.25)',
      usage: 'Coral · campos com erro de validação',
    },
  ];

  // ── Escala ───────────────────────────────────────────────────────────────
  // Extraídos de _scale.scss — componentes, z-index, opacidade, grid
  componentSizeTokens: ScaleToken[] = [
    { name: 'input-sm',     cssVar: '--kln-size-input-sm',     value: '32px' },
    { name: 'input-md',     cssVar: '--kln-size-input-md',     value: '40px' },
    { name: 'input-lg',     cssVar: '--kln-size-input-lg',     value: '48px' },
    { name: 'button-sm',    cssVar: '--kln-size-button-sm',    value: '32px' },
    { name: 'button-md',    cssVar: '--kln-size-button-md',    value: '40px' },
    { name: 'button-lg',    cssVar: '--kln-size-button-lg',    value: '48px' },
    { name: 'avatar-xs',    cssVar: '--kln-size-avatar-xs',    value: '24px' },
    { name: 'avatar-sm',    cssVar: '--kln-size-avatar-sm',    value: '32px' },
    { name: 'avatar-md',    cssVar: '--kln-size-avatar-md',    value: '40px' },
    { name: 'avatar-lg',    cssVar: '--kln-size-avatar-lg',    value: '56px' },
    { name: 'avatar-xl',    cssVar: '--kln-size-avatar-xl',    value: '80px' },
    { name: 'icon-xs',      cssVar: '--kln-size-icon-xs',      value: '12px' },
    { name: 'icon-sm',      cssVar: '--kln-size-icon-sm',      value: '16px' },
    { name: 'icon-md',      cssVar: '--kln-size-icon-md',      value: '24px' },
    { name: 'icon-lg',      cssVar: '--kln-size-icon-lg',      value: '32px' },
    { name: 'icon-xl',      cssVar: '--kln-size-icon-xl',      value: '48px' },
    { name: 'touch-target', cssVar: '--kln-size-touch-target', value: '44px' },
  ];

  zIndexTokens: ScaleToken[] = [
    { name: 'base',     cssVar: '--kln-z-base',     value: '0' },
    { name: 'raised',   cssVar: '--kln-z-raised',   value: '10' },
    { name: 'dropdown', cssVar: '--kln-z-dropdown', value: '100' },
    { name: 'sticky',   cssVar: '--kln-z-sticky',   value: '200' },
    { name: 'overlay',  cssVar: '--kln-z-overlay',  value: '300' },
    { name: 'modal',    cssVar: '--kln-z-modal',    value: '400' },
    { name: 'toast',    cssVar: '--kln-z-toast',    value: '500' },
    { name: 'tooltip',  cssVar: '--kln-z-tooltip',  value: '600' },
  ];

  breakpointTokens = [
    { cssVar: '--kln-screen-xs',  value: '375px',  percent: '24%' },
    { cssVar: '--kln-screen-sm',  value: '640px',  percent: '41%' },
    { cssVar: '--kln-screen-md',  value: '768px',  percent: '50%' },
    { cssVar: '--kln-screen-lg',  value: '1024px', percent: '66%' },
    { cssVar: '--kln-screen-xl',  value: '1280px', percent: '83%' },
    { cssVar: '--kln-screen-2xl', value: '1536px', percent: '100%' },
  ];

  opacityTokens: ScaleToken[] = [
    { name: '0',   cssVar: '--kln-opacity-0',   value: '0'   },
    { name: '5',   cssVar: '--kln-opacity-5',   value: '0.05' },
    { name: '10',  cssVar: '--kln-opacity-10',  value: '0.1' },
    { name: '20',  cssVar: '--kln-opacity-20',  value: '0.2' },
    { name: '40',  cssVar: '--kln-opacity-40',  value: '0.4' },
    { name: '60',  cssVar: '--kln-opacity-60',  value: '0.6' },
    { name: '80',  cssVar: '--kln-opacity-80',  value: '0.8' },
    { name: '100', cssVar: '--kln-opacity-100', value: '1'   },
  ];

  borderWidthTokens: ScaleToken[] = [
    { name: 'hairline', cssVar: '--kln-border-width-hairline', value: '0.5px' },
    { name: 'thin',     cssVar: '--kln-border-width-thin',     value: '1px'   },
    { name: 'default',  cssVar: '--kln-border-width-default',  value: '1.5px' },
    { name: 'thick',    cssVar: '--kln-border-width-thick',    value: '2px'   },
    { name: 'bold',     cssVar: '--kln-border-width-bold',     value: '3px'   },
  ];

  gridTokens: ScaleToken[] = [
    { name: 'columns-mobile',  cssVar: '--kln-grid-columns-mobile',  value: '4' },
    { name: 'columns-tablet',  cssVar: '--kln-grid-columns-tablet',  value: '8' },
    { name: 'columns-desktop', cssVar: '--kln-grid-columns-desktop', value: '12' },
    { name: 'gutter-mobile',   cssVar: '--kln-grid-gutter-mobile',   value: '16px' },
    { name: 'gutter-desktop',  cssVar: '--kln-grid-gutter-desktop',  value: '24px' },
    { name: 'margin-mobile',   cssVar: '--kln-grid-margin-mobile',   value: '16px' },
    { name: 'margin-desktop',  cssVar: '--kln-grid-margin-desktop',  value: '64px' },
    { name: 'max-width',       cssVar: '--kln-grid-max-width',       value: '1440px' },
  ];
}
