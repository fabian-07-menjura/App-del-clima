import { Component, OnInit } from '@angular/core';
import { Ciudades } from '../services/ciudades.services';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css'],
})
export class ComponentsComponent implements OnInit {
  resCity: any[] = [];
  constructor(public ciudades: Ciudades) {}
  ngOnInit(): void {}

  onRecibirResultado(resultado: string) {
    this.ciudades.buscarCiudad(resultado).subscribe(
      (res) => {
        if ('name' in res) {
          console.log(res);
          if (this.resCity.length) {
            let x = this.resCity.find((e) => e.name == res.name);
            if (x == undefined) {
              this.resCity.unshift(res);
            }
          } else {
            this.resCity.push(res);
          }
        }
      },

      (err) => alert('ciudad no valida')
    );
  }

  onDeleteCard(id: any) {
    let newArrCity = this.resCity.filter((e) => e.id !== id);
    console.log(newArrCity);
    this.resCity = newArrCity;
  }
}
