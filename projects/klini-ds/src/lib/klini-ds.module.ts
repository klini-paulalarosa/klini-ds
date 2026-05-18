import { NgModule } from '@angular/core';
import { MessageService } from 'primeng/api';

import { ButtonComponent }     from './components/button/button.component';
import { StatusPillComponent } from './components/status-pill/status-pill.component';
import { TagComponent }        from './components/tag/tag.component';
import { BadgeComponent }      from './components/badge/badge.component';
import { ChipComponent }       from './components/chip/chip.component';
import { KpiCardComponent }    from './components/kpi-card/kpi-card.component';
import { ToastComponent }      from './components/toast/toast.component';
import { StepperComponent }    from './components/stepper/stepper.component';
import { DrawerComponent }     from './components/drawer/drawer.component';
import { InputTextComponent }  from './components/input-text/input-text.component';
import { CalendarComponent }   from './components/calendar/calendar.component';

const COMPONENTS = [
  ButtonComponent,
  StatusPillComponent,
  TagComponent,
  BadgeComponent,
  ChipComponent,
  KpiCardComponent,
  ToastComponent,
  StepperComponent,
  DrawerComponent,
  InputTextComponent,
  CalendarComponent,
];

/**
 * Módulo de conveniência — importa e re-exporta todos os componentes do @klini/ds.
 * Para projetos que ainda usam NgModule em vez de standalone.
 * Também provê MessageService necessário para p-toast.
 */
@NgModule({
  imports:   COMPONENTS,
  exports:   COMPONENTS,
  providers: [MessageService],
})
export class KliniDsModule {}
