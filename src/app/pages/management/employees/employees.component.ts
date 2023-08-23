import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      filter: [''],
      admission: [''],
      orderBy: ['1'],
    });
  }

  handleClick(fn: number) {
    switch (fn) {
      case 1: this.filterData(); break;
      default: alert('Função inválida.'); break;
    }
  }

  filterData() {
    alert(this.form.controls['filter'].value);
  }
}
