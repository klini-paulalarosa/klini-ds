// =============================================================================
// @klini/ds — Public API
// =============================================================================

// Theme
export { KliniPrime } from './lib/theme/klini-prime';

// Module (convenience re-export de todos os componentes)
export { KliniDsModule } from './lib/klini-ds.module';

// ── Componentes ──────────────────────────────────────────────────────────────
export { ButtonComponent }     from './lib/components/button/button.component';
export type { ButtonSeverity, ButtonSize, ButtonVariant } from './lib/components/button/button.component';

export { StatusPillComponent } from './lib/components/status-pill/status-pill.component';
export type { StatusPillValue } from './lib/components/status-pill/status-pill.component';

export { TagComponent }        from './lib/components/tag/tag.component';
export type { TagSeverity }    from './lib/components/tag/tag.component';

export { BadgeComponent }      from './lib/components/badge/badge.component';
export type { BadgeSeverity }  from './lib/components/badge/badge.component';

export { ChipComponent }       from './lib/components/chip/chip.component';

export { KpiCardComponent }    from './lib/components/kpi-card/kpi-card.component';
export type { KpiTrend }       from './lib/components/kpi-card/kpi-card.component';

export { ToastComponent }      from './lib/components/toast/toast.component';
export type { ToastSeverity }  from './lib/components/toast/toast.component';

export { StepperComponent }    from './lib/components/stepper/stepper.component';
export type { StepperStep, StepperOrientation } from './lib/components/stepper/stepper.component';

export { DrawerComponent }     from './lib/components/drawer/drawer.component';
export type { DrawerPosition } from './lib/components/drawer/drawer.component';

export { InputTextComponent }  from './lib/components/input-text/input-text.component';
export type { InputSize }      from './lib/components/input-text/input-text.component';

export { CalendarComponent }   from './lib/components/calendar/calendar.component';
