import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-input-select',
  templateUrl: './form-input-select.component.html'
})
export class FormInputSelectComponent {
  @Input() colSm!: string;
  @Input() id!: string;
  @Input() label!: string;
  @Input() obrigatory: boolean = false;
  @Input() message: {error: boolean, description: string} = { error: false, description: '' };
  @Input() handle?: any;
  @Input() controlName!: string;
  @Input() form!: FormGroup;

  onChange() {
    if (this.handle != undefined) this.handle();
  }
}
