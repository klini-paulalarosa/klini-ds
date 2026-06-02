import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KlnCarouselComponent } from '@klini-saude/ds';
import { CarouselModule } from 'primeng/carousel';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-carousel-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [KlnCarouselComponent, CarouselModule, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">Carousel</h1>
        <span class="badge badge--version">kln-carousel</span>
      </div>
      <p class="docs-page-description">
        Carrossel de itens com navegação. Wrapper sobre <code class="font-mono">p-carousel</code> do PrimeNG.
        Usado para apresentar planos disponíveis e benefícios em destaque.
      </p>

      <div class="docs-section">
        <h2>Planos disponíveis</h2>
        <app-component-preview [code]="codePlanos">
          <div preview>
            <kln-carousel [value]="planos" [numVisible]="2" [numScroll]="1" [circular]="true">
              <ng-template pTemplate="item" let-plano>
                <div style="margin:8px;padding:20px;background:var(--docs-sidebar-bg);border:1px solid var(--docs-border);border-radius:8px;text-align:center">
                  <div style="font-size:16px;font-weight:700;color:var(--docs-text);margin-bottom:8px">{{ plano.nome }}</div>
                  <div style="font-size:24px;font-weight:800;color:var(--docs-accent);margin-bottom:4px">R$ {{ plano.valor }}</div>
                  <div style="font-size:12px;color:var(--docs-text-muted);margin-bottom:12px">por beneficiário/mês</div>
                  <div style="font-size:13px;color:var(--docs-text-muted)">{{ plano.beneficios }}</div>
                </div>
              </ng-template>
            </kln-carousel>
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
export class CarouselPageComponent {
  planos = [
    { nome: 'Klini Start PJ', valor: '289,90', beneficios: 'Consultas, exames básicos, urgência' },
    { nome: 'Klini Plus PJ', valor: '389,90', beneficios: '+ Internações, especialidades' },
    { nome: 'Klini Premium PJ', valor: '489,90', beneficios: '+ Cobertura total, sem coparticipação' },
    { nome: 'Klini Start PF', valor: '319,90', beneficios: 'Consultas, exames básicos, urgência' },
  ];

  codePlanos = `<kln-carousel [value]="planos" [numVisible]="2" [numScroll]="1" [circular]="true">
  <ng-template pTemplate="item" let-plano>
    <div>
      <div>{{ plano.nome }}</div>
      <div>R$ {{ plano.valor }}/mês</div>
    </div>
  </ng-template>
</kln-carousel>`;

  props: PropDef[] = [
    { name: 'value', type: 'unknown[]', default: '[]', description: 'Array de itens do carrossel.', required: true },
    { name: 'numVisible', type: 'number', default: '3', description: 'Número de itens visíveis ao mesmo tempo.' },
    { name: 'numScroll', type: 'number', default: '1', description: 'Número de itens por scroll.' },
    { name: 'circular', type: 'boolean', default: 'false', description: 'Loop infinito de itens.' },
    { name: 'autoplayInterval', type: 'number', default: '0', description: 'Intervalo em ms para autoplay (0 = desativado).' },
    { name: 'orientation', type: "'horizontal' | 'vertical'", default: "'horizontal'", description: 'Orientação do carrossel.' },
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais.' },
  ];
}
