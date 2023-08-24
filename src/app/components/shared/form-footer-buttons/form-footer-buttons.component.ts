import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-footer-buttons',
  templateUrl: './form-footer-buttons.component.html',
  styleUrls: ['./form-footer-buttons.component.css']
})
export class FormFooterButtonsComponent {
  @Input() parent!: any;
  @Input() clear!: boolean;
  @Input() save!: boolean;

  handleClick(fn: number) {
    switch(fn) {
      case 1: this.parent.save(); break;
      case 2: this.parent.clear(); break;
      default: alert('Função inválida.'); break;
    }
  }
}
