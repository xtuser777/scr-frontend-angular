import { Component, ViewChild } from '@angular/core';
import { FormAuthDataComponent } from 'src/app/components/shared/form-auth-data/form-auth-data.component';
import { FormContactComponent } from 'src/app/components/shared/form-contact/form-contact.component';
import { FormIndividualPersonComponent } from 'src/app/components/shared/form-individual-person/form-individual-person.component';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  @ViewChild('personRef') person!: FormIndividualPersonComponent;
  @ViewChild('contactRef') contact!: FormContactComponent;
  @ViewChild('authRef') auth!: FormAuthDataComponent;

  handleClick(fn: number) {
    switch(fn) {
      case 1: this.save(); break;
      default: alert('Função inválida.'); break;
    }
  }

  save() {
    this.person.validate();
    this.contact.validate();
    this.auth.validate();
  }
}
