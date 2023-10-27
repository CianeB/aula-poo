// let gato = {
//     nome:"Bisqüim",
//     apelido:"Lindinho",
//     idade:3,
//     chamar () {
//         console.log(this.apelido)
// }
//     }

//     gato.chamar()

class Banco {
    nome: string
    senha: number
    saldo: number

    constructor(nomeFornecido: string, saldoFornecido: number) {
        this.nome = nomeFornecido
        this.saldo = 1
        this.senha = 121212
    }
    bancoMovimento() {
        console.log(this.saldo)
    }

    deposito (v: number){
        this.saldo += v
    }
}

const banco = new Banco("Bradesco", 100)

banco.bancoMovimento()