import { Component, ViewChild } from '@angular/core';
import { FormClientTypeComponent } from 'src/app/components/client/form-client-type/form-client-type.component';
import { FormContactComponent } from 'src/app/components/shared/form-contact/form-contact.component';
import { FormEnterprisePersonComponent } from 'src/app/components/shared/form-enterprise-person/form-enterprise-person.component';
import { FormIndividualPersonComponent } from 'src/app/components/shared/form-individual-person/form-individual-person.component';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {
  @ViewChild('typeRef') clientType!: FormClientTypeComponent;
  @ViewChild('individualPersonRef') individualPerson!: FormIndividualPersonComponent;
  @ViewChild('enterprisePersonRef') enterprisePerson!: FormEnterprisePersonComponent;
  @ViewChild('contactRef') contact!: FormContactComponent;

  type() {
    if (this.clientType) return this.clientType.form.controls['type'].value;
    return '1';
  }

  clear() {
    this.clientType.clear();
    if (this.type() == 1) this.individualPerson.clear();
    else this.enterprisePerson.clear();
    this.contact.clear();
  }

  save() {
    if (this.type() == 1) this.individualPerson.validate();
    else this.enterprisePerson.validate();
    this.contact.validate();
  }
}
