import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { CommonModule } from '@angular/common';

export interface KlnTimelineEvent {
  status?: string;
  date?: string;
  icon?: string;
  color?: string;
  content?: string;
  [key: string]: unknown;
}

@Component({
  selector: 'kln-timeline',
  standalone: true,
  imports: [CommonModule, TimelineModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-timeline
      [value]="events"
      [align]="align"
      [layout]="layout"
      [styleClass]="'kln-timeline ' + styleClass"
    >
      <ng-template pTemplate="marker" let-event>
        <span class="kln-timeline__marker" [style.background]="event.color || 'var(--kln-action-primary)'">
          @if (event.icon) { <i [class]="event.icon"></i> }
        </span>
      </ng-template>
      <ng-template pTemplate="content" let-event>
        <div class="kln-timeline__content">
          @if (event.status) { <p class="kln-timeline__status">{{ event.status }}</p> }
          @if (event.date) { <small class="kln-timeline__date">{{ event.date }}</small> }
          @if (event.content) { <p class="kln-timeline__text">{{ event.content }}</p> }
        </div>
      </ng-template>
    </p-timeline>
  `,
  styles: [`
    .kln-timeline__marker { display:flex; align-items:center; justify-content:center; width:2rem; height:2rem; border-radius:50%; color:#fff; font-size:.875rem; }
    .kln-timeline__status { font-weight:600; color:var(--kln-text-primary); font-family:'Objective', system-ui, -apple-system, sans-serif; margin:0; }
    .kln-timeline__date { color:var(--kln-text-muted); font-size:var(--kln-font-size-caption); }
    .kln-timeline__text { color:var(--kln-text-secondary); font-size:var(--kln-font-size-body-sm); margin:var(--kln-space-1) 0 0; }
  `],
})
export class KlnTimelineComponent {
  @Input({ required: true }) events: KlnTimelineEvent[] = [];
  @Input() align: 'left' | 'right' | 'alternate' = 'left';
  @Input() layout: 'vertical' | 'horizontal' = 'vertical';
  @Input() styleClass = '';
}
