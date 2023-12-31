import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IError } from 'src/app/pages/configuration/parameterization/parameterization.component';

@Component({
  selector: 'app-form-input-select',
  templateUrl: './form-input-select.component.html'
})
export class FormInputSelectComponent {
  @Input() colSm!: string;
  @Input() id!: string;
  @Input() label!: string;
  @Input() obrigatory: boolean = false;
  @Input() controlName!: string;
  @Input() form!: FormGroup;

  public error: IError;

  constructor() {
    this.error = { valid: true, message: '' };
  }

  onChange() {
    this.validate(this.controlName);
  }

  validate(control: string) {
    if (
      this.form.controls[control].invalid || this.form.controls[control].value == '0'
    )
      this.error = {
        valid: false,
        message: 'Campo inválido.'
      };
    else
      this.error = {
        valid: true,
        message: ''
      };
  }
}
