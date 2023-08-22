import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IError } from 'src/app/pages/configuration/parameterization/parameterization.component';

@Component({
  selector: 'app-form-input-group-text',
  templateUrl: './form-input-group-text.component.html',
  styleUrls: ['./form-input-group-text.component.css']
})
export class FormInputGroupTextComponent {
  @Input() colSm!: string;
  @Input() id!: string;
  @Input() label!: string;
  @Input() icon!: string;
  @Input() placeholder: string = '';
  @Input() obrigatory: boolean = false;
  @Input() readonly: boolean = false;
  @Input() mask: string = '';
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
