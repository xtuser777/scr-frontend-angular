import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormEmployeeDataComponent } from 'src/app/components/employee/form-employee-data/form-employee-data.component';
import { FormAuthDataComponent } from 'src/app/components/shared/form-auth-data/form-auth-data.component';
import { FormContactComponent } from 'src/app/components/shared/form-contact/form-contact.component';
import { FormIndividualPersonComponent } from 'src/app/components/shared/form-individual-person/form-individual-person.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  @ViewChild('personRef') person!: FormIndividualPersonComponent;
  @ViewChild('employeeRef') employeeData!: FormEmployeeDataComponent;
  @ViewChild('contactRef') contact!: FormContactComponent;
  @ViewChild('authRef') auth!: FormAuthDataComponent;

  ngOnInit(): void {}

  type() {
    if (this.employeeData) return this.employeeData.form.controls['type'].value;
    else return '0';
  }

  handleClick(fn: number) {
    switch(fn) {
      case 1: this.save(); break;
      case 2: this.clear(); break;
      default: alert('Função inválida.'); break;
    }
  }

  clear() {
    this.person.clear();
    this.employeeData.clear();
    this.contact.clear();
    if (this.type() == '1') this.auth.clear();
  }

  save() {
    this.person.validate();
    this.employeeData.validate();
    this.contact.validate();
    if (this.type() == '1') this.auth.validate();
  }
}
