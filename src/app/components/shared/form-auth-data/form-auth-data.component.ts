import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormInputGroupTextComponent } from '../form-input-group-text/form-input-group-text.component';

@Component({
  selector: 'app-form-auth-data',
  templateUrl: './form-auth-data.component.html',
  styleUrls: ['./form-auth-data.component.css']
})
export class FormAuthDataComponent {
  @ViewChild('loginRef') login!: FormInputGroupTextComponent;
  @ViewChild('passwordRef') password!: FormInputGroupTextComponent;
  @ViewChild('passwordConfirmRef') passwordConfirm!: FormInputGroupTextComponent;

  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
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
    this.login.validate('login');
    this.password.validate('password');
    this.passwordConfirm.validate('passwordConfirm');
  }
}
