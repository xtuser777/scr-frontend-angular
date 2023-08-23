import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormInputDateComponent } from '../../shared/form-input-date/form-input-date.component';
import { FormInputSelectComponent } from '../../shared/form-input-select/form-input-select.component';

@Component({
  selector: 'app-form-employee-data',
  templateUrl: './form-employee-data.component.html',
  styleUrls: ['./form-employee-data.component.css']
})
export class FormEmployeeDataComponent implements OnInit {
  @ViewChild('admissionRef') admission!: FormInputDateComponent;
  @ViewChild('typeRef') type!: FormInputSelectComponent;

  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      admission: ['', Validators.compose([
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.required,
      ])],
      type: ['0', Validators.compose([
        Validators.required,
      ])],
    });
  }

  ngOnInit(): void {}

  validate() {
    this.admission.validate('admission');
    this.type.validate('type');
  }

  clear() {
    this.form.controls['admission'].setValue('');
    this.form.controls['type'].setValue('0');
  }
}
