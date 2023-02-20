import { Component, EventEmitter, Output } from '@angular/core';
import { Ciudades } from '../../services/ciudades.services';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
})
export class BuscadorComponent {
  @Output() result = new EventEmitter<string>();

  constructor(private ciudades: Ciudades) {}

  recibirValor(event: any, valor: HTMLInputElement) {
    event.preventDefault();
    this.result.emit(valor.value);

    valor.value = '';
    valor.focus();
  }
}
