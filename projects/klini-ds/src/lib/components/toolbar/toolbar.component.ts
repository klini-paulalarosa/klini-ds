import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'kln-toolbar',
  standalone: true,
  imports: [ToolbarModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-toolbar [styleClass]="'kln-toolbar ' + styleClass">
      <ng-template pTemplate="start"><ng-content select="[klnStart]" /></ng-template>
      <ng-template pTemplate="center"><ng-content select="[klnCenter]" /></ng-template>
      <ng-template pTemplate="end"><ng-content select="[klnEnd]" /></ng-template>
    </p-toolbar>
  `,
  styles: [`:host { display: block; }`],
})
export class KlnToolbarComponent {
  @Input() styleClass = '';
}
