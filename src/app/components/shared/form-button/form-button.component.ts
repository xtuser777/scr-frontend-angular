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
  @Input() color!: string;
  @Input() label: boolean = false;
  @Input() fn: number = 1;
  @Input() parent: any;

  onClick() {
    this.parent.handleClick(this.fn);
  }
}
