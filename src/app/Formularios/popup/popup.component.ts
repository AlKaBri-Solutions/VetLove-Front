import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  @Input() mensaje: string = "";
  @Output() cerrar = new EventEmitter<void>();

  cerrarPopup() {
    this.cerrar.emit();
  }
}
