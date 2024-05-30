import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Cliente } from '../modelo/Cliente';
import { ClienteService } from '../servico/cliente.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

  //Objeto tipo cliente
  cliente = new Cliente();

  //Variável para visibilade dos botões
  btnCadastro:boolean = true;

  //Variável para visibilidade da tabela
  tabela:boolean = true;

  //Json de clientes
  clientes:Cliente[] = [];

  //Declarando o service para utilizar os métodos dele dentro dessa classe
  constructor(private servico:ClienteService){}

  // Método para selecionar os clientes
  selecionar():void{
    this.servico.selecionar()
    .subscribe(retorno => this.clientes = retorno)
  }

  //Método de cadastro
  cadastrar():void{
    this.servico.cadastrar(this.cliente)
    .subscribe(retorno => {

      //cadastar o cliente no vetor
      this.clientes.push(retorno);

      //Limpar formulário
      this.cliente = new Cliente();

      //Mensagem
      alert('Cliente cadastrado com sucesso')
    });
  }

  //Métod pra selecionar um cliente específico
  selecionarCliente(posicao:number):void{

    //Selecionar cliente no vetor
    this.cliente = this.clientes [posicao];

    //visibilade dos botoes
    this.btnCadastro =false;

    //visibilidade da tabela
    this.tabela = false;

  }

  // Método de inicialização(){
    ngOnInit(){
      this.selecionar()
    }


}
