import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-proprietary-link',
  templateUrl: './form-proprietary-link.component.html',
  styleUrls: ['./form-proprietary-link.component.css']
})
export class FormProprietaryLinkComponent {
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      driver: ['0'],
      type: ['1'],
    });
  }

  clear() {
    this.form.controls['driver'].setValue('0');
    this.form.controls['type'].setValue('1');
  }
}
