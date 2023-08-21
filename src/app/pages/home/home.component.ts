import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Event, IEvent } from 'src/app/models/event.model';

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

    this.events = [];

    this.events.push(
      new Event(
        {
          id: 0,
          description: 'Pedido de frete 01',
          date: '2023-08-19',
          time: '12:05:02',
          saleOrder: '',
          freightOrder: 'Teste 01',
          author: 'Lucas'
        }
      )
    );

    this.events.push(
      new Event(
        {
          id: 0,
          description: 'Pedido de venda 01',
          date: '2023-08-19',
          time: '15:05:02',
          saleOrder: 'Teste 01',
          freightOrder: '',
          author: 'Lucas'
        }
      )
    );
  }

  filter() {
    console.log(
      this.form.controls['filter'].value,
      this.form.controls['date'].value,
      this.form.controls['orderType'].value,
    );
  }
}
