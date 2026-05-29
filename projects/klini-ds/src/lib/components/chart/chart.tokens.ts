/**
 * KlnChartTokens
 *
 * Resolve os CSS custom properties do DS em runtime para uso com Chart.js.
 * Chart.js renderiza em <canvas> — CSS variables não funcionam diretamente
 * no canvas, portanto precisam ser lidas via getComputedStyle antes de serem
 * passadas como strings para os datasets e options.
 *
 * Uso em componentes consumidores:
 *   import { KlnChartTokens } from '@klini-saude/ds';
 *   backgroundColor: KlnChartTokens.categorical   // string[]
 *   borderColor: KlnChartTokens.status.success    // string
 */
export class KlnChartTokens {

  /** Lê um CSS custom property do :root. Retorna fallback se não encontrar. */
  static resolve(token: string, fallback = ''): string {
    if (typeof document === 'undefined') return fallback;
    return (
      getComputedStyle(document.documentElement).getPropertyValue(token).trim()
      || fallback
    );
  }

  // ─── Categorical (4 séries da marca) ─────────────────────────────────────

  static get categorical(): string[] {
    return [
      this.resolve('--kln-chart-cat-teal',   '#259591'),
      this.resolve('--kln-chart-cat-sea',    '#6aa7ae'),
      this.resolve('--kln-chart-cat-orange', '#cd7925'),
      this.resolve('--kln-chart-cat-coral',  '#e05759'),
    ];
  }

  // ─── Sequential (Teal Scale — 5 stops nomeados) ───────────────────────────

  static get sequential(): string[] {
    return [
      this.resolve('--kln-chart-seq-wash', '#e0f2f1'),
      this.resolve('--kln-chart-seq-33',   '#80cbc4'),
      this.resolve('--kln-chart-seq-100',  '#259591'),
      this.resolve('--kln-chart-seq-deep', '#00796b'),
      this.resolve('--kln-chart-seq-ink',  '#004d40'),
    ];
  }

  // ─── Diverging ────────────────────────────────────────────────────────────

  static get diverging(): { warm: string; neutral: string; cool: string } {
    return {
      warm:    this.resolve('--kln-chart-div-warm',    '#e05759'),
      neutral: this.resolve('--kln-chart-div-neutral', '#eeeff0'),
      cool:    this.resolve('--kln-chart-div-cool',    '#6aa7ae'),
    };
  }

  // ─── Status semânticos ────────────────────────────────────────────────────

  static get status(): Record<'success' | 'info' | 'warn' | 'danger' | 'secondary', string> {
    return {
      success:   this.resolve('--kln-chart-status-success',   '#259591'),
      info:      this.resolve('--kln-chart-status-info',      '#6aa7ae'),
      warn:      this.resolve('--kln-chart-status-warn',      '#cd7925'),
      danger:    this.resolve('--kln-chart-status-danger',    '#e05759'),
      secondary: this.resolve('--kln-chart-status-secondary', '#90a4ae'),
    };
  }

  // ─── Texto e superfície (para eixos e grid do chart) ─────────────────────

  static get textPrimary(): string {
    return this.resolve('--kln-text-primary', '#111827');
  }

  static get textSecondary(): string {
    return this.resolve('--kln-text-secondary', '#6b7280');
  }

  static get surfaceBorder(): string {
    return this.resolve('--kln-color-gray-200', '#e5e7eb');
  }

  static get surfacePage(): string {
    return this.resolve('--kln-surface-page', '#ffffff');
  }
}
