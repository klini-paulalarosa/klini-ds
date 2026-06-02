import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnRatingComponent } from '@klini-saude/ds';
import { FormsModule } from '@angular/forms';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-rating-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnRatingComponent, FormsModule, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">Rating</h1>
        <span class="badge badge--version">kln-rating</span>
      </div>
      <p class="docs-page-description">
        Avaliação por estrelas. Wrapper sobre <code class="font-mono">p-rating</code> do PrimeNG.
        Usado para avaliação de consultas, atendimentos e prestadores.
      </p>

      <div class="docs-section">
        <h2>Avaliação de consulta</h2>
        <p>O beneficiário avalia a consulta de cardiologia com 1 a 5 estrelas.</p>
        <app-component-preview [code]="codeBasic">
          <div preview style="display:flex;flex-direction:column;gap:12px">
            <p style="font-size:14px;margin:0;color:var(--docs-text)">Como foi sua consulta de Cardiologia?</p>
            <kln-rating [(ngModel)]="notaConsulta" [stars]="5" />
            <span style="font-size:13px;color:var(--docs-text-muted)">Nota: {{ notaConsulta || 'Não avaliado' }} estrela(s)</span>
          </div>
        </app-component-preview>
      </div>

      <div class="docs-section">
        <h2>Avaliação somente leitura</h2>
        <p>Exibição de nota média do prestador, sem possibilidade de interação.</p>
        <app-component-preview [code]="codeReadonly">
          <div preview style="display:flex;flex-direction:column;gap:8px">
            <p style="font-size:14px;margin:0;color:var(--docs-text)">Clínica Klini Sul — Média de atendimento:</p>
            <kln-rating [ngModel]="4" [readonly]="true" [stars]="5" />
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
export class RatingPageComponent {
  notaConsulta: number | null = null;

  codeBasic = `<kln-rating [(ngModel)]="notaConsulta" [stars]="5" />`;

  codeReadonly = `<kln-rating [ngModel]="4" [readonly]="true" [stars]="5" />`;

  props: PropDef[] = [
    { name: 'stars', type: 'number', default: '5', description: 'Número de estrelas.' },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Desabilita a interação.' },
    { name: 'readonly', type: 'boolean', default: 'false', description: 'Modo somente leitura.' },
  ];
}
