import {RemoverProduto} from "../../Servicos/FuncoesMongoDB"
export default async function (req, res) {
    if (req.method === "DELETE") {
     const result = await RemoverProduto(req.headers.remove)
    res.status(202).json(result)
    // console.log(result)
    }
}