import {ObterTodosOsProdutos} from "../../Servicos/FuncoesMongoDB"
export default async function (req, res) {
    if (req.method === "GET") {
     const result = await ObterTodosOsProdutos()
    res.status(202).json(result)
    console.log(result)
    }
}