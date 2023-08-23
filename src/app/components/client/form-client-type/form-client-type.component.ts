import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-client-type',
  templateUrl: './form-client-type.component.html',
  styleUrls: ['./form-client-type.component.css']
})
export class FormClientTypeComponent {
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      type: ['1'],
    });
  }

  clear() {
    this.form.controls['type'].setValue('1');
  }
}
