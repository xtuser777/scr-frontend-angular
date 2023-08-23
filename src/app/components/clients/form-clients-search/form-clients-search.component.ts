import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-clients-search',
  templateUrl: './form-clients-search.component.html',
  styleUrls: ['./form-clients-search.component.css']
})
export class FormClientsSearchComponent {
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      filter: [''],
      register: [''],
      orderBy: ['1'],
    });
  }
}
