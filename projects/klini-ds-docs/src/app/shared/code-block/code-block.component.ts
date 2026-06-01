import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  input,
} from '@angular/core';

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
      <pre><code>{{ code() }}</code></pre>
    </div>
  `,
})
export class CodeBlockComponent {
  code = input.required<string>();
  language = input<string>('typescript');

  copied = false;
  private readonly cdr = inject(ChangeDetectorRef);

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
