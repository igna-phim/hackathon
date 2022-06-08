import {ObterUmProduto} from "../../../Servicos/FuncoesMongoDB"
export default async function (req, res) {
    if (req.method === "GET") {
     const result = await ObterUmProduto(req.query.id)
     console.log(result)
    res.status(202).json(result)
    }

}