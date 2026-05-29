import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

// =============================================================================
// Klini Prime — PrimeNG theme preset
// Mapeia os tokens do Klini DS para o sistema de tokens do PrimeNG
// Uso: providePrimeNG({ theme: { preset: KlnPrime } })
// =============================================================================
export const KlnPrime = definePreset(Aura, {
  semantic: {
    primary: {
      50:  '{teal.50}',
      100: '{teal.100}',
      200: '{teal.200}',
      300: '{teal.300}',
      400: '{teal.400}',
      500: '{teal.500}',
      600: '{teal.600}',
      700: '{teal.700}',
      800: '{teal.800}',
      900: '{teal.900}',
      950: '{teal.950}',
    },
    colorScheme: {
      light: {
        primary: {
          color:          'var(--kln-action-primary)',
          inverseColor:   'var(--kln-color-white)',
          hoverColor:     'var(--kln-action-primary-hover)',
          activeColor:    'var(--kln-action-primary-active)',
        },
        surface: {
          0:   'var(--kln-color-white)',
          50:  'var(--kln-surface-page)',
          100: 'var(--kln-surface-sunken)',
          900: 'var(--kln-surface-inverse)',
          950: 'var(--kln-color-ink-900)',
        },
      },
    },
  },
  components: {
    button: {
      borderRadius:       'var(--kln-radius-lg)',
      sm: { fontSize:     'var(--kln-font-size-body-sm)', padding: '0 var(--kln-space-3)', height: 'var(--kln-size-button-sm)' },
      md: { fontSize:     'var(--kln-font-size-body)',    padding: '0 var(--kln-space-4)', height: 'var(--kln-size-button-md)' },
      lg: { fontSize:     'var(--kln-font-size-body-lg)', padding: '0 var(--kln-space-5)', height: 'var(--kln-size-button-lg)' },
    },
    inputtext: {
      borderRadius:  'var(--kln-radius-lg)',
      sm: { fontSize: 'var(--kln-font-size-body-sm)', height: 'var(--kln-size-input-sm)' },
      md: { fontSize: 'var(--kln-font-size-body)',    height: 'var(--kln-size-input-md)' },
      lg: { fontSize: 'var(--kln-font-size-body-lg)', height: 'var(--kln-size-input-lg)' },
      background:    'var(--kln-field-bg)',
      borderColor:   'var(--kln-field-border)',
      hoverBorderColor: 'var(--kln-field-border-hover)',
      focusBorderColor: 'var(--kln-field-border-focus)',
      color:         'var(--kln-field-value)',
      placeholderColor: 'var(--kln-field-placeholder)',
    },
    select: {
      borderRadius:  'var(--kln-radius-lg)',
      background:    'var(--kln-field-bg)',
      borderColor:   'var(--kln-field-border)',
      hoverBorderColor: 'var(--kln-field-border-hover)',
      focusBorderColor: 'var(--kln-field-border-focus)',
      color:         'var(--kln-field-value)',
    },
    card: {
      borderRadius:  'var(--kln-radius-xl)',
      background:    'var(--kln-surface-raised)',
      shadow:        '0 1px 3px 0 rgb(0 0 0 / 0.08), 0 1px 2px -1px rgb(0 0 0 / 0.06)',
    },
    dialog: {
      borderRadius:  'var(--kln-radius-2xl)',
      background:    'var(--kln-overlay-modal)',
    },
    tooltip: {
      background:    'var(--kln-overlay-tooltip)',
      color:         'var(--kln-color-white)',
      borderRadius:  'var(--kln-radius-md)',
    },
    badge: {
      borderRadius:  'var(--kln-radius-pill)',
    },
    tag: {
      borderRadius:  'var(--kln-radius-sm)',
    },
    tabs: {
      tabBorderColor: 'var(--kln-border-default)',
      activeTabBorderColor: 'var(--kln-action-primary)',
      activeTabColor: 'var(--kln-action-primary)',
    },
    accordion: {
      borderColor:   'var(--kln-border-default)',
      borderRadius:  'var(--kln-radius-lg)',
    },
    message: {
      borderRadius:  'var(--kln-radius-lg)',
    },
    skeleton: {
      background:    'var(--kln-color-ink-100)',
      animationBackground: 'var(--kln-color-ink-200)',
    },
  },
});
