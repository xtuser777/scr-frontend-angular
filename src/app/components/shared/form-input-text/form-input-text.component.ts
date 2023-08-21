import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IError } from 'src/app/pages/configuration/parameterization/parameterization.component';

@Component({
  selector: 'app-form-input-text',
  templateUrl: './form-input-text.component.html'
})
export class FormInputTextComponent implements OnInit {
  @Input() colSm!: string;
  @Input() id!: string;
  @Input() label!: string;
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

  ngOnInit(): void {}

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
