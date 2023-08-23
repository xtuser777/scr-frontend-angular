import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CardTitleComponent } from './components/shared/card-title/card-title.component';
import { FieldsetCardComponent } from './components/shared/fieldset-card/fieldset-card.component';
import { FormInputTextComponent } from './components/shared/form-input-text/form-input-text.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormInputDateComponent } from './components/shared/form-input-date/form-input-date.component';
import { FormInputSelectComponent } from './components/shared/form-input-select/form-input-select.component';
import { FormButtonComponent } from './components/shared/form-button/form-button.component';
import { FormTableComponent } from './components/shared/form-table/form-table.component';
import { MaskDirective } from './directives/mask.directive';
import { ParameterizationComponent } from './pages/configuration/parameterization/parameterization.component';
import { FormInputGroupTextComponent } from './components/shared/form-input-group-text/form-input-group-text.component';
import { FormLinkButtonComponent } from './components/shared/form-link-button/form-link-button.component';
import { FormEnterprisePersonComponent } from './components/shared/form-enterprise-person/form-enterprise-person.component';
import { FormContactComponent } from './components/shared/form-contact/form-contact.component';
import { DataComponent } from './pages/configuration/data/data.component';
import { FormIndividualPersonComponent } from './components/shared/form-individual-person/form-individual-person.component';
import { FormAuthDataComponent } from './components/shared/form-auth-data/form-auth-data.component';
import { EmployeeComponent } from './pages/management/employee/employee.component';
import { EmployeesComponent } from './pages/management/employees/employees.component';
import { FormEmployeeDataComponent } from './components/employee/form-employee-data/form-employee-data.component';
import { ClientsComponent } from './pages/management/clients/clients.component';
import { ClientComponent } from './pages/management/client/client.component';
import { FormClientsSearchComponent } from './components/clients/form-clients-search/form-clients-search.component';
import { FormClientsTableComponent } from './components/clients/form-clients-table/form-clients-table.component';
import { FormClientTypeComponent } from './components/client/form-client-type/form-client-type.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    CardTitleComponent,
    FieldsetCardComponent,
    FormInputTextComponent,
    FormInputDateComponent,
    FormInputSelectComponent,
    FormButtonComponent,
    FormTableComponent,
    MaskDirective,
    ParameterizationComponent,
    FormInputGroupTextComponent,
    FormLinkButtonComponent,
    FormEnterprisePersonComponent,
    FormContactComponent,
    DataComponent,
    FormIndividualPersonComponent,
    FormAuthDataComponent,
    EmployeeComponent,
    EmployeesComponent,
    FormEmployeeDataComponent,
    ClientsComponent,
    ClientComponent,
    FormClientsSearchComponent,
    FormClientsTableComponent,
    FormClientTypeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
