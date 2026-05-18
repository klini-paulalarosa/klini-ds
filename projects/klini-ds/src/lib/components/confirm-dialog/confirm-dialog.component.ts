import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { Injectable } from '@angular/core';

@Injectable()
export class KliniConfirmService {
  private cs = inject(ConfirmationService);

  confirm(options: {
    message: string;
    header?: string;
    icon?: string;
    key?: string;
    accept?: () => void;
    reject?: () => void;
    [key: string]: any;
  }): void {
    this.cs.confirm(options);
  }

  delete(options: {
    message?: string;
    header?: string;
    key?: string;
    accept?: () => void;
    reject?: () => void;
    [key: string]: any;
  }): void {
    this.cs.confirm({
      message: options.message ?? 'Tem certeza que deseja excluir este item?',
      header: options.header ?? 'Confirmar exclusão',
      icon: 'pi pi-exclamation-triangle',
      acceptButtonStyleClass: 'p-button-danger',
      rejectButtonStyleClass: 'p-button-text',
      ...options,
    });
  }
}

@Component({
  selector: 'klini-confirm-dialog',
  standalone: true,
  imports: [ConfirmDialogModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ConfirmationService, KliniConfirmService],
  template: `
    <p-confirmdialog
      [key]="key || undefined"
      [styleClass]="'klini-confirm-dialog ' + styleClass"
    />
  `,
  styles: [
    `
      :host ::ng-deep .klini-confirm-dialog {
        border-radius: var(--klini-radius-xl);
        box-shadow: var(--klini-elevation-xl);
      }
    `,
  ],
})
export class KliniConfirmDialogComponent {
  @Input() key = '';
  @Input() styleClass = '';
}
