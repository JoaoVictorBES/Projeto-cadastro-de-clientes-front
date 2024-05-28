import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Cliente } from '../modelo/Cliente';
import { ClienteService } from '../servico/cliente.service';

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

  //Variável para visibilade dos botões
  btnCadastro:boolean = true;

  //Json de clientes
  clientes:Cliente[] = [];

  //Declarando o service para utilizar os métodos dele dentro dessa classe
  constructor(private servico:ClienteService){
    this.servico.selecionar()
    .subscribe(retorno => this.clientes = retorno)
  }

  // Método para selecionar os clientes
  selecionar():void{
    
  }

}
