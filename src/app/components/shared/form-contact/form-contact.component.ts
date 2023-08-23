import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormInputGroupTextComponent } from '../form-input-group-text/form-input-group-text.component';
import { FormInputSelectComponent } from '../form-input-select/form-input-select.component';
import { FormInputTextComponent } from '../form-input-text/form-input-text.component';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})
export class FormContactComponent {
  @ViewChild('streetRef') street!: FormInputTextComponent;
  @ViewChild('numberRef') number!: FormInputTextComponent;
  @ViewChild('neighborhoodRef') neighborhood!: FormInputTextComponent;
  @ViewChild('complementRef') complement!: FormInputTextComponent;
  @ViewChild('codeRef') code!: FormInputTextComponent;
  @ViewChild('stateRef') state!: FormInputSelectComponent;
  @ViewChild('cityRef') city!: FormInputSelectComponent;
  @ViewChild('phoneRef') phone!: FormInputGroupTextComponent;
  @ViewChild('cellphoneRef') cellphone!: FormInputGroupTextComponent;
  @ViewChild('emailRef') email!: FormInputGroupTextComponent;

  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      corporateName: ['', Validators.compose([
        Validators.minLength(6),
        Validators.required,
      ])],
      fantasyName: ['', Validators.compose([
        Validators.minLength(2),
        Validators.required,
      ])],
      cnpj: ['', Validators.compose([
        Validators.minLength(18),
        Validators.maxLength(18),
        Validators.required,
      ])],
      street: ['', Validators.compose([
        Validators.minLength(1),
        Validators.required,
      ])],
      number: ['', Validators.compose([
        Validators.minLength(1),
        Validators.required,
      ])],
      neighborhood: ['', Validators.compose([
        Validators.minLength(1),
        Validators.required,
      ])],
      complement: [''],
      code: ['', Validators.compose([
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.required,
      ])],
      state: ['0', Validators.compose([
        Validators.required,
      ])],
      city: ['0', Validators.compose([
        Validators.required,
      ])],
      phone: ['', Validators.compose([
        Validators.minLength(12),
        Validators.maxLength(12),
        Validators.required,
      ])],
      cellphone: ['', Validators.compose([
        Validators.minLength(14),
        Validators.maxLength(14),
        Validators.required,
      ])],
      email: ['', Validators.compose([
        Validators.minLength(7),
        Validators.required,
      ])],
    });
  }

  validate() {
    this.street.validate('street');
    this.number.validate('number');
    this.neighborhood.validate('neighborhood');
    this.complement.validate('complement');
    this.code.validate('code');
    this.state.validate('state');
    this.city.validate('city');
    this.phone.validate('phone');
    this.cellphone.validate('cellphone');
    this.email.validate('email');
  }

  clear() {
    this.form.controls['street'].setValue('');
    this.form.controls['number'].setValue('');
    this.form.controls['neighborhood'].setValue('');
    this.form.controls['complement'].setValue('');
    this.form.controls['code'].setValue('');
    this.form.controls['state'].setValue('0');
    this.form.controls['city'].setValue('0');
    this.form.controls['phone'].setValue('');
    this.form.controls['cellphone'].setValue('');
    this.form.controls['email'].setValue('');
  }
}
