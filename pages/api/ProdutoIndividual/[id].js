import {ObterUmProduto} from "../../../Servicos/FuncoesMongoDB"
import { useState } from "react";
export default async function (req, res) {
    if (req.method === "GET") {
     
     const result = await ObterUmProduto(req.query.id)
     
    
    res.status(202).json(result)
    }

}