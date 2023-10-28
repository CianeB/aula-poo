import { Banco } from "./banco"

export class transaction {
    valor: number
    idDestinatario: string
    idRemetente: string
    dataDeCriacao: Date

    constructor(valorFornecido: number,idDestinatarioFornecido: string, idRemetenteFornecido: string) {
        this.valor = valorFornecido
        this.idDestinatario = idDestinatarioFornecido
        this.idRemetente = idRemetenteFornecido
        this.dataDeCriacao = new Date()
}

transactionMovimentacao() {
    console.log(this.valor + this.idDestinatario + this.idRemetente + this.dataDeCriacao)
}
}
