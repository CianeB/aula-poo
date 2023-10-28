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

const banco = new Banco("Bradesco", 100)

const tr1 = new transaction(100, "12381jha", "321iu321u")
console.log(tr1)
// banco.bancoMovimento()