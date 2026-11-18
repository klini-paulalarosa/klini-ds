export class KlnChartTokens {

  static resolve(token: string, fallback = ''): string {
    if (typeof document === 'undefined') return fallback;
    return (
      getComputedStyle(document.documentElement).getPropertyValue(token).trim()
      || fallback
    );
  }


  static get categorical(): string[] {
    return [
      this.resolve('--kln-chart-cat-teal',   '#259591'),
      this.resolve('--kln-chart-cat-sea',    '#6aa7ae'),
      this.resolve('--kln-chart-cat-orange', '#cd7925'),
      this.resolve('--kln-chart-cat-coral',  '#e05759'),
    ];
  }


  static get sequential(): string[] {
    return [
      this.resolve('--kln-chart-seq-wash', '#e0f2f1'),
      this.resolve('--kln-chart-seq-33',   '#80cbc4'),
      this.resolve('--kln-chart-seq-100',  '#259591'),
      this.resolve('--kln-chart-seq-deep', '#00796b'),
      this.resolve('--kln-chart-seq-ink',  '#004d40'),
    ];
  }


  static get diverging(): { warm: string; neutral: string; cool: string } {
    return {
      warm:    this.resolve('--kln-chart-div-warm',    '#e05759'),
      neutral: this.resolve('--kln-chart-div-neutral', '#eeeff0'),
      cool:    this.resolve('--kln-chart-div-cool',    '#6aa7ae'),
    };
  }


  static get status(): Record<'success' | 'info' | 'warn' | 'danger' | 'secondary', string> {
    return {
      success:   this.resolve('--kln-chart-status-success',   '#259591'),
      info:      this.resolve('--kln-chart-status-info',      '#6aa7ae'),
      warn:      this.resolve('--kln-chart-status-warn',      '#cd7925'),
      danger:    this.resolve('--kln-chart-status-danger',    '#e05759'),
      secondary: this.resolve('--kln-chart-status-secondary', '#90a4ae'),
    };
  }


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
