import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormInputGroupTextComponent } from 'src/app/components/shared/form-input-group-text/form-input-group-text.component';
import { FormInputSelectComponent } from 'src/app/components/shared/form-input-select/form-input-select.component';
import { FormInputTextComponent } from 'src/app/components/shared/form-input-text/form-input-text.component';

export interface IError { valid: boolean; message: string; }

@Component({
  selector: 'app-parameterization',
  templateUrl: './parameterization.component.html',
  styleUrls: ['./parameterization.component.css']
})
export class ParameterizationComponent implements OnInit {
  @ViewChild('corporateNameRef') corporateName!: FormInputTextComponent;
  @ViewChild('fantasyNameRef') fantasyName!: FormInputTextComponent;
  @ViewChild('cnpjRef') cnpj!: FormInputTextComponent;
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

  ngOnInit(): void { }

  handleSaveClick() {
    this.corporateName.validate('corporateName');
    this.fantasyName.validate('fantasyName');
    this.cnpj.validate('cnpj');

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
}
