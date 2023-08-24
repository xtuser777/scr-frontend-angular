import { Component, ViewChild } from '@angular/core';
import { FormInputTextComponent } from '../form-input-text/form-input-text.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-enterprise-person',
  templateUrl: './form-enterprise-person.component.html',
  styleUrls: ['./form-enterprise-person.component.css']
})
export class FormEnterprisePersonComponent {
  @ViewChild('corporateNameRef') corporateName!: FormInputTextComponent;
  @ViewChild('fantasyNameRef') fantasyName!: FormInputTextComponent;
  @ViewChild('cnpjRef') cnpj!: FormInputTextComponent;

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
    });
  }

  validate() {
    this.corporateName.validate('corporateName');
    this.fantasyName.validate('fantasyName');
    this.cnpj.validate('cnpj');
  }

  clear() {
    this.form.controls['corporateName'].setValue('');
    this.form.controls['fantasyName'].setValue('');
    this.form.controls['cnpj'].setValue('');
  }
}
