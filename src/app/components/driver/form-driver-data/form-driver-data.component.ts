import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormInputTextComponent } from '../../shared/form-input-text/form-input-text.component';

@Component({
  selector: 'app-form-driver-data',
  templateUrl: './form-driver-data.component.html',
  styleUrls: ['./form-driver-data.component.css']
})
export class FormDriverDataComponent {
  @ViewChild('cnhRef') cnh!: FormInputTextComponent;

  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      cnh: [
        '',
        Validators.compose([
          Validators.minLength(11),
          Validators.maxLength(11),
          Validators.required,
        ]),
      ],
    });
  }

  validate() {
    this.cnh.validate('cnh');
  }

  clear() {
    this.form.controls['cnh'].setValue('');
  }
}
