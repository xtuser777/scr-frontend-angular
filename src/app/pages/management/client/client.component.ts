import { Component, ViewChild } from '@angular/core';
import { FormClientTypeComponent } from 'src/app/components/client/form-client-type/form-client-type.component';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {
  @ViewChild('typeRef') type!: FormClientTypeComponent;
}
