import { NgModule } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';

// Existing components
import { ButtonComponent }           from './components/button/button.component';
import { StatusPillComponent }       from './components/status-pill/status-pill.component';
import { TagComponent }              from './components/tag/tag.component';
import { BadgeComponent }            from './components/badge/badge.component';
import { ChipComponent }             from './components/chip/chip.component';
import { KpiCardComponent }          from './components/kpi-card/kpi-card.component';
import { ToastComponent }            from './components/toast/toast.component';
import { StepperComponent }          from './components/stepper/stepper.component';
import { DrawerComponent }           from './components/drawer/drawer.component';
import { InputTextComponent }        from './components/input-text/input-text.component';
import { CalendarComponent }         from './components/calendar/calendar.component';
import { MessageComponent }          from './components/message/message.component';
import { CardComponent }             from './components/card/card.component';
import { DividerComponent }          from './components/divider/divider.component';

// New components
import { KliniRadioGroupComponent }  from './components/radiobutton/radio-group.component';
import { KliniTabsComponent }        from './components/tabs/tabs.component';
import { KliniMenuComponent }        from './components/menu/menu.component';
import { KliniTableComponent }       from './components/table/table.component';
import { KliniDialogComponent }      from './components/dialog/dialog.component';
import { KliniToggleComponent }      from './components/toggle/toggle.component';
import { KliniAccordionComponent }   from './components/accordion/accordion.component';
import { KliniAvatarComponent }      from './components/avatar/avatar.component';
import { KliniSkeletonComponent }    from './components/skeleton/skeleton.component';
import { KliniProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { KliniTextareaComponent }    from './components/textarea/textarea.component';
import { KliniPasswordComponent }    from './components/password/password.component';
import { KliniInputNumberComponent } from './components/input-number/input-number.component';
import { KliniPaginatorComponent }   from './components/paginator/paginator.component';
import { KliniConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { KliniFileUploadComponent }  from './components/file-upload/file-upload.component';
import { KliniBreadcrumbComponent }  from './components/breadcrumb/breadcrumb.component';
import { KliniEmptyStateComponent }  from './components/empty-state/empty-state.component';

const COMPONENTS = [
  // Core (v0.1)
  ButtonComponent, StatusPillComponent, TagComponent, BadgeComponent, ChipComponent,
  KpiCardComponent, ToastComponent, StepperComponent, DrawerComponent,
  InputTextComponent, CalendarComponent, MessageComponent, CardComponent, DividerComponent,
  // New (v0.2)
  KliniRadioGroupComponent, KliniTabsComponent, KliniMenuComponent, KliniTableComponent,
  KliniDialogComponent, KliniToggleComponent, KliniAccordionComponent, KliniAvatarComponent,
  KliniSkeletonComponent, KliniProgressBarComponent, KliniTextareaComponent,
  KliniPasswordComponent, KliniInputNumberComponent, KliniPaginatorComponent,
  KliniConfirmDialogComponent, KliniFileUploadComponent, KliniBreadcrumbComponent,
  KliniEmptyStateComponent,
];

/**
 * Módulo de conveniência — importa e re-exporta todos os componentes do @klini/ds.
 * Para projetos que ainda usam NgModule em vez de standalone.
 */
@NgModule({
  imports:   COMPONENTS,
  exports:   COMPONENTS,
  providers: [MessageService, ConfirmationService],
})
export class KliniDsModule {}
