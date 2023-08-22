import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IError } from 'src/app/pages/configuration/parameterization/parameterization.component';

@Component({
  selector: 'app-form-input-date',
  templateUrl: './form-input-date.component.html',
})
export class FormInputDateComponent {
  @Input() colSm!: string;
  @Input() id!: string;
  @Input() label!: string;
  @Input() obrigatory: boolean = false;
  @Input() readonly: boolean = false;
  @Input() message: {error: boolean, description: string} = { error: false, description: '' };
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
      this.form.controls[control].invalid
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
