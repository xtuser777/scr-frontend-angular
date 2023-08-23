import { Component, Input, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormInputGroupTextComponent } from '../form-input-group-text/form-input-group-text.component';
import { FormInputSelectComponent } from '../form-input-select/form-input-select.component';
import { IError } from 'src/app/pages/configuration/parameterization/parameterization.component';

@Component({
  selector: 'app-form-auth-data',
  templateUrl: './form-auth-data.component.html',
  styleUrls: ['./form-auth-data.component.css']
})
export class FormAuthDataComponent {
  @ViewChild('levelRef') level!: FormInputSelectComponent;
  @ViewChild('loginRef') login!: FormInputGroupTextComponent;
  @ViewChild('passwordRef') password!: FormInputGroupTextComponent;
  @ViewChild('passwordConfirmRef') passwordConfirm!: FormInputGroupTextComponent;
  @Input() type: number = 1;

  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      level: ['0', Validators.compose([
        Validators.required,
      ])],
      login: ['', Validators.compose([
        Validators.minLength(2),
        Validators.required,
      ])],
      password: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(6),
        Validators.required,
      ])],
      passwordConfirm: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(6),
        Validators.required,
      ])],
    });
  }

  validate() {
    if (this.type == 2) this.level.validate('level');
    this.login.validate('login');
    this.password.validate('password');
    this.passwordConfirm.validate('passwordConfirm');
  }

  clear() {
    this.form.controls['level'].setValue('0');
    this.form.controls['login'].setValue('');
    this.form.controls['password'].setValue('');
    this.form.controls['passwordConfirm'].setValue('');
  }
}
