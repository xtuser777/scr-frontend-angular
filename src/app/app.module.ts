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
    ParameterizationComponent
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
