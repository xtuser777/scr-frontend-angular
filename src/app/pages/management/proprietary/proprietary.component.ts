import { Component, ViewChild } from '@angular/core';
import { FormProprietaryLinkComponent } from 'src/app/components/proprietary/form-proprietary-link/form-proprietary-link.component';
import { FormContactComponent } from 'src/app/components/shared/form-contact/form-contact.component';
import { FormEnterprisePersonComponent } from 'src/app/components/shared/form-enterprise-person/form-enterprise-person.component';
import { FormIndividualPersonComponent } from 'src/app/components/shared/form-individual-person/form-individual-person.component';

@Component({
  selector: 'app-proprietary',
  templateUrl: './proprietary.component.html',
  styleUrls: ['./proprietary.component.css']
})
export class ProprietaryComponent {
  @ViewChild('linkRef') link!: FormProprietaryLinkComponent;
  @ViewChild('individualPersonRef') individualPerson!: FormIndividualPersonComponent;
  @ViewChild('enterprisePersonRef') enterprisePerson!: FormEnterprisePersonComponent;
  @ViewChild('contactRef') contact!: FormContactComponent;

  type() {
    if (this.link) return this.link.form.controls['type'].value;
    return '1';
  }

  clear() {
    this.link.clear();
    if (this.type() == '1') this.individualPerson.clear();
    else this.enterprisePerson.clear();
    this.contact.clear();
  }

  save() {
    if (this.type() == '1') this.individualPerson.validate();
    else this.enterprisePerson.validate();
    this.contact.validate();
  }
}
