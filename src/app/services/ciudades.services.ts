import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class Ciudades {
  constructor(private httpClient: HttpClient) {}
  buscarCiudad(ciudad: string) {
    console.log('holaaaaaa');
    return this.httpClient.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=4ae2636d8dfbdc3044bede63951a019b`
    );
  }
}
