import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-proprietaries-search',
  templateUrl: './form-proprietaries-search.component.html',
  styleUrls: ['./form-proprietaries-search.component.css']
})
export class FormProprietariesSearchComponent {
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      filter: [''],
      register: [''],
      orderBy: ['1'],
    });
  }
}
