import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TreeSelectModule } from 'primeng/treeselect';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'kln-tree-select',
  standalone: true,
  imports: [FormsModule, TreeSelectModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => KlnTreeSelectComponent), multi: true }],
  template: `
    <p-treeselect
      [(ngModel)]="value"
      [options]="options"
      [placeholder]="placeholder"
      [selectionMode]="selectionMode"
      [filter]="filter"
      [disabled]="disabled"
      [containerStyleClass]="'kln-tree-select ' + styleClass"
      (ngModelChange)="onValueChange($event)"
      (onBlur)="onTouched()"
    />
  `,
  styles: [`:host { display: block; }`],
})
export class KlnTreeSelectComponent implements ControlValueAccessor {
  @Input() options: TreeNode[] = [];
  @Input() placeholder = 'Selecione...';
  @Input() selectionMode: 'single' | 'multiple' | 'checkbox' = 'single';
  @Input() filter = false;
  @Input() disabled = false;
  @Input() styleClass = '';

  @Output() valueChange = new EventEmitter<unknown>();

  value: unknown = null;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onChange: (v: unknown) => void = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouched: () => void = () => {};

  onValueChange(v: unknown): void { this.value = v; this.onChange(v); this.valueChange.emit(v); }
  writeValue(v: unknown): void { this.value = v; }
  registerOnChange(fn: (v: unknown) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
  setDisabledState(isDisabled: boolean): void { this.disabled = isDisabled; }
}
