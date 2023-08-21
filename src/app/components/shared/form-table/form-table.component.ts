import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-table',
  templateUrl: './form-table.component.html',
})
export class FormTableComponent {
  @Input() id!: string;
}
