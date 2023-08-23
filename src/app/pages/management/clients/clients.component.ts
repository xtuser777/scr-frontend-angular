import { Component, ViewChild } from '@angular/core';
import { FormClientsSearchComponent } from 'src/app/components/clients/form-clients-search/form-clients-search.component';
import { FormClientsTableComponent } from 'src/app/components/clients/form-clients-table/form-clients-table.component';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {
  @ViewChild('searchRef') search!: FormClientsSearchComponent;
  @ViewChild('tableRef') table!: FormClientsTableComponent;
}
