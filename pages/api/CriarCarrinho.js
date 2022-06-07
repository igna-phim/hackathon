import { criarCarrinho } from "../../Servicos/FuncoesMongoDB"
export default async function (req, res) {
    if (req.method === "POST") {
        // o nomeDoJogador para um array com o nome do jogador
        const result = await criarCarrinho(req.body)
        res.status(202).json({ mesage:"Carrinho criado" })
    }

}