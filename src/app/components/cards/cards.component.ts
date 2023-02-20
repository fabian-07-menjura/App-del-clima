import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ciudades } from '../../services/ciudades.services';
import { City } from '../../interfaces/citys';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  @Input() resCities!: City[];
  @Output() deleteCard = new EventEmitter<number>();

  constructor(public ciudades: Ciudades) {}

  ngOnInit(): void {
    console.log('llegue');
  }

  eliminarCard(id: number) {
    this.deleteCard.emit(id);
  }
}
