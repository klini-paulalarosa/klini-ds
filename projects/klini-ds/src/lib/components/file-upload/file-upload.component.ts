import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FileUploadModule, FileUploadHandlerEvent, FileSelectEvent, FileUploadErrorEvent } from 'primeng/fileupload';

@Component({
  selector: 'klini-file-upload',
  standalone: true,
  imports: [FileUploadModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-fileupload
      [url]="url"
      [multiple]="multiple"
      [accept]="accept"
      [maxFileSize]="maxFileSize"
      [auto]="auto"
      [chooseLabel]="chooseLabel"
      [uploadLabel]="uploadLabel"
      [cancelLabel]="cancelLabel"
      [styleClass]="styleClass"
      (onUpload)="uploaded.emit($event)"
      (onSelect)="selected.emit($event)"
      (onError)="uploadError.emit($event)"
    />
  `,
})
export class KliniFileUploadComponent {
  @Input() url = '';
  @Input() multiple = false;
  @Input() accept = '';
  @Input() maxFileSize: number | undefined = undefined;
  @Input() auto = false;
  @Input() chooseLabel = 'Selecionar';
  @Input() uploadLabel = 'Enviar';
  @Input() cancelLabel = 'Cancelar';
  @Input() styleClass = '';

  @Output() uploaded = new EventEmitter<FileUploadHandlerEvent>();
  @Output() selected = new EventEmitter<FileSelectEvent>();
  @Output() uploadError = new EventEmitter<FileUploadErrorEvent>();
}
