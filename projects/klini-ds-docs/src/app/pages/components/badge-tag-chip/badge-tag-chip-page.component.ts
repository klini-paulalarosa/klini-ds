import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BadgeComponent, TagComponent, ChipComponent } from '@klini-saude/ds';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';

@Component({
  selector: 'app-badge-tag-chip-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [BadgeComponent, TagComponent, ChipComponent, ComponentPreviewComponent, PropsTableComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">Badge · Tag · Chip</h1>
        <span class="badge badge--version">kln-badge · kln-tag · kln-chip</span>
      </div>
      <p class="docs-page-description">
        Três componentes de marcação complementares: <strong>Badge</strong> para contadores e indicadores numéricos,
        <strong>Tag</strong> para rótulos de status e categorias, e <strong>Chip</strong> para itens selecionáveis e removíveis.
      </p>

      <!-- ===== BADGE ===== -->
      <div class="docs-section">
        <h2>Badge</h2>
        <p>Contador ou indicador numérico pequeno. Use para notificações e pendências.</p>

        <h3 style="font-size:1rem;margin:16px 0 8px">Severidades</h3>
        <app-component-preview [code]="badgeSeveritiesCode">
          <div preview style="display:flex;gap:12px;align-items:center;flex-wrap:wrap">
            <kln-badge value="1" severity="primary" />
            <kln-badge value="2" severity="secondary" />
            <kln-badge value="3" severity="success" />
            <kln-badge value="4" severity="info" />
            <kln-badge value="5" severity="warn" />
            <kln-badge value="6" severity="danger" />
            <kln-badge value="7" severity="contrast" />
          </div>
        </app-component-preview>

        <h3 style="font-size:1rem;margin:16px 0 8px">Tamanhos</h3>
        <app-component-preview [code]="badgeSizesCode">
          <div preview style="display:flex;gap:16px;align-items:center;flex-wrap:wrap">
            <div style="text-align:center">
              <kln-badge value="5" size="small" />
              <p style="margin:4px 0 0;font-size:0.75rem;color:#666">small</p>
            </div>
            <div style="text-align:center">
              <kln-badge value="5" size="large" />
              <p style="margin:4px 0 0;font-size:0.75rem;color:#666">large</p>
            </div>
            <div style="text-align:center">
              <kln-badge value="5" size="xlarge" />
              <p style="margin:4px 0 0;font-size:0.75rem;color:#666">xlarge</p>
            </div>
          </div>
        </app-component-preview>

        <h3 style="font-size:1rem;margin:16px 0 8px">Uso em saúde</h3>
        <app-component-preview [code]="badgeHealthCode">
          <div preview style="display:flex;gap:16px;align-items:center;flex-wrap:wrap">
            <div style="display:flex;align-items:center;gap:8px">
              <span style="font-size:0.9rem">Pendências</span>
              <kln-badge value="3" severity="warn" />
            </div>
            <div style="display:flex;align-items:center;gap:8px">
              <span style="font-size:0.9rem">Atendimentos</span>
              <kln-badge value="12" severity="primary" />
            </div>
            <div style="display:flex;align-items:center;gap:8px">
              <span style="font-size:0.9rem">Alertas</span>
              <kln-badge value="!" severity="danger" />
            </div>
          </div>
        </app-component-preview>
      </div>

      <!-- Props Badge -->
      <div class="docs-section">
        <h2>Props — kln-badge</h2>
        <app-props-table [props]="badgeProps" />
      </div>

      <!-- ===== TAG ===== -->
      <div class="docs-section">
        <h2>Tag</h2>
        <p>Rótulo de status ou categoria. Ideal para marcar tipo de consulta, especialidade ou situação do beneficiário.</p>

        <h3 style="font-size:1rem;margin:16px 0 8px">Severidades</h3>
        <app-component-preview [code]="tagSeveritiesCode">
          <div preview style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">
            <kln-tag value="Primário" severity="primary" />
            <kln-tag value="Secundário" severity="secondary" />
            <kln-tag value="Ativo" severity="success" />
            <kln-tag value="Informação" severity="info" />
            <kln-tag value="Atenção" severity="warn" />
            <kln-tag value="Negado" severity="danger" />
            <kln-tag value="Contraste" severity="contrast" />
          </div>
        </app-component-preview>

        <h3 style="font-size:1rem;margin:16px 0 8px">Com ícone</h3>
        <app-component-preview [code]="tagIconCode">
          <div preview style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">
            <kln-tag value="Autorizado" severity="success" icon="pi pi-check" />
            <kln-tag value="Pendente" severity="warn" icon="pi pi-clock" />
            <kln-tag value="Negado" severity="danger" icon="pi pi-times" />
          </div>
        </app-component-preview>

        <h3 style="font-size:1rem;margin:16px 0 8px">Arredondado</h3>
        <app-component-preview [code]="tagRoundedCode">
          <div preview style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">
            <kln-tag value="Cardiologia" severity="primary" [rounded]="true" />
            <kln-tag value="Pediatria" severity="info" [rounded]="true" />
            <kln-tag value="Ortopedia" severity="secondary" [rounded]="true" />
          </div>
        </app-component-preview>
      </div>

      <!-- Props Tag -->
      <div class="docs-section">
        <h2>Props — kln-tag</h2>
        <app-props-table [props]="tagProps" />
      </div>

      <!-- ===== CHIP ===== -->
      <div class="docs-section">
        <h2>Chip</h2>
        <p>Item compacto interativo. Use para filtros ativos, especialidades selecionadas ou beneficiários em seleção múltipla.</p>

        <h3 style="font-size:1rem;margin:16px 0 8px">Básico</h3>
        <app-component-preview [code]="chipBasicCode">
          <div preview style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">
            <kln-chip label="Cardiologia" />
            <kln-chip label="Pediatria" />
            <kln-chip label="Ortopedia" />
          </div>
        </app-component-preview>

        <h3 style="font-size:1rem;margin:16px 0 8px">Com ícone</h3>
        <app-component-preview [code]="chipIconCode">
          <div preview style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">
            <kln-chip label="Dr. Marcos Oliveira" icon="pi pi-user" />
            <kln-chip label="Hospital São Lucas" icon="pi pi-building" />
          </div>
        </app-component-preview>

        <h3 style="font-size:1rem;margin:16px 0 8px">Removível</h3>
        <app-component-preview [code]="chipRemovableCode">
          <div preview style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">
            @for (chip of chips; track chip) {
              <kln-chip [label]="chip" [removable]="true" (removed)="removeChip(chip)" />
            }
            @if (chips.length === 0) {
              <span style="color:#666;font-size:0.9rem">Nenhum filtro ativo</span>
            }
          </div>
        </app-component-preview>
      </div>

      <!-- Props Chip -->
      <div class="docs-section">
        <h2>Props — kln-chip</h2>
        <app-props-table [props]="chipProps" />
      </div>
    </div>
  `,
})
export class BadgeTagChipPageComponent {
  chips = ['Cardiologia', 'SP - Capital', 'Convênio Klini'];

  removeChip(chip: string): void {
    this.chips = this.chips.filter(c => c !== chip);
  }

  badgeSeveritiesCode = `<kln-badge value="1" severity="primary" />
<kln-badge value="2" severity="secondary" />
<kln-badge value="3" severity="success" />
<kln-badge value="4" severity="info" />
<kln-badge value="5" severity="warn" />
<kln-badge value="6" severity="danger" />
<kln-badge value="7" severity="contrast" />`;

  badgeSizesCode = `<kln-badge value="5" size="small" />
<kln-badge value="5" size="large" />
<kln-badge value="5" size="xlarge" />`;

  badgeHealthCode = `<kln-badge value="3" severity="warn" />   <!-- Pendências -->
<kln-badge value="12" severity="primary" />  <!-- Atendimentos -->
<kln-badge value="!" severity="danger" />    <!-- Alertas -->`;

  tagSeveritiesCode = `<kln-tag value="Primário"   severity="primary" />
<kln-tag value="Secundário" severity="secondary" />
<kln-tag value="Ativo"      severity="success" />
<kln-tag value="Informação" severity="info" />
<kln-tag value="Atenção"    severity="warn" />
<kln-tag value="Negado"     severity="danger" />
<kln-tag value="Contraste"  severity="contrast" />`;

  tagIconCode = `<kln-tag value="Autorizado" severity="success" icon="pi pi-check" />
<kln-tag value="Pendente"   severity="warn"    icon="pi pi-clock" />
<kln-tag value="Negado"     severity="danger"  icon="pi pi-times" />`;

  tagRoundedCode = `<kln-tag value="Cardiologia" severity="primary"   [rounded]="true" />
<kln-tag value="Pediatria"   severity="info"      [rounded]="true" />
<kln-tag value="Ortopedia"   severity="secondary" [rounded]="true" />`;

  chipBasicCode = `<kln-chip label="Cardiologia" />
<kln-chip label="Pediatria" />
<kln-chip label="Ortopedia" />`;

  chipIconCode = `<kln-chip label="Dr. Marcos Oliveira" icon="pi pi-user" />
<kln-chip label="Hospital São Lucas"  icon="pi pi-building" />`;

  chipRemovableCode = `@for (chip of chips; track chip) {
  <kln-chip [label]="chip" [removable]="true" (removed)="removeChip(chip)" />
}

// Classe
chips = ['Cardiologia', 'SP - Capital', 'Convênio Klini'];

removeChip(chip: string): void {
  this.chips = this.chips.filter(c => c !== chip);
}`;

  badgeProps: PropDef[] = [
    { name: 'value', type: 'string | number', default: '—', description: 'OBRIGATÓRIO. Valor exibido no badge (número ou texto curto).' },
    { name: 'severity', type: "'primary' | 'secondary' | 'success' | 'info' | 'warn' | 'danger' | 'contrast'", default: "'primary'", description: 'Cor do badge.' },
    { name: 'size', type: "'small' | 'large' | 'xlarge'", default: "'large'", description: 'Tamanho do badge.' },
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais.' },
  ];

  tagProps: PropDef[] = [
    { name: 'value', type: 'string', default: '—', description: 'OBRIGATÓRIO. Texto exibido na tag.' },
    { name: 'severity', type: "'primary' | 'secondary' | 'success' | 'info' | 'warn' | 'danger' | 'contrast'", default: "'primary'", description: 'Cor da tag.' },
    { name: 'icon', type: 'string', default: "''", description: 'Classe de ícone PrimeIcons (ex: pi pi-check).' },
    { name: 'rounded', type: 'boolean', default: 'false', description: 'Bordas completamente arredondadas (pill style).' },
    { name: 'styleClass', type: 'string', default: "''", description: 'Classes CSS adicionais.' },
  ];

  chipProps: PropDef[] = [
    { name: 'label', type: 'string', default: '—', description: 'OBRIGATÓRIO. Texto exibido no chip.' },
    { name: 'icon', type: 'string', default: "''", description: 'Classe de ícone PrimeIcons.' },
    { name: 'image', type: 'string', default: "''", description: 'URL de imagem exibida no chip.' },
    { name: 'removable', type: 'boolean', default: 'false', description: 'Exibe ícone de remoção (×) no chip.' },
    { name: '(removed)', type: 'EventEmitter<void>', default: '—', description: 'Emite quando o usuário clica no botão de remoção.' },
  ];
}
