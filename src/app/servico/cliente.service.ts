import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../modelo/Cliente';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  //Url da api
  private url:string = 'http://localhost:8080';

  constructor(private http:HttpClient) { }

  // Método p/ selecionar todos os clientes
  selecionar():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.url);
  }

}
