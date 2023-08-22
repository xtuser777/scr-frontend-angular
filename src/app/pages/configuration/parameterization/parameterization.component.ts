import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormContactComponent } from 'src/app/components/shared/form-contact/form-contact.component';
import { FormEnterprisePersonComponent } from 'src/app/components/shared/form-enterprise-person/form-enterprise-person.component';
import { FormInputGroupTextComponent } from 'src/app/components/shared/form-input-group-text/form-input-group-text.component';
import { FormInputSelectComponent } from 'src/app/components/shared/form-input-select/form-input-select.component';
import { FormInputTextComponent } from 'src/app/components/shared/form-input-text/form-input-text.component';

export interface IError { valid: boolean; message: string; }

@Component({
  selector: 'app-parameterization',
  templateUrl: './parameterization.component.html',
  styleUrls: ['./parameterization.component.css']
})
export class ParameterizationComponent implements OnInit {
  @ViewChild('enterprisePersonRef') enterprisePerson!: FormEnterprisePersonComponent;
  @ViewChild('contactRef') contact!: FormContactComponent;

  constructor() {
    this.save = this.save.bind(this);
  }

  ngOnInit(): void { }

  handleClick(fn: number) {
    switch(fn) {
      case 1: this.save(); break;
      default: alert('Função inválida.');
    }
  }

  save() {
    this.enterprisePerson.validate();
    this.contact.validate();
  }
}
