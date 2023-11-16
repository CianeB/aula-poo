// let gato = {
//     nome:"Bisqüim",
//     apelido:"Lindinho",
//     idade:3,
//     chamar () {
//         console.log(this.apelido)
// }
//     }

//     gato.chamar()

import { Banco } from "./classe/banco"
import { transaction } from "./classe/banc"

// const banco = new Banco("Bradesco", 100)

// const tr1 = new transaction(100, "12381jha", "321iu321u")
// console.log(tr1)
// // banco.bancoMovimento()

// const ba1 = new Banco("Luciane", 1000, )
// const tr1 = new transaction(2000, "", "nsdlnas1")

// function realizaTransacao (nome1: string, nome2: string, valor: number) {
//     const tr = new transaction(valor, nome1, nome2)
//     return tr
// }


// transacao
// this.valor = valorFornecido
// this.idDestinatario = idDestinatarioFornecido
// this.idRemetente = idRemetenteFornecido
// this.dataDeCriacao = new Date()

// banco
// this.nome = nomeFornecido
// this.saldo = saldoFornecido
// this.senha = 121212


//     export class empresa {
//         nome: string
//         matricula: number
//         salario: number
//     constructor(nome: string, matricula: number, salario: number){
//         this.nome = nome
//         this.matricula = matricula
//         this.salario = salario
//     }
//     promocao() {
//         console.log(this.nome + "promovido")
//     }
// }

// class fucionario extends empresa {
//     cargo: string
//     constructor(nome: string, matricula: number, salario: number, cargoDoFuncionario: string){
//         super(nome, matricula, salario)
//         this.cargo = cargoDoFuncionario
//     }

    

// }


// const em = new empresa{Luciane, 332, 1000)

//  const produto = {
//     nome:"mala",
//     quantidade: 1,
//     preco: 100,
//     vender(){
//         console.log("produto vendido")
//     }, 
//     aumento (acrescimo:number){
//         this.preco +=acrescimo
//         console.log("valor da mala e", produto)

//     }
// }

// produto.vender()
// produto.aumento(15)


// class Pessoa {
//   private nome: string;
//   private idade: number;
//   private sexo: string;
//   private endereco: string;
  
//   constructor(nome: string, idade: number, sexo: string, endereco: string) {
//     this.nome = nome;
//     this.idade = idade;
//     this.sexo = sexo;
//     this.endereco = endereco;
//   }

//   //Método para acessaros atributos:

//   getNone(): string {
//       return this.nome;
//   }

//   getIdade() {
//     return this.idade;
//   }

//   getSexo(): string {
//     return this.sexo;
//   }

//   getEndereco(): string {
//     return this.endereco;
//   }

//   //Método para alterar os atributos:
//   setNome(novoNome: string): void {
//     this.nome = novoNome;
//   }

//   setIdade(novaIdade: number): void {
//     this.idade = novaIdade;
//   }

//   setSexo(novoSexo: string): void {
//     this.sexo = novoSexo
//   } 

//   setEndereco(novoEndereco: string): void{
//     this.endereco = novoEndereco
//   }
// } 

// // Ex. de uso da Classe Pessoa
// let pessoa = new Pessoa('Pedro', 45, 'masculino', 'R Felicidade')
//     console.log('Nome: ${pessoa.getNome()}')
//     console.log('Idade: ${pessoa.getIdade()}')
//     console.log('Sexo: ${pessoa.getSexo()}')
//     console.log('Endereco: ${pessoa.getEndereco()}')

// // Aterando Alguns Atributos:
// pessoa.setNome('João');
// pessoa.setIdade(46);
// pessoa.setEndereco('Trav Alegria')

// console.log('---Após alterações---');
// console.log('Nome: ${pessoa.getNome()}')


class caminhao {
    private marca: string;
    private modelo: string;
    private ano: number;
    private valor: number;
    
    constructor(marca: string, modelo: string, ano: number, valor: number) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
      this.valor = valor;
    }
  
  
//  Método para acessaros atributos:
getMarca(): string {
    return this.marca;
}
  
  getModelo(): string {
    return this.modelo;
  }
  
  getAno(): number {
    return this.ano;
  }
  
  getValor(): number {
    return this.valor;
  }
  
  //Método para alterar os atributos:
  setMarca(novaMarca: string): void {
    this.marca = novaMarca
  }

  setModelo(novaModelo: string){
    this.marca = novaModelo
  }

  setAno(novoAno: number){
    this.ano = novoAno
  }

  setValor(novoValor: number){
    this.valor = novoValor
  }
  
}
// Ex. de uso da Classe Caminhao
let caminhao = new Caminhao('Mercedes', 'Baú', 2000, '40000')
    console.log('Marca: ${pessoa.getMarca()}')
    console.log('Modelo: ${pessoa.getModelo()}')
    console.log('Ano: ${pessoa.getAno()}')
    console.log('Valor: ${pessoa.getValor()}')

// Aterando Alguns Atributos:
caminhao.setMarca('Ford');
caminhao.setModelo(2020);
caminhao.setValor('50000');

console.log('---Após alterações---');
console.log('Nome: ${pessoa.getNome()}')


  class Felino {
    private tipo: string;
    private cor: string;
    private tamanho: number;

    constructor(tipo: string, cor: string, tamanho: number) {
      this.tipo = tipo;
      this.cor = cor;
      this.tamanho = tamanho;
  
    }

    getTipo(): string {
        return this.tipo;
    }

    getCor(): string {
        return this.cor;
    }

    getTamanho(): number {
        return this.tamanho;
    }

    //Método para alterar os atributos:   
  setTipo(novoTipo: string): void {
    this.tipo = novoTipo
  }

  setCor(novaCor: string): void {
    this.tipo = novaCor
  }

  setTamanho(novoTamanho: string): void {
    this.tipo = novoTamanho
  }
  }
  
