import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormInputTextComponent } from 'src/app/components/shared/form-input-text/form-input-text.component';

export interface IError { valid: boolean; message: string; }

@Component({
  selector: 'app-parameterization',
  templateUrl: './parameterization.component.html',
  styleUrls: ['./parameterization.component.css']
})
export class ParameterizationComponent implements OnInit {
  @ViewChild('corporateNameRef') corporateName!: FormInputTextComponent
  @ViewChild('fantasyNameRef') fantasyName!: FormInputTextComponent
  @ViewChild('cnpjRef') cnpj!: FormInputTextComponent
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
    });
  }

  ngOnInit(): void { }

  handleSaveClick() {
    this.corporateName.validate('corporateName');
    this.fantasyName.validate('fantasyName');
    this.cnpj.validate('cnpj');
  }
}
