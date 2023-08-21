import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fieldset-card',
  templateUrl: './fieldset-card.component.html'
})
export class FieldsetCardComponent {
  @Input()
  legend!: string;
  @Input()
  obrigatory!: boolean;
}
