export class Banco {
    nome: string
    senha: number
    saldo: number

    constructor(nomeFornecido: string, saldoFornecido: number) {
        this.nome = nomeFornecido
        this.saldo = saldoFornecido
        this.senha = 121212
    }
    bancoMovimento() {
        console.log(this.saldo)
        console.log(this.nome)
    }

    deposito (v: number){
        this.saldo += v
    }
}