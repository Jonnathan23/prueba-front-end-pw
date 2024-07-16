import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Deuda } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class DatadeudaService {

  constructor(private htt: HttpClient) { }

  listarDeudas(){
    return this.htt.get<Deuda[]>('http://localhost:8080/pruebaSaquicelaJonnathan/electricidad/deudas')
  }

  obtenerDeuda(cedula:any){
    return this.htt.get<Deuda>(`http://localhost:8080/pruebaSaquicelaJonnathan/electricidad/deudas/${cedula}`)
  }
}
