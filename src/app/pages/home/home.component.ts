import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IEvent } from 'src/app/models/event.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public form: FormGroup;
  public events: IEvent[];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      filter: [''],
      date: [''],
      orderType: ['0'],
    });

    this.filterData = this.filterData.bind(this);

    this.events = [];
  }

  handleClick(fn: number) {
    switch(fn) {
      case 1: this.filterData(); break;
      default: alert('Função inválida.'); break;
    }
  }

  filterData() {
    console.log(
      this.form.controls['filter'].value,
      this.form.controls['date'].value,
      this.form.controls['orderType'].value,
    );
  }
}
