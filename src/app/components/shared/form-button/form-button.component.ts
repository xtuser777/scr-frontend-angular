import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.css']
})
export class FormButtonComponent {
  @Input() colSm!: string;
  @Input() id!: string;
  @Input() text!: string;
  @Input() parent: any;
  @Input() form!: FormGroup;

  onClick() {
    this.parent.filter();
  }
}
