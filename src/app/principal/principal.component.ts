import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Cliente } from '../modelo/Cliente';
import { ClienteService } from '../servico/cliente.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

  //Objeto tipo cliente
  cliente = new Cliente();

  //Variável para visibilade dos botões
  btnCadastro:boolean = true;

  //Json de clientes
  clientes:Cliente[] = [];

  //Declarando o service para utilizar os métodos dele dentro dessa classe
  constructor(private servico:ClienteService){}

  // Método para selecionar os clientes
  selecionar():void{
    this.servico.selecionar()
    .subscribe(retorno => this.clientes = retorno)
  }

  // Método de inicialização(){
    ngOnInit(){
      this.servico.selecionar()
    }


}
