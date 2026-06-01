import {
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
} from '@angular/core';
import { NgClass } from '@angular/common';
import { CodeBlockComponent } from '../code-block/code-block.component';

type PreviewTab = 'preview' | 'code';

@Component({
  selector: 'app-component-preview',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass, CodeBlockComponent],
  template: `
    <div class="component-preview">
      <div class="component-preview__tabs">
        <button
          [class.active]="activeTab() === 'preview'"
          (click)="setTab('preview')"
        >Preview</button>
        <button
          [class.active]="activeTab() === 'code'"
          (click)="setTab('code')"
        >Code</button>
      </div>

      @if (activeTab() === 'preview') {
        <div class="component-preview__content">
          <ng-content select="[preview]" />
        </div>
      }

      @if (activeTab() === 'code') {
        <div class="component-preview__code">
          <app-code-block [code]="code()" [language]="language()" />
        </div>
      }
    </div>
  `,
})
export class ComponentPreviewComponent {
  code = input.required<string>();
  language = input<string>('html');

  activeTab = signal<PreviewTab>('preview');

  setTab(tab: PreviewTab): void {
    this.activeTab.set(tab);
  }
}
