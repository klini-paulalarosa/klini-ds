import { NgModule } from '@angular/core';

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

// Módulo de conveniência para projetos que ainda não usam standalone
@NgModule({
  imports:  COMPONENTS,
  exports:  COMPONENTS,
})
export class KliniDsModule {}
