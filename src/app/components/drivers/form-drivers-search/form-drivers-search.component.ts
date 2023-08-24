import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-drivers-search',
  templateUrl: './form-drivers-search.component.html',
  styleUrls: ['./form-drivers-search.component.css']
})
export class FormDriversSearchComponent {
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      filter: [''],
      register: [''],
      orderBy: ['1'],
    });
  }
}
