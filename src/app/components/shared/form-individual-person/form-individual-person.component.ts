import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormInputTextComponent } from '../form-input-text/form-input-text.component';
import { FormInputDateComponent } from '../form-input-date/form-input-date.component';

@Component({
  selector: 'app-form-individual-person',
  templateUrl: './form-individual-person.component.html',
  styleUrls: ['./form-individual-person.component.css']
})
export class FormIndividualPersonComponent {
  @ViewChild('nameRef') name!: FormInputTextComponent;
  @ViewChild('cpfRef') cpf!: FormInputTextComponent;
  @ViewChild('birthRef') birth!: FormInputDateComponent;

  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.compose([
        Validators.minLength(6),
        Validators.required,
      ])],
      cpf: ['', Validators.compose([
        Validators.minLength(14),
        Validators.maxLength(14),
        Validators.required,
      ])],
      birth: ['', Validators.compose([
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.required,
      ])],
    });
  }

  validate() {
    this.name.validate('name');
    this.cpf.validate('cpf');
    this.birth.validate('birth');
  }
}
