import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormInputTextComponent } from '../../shared/form-input-text/form-input-text.component';
import { FormInputSelectComponent } from '../../shared/form-input-select/form-input-select.component';

@Component({
  selector: 'app-form-driver-bank-data',
  templateUrl: './form-driver-bank-data.component.html',
  styleUrls: ['./form-driver-bank-data.component.css']
})
export class FormDriverBankDataComponent {
  @ViewChild('bankRef') bank!: FormInputTextComponent;
  @ViewChild('agencyRef') agency!: FormInputTextComponent;
  @ViewChild('accountRef') account!: FormInputTextComponent;
  @ViewChild('typeRef') type!: FormInputSelectComponent;

  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      bank: [
        '',
        Validators.compose([
          Validators.maxLength(3),
          Validators.minLength(3),
          Validators.required,
        ]),
      ],
      agency: [
        '',
        Validators.compose([
          Validators.minLength(4),
          Validators.maxLength(5),
          Validators.required,
        ]),
      ],
      account: [
        '',
        Validators.compose([
          Validators.minLength(6),
          Validators.maxLength(11),
          Validators.required,
        ]),
      ],
      type: [
        '0',
        Validators.compose([
          Validators.required,
        ]),
      ],
    });
  }

  validate() {
    this.bank.validate('bank');
    this.agency.validate('agency');
    this.account.validate('account');
    this.type.validate('type');
  }

  clear() {
    this.form.controls['bank'].setValue('');
    this.form.controls['agency'].setValue('');
    this.form.controls['account'].setValue('');
    this.form.controls['type'].setValue('0');
  }
}
