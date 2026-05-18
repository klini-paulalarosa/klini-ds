import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

// =============================================================================
// Klini Prime — PrimeNG theme preset
// Mapeia os tokens do Klini DS para o sistema de tokens do PrimeNG
// Uso: providePrimeNG({ theme: { preset: KliniPrime } })
// =============================================================================
export const KliniPrime = definePreset(Aura, {
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
          color:          'var(--klini-action-primary)',
          inverseColor:   'var(--klini-color-white)',
          hoverColor:     'var(--klini-action-primary-hover)',
          activeColor:    'var(--klini-action-primary-active)',
        },
        surface: {
          0:   'var(--klini-color-white)',
          50:  'var(--klini-surface-page)',
          100: 'var(--klini-surface-sunken)',
          900: 'var(--klini-surface-inverse)',
          950: 'var(--klini-color-ink-900)',
        },
      },
    },
  },
  components: {
    button: {
      borderRadius:       'var(--klini-radius-lg)',
      sm: { fontSize:     'var(--klini-font-size-body-sm)', padding: '0 var(--klini-space-3)', height: 'var(--klini-size-button-sm)' },
      md: { fontSize:     'var(--klini-font-size-body)',    padding: '0 var(--klini-space-4)', height: 'var(--klini-size-button-md)' },
      lg: { fontSize:     'var(--klini-font-size-body-lg)', padding: '0 var(--klini-space-5)', height: 'var(--klini-size-button-lg)' },
    },
    inputtext: {
      borderRadius:  'var(--klini-radius-lg)',
      sm: { fontSize: 'var(--klini-font-size-body-sm)', height: 'var(--klini-size-input-sm)' },
      md: { fontSize: 'var(--klini-font-size-body)',    height: 'var(--klini-size-input-md)' },
      lg: { fontSize: 'var(--klini-font-size-body-lg)', height: 'var(--klini-size-input-lg)' },
      background:    'var(--klini-field-bg)',
      borderColor:   'var(--klini-field-border)',
      hoverBorderColor: 'var(--klini-field-border-hover)',
      focusBorderColor: 'var(--klini-field-border-focus)',
      color:         'var(--klini-field-value)',
      placeholderColor: 'var(--klini-field-placeholder)',
    },
    select: {
      borderRadius:  'var(--klini-radius-lg)',
      background:    'var(--klini-field-bg)',
      borderColor:   'var(--klini-field-border)',
      hoverBorderColor: 'var(--klini-field-border-hover)',
      focusBorderColor: 'var(--klini-field-border-focus)',
      color:         'var(--klini-field-value)',
    },
    card: {
      borderRadius:  'var(--klini-radius-xl)',
      background:    'var(--klini-surface-raised)',
      shadow:        '0 1px 3px 0 rgb(0 0 0 / 0.08), 0 1px 2px -1px rgb(0 0 0 / 0.06)',
    },
    dialog: {
      borderRadius:  'var(--klini-radius-2xl)',
      background:    'var(--klini-overlay-modal)',
    },
    tooltip: {
      background:    'var(--klini-overlay-tooltip)',
      color:         'var(--klini-color-white)',
      borderRadius:  'var(--klini-radius-md)',
    },
    badge: {
      borderRadius:  'var(--klini-radius-pill)',
    },
    tag: {
      borderRadius:  'var(--klini-radius-sm)',
    },
    tabs: {
      tabBorderColor: 'var(--klini-border-default)',
      activeTabBorderColor: 'var(--klini-action-primary)',
      activeTabColor: 'var(--klini-action-primary)',
    },
    accordion: {
      borderColor:   'var(--klini-border-default)',
      borderRadius:  'var(--klini-radius-lg)',
    },
    message: {
      borderRadius:  'var(--klini-radius-lg)',
    },
    skeleton: {
      background:    'var(--klini-color-ink-100)',
      animationBackground: 'var(--klini-color-ink-200)',
    },
  },
});
