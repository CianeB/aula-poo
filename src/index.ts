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

const ba1 = new Banco("Luciane", 1000, )
const tr1 = new transaction(2000, "", "nsdlnas1")

function realizaTransacao (nome1: string, nome2: string, valor: number) {
    const tr = new transaction(valor, nome1, nome2)
    return tr
}


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

 const produto = {
    nome:"mala",
    quantidade: 1,
    preco: 100,
    vender(){
        console.log("produto vendido")
    }, 
    aumento (acrescimo:number){
        this.preco +=acrescimo
        console.log("valor da mala e", produto)

    }
}

produto.vender()
produto.aumento(15)