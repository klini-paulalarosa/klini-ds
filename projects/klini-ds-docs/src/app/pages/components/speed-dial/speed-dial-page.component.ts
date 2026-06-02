import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnSpeedDialComponent } from '@klini-saude/ds';
import { MenuItem } from 'primeng/api';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-speed-dial-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnSpeedDialComponent, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">SpeedDial</h1>
        <span class="badge badge--version">kln-speed-dial</span>
      </div>
      <p class="docs-page-description">
        Botão de ação flutuante com menu de ações rápidas. Wrapper sobre <code class="font-mono">p-speeddial</code> do PrimeNG.
        Usado para acesso rápido a ações frequentes no portal.
      </p>

      <div class="docs-section">
        <h2>Ações rápidas do portal</h2>
        <p>Nova consulta, upload de documento, suporte.</p>
        <app-component-preview [code]="codeLinear">
          <div preview style="position:relative;height:180px;display:flex;align-items:flex-end;justify-content:flex-end;padding:16px">
            <kln-speed-dial [items]="acoesRapidas" direction="up" />
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Direção para cima — semi-círculo</h2>
        <app-component-preview [code]="codeSemi">
          <div preview style="position:relative;height:160px;display:flex;align-items:flex-end;justify-content:center;padding:16px">
            <kln-speed-dial [items]="acoesRapidas" direction="up" type="semi-circle" [radius]="80" />
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Props</h2>
        <app-props-table [props]="props" />
      </div>
    </div>
  `,
})
export class SpeedDialPageComponent {
  acoesRapidas: MenuItem[] = [
    { label: 'Nova consulta', icon: 'pi pi-calendar-plus', command: () => console.log('Nova consulta') },
    { label: 'Upload laudo', icon: 'pi pi-upload', command: () => console.log('Upload') },
    { label: 'Suporte', icon: 'pi pi-headphones', command: () => console.log('Suporte') },
    { label: 'Carteirinha', icon: 'pi pi-credit-card', command: () => console.log('Carteirinha') },
  ];

  codeLinear = `<kln-speed-dial [items]="acoesRapidas" direction="up" />

// No componente:
acoesRapidas: MenuItem[] = [
  { label: 'Nova consulta', icon: 'pi pi-calendar-plus' },
  { label: 'Upload laudo', icon: 'pi pi-upload' },
  { label: 'Suporte', icon: 'pi pi-headphones' },
];`;

  codeSemi = `<kln-speed-dial
  [items]="acoesRapidas"
  direction="up"
  type="semi-circle"
  [radius]="80"
/>`;

  props: PropDef[] = [
    { name: 'items', type: 'MenuItem[]', default: '[]', description: 'Array de ações do speed dial.', required: true },
    { name: 'direction', type: "'up' | 'down' | 'left' | 'right'", default: "'up'", description: 'Direção de abertura.' },
    { name: 'type', type: "'linear' | 'circle' | 'semi-circle' | 'quarter-circle'", default: "'linear'", description: 'Forma de disposição dos itens.' },
    { name: 'radius', type: 'number', default: '0', description: 'Raio em pixels para tipo circular.' },
    { name: 'visible', type: 'boolean', default: 'true', description: 'Controla visibilidade.' },
    { name: 'hideOnClickOutside', type: 'boolean', default: 'true', description: 'Fecha ao clicar fora.' },
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais.' },
  ];
}
