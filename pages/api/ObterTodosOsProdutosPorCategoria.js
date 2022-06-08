import {ObterTodosOsProdutosPorCategoria} from "../../Servicos/FuncoesMongoDB"
export default async function (req, res) {
    if (req.method === "GET") {
        const {type} = req.query
     const result = await ObterTodosOsProdutosPorCategoria(req.query.type)
    res.status(202).json(result)
    // console.log(result)
    }
}