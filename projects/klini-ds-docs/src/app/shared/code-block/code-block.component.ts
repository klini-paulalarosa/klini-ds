import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';
import javascript from 'highlight.js/lib/languages/javascript';
import scss from 'highlight.js/lib/languages/scss';
import bash from 'highlight.js/lib/languages/bash';
import xml from 'highlight.js/lib/languages/xml';
import json from 'highlight.js/lib/languages/json';

hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('scss', scss);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('json', json);

function resolveLanguage(lang: string): string {
  switch (lang) {
    case 'ts':
    case 'typescript':
      return 'typescript';
    case 'js':
    case 'javascript':
      return 'javascript';
    case 'html':
      return 'xml';
    case 'css':
    case 'scss':
      return 'scss';
    case 'shell':
    case 'bash':
      return 'bash';
    case 'json':
      return 'json';
    default:
      return 'typescript';
  }
}

@Component({
  selector: 'app-code-block',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="code-block">
      <div class="code-block__header">
        <span class="code-block__lang">{{ language() }}</span>
        <button
          class="code-block__copy"
          [class.code-block__copy--copied]="copied"
          (click)="copy()"
        >
          <i [class]="copied ? 'pi pi-check' : 'pi pi-copy'"></i>
          {{ copied ? 'Copiado!' : 'Copiar' }}
        </button>
      </div>
      <pre><code [innerHTML]="highlightedCode()"></code></pre>
    </div>
  `,
})
export class CodeBlockComponent {
  code = input.required<string>();
  language = input<string>('typescript');

  copied = false;
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly sanitizer = inject(DomSanitizer);

  highlightedCode = computed<SafeHtml>(() => {
    const lang = resolveLanguage(this.language());
    const raw = this.code();
    try {
      const result = hljs.highlight(raw, { language: lang });
      return this.sanitizer.bypassSecurityTrustHtml(result.value);
    } catch {
      // fallback: plain text (escaped)
      const escaped = raw
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
      return this.sanitizer.bypassSecurityTrustHtml(escaped);
    }
  });

  copy(): void {
    navigator.clipboard.writeText(this.code()).then(() => {
      this.copied = true;
      this.cdr.markForCheck();
      setTimeout(() => {
        this.copied = false;
        this.cdr.markForCheck();
      }, 2000);
    });
  }
}
