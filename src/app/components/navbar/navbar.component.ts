import { Component, EventEmitter, Output } from '@angular/core';
import { Ciudades } from '../../services/ciudades.services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Output() resultApp = new EventEmitter<string>();

  constructor(public ciudades: Ciudades) {}
  onRecibirResultado(resultado: string) {
    this.resultApp.emit(resultado);
    console.log('pasaste por navbar');
  }
}
