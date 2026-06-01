import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export interface PropDef {
  name: string;
  type: string;
  default: string;
  description: string;
  required?: boolean;
}

@Component({
  selector: 'app-props-table',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div style="overflow-x:auto">
      <table class="props-table">
        <thead>
          <tr>
            <th>Prop</th>
            <th>Tipo</th>
            <th>Padrão</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          @for (prop of props(); track prop.name) {
            <tr>
              <td>
                <code style="font-family:'Fira Code',monospace;font-size:12px">{{ prop.name }}</code>
                @if (prop.required) {
                  <span style="color:#e05759;margin-left:4px;font-size:11px">*</span>
                }
              </td>
              <td>{{ prop.type }}</td>
              <td>{{ prop.default || '—' }}</td>
              <td>{{ prop.description }}</td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  `,
})
export class PropsTableComponent {
  props = input.required<PropDef[]>();
}
