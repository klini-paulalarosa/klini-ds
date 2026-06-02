/**
 * nav-data.ts — Fonte unica de verdade para todas as paginas da documentacao.
 * Importado por: SidebarComponent, PrevNextNavComponent.
 * Ordem = sequencia da sidebar = sequencia de navegacao anterior/proximo.
 */

export interface NavEntry {
  label: string;
  route: string;
}

export const ALL_PAGES: NavEntry[] = [
  // Getting Started
  { label: 'Visao Geral',      route: '/' },
  { label: 'Instalacao',       route: '/getting-started' },
  { label: 'Design Tokens',    route: '/tokens' },
  { label: 'PrimeIcons',       route: '/icons' },
  // Charts
  { label: '21 Chart Presets', route: '/charts' },
  { label: 'kln-chart API',    route: '/components/chart' },
  // Buttons
  { label: 'Button',           route: '/components/button' },
  { label: 'Split Button',     route: '/components/split-button' },
  { label: 'Button Group',     route: '/components/button-group' },
  { label: 'Speed Dial',       route: '/components/speed-dial' },
  // Forms
  { label: 'Input Text',       route: '/components/input-text' },
  { label: 'Input Number',     route: '/components/input-number' },
  { label: 'Input Mask',       route: '/components/input-mask' },
  { label: 'Input OTP',        route: '/components/input-otp' },
  { label: 'Textarea',         route: '/components/textarea' },
  { label: 'Password',         route: '/components/password' },
  { label: 'Select',           route: '/components/select' },
  { label: 'MultiSelect',      route: '/components/multiselect' },
  { label: 'AutoComplete',     route: '/components/autocomplete' },
  { label: 'Cascade Select',   route: '/components/cascade-select' },
  { label: 'Listbox',          route: '/components/listbox' },
  { label: 'Select Button',    route: '/components/select-button' },
  { label: 'Toggle Button',    route: '/components/toggle-button' },
  { label: 'Radio Group',      route: '/components/radio-group' },
  { label: 'Checkbox',         route: '/components/checkbox' },
  { label: 'Toggle',           route: '/components/toggle' },
  { label: 'Rating',           route: '/components/rating' },
  { label: 'Slider',           route: '/components/slider' },
  { label: 'Calendar',         route: '/components/calendar' },
  { label: 'Tree Select',      route: '/components/tree-select' },
  { label: 'Color Picker',     route: '/components/color-picker' },
  { label: 'Icon Field',       route: '/components/icon-field' },
  { label: 'Ifta Label',       route: '/components/ifta-label' },
  { label: 'Float Label',      route: '/components/float-label' },
  { label: 'File Upload',      route: '/components/file-upload' },
  { label: 'Editor',           route: '/components/editor' },
  // Data Display
  { label: 'Table',            route: '/components/table' },
  { label: 'Tree Table',       route: '/components/tree-table' },
  { label: 'DataView',         route: '/components/dataview' },
  { label: 'Carousel',         route: '/components/carousel' },
  { label: 'Tree',             route: '/components/tree' },
  { label: 'Order List',       route: '/components/order-list' },
  { label: 'Pick List',        route: '/components/pick-list' },
  { label: 'Virtual Scroller', route: '/components/virtual-scroller' },
  { label: 'Timeline',         route: '/components/timeline' },
  { label: 'Galleria',         route: '/components/galleria' },
  { label: 'Image Compare',    route: '/components/image-compare' },
  // Charts & Analytics
  { label: 'Knob',             route: '/components/knob' },
  { label: 'Meter Group',      route: '/components/meter-group' },
  { label: 'Progress Bar',     route: '/components/progress-bar' },
  { label: 'Progress Spinner', route: '/components/progress-spinner' },
  // Feedback
  { label: 'Toast',            route: '/components/toast' },
  { label: 'Message',          route: '/components/message' },
  { label: 'Messages',         route: '/components/messages' },
  { label: 'Confirm Dialog',   route: '/components/confirm-dialog' },
  { label: 'Confirm Popup',    route: '/components/confirm-popup' },
  { label: 'Block UI',         route: '/components/block-ui' },
  // Overlay
  { label: 'Dialog',           route: '/components/dialog' },
  { label: 'Drawer',           route: '/components/drawer' },
  { label: 'Popover',          route: '/components/popover' },
  { label: 'Context Menu',     route: '/components/context-menu' },
  { label: 'Overlay Badge',    route: '/components/overlay-badge' },
  { label: 'Tooltip',          route: '/components/tooltip' },
  // Navigation
  { label: 'Tabs',             route: '/components/tabs' },
  { label: 'Tab Menu',         route: '/components/tab-menu' },
  { label: 'Stepper',          route: '/components/stepper' },
  { label: 'Steps',            route: '/components/steps' },
  { label: 'Breadcrumb',       route: '/components/breadcrumb' },
  { label: 'Menu',             route: '/components/menu' },
  { label: 'Menubar',          route: '/components/menubar' },
  { label: 'Mega Menu',        route: '/components/mega-menu' },
  { label: 'Tiered Menu',      route: '/components/tiered-menu' },
  { label: 'Panel Menu',       route: '/components/panel-menu' },
  { label: 'Accordion',        route: '/components/accordion' },
  // Layout
  { label: 'Card',             route: '/components/card' },
  { label: 'KPI Card',         route: '/components/kpi-card' },
  { label: 'Avatar',           route: '/components/avatar' },
  { label: 'Avatar Group',     route: '/components/avatar-group' },
  { label: 'Badge',            route: '/components/badge' },
  { label: 'Tag',              route: '/components/tag' },
  { label: 'Chip',             route: '/components/chip' },
  { label: 'Skeleton',         route: '/components/skeleton' },
  { label: 'Divider',         route: '/components/divider' },
  { label: 'Status Pill',      route: '/components/status-pill' },
  { label: 'Image',            route: '/components/image' },
  { label: 'Toolbar',          route: '/components/toolbar' },
  { label: 'Splitter',         route: '/components/splitter' },
  { label: 'Panel',            route: '/components/panel' },
  { label: 'Fieldset',         route: '/components/fieldset' },
  { label: 'Scroll Panel',     route: '/components/scroll-panel' },
  // Misc
  { label: 'Inplace',          route: '/components/inplace' },
  { label: 'Scroll Top',       route: '/components/scroll-top' },
  // Portal
  { label: 'Portal Templates', route: '/components/portal-templates' },
];
