import { Component, ViewChild } from '@angular/core';
import { FormDriverBankDataComponent } from 'src/app/components/driver/form-driver-bank-data/form-driver-bank-data.component';
import { FormDriverDataComponent } from 'src/app/components/driver/form-driver-data/form-driver-data.component';
import { FormContactComponent } from 'src/app/components/shared/form-contact/form-contact.component';
import { FormIndividualPersonComponent } from 'src/app/components/shared/form-individual-person/form-individual-person.component';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent {
  @ViewChild('individualPersonRef') person!: FormIndividualPersonComponent;
  @ViewChild('driverRef') driver!: FormDriverDataComponent;
  @ViewChild('bankDataRef') bankData!: FormDriverBankDataComponent;
  @ViewChild('contactRef') contact!: FormContactComponent;

  clear() {
    this.person.clear();
    this.driver.clear();
    this.bankData.clear();
    this.contact.clear();
  }

  save() {
    this.person.validate();
    this.driver.validate();
    this.bankData.validate();
    this.contact.validate();
  }
}
