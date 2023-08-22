import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-link-button',
  templateUrl: './form-link-button.component.html',
  styleUrls: ['./form-link-button.component.css']
})
export class FormLinkButtonComponent {
  @Input() colSm!: string;
  @Input() id!: string;
  @Input() text!: string;
  @Input() color!: string;
  @Input() link!: string;
  @Input() label: boolean = false;
}
