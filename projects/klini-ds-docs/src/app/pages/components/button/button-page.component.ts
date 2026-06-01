import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '@klini-saude/ds';
import { ComponentPreviewComponent } from '../../../shared/component-preview/component-preview.component';
import { PropsTableComponent, PropDef } from '../../../shared/props-table/props-table.component';
import { CodeBlockComponent } from '../../../shared/code-block/code-block.component';

@Component({
  selector: 'app-button-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonComponent, ComponentPreviewComponent, PropsTableComponent, CodeBlockComponent],
  template: `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <h1 class="docs-page-title" style="margin-bottom:0">Button</h1>
        <span class="badge badge--version">kln-button</span>
      </div>
      <p class="docs-page-description">
        Botão de ação principal do Klini DS. Wrapper sobre o <code class="font-mono">p-button</code>
        do PrimeNG com as severidades, variantes e tamanhos do tema KlnPrime pré-configurados.
        Emite <code class="font-mono">(clicked)</code> em vez de <code class="font-mono">(onClick)</code>
        para evitar conflito com o evento nativo do DOM.
      </p>

      <!-- Uso básico -->
      <div class="docs-section">
        <h2>Uso básico</h2>
        <app-component-preview [code]="basicCode">
          <div preview style="display:flex;gap:12px;flex-wrap:wrap">
            <kln-button label="Agendar consulta" />
            <kln-button label="Cancelar" severity="secondary" />
            <kln-button label="Salvar" icon="pi pi-check" />
          </div>
        </app-component-preview>
      </div>

      <!-- Severities -->
      <div class="docs-section">
        <h2>Severidades</h2>
        <p>Todas as 8 severidades disponíveis para comunicar diferentes níveis de importância.</p>
        <app-component-preview [code]="severitiesCode">
          <div preview style="display:flex;gap:10px;flex-wrap:wrap">
            <kln-button label="Primary" severity="primary" />
            <kln-button label="Secondary" severity="secondary" />
            <kln-button label="Success" severity="success" />
            <kln-button label="Info" severity="info" />
            <kln-button label="Warn" severity="warn" />
            <kln-button label="Danger" severity="danger" />
            <kln-button label="Contrast" severity="contrast" />
            <kln-button label="Secondary" severity="secondary" />
          </div>
        </app-component-preview>
      </div>

      <!-- Sizes -->
      <div class="docs-section">
        <h2>Tamanhos</h2>
        <app-component-preview [code]="sizesCode">
          <div preview style="display:flex;align-items:center;gap:12px;flex-wrap:wrap">
            <kln-button label="Small" size="small" />
            <kln-button label="Medium (padrão)" />
            <kln-button label="Large" size="large" />
          </div>
        </app-component-preview>
      </div>

      <!-- Variants -->
      <div class="docs-section">
        <h2>Variantes</h2>
        <p>Variantes visuais para hierarquia de ações: filled (padrão), outlined e text.</p>
        <app-component-preview [code]="variantsCode">
          <div preview style="display:flex;gap:12px;flex-wrap:wrap;align-items:center">
            <kln-button label="Filled (padrão)" />
            <kln-button label="Outlined" variant="outlined" />
            <kln-button label="Text" variant="text" />
          </div>
        </app-component-preview>
      </div>

      <!-- Loading -->
      <div class="docs-section">
        <h2>Estado de carregamento</h2>
        <p>Use <code class="font-mono">[loading]="true"</code> para indicar operação em andamento. O botão fica desabilitado automaticamente.</p>
        <app-component-preview [code]="loadingCode">
          <div preview style="display:flex;gap:12px">
            <kln-button label="Salvando..." [loading]="true" />
            <kln-button label="Aguarde" [loading]="true" severity="secondary" />
          </div>
        </app-component-preview>
      </div>

      <!-- Icon only -->
      <div class="docs-section">
        <h2>Botão só ícone</h2>
        <p>Omita o <code class="font-mono">label</code> e passe apenas <code class="font-mono">icon</code> para botões ícone compactos.</p>
        <app-component-preview [code]="iconCode">
          <div preview style="display:flex;gap:10px;align-items:center">
            <kln-button icon="pi pi-plus" />
            <kln-button icon="pi pi-pencil" severity="secondary" />
            <kln-button icon="pi pi-trash" severity="danger" />
            <kln-button icon="pi pi-share-alt" variant="outlined" />
            <kln-button icon="pi pi-heart" variant="text" />
          </div>
        </app-component-preview>
      </div>

      <!-- Disabled -->
      <div class="docs-section">
        <h2>Desabilitado</h2>
        <app-component-preview [code]="disabledCode">
          <div preview style="display:flex;gap:12px">
            <kln-button label="Disabled" [disabled]="true" />
            <kln-button label="Disabled outlined" variant="outlined" [disabled]="true" />
          </div>
        </app-component-preview>
      </div>

      <!-- Props table -->
      <div class="docs-section">
        <h2>Props</h2>
        <app-props-table [props]="props" />
      </div>

      <!-- Events -->
      <div class="docs-section">
        <h2>Eventos</h2>
        <app-code-block language="typescript" [code]="eventsCode" />
      </div>
    </div>
  `,
})
export class ButtonPageComponent {
  basicCode = `<kln-button label="Agendar consulta" />
<kln-button label="Cancelar" severity="secondary" />
<kln-button label="Salvar" icon="pi pi-check" (clicked)="onSave()" />`;

  severitiesCode = `<kln-button label="Primary"   severity="primary" />
<kln-button label="Secondary" severity="secondary" />
<kln-button label="Success"   severity="success" />
<kln-button label="Info"      severity="info" />
<kln-button label="Warn"      severity="warn" />
<kln-button label="Danger"    severity="danger" />
<kln-button label="Contrast"  severity="contrast" />
<kln-button label="Help"      severity="help" />`;

  sizesCode = `<kln-button label="Small"           size="small" />
<kln-button label="Medium (padrão)"  />
<kln-button label="Large"            size="large" />`;

  variantsCode = `<kln-button label="Filled (padrão)" />
<kln-button label="Outlined"  variant="outlined" />
<kln-button label="Text"      variant="text" />`;

  loadingCode = `<kln-button label="Salvando..." [loading]="isSaving" />

// No componente:
isSaving = false;

async save() {
  this.isSaving = true;
  await this.service.save(this.form.value);
  this.isSaving = false;
}`;

  iconCode = `<kln-button icon="pi pi-plus" />
<kln-button icon="pi pi-pencil" severity="secondary" />
<kln-button icon="pi pi-trash"  severity="danger" />
<kln-button icon="pi pi-share-alt" variant="outlined" />`;

  disabledCode = `<kln-button label="Disabled" [disabled]="true" />
<kln-button label="Disabled outlined" variant="outlined" [disabled]="true" />`;

  eventsCode = `// O evento é (clicked), não (onClick), para evitar conflito com evento nativo.
@Component({
  template: \`<kln-button label="Salvar" (clicked)="onSave($event)" />\`,
})
export class MyComponent {
  onSave(event: MouseEvent): void {
    console.log('clicou', event);
  }
}`;

  props: PropDef[] = [
    { name: 'label', type: 'string', default: "''", description: 'Texto exibido no botão.' },
    { name: 'icon', type: 'string', default: "''", description: 'Classe do ícone PrimeIcons (ex: pi pi-plus).' },
    { name: 'iconPos', type: "'left' | 'right' | 'top' | 'bottom'", default: "'left'", description: 'Posição do ícone relativa ao label.' },
    { name: 'severity', type: 'KlnButtonSeverity', default: "'primary'", description: "Cor do botão: 'primary' | 'secondary' | 'success' | 'info' | 'warn' | 'danger' | 'contrast' | 'help'." },
    { name: 'size', type: 'KlnButtonSize', default: 'undefined (medium)', description: "Tamanho: 'small' | 'large' | undefined (medium)." },
    { name: 'variant', type: 'KlnButtonVariant', default: 'undefined (filled)', description: "Estilo visual: 'outlined' | 'text' | undefined (filled)." },
    { name: 'loading', type: 'boolean', default: 'false', description: 'Exibe spinner e desabilita o botão durante operação assíncrona.' },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Desabilita o botão completamente.' },
    { name: 'badge', type: 'string', default: "''", description: 'Texto do badge sobreposto ao botão (ex: contador de notificações).' },
    { name: 'badgeSeverity', type: 'string', default: "'danger'", description: 'Severidade do badge.' },
    { name: 'raised', type: 'boolean', default: 'false', description: 'Adiciona elevação (box-shadow) ao botão.' },
    { name: 'rounded', type: 'boolean', default: 'false', description: 'Borda completamente arredondada (pill style).' },
  ];
}
