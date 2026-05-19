/**
 * @klini/ds — Diretivas & Utilitários PrimeNG
 *
 * Diretivas de comportamento: sem visual próprio, modificam componentes existentes.
 * Importe diretamente de '@klini/ds' — sem precisar conhecer os paths do PrimeNG.
 *
 * ─── p-keyfilter ─────────────────────────────────────────────────────────────
 *   Filtra teclas permitidas em inputs. Use em conjunto com kln-input-text.
 *
 *   import { KeyFilter } from '@klini/ds';
 *   <kln-input-text pKeyFilter="num" label="Apenas números" />
 *   <kln-input-text [pKeyFilter]="regexCustom" label="Custom" />
 *
 *   Padrões prontos: 'num', 'int', 'alpha', 'alphanum', 'hex', 'email', 'money'
 *
 * ─── p-autofocus ─────────────────────────────────────────────────────────────
 *   Coloca foco inicial no elemento. Use em campos de formulário.
 *
 *   import { AutoFocus } from '@klini/ds';
 *   <kln-input-text pAutoFocus [autofocus]="true" label="Nome" />
 *
 * ─── p-ripple ────────────────────────────────────────────────────────────────
 *   Efeito ripple em click. Use em kln-button e elementos clicáveis.
 *
 *   import { Ripple } from '@klini/ds';
 *   <kln-button label="Clique" pRipple />
 *
 * ─── p-styleclass ────────────────────────────────────────────────────────────
 *   Adiciona/remove CSS class com animação ao clicar. Útil para show/hide.
 *
 *   import { StyleClass } from '@klini/ds';
 *   <button pStyleClass="@next" enterFromClass="hidden" leaveToClass="hidden">
 *     Toggle
 *   </button>
 *
 * ─── p-animateonscroll ───────────────────────────────────────────────────────
 *   Anima elemento quando entra no viewport. Use em kln-card, seções.
 *
 *   import { AnimateOnScroll } from '@klini/ds';
 *   <kln-card pAnimateOnScroll enterClass="fadein" leaveClass="fadeout" />
 *
 *   Classes PrimeNG disponíveis: fadein | fadeout | fadeinleft | fadeinright |
 *   fadeinup | fadeindown | zoomin | zoomindown | zoominleft | zoominright
 *
 * ─── DynamicDialog (DialogService) ───────────────────────────────────────────
 *   Abre kln-dialog / p-dialog programaticamente via serviço.
 *   Usar quando não é possível usar [visible] declarativo.
 *
 *   import { DialogService, DynamicDialogRef } from '@klini/ds';
 *
 *   constructor(private dialog: DialogService) {}
 *
 *   open() {
 *     const ref: DynamicDialogRef = this.dialog.open(MeuComponent, {
 *       header: 'Título',
 *       width:  '500px',
 *       data:   { id: 123 },
 *     });
 *     ref.onClose.subscribe(result => console.log(result));
 *   }
 *
 *   Providers necessários: adicione DialogService em providers do módulo/componente.
 */

// ─── Re-exports ───────────────────────────────────────────────────────────────

export { KeyFilter, KeyFilterModule }    from 'primeng/keyfilter';
export { AutoFocus, AutoFocusModule }    from 'primeng/autofocus';
export { Ripple, RippleModule }          from 'primeng/ripple';
export { StyleClass, StyleClassModule }  from 'primeng/styleclass';
export { AnimateOnScroll, AnimateOnScrollModule } from 'primeng/animateonscroll';
// PrimeNG 18 — DynamicDialog é standalone, não há DynamicDialogModule
// DialogService: adicione em providers do módulo/componente consumidor
export {
  DialogService,
  DynamicDialogRef,
  DynamicDialogConfig,
} from 'primeng/dynamicdialog';
